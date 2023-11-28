# `dataDigitaloceanSshKeys` Submodule <a name="`dataDigitaloceanSshKeys` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanSshKeys <a name="DataDigitaloceanSshKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys digitalocean_ssh_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeys;

DataDigitaloceanSshKeys.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataDigitaloceanSshKeysFilter>)
//  .id(java.lang.String)
//  .sort(IResolvable)
//  .sort(java.util.List<DataDigitaloceanSshKeysSort>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter">DataDigitaloceanSshKeysFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#id DataDigitaloceanSshKeys#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.sort">sort</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort">DataDigitaloceanSshKeysSort</a>></code> | sort block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter">DataDigitaloceanSshKeysFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#filter DataDigitaloceanSshKeys#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#id DataDigitaloceanSshKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.Initializer.parameter.sort"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort">DataDigitaloceanSshKeysSort</a>>

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#sort DataDigitaloceanSshKeys#sort}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.putSort">putSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.resetSort">resetSort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataDigitaloceanSshKeysFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter">DataDigitaloceanSshKeysFilter</a>>

---

##### `putSort` <a name="putSort" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.putSort"></a>

```java
public void putSort(IResolvable OR java.util.List<DataDigitaloceanSshKeysSort> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.putSort.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort">DataDigitaloceanSshKeysSort</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.resetId"></a>

```java
public void resetId()
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.resetSort"></a>

```java
public void resetSort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanSshKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeys;

DataDigitaloceanSshKeys.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeys;

DataDigitaloceanSshKeys.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeys;

DataDigitaloceanSshKeys.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeys;

DataDigitaloceanSshKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDigitaloceanSshKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDigitaloceanSshKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDigitaloceanSshKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDigitaloceanSshKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanSshKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList">DataDigitaloceanSshKeysFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList">DataDigitaloceanSshKeysSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.sshKeys">sshKeys</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList">DataDigitaloceanSshKeysSshKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter">DataDigitaloceanSshKeysFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.sortInput">sortInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort">DataDigitaloceanSshKeysSort</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.filter"></a>

```java
public DataDigitaloceanSshKeysFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList">DataDigitaloceanSshKeysFilterList</a>

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.sort"></a>

```java
public DataDigitaloceanSshKeysSortList getSort();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList">DataDigitaloceanSshKeysSortList</a>

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.sshKeys"></a>

```java
public DataDigitaloceanSshKeysSshKeysList getSshKeys();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList">DataDigitaloceanSshKeysSshKeysList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter">DataDigitaloceanSshKeysFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.sortInput"></a>

```java
public java.lang.Object getSortInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort">DataDigitaloceanSshKeysSort</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeys.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanSshKeysConfig <a name="DataDigitaloceanSshKeysConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeysConfig;

DataDigitaloceanSshKeysConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataDigitaloceanSshKeysFilter>)
//  .id(java.lang.String)
//  .sort(IResolvable)
//  .sort(java.util.List<DataDigitaloceanSshKeysSort>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter">DataDigitaloceanSshKeysFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#id DataDigitaloceanSshKeys#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.sort">sort</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort">DataDigitaloceanSshKeysSort</a>></code> | sort block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter">DataDigitaloceanSshKeysFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#filter DataDigitaloceanSshKeys#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#id DataDigitaloceanSshKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysConfig.property.sort"></a>

```java
public java.lang.Object getSort();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort">DataDigitaloceanSshKeysSort</a>>

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#sort DataDigitaloceanSshKeys#sort}

---

### DataDigitaloceanSshKeysFilter <a name="DataDigitaloceanSshKeysFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeysFilter;

DataDigitaloceanSshKeysFilter.builder()
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
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#key DataDigitaloceanSshKeys#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#values DataDigitaloceanSshKeys#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#all DataDigitaloceanSshKeys#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter.property.matchBy">matchBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#match_by DataDigitaloceanSshKeys#match_by}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#key DataDigitaloceanSshKeys#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#values DataDigitaloceanSshKeys#values}.

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#all DataDigitaloceanSshKeys#all}.

---

##### `matchBy`<sup>Optional</sup> <a name="matchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter.property.matchBy"></a>

```java
public java.lang.String getMatchBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#match_by DataDigitaloceanSshKeys#match_by}.

---

### DataDigitaloceanSshKeysSort <a name="DataDigitaloceanSshKeysSort" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeysSort;

DataDigitaloceanSshKeysSort.builder()
    .key(java.lang.String)
//  .direction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#key DataDigitaloceanSshKeys#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort.property.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#direction DataDigitaloceanSshKeys#direction}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#key DataDigitaloceanSshKeys#key}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/ssh_keys#direction DataDigitaloceanSshKeys#direction}.

---

### DataDigitaloceanSshKeysSshKeys <a name="DataDigitaloceanSshKeysSshKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeysSshKeys;

DataDigitaloceanSshKeysSshKeys.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanSshKeysFilterList <a name="DataDigitaloceanSshKeysFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeysFilterList;

new DataDigitaloceanSshKeysFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.get"></a>

```java
public DataDigitaloceanSshKeysFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter">DataDigitaloceanSshKeysFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter">DataDigitaloceanSshKeysFilter</a>>

---


### DataDigitaloceanSshKeysFilterOutputReference <a name="DataDigitaloceanSshKeysFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeysFilterOutputReference;

new DataDigitaloceanSshKeysFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.resetMatchBy">resetMatchBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetMatchBy` <a name="resetMatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.resetMatchBy"></a>

```java
public void resetMatchBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.matchByInput">matchByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.all">all</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.matchBy">matchBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter">DataDigitaloceanSshKeysFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.allInput"></a>

```java
public java.lang.Object getAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchByInput`<sup>Optional</sup> <a name="matchByInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.matchByInput"></a>

```java
public java.lang.String getMatchByInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.all"></a>

```java
public java.lang.Object getAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchBy`<sup>Required</sup> <a name="matchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.matchBy"></a>

```java
public java.lang.String getMatchBy();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysFilter">DataDigitaloceanSshKeysFilter</a>

---


### DataDigitaloceanSshKeysSortList <a name="DataDigitaloceanSshKeysSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeysSortList;

new DataDigitaloceanSshKeysSortList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.get"></a>

```java
public DataDigitaloceanSshKeysSortOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort">DataDigitaloceanSshKeysSort</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort">DataDigitaloceanSshKeysSort</a>>

---


### DataDigitaloceanSshKeysSortOutputReference <a name="DataDigitaloceanSshKeysSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeysSortOutputReference;

new DataDigitaloceanSshKeysSortOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.resetDirection">resetDirection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.resetDirection"></a>

```java
public void resetDirection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort">DataDigitaloceanSshKeysSort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSortOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSort">DataDigitaloceanSshKeysSort</a>

---


### DataDigitaloceanSshKeysSshKeysList <a name="DataDigitaloceanSshKeysSshKeysList" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeysSshKeysList;

new DataDigitaloceanSshKeysSshKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.get"></a>

```java
public DataDigitaloceanSshKeysSshKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanSshKeysSshKeysOutputReference <a name="DataDigitaloceanSshKeysSshKeysOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_ssh_keys.DataDigitaloceanSshKeysSshKeysOutputReference;

new DataDigitaloceanSshKeysSshKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeys">DataDigitaloceanSshKeysSshKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeysOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanSshKeysSshKeys getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSshKeys.DataDigitaloceanSshKeysSshKeys">DataDigitaloceanSshKeysSshKeys</a>

---



