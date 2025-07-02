# `databaseKafkaTopic` Submodule <a name="`databaseKafkaTopic` Submodule" id="@cdktf/provider-digitalocean.databaseKafkaTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseKafkaTopic <a name="DatabaseKafkaTopic" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic digitalocean_database_kafka_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_topic.DatabaseKafkaTopic;

DatabaseKafkaTopic.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
    .name(java.lang.String)
//  .config(IResolvable)
//  .config(java.util.List<DatabaseKafkaTopicConfigA>)
//  .id(java.lang.String)
//  .partitionCount(java.lang.Number)
//  .replicationFactor(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>></code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.config"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#config DatabaseKafkaTopic#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionCount`<sup>Optional</sup> <a name="partitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.partitionCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}.

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.replicationFactor"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetPartitionCount">resetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetReplicationFactor">resetReplicationFactor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig"></a>

```java
public void putConfig(IResolvable OR java.util.List<DatabaseKafkaTopicConfigA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetId"></a>

```java
public void resetId()
```

##### `resetPartitionCount` <a name="resetPartitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetPartitionCount"></a>

```java
public void resetPartitionCount()
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetReplicationFactor"></a>

```java
public void resetReplicationFactor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseKafkaTopic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_topic.DatabaseKafkaTopic;

DatabaseKafkaTopic.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_topic.DatabaseKafkaTopic;

DatabaseKafkaTopic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_topic.DatabaseKafkaTopic;

DatabaseKafkaTopic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_topic.DatabaseKafkaTopic;

DatabaseKafkaTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseKafkaTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseKafkaTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseKafkaTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseKafkaTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseKafkaTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList">DatabaseKafkaTopicConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCountInput">partitionCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactorInput">replicationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.config"></a>

```java
public DatabaseKafkaTopicConfigAList getConfig();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList">DatabaseKafkaTopicConfigAList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partitionCountInput`<sup>Optional</sup> <a name="partitionCountInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCountInput"></a>

```java
public java.lang.Number getPartitionCountInput();
```

- *Type:* java.lang.Number

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactorInput"></a>

```java
public java.lang.Number getReplicationFactorInput();
```

- *Type:* java.lang.Number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partitionCount`<sup>Required</sup> <a name="partitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCount"></a>

```java
public java.lang.Number getPartitionCount();
```

- *Type:* java.lang.Number

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseKafkaTopicConfig <a name="DatabaseKafkaTopicConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_topic.DatabaseKafkaTopicConfig;

DatabaseKafkaTopicConfig.builder()
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
    .clusterId(java.lang.String)
    .name(java.lang.String)
//  .config(IResolvable)
//  .config(java.util.List<DatabaseKafkaTopicConfigA>)
//  .id(java.lang.String)
//  .partitionCount(java.lang.Number)
//  .replicationFactor(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>></code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.config"></a>

```java
public java.lang.Object getConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#config DatabaseKafkaTopic#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionCount`<sup>Optional</sup> <a name="partitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.partitionCount"></a>

```java
public java.lang.Number getPartitionCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}.

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}.

---

### DatabaseKafkaTopicConfigA <a name="DatabaseKafkaTopicConfigA" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_topic.DatabaseKafkaTopicConfigA;

DatabaseKafkaTopicConfigA.builder()
//  .cleanupPolicy(java.lang.String)
//  .compressionType(java.lang.String)
//  .deleteRetentionMs(java.lang.String)
//  .fileDeleteDelayMs(java.lang.String)
//  .flushMessages(java.lang.String)
//  .flushMs(java.lang.String)
//  .indexIntervalBytes(java.lang.String)
//  .maxCompactionLagMs(java.lang.String)
//  .maxMessageBytes(java.lang.String)
//  .messageDownConversionEnable(java.lang.Boolean)
//  .messageDownConversionEnable(IResolvable)
//  .messageFormatVersion(java.lang.String)
//  .messageTimestampDifferenceMaxMs(java.lang.String)
//  .messageTimestampType(java.lang.String)
//  .minCleanableDirtyRatio(java.lang.Number)
//  .minCompactionLagMs(java.lang.String)
//  .minInsyncReplicas(java.lang.Number)
//  .preallocate(java.lang.Boolean)
//  .preallocate(IResolvable)
//  .retentionBytes(java.lang.String)
//  .retentionMs(java.lang.String)
//  .segmentBytes(java.lang.String)
//  .segmentIndexBytes(java.lang.String)
//  .segmentJitterMs(java.lang.String)
//  .segmentMs(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.cleanupPolicy">cleanupPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#cleanup_policy DatabaseKafkaTopic#cleanup_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#compression_type DatabaseKafkaTopic#compression_type}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.deleteRetentionMs">deleteRetentionMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#delete_retention_ms DatabaseKafkaTopic#delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.fileDeleteDelayMs">fileDeleteDelayMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#file_delete_delay_ms DatabaseKafkaTopic#file_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMessages">flushMessages</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#flush_messages DatabaseKafkaTopic#flush_messages}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMs">flushMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#flush_ms DatabaseKafkaTopic#flush_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.indexIntervalBytes">indexIntervalBytes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#index_interval_bytes DatabaseKafkaTopic#index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxCompactionLagMs">maxCompactionLagMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#max_compaction_lag_ms DatabaseKafkaTopic#max_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxMessageBytes">maxMessageBytes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#max_message_bytes DatabaseKafkaTopic#max_message_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageDownConversionEnable">messageDownConversionEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#message_down_conversion_enable DatabaseKafkaTopic#message_down_conversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageFormatVersion">messageFormatVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#message_format_version DatabaseKafkaTopic#message_format_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampDifferenceMaxMs">messageTimestampDifferenceMaxMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#message_timestamp_difference_max_ms DatabaseKafkaTopic#message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampType">messageTimestampType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#message_timestamp_type DatabaseKafkaTopic#message_timestamp_type}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCleanableDirtyRatio">minCleanableDirtyRatio</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#min_cleanable_dirty_ratio DatabaseKafkaTopic#min_cleanable_dirty_ratio}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCompactionLagMs">minCompactionLagMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#min_compaction_lag_ms DatabaseKafkaTopic#min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minInsyncReplicas">minInsyncReplicas</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#min_insync_replicas DatabaseKafkaTopic#min_insync_replicas}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.preallocate">preallocate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#preallocate DatabaseKafkaTopic#preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionBytes">retentionBytes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#retention_bytes DatabaseKafkaTopic#retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionMs">retentionMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#retention_ms DatabaseKafkaTopic#retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentBytes">segmentBytes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#segment_bytes DatabaseKafkaTopic#segment_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentIndexBytes">segmentIndexBytes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#segment_index_bytes DatabaseKafkaTopic#segment_index_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentJitterMs">segmentJitterMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#segment_jitter_ms DatabaseKafkaTopic#segment_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentMs">segmentMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#segment_ms DatabaseKafkaTopic#segment_ms}. |

---

##### `cleanupPolicy`<sup>Optional</sup> <a name="cleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.cleanupPolicy"></a>

```java
public java.lang.String getCleanupPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#cleanup_policy DatabaseKafkaTopic#cleanup_policy}.

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#compression_type DatabaseKafkaTopic#compression_type}.

---

##### `deleteRetentionMs`<sup>Optional</sup> <a name="deleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.deleteRetentionMs"></a>

```java
public java.lang.String getDeleteRetentionMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#delete_retention_ms DatabaseKafkaTopic#delete_retention_ms}.

---

##### `fileDeleteDelayMs`<sup>Optional</sup> <a name="fileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.fileDeleteDelayMs"></a>

```java
public java.lang.String getFileDeleteDelayMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#file_delete_delay_ms DatabaseKafkaTopic#file_delete_delay_ms}.

---

##### `flushMessages`<sup>Optional</sup> <a name="flushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMessages"></a>

```java
public java.lang.String getFlushMessages();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#flush_messages DatabaseKafkaTopic#flush_messages}.

---

##### `flushMs`<sup>Optional</sup> <a name="flushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMs"></a>

```java
public java.lang.String getFlushMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#flush_ms DatabaseKafkaTopic#flush_ms}.

---

##### `indexIntervalBytes`<sup>Optional</sup> <a name="indexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.indexIntervalBytes"></a>

```java
public java.lang.String getIndexIntervalBytes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#index_interval_bytes DatabaseKafkaTopic#index_interval_bytes}.

---

##### `maxCompactionLagMs`<sup>Optional</sup> <a name="maxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxCompactionLagMs"></a>

```java
public java.lang.String getMaxCompactionLagMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#max_compaction_lag_ms DatabaseKafkaTopic#max_compaction_lag_ms}.

---

##### `maxMessageBytes`<sup>Optional</sup> <a name="maxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxMessageBytes"></a>

```java
public java.lang.String getMaxMessageBytes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#max_message_bytes DatabaseKafkaTopic#max_message_bytes}.

---

##### `messageDownConversionEnable`<sup>Optional</sup> <a name="messageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageDownConversionEnable"></a>

```java
public java.lang.Object getMessageDownConversionEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#message_down_conversion_enable DatabaseKafkaTopic#message_down_conversion_enable}.

---

##### `messageFormatVersion`<sup>Optional</sup> <a name="messageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageFormatVersion"></a>

```java
public java.lang.String getMessageFormatVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#message_format_version DatabaseKafkaTopic#message_format_version}.

---

##### `messageTimestampDifferenceMaxMs`<sup>Optional</sup> <a name="messageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampDifferenceMaxMs"></a>

```java
public java.lang.String getMessageTimestampDifferenceMaxMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#message_timestamp_difference_max_ms DatabaseKafkaTopic#message_timestamp_difference_max_ms}.

---

##### `messageTimestampType`<sup>Optional</sup> <a name="messageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampType"></a>

```java
public java.lang.String getMessageTimestampType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#message_timestamp_type DatabaseKafkaTopic#message_timestamp_type}.

---

##### `minCleanableDirtyRatio`<sup>Optional</sup> <a name="minCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCleanableDirtyRatio"></a>

```java
public java.lang.Number getMinCleanableDirtyRatio();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#min_cleanable_dirty_ratio DatabaseKafkaTopic#min_cleanable_dirty_ratio}.

---

##### `minCompactionLagMs`<sup>Optional</sup> <a name="minCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCompactionLagMs"></a>

```java
public java.lang.String getMinCompactionLagMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#min_compaction_lag_ms DatabaseKafkaTopic#min_compaction_lag_ms}.

---

##### `minInsyncReplicas`<sup>Optional</sup> <a name="minInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minInsyncReplicas"></a>

```java
public java.lang.Number getMinInsyncReplicas();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#min_insync_replicas DatabaseKafkaTopic#min_insync_replicas}.

---

##### `preallocate`<sup>Optional</sup> <a name="preallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.preallocate"></a>

```java
public java.lang.Object getPreallocate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#preallocate DatabaseKafkaTopic#preallocate}.

---

##### `retentionBytes`<sup>Optional</sup> <a name="retentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionBytes"></a>

```java
public java.lang.String getRetentionBytes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#retention_bytes DatabaseKafkaTopic#retention_bytes}.

---

##### `retentionMs`<sup>Optional</sup> <a name="retentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionMs"></a>

```java
public java.lang.String getRetentionMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#retention_ms DatabaseKafkaTopic#retention_ms}.

---

##### `segmentBytes`<sup>Optional</sup> <a name="segmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentBytes"></a>

```java
public java.lang.String getSegmentBytes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#segment_bytes DatabaseKafkaTopic#segment_bytes}.

---

##### `segmentIndexBytes`<sup>Optional</sup> <a name="segmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentIndexBytes"></a>

```java
public java.lang.String getSegmentIndexBytes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#segment_index_bytes DatabaseKafkaTopic#segment_index_bytes}.

---

##### `segmentJitterMs`<sup>Optional</sup> <a name="segmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentJitterMs"></a>

```java
public java.lang.String getSegmentJitterMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#segment_jitter_ms DatabaseKafkaTopic#segment_jitter_ms}.

---

##### `segmentMs`<sup>Optional</sup> <a name="segmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentMs"></a>

```java
public java.lang.String getSegmentMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_kafka_topic#segment_ms DatabaseKafkaTopic#segment_ms}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseKafkaTopicConfigAList <a name="DatabaseKafkaTopicConfigAList" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_topic.DatabaseKafkaTopicConfigAList;

new DatabaseKafkaTopicConfigAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get"></a>

```java
public DatabaseKafkaTopicConfigAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>>

---


### DatabaseKafkaTopicConfigAOutputReference <a name="DatabaseKafkaTopicConfigAOutputReference" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.database_kafka_topic.DatabaseKafkaTopicConfigAOutputReference;

new DatabaseKafkaTopicConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCleanupPolicy">resetCleanupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetDeleteRetentionMs">resetDeleteRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFileDeleteDelayMs">resetFileDeleteDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMessages">resetFlushMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMs">resetFlushMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetIndexIntervalBytes">resetIndexIntervalBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxCompactionLagMs">resetMaxCompactionLagMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxMessageBytes">resetMaxMessageBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageDownConversionEnable">resetMessageDownConversionEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageFormatVersion">resetMessageFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampDifferenceMaxMs">resetMessageTimestampDifferenceMaxMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampType">resetMessageTimestampType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCleanableDirtyRatio">resetMinCleanableDirtyRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCompactionLagMs">resetMinCompactionLagMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinInsyncReplicas">resetMinInsyncReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetPreallocate">resetPreallocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionBytes">resetRetentionBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionMs">resetRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentBytes">resetSegmentBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentIndexBytes">resetSegmentIndexBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentJitterMs">resetSegmentJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentMs">resetSegmentMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCleanupPolicy` <a name="resetCleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCleanupPolicy"></a>

```java
public void resetCleanupPolicy()
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCompressionType"></a>

```java
public void resetCompressionType()
```

##### `resetDeleteRetentionMs` <a name="resetDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetDeleteRetentionMs"></a>

```java
public void resetDeleteRetentionMs()
```

##### `resetFileDeleteDelayMs` <a name="resetFileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFileDeleteDelayMs"></a>

```java
public void resetFileDeleteDelayMs()
```

##### `resetFlushMessages` <a name="resetFlushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMessages"></a>

```java
public void resetFlushMessages()
```

##### `resetFlushMs` <a name="resetFlushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMs"></a>

```java
public void resetFlushMs()
```

##### `resetIndexIntervalBytes` <a name="resetIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetIndexIntervalBytes"></a>

```java
public void resetIndexIntervalBytes()
```

##### `resetMaxCompactionLagMs` <a name="resetMaxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxCompactionLagMs"></a>

```java
public void resetMaxCompactionLagMs()
```

##### `resetMaxMessageBytes` <a name="resetMaxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxMessageBytes"></a>

```java
public void resetMaxMessageBytes()
```

##### `resetMessageDownConversionEnable` <a name="resetMessageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageDownConversionEnable"></a>

```java
public void resetMessageDownConversionEnable()
```

##### `resetMessageFormatVersion` <a name="resetMessageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageFormatVersion"></a>

```java
public void resetMessageFormatVersion()
```

##### `resetMessageTimestampDifferenceMaxMs` <a name="resetMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampDifferenceMaxMs"></a>

```java
public void resetMessageTimestampDifferenceMaxMs()
```

##### `resetMessageTimestampType` <a name="resetMessageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampType"></a>

```java
public void resetMessageTimestampType()
```

##### `resetMinCleanableDirtyRatio` <a name="resetMinCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCleanableDirtyRatio"></a>

```java
public void resetMinCleanableDirtyRatio()
```

##### `resetMinCompactionLagMs` <a name="resetMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCompactionLagMs"></a>

```java
public void resetMinCompactionLagMs()
```

##### `resetMinInsyncReplicas` <a name="resetMinInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinInsyncReplicas"></a>

```java
public void resetMinInsyncReplicas()
```

##### `resetPreallocate` <a name="resetPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetPreallocate"></a>

```java
public void resetPreallocate()
```

##### `resetRetentionBytes` <a name="resetRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionBytes"></a>

```java
public void resetRetentionBytes()
```

##### `resetRetentionMs` <a name="resetRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionMs"></a>

```java
public void resetRetentionMs()
```

##### `resetSegmentBytes` <a name="resetSegmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentBytes"></a>

```java
public void resetSegmentBytes()
```

##### `resetSegmentIndexBytes` <a name="resetSegmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentIndexBytes"></a>

```java
public void resetSegmentIndexBytes()
```

##### `resetSegmentJitterMs` <a name="resetSegmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentJitterMs"></a>

```java
public void resetSegmentJitterMs()
```

##### `resetSegmentMs` <a name="resetSegmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentMs"></a>

```java
public void resetSegmentMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicyInput">cleanupPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMsInput">deleteRetentionMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMsInput">fileDeleteDelayMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessagesInput">flushMessagesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMsInput">flushMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytesInput">indexIntervalBytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMsInput">maxCompactionLagMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytesInput">maxMessageBytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnableInput">messageDownConversionEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersionInput">messageFormatVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMsInput">messageTimestampDifferenceMaxMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampTypeInput">messageTimestampTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatioInput">minCleanableDirtyRatioInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMsInput">minCompactionLagMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicasInput">minInsyncReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocateInput">preallocateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytesInput">retentionBytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMsInput">retentionMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytesInput">segmentBytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytesInput">segmentIndexBytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMsInput">segmentJitterMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMsInput">segmentMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicy">cleanupPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMs">deleteRetentionMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMs">fileDeleteDelayMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessages">flushMessages</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMs">flushMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytes">indexIntervalBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMs">maxCompactionLagMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytes">maxMessageBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnable">messageDownConversionEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersion">messageFormatVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMs">messageTimestampDifferenceMaxMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampType">messageTimestampType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatio">minCleanableDirtyRatio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMs">minCompactionLagMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicas">minInsyncReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocate">preallocate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytes">retentionBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMs">retentionMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytes">segmentBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytes">segmentIndexBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMs">segmentJitterMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMs">segmentMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cleanupPolicyInput`<sup>Optional</sup> <a name="cleanupPolicyInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicyInput"></a>

```java
public java.lang.String getCleanupPolicyInput();
```

- *Type:* java.lang.String

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionTypeInput"></a>

```java
public java.lang.String getCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteRetentionMsInput`<sup>Optional</sup> <a name="deleteRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMsInput"></a>

```java
public java.lang.String getDeleteRetentionMsInput();
```

- *Type:* java.lang.String

---

##### `fileDeleteDelayMsInput`<sup>Optional</sup> <a name="fileDeleteDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMsInput"></a>

```java
public java.lang.String getFileDeleteDelayMsInput();
```

- *Type:* java.lang.String

---

##### `flushMessagesInput`<sup>Optional</sup> <a name="flushMessagesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessagesInput"></a>

```java
public java.lang.String getFlushMessagesInput();
```

- *Type:* java.lang.String

---

##### `flushMsInput`<sup>Optional</sup> <a name="flushMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMsInput"></a>

```java
public java.lang.String getFlushMsInput();
```

- *Type:* java.lang.String

---

##### `indexIntervalBytesInput`<sup>Optional</sup> <a name="indexIntervalBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytesInput"></a>

```java
public java.lang.String getIndexIntervalBytesInput();
```

- *Type:* java.lang.String

---

##### `maxCompactionLagMsInput`<sup>Optional</sup> <a name="maxCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMsInput"></a>

```java
public java.lang.String getMaxCompactionLagMsInput();
```

- *Type:* java.lang.String

---

##### `maxMessageBytesInput`<sup>Optional</sup> <a name="maxMessageBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytesInput"></a>

```java
public java.lang.String getMaxMessageBytesInput();
```

- *Type:* java.lang.String

---

##### `messageDownConversionEnableInput`<sup>Optional</sup> <a name="messageDownConversionEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnableInput"></a>

```java
public java.lang.Object getMessageDownConversionEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messageFormatVersionInput`<sup>Optional</sup> <a name="messageFormatVersionInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersionInput"></a>

```java
public java.lang.String getMessageFormatVersionInput();
```

- *Type:* java.lang.String

---

##### `messageTimestampDifferenceMaxMsInput`<sup>Optional</sup> <a name="messageTimestampDifferenceMaxMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMsInput"></a>

```java
public java.lang.String getMessageTimestampDifferenceMaxMsInput();
```

- *Type:* java.lang.String

---

##### `messageTimestampTypeInput`<sup>Optional</sup> <a name="messageTimestampTypeInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampTypeInput"></a>

```java
public java.lang.String getMessageTimestampTypeInput();
```

- *Type:* java.lang.String

---

##### `minCleanableDirtyRatioInput`<sup>Optional</sup> <a name="minCleanableDirtyRatioInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatioInput"></a>

```java
public java.lang.Number getMinCleanableDirtyRatioInput();
```

- *Type:* java.lang.Number

---

##### `minCompactionLagMsInput`<sup>Optional</sup> <a name="minCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMsInput"></a>

```java
public java.lang.String getMinCompactionLagMsInput();
```

- *Type:* java.lang.String

---

##### `minInsyncReplicasInput`<sup>Optional</sup> <a name="minInsyncReplicasInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicasInput"></a>

```java
public java.lang.Number getMinInsyncReplicasInput();
```

- *Type:* java.lang.Number

---

##### `preallocateInput`<sup>Optional</sup> <a name="preallocateInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocateInput"></a>

```java
public java.lang.Object getPreallocateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionBytesInput`<sup>Optional</sup> <a name="retentionBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytesInput"></a>

```java
public java.lang.String getRetentionBytesInput();
```

- *Type:* java.lang.String

---

##### `retentionMsInput`<sup>Optional</sup> <a name="retentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMsInput"></a>

```java
public java.lang.String getRetentionMsInput();
```

- *Type:* java.lang.String

---

##### `segmentBytesInput`<sup>Optional</sup> <a name="segmentBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytesInput"></a>

```java
public java.lang.String getSegmentBytesInput();
```

- *Type:* java.lang.String

---

##### `segmentIndexBytesInput`<sup>Optional</sup> <a name="segmentIndexBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytesInput"></a>

```java
public java.lang.String getSegmentIndexBytesInput();
```

- *Type:* java.lang.String

---

##### `segmentJitterMsInput`<sup>Optional</sup> <a name="segmentJitterMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMsInput"></a>

```java
public java.lang.String getSegmentJitterMsInput();
```

- *Type:* java.lang.String

---

##### `segmentMsInput`<sup>Optional</sup> <a name="segmentMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMsInput"></a>

```java
public java.lang.String getSegmentMsInput();
```

- *Type:* java.lang.String

---

##### `cleanupPolicy`<sup>Required</sup> <a name="cleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicy"></a>

```java
public java.lang.String getCleanupPolicy();
```

- *Type:* java.lang.String

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `deleteRetentionMs`<sup>Required</sup> <a name="deleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMs"></a>

```java
public java.lang.String getDeleteRetentionMs();
```

- *Type:* java.lang.String

---

##### `fileDeleteDelayMs`<sup>Required</sup> <a name="fileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMs"></a>

```java
public java.lang.String getFileDeleteDelayMs();
```

- *Type:* java.lang.String

---

##### `flushMessages`<sup>Required</sup> <a name="flushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessages"></a>

```java
public java.lang.String getFlushMessages();
```

- *Type:* java.lang.String

---

##### `flushMs`<sup>Required</sup> <a name="flushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMs"></a>

```java
public java.lang.String getFlushMs();
```

- *Type:* java.lang.String

---

##### `indexIntervalBytes`<sup>Required</sup> <a name="indexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytes"></a>

```java
public java.lang.String getIndexIntervalBytes();
```

- *Type:* java.lang.String

---

##### `maxCompactionLagMs`<sup>Required</sup> <a name="maxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMs"></a>

```java
public java.lang.String getMaxCompactionLagMs();
```

- *Type:* java.lang.String

---

##### `maxMessageBytes`<sup>Required</sup> <a name="maxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytes"></a>

```java
public java.lang.String getMaxMessageBytes();
```

- *Type:* java.lang.String

---

##### `messageDownConversionEnable`<sup>Required</sup> <a name="messageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnable"></a>

```java
public java.lang.Object getMessageDownConversionEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messageFormatVersion`<sup>Required</sup> <a name="messageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersion"></a>

```java
public java.lang.String getMessageFormatVersion();
```

- *Type:* java.lang.String

---

##### `messageTimestampDifferenceMaxMs`<sup>Required</sup> <a name="messageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMs"></a>

```java
public java.lang.String getMessageTimestampDifferenceMaxMs();
```

- *Type:* java.lang.String

---

##### `messageTimestampType`<sup>Required</sup> <a name="messageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampType"></a>

```java
public java.lang.String getMessageTimestampType();
```

- *Type:* java.lang.String

---

##### `minCleanableDirtyRatio`<sup>Required</sup> <a name="minCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatio"></a>

```java
public java.lang.Number getMinCleanableDirtyRatio();
```

- *Type:* java.lang.Number

---

##### `minCompactionLagMs`<sup>Required</sup> <a name="minCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMs"></a>

```java
public java.lang.String getMinCompactionLagMs();
```

- *Type:* java.lang.String

---

##### `minInsyncReplicas`<sup>Required</sup> <a name="minInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicas"></a>

```java
public java.lang.Number getMinInsyncReplicas();
```

- *Type:* java.lang.Number

---

##### `preallocate`<sup>Required</sup> <a name="preallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocate"></a>

```java
public java.lang.Object getPreallocate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionBytes`<sup>Required</sup> <a name="retentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytes"></a>

```java
public java.lang.String getRetentionBytes();
```

- *Type:* java.lang.String

---

##### `retentionMs`<sup>Required</sup> <a name="retentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMs"></a>

```java
public java.lang.String getRetentionMs();
```

- *Type:* java.lang.String

---

##### `segmentBytes`<sup>Required</sup> <a name="segmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytes"></a>

```java
public java.lang.String getSegmentBytes();
```

- *Type:* java.lang.String

---

##### `segmentIndexBytes`<sup>Required</sup> <a name="segmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytes"></a>

```java
public java.lang.String getSegmentIndexBytes();
```

- *Type:* java.lang.String

---

##### `segmentJitterMs`<sup>Required</sup> <a name="segmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMs"></a>

```java
public java.lang.String getSegmentJitterMs();
```

- *Type:* java.lang.String

---

##### `segmentMs`<sup>Required</sup> <a name="segmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMs"></a>

```java
public java.lang.String getSegmentMs();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA">DatabaseKafkaTopicConfigA</a>

---



