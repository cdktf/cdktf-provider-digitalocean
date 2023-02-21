# `dataDigitaloceanKubernetesCluster` Submodule <a name="`dataDigitaloceanKubernetesCluster` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanKubernetesCluster <a name="DataDigitaloceanKubernetesCluster" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster digitalocean_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesCluster;

DataDigitaloceanKubernetesCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#name DataDigitaloceanKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#id DataDigitaloceanKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#tags DataDigitaloceanKubernetesCluster#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#name DataDigitaloceanKubernetesCluster#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#id DataDigitaloceanKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#tags DataDigitaloceanKubernetesCluster#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesCluster;

DataDigitaloceanKubernetesCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesCluster;

DataDigitaloceanKubernetesCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesCluster;

DataDigitaloceanKubernetesCluster.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.autoUpgrade">autoUpgrade</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.clusterSubnet">clusterSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.ha">ha</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.kubeConfig">kubeConfig</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList">DataDigitaloceanKubernetesClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList">DataDigitaloceanKubernetesClusterMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.nodePool">nodePool</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList">DataDigitaloceanKubernetesClusterNodePoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.serviceSubnet">serviceSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.surgeUpgrade">surgeUpgrade</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.urn">urn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autoUpgrade`<sup>Required</sup> <a name="autoUpgrade" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.autoUpgrade"></a>

```java
public IResolvable getAutoUpgrade();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `clusterSubnet`<sup>Required</sup> <a name="clusterSubnet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.clusterSubnet"></a>

```java
public java.lang.String getClusterSubnet();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `ha`<sup>Required</sup> <a name="ha" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.ha"></a>

```java
public IResolvable getHa();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

---

##### `kubeConfig`<sup>Required</sup> <a name="kubeConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.kubeConfig"></a>

```java
public DataDigitaloceanKubernetesClusterKubeConfigList getKubeConfig();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList">DataDigitaloceanKubernetesClusterKubeConfigList</a>

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.maintenancePolicy"></a>

```java
public DataDigitaloceanKubernetesClusterMaintenancePolicyList getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList">DataDigitaloceanKubernetesClusterMaintenancePolicyList</a>

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.nodePool"></a>

```java
public DataDigitaloceanKubernetesClusterNodePoolList getNodePool();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList">DataDigitaloceanKubernetesClusterNodePoolList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceSubnet`<sup>Required</sup> <a name="serviceSubnet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.serviceSubnet"></a>

```java
public java.lang.String getServiceSubnet();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `surgeUpgrade`<sup>Required</sup> <a name="surgeUpgrade" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.surgeUpgrade"></a>

```java
public IResolvable getSurgeUpgrade();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.urn"></a>

```java
public java.lang.String getUrn();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.vpcUuid"></a>

```java
public java.lang.String getVpcUuid();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanKubernetesClusterConfig <a name="DataDigitaloceanKubernetesClusterConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterConfig;

DataDigitaloceanKubernetesClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#name DataDigitaloceanKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#id DataDigitaloceanKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#tags DataDigitaloceanKubernetesCluster#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#name DataDigitaloceanKubernetesCluster#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#id DataDigitaloceanKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/kubernetes_cluster#tags DataDigitaloceanKubernetesCluster#tags}.

---

### DataDigitaloceanKubernetesClusterKubeConfig <a name="DataDigitaloceanKubernetesClusterKubeConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterKubeConfig;

DataDigitaloceanKubernetesClusterKubeConfig.builder()
    .build();
```


### DataDigitaloceanKubernetesClusterMaintenancePolicy <a name="DataDigitaloceanKubernetesClusterMaintenancePolicy" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterMaintenancePolicy;

DataDigitaloceanKubernetesClusterMaintenancePolicy.builder()
    .build();
```


### DataDigitaloceanKubernetesClusterNodePool <a name="DataDigitaloceanKubernetesClusterNodePool" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterNodePool;

DataDigitaloceanKubernetesClusterNodePool.builder()
    .build();
```


### DataDigitaloceanKubernetesClusterNodePoolNodes <a name="DataDigitaloceanKubernetesClusterNodePoolNodes" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterNodePoolNodes;

DataDigitaloceanKubernetesClusterNodePoolNodes.builder()
    .build();
```


### DataDigitaloceanKubernetesClusterNodePoolTaint <a name="DataDigitaloceanKubernetesClusterNodePoolTaint" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterNodePoolTaint;

DataDigitaloceanKubernetesClusterNodePoolTaint.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanKubernetesClusterKubeConfigList <a name="DataDigitaloceanKubernetesClusterKubeConfigList" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterKubeConfigList;

new DataDigitaloceanKubernetesClusterKubeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.get"></a>

```java
public DataDigitaloceanKubernetesClusterKubeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanKubernetesClusterKubeConfigOutputReference <a name="DataDigitaloceanKubernetesClusterKubeConfigOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference;

new DataDigitaloceanKubernetesClusterKubeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.rawConfig">rawConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfig">DataDigitaloceanKubernetesClusterKubeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```java
public java.lang.String getClusterCaCertificate();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `rawConfig`<sup>Required</sup> <a name="rawConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.rawConfig"></a>

```java
public java.lang.String getRawConfig();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfigOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanKubernetesClusterKubeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterKubeConfig">DataDigitaloceanKubernetesClusterKubeConfig</a>

---


### DataDigitaloceanKubernetesClusterMaintenancePolicyList <a name="DataDigitaloceanKubernetesClusterMaintenancePolicyList" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList;

new DataDigitaloceanKubernetesClusterMaintenancePolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.get"></a>

```java
public DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference <a name="DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference;

new DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicy">DataDigitaloceanKubernetesClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanKubernetesClusterMaintenancePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterMaintenancePolicy">DataDigitaloceanKubernetesClusterMaintenancePolicy</a>

---


### DataDigitaloceanKubernetesClusterNodePoolList <a name="DataDigitaloceanKubernetesClusterNodePoolList" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterNodePoolList;

new DataDigitaloceanKubernetesClusterNodePoolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.get"></a>

```java
public DataDigitaloceanKubernetesClusterNodePoolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanKubernetesClusterNodePoolNodesList <a name="DataDigitaloceanKubernetesClusterNodePoolNodesList" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterNodePoolNodesList;

new DataDigitaloceanKubernetesClusterNodePoolNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.get"></a>

```java
public DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference <a name="DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference;

new DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.dropletId">dropletId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodes">DataDigitaloceanKubernetesClusterNodePoolNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dropletId`<sup>Required</sup> <a name="dropletId" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.dropletId"></a>

```java
public java.lang.String getDropletId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanKubernetesClusterNodePoolNodes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodes">DataDigitaloceanKubernetesClusterNodePoolNodes</a>

---


### DataDigitaloceanKubernetesClusterNodePoolOutputReference <a name="DataDigitaloceanKubernetesClusterNodePoolOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference;

new DataDigitaloceanKubernetesClusterNodePoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.actualNodeCount">actualNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.autoScale">autoScale</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList">DataDigitaloceanKubernetesClusterNodePoolNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.taint">taint</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList">DataDigitaloceanKubernetesClusterNodePoolTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePool">DataDigitaloceanKubernetesClusterNodePool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actualNodeCount`<sup>Required</sup> <a name="actualNodeCount" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.actualNodeCount"></a>

```java
public java.lang.Number getActualNodeCount();
```

- *Type:* java.lang.Number

---

##### `autoScale`<sup>Required</sup> <a name="autoScale" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.autoScale"></a>

```java
public IResolvable getAutoScale();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.nodes"></a>

```java
public DataDigitaloceanKubernetesClusterNodePoolNodesList getNodes();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolNodesList">DataDigitaloceanKubernetesClusterNodePoolNodesList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.taint"></a>

```java
public DataDigitaloceanKubernetesClusterNodePoolTaintList getTaint();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList">DataDigitaloceanKubernetesClusterNodePoolTaintList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanKubernetesClusterNodePool getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePool">DataDigitaloceanKubernetesClusterNodePool</a>

---


### DataDigitaloceanKubernetesClusterNodePoolTaintList <a name="DataDigitaloceanKubernetesClusterNodePoolTaintList" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterNodePoolTaintList;

new DataDigitaloceanKubernetesClusterNodePoolTaintList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.get"></a>

```java
public DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference <a name="DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_kubernetes_cluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference;

new DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaint">DataDigitaloceanKubernetesClusterNodePoolTaint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaintOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanKubernetesClusterNodePoolTaint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanKubernetesCluster.DataDigitaloceanKubernetesClusterNodePoolTaint">DataDigitaloceanKubernetesClusterNodePoolTaint</a>

---



