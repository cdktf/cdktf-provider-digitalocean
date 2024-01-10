# `uptimeAlert` Submodule <a name="`uptimeAlert` Submodule" id="@cdktf/provider-digitalocean.uptimeAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UptimeAlert <a name="UptimeAlert" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert digitalocean_uptime_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlert;

UptimeAlert.Builder.create(Construct scope, java.lang.String id)
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
    .checkId(java.lang.String)
    .name(java.lang.String)
    .notifications(IResolvable)
    .notifications(java.util.List<UptimeAlertNotifications>)
    .type(java.lang.String)
//  .comparison(java.lang.String)
//  .period(java.lang.String)
//  .threshold(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.checkId">checkId</a></code> | <code>java.lang.String</code> | A unique identifier for a check. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A human-friendly display name for the alert. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.notifications">notifications</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>></code> | notifications block. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of health check to perform. Enum: 'latency' 'down' 'down_global' 'ssl_expiry'. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.comparison">comparison</a></code> | <code>java.lang.String</code> | The comparison operator used against the alert's threshold. Enum: 'greater_than' 'less_than. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.period">period</a></code> | <code>java.lang.String</code> | Period of time the threshold must be exceeded to trigger the alert. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.threshold">threshold</a></code> | <code>java.lang.Number</code> | The threshold at which the alert will enter a trigger state. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `checkId`<sup>Required</sup> <a name="checkId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.checkId"></a>

- *Type:* java.lang.String

A unique identifier for a check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#check_id UptimeAlert#check_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A human-friendly display name for the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#name UptimeAlert#name}

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.notifications"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#notifications UptimeAlert#notifications}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of health check to perform. Enum: 'latency' 'down' 'down_global' 'ssl_expiry'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#type UptimeAlert#type}

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.comparison"></a>

- *Type:* java.lang.String

The comparison operator used against the alert's threshold. Enum: 'greater_than' 'less_than.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#comparison UptimeAlert#comparison}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.period"></a>

- *Type:* java.lang.String

Period of time the threshold must be exceeded to trigger the alert.

Enum '2m' '3m' '5m' '10m' '15m' '30m' '1h'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#period UptimeAlert#period}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.threshold"></a>

- *Type:* java.lang.Number

The threshold at which the alert will enter a trigger state.

The specific threshold is dependent on the alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#threshold UptimeAlert#threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.putNotifications">putNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotifications` <a name="putNotifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.putNotifications"></a>

```java
public void putNotifications(IResolvable OR java.util.List<UptimeAlertNotifications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.putNotifications.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>>

---

##### `resetComparison` <a name="resetComparison" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetComparison"></a>

```java
public void resetComparison()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetThreshold"></a>

```java
public void resetThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UptimeAlert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlert;

UptimeAlert.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlert;

UptimeAlert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlert;

UptimeAlert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlert;

UptimeAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),UptimeAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a UptimeAlert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the UptimeAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing UptimeAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the UptimeAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList">UptimeAlertNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkIdInput">checkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notificationsInput">notificationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkId">checkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notifications"></a>

```java
public UptimeAlertNotificationsList getNotifications();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList">UptimeAlertNotificationsList</a>

---

##### `checkIdInput`<sup>Optional</sup> <a name="checkIdInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkIdInput"></a>

```java
public java.lang.String getCheckIdInput();
```

- *Type:* java.lang.String

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notificationsInput"></a>

```java
public java.lang.Object getNotificationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `checkId`<sup>Required</sup> <a name="checkId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkId"></a>

```java
public java.lang.String getCheckId();
```

- *Type:* java.lang.String

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UptimeAlertConfig <a name="UptimeAlertConfig" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlertConfig;

UptimeAlertConfig.builder()
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
    .checkId(java.lang.String)
    .name(java.lang.String)
    .notifications(IResolvable)
    .notifications(java.util.List<UptimeAlertNotifications>)
    .type(java.lang.String)
//  .comparison(java.lang.String)
//  .period(java.lang.String)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.checkId">checkId</a></code> | <code>java.lang.String</code> | A unique identifier for a check. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.name">name</a></code> | <code>java.lang.String</code> | A human-friendly display name for the alert. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.notifications">notifications</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>></code> | notifications block. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of health check to perform. Enum: 'latency' 'down' 'down_global' 'ssl_expiry'. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.comparison">comparison</a></code> | <code>java.lang.String</code> | The comparison operator used against the alert's threshold. Enum: 'greater_than' 'less_than. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.period">period</a></code> | <code>java.lang.String</code> | Period of time the threshold must be exceeded to trigger the alert. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The threshold at which the alert will enter a trigger state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `checkId`<sup>Required</sup> <a name="checkId" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.checkId"></a>

```java
public java.lang.String getCheckId();
```

- *Type:* java.lang.String

A unique identifier for a check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#check_id UptimeAlert#check_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-friendly display name for the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#name UptimeAlert#name}

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.notifications"></a>

```java
public java.lang.Object getNotifications();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#notifications UptimeAlert#notifications}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of health check to perform. Enum: 'latency' 'down' 'down_global' 'ssl_expiry'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#type UptimeAlert#type}

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

The comparison operator used against the alert's threshold. Enum: 'greater_than' 'less_than.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#comparison UptimeAlert#comparison}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Period of time the threshold must be exceeded to trigger the alert.

Enum '2m' '3m' '5m' '10m' '15m' '30m' '1h'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#period UptimeAlert#period}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The threshold at which the alert will enter a trigger state.

The specific threshold is dependent on the alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#threshold UptimeAlert#threshold}

---

### UptimeAlertNotifications <a name="UptimeAlertNotifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlertNotifications;

UptimeAlertNotifications.builder()
//  .email(java.util.List<java.lang.String>)
//  .slack(IResolvable)
//  .slack(java.util.List<UptimeAlertNotificationsSlack>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | List of email addresses to sent notifications to. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.slack">slack</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>></code> | slack block. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

List of email addresses to sent notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#email UptimeAlert#email}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.slack"></a>

```java
public java.lang.Object getSlack();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#slack UptimeAlert#slack}

---

### UptimeAlertNotificationsSlack <a name="UptimeAlertNotificationsSlack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlertNotificationsSlack;

UptimeAlertNotificationsSlack.builder()
    .channel(java.lang.String)
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.channel">channel</a></code> | <code>java.lang.String</code> | The Slack channel to send alerts to. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.url">url</a></code> | <code>java.lang.String</code> | The webhook URL for Slack. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The Slack channel to send alerts to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#channel UptimeAlert#channel}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The webhook URL for Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/resources/uptime_alert#url UptimeAlert#url}

---

## Classes <a name="Classes" id="Classes"></a>

### UptimeAlertNotificationsList <a name="UptimeAlertNotificationsList" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlertNotificationsList;

new UptimeAlertNotificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.get"></a>

```java
public UptimeAlertNotificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>>

---


### UptimeAlertNotificationsOutputReference <a name="UptimeAlertNotificationsOutputReference" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlertNotificationsOutputReference;

new UptimeAlertNotificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetSlack">resetSlack</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSlack` <a name="putSlack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.putSlack"></a>

```java
public void putSlack(IResolvable OR java.util.List<UptimeAlertNotificationsSlack> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.putSlack.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>>

---

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetSlack` <a name="resetSlack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetSlack"></a>

```java
public void resetSlack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList">UptimeAlertNotificationsSlackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slackInput">slackInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slack"></a>

```java
public UptimeAlertNotificationsSlackList getSlack();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList">UptimeAlertNotificationsSlackList</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slackInput"></a>

```java
public java.lang.Object getSlackInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>

---


### UptimeAlertNotificationsSlackList <a name="UptimeAlertNotificationsSlackList" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlertNotificationsSlackList;

new UptimeAlertNotificationsSlackList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.get"></a>

```java
public UptimeAlertNotificationsSlackOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>>

---


### UptimeAlertNotificationsSlackOutputReference <a name="UptimeAlertNotificationsSlackOutputReference" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.uptime_alert.UptimeAlertNotificationsSlackOutputReference;

new UptimeAlertNotificationsSlackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>

---



