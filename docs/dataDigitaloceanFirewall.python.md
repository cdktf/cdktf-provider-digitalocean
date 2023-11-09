# `data_digitalocean_firewall`

Refer to the Terraform Registory for docs: [`data_digitalocean_firewall`](https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall).

# `dataDigitaloceanFirewall` Submodule <a name="`dataDigitaloceanFirewall` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanFirewall <a name="DataDigitaloceanFirewall" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall digitalocean_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewall(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_id: str,
  droplet_ids: typing.List[typing.Union[int, float]] = None,
  id: str = None,
  inbound_rule: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallInboundRule]] = None,
  outbound_rule: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallOutboundRule]] = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.firewallId">firewall_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#firewall_id DataDigitaloceanFirewall#firewall_id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.dropletIds">droplet_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#droplet_ids DataDigitaloceanFirewall#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#id DataDigitaloceanFirewall#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.inboundRule">inbound_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>]]</code> | inbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.outboundRule">outbound_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>]]</code> | outbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#tags DataDigitaloceanFirewall#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_id`<sup>Required</sup> <a name="firewall_id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.firewallId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#firewall_id DataDigitaloceanFirewall#firewall_id}.

---

##### `droplet_ids`<sup>Optional</sup> <a name="droplet_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.dropletIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#droplet_ids DataDigitaloceanFirewall#droplet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#id DataDigitaloceanFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_rule`<sup>Optional</sup> <a name="inbound_rule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.inboundRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>]]

inbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#inbound_rule DataDigitaloceanFirewall#inbound_rule}

---

##### `outbound_rule`<sup>Optional</sup> <a name="outbound_rule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.outboundRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>]]

outbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#outbound_rule DataDigitaloceanFirewall#outbound_rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#tags DataDigitaloceanFirewall#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putInboundRule">put_inbound_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putOutboundRule">put_outbound_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetDropletIds">reset_droplet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetInboundRule">reset_inbound_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOutboundRule">reset_outbound_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_inbound_rule` <a name="put_inbound_rule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putInboundRule"></a>

```python
def put_inbound_rule(
  value: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallInboundRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putInboundRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>]]

---

##### `put_outbound_rule` <a name="put_outbound_rule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putOutboundRule"></a>

```python
def put_outbound_rule(
  value: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallOutboundRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.putOutboundRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>]]

---

##### `reset_droplet_ids` <a name="reset_droplet_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetDropletIds"></a>

```python
def reset_droplet_ids() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inbound_rule` <a name="reset_inbound_rule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetInboundRule"></a>

```python
def reset_inbound_rule() -> None
```

##### `reset_outbound_rule` <a name="reset_outbound_rule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetOutboundRule"></a>

```python
def reset_outbound_rule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDigitaloceanFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewall.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewall.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewall.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewall.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDigitaloceanFirewall resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDigitaloceanFirewall to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDigitaloceanFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRule">inbound_rule</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList">DataDigitaloceanFirewallInboundRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRule">outbound_rule</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList">DataDigitaloceanFirewallOutboundRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.pendingChanges">pending_changes</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList">DataDigitaloceanFirewallPendingChangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIdsInput">droplet_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallIdInput">firewall_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRuleInput">inbound_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRuleInput">outbound_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIds">droplet_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallId">firewall_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `inbound_rule`<sup>Required</sup> <a name="inbound_rule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRule"></a>

```python
inbound_rule: DataDigitaloceanFirewallInboundRuleList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList">DataDigitaloceanFirewallInboundRuleList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `outbound_rule`<sup>Required</sup> <a name="outbound_rule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRule"></a>

```python
outbound_rule: DataDigitaloceanFirewallOutboundRuleList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList">DataDigitaloceanFirewallOutboundRuleList</a>

---

##### `pending_changes`<sup>Required</sup> <a name="pending_changes" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.pendingChanges"></a>

```python
pending_changes: DataDigitaloceanFirewallPendingChangesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList">DataDigitaloceanFirewallPendingChangesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `droplet_ids_input`<sup>Optional</sup> <a name="droplet_ids_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIdsInput"></a>

```python
droplet_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `firewall_id_input`<sup>Optional</sup> <a name="firewall_id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallIdInput"></a>

```python
firewall_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inbound_rule_input`<sup>Optional</sup> <a name="inbound_rule_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.inboundRuleInput"></a>

```python
inbound_rule_input: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallInboundRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>]]

---

##### `outbound_rule_input`<sup>Optional</sup> <a name="outbound_rule_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.outboundRuleInput"></a>

```python
outbound_rule_input: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallOutboundRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `droplet_ids`<sup>Required</sup> <a name="droplet_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.dropletIds"></a>

```python
droplet_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `firewall_id`<sup>Required</sup> <a name="firewall_id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.firewallId"></a>

```python
firewall_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewall.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanFirewallConfig <a name="DataDigitaloceanFirewallConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_id: str,
  droplet_ids: typing.List[typing.Union[int, float]] = None,
  id: str = None,
  inbound_rule: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallInboundRule]] = None,
  outbound_rule: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallOutboundRule]] = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.firewallId">firewall_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#firewall_id DataDigitaloceanFirewall#firewall_id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dropletIds">droplet_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#droplet_ids DataDigitaloceanFirewall#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#id DataDigitaloceanFirewall#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.inboundRule">inbound_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>]]</code> | inbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.outboundRule">outbound_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>]]</code> | outbound_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#tags DataDigitaloceanFirewall#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_id`<sup>Required</sup> <a name="firewall_id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.firewallId"></a>

```python
firewall_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#firewall_id DataDigitaloceanFirewall#firewall_id}.

---

##### `droplet_ids`<sup>Optional</sup> <a name="droplet_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.dropletIds"></a>

```python
droplet_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#droplet_ids DataDigitaloceanFirewall#droplet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#id DataDigitaloceanFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_rule`<sup>Optional</sup> <a name="inbound_rule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.inboundRule"></a>

```python
inbound_rule: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallInboundRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>]]

inbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#inbound_rule DataDigitaloceanFirewall#inbound_rule}

---

##### `outbound_rule`<sup>Optional</sup> <a name="outbound_rule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.outboundRule"></a>

```python
outbound_rule: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallOutboundRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>]]

outbound_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#outbound_rule DataDigitaloceanFirewall#outbound_rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#tags DataDigitaloceanFirewall#tags}.

---

### DataDigitaloceanFirewallInboundRule <a name="DataDigitaloceanFirewallInboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule(
  protocol: str,
  port_range: str = None,
  source_addresses: typing.List[str] = None,
  source_droplet_ids: typing.List[typing.Union[int, float]] = None,
  source_kubernetes_ids: typing.List[str] = None,
  source_load_balancer_uids: typing.List[str] = None,
  source_tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.portRange">port_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceAddresses">source_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#source_addresses DataDigitaloceanFirewall#source_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceDropletIds">source_droplet_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#source_droplet_ids DataDigitaloceanFirewall#source_droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceKubernetesIds">source_kubernetes_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#source_kubernetes_ids DataDigitaloceanFirewall#source_kubernetes_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceLoadBalancerUids">source_load_balancer_uids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#source_load_balancer_uids DataDigitaloceanFirewall#source_load_balancer_uids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceTags">source_tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#source_tags DataDigitaloceanFirewall#source_tags}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}.

---

##### `port_range`<sup>Optional</sup> <a name="port_range" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.portRange"></a>

```python
port_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}.

---

##### `source_addresses`<sup>Optional</sup> <a name="source_addresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceAddresses"></a>

```python
source_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#source_addresses DataDigitaloceanFirewall#source_addresses}.

---

##### `source_droplet_ids`<sup>Optional</sup> <a name="source_droplet_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceDropletIds"></a>

```python
source_droplet_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#source_droplet_ids DataDigitaloceanFirewall#source_droplet_ids}.

---

##### `source_kubernetes_ids`<sup>Optional</sup> <a name="source_kubernetes_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceKubernetesIds"></a>

```python
source_kubernetes_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#source_kubernetes_ids DataDigitaloceanFirewall#source_kubernetes_ids}.

---

##### `source_load_balancer_uids`<sup>Optional</sup> <a name="source_load_balancer_uids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceLoadBalancerUids"></a>

```python
source_load_balancer_uids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#source_load_balancer_uids DataDigitaloceanFirewall#source_load_balancer_uids}.

---

##### `source_tags`<sup>Optional</sup> <a name="source_tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule.property.sourceTags"></a>

```python
source_tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#source_tags DataDigitaloceanFirewall#source_tags}.

---

### DataDigitaloceanFirewallOutboundRule <a name="DataDigitaloceanFirewallOutboundRule" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule(
  protocol: str,
  destination_addresses: typing.List[str] = None,
  destination_droplet_ids: typing.List[typing.Union[int, float]] = None,
  destination_kubernetes_ids: typing.List[str] = None,
  destination_load_balancer_uids: typing.List[str] = None,
  destination_tags: typing.List[str] = None,
  port_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationAddresses">destination_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#destination_addresses DataDigitaloceanFirewall#destination_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationDropletIds">destination_droplet_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#destination_droplet_ids DataDigitaloceanFirewall#destination_droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationKubernetesIds">destination_kubernetes_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#destination_kubernetes_ids DataDigitaloceanFirewall#destination_kubernetes_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationLoadBalancerUids">destination_load_balancer_uids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#destination_load_balancer_uids DataDigitaloceanFirewall#destination_load_balancer_uids}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationTags">destination_tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#destination_tags DataDigitaloceanFirewall#destination_tags}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.portRange">port_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#protocol DataDigitaloceanFirewall#protocol}.

---

##### `destination_addresses`<sup>Optional</sup> <a name="destination_addresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationAddresses"></a>

```python
destination_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#destination_addresses DataDigitaloceanFirewall#destination_addresses}.

---

##### `destination_droplet_ids`<sup>Optional</sup> <a name="destination_droplet_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationDropletIds"></a>

```python
destination_droplet_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#destination_droplet_ids DataDigitaloceanFirewall#destination_droplet_ids}.

---

##### `destination_kubernetes_ids`<sup>Optional</sup> <a name="destination_kubernetes_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationKubernetesIds"></a>

```python
destination_kubernetes_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#destination_kubernetes_ids DataDigitaloceanFirewall#destination_kubernetes_ids}.

---

##### `destination_load_balancer_uids`<sup>Optional</sup> <a name="destination_load_balancer_uids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationLoadBalancerUids"></a>

```python
destination_load_balancer_uids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#destination_load_balancer_uids DataDigitaloceanFirewall#destination_load_balancer_uids}.

---

##### `destination_tags`<sup>Optional</sup> <a name="destination_tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.destinationTags"></a>

```python
destination_tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#destination_tags DataDigitaloceanFirewall#destination_tags}.

---

##### `port_range`<sup>Optional</sup> <a name="port_range" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule.property.portRange"></a>

```python
port_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.32.0/docs/data-sources/firewall#port_range DataDigitaloceanFirewall#port_range}.

---

### DataDigitaloceanFirewallPendingChanges <a name="DataDigitaloceanFirewallPendingChanges" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanFirewallInboundRuleList <a name="DataDigitaloceanFirewallInboundRuleList" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanFirewallInboundRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallInboundRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>]]

---


### DataDigitaloceanFirewallInboundRuleOutputReference <a name="DataDigitaloceanFirewallInboundRuleOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetPortRange">reset_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceAddresses">reset_source_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceDropletIds">reset_source_droplet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceKubernetesIds">reset_source_kubernetes_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceLoadBalancerUids">reset_source_load_balancer_uids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceTags">reset_source_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port_range` <a name="reset_port_range" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetPortRange"></a>

```python
def reset_port_range() -> None
```

##### `reset_source_addresses` <a name="reset_source_addresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceAddresses"></a>

```python
def reset_source_addresses() -> None
```

##### `reset_source_droplet_ids` <a name="reset_source_droplet_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceDropletIds"></a>

```python
def reset_source_droplet_ids() -> None
```

##### `reset_source_kubernetes_ids` <a name="reset_source_kubernetes_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceKubernetesIds"></a>

```python
def reset_source_kubernetes_ids() -> None
```

##### `reset_source_load_balancer_uids` <a name="reset_source_load_balancer_uids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceLoadBalancerUids"></a>

```python
def reset_source_load_balancer_uids() -> None
```

##### `reset_source_tags` <a name="reset_source_tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.resetSourceTags"></a>

```python
def reset_source_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRangeInput">port_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddressesInput">source_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIdsInput">source_droplet_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIdsInput">source_kubernetes_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUidsInput">source_load_balancer_uids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTagsInput">source_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRange">port_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddresses">source_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIds">source_droplet_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIds">source_kubernetes_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUids">source_load_balancer_uids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTags">source_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_range_input`<sup>Optional</sup> <a name="port_range_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRangeInput"></a>

```python
port_range_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_addresses_input`<sup>Optional</sup> <a name="source_addresses_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddressesInput"></a>

```python
source_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_droplet_ids_input`<sup>Optional</sup> <a name="source_droplet_ids_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIdsInput"></a>

```python
source_droplet_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `source_kubernetes_ids_input`<sup>Optional</sup> <a name="source_kubernetes_ids_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIdsInput"></a>

```python
source_kubernetes_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_load_balancer_uids_input`<sup>Optional</sup> <a name="source_load_balancer_uids_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUidsInput"></a>

```python
source_load_balancer_uids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_tags_input`<sup>Optional</sup> <a name="source_tags_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTagsInput"></a>

```python
source_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.portRange"></a>

```python
port_range: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source_addresses`<sup>Required</sup> <a name="source_addresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceAddresses"></a>

```python
source_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_droplet_ids`<sup>Required</sup> <a name="source_droplet_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceDropletIds"></a>

```python
source_droplet_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `source_kubernetes_ids`<sup>Required</sup> <a name="source_kubernetes_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceKubernetesIds"></a>

```python
source_kubernetes_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_load_balancer_uids`<sup>Required</sup> <a name="source_load_balancer_uids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceLoadBalancerUids"></a>

```python
source_load_balancer_uids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_tags`<sup>Required</sup> <a name="source_tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.sourceTags"></a>

```python
source_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDigitaloceanFirewallInboundRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallInboundRule">DataDigitaloceanFirewallInboundRule</a>]

---


### DataDigitaloceanFirewallOutboundRuleList <a name="DataDigitaloceanFirewallOutboundRuleList" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanFirewallOutboundRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDigitaloceanFirewallOutboundRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>]]

---


### DataDigitaloceanFirewallOutboundRuleOutputReference <a name="DataDigitaloceanFirewallOutboundRuleOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationAddresses">reset_destination_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationDropletIds">reset_destination_droplet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationKubernetesIds">reset_destination_kubernetes_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationLoadBalancerUids">reset_destination_load_balancer_uids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationTags">reset_destination_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetPortRange">reset_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_addresses` <a name="reset_destination_addresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationAddresses"></a>

```python
def reset_destination_addresses() -> None
```

##### `reset_destination_droplet_ids` <a name="reset_destination_droplet_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationDropletIds"></a>

```python
def reset_destination_droplet_ids() -> None
```

##### `reset_destination_kubernetes_ids` <a name="reset_destination_kubernetes_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationKubernetesIds"></a>

```python
def reset_destination_kubernetes_ids() -> None
```

##### `reset_destination_load_balancer_uids` <a name="reset_destination_load_balancer_uids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationLoadBalancerUids"></a>

```python
def reset_destination_load_balancer_uids() -> None
```

##### `reset_destination_tags` <a name="reset_destination_tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetDestinationTags"></a>

```python
def reset_destination_tags() -> None
```

##### `reset_port_range` <a name="reset_port_range" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.resetPortRange"></a>

```python
def reset_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddressesInput">destination_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIdsInput">destination_droplet_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIdsInput">destination_kubernetes_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUidsInput">destination_load_balancer_uids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTagsInput">destination_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRangeInput">port_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddresses">destination_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIds">destination_droplet_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIds">destination_kubernetes_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUids">destination_load_balancer_uids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTags">destination_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRange">port_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_addresses_input`<sup>Optional</sup> <a name="destination_addresses_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddressesInput"></a>

```python
destination_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_droplet_ids_input`<sup>Optional</sup> <a name="destination_droplet_ids_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIdsInput"></a>

```python
destination_droplet_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `destination_kubernetes_ids_input`<sup>Optional</sup> <a name="destination_kubernetes_ids_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIdsInput"></a>

```python
destination_kubernetes_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_load_balancer_uids_input`<sup>Optional</sup> <a name="destination_load_balancer_uids_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUidsInput"></a>

```python
destination_load_balancer_uids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_tags_input`<sup>Optional</sup> <a name="destination_tags_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTagsInput"></a>

```python
destination_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port_range_input`<sup>Optional</sup> <a name="port_range_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRangeInput"></a>

```python
port_range_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `destination_addresses`<sup>Required</sup> <a name="destination_addresses" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationAddresses"></a>

```python
destination_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_droplet_ids`<sup>Required</sup> <a name="destination_droplet_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationDropletIds"></a>

```python
destination_droplet_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `destination_kubernetes_ids`<sup>Required</sup> <a name="destination_kubernetes_ids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationKubernetesIds"></a>

```python
destination_kubernetes_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_load_balancer_uids`<sup>Required</sup> <a name="destination_load_balancer_uids" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationLoadBalancerUids"></a>

```python
destination_load_balancer_uids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_tags`<sup>Required</sup> <a name="destination_tags" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.destinationTags"></a>

```python
destination_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.portRange"></a>

```python
port_range: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDigitaloceanFirewallOutboundRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallOutboundRule">DataDigitaloceanFirewallOutboundRule</a>]

---


### DataDigitaloceanFirewallPendingChangesList <a name="DataDigitaloceanFirewallPendingChangesList" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDigitaloceanFirewallPendingChangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDigitaloceanFirewallPendingChangesOutputReference <a name="DataDigitaloceanFirewallPendingChangesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import data_digitalocean_firewall

dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.dropletId">droplet_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.removing">removing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges">DataDigitaloceanFirewallPendingChanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `droplet_id`<sup>Required</sup> <a name="droplet_id" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.dropletId"></a>

```python
droplet_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `removing`<sup>Required</sup> <a name="removing" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.removing"></a>

```python
removing: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChangesOutputReference.property.internalValue"></a>

```python
internal_value: DataDigitaloceanFirewallPendingChanges
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanFirewall.DataDigitaloceanFirewallPendingChanges">DataDigitaloceanFirewallPendingChanges</a>

---



