# `spacesBucketCorsConfiguration` Submodule <a name="`spacesBucketCorsConfiguration` Submodule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpacesBucketCorsConfiguration <a name="SpacesBucketCorsConfiguration" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration digitalocean_spaces_bucket_cors_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_cors_configuration.SpacesBucketCorsConfiguration;

SpacesBucketCorsConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .corsRule(IResolvable)
    .corsRule(java.util.List<SpacesBucketCorsConfigurationCorsRule>)
    .region(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Bucket ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.corsRule">corsRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Bucket ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#bucket SpacesBucketCorsConfiguration#bucket}

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.corsRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#cors_rule SpacesBucketCorsConfiguration#cors_rule}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule"></a>

```java
public void putCorsRule(IResolvable OR java.util.List<SpacesBucketCorsConfigurationCorsRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.putCorsRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpacesBucketCorsConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_cors_configuration.SpacesBucketCorsConfiguration;

SpacesBucketCorsConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_cors_configuration.SpacesBucketCorsConfiguration;

SpacesBucketCorsConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_cors_configuration.SpacesBucketCorsConfiguration;

SpacesBucketCorsConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_cors_configuration.SpacesBucketCorsConfiguration;

SpacesBucketCorsConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpacesBucketCorsConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SpacesBucketCorsConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpacesBucketCorsConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpacesBucketCorsConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SpacesBucketCorsConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList">SpacesBucketCorsConfigurationCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRuleInput">corsRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRule"></a>

```java
public SpacesBucketCorsConfigurationCorsRuleList getCorsRule();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList">SpacesBucketCorsConfigurationCorsRuleList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.corsRuleInput"></a>

```java
public java.lang.Object getCorsRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpacesBucketCorsConfigurationConfig <a name="SpacesBucketCorsConfigurationConfig" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_cors_configuration.SpacesBucketCorsConfigurationConfig;

SpacesBucketCorsConfigurationConfig.builder()
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
    .bucket(java.lang.String)
    .corsRule(IResolvable)
    .corsRule(java.util.List<SpacesBucketCorsConfigurationCorsRule>)
    .region(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Bucket ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.corsRule">corsRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Bucket ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#bucket SpacesBucketCorsConfiguration#bucket}

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.corsRule"></a>

```java
public java.lang.Object getCorsRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#cors_rule SpacesBucketCorsConfiguration#cors_rule}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#region SpacesBucketCorsConfiguration#region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SpacesBucketCorsConfigurationCorsRule <a name="SpacesBucketCorsConfigurationCorsRule" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_cors_configuration.SpacesBucketCorsConfigurationCorsRule;

SpacesBucketCorsConfigurationCorsRule.builder()
    .allowedMethods(java.util.List<java.lang.String>)
    .allowedOrigins(java.util.List<java.lang.String>)
//  .allowedHeaders(java.util.List<java.lang.String>)
//  .exposeHeaders(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .maxAgeSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#allowed_methods SpacesBucketCorsConfiguration#allowed_methods}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#allowed_origins SpacesBucketCorsConfiguration#allowed_origins}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#allowed_headers SpacesBucketCorsConfiguration#allowed_headers}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#expose_headers SpacesBucketCorsConfiguration#expose_headers}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#max_age_seconds SpacesBucketCorsConfiguration#max_age_seconds}. |

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#allowed_methods SpacesBucketCorsConfiguration#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#allowed_origins SpacesBucketCorsConfiguration#allowed_origins}.

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#allowed_headers SpacesBucketCorsConfiguration#allowed_headers}.

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#expose_headers SpacesBucketCorsConfiguration#expose_headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#id SpacesBucketCorsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/spaces_bucket_cors_configuration#max_age_seconds SpacesBucketCorsConfiguration#max_age_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpacesBucketCorsConfigurationCorsRuleList <a name="SpacesBucketCorsConfigurationCorsRuleList" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_cors_configuration.SpacesBucketCorsConfigurationCorsRuleList;

new SpacesBucketCorsConfigurationCorsRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get"></a>

```java
public SpacesBucketCorsConfigurationCorsRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>>

---


### SpacesBucketCorsConfigurationCorsRuleOutputReference <a name="SpacesBucketCorsConfigurationCorsRuleOutputReference" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_cors_configuration.SpacesBucketCorsConfigurationCorsRuleOutputReference;

new SpacesBucketCorsConfigurationCorsRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetAllowedHeaders"></a>

```java
public void resetAllowedHeaders()
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetExposeHeaders"></a>

```java
public void resetExposeHeaders()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```java
public void resetMaxAgeSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposeHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```java
public java.lang.Number getMaxAgeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.spacesBucketCorsConfiguration.SpacesBucketCorsConfigurationCorsRule">SpacesBucketCorsConfigurationCorsRule</a>

---



