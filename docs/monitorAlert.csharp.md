# `digitalocean_monitor_alert`

Refer to the Terraform Registory for docs: [`digitalocean_monitor_alert`](https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert).

# `monitorAlert` Submodule <a name="`monitorAlert` Submodule" id="@cdktf/provider-digitalocean.monitorAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAlert <a name="MonitorAlert" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert digitalocean_monitor_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new MonitorAlert(Construct Scope, string Id, MonitorAlertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig">MonitorAlertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig">MonitorAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts">PutAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEntities">ResetEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAlerts` <a name="PutAlerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts"></a>

```csharp
private void PutAlerts(MonitorAlertAlerts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEntities` <a name="ResetEntities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEntities"></a>

```csharp
private void ResetEntities()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

MonitorAlert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

MonitorAlert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

MonitorAlert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alerts">Alerts</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference">MonitorAlertAlertsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alertsInput">AlertsInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compareInput">CompareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entitiesInput">EntitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.windowInput">WindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compare">Compare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entities">Entities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.window">Window</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Alerts`<sup>Required</sup> <a name="Alerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alerts"></a>

```csharp
public MonitorAlertAlertsOutputReference Alerts { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference">MonitorAlertAlertsOutputReference</a>

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `AlertsInput`<sup>Optional</sup> <a name="AlertsInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alertsInput"></a>

```csharp
public MonitorAlertAlerts AlertsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

---

##### `CompareInput`<sup>Optional</sup> <a name="CompareInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compareInput"></a>

```csharp
public string CompareInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entitiesInput"></a>

```csharp
public string[] EntitiesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.windowInput"></a>

```csharp
public string WindowInput { get; }
```

- *Type:* string

---

##### `Compare`<sup>Required</sup> <a name="Compare" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compare"></a>

```csharp
public string Compare { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entities"></a>

```csharp
public string[] Entities { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.window"></a>

```csharp
public string Window { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAlertAlerts <a name="MonitorAlertAlerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new MonitorAlertAlerts {
    string[] Email = null,
    object Slack = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.email">Email</a></code> | <code>string[]</code> | List of email addresses to sent notifications to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.slack">Slack</a></code> | <code>object</code> | slack block. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

List of email addresses to sent notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#email MonitorAlert#email}

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.slack"></a>

```csharp
public object Slack { get; set; }
```

- *Type:* object

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#slack MonitorAlert#slack}

---

### MonitorAlertAlertsSlack <a name="MonitorAlertAlertsSlack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new MonitorAlertAlertsSlack {
    string Channel,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.channel">Channel</a></code> | <code>string</code> | The Slack channel to send alerts to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.url">Url</a></code> | <code>string</code> | The webhook URL for Slack. |

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

The Slack channel to send alerts to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#channel MonitorAlert#channel}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The webhook URL for Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#url MonitorAlert#url}

---

### MonitorAlertConfig <a name="MonitorAlertConfig" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new MonitorAlertConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    MonitorAlertAlerts Alerts,
    string Compare,
    string Description,
    string Type,
    double Value,
    string Window,
    object Enabled = null,
    string[] Entities = null,
    string Id = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.alerts">Alerts</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | alerts block. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.compare">Compare</a></code> | <code>string</code> | The comparison operator to use for value. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.description">Description</a></code> | <code>string</code> | Description of the alert policy. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#type MonitorAlert#type}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#value MonitorAlert#value}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.window">Window</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#window MonitorAlert#window}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#enabled MonitorAlert#enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.entities">Entities</a></code> | <code>string[]</code> | The droplets to apply the alert policy to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#id MonitorAlert#id}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#tags MonitorAlert#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Alerts`<sup>Required</sup> <a name="Alerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.alerts"></a>

```csharp
public MonitorAlertAlerts Alerts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

alerts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#alerts MonitorAlert#alerts}

---

##### `Compare`<sup>Required</sup> <a name="Compare" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.compare"></a>

```csharp
public string Compare { get; set; }
```

- *Type:* string

The comparison operator to use for value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#compare MonitorAlert#compare}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the alert policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#description MonitorAlert#description}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#type MonitorAlert#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#value MonitorAlert#value}.

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.window"></a>

```csharp
public string Window { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#window MonitorAlert#window}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#enabled MonitorAlert#enabled}.

---

##### `Entities`<sup>Optional</sup> <a name="Entities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.entities"></a>

```csharp
public string[] Entities { get; set; }
```

- *Type:* string[]

The droplets to apply the alert policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#entities MonitorAlert#entities}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#id MonitorAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.28.1/docs/resources/monitor_alert#tags MonitorAlert#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAlertAlertsOutputReference <a name="MonitorAlertAlertsOutputReference" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new MonitorAlertAlertsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSlack` <a name="PutSlack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack"></a>

```csharp
private void PutSlack(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack.parameter.value"></a>

- *Type:* object

---

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetSlack"></a>

```csharp
private void ResetSlack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList">MonitorAlertAlertsSlackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slackInput">SlackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slack"></a>

```csharp
public MonitorAlertAlertsSlackList Slack { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList">MonitorAlertAlertsSlackList</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slackInput"></a>

```csharp
public object SlackInput { get; }
```

- *Type:* object

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertAlerts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

---


### MonitorAlertAlertsSlackList <a name="MonitorAlertAlertsSlackList" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new MonitorAlertAlertsSlackList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get"></a>

```csharp
private MonitorAlertAlertsSlackOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertAlertsSlackOutputReference <a name="MonitorAlertAlertsSlackOutputReference" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new MonitorAlertAlertsSlackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



