# `genaiKnowledgeBaseDataSource` Submodule <a name="`genaiKnowledgeBaseDataSource` Submodule" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiKnowledgeBaseDataSource <a name="GenaiKnowledgeBaseDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source digitalocean_genai_knowledge_base_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base_data_source.GenaiKnowledgeBaseDataSource;

GenaiKnowledgeBaseDataSource.Builder.create(Construct scope, java.lang.String id)
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
    .knowledgeBaseUuid(java.lang.String)
//  .id(java.lang.String)
//  .spacesDataSource(GenaiKnowledgeBaseDataSourceSpacesDataSource)
//  .webCrawlerDataSource(GenaiKnowledgeBaseDataSourceWebCrawlerDataSource)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>java.lang.String</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.spacesDataSource">spacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | spaces_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.webCrawlerDataSource">webCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | web_crawler_data_source block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.knowledgeBaseUuid"></a>

- *Type:* java.lang.String

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#knowledge_base_uuid GenaiKnowledgeBaseDataSource#knowledge_base_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spacesDataSource`<sup>Optional</sup> <a name="spacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.spacesDataSource"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

spaces_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#spaces_data_source GenaiKnowledgeBaseDataSource#spaces_data_source}

---

##### `webCrawlerDataSource`<sup>Optional</sup> <a name="webCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.webCrawlerDataSource"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

web_crawler_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#web_crawler_data_source GenaiKnowledgeBaseDataSource#web_crawler_data_source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource">putSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource">putWebCrawlerDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetSpacesDataSource">resetSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetWebCrawlerDataSource">resetWebCrawlerDataSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSpacesDataSource` <a name="putSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource"></a>

```java
public void putSpacesDataSource(GenaiKnowledgeBaseDataSourceSpacesDataSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

---

##### `putWebCrawlerDataSource` <a name="putWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource"></a>

```java
public void putWebCrawlerDataSource(GenaiKnowledgeBaseDataSourceWebCrawlerDataSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetId"></a>

```java
public void resetId()
```

##### `resetSpacesDataSource` <a name="resetSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetSpacesDataSource"></a>

```java
public void resetSpacesDataSource()
```

##### `resetWebCrawlerDataSource` <a name="resetWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetWebCrawlerDataSource"></a>

```java
public void resetWebCrawlerDataSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiKnowledgeBaseDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base_data_source.GenaiKnowledgeBaseDataSource;

GenaiKnowledgeBaseDataSource.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base_data_source.GenaiKnowledgeBaseDataSource;

GenaiKnowledgeBaseDataSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base_data_source.GenaiKnowledgeBaseDataSource;

GenaiKnowledgeBaseDataSource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base_data_source.GenaiKnowledgeBaseDataSource;

GenaiKnowledgeBaseDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GenaiKnowledgeBaseDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GenaiKnowledgeBaseDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GenaiKnowledgeBaseDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GenaiKnowledgeBaseDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GenaiKnowledgeBaseDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSource">spacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference">GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSource">webCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference">GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuidInput">knowledgeBaseUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSourceInput">spacesDataSourceInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSourceInput">webCrawlerDataSourceInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `spacesDataSource`<sup>Required</sup> <a name="spacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSource"></a>

```java
public GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference getSpacesDataSource();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference">GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference</a>

---

##### `webCrawlerDataSource`<sup>Required</sup> <a name="webCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSource"></a>

```java
public GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference getWebCrawlerDataSource();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference">GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseUuidInput`<sup>Optional</sup> <a name="knowledgeBaseUuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuidInput"></a>

```java
public java.lang.String getKnowledgeBaseUuidInput();
```

- *Type:* java.lang.String

---

##### `spacesDataSourceInput`<sup>Optional</sup> <a name="spacesDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSourceInput"></a>

```java
public GenaiKnowledgeBaseDataSourceSpacesDataSource getSpacesDataSourceInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

---

##### `webCrawlerDataSourceInput`<sup>Optional</sup> <a name="webCrawlerDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSourceInput"></a>

```java
public GenaiKnowledgeBaseDataSourceWebCrawlerDataSource getWebCrawlerDataSourceInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuid"></a>

```java
public java.lang.String getKnowledgeBaseUuid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiKnowledgeBaseDataSourceConfig <a name="GenaiKnowledgeBaseDataSourceConfig" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base_data_source.GenaiKnowledgeBaseDataSourceConfig;

GenaiKnowledgeBaseDataSourceConfig.builder()
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
    .knowledgeBaseUuid(java.lang.String)
//  .id(java.lang.String)
//  .spacesDataSource(GenaiKnowledgeBaseDataSourceSpacesDataSource)
//  .webCrawlerDataSource(GenaiKnowledgeBaseDataSourceWebCrawlerDataSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.knowledgeBaseUuid">knowledgeBaseUuid</a></code> | <code>java.lang.String</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.spacesDataSource">spacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | spaces_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.webCrawlerDataSource">webCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | web_crawler_data_source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `knowledgeBaseUuid`<sup>Required</sup> <a name="knowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.knowledgeBaseUuid"></a>

```java
public java.lang.String getKnowledgeBaseUuid();
```

- *Type:* java.lang.String

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#knowledge_base_uuid GenaiKnowledgeBaseDataSource#knowledge_base_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spacesDataSource`<sup>Optional</sup> <a name="spacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.spacesDataSource"></a>

```java
public GenaiKnowledgeBaseDataSourceSpacesDataSource getSpacesDataSource();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

spaces_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#spaces_data_source GenaiKnowledgeBaseDataSource#spaces_data_source}

---

##### `webCrawlerDataSource`<sup>Optional</sup> <a name="webCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.webCrawlerDataSource"></a>

```java
public GenaiKnowledgeBaseDataSourceWebCrawlerDataSource getWebCrawlerDataSource();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

web_crawler_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#web_crawler_data_source GenaiKnowledgeBaseDataSource#web_crawler_data_source}

---

### GenaiKnowledgeBaseDataSourceSpacesDataSource <a name="GenaiKnowledgeBaseDataSourceSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base_data_source.GenaiKnowledgeBaseDataSourceSpacesDataSource;

GenaiKnowledgeBaseDataSourceSpacesDataSource.builder()
//  .bucketName(java.lang.String)
//  .itemPath(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the Spaces bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.itemPath">itemPath</a></code> | <code>java.lang.String</code> | The path to the item in the bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.region">region</a></code> | <code>java.lang.String</code> | The region of the Spaces bucket. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#bucket_name GenaiKnowledgeBaseDataSource#bucket_name}

---

##### `itemPath`<sup>Optional</sup> <a name="itemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.itemPath"></a>

```java
public java.lang.String getItemPath();
```

- *Type:* java.lang.String

The path to the item in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#item_path GenaiKnowledgeBaseDataSource#item_path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#region GenaiKnowledgeBaseDataSource#region}

---

### GenaiKnowledgeBaseDataSourceWebCrawlerDataSource <a name="GenaiKnowledgeBaseDataSourceWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base_data_source.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource;

GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.builder()
//  .baseUrl(java.lang.String)
//  .crawlingOption(java.lang.String)
//  .embedMedia(java.lang.Boolean)
//  .embedMedia(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | The base URL to crawl. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.crawlingOption">crawlingOption</a></code> | <code>java.lang.String</code> | Options for specifying how URLs found on pages should be handled. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.embedMedia">embedMedia</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to embed media content. |

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

The base URL to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#base_url GenaiKnowledgeBaseDataSource#base_url}

---

##### `crawlingOption`<sup>Optional</sup> <a name="crawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.crawlingOption"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#crawling_option GenaiKnowledgeBaseDataSource#crawling_option}

---

##### `embedMedia`<sup>Optional</sup> <a name="embedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.embedMedia"></a>

```java
public java.lang.Object getEmbedMedia();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to embed media content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/genai_knowledge_base_data_source#embed_media GenaiKnowledgeBaseDataSource#embed_media}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference <a name="GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base_data_source.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference;

new GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetItemPath">resetItemPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetItemPath` <a name="resetItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetItemPath"></a>

```java
public void resetItemPath()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPathInput">itemPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPath">itemPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `itemPathInput`<sup>Optional</sup> <a name="itemPathInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPathInput"></a>

```java
public java.lang.String getItemPathInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `itemPath`<sup>Required</sup> <a name="itemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPath"></a>

```java
public java.lang.String getItemPath();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.internalValue"></a>

```java
public GenaiKnowledgeBaseDataSourceSpacesDataSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

---


### GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference <a name="GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_knowledge_base_data_source.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference;

new GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetCrawlingOption">resetCrawlingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetEmbedMedia">resetEmbedMedia</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetCrawlingOption` <a name="resetCrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetCrawlingOption"></a>

```java
public void resetCrawlingOption()
```

##### `resetEmbedMedia` <a name="resetEmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetEmbedMedia"></a>

```java
public void resetEmbedMedia()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOptionInput">crawlingOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMediaInput">embedMediaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOption">crawlingOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMedia">embedMedia</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `crawlingOptionInput`<sup>Optional</sup> <a name="crawlingOptionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOptionInput"></a>

```java
public java.lang.String getCrawlingOptionInput();
```

- *Type:* java.lang.String

---

##### `embedMediaInput`<sup>Optional</sup> <a name="embedMediaInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMediaInput"></a>

```java
public java.lang.Object getEmbedMediaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `crawlingOption`<sup>Required</sup> <a name="crawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```java
public java.lang.String getCrawlingOption();
```

- *Type:* java.lang.String

---

##### `embedMedia`<sup>Required</sup> <a name="embedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```java
public java.lang.Object getEmbedMedia();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```java
public GenaiKnowledgeBaseDataSourceWebCrawlerDataSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

---



