# `dataDigitaloceanPartnerAttachment` Submodule <a name="`dataDigitaloceanPartnerAttachment` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanPartnerAttachment <a name="DataDigitaloceanPartnerAttachment" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment digitalocean_partner_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment

dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bgp: DataDigitaloceanPartnerAttachmentBgp = None,
  id: str = None,
  name: str = None,
  redundancy_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.redundancyZone">redundancy_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.bgp"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#bgp DataDigitaloceanPartnerAttachment#bgp}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id"></a>

- *Type:* str

The ID of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#id DataDigitaloceanPartnerAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.name"></a>

- *Type:* str

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#name DataDigitaloceanPartnerAttachment#name}

---

##### `redundancy_zone`<sup>Optional</sup> <a name="redundancy_zone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.redundancyZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp">put_bgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetBgp">reset_bgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetRedundancyZone">reset_redundancy_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_bgp` <a name="put_bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp"></a>

```python
def put_bgp(
  local_router_ip: str = None,
  peer_router_asn: typing.Union[int, float] = None,
  peer_router_ip: str = None
) -> None
```

###### `local_router_ip`<sup>Optional</sup> <a name="local_router_ip" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp.parameter.localRouterIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#local_router_ip DataDigitaloceanPartnerAttachment#local_router_ip}.

---

###### `peer_router_asn`<sup>Optional</sup> <a name="peer_router_asn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp.parameter.peerRouterAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#peer_router_asn DataDigitaloceanPartnerAttachment#peer_router_asn}.

---

###### `peer_router_ip`<sup>Optional</sup> <a name="peer_router_ip" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp.parameter.peerRouterIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#peer_router_ip DataDigitaloceanPartnerAttachment#peer_router_ip}.

---

##### `reset_bgp` <a name="reset_bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetBgp"></a>

```python
def reset_bgp() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_redundancy_zone` <a name="reset_redundancy_zone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetRedundancyZone"></a>

```python
def reset_redundancy_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanPartnerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment

dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment

dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment

dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment

dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanPartnerAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanPartnerAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanPartnerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanPartnerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference">DataDigitaloceanPartnerAttachmentBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.connectionBandwidthInMbps">connection_bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.naasProvider">naas_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.vpcIds">vpc_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgpInput">bgp_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZoneInput">redundancy_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZone">redundancy_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgp"></a>

```python
bgp: DataDigitaloceanPartnerAttachmentBgpOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference">DataDigitaloceanPartnerAttachmentBgpOutputReference</a>

---

##### `connection_bandwidth_in_mbps`<sup>Required</sup> <a name="connection_bandwidth_in_mbps" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.connectionBandwidthInMbps"></a>

```python
connection_bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `naas_provider`<sup>Required</sup> <a name="naas_provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.naasProvider"></a>

```python
naas_provider: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vpc_ids`<sup>Required</sup> <a name="vpc_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.vpcIds"></a>

```python
vpc_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bgp_input`<sup>Optional</sup> <a name="bgp_input" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgpInput"></a>

```python
bgp_input: DataDigitaloceanPartnerAttachmentBgp
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `redundancy_zone_input`<sup>Optional</sup> <a name="redundancy_zone_input" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZoneInput"></a>

```python
redundancy_zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redundancy_zone`<sup>Required</sup> <a name="redundancy_zone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZone"></a>

```python
redundancy_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanPartnerAttachmentBgp <a name="DataDigitaloceanPartnerAttachmentBgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment

dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp(
  local_router_ip: str = None,
  peer_router_asn: typing.Union[int, float] = None,
  peer_router_ip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.localRouterIp">local_router_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#local_router_ip DataDigitaloceanPartnerAttachment#local_router_ip}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterAsn">peer_router_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#peer_router_asn DataDigitaloceanPartnerAttachment#peer_router_asn}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterIp">peer_router_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#peer_router_ip DataDigitaloceanPartnerAttachment#peer_router_ip}. |

---

##### `local_router_ip`<sup>Optional</sup> <a name="local_router_ip" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.localRouterIp"></a>

```python
local_router_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#local_router_ip DataDigitaloceanPartnerAttachment#local_router_ip}.

---

##### `peer_router_asn`<sup>Optional</sup> <a name="peer_router_asn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterAsn"></a>

```python
peer_router_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#peer_router_asn DataDigitaloceanPartnerAttachment#peer_router_asn}.

---

##### `peer_router_ip`<sup>Optional</sup> <a name="peer_router_ip" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterIp"></a>

```python
peer_router_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#peer_router_ip DataDigitaloceanPartnerAttachment#peer_router_ip}.

---

### DataDigitaloceanPartnerAttachmentConfig <a name="DataDigitaloceanPartnerAttachmentConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment

dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bgp: DataDigitaloceanPartnerAttachmentBgp = None,
  id: str = None,
  name: str = None,
  redundancy_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.id">id</a></code> | <code>str</code> | The ID of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.name">name</a></code> | <code>str</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.redundancyZone">redundancy_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.bgp"></a>

```python
bgp: DataDigitaloceanPartnerAttachmentBgp
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#bgp DataDigitaloceanPartnerAttachment#bgp}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#id DataDigitaloceanPartnerAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#name DataDigitaloceanPartnerAttachment#name}

---

##### `redundancy_zone`<sup>Optional</sup> <a name="redundancy_zone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.redundancyZone"></a>

```python
redundancy_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanPartnerAttachmentBgpOutputReference <a name="DataDigitaloceanPartnerAttachmentBgpOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_partner_attachment

dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetLocalRouterIp">reset_local_router_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterAsn">reset_peer_router_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterIp">reset_peer_router_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_local_router_ip` <a name="reset_local_router_ip" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetLocalRouterIp"></a>

```python
def reset_local_router_ip() -> None
```

##### `reset_peer_router_asn` <a name="reset_peer_router_asn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterAsn"></a>

```python
def reset_peer_router_asn() -> None
```

##### `reset_peer_router_ip` <a name="reset_peer_router_ip" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterIp"></a>

```python
def reset_peer_router_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIpInput">local_router_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsnInput">peer_router_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIpInput">peer_router_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIp">local_router_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsn">peer_router_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIp">peer_router_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_router_ip_input`<sup>Optional</sup> <a name="local_router_ip_input" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIpInput"></a>

```python
local_router_ip_input: str
```

- *Type:* str

---

##### `peer_router_asn_input`<sup>Optional</sup> <a name="peer_router_asn_input" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsnInput"></a>

```python
peer_router_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_router_ip_input`<sup>Optional</sup> <a name="peer_router_ip_input" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIpInput"></a>

```python
peer_router_ip_input: str
```

- *Type:* str

---

##### `local_router_ip`<sup>Required</sup> <a name="local_router_ip" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIp"></a>

```python
local_router_ip: str
```

- *Type:* str

---

##### `peer_router_asn`<sup>Required</sup> <a name="peer_router_asn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsn"></a>

```python
peer_router_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_router_ip`<sup>Required</sup> <a name="peer_router_ip" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIp"></a>

```python
peer_router_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanPartnerAttachmentBgp
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

---



