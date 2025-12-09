# `dataDigitaloceanByoipPrefixResources` Submodule <a name="`dataDigitaloceanByoipPrefixResources` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanByoipPrefixResources <a name="DataDigitaloceanByoipPrefixResources" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources digitalocean_byoip_prefix_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_byoip_prefix_resources.DataDigitaloceanByoipPrefixResources;

DataDigitaloceanByoipPrefixResources.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .byoipPrefixUuid(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.byoipPrefixUuid">byoipPrefixUuid</a></code> | <code>java.lang.String</code> | UUID of the BYOIP prefix to list assigned addresses from. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#id DataDigitaloceanByoipPrefixResources#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `byoipPrefixUuid`<sup>Required</sup> <a name="byoipPrefixUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.byoipPrefixUuid"></a>

- *Type:* java.lang.String

UUID of the BYOIP prefix to list assigned addresses from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#byoip_prefix_uuid DataDigitaloceanByoipPrefixResources#byoip_prefix_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#id DataDigitaloceanByoipPrefixResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanByoipPrefixResources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_byoip_prefix_resources.DataDigitaloceanByoipPrefixResources;

DataDigitaloceanByoipPrefixResources.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_byoip_prefix_resources.DataDigitaloceanByoipPrefixResources;

DataDigitaloceanByoipPrefixResources.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_byoip_prefix_resources.DataDigitaloceanByoipPrefixResources;

DataDigitaloceanByoipPrefixResources.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_byoip_prefix_resources.DataDigitaloceanByoipPrefixResources;

DataDigitaloceanByoipPrefixResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDigitaloceanByoipPrefixResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDigitaloceanByoipPrefixResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDigitaloceanByoipPrefixResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDigitaloceanByoipPrefixResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanByoipPrefixResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList">DataDigitaloceanByoipPrefixResourcesAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuidInput">byoipPrefixUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuid">byoipPrefixUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.addresses"></a>

```java
public DataDigitaloceanByoipPrefixResourcesAddressesList getAddresses();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList">DataDigitaloceanByoipPrefixResourcesAddressesList</a>

---

##### `byoipPrefixUuidInput`<sup>Optional</sup> <a name="byoipPrefixUuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuidInput"></a>

```java
public java.lang.String getByoipPrefixUuidInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `byoipPrefixUuid`<sup>Required</sup> <a name="byoipPrefixUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuid"></a>

```java
public java.lang.String getByoipPrefixUuid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanByoipPrefixResourcesAddresses <a name="DataDigitaloceanByoipPrefixResourcesAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_byoip_prefix_resources.DataDigitaloceanByoipPrefixResourcesAddresses;

DataDigitaloceanByoipPrefixResourcesAddresses.builder()
    .build();
```


### DataDigitaloceanByoipPrefixResourcesConfig <a name="DataDigitaloceanByoipPrefixResourcesConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_byoip_prefix_resources.DataDigitaloceanByoipPrefixResourcesConfig;

DataDigitaloceanByoipPrefixResourcesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .byoipPrefixUuid(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.byoipPrefixUuid">byoipPrefixUuid</a></code> | <code>java.lang.String</code> | UUID of the BYOIP prefix to list assigned addresses from. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#id DataDigitaloceanByoipPrefixResources#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `byoipPrefixUuid`<sup>Required</sup> <a name="byoipPrefixUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.byoipPrefixUuid"></a>

```java
public java.lang.String getByoipPrefixUuid();
```

- *Type:* java.lang.String

UUID of the BYOIP prefix to list assigned addresses from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#byoip_prefix_uuid DataDigitaloceanByoipPrefixResources#byoip_prefix_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#id DataDigitaloceanByoipPrefixResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanByoipPrefixResourcesAddressesList <a name="DataDigitaloceanByoipPrefixResourcesAddressesList" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_byoip_prefix_resources.DataDigitaloceanByoipPrefixResourcesAddressesList;

new DataDigitaloceanByoipPrefixResourcesAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.get"></a>

```java
public DataDigitaloceanByoipPrefixResourcesAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDigitaloceanByoipPrefixResourcesAddressesOutputReference <a name="DataDigitaloceanByoipPrefixResourcesAddressesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.data_digitalocean_byoip_prefix_resources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference;

new DataDigitaloceanByoipPrefixResourcesAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.assignedAt">assignedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses">DataDigitaloceanByoipPrefixResourcesAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignedAt`<sup>Required</sup> <a name="assignedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.assignedAt"></a>

```java
public java.lang.String getAssignedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.internalValue"></a>

```java
public DataDigitaloceanByoipPrefixResourcesAddresses getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses">DataDigitaloceanByoipPrefixResourcesAddresses</a>

---



