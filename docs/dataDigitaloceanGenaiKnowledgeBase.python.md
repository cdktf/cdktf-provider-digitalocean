# `dataDigitaloceanGenaiKnowledgeBase` Submodule <a name="`dataDigitaloceanGenaiKnowledgeBase` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiKnowledgeBase <a name="DataDigitaloceanGenaiKnowledgeBase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base digitalocean_genai_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  added_to_agent_at: str = None,
  database_id: str = None,
  embedding_model_uuid: str = None,
  id: str = None,
  is_public: typing.Union[bool, IResolvable] = None,
  last_indexing_job: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob]] = None,
  name: str = None,
  project_id: str = None,
  region: str = None,
  tags: typing.List[str] = None,
  user_id: str = None,
  uuid: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.addedToAgentAt">added_to_agent_at</a></code> | <code>str</code> | Timestamp when the Knowledge Base was added to the Agent. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Database ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.embeddingModelUuid">embedding_model_uuid</a></code> | <code>str</code> | Embedding model UUID for the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the Knowledge Base is public. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.lastIndexingJob">last_indexing_job</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>]]</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Project ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.region">region</a></code> | <code>str</code> | Region of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | List of tags. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | User ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.uuid">uuid</a></code> | <code>str</code> | UUID of the Knowledge Base. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `added_to_agent_at`<sup>Optional</sup> <a name="added_to_agent_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.addedToAgentAt"></a>

- *Type:* str

Timestamp when the Knowledge Base was added to the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#added_to_agent_at DataDigitaloceanGenaiKnowledgeBase#added_to_agent_at}

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.databaseId"></a>

- *Type:* str

Database ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#database_id DataDigitaloceanGenaiKnowledgeBase#database_id}

---

##### `embedding_model_uuid`<sup>Optional</sup> <a name="embedding_model_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.embeddingModelUuid"></a>

- *Type:* str

Embedding model UUID for the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#embedding_model_uuid DataDigitaloceanGenaiKnowledgeBase#embedding_model_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.isPublic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the Knowledge Base is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#is_public DataDigitaloceanGenaiKnowledgeBase#is_public}

---

##### `last_indexing_job`<sup>Optional</sup> <a name="last_indexing_job" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.lastIndexingJob"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>]]

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#last_indexing_job DataDigitaloceanGenaiKnowledgeBase#last_indexing_job}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.name"></a>

- *Type:* str

Name of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#name DataDigitaloceanGenaiKnowledgeBase#name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.projectId"></a>

- *Type:* str

Project ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#project_id DataDigitaloceanGenaiKnowledgeBase#project_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.region"></a>

- *Type:* str

Region of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#region DataDigitaloceanGenaiKnowledgeBase#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#tags DataDigitaloceanGenaiKnowledgeBase#tags}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.userId"></a>

- *Type:* str

User ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#user_id DataDigitaloceanGenaiKnowledgeBase#user_id}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.uuid"></a>

- *Type:* str

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob">put_last_indexing_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetAddedToAgentAt">reset_added_to_agent_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetDatabaseId">reset_database_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetEmbeddingModelUuid">reset_embedding_model_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetIsPublic">reset_is_public</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetLastIndexingJob">reset_last_indexing_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUserId">reset_user_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUuid">reset_uuid</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_last_indexing_job` <a name="put_last_indexing_job" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob"></a>

```python
def put_last_indexing_job(
  value: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>]]

---

##### `reset_added_to_agent_at` <a name="reset_added_to_agent_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetAddedToAgentAt"></a>

```python
def reset_added_to_agent_at() -> None
```

##### `reset_database_id` <a name="reset_database_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetDatabaseId"></a>

```python
def reset_database_id() -> None
```

##### `reset_embedding_model_uuid` <a name="reset_embedding_model_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetEmbeddingModelUuid"></a>

```python
def reset_embedding_model_uuid() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_public` <a name="reset_is_public" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetIsPublic"></a>

```python
def reset_is_public() -> None
```

##### `reset_last_indexing_job` <a name="reset_last_indexing_job" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetLastIndexingJob"></a>

```python
def reset_last_indexing_job() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUserId"></a>

```python
def reset_user_id() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUuid"></a>

```python
def reset_uuid() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanGenaiKnowledgeBase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanGenaiKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJob">last_indexing_job</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAtInput">added_to_agent_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuidInput">embedding_model_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublicInput">is_public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJobInput">last_indexing_job_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAt">added_to_agent_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuid">embedding_model_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `last_indexing_job`<sup>Required</sup> <a name="last_indexing_job" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJob"></a>

```python
last_indexing_job: DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `added_to_agent_at_input`<sup>Optional</sup> <a name="added_to_agent_at_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAtInput"></a>

```python
added_to_agent_at_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `embedding_model_uuid_input`<sup>Optional</sup> <a name="embedding_model_uuid_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuidInput"></a>

```python
embedding_model_uuid_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_public_input`<sup>Optional</sup> <a name="is_public_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublicInput"></a>

```python
is_public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `last_indexing_job_input`<sup>Optional</sup> <a name="last_indexing_job_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJobInput"></a>

```python
last_indexing_job_input: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `added_to_agent_at`<sup>Required</sup> <a name="added_to_agent_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAt"></a>

```python
added_to_agent_at: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `embedding_model_uuid`<sup>Required</sup> <a name="embedding_model_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuid"></a>

```python
embedding_model_uuid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiKnowledgeBaseConfig <a name="DataDigitaloceanGenaiKnowledgeBaseConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  added_to_agent_at: str = None,
  database_id: str = None,
  embedding_model_uuid: str = None,
  id: str = None,
  is_public: typing.Union[bool, IResolvable] = None,
  last_indexing_job: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob]] = None,
  name: str = None,
  project_id: str = None,
  region: str = None,
  tags: typing.List[str] = None,
  user_id: str = None,
  uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.addedToAgentAt">added_to_agent_at</a></code> | <code>str</code> | Timestamp when the Knowledge Base was added to the Agent. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.databaseId">database_id</a></code> | <code>str</code> | Database ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.embeddingModelUuid">embedding_model_uuid</a></code> | <code>str</code> | Embedding model UUID for the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the Knowledge Base is public. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lastIndexingJob">last_indexing_job</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>]]</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.name">name</a></code> | <code>str</code> | Name of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.projectId">project_id</a></code> | <code>str</code> | Project ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.region">region</a></code> | <code>str</code> | Region of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | List of tags. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.userId">user_id</a></code> | <code>str</code> | User ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.uuid">uuid</a></code> | <code>str</code> | UUID of the Knowledge Base. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `added_to_agent_at`<sup>Optional</sup> <a name="added_to_agent_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.addedToAgentAt"></a>

```python
added_to_agent_at: str
```

- *Type:* str

Timestamp when the Knowledge Base was added to the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#added_to_agent_at DataDigitaloceanGenaiKnowledgeBase#added_to_agent_at}

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Database ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#database_id DataDigitaloceanGenaiKnowledgeBase#database_id}

---

##### `embedding_model_uuid`<sup>Optional</sup> <a name="embedding_model_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.embeddingModelUuid"></a>

```python
embedding_model_uuid: str
```

- *Type:* str

Embedding model UUID for the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#embedding_model_uuid DataDigitaloceanGenaiKnowledgeBase#embedding_model_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the Knowledge Base is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#is_public DataDigitaloceanGenaiKnowledgeBase#is_public}

---

##### `last_indexing_job`<sup>Optional</sup> <a name="last_indexing_job" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lastIndexingJob"></a>

```python
last_indexing_job: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>]]

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#last_indexing_job DataDigitaloceanGenaiKnowledgeBase#last_indexing_job}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#name DataDigitaloceanGenaiKnowledgeBase#name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#project_id DataDigitaloceanGenaiKnowledgeBase#project_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#region DataDigitaloceanGenaiKnowledgeBase#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#tags DataDigitaloceanGenaiKnowledgeBase#tags}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

User ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#user_id DataDigitaloceanGenaiKnowledgeBase#user_id}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}

---

### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob(
  completed_datasources: typing.Union[int, float] = None,
  data_source_uuids: typing.List[str] = None,
  phase: str = None,
  tokens: typing.Union[int, float] = None,
  total_datasources: typing.Union[int, float] = None,
  uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.completedDatasources">completed_datasources</a></code> | <code>typing.Union[int, float]</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids">data_source_uuids</a></code> | <code>typing.List[str]</code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.phase">phase</a></code> | <code>str</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.totalDatasources">total_datasources</a></code> | <code>typing.Union[int, float]</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.uuid">uuid</a></code> | <code>str</code> | UUID  of the last indexing job. |

---

##### `completed_datasources`<sup>Optional</sup> <a name="completed_datasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.completedDatasources"></a>

```python
completed_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#completed_datasources DataDigitaloceanGenaiKnowledgeBase#completed_datasources}

---

##### `data_source_uuids`<sup>Optional</sup> <a name="data_source_uuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids"></a>

```python
data_source_uuids: typing.List[str]
```

- *Type:* typing.List[str]

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#data_source_uuids DataDigitaloceanGenaiKnowledgeBase#data_source_uuids}

---

##### `phase`<sup>Optional</sup> <a name="phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.phase"></a>

```python
phase: str
```

- *Type:* str

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#phase DataDigitaloceanGenaiKnowledgeBase#phase}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#tokens DataDigitaloceanGenaiKnowledgeBase#tokens}

---

##### `total_datasources`<sup>Optional</sup> <a name="total_datasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.totalDatasources"></a>

```python
total_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#total_datasources DataDigitaloceanGenaiKnowledgeBase#total_datasources}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>]]

---


### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_genai_knowledge_base

dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources">reset_completed_datasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids">reset_data_source_uuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase">reset_phase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens">reset_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources">reset_total_datasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid">reset_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_completed_datasources` <a name="reset_completed_datasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```python
def reset_completed_datasources() -> None
```

##### `reset_data_source_uuids` <a name="reset_data_source_uuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```python
def reset_data_source_uuids() -> None
```

##### `reset_phase` <a name="reset_phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase"></a>

```python
def reset_phase() -> None
```

##### `reset_tokens` <a name="reset_tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens"></a>

```python
def reset_tokens() -> None
```

##### `reset_total_datasources` <a name="reset_total_datasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources"></a>

```python
def reset_total_datasources() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid"></a>

```python
def reset_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt">finished_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid">knowledge_base_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt">started_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput">completed_datasources_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput">data_source_uuids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput">phase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput">tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput">total_datasources_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources">completed_datasources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids">data_source_uuids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase">phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources">total_datasources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `finished_at`<sup>Required</sup> <a name="finished_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt"></a>

```python
finished_at: str
```

- *Type:* str

---

##### `knowledge_base_uuid`<sup>Required</sup> <a name="knowledge_base_uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```python
knowledge_base_uuid: str
```

- *Type:* str

---

##### `started_at`<sup>Required</sup> <a name="started_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt"></a>

```python
started_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `completed_datasources_input`<sup>Optional</sup> <a name="completed_datasources_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```python
completed_datasources_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_uuids_input`<sup>Optional</sup> <a name="data_source_uuids_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```python
data_source_uuids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase_input`<sup>Optional</sup> <a name="phase_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput"></a>

```python
phase_input: str
```

- *Type:* str

---

##### `tokens_input`<sup>Optional</sup> <a name="tokens_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput"></a>

```python
tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_datasources_input`<sup>Optional</sup> <a name="total_datasources_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```python
total_datasources_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `completed_datasources`<sup>Required</sup> <a name="completed_datasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources"></a>

```python
completed_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_uuids`<sup>Required</sup> <a name="data_source_uuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```python
data_source_uuids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase"></a>

```python
phase: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_datasources`<sup>Required</sup> <a name="total_datasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources"></a>

```python
total_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>]

---



