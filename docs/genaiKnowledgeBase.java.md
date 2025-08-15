# `genaiKnowledgeBase` Submodule <a name="`genaiKnowledgeBase` Submodule" id="@cdktf/provider-digitalocean.genaiKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiKnowledgeBase <a name="GenaiKnowledgeBase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base digitalocean_genai_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBase;

GenaiKnowledgeBase.Builder.create(Construct scope, java.lang.String id)
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
    .datasources(IResolvable)
    .datasources(java.util.List<GenaiKnowledgeBaseDatasources>)
    .embeddingModelUuid(java.lang.String)
    .name(java.lang.String)
    .projectId(java.lang.String)
    .region(java.lang.String)
//  .addedToAgentAt(java.lang.String)
//  .databaseId(java.lang.String)
//  .id(java.lang.String)
//  .isPublic(java.lang.Boolean)
//  .isPublic(IResolvable)
//  .lastIndexingJob(IResolvable)
//  .lastIndexingJob(java.util.List<GenaiKnowledgeBaseLastIndexingJob>)
//  .tags(java.util.List<java.lang.String>)
//  .vpcUuid(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.datasources">datasources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>></code> | datasources block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.embeddingModelUuid">embeddingModelUuid</a></code> | <code>java.lang.String</code> | The unique identifier of the embedding model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the knowledge base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The unique identifier of the project to which the knowledge base belongs. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.addedToAgentAt">addedToAgentAt</a></code> | <code>java.lang.String</code> | The time when the knowledge base was added to the agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the knowledge base is public or private. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.lastIndexingJob">lastIndexingJob</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>></code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | The unique identifier of the VPC to which the knowledge base belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.datasources"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>>

datasources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#datasources GenaiKnowledgeBase#datasources}

---

##### `embeddingModelUuid`<sup>Required</sup> <a name="embeddingModelUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.embeddingModelUuid"></a>

- *Type:* java.lang.String

The unique identifier of the embedding model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#embedding_model_uuid GenaiKnowledgeBase#embedding_model_uuid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#name GenaiKnowledgeBase#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The unique identifier of the project to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#project_id GenaiKnowledgeBase#project_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}.

---

##### `addedToAgentAt`<sup>Optional</sup> <a name="addedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.addedToAgentAt"></a>

- *Type:* java.lang.String

The time when the knowledge base was added to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#added_to_agent_at GenaiKnowledgeBase#added_to_agent_at}

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#database_id GenaiKnowledgeBase#database_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.isPublic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the knowledge base is public or private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#is_public GenaiKnowledgeBase#is_public}

---

##### `lastIndexingJob`<sup>Optional</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.lastIndexingJob"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>>

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}.

---

##### `vpcUuid`<sup>Optional</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.vpcUuid"></a>

- *Type:* java.lang.String

The unique identifier of the VPC to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#vpc_uuid GenaiKnowledgeBase#vpc_uuid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources">putDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob">putLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetAddedToAgentAt">resetAddedToAgentAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetLastIndexingJob">resetLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetVpcUuid">resetVpcUuid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatasources` <a name="putDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources"></a>

```java
public void putDatasources(IResolvable OR java.util.List<GenaiKnowledgeBaseDatasources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>>

---

##### `putLastIndexingJob` <a name="putLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob"></a>

```java
public void putLastIndexingJob(IResolvable OR java.util.List<GenaiKnowledgeBaseLastIndexingJob> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>>

---

##### `resetAddedToAgentAt` <a name="resetAddedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetAddedToAgentAt"></a>

```java
public void resetAddedToAgentAt()
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetDatabaseId"></a>

```java
public void resetDatabaseId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetId"></a>

```java
public void resetId()
```

##### `resetIsPublic` <a name="resetIsPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetIsPublic"></a>

```java
public void resetIsPublic()
```

##### `resetLastIndexingJob` <a name="resetLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetLastIndexingJob"></a>

```java
public void resetLastIndexingJob()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcUuid` <a name="resetVpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetVpcUuid"></a>

```java
public void resetVpcUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBase;

GenaiKnowledgeBase.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBase;

GenaiKnowledgeBase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBase;

GenaiKnowledgeBase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBase;

GenaiKnowledgeBase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GenaiKnowledgeBase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GenaiKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GenaiKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GenaiKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GenaiKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasources">datasources</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList">GenaiKnowledgeBaseDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJob">lastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList">GenaiKnowledgeBaseLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAtInput">addedToAgentAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasourcesInput">datasourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuidInput">embeddingModelUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublicInput">isPublicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJobInput">lastIndexingJobInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuidInput">vpcUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAt">addedToAgentAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuid">embeddingModelUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasources"></a>

```java
public GenaiKnowledgeBaseDatasourcesList getDatasources();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList">GenaiKnowledgeBaseDatasourcesList</a>

---

##### `lastIndexingJob`<sup>Required</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJob"></a>

```java
public GenaiKnowledgeBaseLastIndexingJobList getLastIndexingJob();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList">GenaiKnowledgeBaseLastIndexingJobList</a>

---

##### `addedToAgentAtInput`<sup>Optional</sup> <a name="addedToAgentAtInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAtInput"></a>

```java
public java.lang.String getAddedToAgentAtInput();
```

- *Type:* java.lang.String

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `datasourcesInput`<sup>Optional</sup> <a name="datasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasourcesInput"></a>

```java
public java.lang.Object getDatasourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>>

---

##### `embeddingModelUuidInput`<sup>Optional</sup> <a name="embeddingModelUuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuidInput"></a>

```java
public java.lang.String getEmbeddingModelUuidInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublicInput"></a>

```java
public java.lang.Object getIsPublicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lastIndexingJobInput`<sup>Optional</sup> <a name="lastIndexingJobInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJobInput"></a>

```java
public java.lang.Object getLastIndexingJobInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcUuidInput`<sup>Optional</sup> <a name="vpcUuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuidInput"></a>

```java
public java.lang.String getVpcUuidInput();
```

- *Type:* java.lang.String

---

##### `addedToAgentAt`<sup>Required</sup> <a name="addedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAt"></a>

```java
public java.lang.String getAddedToAgentAt();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `embeddingModelUuid`<sup>Required</sup> <a name="embeddingModelUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuid"></a>

```java
public java.lang.String getEmbeddingModelUuid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublic"></a>

```java
public java.lang.Object getIsPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuid"></a>

```java
public java.lang.String getVpcUuid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiKnowledgeBaseConfig <a name="GenaiKnowledgeBaseConfig" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseConfig;

GenaiKnowledgeBaseConfig.builder()
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
    .datasources(IResolvable)
    .datasources(java.util.List<GenaiKnowledgeBaseDatasources>)
    .embeddingModelUuid(java.lang.String)
    .name(java.lang.String)
    .projectId(java.lang.String)
    .region(java.lang.String)
//  .addedToAgentAt(java.lang.String)
//  .databaseId(java.lang.String)
//  .id(java.lang.String)
//  .isPublic(java.lang.Boolean)
//  .isPublic(IResolvable)
//  .lastIndexingJob(IResolvable)
//  .lastIndexingJob(java.util.List<GenaiKnowledgeBaseLastIndexingJob>)
//  .tags(java.util.List<java.lang.String>)
//  .vpcUuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.datasources">datasources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>></code> | datasources block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.embeddingModelUuid">embeddingModelUuid</a></code> | <code>java.lang.String</code> | The unique identifier of the embedding model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the knowledge base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The unique identifier of the project to which the knowledge base belongs. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.addedToAgentAt">addedToAgentAt</a></code> | <code>java.lang.String</code> | The time when the knowledge base was added to the agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the knowledge base is public or private. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lastIndexingJob">lastIndexingJob</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>></code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | The unique identifier of the VPC to which the knowledge base belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.datasources"></a>

```java
public java.lang.Object getDatasources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>>

datasources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#datasources GenaiKnowledgeBase#datasources}

---

##### `embeddingModelUuid`<sup>Required</sup> <a name="embeddingModelUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.embeddingModelUuid"></a>

```java
public java.lang.String getEmbeddingModelUuid();
```

- *Type:* java.lang.String

The unique identifier of the embedding model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#embedding_model_uuid GenaiKnowledgeBase#embedding_model_uuid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#name GenaiKnowledgeBase#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The unique identifier of the project to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#project_id GenaiKnowledgeBase#project_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}.

---

##### `addedToAgentAt`<sup>Optional</sup> <a name="addedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.addedToAgentAt"></a>

```java
public java.lang.String getAddedToAgentAt();
```

- *Type:* java.lang.String

The time when the knowledge base was added to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#added_to_agent_at GenaiKnowledgeBase#added_to_agent_at}

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#database_id GenaiKnowledgeBase#database_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.isPublic"></a>

```java
public java.lang.Object getIsPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the knowledge base is public or private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#is_public GenaiKnowledgeBase#is_public}

---

##### `lastIndexingJob`<sup>Optional</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lastIndexingJob"></a>

```java
public java.lang.Object getLastIndexingJob();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>>

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}.

---

##### `vpcUuid`<sup>Optional</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.vpcUuid"></a>

```java
public java.lang.String getVpcUuid();
```

- *Type:* java.lang.String

The unique identifier of the VPC to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#vpc_uuid GenaiKnowledgeBase#vpc_uuid}

---

### GenaiKnowledgeBaseDatasources <a name="GenaiKnowledgeBaseDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasources;

GenaiKnowledgeBaseDatasources.builder()
//  .fileUploadDataSource(IResolvable)
//  .fileUploadDataSource(java.util.List<GenaiKnowledgeBaseDatasourcesFileUploadDataSource>)
//  .lastIndexingJob(IResolvable)
//  .lastIndexingJob(java.util.List<GenaiKnowledgeBaseDatasourcesLastIndexingJob>)
//  .spacesDataSource(IResolvable)
//  .spacesDataSource(java.util.List<GenaiKnowledgeBaseDatasourcesSpacesDataSource>)
//  .uuid(java.lang.String)
//  .webCrawlerDataSource(IResolvable)
//  .webCrawlerDataSource(java.util.List<GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.fileUploadDataSource">fileUploadDataSource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>></code> | file_upload_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.lastIndexingJob">lastIndexingJob</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>></code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.spacesDataSource">spacesDataSource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>></code> | spaces_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.uuid">uuid</a></code> | <code>java.lang.String</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.webCrawlerDataSource">webCrawlerDataSource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>></code> | web_crawler_data_source block. |

---

##### `fileUploadDataSource`<sup>Optional</sup> <a name="fileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.fileUploadDataSource"></a>

```java
public java.lang.Object getFileUploadDataSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>>

file_upload_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#file_upload_data_source GenaiKnowledgeBase#file_upload_data_source}

---

##### `lastIndexingJob`<sup>Optional</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.lastIndexingJob"></a>

```java
public java.lang.Object getLastIndexingJob();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>>

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `spacesDataSource`<sup>Optional</sup> <a name="spacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.spacesDataSource"></a>

```java
public java.lang.Object getSpacesDataSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>>

spaces_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#spaces_data_source GenaiKnowledgeBase#spaces_data_source}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

##### `webCrawlerDataSource`<sup>Optional</sup> <a name="webCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.webCrawlerDataSource"></a>

```java
public java.lang.Object getWebCrawlerDataSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>>

web_crawler_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#web_crawler_data_source GenaiKnowledgeBase#web_crawler_data_source}

---

### GenaiKnowledgeBaseDatasourcesFileUploadDataSource <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesFileUploadDataSource;

GenaiKnowledgeBaseDatasourcesFileUploadDataSource.builder()
//  .originalFileName(java.lang.String)
//  .sizeInBytes(java.lang.String)
//  .storedObjectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.originalFileName">originalFileName</a></code> | <code>java.lang.String</code> | The original name of the uploaded file. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.sizeInBytes">sizeInBytes</a></code> | <code>java.lang.String</code> | The size of the file in bytes. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.storedObjectKey">storedObjectKey</a></code> | <code>java.lang.String</code> | The stored object key for the file. |

---

##### `originalFileName`<sup>Optional</sup> <a name="originalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.originalFileName"></a>

```java
public java.lang.String getOriginalFileName();
```

- *Type:* java.lang.String

The original name of the uploaded file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#original_file_name GenaiKnowledgeBase#original_file_name}

---

##### `sizeInBytes`<sup>Optional</sup> <a name="sizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.sizeInBytes"></a>

```java
public java.lang.String getSizeInBytes();
```

- *Type:* java.lang.String

The size of the file in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#size_in_bytes GenaiKnowledgeBase#size_in_bytes}

---

##### `storedObjectKey`<sup>Optional</sup> <a name="storedObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.storedObjectKey"></a>

```java
public java.lang.String getStoredObjectKey();
```

- *Type:* java.lang.String

The stored object key for the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#stored_object_key GenaiKnowledgeBase#stored_object_key}

---

### GenaiKnowledgeBaseDatasourcesLastIndexingJob <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesLastIndexingJob;

GenaiKnowledgeBaseDatasourcesLastIndexingJob.builder()
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
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.completedDatasources">completedDatasources</a></code> | <code>java.lang.Number</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.dataSourceUuids">dataSourceUuids</a></code> | <code>java.util.List<java.lang.String></code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.phase">phase</a></code> | <code>java.lang.String</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.totalDatasources">totalDatasources</a></code> | <code>java.lang.Number</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.uuid">uuid</a></code> | <code>java.lang.String</code> | UUID  of the last indexing job. |

---

##### `completedDatasources`<sup>Optional</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.completedDatasources"></a>

```java
public java.lang.Number getCompletedDatasources();
```

- *Type:* java.lang.Number

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}

---

##### `dataSourceUuids`<sup>Optional</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.dataSourceUuids"></a>

```java
public java.util.List<java.lang.String> getDataSourceUuids();
```

- *Type:* java.util.List<java.lang.String>

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}

---

##### `phase`<sup>Optional</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.phase"></a>

```java
public java.lang.String getPhase();
```

- *Type:* java.lang.String

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}

---

##### `totalDatasources`<sup>Optional</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.totalDatasources"></a>

```java
public java.lang.Number getTotalDatasources();
```

- *Type:* java.lang.Number

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

### GenaiKnowledgeBaseDatasourcesSpacesDataSource <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesSpacesDataSource;

GenaiKnowledgeBaseDatasourcesSpacesDataSource.builder()
//  .bucketName(java.lang.String)
//  .itemPath(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the Spaces bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.itemPath">itemPath</a></code> | <code>java.lang.String</code> | The path to the item in the bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.region">region</a></code> | <code>java.lang.String</code> | The region of the Spaces bucket. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#bucket_name GenaiKnowledgeBase#bucket_name}

---

##### `itemPath`<sup>Optional</sup> <a name="itemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.itemPath"></a>

```java
public java.lang.String getItemPath();
```

- *Type:* java.lang.String

The path to the item in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#item_path GenaiKnowledgeBase#item_path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}

---

### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource;

GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.builder()
//  .baseUrl(java.lang.String)
//  .crawlingOption(java.lang.String)
//  .embedMedia(java.lang.Boolean)
//  .embedMedia(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | The base URL to crawl. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.crawlingOption">crawlingOption</a></code> | <code>java.lang.String</code> | Options for specifying how URLs found on pages should be handled. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.embedMedia">embedMedia</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to embed media content. |

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

The base URL to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#base_url GenaiKnowledgeBase#base_url}

---

##### `crawlingOption`<sup>Optional</sup> <a name="crawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.crawlingOption"></a>

```java
public java.lang.String getCrawlingOption();
```

- *Type:* java.lang.String

Options for specifying how URLs found on pages should be handled.

* UNKNOWN: Default unknown value
* SCOPED: Only include the base URL.
* PATH: Crawl the base URL and linked pages within the URL path.
* DOMAIN: Crawl the base URL and linked pages within the same domain.
* SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#crawling_option GenaiKnowledgeBase#crawling_option}

---

##### `embedMedia`<sup>Optional</sup> <a name="embedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.embedMedia"></a>

```java
public java.lang.Object getEmbedMedia();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to embed media content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#embed_media GenaiKnowledgeBase#embed_media}

---

### GenaiKnowledgeBaseLastIndexingJob <a name="GenaiKnowledgeBaseLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseLastIndexingJob;

GenaiKnowledgeBaseLastIndexingJob.builder()
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
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.completedDatasources">completedDatasources</a></code> | <code>java.lang.Number</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids">dataSourceUuids</a></code> | <code>java.util.List<java.lang.String></code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.phase">phase</a></code> | <code>java.lang.String</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.totalDatasources">totalDatasources</a></code> | <code>java.lang.Number</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.uuid">uuid</a></code> | <code>java.lang.String</code> | UUID  of the last indexing job. |

---

##### `completedDatasources`<sup>Optional</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.completedDatasources"></a>

```java
public java.lang.Number getCompletedDatasources();
```

- *Type:* java.lang.Number

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}

---

##### `dataSourceUuids`<sup>Optional</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids"></a>

```java
public java.util.List<java.lang.String> getDataSourceUuids();
```

- *Type:* java.util.List<java.lang.String>

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}

---

##### `phase`<sup>Optional</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.phase"></a>

```java
public java.lang.String getPhase();
```

- *Type:* java.lang.String

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}

---

##### `totalDatasources`<sup>Optional</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.totalDatasources"></a>

```java
public java.lang.Number getTotalDatasources();
```

- *Type:* java.lang.Number

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList;

new GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get"></a>

```java
public GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>>

---


### GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference;

new GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetOriginalFileName">resetOriginalFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetSizeInBytes">resetSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetStoredObjectKey">resetStoredObjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOriginalFileName` <a name="resetOriginalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetOriginalFileName"></a>

```java
public void resetOriginalFileName()
```

##### `resetSizeInBytes` <a name="resetSizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetSizeInBytes"></a>

```java
public void resetSizeInBytes()
```

##### `resetStoredObjectKey` <a name="resetStoredObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetStoredObjectKey"></a>

```java
public void resetStoredObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileNameInput">originalFileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytesInput">sizeInBytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKeyInput">storedObjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileName">originalFileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey">storedObjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `originalFileNameInput`<sup>Optional</sup> <a name="originalFileNameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileNameInput"></a>

```java
public java.lang.String getOriginalFileNameInput();
```

- *Type:* java.lang.String

---

##### `sizeInBytesInput`<sup>Optional</sup> <a name="sizeInBytesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytesInput"></a>

```java
public java.lang.String getSizeInBytesInput();
```

- *Type:* java.lang.String

---

##### `storedObjectKeyInput`<sup>Optional</sup> <a name="storedObjectKeyInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKeyInput"></a>

```java
public java.lang.String getStoredObjectKeyInput();
```

- *Type:* java.lang.String

---

##### `originalFileName`<sup>Required</sup> <a name="originalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileName"></a>

```java
public java.lang.String getOriginalFileName();
```

- *Type:* java.lang.String

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes"></a>

```java
public java.lang.String getSizeInBytes();
```

- *Type:* java.lang.String

---

##### `storedObjectKey`<sup>Required</sup> <a name="storedObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey"></a>

```java
public java.lang.String getStoredObjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>

---


### GenaiKnowledgeBaseDatasourcesLastIndexingJobList <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJobList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesLastIndexingJobList;

new GenaiKnowledgeBaseDatasourcesLastIndexingJobList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get"></a>

```java
public GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>>

---


### GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference;

new GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetCompletedDatasources">resetCompletedDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetDataSourceUuids">resetDataSourceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetPhase">resetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTokens">resetTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTotalDatasources">resetTotalDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompletedDatasources` <a name="resetCompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```java
public void resetCompletedDatasources()
```

##### `resetDataSourceUuids` <a name="resetDataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```java
public void resetDataSourceUuids()
```

##### `resetPhase` <a name="resetPhase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetPhase"></a>

```java
public void resetPhase()
```

##### `resetTokens` <a name="resetTokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTokens"></a>

```java
public void resetTokens()
```

##### `resetTotalDatasources` <a name="resetTotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTotalDatasources"></a>

```java
public void resetTotalDatasources()
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetUuid"></a>

```java
public void resetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.finishedAt">finishedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.startedAt">startedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasourcesInput">completedDatasourcesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuidsInput">dataSourceUuidsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phaseInput">phaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokensInput">tokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasourcesInput">totalDatasourcesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasources">completedDatasources</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids">dataSourceUuids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phase">phase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasources">totalDatasources</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.finishedAt"></a>

```java
public java.lang.String getFinishedAt();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```java
public java.lang.String getKnowledgeBaseUuid();
```

- *Type:* java.lang.String

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.startedAt"></a>

```java
public java.lang.String getStartedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `completedDatasourcesInput`<sup>Optional</sup> <a name="completedDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```java
public java.lang.Number getCompletedDatasourcesInput();
```

- *Type:* java.lang.Number

---

##### `dataSourceUuidsInput`<sup>Optional</sup> <a name="dataSourceUuidsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```java
public java.util.List<java.lang.String> getDataSourceUuidsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phaseInput`<sup>Optional</sup> <a name="phaseInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phaseInput"></a>

```java
public java.lang.String getPhaseInput();
```

- *Type:* java.lang.String

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokensInput"></a>

```java
public java.lang.Number getTokensInput();
```

- *Type:* java.lang.Number

---

##### `totalDatasourcesInput`<sup>Optional</sup> <a name="totalDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```java
public java.lang.Number getTotalDatasourcesInput();
```

- *Type:* java.lang.Number

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `completedDatasources`<sup>Required</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasources"></a>

```java
public java.lang.Number getCompletedDatasources();
```

- *Type:* java.lang.Number

---

##### `dataSourceUuids`<sup>Required</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```java
public java.util.List<java.lang.String> getDataSourceUuids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phase"></a>

```java
public java.lang.String getPhase();
```

- *Type:* java.lang.String

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

---

##### `totalDatasources`<sup>Required</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasources"></a>

```java
public java.lang.Number getTotalDatasources();
```

- *Type:* java.lang.Number

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>

---


### GenaiKnowledgeBaseDatasourcesList <a name="GenaiKnowledgeBaseDatasourcesList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesList;

new GenaiKnowledgeBaseDatasourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get"></a>

```java
public GenaiKnowledgeBaseDatasourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>>

---


### GenaiKnowledgeBaseDatasourcesOutputReference <a name="GenaiKnowledgeBaseDatasourcesOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesOutputReference;

new GenaiKnowledgeBaseDatasourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource">putFileUploadDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob">putLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource">putSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource">putWebCrawlerDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetFileUploadDataSource">resetFileUploadDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetLastIndexingJob">resetLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetSpacesDataSource">resetSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetUuid">resetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetWebCrawlerDataSource">resetWebCrawlerDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFileUploadDataSource` <a name="putFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource"></a>

```java
public void putFileUploadDataSource(IResolvable OR java.util.List<GenaiKnowledgeBaseDatasourcesFileUploadDataSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>>

---

##### `putLastIndexingJob` <a name="putLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob"></a>

```java
public void putLastIndexingJob(IResolvable OR java.util.List<GenaiKnowledgeBaseDatasourcesLastIndexingJob> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>>

---

##### `putSpacesDataSource` <a name="putSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource"></a>

```java
public void putSpacesDataSource(IResolvable OR java.util.List<GenaiKnowledgeBaseDatasourcesSpacesDataSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>>

---

##### `putWebCrawlerDataSource` <a name="putWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource"></a>

```java
public void putWebCrawlerDataSource(IResolvable OR java.util.List<GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>>

---

##### `resetFileUploadDataSource` <a name="resetFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetFileUploadDataSource"></a>

```java
public void resetFileUploadDataSource()
```

##### `resetLastIndexingJob` <a name="resetLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetLastIndexingJob"></a>

```java
public void resetLastIndexingJob()
```

##### `resetSpacesDataSource` <a name="resetSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetSpacesDataSource"></a>

```java
public void resetSpacesDataSource()
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetUuid"></a>

```java
public void resetUuid()
```

##### `resetWebCrawlerDataSource` <a name="resetWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetWebCrawlerDataSource"></a>

```java
public void resetWebCrawlerDataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSource">fileUploadDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList">GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJob">lastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList">GenaiKnowledgeBaseDatasourcesLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSource">spacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList">GenaiKnowledgeBaseDatasourcesSpacesDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSource">webCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSourceInput">fileUploadDataSourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJobInput">lastIndexingJobInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSourceInput">spacesDataSourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSourceInput">webCrawlerDataSourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `fileUploadDataSource`<sup>Required</sup> <a name="fileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSource"></a>

```java
public GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList getFileUploadDataSource();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList">GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList</a>

---

##### `lastIndexingJob`<sup>Required</sup> <a name="lastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJob"></a>

```java
public GenaiKnowledgeBaseDatasourcesLastIndexingJobList getLastIndexingJob();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList">GenaiKnowledgeBaseDatasourcesLastIndexingJobList</a>

---

##### `spacesDataSource`<sup>Required</sup> <a name="spacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSource"></a>

```java
public GenaiKnowledgeBaseDatasourcesSpacesDataSourceList getSpacesDataSource();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList">GenaiKnowledgeBaseDatasourcesSpacesDataSourceList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `webCrawlerDataSource`<sup>Required</sup> <a name="webCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSource"></a>

```java
public GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList getWebCrawlerDataSource();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList</a>

---

##### `fileUploadDataSourceInput`<sup>Optional</sup> <a name="fileUploadDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSourceInput"></a>

```java
public java.lang.Object getFileUploadDataSourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>>

---

##### `lastIndexingJobInput`<sup>Optional</sup> <a name="lastIndexingJobInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJobInput"></a>

```java
public java.lang.Object getLastIndexingJobInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>>

---

##### `spacesDataSourceInput`<sup>Optional</sup> <a name="spacesDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSourceInput"></a>

```java
public java.lang.Object getSpacesDataSourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>>

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `webCrawlerDataSourceInput`<sup>Optional</sup> <a name="webCrawlerDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSourceInput"></a>

```java
public java.lang.Object getWebCrawlerDataSourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>

---


### GenaiKnowledgeBaseDatasourcesSpacesDataSourceList <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList;

new GenaiKnowledgeBaseDatasourcesSpacesDataSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get"></a>

```java
public GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>>

---


### GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference;

new GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetItemPath">resetItemPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetItemPath` <a name="resetItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetItemPath"></a>

```java
public void resetItemPath()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPathInput">itemPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPath">itemPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `itemPathInput`<sup>Optional</sup> <a name="itemPathInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPathInput"></a>

```java
public java.lang.String getItemPathInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `itemPath`<sup>Required</sup> <a name="itemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPath"></a>

```java
public java.lang.String getItemPath();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>

---


### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList;

new GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get"></a>

```java
public GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>>

---


### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference;

new GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetCrawlingOption">resetCrawlingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetEmbedMedia">resetEmbedMedia</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetCrawlingOption` <a name="resetCrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetCrawlingOption"></a>

```java
public void resetCrawlingOption()
```

##### `resetEmbedMedia` <a name="resetEmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetEmbedMedia"></a>

```java
public void resetEmbedMedia()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOptionInput">crawlingOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMediaInput">embedMediaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption">crawlingOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia">embedMedia</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `crawlingOptionInput`<sup>Optional</sup> <a name="crawlingOptionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOptionInput"></a>

```java
public java.lang.String getCrawlingOptionInput();
```

- *Type:* java.lang.String

---

##### `embedMediaInput`<sup>Optional</sup> <a name="embedMediaInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMediaInput"></a>

```java
public java.lang.Object getEmbedMediaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `crawlingOption`<sup>Required</sup> <a name="crawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```java
public java.lang.String getCrawlingOption();
```

- *Type:* java.lang.String

---

##### `embedMedia`<sup>Required</sup> <a name="embedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```java
public java.lang.Object getEmbedMedia();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>

---


### GenaiKnowledgeBaseLastIndexingJobList <a name="GenaiKnowledgeBaseLastIndexingJobList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseLastIndexingJobList;

new GenaiKnowledgeBaseLastIndexingJobList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get"></a>

```java
public GenaiKnowledgeBaseLastIndexingJobOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>>

---


### GenaiKnowledgeBaseLastIndexingJobOutputReference <a name="GenaiKnowledgeBaseLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base.GenaiKnowledgeBaseLastIndexingJobOutputReference;

new GenaiKnowledgeBaseLastIndexingJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources">resetCompletedDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids">resetDataSourceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase">resetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens">resetTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources">resetTotalDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompletedDatasources` <a name="resetCompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```java
public void resetCompletedDatasources()
```

##### `resetDataSourceUuids` <a name="resetDataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```java
public void resetDataSourceUuids()
```

##### `resetPhase` <a name="resetPhase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase"></a>

```java
public void resetPhase()
```

##### `resetTokens` <a name="resetTokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens"></a>

```java
public void resetTokens()
```

##### `resetTotalDatasources` <a name="resetTotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources"></a>

```java
public void resetTotalDatasources()
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid"></a>

```java
public void resetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt">finishedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt">startedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput">completedDatasourcesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput">dataSourceUuidsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput">phaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput">tokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput">totalDatasourcesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources">completedDatasources</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids">dataSourceUuids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase">phase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources">totalDatasources</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `finishedAt`<sup>Required</sup> <a name="finishedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt"></a>

```java
public java.lang.String getFinishedAt();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```java
public java.lang.String getKnowledgeBaseUuid();
```

- *Type:* java.lang.String

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt"></a>

```java
public java.lang.String getStartedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `completedDatasourcesInput`<sup>Optional</sup> <a name="completedDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```java
public java.lang.Number getCompletedDatasourcesInput();
```

- *Type:* java.lang.Number

---

##### `dataSourceUuidsInput`<sup>Optional</sup> <a name="dataSourceUuidsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```java
public java.util.List<java.lang.String> getDataSourceUuidsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phaseInput`<sup>Optional</sup> <a name="phaseInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput"></a>

```java
public java.lang.String getPhaseInput();
```

- *Type:* java.lang.String

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput"></a>

```java
public java.lang.Number getTokensInput();
```

- *Type:* java.lang.Number

---

##### `totalDatasourcesInput`<sup>Optional</sup> <a name="totalDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```java
public java.lang.Number getTotalDatasourcesInput();
```

- *Type:* java.lang.Number

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `completedDatasources`<sup>Required</sup> <a name="completedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources"></a>

```java
public java.lang.Number getCompletedDatasources();
```

- *Type:* java.lang.Number

---

##### `dataSourceUuids`<sup>Required</sup> <a name="dataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```java
public java.util.List<java.lang.String> getDataSourceUuids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase"></a>

```java
public java.lang.String getPhase();
```

- *Type:* java.lang.String

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

---

##### `totalDatasources`<sup>Required</sup> <a name="totalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources"></a>

```java
public java.lang.Number getTotalDatasources();
```

- *Type:* java.lang.Number

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>

---



