# `partnerAttachment` Submodule <a name="`partnerAttachment` Submodule" id="@cdktf/provider-digitalocean.partnerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PartnerAttachment <a name="PartnerAttachment" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment digitalocean_partner_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import partner_attachment

partnerAttachment.PartnerAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_bandwidth_in_mbps: typing.Union[int, float],
  naas_provider: str,
  name: str,
  region: str,
  vpc_ids: typing.List[str],
  bgp: PartnerAttachmentBgp = None,
  parent_uuid: str = None,
  redundancy_zone: str = None,
  timeouts: PartnerAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.connectionBandwidthInMbps">connection_bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | The connection bandwidth in Mbps. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.naasProvider">naas_provider</a></code> | <code>str</code> | The NaaS provider. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.region">region</a></code> | <code>str</code> | The region where the Partner Attachment will be created. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.vpcIds">vpc_ids</a></code> | <code>typing.List[str]</code> | The list of VPC IDs to attach the Partner Attachment to. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.parentUuid">parent_uuid</a></code> | <code>str</code> | The UUID of the Parent Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.redundancyZone">redundancy_zone</a></code> | <code>str</code> | The redundancy zone for the NaaS. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `connection_bandwidth_in_mbps`<sup>Required</sup> <a name="connection_bandwidth_in_mbps" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.connectionBandwidthInMbps"></a>

- *Type:* typing.Union[int, float]

The connection bandwidth in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#connection_bandwidth_in_mbps PartnerAttachment#connection_bandwidth_in_mbps}

---

##### `naas_provider`<sup>Required</sup> <a name="naas_provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.naasProvider"></a>

- *Type:* str

The NaaS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#naas_provider PartnerAttachment#naas_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.name"></a>

- *Type:* str

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#name PartnerAttachment#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.region"></a>

- *Type:* str

The region where the Partner Attachment will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#region PartnerAttachment#region}

---

##### `vpc_ids`<sup>Required</sup> <a name="vpc_ids" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.vpcIds"></a>

- *Type:* typing.List[str]

The list of VPC IDs to attach the Partner Attachment to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#vpc_ids PartnerAttachment#vpc_ids}

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.bgp"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#bgp PartnerAttachment#bgp}

---

##### `parent_uuid`<sup>Optional</sup> <a name="parent_uuid" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.parentUuid"></a>

- *Type:* str

The UUID of the Parent Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#parent_uuid PartnerAttachment#parent_uuid}

---

##### `redundancy_zone`<sup>Optional</sup> <a name="redundancy_zone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.redundancyZone"></a>

- *Type:* str

The redundancy zone for the NaaS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#redundancy_zone PartnerAttachment#redundancy_zone}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#timeouts PartnerAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp">put_bgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetBgp">reset_bgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetParentUuid">reset_parent_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetRedundancyZone">reset_redundancy_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bgp` <a name="put_bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp"></a>

```python
def put_bgp(
  auth_key: str = None,
  local_router_ip: str = None,
  peer_router_asn: typing.Union[int, float] = None,
  peer_router_ip: str = None
) -> None
```

###### `auth_key`<sup>Optional</sup> <a name="auth_key" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp.parameter.authKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#auth_key PartnerAttachment#auth_key}.

---

###### `local_router_ip`<sup>Optional</sup> <a name="local_router_ip" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp.parameter.localRouterIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#local_router_ip PartnerAttachment#local_router_ip}.

---

###### `peer_router_asn`<sup>Optional</sup> <a name="peer_router_asn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp.parameter.peerRouterAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#peer_router_asn PartnerAttachment#peer_router_asn}.

---

###### `peer_router_ip`<sup>Optional</sup> <a name="peer_router_ip" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp.parameter.peerRouterIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#peer_router_ip PartnerAttachment#peer_router_ip}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#create PartnerAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#delete PartnerAttachment#delete}.

---

##### `reset_bgp` <a name="reset_bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetBgp"></a>

```python
def reset_bgp() -> None
```

##### `reset_parent_uuid` <a name="reset_parent_uuid" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetParentUuid"></a>

```python
def reset_parent_uuid() -> None
```

##### `reset_redundancy_zone` <a name="reset_redundancy_zone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetRedundancyZone"></a>

```python
def reset_redundancy_zone() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PartnerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import partner_attachment

partnerAttachment.PartnerAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import partner_attachment

partnerAttachment.PartnerAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import partner_attachment

partnerAttachment.PartnerAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import partner_attachment

partnerAttachment.PartnerAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PartnerAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PartnerAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PartnerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PartnerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference">PartnerAttachmentBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.children">children</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference">PartnerAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgpInput">bgp_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbpsInput">connection_bandwidth_in_mbps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProviderInput">naas_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuidInput">parent_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZoneInput">redundancy_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIdsInput">vpc_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbps">connection_bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProvider">naas_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuid">parent_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZone">redundancy_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIds">vpc_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgp"></a>

```python
bgp: PartnerAttachmentBgpOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference">PartnerAttachmentBgpOutputReference</a>

---

##### `children`<sup>Required</sup> <a name="children" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.children"></a>

```python
children: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeouts"></a>

```python
timeouts: PartnerAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference">PartnerAttachmentTimeoutsOutputReference</a>

---

##### `bgp_input`<sup>Optional</sup> <a name="bgp_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgpInput"></a>

```python
bgp_input: PartnerAttachmentBgp
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

---

##### `connection_bandwidth_in_mbps_input`<sup>Optional</sup> <a name="connection_bandwidth_in_mbps_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbpsInput"></a>

```python
connection_bandwidth_in_mbps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `naas_provider_input`<sup>Optional</sup> <a name="naas_provider_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProviderInput"></a>

```python
naas_provider_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_uuid_input`<sup>Optional</sup> <a name="parent_uuid_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuidInput"></a>

```python
parent_uuid_input: str
```

- *Type:* str

---

##### `redundancy_zone_input`<sup>Optional</sup> <a name="redundancy_zone_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZoneInput"></a>

```python
redundancy_zone_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | PartnerAttachmentTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

---

##### `vpc_ids_input`<sup>Optional</sup> <a name="vpc_ids_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIdsInput"></a>

```python
vpc_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_bandwidth_in_mbps`<sup>Required</sup> <a name="connection_bandwidth_in_mbps" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbps"></a>

```python
connection_bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `naas_provider`<sup>Required</sup> <a name="naas_provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProvider"></a>

```python
naas_provider: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_uuid`<sup>Required</sup> <a name="parent_uuid" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuid"></a>

```python
parent_uuid: str
```

- *Type:* str

---

##### `redundancy_zone`<sup>Required</sup> <a name="redundancy_zone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZone"></a>

```python
redundancy_zone: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `vpc_ids`<sup>Required</sup> <a name="vpc_ids" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIds"></a>

```python
vpc_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PartnerAttachmentBgp <a name="PartnerAttachmentBgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import partner_attachment

partnerAttachment.PartnerAttachmentBgp(
  auth_key: str = None,
  local_router_ip: str = None,
  peer_router_asn: typing.Union[int, float] = None,
  peer_router_ip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.authKey">auth_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#auth_key PartnerAttachment#auth_key}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.localRouterIp">local_router_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#local_router_ip PartnerAttachment#local_router_ip}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterAsn">peer_router_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#peer_router_asn PartnerAttachment#peer_router_asn}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterIp">peer_router_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#peer_router_ip PartnerAttachment#peer_router_ip}. |

---

##### `auth_key`<sup>Optional</sup> <a name="auth_key" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.authKey"></a>

```python
auth_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#auth_key PartnerAttachment#auth_key}.

---

##### `local_router_ip`<sup>Optional</sup> <a name="local_router_ip" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.localRouterIp"></a>

```python
local_router_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#local_router_ip PartnerAttachment#local_router_ip}.

---

##### `peer_router_asn`<sup>Optional</sup> <a name="peer_router_asn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterAsn"></a>

```python
peer_router_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#peer_router_asn PartnerAttachment#peer_router_asn}.

---

##### `peer_router_ip`<sup>Optional</sup> <a name="peer_router_ip" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterIp"></a>

```python
peer_router_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#peer_router_ip PartnerAttachment#peer_router_ip}.

---

### PartnerAttachmentConfig <a name="PartnerAttachmentConfig" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import partner_attachment

partnerAttachment.PartnerAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_bandwidth_in_mbps: typing.Union[int, float],
  naas_provider: str,
  name: str,
  region: str,
  vpc_ids: typing.List[str],
  bgp: PartnerAttachmentBgp = None,
  parent_uuid: str = None,
  redundancy_zone: str = None,
  timeouts: PartnerAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connectionBandwidthInMbps">connection_bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | The connection bandwidth in Mbps. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.naasProvider">naas_provider</a></code> | <code>str</code> | The NaaS provider. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.name">name</a></code> | <code>str</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.region">region</a></code> | <code>str</code> | The region where the Partner Attachment will be created. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.vpcIds">vpc_ids</a></code> | <code>typing.List[str]</code> | The list of VPC IDs to attach the Partner Attachment to. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.parentUuid">parent_uuid</a></code> | <code>str</code> | The UUID of the Parent Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.redundancyZone">redundancy_zone</a></code> | <code>str</code> | The redundancy zone for the NaaS. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `connection_bandwidth_in_mbps`<sup>Required</sup> <a name="connection_bandwidth_in_mbps" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connectionBandwidthInMbps"></a>

```python
connection_bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The connection bandwidth in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#connection_bandwidth_in_mbps PartnerAttachment#connection_bandwidth_in_mbps}

---

##### `naas_provider`<sup>Required</sup> <a name="naas_provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.naasProvider"></a>

```python
naas_provider: str
```

- *Type:* str

The NaaS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#naas_provider PartnerAttachment#naas_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#name PartnerAttachment#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region where the Partner Attachment will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#region PartnerAttachment#region}

---

##### `vpc_ids`<sup>Required</sup> <a name="vpc_ids" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.vpcIds"></a>

```python
vpc_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of VPC IDs to attach the Partner Attachment to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#vpc_ids PartnerAttachment#vpc_ids}

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.bgp"></a>

```python
bgp: PartnerAttachmentBgp
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#bgp PartnerAttachment#bgp}

---

##### `parent_uuid`<sup>Optional</sup> <a name="parent_uuid" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.parentUuid"></a>

```python
parent_uuid: str
```

- *Type:* str

The UUID of the Parent Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#parent_uuid PartnerAttachment#parent_uuid}

---

##### `redundancy_zone`<sup>Optional</sup> <a name="redundancy_zone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.redundancyZone"></a>

```python
redundancy_zone: str
```

- *Type:* str

The redundancy zone for the NaaS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#redundancy_zone PartnerAttachment#redundancy_zone}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.timeouts"></a>

```python
timeouts: PartnerAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#timeouts PartnerAttachment#timeouts}

---

### PartnerAttachmentTimeouts <a name="PartnerAttachmentTimeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import partner_attachment

partnerAttachment.PartnerAttachmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#create PartnerAttachment#create}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#delete PartnerAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#create PartnerAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#delete PartnerAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PartnerAttachmentBgpOutputReference <a name="PartnerAttachmentBgpOutputReference" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import partner_attachment

partnerAttachment.PartnerAttachmentBgpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetAuthKey">reset_auth_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetLocalRouterIp">reset_local_router_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterAsn">reset_peer_router_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterIp">reset_peer_router_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_key` <a name="reset_auth_key" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetAuthKey"></a>

```python
def reset_auth_key() -> None
```

##### `reset_local_router_ip` <a name="reset_local_router_ip" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetLocalRouterIp"></a>

```python
def reset_local_router_ip() -> None
```

##### `reset_peer_router_asn` <a name="reset_peer_router_asn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterAsn"></a>

```python
def reset_peer_router_asn() -> None
```

##### `reset_peer_router_ip` <a name="reset_peer_router_ip" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterIp"></a>

```python
def reset_peer_router_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKeyInput">auth_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIpInput">local_router_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsnInput">peer_router_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIpInput">peer_router_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKey">auth_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIp">local_router_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsn">peer_router_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIp">peer_router_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_key_input`<sup>Optional</sup> <a name="auth_key_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKeyInput"></a>

```python
auth_key_input: str
```

- *Type:* str

---

##### `local_router_ip_input`<sup>Optional</sup> <a name="local_router_ip_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIpInput"></a>

```python
local_router_ip_input: str
```

- *Type:* str

---

##### `peer_router_asn_input`<sup>Optional</sup> <a name="peer_router_asn_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsnInput"></a>

```python
peer_router_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_router_ip_input`<sup>Optional</sup> <a name="peer_router_ip_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIpInput"></a>

```python
peer_router_ip_input: str
```

- *Type:* str

---

##### `auth_key`<sup>Required</sup> <a name="auth_key" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKey"></a>

```python
auth_key: str
```

- *Type:* str

---

##### `local_router_ip`<sup>Required</sup> <a name="local_router_ip" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIp"></a>

```python
local_router_ip: str
```

- *Type:* str

---

##### `peer_router_asn`<sup>Required</sup> <a name="peer_router_asn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsn"></a>

```python
peer_router_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_router_ip`<sup>Required</sup> <a name="peer_router_ip" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIp"></a>

```python
peer_router_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.internalValue"></a>

```python
internal_value: PartnerAttachmentBgp
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

---


### PartnerAttachmentTimeoutsOutputReference <a name="PartnerAttachmentTimeoutsOutputReference" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import partner_attachment

partnerAttachment.PartnerAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PartnerAttachmentTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

---



