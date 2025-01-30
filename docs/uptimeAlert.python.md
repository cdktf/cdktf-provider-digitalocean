# `uptimeAlert` Submodule <a name="`uptimeAlert` Submodule" id="@cdktf/provider-digitalocean.uptimeAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UptimeAlert <a name="UptimeAlert" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert digitalocean_uptime_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlert(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  check_id: str,
  name: str,
  notifications: typing.Union[IResolvable, typing.List[UptimeAlertNotifications]],
  type: str,
  comparison: str = None,
  period: str = None,
  threshold: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.checkId">check_id</a></code> | <code>str</code> | A unique identifier for a check. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.name">name</a></code> | <code>str</code> | A human-friendly display name for the alert. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.notifications">notifications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>]]</code> | notifications block. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of health check to perform. Enum: 'latency' 'down' 'down_global' 'ssl_expiry'. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.comparison">comparison</a></code> | <code>str</code> | The comparison operator used against the alert's threshold. Enum: 'greater_than' 'less_than. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.period">period</a></code> | <code>str</code> | Period of time the threshold must be exceeded to trigger the alert. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold at which the alert will enter a trigger state. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `check_id`<sup>Required</sup> <a name="check_id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.checkId"></a>

- *Type:* str

A unique identifier for a check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#check_id UptimeAlert#check_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.name"></a>

- *Type:* str

A human-friendly display name for the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#name UptimeAlert#name}

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.notifications"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>]]

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#notifications UptimeAlert#notifications}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.type"></a>

- *Type:* str

The type of health check to perform. Enum: 'latency' 'down' 'down_global' 'ssl_expiry'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#type UptimeAlert#type}

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.comparison"></a>

- *Type:* str

The comparison operator used against the alert's threshold. Enum: 'greater_than' 'less_than.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#comparison UptimeAlert#comparison}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.period"></a>

- *Type:* str

Period of time the threshold must be exceeded to trigger the alert.

Enum '2m' '3m' '5m' '10m' '15m' '30m' '1h'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#period UptimeAlert#period}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.Initializer.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The threshold at which the alert will enter a trigger state.

The specific threshold is dependent on the alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#threshold UptimeAlert#threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.putNotifications">put_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notifications` <a name="put_notifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.putNotifications"></a>

```python
def put_notifications(
  value: typing.Union[IResolvable, typing.List[UptimeAlertNotifications]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.putNotifications.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>]]

---

##### `reset_comparison` <a name="reset_comparison" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.resetThreshold"></a>

```python
def reset_threshold() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a UptimeAlert resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlert.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a UptimeAlert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UptimeAlert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UptimeAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UptimeAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList">UptimeAlertNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkIdInput">check_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notificationsInput">notifications_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkId">check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notifications"></a>

```python
notifications: UptimeAlertNotificationsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList">UptimeAlertNotificationsList</a>

---

##### `check_id_input`<sup>Optional</sup> <a name="check_id_input" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkIdInput"></a>

```python
check_id_input: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.notificationsInput"></a>

```python
notifications_input: typing.Union[IResolvable, typing.List[UptimeAlertNotifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>]]

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `check_id`<sup>Required</sup> <a name="check_id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.checkId"></a>

```python
check_id: str
```

- *Type:* str

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UptimeAlertConfig <a name="UptimeAlertConfig" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlertConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  check_id: str,
  name: str,
  notifications: typing.Union[IResolvable, typing.List[UptimeAlertNotifications]],
  type: str,
  comparison: str = None,
  period: str = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.checkId">check_id</a></code> | <code>str</code> | A unique identifier for a check. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.name">name</a></code> | <code>str</code> | A human-friendly display name for the alert. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.notifications">notifications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>]]</code> | notifications block. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.type">type</a></code> | <code>str</code> | The type of health check to perform. Enum: 'latency' 'down' 'down_global' 'ssl_expiry'. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.comparison">comparison</a></code> | <code>str</code> | The comparison operator used against the alert's threshold. Enum: 'greater_than' 'less_than. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.period">period</a></code> | <code>str</code> | Period of time the threshold must be exceeded to trigger the alert. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold at which the alert will enter a trigger state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `check_id`<sup>Required</sup> <a name="check_id" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.checkId"></a>

```python
check_id: str
```

- *Type:* str

A unique identifier for a check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#check_id UptimeAlert#check_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A human-friendly display name for the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#name UptimeAlert#name}

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.notifications"></a>

```python
notifications: typing.Union[IResolvable, typing.List[UptimeAlertNotifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>]]

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#notifications UptimeAlert#notifications}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of health check to perform. Enum: 'latency' 'down' 'down_global' 'ssl_expiry'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#type UptimeAlert#type}

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

The comparison operator used against the alert's threshold. Enum: 'greater_than' 'less_than.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#comparison UptimeAlert#comparison}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.period"></a>

```python
period: str
```

- *Type:* str

Period of time the threshold must be exceeded to trigger the alert.

Enum '2m' '3m' '5m' '10m' '15m' '30m' '1h'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#period UptimeAlert#period}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold at which the alert will enter a trigger state.

The specific threshold is dependent on the alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#threshold UptimeAlert#threshold}

---

### UptimeAlertNotifications <a name="UptimeAlertNotifications" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlertNotifications(
  email: typing.List[str] = None,
  slack: typing.Union[IResolvable, typing.List[UptimeAlertNotificationsSlack]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.email">email</a></code> | <code>typing.List[str]</code> | List of email addresses to sent notifications to. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.slack">slack</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>]]</code> | slack block. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

List of email addresses to sent notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#email UptimeAlert#email}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications.property.slack"></a>

```python
slack: typing.Union[IResolvable, typing.List[UptimeAlertNotificationsSlack]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>]]

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#slack UptimeAlert#slack}

---

### UptimeAlertNotificationsSlack <a name="UptimeAlertNotificationsSlack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlertNotificationsSlack(
  channel: str,
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.channel">channel</a></code> | <code>str</code> | The Slack channel to send alerts to. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.url">url</a></code> | <code>str</code> | The webhook URL for Slack. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.channel"></a>

```python
channel: str
```

- *Type:* str

The Slack channel to send alerts to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#channel UptimeAlert#channel}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack.property.url"></a>

```python
url: str
```

- *Type:* str

The webhook URL for Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/uptime_alert#url UptimeAlert#url}

---

## Classes <a name="Classes" id="Classes"></a>

### UptimeAlertNotificationsList <a name="UptimeAlertNotificationsList" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlertNotificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UptimeAlertNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UptimeAlertNotifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>]]

---


### UptimeAlertNotificationsOutputReference <a name="UptimeAlertNotificationsOutputReference" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlertNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.putSlack">put_slack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetSlack">reset_slack</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_slack` <a name="put_slack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.putSlack"></a>

```python
def put_slack(
  value: typing.Union[IResolvable, typing.List[UptimeAlertNotificationsSlack]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.putSlack.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>]]

---

##### `reset_email` <a name="reset_email" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_slack` <a name="reset_slack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.resetSlack"></a>

```python
def reset_slack() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList">UptimeAlertNotificationsSlackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slackInput">slack_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slack"></a>

```python
slack: UptimeAlertNotificationsSlackList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList">UptimeAlertNotificationsSlackList</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `slack_input`<sup>Optional</sup> <a name="slack_input" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.slackInput"></a>

```python
slack_input: typing.Union[IResolvable, typing.List[UptimeAlertNotificationsSlack]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UptimeAlertNotifications]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotifications">UptimeAlertNotifications</a>]

---


### UptimeAlertNotificationsSlackList <a name="UptimeAlertNotificationsSlackList" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlertNotificationsSlackList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UptimeAlertNotificationsSlackOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UptimeAlertNotificationsSlack]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>]]

---


### UptimeAlertNotificationsSlackOutputReference <a name="UptimeAlertNotificationsSlackOutputReference" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import uptime_alert

uptimeAlert.UptimeAlertNotificationsSlackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlackOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UptimeAlertNotificationsSlack]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.uptimeAlert.UptimeAlertNotificationsSlack">UptimeAlertNotificationsSlack</a>]

---



