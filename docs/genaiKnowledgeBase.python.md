# `genaiKnowledgeBase` Submodule <a name="`genaiKnowledgeBase` Submodule" id="@cdktf/provider-digitalocean.genaiKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiKnowledgeBase <a name="GenaiKnowledgeBase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base digitalocean_genai_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBase(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  datasources: IResolvable | typing.List[GenaiKnowledgeBaseDatasources],
  embedding_model_uuid: str,
  name: str,
  project_id: str,
  region: str,
  added_to_agent_at: str = None,
  database_id: str = None,
  id: str = None,
  is_public: bool | IResolvable = None,
  last_indexing_job: IResolvable | typing.List[GenaiKnowledgeBaseLastIndexingJob] = None,
  tags: typing.List[str] = None,
  vpc_uuid: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.datasources">datasources</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>]</code> | datasources block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.embeddingModelUuid">embedding_model_uuid</a></code> | <code>str</code> | The unique identifier of the embedding model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the knowledge base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The unique identifier of the project to which the knowledge base belongs. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.addedToAgentAt">added_to_agent_at</a></code> | <code>str</code> | The time when the knowledge base was added to the agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.isPublic">is_public</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates whether the knowledge base is public or private. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.lastIndexingJob">last_indexing_job</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>]</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.vpcUuid">vpc_uuid</a></code> | <code>str</code> | The unique identifier of the VPC to which the knowledge base belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.datasources"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>]

datasources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#datasources GenaiKnowledgeBase#datasources}

---

##### `embedding_model_uuid`<sup>Required</sup> <a name="embedding_model_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.embeddingModelUuid"></a>

- *Type:* str

The unique identifier of the embedding model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#embedding_model_uuid GenaiKnowledgeBase#embedding_model_uuid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.name"></a>

- *Type:* str

The name of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#name GenaiKnowledgeBase#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.projectId"></a>

- *Type:* str

The unique identifier of the project to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#project_id GenaiKnowledgeBase#project_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}.

---

##### `added_to_agent_at`<sup>Optional</sup> <a name="added_to_agent_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.addedToAgentAt"></a>

- *Type:* str

The time when the knowledge base was added to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#added_to_agent_at GenaiKnowledgeBase#added_to_agent_at}

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.databaseId"></a>

- *Type:* str

The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#database_id GenaiKnowledgeBase#database_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.isPublic"></a>

- *Type:* bool | cdktf.IResolvable

Indicates whether the knowledge base is public or private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#is_public GenaiKnowledgeBase#is_public}

---

##### `last_indexing_job`<sup>Optional</sup> <a name="last_indexing_job" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.lastIndexingJob"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>]

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}.

---

##### `vpc_uuid`<sup>Optional</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.vpcUuid"></a>

- *Type:* str

The unique identifier of the VPC to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#vpc_uuid GenaiKnowledgeBase#vpc_uuid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources">put_datasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob">put_last_indexing_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetAddedToAgentAt">reset_added_to_agent_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetDatabaseId">reset_database_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetIsPublic">reset_is_public</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetLastIndexingJob">reset_last_indexing_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetVpcUuid">reset_vpc_uuid</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_datasources` <a name="put_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources"></a>

```python
def put_datasources(
  value: IResolvable | typing.List[GenaiKnowledgeBaseDatasources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>]

---

##### `put_last_indexing_job` <a name="put_last_indexing_job" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob"></a>

```python
def put_last_indexing_job(
  value: IResolvable | typing.List[GenaiKnowledgeBaseLastIndexingJob]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>]

---

##### `reset_added_to_agent_at` <a name="reset_added_to_agent_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetAddedToAgentAt"></a>

```python
def reset_added_to_agent_at() -> None
```

##### `reset_database_id` <a name="reset_database_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetDatabaseId"></a>

```python
def reset_database_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_public` <a name="reset_is_public" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetIsPublic"></a>

```python
def reset_is_public() -> None
```

##### `reset_last_indexing_job` <a name="reset_last_indexing_job" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetLastIndexingJob"></a>

```python
def reset_last_indexing_job() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_uuid` <a name="reset_vpc_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetVpcUuid"></a>

```python
def reset_vpc_uuid() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GenaiKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GenaiKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GenaiKnowledgeBase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GenaiKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenaiKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasources">datasources</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList">GenaiKnowledgeBaseDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJob">last_indexing_job</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList">GenaiKnowledgeBaseLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAtInput">added_to_agent_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasourcesInput">datasources_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuidInput">embedding_model_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublicInput">is_public_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJobInput">last_indexing_job_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuidInput">vpc_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAt">added_to_agent_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuid">embedding_model_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublic">is_public</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuid">vpc_uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasources"></a>

```python
datasources: GenaiKnowledgeBaseDatasourcesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList">GenaiKnowledgeBaseDatasourcesList</a>

---

##### `last_indexing_job`<sup>Required</sup> <a name="last_indexing_job" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJob"></a>

```python
last_indexing_job: GenaiKnowledgeBaseLastIndexingJobList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList">GenaiKnowledgeBaseLastIndexingJobList</a>

---

##### `added_to_agent_at_input`<sup>Optional</sup> <a name="added_to_agent_at_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAtInput"></a>

```python
added_to_agent_at_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `datasources_input`<sup>Optional</sup> <a name="datasources_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasourcesInput"></a>

```python
datasources_input: IResolvable | typing.List[GenaiKnowledgeBaseDatasources]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>]

---

##### `embedding_model_uuid_input`<sup>Optional</sup> <a name="embedding_model_uuid_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuidInput"></a>

```python
embedding_model_uuid_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_public_input`<sup>Optional</sup> <a name="is_public_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublicInput"></a>

```python
is_public_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `last_indexing_job_input`<sup>Optional</sup> <a name="last_indexing_job_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJobInput"></a>

```python
last_indexing_job_input: IResolvable | typing.List[GenaiKnowledgeBaseLastIndexingJob]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_uuid_input`<sup>Optional</sup> <a name="vpc_uuid_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuidInput"></a>

```python
vpc_uuid_input: str
```

- *Type:* str

---

##### `added_to_agent_at`<sup>Required</sup> <a name="added_to_agent_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAt"></a>

```python
added_to_agent_at: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `embedding_model_uuid`<sup>Required</sup> <a name="embedding_model_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuid"></a>

```python
embedding_model_uuid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublic"></a>

```python
is_public: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_uuid`<sup>Required</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuid"></a>

```python
vpc_uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiKnowledgeBaseConfig <a name="GenaiKnowledgeBaseConfig" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  datasources: IResolvable | typing.List[GenaiKnowledgeBaseDatasources],
  embedding_model_uuid: str,
  name: str,
  project_id: str,
  region: str,
  added_to_agent_at: str = None,
  database_id: str = None,
  id: str = None,
  is_public: bool | IResolvable = None,
  last_indexing_job: IResolvable | typing.List[GenaiKnowledgeBaseLastIndexingJob] = None,
  tags: typing.List[str] = None,
  vpc_uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.datasources">datasources</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>]</code> | datasources block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.embeddingModelUuid">embedding_model_uuid</a></code> | <code>str</code> | The unique identifier of the embedding model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.name">name</a></code> | <code>str</code> | The name of the knowledge base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.projectId">project_id</a></code> | <code>str</code> | The unique identifier of the project to which the knowledge base belongs. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.addedToAgentAt">added_to_agent_at</a></code> | <code>str</code> | The time when the knowledge base was added to the agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.databaseId">database_id</a></code> | <code>str</code> | The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.isPublic">is_public</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates whether the knowledge base is public or private. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lastIndexingJob">last_indexing_job</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>]</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.vpcUuid">vpc_uuid</a></code> | <code>str</code> | The unique identifier of the VPC to which the knowledge base belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.datasources"></a>

```python
datasources: IResolvable | typing.List[GenaiKnowledgeBaseDatasources]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>]

datasources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#datasources GenaiKnowledgeBase#datasources}

---

##### `embedding_model_uuid`<sup>Required</sup> <a name="embedding_model_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.embeddingModelUuid"></a>

```python
embedding_model_uuid: str
```

- *Type:* str

The unique identifier of the embedding model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#embedding_model_uuid GenaiKnowledgeBase#embedding_model_uuid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#name GenaiKnowledgeBase#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The unique identifier of the project to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#project_id GenaiKnowledgeBase#project_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}.

---

##### `added_to_agent_at`<sup>Optional</sup> <a name="added_to_agent_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.addedToAgentAt"></a>

```python
added_to_agent_at: str
```

- *Type:* str

The time when the knowledge base was added to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#added_to_agent_at GenaiKnowledgeBase#added_to_agent_at}

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#database_id GenaiKnowledgeBase#database_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.isPublic"></a>

```python
is_public: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Indicates whether the knowledge base is public or private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#is_public GenaiKnowledgeBase#is_public}

---

##### `last_indexing_job`<sup>Optional</sup> <a name="last_indexing_job" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lastIndexingJob"></a>

```python
last_indexing_job: IResolvable | typing.List[GenaiKnowledgeBaseLastIndexingJob]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>]

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}.

---

##### `vpc_uuid`<sup>Optional</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.vpcUuid"></a>

```python
vpc_uuid: str
```

- *Type:* str

The unique identifier of the VPC to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#vpc_uuid GenaiKnowledgeBase#vpc_uuid}

---

### GenaiKnowledgeBaseDatasources <a name="GenaiKnowledgeBaseDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasources(
  file_upload_data_source: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesFileUploadDataSource] = None,
  last_indexing_job: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesLastIndexingJob] = None,
  spaces_data_source: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesSpacesDataSource] = None,
  uuid: str = None,
  web_crawler_data_source: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.fileUploadDataSource">file_upload_data_source</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>]</code> | file_upload_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.lastIndexingJob">last_indexing_job</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>]</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.spacesDataSource">spaces_data_source</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>]</code> | spaces_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.uuid">uuid</a></code> | <code>str</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.webCrawlerDataSource">web_crawler_data_source</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>]</code> | web_crawler_data_source block. |

---

##### `file_upload_data_source`<sup>Optional</sup> <a name="file_upload_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.fileUploadDataSource"></a>

```python
file_upload_data_source: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesFileUploadDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>]

file_upload_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#file_upload_data_source GenaiKnowledgeBase#file_upload_data_source}

---

##### `last_indexing_job`<sup>Optional</sup> <a name="last_indexing_job" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.lastIndexingJob"></a>

```python
last_indexing_job: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesLastIndexingJob]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>]

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `spaces_data_source`<sup>Optional</sup> <a name="spaces_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.spacesDataSource"></a>

```python
spaces_data_source: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesSpacesDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>]

spaces_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#spaces_data_source GenaiKnowledgeBase#spaces_data_source}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

##### `web_crawler_data_source`<sup>Optional</sup> <a name="web_crawler_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.webCrawlerDataSource"></a>

```python
web_crawler_data_source: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>]

web_crawler_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#web_crawler_data_source GenaiKnowledgeBase#web_crawler_data_source}

---

### GenaiKnowledgeBaseDatasourcesFileUploadDataSource <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource(
  original_file_name: str = None,
  size_in_bytes: str = None,
  stored_object_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.originalFileName">original_file_name</a></code> | <code>str</code> | The original name of the uploaded file. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | The size of the file in bytes. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.storedObjectKey">stored_object_key</a></code> | <code>str</code> | The stored object key for the file. |

---

##### `original_file_name`<sup>Optional</sup> <a name="original_file_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.originalFileName"></a>

```python
original_file_name: str
```

- *Type:* str

The original name of the uploaded file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#original_file_name GenaiKnowledgeBase#original_file_name}

---

##### `size_in_bytes`<sup>Optional</sup> <a name="size_in_bytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

The size of the file in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#size_in_bytes GenaiKnowledgeBase#size_in_bytes}

---

##### `stored_object_key`<sup>Optional</sup> <a name="stored_object_key" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.storedObjectKey"></a>

```python
stored_object_key: str
```

- *Type:* str

The stored object key for the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#stored_object_key GenaiKnowledgeBase#stored_object_key}

---

### GenaiKnowledgeBaseDatasourcesLastIndexingJob <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob(
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
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.completedDatasources">completed_datasources</a></code> | <code>typing.Union[int, float]</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.dataSourceUuids">data_source_uuids</a></code> | <code>typing.List[str]</code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.phase">phase</a></code> | <code>str</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.totalDatasources">total_datasources</a></code> | <code>typing.Union[int, float]</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.uuid">uuid</a></code> | <code>str</code> | UUID  of the last indexing job. |

---

##### `completed_datasources`<sup>Optional</sup> <a name="completed_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.completedDatasources"></a>

```python
completed_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}

---

##### `data_source_uuids`<sup>Optional</sup> <a name="data_source_uuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.dataSourceUuids"></a>

```python
data_source_uuids: typing.List[str]
```

- *Type:* typing.List[str]

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}

---

##### `phase`<sup>Optional</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.phase"></a>

```python
phase: str
```

- *Type:* str

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}

---

##### `total_datasources`<sup>Optional</sup> <a name="total_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.totalDatasources"></a>

```python
total_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

### GenaiKnowledgeBaseDatasourcesSpacesDataSource <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource(
  bucket_name: str = None,
  item_path: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.bucketName">bucket_name</a></code> | <code>str</code> | The name of the Spaces bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.itemPath">item_path</a></code> | <code>str</code> | The path to the item in the bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.region">region</a></code> | <code>str</code> | The region of the Spaces bucket. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The name of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#bucket_name GenaiKnowledgeBase#bucket_name}

---

##### `item_path`<sup>Optional</sup> <a name="item_path" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.itemPath"></a>

```python
item_path: str
```

- *Type:* str

The path to the item in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#item_path GenaiKnowledgeBase#item_path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}

---

### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource(
  base_url: str = None,
  crawling_option: str = None,
  embed_media: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.baseUrl">base_url</a></code> | <code>str</code> | The base URL to crawl. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.crawlingOption">crawling_option</a></code> | <code>str</code> | Options for specifying how URLs found on pages should be handled. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.embedMedia">embed_media</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether to embed media content. |

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

The base URL to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#base_url GenaiKnowledgeBase#base_url}

---

##### `crawling_option`<sup>Optional</sup> <a name="crawling_option" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.crawlingOption"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#crawling_option GenaiKnowledgeBase#crawling_option}

---

##### `embed_media`<sup>Optional</sup> <a name="embed_media" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.embedMedia"></a>

```python
embed_media: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether to embed media content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#embed_media GenaiKnowledgeBase#embed_media}

---

### GenaiKnowledgeBaseLastIndexingJob <a name="GenaiKnowledgeBaseLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob(
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
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.completedDatasources">completed_datasources</a></code> | <code>typing.Union[int, float]</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids">data_source_uuids</a></code> | <code>typing.List[str]</code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.phase">phase</a></code> | <code>str</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.totalDatasources">total_datasources</a></code> | <code>typing.Union[int, float]</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.uuid">uuid</a></code> | <code>str</code> | UUID  of the last indexing job. |

---

##### `completed_datasources`<sup>Optional</sup> <a name="completed_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.completedDatasources"></a>

```python
completed_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}

---

##### `data_source_uuids`<sup>Optional</sup> <a name="data_source_uuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids"></a>

```python
data_source_uuids: typing.List[str]
```

- *Type:* typing.List[str]

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}

---

##### `phase`<sup>Optional</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.phase"></a>

```python
phase: str
```

- *Type:* str

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}

---

##### `total_datasources`<sup>Optional</sup> <a name="total_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.totalDatasources"></a>

```python
total_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesFileUploadDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>]

---


### GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetOriginalFileName">reset_original_file_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetSizeInBytes">reset_size_in_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetStoredObjectKey">reset_stored_object_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_original_file_name` <a name="reset_original_file_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetOriginalFileName"></a>

```python
def reset_original_file_name() -> None
```

##### `reset_size_in_bytes` <a name="reset_size_in_bytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetSizeInBytes"></a>

```python
def reset_size_in_bytes() -> None
```

##### `reset_stored_object_key` <a name="reset_stored_object_key" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetStoredObjectKey"></a>

```python
def reset_stored_object_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileNameInput">original_file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytesInput">size_in_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKeyInput">stored_object_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileName">original_file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey">stored_object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `original_file_name_input`<sup>Optional</sup> <a name="original_file_name_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileNameInput"></a>

```python
original_file_name_input: str
```

- *Type:* str

---

##### `size_in_bytes_input`<sup>Optional</sup> <a name="size_in_bytes_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytesInput"></a>

```python
size_in_bytes_input: str
```

- *Type:* str

---

##### `stored_object_key_input`<sup>Optional</sup> <a name="stored_object_key_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKeyInput"></a>

```python
stored_object_key_input: str
```

- *Type:* str

---

##### `original_file_name`<sup>Required</sup> <a name="original_file_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileName"></a>

```python
original_file_name: str
```

- *Type:* str

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

---

##### `stored_object_key`<sup>Required</sup> <a name="stored_object_key" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey"></a>

```python
stored_object_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenaiKnowledgeBaseDatasourcesFileUploadDataSource
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>

---


### GenaiKnowledgeBaseDatasourcesLastIndexingJobList <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJobList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesLastIndexingJob]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>]

---


### GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetCompletedDatasources">reset_completed_datasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetDataSourceUuids">reset_data_source_uuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetPhase">reset_phase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTokens">reset_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTotalDatasources">reset_total_datasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetUuid">reset_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_completed_datasources` <a name="reset_completed_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```python
def reset_completed_datasources() -> None
```

##### `reset_data_source_uuids` <a name="reset_data_source_uuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```python
def reset_data_source_uuids() -> None
```

##### `reset_phase` <a name="reset_phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetPhase"></a>

```python
def reset_phase() -> None
```

##### `reset_tokens` <a name="reset_tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTokens"></a>

```python
def reset_tokens() -> None
```

##### `reset_total_datasources` <a name="reset_total_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTotalDatasources"></a>

```python
def reset_total_datasources() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetUuid"></a>

```python
def reset_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.finishedAt">finished_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid">knowledge_base_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.startedAt">started_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasourcesInput">completed_datasources_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuidsInput">data_source_uuids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phaseInput">phase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokensInput">tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasourcesInput">total_datasources_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasources">completed_datasources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids">data_source_uuids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phase">phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasources">total_datasources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `finished_at`<sup>Required</sup> <a name="finished_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.finishedAt"></a>

```python
finished_at: str
```

- *Type:* str

---

##### `knowledge_base_uuid`<sup>Required</sup> <a name="knowledge_base_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```python
knowledge_base_uuid: str
```

- *Type:* str

---

##### `started_at`<sup>Required</sup> <a name="started_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.startedAt"></a>

```python
started_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `completed_datasources_input`<sup>Optional</sup> <a name="completed_datasources_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```python
completed_datasources_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_uuids_input`<sup>Optional</sup> <a name="data_source_uuids_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```python
data_source_uuids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase_input`<sup>Optional</sup> <a name="phase_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phaseInput"></a>

```python
phase_input: str
```

- *Type:* str

---

##### `tokens_input`<sup>Optional</sup> <a name="tokens_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokensInput"></a>

```python
tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_datasources_input`<sup>Optional</sup> <a name="total_datasources_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```python
total_datasources_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `completed_datasources`<sup>Required</sup> <a name="completed_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasources"></a>

```python
completed_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_uuids`<sup>Required</sup> <a name="data_source_uuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```python
data_source_uuids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phase"></a>

```python
phase: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_datasources`<sup>Required</sup> <a name="total_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasources"></a>

```python
total_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenaiKnowledgeBaseDatasourcesLastIndexingJob
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>

---


### GenaiKnowledgeBaseDatasourcesList <a name="GenaiKnowledgeBaseDatasourcesList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenaiKnowledgeBaseDatasourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenaiKnowledgeBaseDatasources]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>]

---


### GenaiKnowledgeBaseDatasourcesOutputReference <a name="GenaiKnowledgeBaseDatasourcesOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource">put_file_upload_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob">put_last_indexing_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource">put_spaces_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource">put_web_crawler_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetFileUploadDataSource">reset_file_upload_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetLastIndexingJob">reset_last_indexing_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetSpacesDataSource">reset_spaces_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetUuid">reset_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetWebCrawlerDataSource">reset_web_crawler_data_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file_upload_data_source` <a name="put_file_upload_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource"></a>

```python
def put_file_upload_data_source(
  value: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesFileUploadDataSource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>]

---

##### `put_last_indexing_job` <a name="put_last_indexing_job" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob"></a>

```python
def put_last_indexing_job(
  value: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesLastIndexingJob]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>]

---

##### `put_spaces_data_source` <a name="put_spaces_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource"></a>

```python
def put_spaces_data_source(
  value: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesSpacesDataSource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>]

---

##### `put_web_crawler_data_source` <a name="put_web_crawler_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource"></a>

```python
def put_web_crawler_data_source(
  value: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>]

---

##### `reset_file_upload_data_source` <a name="reset_file_upload_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetFileUploadDataSource"></a>

```python
def reset_file_upload_data_source() -> None
```

##### `reset_last_indexing_job` <a name="reset_last_indexing_job" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetLastIndexingJob"></a>

```python
def reset_last_indexing_job() -> None
```

##### `reset_spaces_data_source` <a name="reset_spaces_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetSpacesDataSource"></a>

```python
def reset_spaces_data_source() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetUuid"></a>

```python
def reset_uuid() -> None
```

##### `reset_web_crawler_data_source` <a name="reset_web_crawler_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetWebCrawlerDataSource"></a>

```python
def reset_web_crawler_data_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSource">file_upload_data_source</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList">GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJob">last_indexing_job</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList">GenaiKnowledgeBaseDatasourcesLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSource">spaces_data_source</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList">GenaiKnowledgeBaseDatasourcesSpacesDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSource">web_crawler_data_source</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSourceInput">file_upload_data_source_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJobInput">last_indexing_job_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSourceInput">spaces_data_source_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSourceInput">web_crawler_data_source_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `file_upload_data_source`<sup>Required</sup> <a name="file_upload_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSource"></a>

```python
file_upload_data_source: GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList">GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList</a>

---

##### `last_indexing_job`<sup>Required</sup> <a name="last_indexing_job" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJob"></a>

```python
last_indexing_job: GenaiKnowledgeBaseDatasourcesLastIndexingJobList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList">GenaiKnowledgeBaseDatasourcesLastIndexingJobList</a>

---

##### `spaces_data_source`<sup>Required</sup> <a name="spaces_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSource"></a>

```python
spaces_data_source: GenaiKnowledgeBaseDatasourcesSpacesDataSourceList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList">GenaiKnowledgeBaseDatasourcesSpacesDataSourceList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `web_crawler_data_source`<sup>Required</sup> <a name="web_crawler_data_source" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSource"></a>

```python
web_crawler_data_source: GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList</a>

---

##### `file_upload_data_source_input`<sup>Optional</sup> <a name="file_upload_data_source_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSourceInput"></a>

```python
file_upload_data_source_input: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesFileUploadDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>]

---

##### `last_indexing_job_input`<sup>Optional</sup> <a name="last_indexing_job_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJobInput"></a>

```python
last_indexing_job_input: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesLastIndexingJob]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>]

---

##### `spaces_data_source_input`<sup>Optional</sup> <a name="spaces_data_source_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSourceInput"></a>

```python
spaces_data_source_input: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesSpacesDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>]

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `web_crawler_data_source_input`<sup>Optional</sup> <a name="web_crawler_data_source_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSourceInput"></a>

```python
web_crawler_data_source_input: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenaiKnowledgeBaseDatasources
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>

---


### GenaiKnowledgeBaseDatasourcesSpacesDataSourceList <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesSpacesDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>]

---


### GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetItemPath">reset_item_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_item_path` <a name="reset_item_path" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetItemPath"></a>

```python
def reset_item_path() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPathInput">item_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPath">item_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `item_path_input`<sup>Optional</sup> <a name="item_path_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPathInput"></a>

```python
item_path_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `item_path`<sup>Required</sup> <a name="item_path" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPath"></a>

```python
item_path: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenaiKnowledgeBaseDatasourcesSpacesDataSource
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>

---


### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>]

---


### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetCrawlingOption">reset_crawling_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetEmbedMedia">reset_embed_media</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base_url` <a name="reset_base_url" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_crawling_option` <a name="reset_crawling_option" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetCrawlingOption"></a>

```python
def reset_crawling_option() -> None
```

##### `reset_embed_media` <a name="reset_embed_media" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetEmbedMedia"></a>

```python
def reset_embed_media() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOptionInput">crawling_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMediaInput">embed_media_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption">crawling_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia">embed_media</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `crawling_option_input`<sup>Optional</sup> <a name="crawling_option_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOptionInput"></a>

```python
crawling_option_input: str
```

- *Type:* str

---

##### `embed_media_input`<sup>Optional</sup> <a name="embed_media_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMediaInput"></a>

```python
embed_media_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `crawling_option`<sup>Required</sup> <a name="crawling_option" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```python
crawling_option: str
```

- *Type:* str

---

##### `embed_media`<sup>Required</sup> <a name="embed_media" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```python
embed_media: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>

---


### GenaiKnowledgeBaseLastIndexingJobList <a name="GenaiKnowledgeBaseLastIndexingJobList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenaiKnowledgeBaseLastIndexingJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenaiKnowledgeBaseLastIndexingJob]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>]

---


### GenaiKnowledgeBaseLastIndexingJobOutputReference <a name="GenaiKnowledgeBaseLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import genai_knowledge_base

genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources">reset_completed_datasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids">reset_data_source_uuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase">reset_phase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens">reset_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources">reset_total_datasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid">reset_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_completed_datasources` <a name="reset_completed_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```python
def reset_completed_datasources() -> None
```

##### `reset_data_source_uuids` <a name="reset_data_source_uuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```python
def reset_data_source_uuids() -> None
```

##### `reset_phase` <a name="reset_phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase"></a>

```python
def reset_phase() -> None
```

##### `reset_tokens` <a name="reset_tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens"></a>

```python
def reset_tokens() -> None
```

##### `reset_total_datasources` <a name="reset_total_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources"></a>

```python
def reset_total_datasources() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid"></a>

```python
def reset_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt">finished_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid">knowledge_base_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt">started_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput">completed_datasources_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput">data_source_uuids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput">phase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput">tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput">total_datasources_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources">completed_datasources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids">data_source_uuids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase">phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources">total_datasources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `finished_at`<sup>Required</sup> <a name="finished_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt"></a>

```python
finished_at: str
```

- *Type:* str

---

##### `knowledge_base_uuid`<sup>Required</sup> <a name="knowledge_base_uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```python
knowledge_base_uuid: str
```

- *Type:* str

---

##### `started_at`<sup>Required</sup> <a name="started_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt"></a>

```python
started_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `completed_datasources_input`<sup>Optional</sup> <a name="completed_datasources_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```python
completed_datasources_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_uuids_input`<sup>Optional</sup> <a name="data_source_uuids_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```python
data_source_uuids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase_input`<sup>Optional</sup> <a name="phase_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput"></a>

```python
phase_input: str
```

- *Type:* str

---

##### `tokens_input`<sup>Optional</sup> <a name="tokens_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput"></a>

```python
tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_datasources_input`<sup>Optional</sup> <a name="total_datasources_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```python
total_datasources_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `completed_datasources`<sup>Required</sup> <a name="completed_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources"></a>

```python
completed_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_uuids`<sup>Required</sup> <a name="data_source_uuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```python
data_source_uuids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase"></a>

```python
phase: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_datasources`<sup>Required</sup> <a name="total_datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources"></a>

```python
total_datasources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenaiKnowledgeBaseLastIndexingJob
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>

---



