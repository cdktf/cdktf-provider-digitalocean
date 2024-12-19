# `monitorAlert` Submodule <a name="`monitorAlert` Submodule" id="@cdktf/provider-digitalocean.monitorAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAlert <a name="MonitorAlert" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert digitalocean_monitor_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.monitor_alert.MonitorAlert;

MonitorAlert.Builder.create(Construct scope, java.lang.String id)
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
    .alerts(MonitorAlertAlerts)
    .compare(java.lang.String)
    .description(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.Number)
    .window(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .entities(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.alerts">alerts</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | alerts block. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.compare">compare</a></code> | <code>java.lang.String</code> | The comparison operator to use for value. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the alert policy. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#type MonitorAlert#type}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#value MonitorAlert#value}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.window">window</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#window MonitorAlert#window}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#enabled MonitorAlert#enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.entities">entities</a></code> | <code>java.util.List<java.lang.String></code> | The droplets to apply the alert policy to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#id MonitorAlert#id}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#tags MonitorAlert#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.alerts"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

alerts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#alerts MonitorAlert#alerts}

---

##### `compare`<sup>Required</sup> <a name="compare" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.compare"></a>

- *Type:* java.lang.String

The comparison operator to use for value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#compare MonitorAlert#compare}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the alert policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#description MonitorAlert#description}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#type MonitorAlert#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.value"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#value MonitorAlert#value}.

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.window"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#window MonitorAlert#window}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#enabled MonitorAlert#enabled}.

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.entities"></a>

- *Type:* java.util.List<java.lang.String>

The droplets to apply the alert policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#entities MonitorAlert#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#id MonitorAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#tags MonitorAlert#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts">putAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEntities">resetEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlerts` <a name="putAlerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts"></a>

```java
public void putAlerts(MonitorAlertAlerts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEntities` <a name="resetEntities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEntities"></a>

```java
public void resetEntities()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorAlert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.monitor_alert.MonitorAlert;

MonitorAlert.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.monitor_alert.MonitorAlert;

MonitorAlert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.monitor_alert.MonitorAlert;

MonitorAlert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.monitor_alert.MonitorAlert;

MonitorAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitorAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitorAlert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitorAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitorAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitorAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alerts">alerts</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference">MonitorAlertAlertsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alertsInput">alertsInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compareInput">compareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entitiesInput">entitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.windowInput">windowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compare">compare</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entities">entities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.window">window</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alerts"></a>

```java
public MonitorAlertAlertsOutputReference getAlerts();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference">MonitorAlertAlertsOutputReference</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `alertsInput`<sup>Optional</sup> <a name="alertsInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alertsInput"></a>

```java
public MonitorAlertAlerts getAlertsInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

---

##### `compareInput`<sup>Optional</sup> <a name="compareInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compareInput"></a>

```java
public java.lang.String getCompareInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entitiesInput"></a>

```java
public java.util.List<java.lang.String> getEntitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.windowInput"></a>

```java
public java.lang.String getWindowInput();
```

- *Type:* java.lang.String

---

##### `compare`<sup>Required</sup> <a name="compare" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compare"></a>

```java
public java.lang.String getCompare();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entities"></a>

```java
public java.util.List<java.lang.String> getEntities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.window"></a>

```java
public java.lang.String getWindow();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAlertAlerts <a name="MonitorAlertAlerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.monitor_alert.MonitorAlertAlerts;

MonitorAlertAlerts.builder()
//  .email(java.util.List<java.lang.String>)
//  .slack(IResolvable)
//  .slack(java.util.List<MonitorAlertAlertsSlack>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | List of email addresses to sent notifications to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.slack">slack</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>></code> | slack block. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

List of email addresses to sent notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#email MonitorAlert#email}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.slack"></a>

```java
public java.lang.Object getSlack();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#slack MonitorAlert#slack}

---

### MonitorAlertAlertsSlack <a name="MonitorAlertAlertsSlack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.monitor_alert.MonitorAlertAlertsSlack;

MonitorAlertAlertsSlack.builder()
    .channel(java.lang.String)
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.channel">channel</a></code> | <code>java.lang.String</code> | The Slack channel to send alerts to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.url">url</a></code> | <code>java.lang.String</code> | The webhook URL for Slack. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The Slack channel to send alerts to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#channel MonitorAlert#channel}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The webhook URL for Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#url MonitorAlert#url}

---

### MonitorAlertConfig <a name="MonitorAlertConfig" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.monitor_alert.MonitorAlertConfig;

MonitorAlertConfig.builder()
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
    .alerts(MonitorAlertAlerts)
    .compare(java.lang.String)
    .description(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.Number)
    .window(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .entities(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.alerts">alerts</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | alerts block. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.compare">compare</a></code> | <code>java.lang.String</code> | The comparison operator to use for value. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the alert policy. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#type MonitorAlert#type}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#value MonitorAlert#value}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.window">window</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#window MonitorAlert#window}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#enabled MonitorAlert#enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.entities">entities</a></code> | <code>java.util.List<java.lang.String></code> | The droplets to apply the alert policy to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#id MonitorAlert#id}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#tags MonitorAlert#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.alerts"></a>

```java
public MonitorAlertAlerts getAlerts();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

alerts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#alerts MonitorAlert#alerts}

---

##### `compare`<sup>Required</sup> <a name="compare" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.compare"></a>

```java
public java.lang.String getCompare();
```

- *Type:* java.lang.String

The comparison operator to use for value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#compare MonitorAlert#compare}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the alert policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#description MonitorAlert#description}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#type MonitorAlert#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#value MonitorAlert#value}.

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.window"></a>

```java
public java.lang.String getWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#window MonitorAlert#window}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#enabled MonitorAlert#enabled}.

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.entities"></a>

```java
public java.util.List<java.lang.String> getEntities();
```

- *Type:* java.util.List<java.lang.String>

The droplets to apply the alert policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#entities MonitorAlert#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#id MonitorAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.1/docs/resources/monitor_alert#tags MonitorAlert#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAlertAlertsOutputReference <a name="MonitorAlertAlertsOutputReference" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.monitor_alert.MonitorAlertAlertsOutputReference;

new MonitorAlertAlertsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetSlack">resetSlack</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSlack` <a name="putSlack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack"></a>

```java
public void putSlack(IResolvable OR java.util.List<MonitorAlertAlertsSlack> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>>

---

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetSlack` <a name="resetSlack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetSlack"></a>

```java
public void resetSlack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList">MonitorAlertAlertsSlackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slackInput">slackInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slack"></a>

```java
public MonitorAlertAlertsSlackList getSlack();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList">MonitorAlertAlertsSlackList</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slackInput"></a>

```java
public java.lang.Object getSlackInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.internalValue"></a>

```java
public MonitorAlertAlerts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

---


### MonitorAlertAlertsSlackList <a name="MonitorAlertAlertsSlackList" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.monitor_alert.MonitorAlertAlertsSlackList;

new MonitorAlertAlertsSlackList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get"></a>

```java
public MonitorAlertAlertsSlackOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>>

---


### MonitorAlertAlertsSlackOutputReference <a name="MonitorAlertAlertsSlackOutputReference" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.monitor_alert.MonitorAlertAlertsSlackOutputReference;

new MonitorAlertAlertsSlackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>

---



