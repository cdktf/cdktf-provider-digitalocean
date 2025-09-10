# `vpcNatGateway` Submodule <a name="`vpcNatGateway` Submodule" id="@cdktf/provider-digitalocean.vpcNatGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcNatGateway <a name="VpcNatGateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway digitalocean_vpc_nat_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  size: typing.Union[int, float],
  type: str,
  vpcs: typing.Union[IResolvable, typing.List[VpcNatGatewayVpcs]],
  icmp_timeout_seconds: typing.Union[int, float] = None,
  tcp_timeout_seconds: typing.Union[int, float] = None,
  udp_timeout_seconds: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.region">region</a></code> | <code>str</code> | Region of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.vpcs">vpcs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>]]</code> | vpcs block. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.icmpTimeoutSeconds">icmp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | ICMP connection timeout (in seconds). |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.tcpTimeoutSeconds">tcp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | TCP connection timeout (in seconds). |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.udpTimeoutSeconds">udp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | UDP connection timeout (in seconds). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.name"></a>

- *Type:* str

Name of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#name VpcNatGateway#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.region"></a>

- *Type:* str

Region of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#region VpcNatGateway#region}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Size of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#size VpcNatGateway#size}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.type"></a>

- *Type:* str

Type of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#type VpcNatGateway#type}

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.vpcs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>]]

vpcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#vpcs VpcNatGateway#vpcs}

---

##### `icmp_timeout_seconds`<sup>Optional</sup> <a name="icmp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.icmpTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

ICMP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#icmp_timeout_seconds VpcNatGateway#icmp_timeout_seconds}

---

##### `tcp_timeout_seconds`<sup>Optional</sup> <a name="tcp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.tcpTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

TCP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#tcp_timeout_seconds VpcNatGateway#tcp_timeout_seconds}

---

##### `udp_timeout_seconds`<sup>Optional</sup> <a name="udp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.udpTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

UDP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#udp_timeout_seconds VpcNatGateway#udp_timeout_seconds}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.putVpcs">put_vpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetIcmpTimeoutSeconds">reset_icmp_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetTcpTimeoutSeconds">reset_tcp_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetUdpTimeoutSeconds">reset_udp_timeout_seconds</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_vpcs` <a name="put_vpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.putVpcs"></a>

```python
def put_vpcs(
  value: typing.Union[IResolvable, typing.List[VpcNatGatewayVpcs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.putVpcs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>]]

---

##### `reset_icmp_timeout_seconds` <a name="reset_icmp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetIcmpTimeoutSeconds"></a>

```python
def reset_icmp_timeout_seconds() -> None
```

##### `reset_tcp_timeout_seconds` <a name="reset_tcp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetTcpTimeoutSeconds"></a>

```python
def reset_tcp_timeout_seconds() -> None
```

##### `reset_udp_timeout_seconds` <a name="reset_udp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetUdpTimeoutSeconds"></a>

```python
def reset_udp_timeout_seconds() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpcNatGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpcNatGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpcNatGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpcNatGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcNatGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.egresses">egresses</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList">VpcNatGatewayEgressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcs">vpcs</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList">VpcNatGatewayVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSecondsInput">icmp_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSecondsInput">tcp_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSecondsInput">udp_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcsInput">vpcs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSeconds">icmp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSeconds">tcp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSeconds">udp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `egresses`<sup>Required</sup> <a name="egresses" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.egresses"></a>

```python
egresses: VpcNatGatewayEgressesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList">VpcNatGatewayEgressesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcs"></a>

```python
vpcs: VpcNatGatewayVpcsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList">VpcNatGatewayVpcsList</a>

---

##### `icmp_timeout_seconds_input`<sup>Optional</sup> <a name="icmp_timeout_seconds_input" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSecondsInput"></a>

```python
icmp_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_timeout_seconds_input`<sup>Optional</sup> <a name="tcp_timeout_seconds_input" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSecondsInput"></a>

```python
tcp_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `udp_timeout_seconds_input`<sup>Optional</sup> <a name="udp_timeout_seconds_input" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSecondsInput"></a>

```python
udp_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpcs_input`<sup>Optional</sup> <a name="vpcs_input" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcsInput"></a>

```python
vpcs_input: typing.Union[IResolvable, typing.List[VpcNatGatewayVpcs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>]]

---

##### `icmp_timeout_seconds`<sup>Required</sup> <a name="icmp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSeconds"></a>

```python
icmp_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_timeout_seconds`<sup>Required</sup> <a name="tcp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSeconds"></a>

```python
tcp_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `udp_timeout_seconds`<sup>Required</sup> <a name="udp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSeconds"></a>

```python
udp_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcNatGatewayConfig <a name="VpcNatGatewayConfig" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  size: typing.Union[int, float],
  type: str,
  vpcs: typing.Union[IResolvable, typing.List[VpcNatGatewayVpcs]],
  icmp_timeout_seconds: typing.Union[int, float] = None,
  tcp_timeout_seconds: typing.Union[int, float] = None,
  udp_timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.name">name</a></code> | <code>str</code> | Name of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.region">region</a></code> | <code>str</code> | Region of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.type">type</a></code> | <code>str</code> | Type of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.vpcs">vpcs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>]]</code> | vpcs block. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.icmpTimeoutSeconds">icmp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | ICMP connection timeout (in seconds). |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.tcpTimeoutSeconds">tcp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | TCP connection timeout (in seconds). |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.udpTimeoutSeconds">udp_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | UDP connection timeout (in seconds). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#name VpcNatGateway#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#region VpcNatGateway#region}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#size VpcNatGateway#size}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#type VpcNatGateway#type}

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.vpcs"></a>

```python
vpcs: typing.Union[IResolvable, typing.List[VpcNatGatewayVpcs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>]]

vpcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#vpcs VpcNatGateway#vpcs}

---

##### `icmp_timeout_seconds`<sup>Optional</sup> <a name="icmp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.icmpTimeoutSeconds"></a>

```python
icmp_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

ICMP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#icmp_timeout_seconds VpcNatGateway#icmp_timeout_seconds}

---

##### `tcp_timeout_seconds`<sup>Optional</sup> <a name="tcp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.tcpTimeoutSeconds"></a>

```python
tcp_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

TCP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#tcp_timeout_seconds VpcNatGateway#tcp_timeout_seconds}

---

##### `udp_timeout_seconds`<sup>Optional</sup> <a name="udp_timeout_seconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.udpTimeoutSeconds"></a>

```python
udp_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

UDP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#udp_timeout_seconds VpcNatGateway#udp_timeout_seconds}

---

### VpcNatGatewayEgresses <a name="VpcNatGatewayEgresses" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGatewayEgresses()
```


### VpcNatGatewayEgressesPublicGateways <a name="VpcNatGatewayEgressesPublicGateways" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGatewayEgressesPublicGateways()
```


### VpcNatGatewayVpcs <a name="VpcNatGatewayVpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGatewayVpcs(
  vpc_uuid: str,
  default_gateway: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.vpcUuid">vpc_uuid</a></code> | <code>str</code> | ID of the ingress VPC. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.defaultGateway">default_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if this is the default VPC NAT Gateway in the VPC. |

---

##### `vpc_uuid`<sup>Required</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.vpcUuid"></a>

```python
vpc_uuid: str
```

- *Type:* str

ID of the ingress VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#vpc_uuid VpcNatGateway#vpc_uuid}

---

##### `default_gateway`<sup>Optional</sup> <a name="default_gateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.defaultGateway"></a>

```python
default_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if this is the default VPC NAT Gateway in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/vpc_nat_gateway#default_gateway VpcNatGateway#default_gateway}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcNatGatewayEgressesList <a name="VpcNatGatewayEgressesList" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGatewayEgressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpcNatGatewayEgressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VpcNatGatewayEgressesOutputReference <a name="VpcNatGatewayEgressesOutputReference" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGatewayEgressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.publicGateways">public_gateways</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList">VpcNatGatewayEgressesPublicGatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses">VpcNatGatewayEgresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_gateways`<sup>Required</sup> <a name="public_gateways" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.publicGateways"></a>

```python
public_gateways: VpcNatGatewayEgressesPublicGatewaysList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList">VpcNatGatewayEgressesPublicGatewaysList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.internalValue"></a>

```python
internal_value: VpcNatGatewayEgresses
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses">VpcNatGatewayEgresses</a>

---


### VpcNatGatewayEgressesPublicGatewaysList <a name="VpcNatGatewayEgressesPublicGatewaysList" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpcNatGatewayEgressesPublicGatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VpcNatGatewayEgressesPublicGatewaysOutputReference <a name="VpcNatGatewayEgressesPublicGatewaysOutputReference" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways">VpcNatGatewayEgressesPublicGateways</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue"></a>

```python
internal_value: VpcNatGatewayEgressesPublicGateways
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways">VpcNatGatewayEgressesPublicGateways</a>

---


### VpcNatGatewayVpcsList <a name="VpcNatGatewayVpcsList" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGatewayVpcsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpcNatGatewayVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpcNatGatewayVpcs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>]]

---


### VpcNatGatewayVpcsOutputReference <a name="VpcNatGatewayVpcsOutputReference" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import vpc_nat_gateway

vpcNatGateway.VpcNatGatewayVpcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resetDefaultGateway">reset_default_gateway</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_gateway` <a name="reset_default_gateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resetDefaultGateway"></a>

```python
def reset_default_gateway() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGatewayInput">default_gateway_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuidInput">vpc_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGateway">default_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuid">vpc_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

---

##### `default_gateway_input`<sup>Optional</sup> <a name="default_gateway_input" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGatewayInput"></a>

```python
default_gateway_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vpc_uuid_input`<sup>Optional</sup> <a name="vpc_uuid_input" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuidInput"></a>

```python
vpc_uuid_input: str
```

- *Type:* str

---

##### `default_gateway`<sup>Required</sup> <a name="default_gateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGateway"></a>

```python
default_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vpc_uuid`<sup>Required</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuid"></a>

```python
vpc_uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpcNatGatewayVpcs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>]

---



