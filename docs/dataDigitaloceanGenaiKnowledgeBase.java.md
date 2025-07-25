# `dataDigitaloceanGenaiKnowledgeBase` Submodule <a name="`dataDigitaloceanGenaiKnowledgeBase` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiKnowledgeBase <a name="DataDigitaloceanGenaiKnowledgeBase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base digitalocean_genai_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_knowledge_base.DataDigitaloceanGenaiKnowledgeBase;

DataDigitaloceanGenaiKnowledgeBase.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .addedToAgentAt(java.lang.String)
//  .databaseId(java.lang.String)
//  .embeddingModelUuid(java.lang.String)
//  .id(java.lang.String)
//  .isPublic(java.lang.Boolean)
//  .isPublic(IResolvable)
//  .lastIndexingJob(IResolvable)
//  .lastIndexingJob(java.util.List<DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob>)
//  .name(java.lang.String)
//  .projectId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .userId(java.lang.String)
//  .uuid(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.addedToAgentAt">addedToAgentAt</a></code> | <code>java.lang.String</code> | Timestamp when the Knowledge Base was added to the Agent. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Database ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.embeddingModelUuid">embeddingModelUuid</a></code> | <code>java.lang.String</code> | Embedding model UUID for the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the Knowledge Base is public. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.lastIndexingJob">lastIndexingJob</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>></code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Project ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | List of tags. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | User ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.uuid">uuid</a></code> | <code>java.lang.String</code> | UUID of the Knowledge Base. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addedToAgentAt`<sup>Optional</sup> <a name="addedToAgentAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.addedToAgentAt"></a>

- *Type:* java.lang.String

Timestamp when the Knowledge Base was added to the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#added_to_agent_at DataDigitaloceanGenaiKnowledgeBase#added_to_agent_at}

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

Database ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#database_id DataDigitaloceanGenaiKnowledgeBase#database_id}

---

##### `embeddingModelUuid`<sup>Optional</sup> <a name="embeddingModelUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.embeddingModelUuid"></a>

- *Type:* java.lang.String

Embedding model UUID for the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#embedding_model_uuid DataDigitaloceanGenaiKnowledgeBase#embedding_model_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.isPublic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the Knowledge Base is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#is_public DataDigitaloceanGenaiKnowledgeBase#is_public}

---

##### `lastIndexingJob`<sup>Optional</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.lastIndexingJob"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>>

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#last_indexing_job DataDigitaloceanGenaiKnowledgeBase#last_indexing_job}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#name DataDigitaloceanGenaiKnowledgeBase#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Project ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#project_id DataDigitaloceanGenaiKnowledgeBase#project_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#region DataDigitaloceanGenaiKnowledgeBase#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#tags DataDigitaloceanGenaiKnowledgeBase#tags}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

User ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#user_id DataDigitaloceanGenaiKnowledgeBase#user_id}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.uuid"></a>

- *Type:* java.lang.String

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob">putLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetAddedToAgentAt">resetAddedToAgentAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetEmbeddingModelUuid">resetEmbeddingModelUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetLastIndexingJob">resetLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUserId">resetUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLastIndexingJob` <a name="putLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob"></a>

```java
public void putLastIndexingJob(IResolvable OR java.util.List<DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>>

---

##### `resetAddedToAgentAt` <a name="resetAddedToAgentAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetAddedToAgentAt"></a>

```java
public void resetAddedToAgentAt()
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetDatabaseId"></a>

```java
public void resetDatabaseId()
```

##### `resetEmbeddingModelUuid` <a name="resetEmbeddingModelUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetEmbeddingModelUuid"></a>

```java
public void resetEmbeddingModelUuid()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetId"></a>

```java
public void resetId()
```

##### `resetIsPublic` <a name="resetIsPublic" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetIsPublic"></a>

```java
public void resetIsPublic()
```

##### `resetLastIndexingJob` <a name="resetLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetLastIndexingJob"></a>

```java
public void resetLastIndexingJob()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetName"></a>

```java
public void resetName()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUserId"></a>

```java
public void resetUserId()
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUuid"></a>

```java
public void resetUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_knowledge_base.DataDigitaloceanGenaiKnowledgeBase;

DataDigitaloceanGenaiKnowledgeBase.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_knowledge_base.DataDigitaloceanGenaiKnowledgeBase;

DataDigitaloceanGenaiKnowledgeBase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_knowledge_base.DataDigitaloceanGenaiKnowledgeBase;

DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_knowledge_base.DataDigitaloceanGenaiKnowledgeBase;

DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDigitaloceanGenaiKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDigitaloceanGenaiKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJob">lastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAtInput">addedToAgentAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuidInput">embeddingModelUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublicInput">isPublicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJobInput">lastIndexingJobInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAt">addedToAgentAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuid">embeddingModelUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `lastIndexingJob`<sup>Required</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJob"></a>

```java
public DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList getLastIndexingJob();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `addedToAgentAtInput`<sup>Optional</sup> <a name="addedToAgentAtInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAtInput"></a>

```java
public java.lang.String getAddedToAgentAtInput();
```

- *Type:* java.lang.String

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `embeddingModelUuidInput`<sup>Optional</sup> <a name="embeddingModelUuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuidInput"></a>

```java
public java.lang.String getEmbeddingModelUuidInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublicInput"></a>

```java
public java.lang.Object getIsPublicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lastIndexingJobInput`<sup>Optional</sup> <a name="lastIndexingJobInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJobInput"></a>

```java
public java.lang.Object getLastIndexingJobInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `addedToAgentAt`<sup>Required</sup> <a name="addedToAgentAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAt"></a>

```java
public java.lang.String getAddedToAgentAt();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `embeddingModelUuid`<sup>Required</sup> <a name="embeddingModelUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuid"></a>

```java
public java.lang.String getEmbeddingModelUuid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublic"></a>

```java
public java.lang.Object getIsPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiKnowledgeBaseConfig <a name="DataDigitaloceanGenaiKnowledgeBaseConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_knowledge_base.DataDigitaloceanGenaiKnowledgeBaseConfig;

DataDigitaloceanGenaiKnowledgeBaseConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .addedToAgentAt(java.lang.String)
//  .databaseId(java.lang.String)
//  .embeddingModelUuid(java.lang.String)
//  .id(java.lang.String)
//  .isPublic(java.lang.Boolean)
//  .isPublic(IResolvable)
//  .lastIndexingJob(IResolvable)
//  .lastIndexingJob(java.util.List<DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob>)
//  .name(java.lang.String)
//  .projectId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .userId(java.lang.String)
//  .uuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.addedToAgentAt">addedToAgentAt</a></code> | <code>java.lang.String</code> | Timestamp when the Knowledge Base was added to the Agent. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Database ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.embeddingModelUuid">embeddingModelUuid</a></code> | <code>java.lang.String</code> | Embedding model UUID for the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the Knowledge Base is public. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lastIndexingJob">lastIndexingJob</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>></code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Project ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | List of tags. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | User ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.uuid">uuid</a></code> | <code>java.lang.String</code> | UUID of the Knowledge Base. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addedToAgentAt`<sup>Optional</sup> <a name="addedToAgentAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.addedToAgentAt"></a>

```java
public java.lang.String getAddedToAgentAt();
```

- *Type:* java.lang.String

Timestamp when the Knowledge Base was added to the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#added_to_agent_at DataDigitaloceanGenaiKnowledgeBase#added_to_agent_at}

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Database ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#database_id DataDigitaloceanGenaiKnowledgeBase#database_id}

---

##### `embeddingModelUuid`<sup>Optional</sup> <a name="embeddingModelUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.embeddingModelUuid"></a>

```java
public java.lang.String getEmbeddingModelUuid();
```

- *Type:* java.lang.String

Embedding model UUID for the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#embedding_model_uuid DataDigitaloceanGenaiKnowledgeBase#embedding_model_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.isPublic"></a>

```java
public java.lang.Object getIsPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the Knowledge Base is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#is_public DataDigitaloceanGenaiKnowledgeBase#is_public}

---

##### `lastIndexingJob`<sup>Optional</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lastIndexingJob"></a>

```java
public java.lang.Object getLastIndexingJob();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>>

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#last_indexing_job DataDigitaloceanGenaiKnowledgeBase#last_indexing_job}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#name DataDigitaloceanGenaiKnowledgeBase#name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Project ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#project_id DataDigitaloceanGenaiKnowledgeBase#project_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#region DataDigitaloceanGenaiKnowledgeBase#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#tags DataDigitaloceanGenaiKnowledgeBase#tags}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

User ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#user_id DataDigitaloceanGenaiKnowledgeBase#user_id}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}

---

### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_knowledge_base.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob;

DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.builder()
//  .completedDatasources(java.lang.Number)
//  .dataSourceUuids(java.util.List<java.lang.String>)
//  .phase(java.lang.String)
//  .tokens(java.lang.Number)
//  .totalDatasources(java.lang.Number)
//  .uuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.completedDatasources">completedDatasources</a></code> | <code>java.lang.Number</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids">dataSourceUuids</a></code> | <code>java.util.List<java.lang.String></code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.phase">phase</a></code> | <code>java.lang.String</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.totalDatasources">totalDatasources</a></code> | <code>java.lang.Number</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.uuid">uuid</a></code> | <code>java.lang.String</code> | UUID  of the last indexing job. |

---

##### `completedDatasources`<sup>Optional</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.completedDatasources"></a>

```java
public java.lang.Number getCompletedDatasources();
```

- *Type:* java.lang.Number

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#completed_datasources DataDigitaloceanGenaiKnowledgeBase#completed_datasources}

---

##### `dataSourceUuids`<sup>Optional</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids"></a>

```java
public java.util.List<java.lang.String> getDataSourceUuids();
```

- *Type:* java.util.List<java.lang.String>

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#data_source_uuids DataDigitaloceanGenaiKnowledgeBase#data_source_uuids}

---

##### `phase`<sup>Optional</sup> <a name="phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.phase"></a>

```java
public java.lang.String getPhase();
```

- *Type:* java.lang.String

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#phase DataDigitaloceanGenaiKnowledgeBase#phase}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#tokens DataDigitaloceanGenaiKnowledgeBase#tokens}

---

##### `totalDatasources`<sup>Optional</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.totalDatasources"></a>

```java
public java.lang.Number getTotalDatasources();
```

- *Type:* java.lang.Number

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#total_datasources DataDigitaloceanGenaiKnowledgeBase#total_datasources}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_knowledge_base.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList;

new DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get"></a>

```java
public DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>>

---


### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_knowledge_base.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference;

new DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources">resetCompletedDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids">resetDataSourceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase">resetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens">resetTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources">resetTotalDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompletedDatasources` <a name="resetCompletedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```java
public void resetCompletedDatasources()
```

##### `resetDataSourceUuids` <a name="resetDataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```java
public void resetDataSourceUuids()
```

##### `resetPhase` <a name="resetPhase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase"></a>

```java
public void resetPhase()
```

##### `resetTokens` <a name="resetTokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens"></a>

```java
public void resetTokens()
```

##### `resetTotalDatasources` <a name="resetTotalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources"></a>

```java
public void resetTotalDatasources()
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid"></a>

```java
public void resetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt">finishedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt">startedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput">completedDatasourcesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput">dataSourceUuidsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput">phaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput">tokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput">totalDatasourcesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources">completedDatasources</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids">dataSourceUuids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase">phase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources">totalDatasources</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt"></a>

```java
public java.lang.String getFinishedAt();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```java
public java.lang.String getKnowledgeBaseUuid();
```

- *Type:* java.lang.String

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt"></a>

```java
public java.lang.String getStartedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `completedDatasourcesInput`<sup>Optional</sup> <a name="completedDatasourcesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```java
public java.lang.Number getCompletedDatasourcesInput();
```

- *Type:* java.lang.Number

---

##### `dataSourceUuidsInput`<sup>Optional</sup> <a name="dataSourceUuidsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```java
public java.util.List<java.lang.String> getDataSourceUuidsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phaseInput`<sup>Optional</sup> <a name="phaseInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput"></a>

```java
public java.lang.String getPhaseInput();
```

- *Type:* java.lang.String

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput"></a>

```java
public java.lang.Number getTokensInput();
```

- *Type:* java.lang.Number

---

##### `totalDatasourcesInput`<sup>Optional</sup> <a name="totalDatasourcesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```java
public java.lang.Number getTotalDatasourcesInput();
```

- *Type:* java.lang.Number

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `completedDatasources`<sup>Required</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources"></a>

```java
public java.lang.Number getCompletedDatasources();
```

- *Type:* java.lang.Number

---

##### `dataSourceUuids`<sup>Required</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```java
public java.util.List<java.lang.String> getDataSourceUuids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase"></a>

```java
public java.lang.String getPhase();
```

- *Type:* java.lang.String

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

---

##### `totalDatasources`<sup>Required</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources"></a>

```java
public java.lang.Number getTotalDatasources();
```

- *Type:* java.lang.Number

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob</a>

---



