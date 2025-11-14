# `genaiAgentRoute` Submodule <a name="`genaiAgentRoute` Submodule" id="@cdktf/provider-digitalocean.genaiAgentRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiAgentRoute <a name="GenaiAgentRoute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route digitalocean_genai_agent_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_agent_route.GenaiAgentRoute;

GenaiAgentRoute.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .childAgentUuid(java.lang.String)
    .parentAgentUuid(java.lang.String)
//  .id(java.lang.String)
//  .ifCase(java.lang.String)
//  .rollback(java.lang.Boolean|IResolvable)
//  .routeName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.childAgentUuid">childAgentUuid</a></code> | <code>java.lang.String</code> | The UUID of the child agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.parentAgentUuid">parentAgentUuid</a></code> | <code>java.lang.String</code> | The UUID of the parent agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#id GenaiAgentRoute#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.ifCase">ifCase</a></code> | <code>java.lang.String</code> | if-case condition for the route. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.rollback">rollback</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#rollback GenaiAgentRoute#rollback}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.routeName">routeName</a></code> | <code>java.lang.String</code> | A name for the route. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `childAgentUuid`<sup>Required</sup> <a name="childAgentUuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.childAgentUuid"></a>

- *Type:* java.lang.String

The UUID of the child agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#child_agent_uuid GenaiAgentRoute#child_agent_uuid}

---

##### `parentAgentUuid`<sup>Required</sup> <a name="parentAgentUuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.parentAgentUuid"></a>

- *Type:* java.lang.String

The UUID of the parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#parent_agent_uuid GenaiAgentRoute#parent_agent_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#id GenaiAgentRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ifCase`<sup>Optional</sup> <a name="ifCase" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.ifCase"></a>

- *Type:* java.lang.String

if-case condition for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#if_case GenaiAgentRoute#if_case}

---

##### `rollback`<sup>Optional</sup> <a name="rollback" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.rollback"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#rollback GenaiAgentRoute#rollback}.

---

##### `routeName`<sup>Optional</sup> <a name="routeName" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.Initializer.parameter.routeName"></a>

- *Type:* java.lang.String

A name for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#route_name GenaiAgentRoute#route_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetIfCase">resetIfCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRollback">resetRollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRouteName">resetRouteName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetId"></a>

```java
public void resetId()
```

##### `resetIfCase` <a name="resetIfCase" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetIfCase"></a>

```java
public void resetIfCase()
```

##### `resetRollback` <a name="resetRollback" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRollback"></a>

```java
public void resetRollback()
```

##### `resetRouteName` <a name="resetRouteName" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.resetRouteName"></a>

```java
public void resetRouteName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiAgentRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_agent_route.GenaiAgentRoute;

GenaiAgentRoute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_agent_route.GenaiAgentRoute;

GenaiAgentRoute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_agent_route.GenaiAgentRoute;

GenaiAgentRoute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_agent_route.GenaiAgentRoute;

GenaiAgentRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GenaiAgentRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GenaiAgentRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GenaiAgentRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GenaiAgentRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GenaiAgentRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuidInput">childAgentUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCaseInput">ifCaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuidInput">parentAgentUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollbackInput">rollbackInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeNameInput">routeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuid">childAgentUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCase">ifCase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuid">parentAgentUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollback">rollback</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeName">routeName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `childAgentUuidInput`<sup>Optional</sup> <a name="childAgentUuidInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuidInput"></a>

```java
public java.lang.String getChildAgentUuidInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ifCaseInput`<sup>Optional</sup> <a name="ifCaseInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCaseInput"></a>

```java
public java.lang.String getIfCaseInput();
```

- *Type:* java.lang.String

---

##### `parentAgentUuidInput`<sup>Optional</sup> <a name="parentAgentUuidInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuidInput"></a>

```java
public java.lang.String getParentAgentUuidInput();
```

- *Type:* java.lang.String

---

##### `rollbackInput`<sup>Optional</sup> <a name="rollbackInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollbackInput"></a>

```java
public java.lang.Boolean|IResolvable getRollbackInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `routeNameInput`<sup>Optional</sup> <a name="routeNameInput" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeNameInput"></a>

```java
public java.lang.String getRouteNameInput();
```

- *Type:* java.lang.String

---

##### `childAgentUuid`<sup>Required</sup> <a name="childAgentUuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.childAgentUuid"></a>

```java
public java.lang.String getChildAgentUuid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ifCase`<sup>Required</sup> <a name="ifCase" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.ifCase"></a>

```java
public java.lang.String getIfCase();
```

- *Type:* java.lang.String

---

##### `parentAgentUuid`<sup>Required</sup> <a name="parentAgentUuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.parentAgentUuid"></a>

```java
public java.lang.String getParentAgentUuid();
```

- *Type:* java.lang.String

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.rollback"></a>

```java
public java.lang.Boolean|IResolvable getRollback();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `routeName`<sup>Required</sup> <a name="routeName" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.routeName"></a>

```java
public java.lang.String getRouteName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRoute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiAgentRouteConfig <a name="GenaiAgentRouteConfig" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.genai_agent_route.GenaiAgentRouteConfig;

GenaiAgentRouteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .childAgentUuid(java.lang.String)
    .parentAgentUuid(java.lang.String)
//  .id(java.lang.String)
//  .ifCase(java.lang.String)
//  .rollback(java.lang.Boolean|IResolvable)
//  .routeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.childAgentUuid">childAgentUuid</a></code> | <code>java.lang.String</code> | The UUID of the child agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.parentAgentUuid">parentAgentUuid</a></code> | <code>java.lang.String</code> | The UUID of the parent agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#id GenaiAgentRoute#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.ifCase">ifCase</a></code> | <code>java.lang.String</code> | if-case condition for the route. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.rollback">rollback</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#rollback GenaiAgentRoute#rollback}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.routeName">routeName</a></code> | <code>java.lang.String</code> | A name for the route. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `childAgentUuid`<sup>Required</sup> <a name="childAgentUuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.childAgentUuid"></a>

```java
public java.lang.String getChildAgentUuid();
```

- *Type:* java.lang.String

The UUID of the child agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#child_agent_uuid GenaiAgentRoute#child_agent_uuid}

---

##### `parentAgentUuid`<sup>Required</sup> <a name="parentAgentUuid" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.parentAgentUuid"></a>

```java
public java.lang.String getParentAgentUuid();
```

- *Type:* java.lang.String

The UUID of the parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#parent_agent_uuid GenaiAgentRoute#parent_agent_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#id GenaiAgentRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ifCase`<sup>Optional</sup> <a name="ifCase" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.ifCase"></a>

```java
public java.lang.String getIfCase();
```

- *Type:* java.lang.String

if-case condition for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#if_case GenaiAgentRoute#if_case}

---

##### `rollback`<sup>Optional</sup> <a name="rollback" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.rollback"></a>

```java
public java.lang.Boolean|IResolvable getRollback();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#rollback GenaiAgentRoute#rollback}.

---

##### `routeName`<sup>Optional</sup> <a name="routeName" id="@cdktf/provider-digitalocean.genaiAgentRoute.GenaiAgentRouteConfig.property.routeName"></a>

```java
public java.lang.String getRouteName();
```

- *Type:* java.lang.String

A name for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/resources/genai_agent_route#route_name GenaiAgentRoute#route_name}

---



