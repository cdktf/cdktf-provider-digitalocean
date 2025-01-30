# `monitorAlert` Submodule <a name="`monitorAlert` Submodule" id="@cdktf/provider-digitalocean.monitorAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAlert <a name="MonitorAlert" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert digitalocean_monitor_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import monitor_alert

monitorAlert.MonitorAlert(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alerts: MonitorAlertAlerts,
  compare: str,
  description: str,
  type: str,
  value: typing.Union[int, float],
  window: str,
  enabled: typing.Union[bool, IResolvable] = None,
  entities: typing.List[str] = None,
  id: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.alerts">alerts</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | alerts block. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.compare">compare</a></code> | <code>str</code> | The comparison operator to use for value. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the alert policy. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#type MonitorAlert#type}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#value MonitorAlert#value}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.window">window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#window MonitorAlert#window}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#enabled MonitorAlert#enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.entities">entities</a></code> | <code>typing.List[str]</code> | The droplets to apply the alert policy to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#id MonitorAlert#id}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#tags MonitorAlert#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.alerts"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

alerts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#alerts MonitorAlert#alerts}

---

##### `compare`<sup>Required</sup> <a name="compare" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.compare"></a>

- *Type:* str

The comparison operator to use for value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#compare MonitorAlert#compare}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.description"></a>

- *Type:* str

Description of the alert policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#description MonitorAlert#description}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#type MonitorAlert#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#value MonitorAlert#value}.

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.window"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#window MonitorAlert#window}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#enabled MonitorAlert#enabled}.

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.entities"></a>

- *Type:* typing.List[str]

The droplets to apply the alert policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#entities MonitorAlert#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#id MonitorAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#tags MonitorAlert#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts">put_alerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEntities">reset_entities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alerts` <a name="put_alerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts"></a>

```python
def put_alerts(
  email: typing.List[str] = None,
  slack: typing.Union[IResolvable, typing.List[MonitorAlertAlertsSlack]] = None
) -> None
```

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts.parameter.email"></a>

- *Type:* typing.List[str]

List of email addresses to sent notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#email MonitorAlert#email}

---

###### `slack`<sup>Optional</sup> <a name="slack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts.parameter.slack"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>]]

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#slack MonitorAlert#slack}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_entities` <a name="reset_entities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEntities"></a>

```python
def reset_entities() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitorAlert resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import monitor_alert

monitorAlert.MonitorAlert.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import monitor_alert

monitorAlert.MonitorAlert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import monitor_alert

monitorAlert.MonitorAlert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import monitor_alert

monitorAlert.MonitorAlert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitorAlert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitorAlert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitorAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alerts">alerts</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference">MonitorAlertAlertsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alertsInput">alerts_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compareInput">compare_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entitiesInput">entities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.windowInput">window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compare">compare</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entities">entities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.window">window</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alerts"></a>

```python
alerts: MonitorAlertAlertsOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference">MonitorAlertAlertsOutputReference</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `alerts_input`<sup>Optional</sup> <a name="alerts_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alertsInput"></a>

```python
alerts_input: MonitorAlertAlerts
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

---

##### `compare_input`<sup>Optional</sup> <a name="compare_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compareInput"></a>

```python
compare_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `entities_input`<sup>Optional</sup> <a name="entities_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entitiesInput"></a>

```python
entities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_input`<sup>Optional</sup> <a name="window_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.windowInput"></a>

```python
window_input: str
```

- *Type:* str

---

##### `compare`<sup>Required</sup> <a name="compare" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compare"></a>

```python
compare: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entities"></a>

```python
entities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.window"></a>

```python
window: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAlertAlerts <a name="MonitorAlertAlerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import monitor_alert

monitorAlert.MonitorAlertAlerts(
  email: typing.List[str] = None,
  slack: typing.Union[IResolvable, typing.List[MonitorAlertAlertsSlack]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.email">email</a></code> | <code>typing.List[str]</code> | List of email addresses to sent notifications to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.slack">slack</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>]]</code> | slack block. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

List of email addresses to sent notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#email MonitorAlert#email}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.slack"></a>

```python
slack: typing.Union[IResolvable, typing.List[MonitorAlertAlertsSlack]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>]]

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#slack MonitorAlert#slack}

---

### MonitorAlertAlertsSlack <a name="MonitorAlertAlertsSlack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import monitor_alert

monitorAlert.MonitorAlertAlertsSlack(
  channel: str,
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.channel">channel</a></code> | <code>str</code> | The Slack channel to send alerts to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.url">url</a></code> | <code>str</code> | The webhook URL for Slack. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.channel"></a>

```python
channel: str
```

- *Type:* str

The Slack channel to send alerts to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#channel MonitorAlert#channel}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.url"></a>

```python
url: str
```

- *Type:* str

The webhook URL for Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#url MonitorAlert#url}

---

### MonitorAlertConfig <a name="MonitorAlertConfig" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import monitor_alert

monitorAlert.MonitorAlertConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alerts: MonitorAlertAlerts,
  compare: str,
  description: str,
  type: str,
  value: typing.Union[int, float],
  window: str,
  enabled: typing.Union[bool, IResolvable] = None,
  entities: typing.List[str] = None,
  id: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.alerts">alerts</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | alerts block. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.compare">compare</a></code> | <code>str</code> | The comparison operator to use for value. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.description">description</a></code> | <code>str</code> | Description of the alert policy. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#type MonitorAlert#type}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#value MonitorAlert#value}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.window">window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#window MonitorAlert#window}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#enabled MonitorAlert#enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.entities">entities</a></code> | <code>typing.List[str]</code> | The droplets to apply the alert policy to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#id MonitorAlert#id}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#tags MonitorAlert#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.alerts"></a>

```python
alerts: MonitorAlertAlerts
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

alerts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#alerts MonitorAlert#alerts}

---

##### `compare`<sup>Required</sup> <a name="compare" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.compare"></a>

```python
compare: str
```

- *Type:* str

The comparison operator to use for value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#compare MonitorAlert#compare}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the alert policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#description MonitorAlert#description}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#type MonitorAlert#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#value MonitorAlert#value}.

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.window"></a>

```python
window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#window MonitorAlert#window}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#enabled MonitorAlert#enabled}.

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.entities"></a>

```python
entities: typing.List[str]
```

- *Type:* typing.List[str]

The droplets to apply the alert policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#entities MonitorAlert#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#id MonitorAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.48.1/docs/resources/monitor_alert#tags MonitorAlert#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAlertAlertsOutputReference <a name="MonitorAlertAlertsOutputReference" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import monitor_alert

monitorAlert.MonitorAlertAlertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack">put_slack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetSlack">reset_slack</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_slack` <a name="put_slack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack"></a>

```python
def put_slack(
  value: typing.Union[IResolvable, typing.List[MonitorAlertAlertsSlack]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>]]

---

##### `reset_email` <a name="reset_email" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_slack` <a name="reset_slack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetSlack"></a>

```python
def reset_slack() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList">MonitorAlertAlertsSlackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slackInput">slack_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slack"></a>

```python
slack: MonitorAlertAlertsSlackList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList">MonitorAlertAlertsSlackList</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `slack_input`<sup>Optional</sup> <a name="slack_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slackInput"></a>

```python
slack_input: typing.Union[IResolvable, typing.List[MonitorAlertAlertsSlack]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.internalValue"></a>

```python
internal_value: MonitorAlertAlerts
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

---


### MonitorAlertAlertsSlackList <a name="MonitorAlertAlertsSlackList" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import monitor_alert

monitorAlert.MonitorAlertAlertsSlackList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorAlertAlertsSlackOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorAlertAlertsSlack]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>]]

---


### MonitorAlertAlertsSlackOutputReference <a name="MonitorAlertAlertsSlackOutputReference" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import monitor_alert

monitorAlert.MonitorAlertAlertsSlackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorAlertAlertsSlack]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack">MonitorAlertAlertsSlack</a>]

---



