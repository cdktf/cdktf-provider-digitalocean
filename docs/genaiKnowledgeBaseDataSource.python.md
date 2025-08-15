# `genaiKnowledgeBaseDataSource` Submodule <a name="`genaiKnowledgeBaseDataSource` Submodule" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiKnowledgeBaseDataSource <a name="GenaiKnowledgeBaseDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source digitalocean_genai_knowledge_base_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base_data_source

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  knowledge_base_uuid: str,
  id: str = None,
  spaces_data_source: GenaiKnowledgeBaseDataSourceSpacesDataSource = None,
  web_crawler_data_source: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.knowledgeBaseUuid">knowledge_base_uuid</a></code> | <code>str</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.spacesDataSource">spaces_data_source</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | spaces_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.webCrawlerDataSource">web_crawler_data_source</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | web_crawler_data_source block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `knowledge_base_uuid`<sup>Required</sup> <a name="knowledge_base_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.knowledgeBaseUuid"></a>

- *Type:* str

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#knowledge_base_uuid GenaiKnowledgeBaseDataSource#knowledge_base_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spaces_data_source`<sup>Optional</sup> <a name="spaces_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.spacesDataSource"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

spaces_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#spaces_data_source GenaiKnowledgeBaseDataSource#spaces_data_source}

---

##### `web_crawler_data_source`<sup>Optional</sup> <a name="web_crawler_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.webCrawlerDataSource"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

web_crawler_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#web_crawler_data_source GenaiKnowledgeBaseDataSource#web_crawler_data_source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource">put_spaces_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource">put_web_crawler_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetSpacesDataSource">reset_spaces_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetWebCrawlerDataSource">reset_web_crawler_data_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_spaces_data_source` <a name="put_spaces_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource"></a>

```python
def put_spaces_data_source(
  bucket_name: str = None,
  item_path: str = None,
  region: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource.parameter.bucketName"></a>

- *Type:* str

The name of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#bucket_name GenaiKnowledgeBaseDataSource#bucket_name}

---

###### `item_path`<sup>Optional</sup> <a name="item_path" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource.parameter.itemPath"></a>

- *Type:* str

The path to the item in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#item_path GenaiKnowledgeBaseDataSource#item_path}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource.parameter.region"></a>

- *Type:* str

The region of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#region GenaiKnowledgeBaseDataSource#region}

---

##### `put_web_crawler_data_source` <a name="put_web_crawler_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource"></a>

```python
def put_web_crawler_data_source(
  base_url: str = None,
  crawling_option: str = None,
  embed_media: typing.Union[bool, IResolvable] = None
) -> None
```

###### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource.parameter.baseUrl"></a>

- *Type:* str

The base URL to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#base_url GenaiKnowledgeBaseDataSource#base_url}

---

###### `crawling_option`<sup>Optional</sup> <a name="crawling_option" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource.parameter.crawlingOption"></a>

- *Type:* str

Options for specifying how URLs found on pages should be handled.

* UNKNOWN: Default unknown value
* SCOPED: Only include the base URL.
* PATH: Crawl the base URL and linked pages within the URL path.
* DOMAIN: Crawl the base URL and linked pages within the same domain.
* SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#crawling_option GenaiKnowledgeBaseDataSource#crawling_option}

---

###### `embed_media`<sup>Optional</sup> <a name="embed_media" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource.parameter.embedMedia"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to embed media content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#embed_media GenaiKnowledgeBaseDataSource#embed_media}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_spaces_data_source` <a name="reset_spaces_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetSpacesDataSource"></a>

```python
def reset_spaces_data_source() -> None
```

##### `reset_web_crawler_data_source` <a name="reset_web_crawler_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetWebCrawlerDataSource"></a>

```python
def reset_web_crawler_data_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GenaiKnowledgeBaseDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base_data_source

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base_data_source

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base_data_source

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base_data_source

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GenaiKnowledgeBaseDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GenaiKnowledgeBaseDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GenaiKnowledgeBaseDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenaiKnowledgeBaseDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSource">spaces_data_source</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference">GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSource">web_crawler_data_source</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference">GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuidInput">knowledge_base_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSourceInput">spaces_data_source_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSourceInput">web_crawler_data_source_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuid">knowledge_base_uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `spaces_data_source`<sup>Required</sup> <a name="spaces_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSource"></a>

```python
spaces_data_source: GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference">GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference</a>

---

##### `web_crawler_data_source`<sup>Required</sup> <a name="web_crawler_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSource"></a>

```python
web_crawler_data_source: GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference">GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `knowledge_base_uuid_input`<sup>Optional</sup> <a name="knowledge_base_uuid_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuidInput"></a>

```python
knowledge_base_uuid_input: str
```

- *Type:* str

---

##### `spaces_data_source_input`<sup>Optional</sup> <a name="spaces_data_source_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSourceInput"></a>

```python
spaces_data_source_input: GenaiKnowledgeBaseDataSourceSpacesDataSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

---

##### `web_crawler_data_source_input`<sup>Optional</sup> <a name="web_crawler_data_source_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSourceInput"></a>

```python
web_crawler_data_source_input: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `knowledge_base_uuid`<sup>Required</sup> <a name="knowledge_base_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuid"></a>

```python
knowledge_base_uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiKnowledgeBaseDataSourceConfig <a name="GenaiKnowledgeBaseDataSourceConfig" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base_data_source

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  knowledge_base_uuid: str,
  id: str = None,
  spaces_data_source: GenaiKnowledgeBaseDataSourceSpacesDataSource = None,
  web_crawler_data_source: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.knowledgeBaseUuid">knowledge_base_uuid</a></code> | <code>str</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.spacesDataSource">spaces_data_source</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | spaces_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.webCrawlerDataSource">web_crawler_data_source</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | web_crawler_data_source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `knowledge_base_uuid`<sup>Required</sup> <a name="knowledge_base_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.knowledgeBaseUuid"></a>

```python
knowledge_base_uuid: str
```

- *Type:* str

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#knowledge_base_uuid GenaiKnowledgeBaseDataSource#knowledge_base_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spaces_data_source`<sup>Optional</sup> <a name="spaces_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.spacesDataSource"></a>

```python
spaces_data_source: GenaiKnowledgeBaseDataSourceSpacesDataSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

spaces_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#spaces_data_source GenaiKnowledgeBaseDataSource#spaces_data_source}

---

##### `web_crawler_data_source`<sup>Optional</sup> <a name="web_crawler_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.webCrawlerDataSource"></a>

```python
web_crawler_data_source: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

web_crawler_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#web_crawler_data_source GenaiKnowledgeBaseDataSource#web_crawler_data_source}

---

### GenaiKnowledgeBaseDataSourceSpacesDataSource <a name="GenaiKnowledgeBaseDataSourceSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base_data_source

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource(
  bucket_name: str = None,
  item_path: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.bucketName">bucket_name</a></code> | <code>str</code> | The name of the Spaces bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.itemPath">item_path</a></code> | <code>str</code> | The path to the item in the bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.region">region</a></code> | <code>str</code> | The region of the Spaces bucket. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The name of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#bucket_name GenaiKnowledgeBaseDataSource#bucket_name}

---

##### `item_path`<sup>Optional</sup> <a name="item_path" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.itemPath"></a>

```python
item_path: str
```

- *Type:* str

The path to the item in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#item_path GenaiKnowledgeBaseDataSource#item_path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#region GenaiKnowledgeBaseDataSource#region}

---

### GenaiKnowledgeBaseDataSourceWebCrawlerDataSource <a name="GenaiKnowledgeBaseDataSourceWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base_data_source

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource(
  base_url: str = None,
  crawling_option: str = None,
  embed_media: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.baseUrl">base_url</a></code> | <code>str</code> | The base URL to crawl. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.crawlingOption">crawling_option</a></code> | <code>str</code> | Options for specifying how URLs found on pages should be handled. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.embedMedia">embed_media</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to embed media content. |

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

The base URL to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#base_url GenaiKnowledgeBaseDataSource#base_url}

---

##### `crawling_option`<sup>Optional</sup> <a name="crawling_option" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.crawlingOption"></a>

```python
crawling_option: str
```

- *Type:* str

Options for specifying how URLs found on pages should be handled.

* UNKNOWN: Default unknown value
* SCOPED: Only include the base URL.
* PATH: Crawl the base URL and linked pages within the URL path.
* DOMAIN: Crawl the base URL and linked pages within the same domain.
* SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#crawling_option GenaiKnowledgeBaseDataSource#crawling_option}

---

##### `embed_media`<sup>Optional</sup> <a name="embed_media" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.embedMedia"></a>

```python
embed_media: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to embed media content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#embed_media GenaiKnowledgeBaseDataSource#embed_media}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference <a name="GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base_data_source

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetItemPath">reset_item_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_item_path` <a name="reset_item_path" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetItemPath"></a>

```python
def reset_item_path() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPathInput">item_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPath">item_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `item_path_input`<sup>Optional</sup> <a name="item_path_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPathInput"></a>

```python
item_path_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `item_path`<sup>Required</sup> <a name="item_path" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPath"></a>

```python
item_path: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: GenaiKnowledgeBaseDataSourceSpacesDataSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

---


### GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference <a name="GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base_data_source

genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetCrawlingOption">reset_crawling_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetEmbedMedia">reset_embed_media</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base_url` <a name="reset_base_url" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_crawling_option` <a name="reset_crawling_option" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetCrawlingOption"></a>

```python
def reset_crawling_option() -> None
```

##### `reset_embed_media` <a name="reset_embed_media" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetEmbedMedia"></a>

```python
def reset_embed_media() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOptionInput">crawling_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMediaInput">embed_media_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOption">crawling_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMedia">embed_media</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `crawling_option_input`<sup>Optional</sup> <a name="crawling_option_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOptionInput"></a>

```python
crawling_option_input: str
```

- *Type:* str

---

##### `embed_media_input`<sup>Optional</sup> <a name="embed_media_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMediaInput"></a>

```python
embed_media_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `crawling_option`<sup>Required</sup> <a name="crawling_option" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```python
crawling_option: str
```

- *Type:* str

---

##### `embed_media`<sup>Required</sup> <a name="embed_media" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```python
embed_media: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

---



