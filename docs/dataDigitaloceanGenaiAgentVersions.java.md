# `dataDigitaloceanGenaiAgentVersions` Submodule <a name="`dataDigitaloceanGenaiAgentVersions` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiAgentVersions <a name="DataDigitaloceanGenaiAgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions digitalocean_genai_agent_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersions;

DataDigitaloceanGenaiAgentVersions.Builder.create(Construct scope, java.lang.String id)
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
    .agentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataDigitaloceanGenaiAgentVersionsFilter>)
//  .id(java.lang.String)
//  .sort(IResolvable)
//  .sort(java.util.List<DataDigitaloceanGenaiAgentVersionsSort>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.agentId">agentId</a></code> | <code>java.lang.String</code> | The ID of the agent to fetch versions for. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.sort">sort</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>></code> | sort block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.agentId"></a>

- *Type:* java.lang.String

The ID of the agent to fetch versions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#agent_id DataDigitaloceanGenaiAgentVersions#agent_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#filter DataDigitaloceanGenaiAgentVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.sort"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>>

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#sort DataDigitaloceanGenaiAgentVersions#sort}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort">putSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetSort">resetSort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataDigitaloceanGenaiAgentVersionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>>

---

##### `putSort` <a name="putSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort"></a>

```java
public void putSort(IResolvable OR java.util.List<DataDigitaloceanGenaiAgentVersionsSort> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetId"></a>

```java
public void resetId()
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetSort"></a>

```java
public void resetSort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiAgentVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersions;

DataDigitaloceanGenaiAgentVersions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersions;

DataDigitaloceanGenaiAgentVersions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersions;

DataDigitaloceanGenaiAgentVersions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersions;

DataDigitaloceanGenaiAgentVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDigitaloceanGenaiAgentVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDigitaloceanGenaiAgentVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDigitaloceanGenaiAgentVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDigitaloceanGenaiAgentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiAgentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentVersions">agentVersions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList">DataDigitaloceanGenaiAgentVersionsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList">DataDigitaloceanGenaiAgentVersionsSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentIdInput">agentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sortInput">sortInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentId">agentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `agentVersions`<sup>Required</sup> <a name="agentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentVersions"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsList getAgentVersions();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filter"></a>

```java
public DataDigitaloceanGenaiAgentVersionsFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList">DataDigitaloceanGenaiAgentVersionsFilterList</a>

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sort"></a>

```java
public DataDigitaloceanGenaiAgentVersionsSortList getSort();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList">DataDigitaloceanGenaiAgentVersionsSortList</a>

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentIdInput"></a>

```java
public java.lang.String getAgentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sortInput"></a>

```java
public java.lang.Object getSortInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiAgentVersionsAgentVersions <a name="DataDigitaloceanGenaiAgentVersionsAgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersions;

DataDigitaloceanGenaiAgentVersionsAgentVersions.builder()
    .build();
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents;

DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents.builder()
    .build();
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions;

DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions.builder()
    .build();
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails;

DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails.builder()
    .build();
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases;

DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases.builder()
    .build();
```


### DataDigitaloceanGenaiAgentVersionsConfig <a name="DataDigitaloceanGenaiAgentVersionsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsConfig;

DataDigitaloceanGenaiAgentVersionsConfig.builder()
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
    .agentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataDigitaloceanGenaiAgentVersionsFilter>)
//  .id(java.lang.String)
//  .sort(IResolvable)
//  .sort(java.util.List<DataDigitaloceanGenaiAgentVersionsSort>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.agentId">agentId</a></code> | <code>java.lang.String</code> | The ID of the agent to fetch versions for. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.sort">sort</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>></code> | sort block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

The ID of the agent to fetch versions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#agent_id DataDigitaloceanGenaiAgentVersions#agent_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#filter DataDigitaloceanGenaiAgentVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.sort"></a>

```java
public java.lang.Object getSort();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>>

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#sort DataDigitaloceanGenaiAgentVersions#sort}

---

### DataDigitaloceanGenaiAgentVersionsFilter <a name="DataDigitaloceanGenaiAgentVersionsFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsFilter;

DataDigitaloceanGenaiAgentVersionsFilter.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .all(java.lang.Boolean)
//  .all(IResolvable)
//  .matchBy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#values DataDigitaloceanGenaiAgentVersions#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#all DataDigitaloceanGenaiAgentVersions#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.matchBy">matchBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#match_by DataDigitaloceanGenaiAgentVersions#match_by}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#values DataDigitaloceanGenaiAgentVersions#values}.

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#all DataDigitaloceanGenaiAgentVersions#all}.

---

##### `matchBy`<sup>Optional</sup> <a name="matchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.matchBy"></a>

```java
public java.lang.String getMatchBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#match_by DataDigitaloceanGenaiAgentVersions#match_by}.

---

### DataDigitaloceanGenaiAgentVersionsSort <a name="DataDigitaloceanGenaiAgentVersionsSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsSort;

DataDigitaloceanGenaiAgentVersionsSort.builder()
    .key(java.lang.String)
//  .direction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#direction DataDigitaloceanGenaiAgentVersions#direction}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.64.0/docs/data-sources/genai_agent_versions#direction DataDigitaloceanGenaiAgentVersions#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.agentName">agentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.childAgentUuid">childAgentUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.ifCase">ifCase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.isDeleted">isDeleted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.routeName">routeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.agentName"></a>

```java
public java.lang.String getAgentName();
```

- *Type:* java.lang.String

---

##### `childAgentUuid`<sup>Required</sup> <a name="childAgentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.childAgentUuid"></a>

```java
public java.lang.String getChildAgentUuid();
```

- *Type:* java.lang.String

---

##### `ifCase`<sup>Required</sup> <a name="ifCase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.ifCase"></a>

```java
public java.lang.String getIfCase();
```

- *Type:* java.lang.String

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.isDeleted"></a>

```java
public IResolvable getIsDeleted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `routeName`<sup>Required</sup> <a name="routeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.routeName"></a>

```java
public java.lang.String getRouteName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasName">faasName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasNamespace">faasNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.isDeleted">isDeleted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `faasName`<sup>Required</sup> <a name="faasName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasName"></a>

```java
public java.lang.String getFaasName();
```

- *Type:* java.lang.String

---

##### `faasNamespace`<sup>Required</sup> <a name="faasNamespace" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasNamespace"></a>

```java
public java.lang.String getFaasNamespace();
```

- *Type:* java.lang.String

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.isDeleted"></a>

```java
public IResolvable getIsDeleted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.isDeleted">isDeleted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.isDeleted"></a>

```java
public IResolvable getIsDeleted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.isDeleted">isDeleted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.isDeleted"></a>

```java
public IResolvable getIsDeleted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference;

new DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.agentUuid">agentUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedChildAgents">attachedChildAgents</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedFunctions">attachedFunctions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedGuardrails">attachedGuardrails</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedKnowledgeBases">attachedKnowledgeBases</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.canRollback">canRollback</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdByEmail">createdByEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.currentlyApplied">currentlyApplied</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.instruction">instruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.k">k</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.provideCitations">provideCitations</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.retrievalMethod">retrievalMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.topP">topP</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.triggerAction">triggerAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.versionHash">versionHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions">DataDigitaloceanGenaiAgentVersionsAgentVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentUuid`<sup>Required</sup> <a name="agentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.agentUuid"></a>

```java
public java.lang.String getAgentUuid();
```

- *Type:* java.lang.String

---

##### `attachedChildAgents`<sup>Required</sup> <a name="attachedChildAgents" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedChildAgents"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList getAttachedChildAgents();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList</a>

---

##### `attachedFunctions`<sup>Required</sup> <a name="attachedFunctions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedFunctions"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList getAttachedFunctions();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList</a>

---

##### `attachedGuardrails`<sup>Required</sup> <a name="attachedGuardrails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedGuardrails"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList getAttachedGuardrails();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList</a>

---

##### `attachedKnowledgeBases`<sup>Required</sup> <a name="attachedKnowledgeBases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedKnowledgeBases"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList getAttachedKnowledgeBases();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList</a>

---

##### `canRollback`<sup>Required</sup> <a name="canRollback" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.canRollback"></a>

```java
public IResolvable getCanRollback();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdByEmail`<sup>Required</sup> <a name="createdByEmail" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdByEmail"></a>

```java
public java.lang.String getCreatedByEmail();
```

- *Type:* java.lang.String

---

##### `currentlyApplied`<sup>Required</sup> <a name="currentlyApplied" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.currentlyApplied"></a>

```java
public IResolvable getCurrentlyApplied();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

---

##### `k`<sup>Required</sup> <a name="k" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.k"></a>

```java
public java.lang.Number getK();
```

- *Type:* java.lang.Number

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `provideCitations`<sup>Required</sup> <a name="provideCitations" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.provideCitations"></a>

```java
public IResolvable getProvideCitations();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `retrievalMethod`<sup>Required</sup> <a name="retrievalMethod" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.retrievalMethod"></a>

```java
public java.lang.String getRetrievalMethod();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

---

##### `triggerAction`<sup>Required</sup> <a name="triggerAction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.triggerAction"></a>

```java
public java.lang.String getTriggerAction();
```

- *Type:* java.lang.String

---

##### `versionHash`<sup>Required</sup> <a name="versionHash" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.versionHash"></a>

```java
public java.lang.String getVersionHash();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanGenaiAgentVersionsAgentVersions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions">DataDigitaloceanGenaiAgentVersionsAgentVersions</a>

---


### DataDigitaloceanGenaiAgentVersionsFilterList <a name="DataDigitaloceanGenaiAgentVersionsFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsFilterList;

new DataDigitaloceanGenaiAgentVersionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get"></a>

```java
public DataDigitaloceanGenaiAgentVersionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>>

---


### DataDigitaloceanGenaiAgentVersionsFilterOutputReference <a name="DataDigitaloceanGenaiAgentVersionsFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference;

new DataDigitaloceanGenaiAgentVersionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetMatchBy">resetMatchBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetMatchBy` <a name="resetMatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetMatchBy"></a>

```java
public void resetMatchBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchByInput">matchByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchBy">matchBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.allInput"></a>

```java
public java.lang.Object getAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchByInput`<sup>Optional</sup> <a name="matchByInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchByInput"></a>

```java
public java.lang.String getMatchByInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchBy`<sup>Required</sup> <a name="matchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchBy"></a>

```java
public java.lang.String getMatchBy();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter">DataDigitaloceanGenaiAgentVersionsFilter</a>

---


### DataDigitaloceanGenaiAgentVersionsSortList <a name="DataDigitaloceanGenaiAgentVersionsSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsSortList;

new DataDigitaloceanGenaiAgentVersionsSortList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get"></a>

```java
public DataDigitaloceanGenaiAgentVersionsSortOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>>

---


### DataDigitaloceanGenaiAgentVersionsSortOutputReference <a name="DataDigitaloceanGenaiAgentVersionsSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_genai_agent_versions.DataDigitaloceanGenaiAgentVersionsSortOutputReference;

new DataDigitaloceanGenaiAgentVersionsSortOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resetDirection">resetDirection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resetDirection"></a>

```java
public void resetDirection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort">DataDigitaloceanGenaiAgentVersionsSort</a>

---



