# `vpcNatGateway` Submodule <a name="`vpcNatGateway` Submodule" id="@cdktf/provider-digitalocean.vpcNatGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcNatGateway <a name="VpcNatGateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway digitalocean_vpc_nat_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGateway;

VpcNatGateway.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .region(java.lang.String)
    .size(java.lang.Number)
    .type(java.lang.String)
    .vpcs(IResolvable)
    .vpcs(java.util.List<VpcNatGatewayVpcs>)
//  .icmpTimeoutSeconds(java.lang.Number)
//  .tcpTimeoutSeconds(java.lang.Number)
//  .udpTimeoutSeconds(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.size">size</a></code> | <code>java.lang.Number</code> | Size of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Type of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.vpcs">vpcs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>></code> | vpcs block. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.icmpTimeoutSeconds">icmpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | ICMP connection timeout (in seconds). |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.tcpTimeoutSeconds">tcpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | TCP connection timeout (in seconds). |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.udpTimeoutSeconds">udpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | UDP connection timeout (in seconds). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#name VpcNatGateway#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#region VpcNatGateway#region}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.size"></a>

- *Type:* java.lang.Number

Size of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#size VpcNatGateway#size}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Type of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#type VpcNatGateway#type}

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.vpcs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>>

vpcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#vpcs VpcNatGateway#vpcs}

---

##### `icmpTimeoutSeconds`<sup>Optional</sup> <a name="icmpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.icmpTimeoutSeconds"></a>

- *Type:* java.lang.Number

ICMP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#icmp_timeout_seconds VpcNatGateway#icmp_timeout_seconds}

---

##### `tcpTimeoutSeconds`<sup>Optional</sup> <a name="tcpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.tcpTimeoutSeconds"></a>

- *Type:* java.lang.Number

TCP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#tcp_timeout_seconds VpcNatGateway#tcp_timeout_seconds}

---

##### `udpTimeoutSeconds`<sup>Optional</sup> <a name="udpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.Initializer.parameter.udpTimeoutSeconds"></a>

- *Type:* java.lang.Number

UDP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#udp_timeout_seconds VpcNatGateway#udp_timeout_seconds}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.putVpcs">putVpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetIcmpTimeoutSeconds">resetIcmpTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetTcpTimeoutSeconds">resetTcpTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetUdpTimeoutSeconds">resetUdpTimeoutSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVpcs` <a name="putVpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.putVpcs"></a>

```java
public void putVpcs(IResolvable OR java.util.List<VpcNatGatewayVpcs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.putVpcs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>>

---

##### `resetIcmpTimeoutSeconds` <a name="resetIcmpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetIcmpTimeoutSeconds"></a>

```java
public void resetIcmpTimeoutSeconds()
```

##### `resetTcpTimeoutSeconds` <a name="resetTcpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetTcpTimeoutSeconds"></a>

```java
public void resetTcpTimeoutSeconds()
```

##### `resetUdpTimeoutSeconds` <a name="resetUdpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.resetUdpTimeoutSeconds"></a>

```java
public void resetUdpTimeoutSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcNatGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGateway;

VpcNatGateway.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGateway;

VpcNatGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGateway;

VpcNatGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGateway;

VpcNatGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpcNatGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VpcNatGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpcNatGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpcNatGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VpcNatGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.egresses">egresses</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList">VpcNatGatewayEgressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcs">vpcs</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList">VpcNatGatewayVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSecondsInput">icmpTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSecondsInput">tcpTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSecondsInput">udpTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcsInput">vpcsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSeconds">icmpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSeconds">tcpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSeconds">udpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `egresses`<sup>Required</sup> <a name="egresses" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.egresses"></a>

```java
public VpcNatGatewayEgressesList getEgresses();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList">VpcNatGatewayEgressesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcs"></a>

```java
public VpcNatGatewayVpcsList getVpcs();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList">VpcNatGatewayVpcsList</a>

---

##### `icmpTimeoutSecondsInput`<sup>Optional</sup> <a name="icmpTimeoutSecondsInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSecondsInput"></a>

```java
public java.lang.Number getIcmpTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `tcpTimeoutSecondsInput`<sup>Optional</sup> <a name="tcpTimeoutSecondsInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSecondsInput"></a>

```java
public java.lang.Number getTcpTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `udpTimeoutSecondsInput`<sup>Optional</sup> <a name="udpTimeoutSecondsInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSecondsInput"></a>

```java
public java.lang.Number getUdpTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `vpcsInput`<sup>Optional</sup> <a name="vpcsInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.vpcsInput"></a>

```java
public java.lang.Object getVpcsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>>

---

##### `icmpTimeoutSeconds`<sup>Required</sup> <a name="icmpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.icmpTimeoutSeconds"></a>

```java
public java.lang.Number getIcmpTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `tcpTimeoutSeconds`<sup>Required</sup> <a name="tcpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tcpTimeoutSeconds"></a>

```java
public java.lang.Number getTcpTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `udpTimeoutSeconds`<sup>Required</sup> <a name="udpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.udpTimeoutSeconds"></a>

```java
public java.lang.Number getUdpTimeoutSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcNatGatewayConfig <a name="VpcNatGatewayConfig" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGatewayConfig;

VpcNatGatewayConfig.builder()
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
    .name(java.lang.String)
    .region(java.lang.String)
    .size(java.lang.Number)
    .type(java.lang.String)
    .vpcs(IResolvable)
    .vpcs(java.util.List<VpcNatGatewayVpcs>)
//  .icmpTimeoutSeconds(java.lang.Number)
//  .tcpTimeoutSeconds(java.lang.Number)
//  .udpTimeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.size">size</a></code> | <code>java.lang.Number</code> | Size of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.vpcs">vpcs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>></code> | vpcs block. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.icmpTimeoutSeconds">icmpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | ICMP connection timeout (in seconds). |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.tcpTimeoutSeconds">tcpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | TCP connection timeout (in seconds). |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.udpTimeoutSeconds">udpTimeoutSeconds</a></code> | <code>java.lang.Number</code> | UDP connection timeout (in seconds). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#name VpcNatGateway#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#region VpcNatGateway#region}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Size of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#size VpcNatGateway#size}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#type VpcNatGateway#type}

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.vpcs"></a>

```java
public java.lang.Object getVpcs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>>

vpcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#vpcs VpcNatGateway#vpcs}

---

##### `icmpTimeoutSeconds`<sup>Optional</sup> <a name="icmpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.icmpTimeoutSeconds"></a>

```java
public java.lang.Number getIcmpTimeoutSeconds();
```

- *Type:* java.lang.Number

ICMP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#icmp_timeout_seconds VpcNatGateway#icmp_timeout_seconds}

---

##### `tcpTimeoutSeconds`<sup>Optional</sup> <a name="tcpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.tcpTimeoutSeconds"></a>

```java
public java.lang.Number getTcpTimeoutSeconds();
```

- *Type:* java.lang.Number

TCP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#tcp_timeout_seconds VpcNatGateway#tcp_timeout_seconds}

---

##### `udpTimeoutSeconds`<sup>Optional</sup> <a name="udpTimeoutSeconds" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayConfig.property.udpTimeoutSeconds"></a>

```java
public java.lang.Number getUdpTimeoutSeconds();
```

- *Type:* java.lang.Number

UDP connection timeout (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#udp_timeout_seconds VpcNatGateway#udp_timeout_seconds}

---

### VpcNatGatewayEgresses <a name="VpcNatGatewayEgresses" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGatewayEgresses;

VpcNatGatewayEgresses.builder()
    .build();
```


### VpcNatGatewayEgressesPublicGateways <a name="VpcNatGatewayEgressesPublicGateways" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGatewayEgressesPublicGateways;

VpcNatGatewayEgressesPublicGateways.builder()
    .build();
```


### VpcNatGatewayVpcs <a name="VpcNatGatewayVpcs" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGatewayVpcs;

VpcNatGatewayVpcs.builder()
    .vpcUuid(java.lang.String)
//  .defaultGateway(java.lang.Boolean)
//  .defaultGateway(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | ID of the ingress VPC. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.defaultGateway">defaultGateway</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if this is the default VPC NAT Gateway in the VPC. |

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.vpcUuid"></a>

```java
public java.lang.String getVpcUuid();
```

- *Type:* java.lang.String

ID of the ingress VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#vpc_uuid VpcNatGateway#vpc_uuid}

---

##### `defaultGateway`<sup>Optional</sup> <a name="defaultGateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs.property.defaultGateway"></a>

```java
public java.lang.Object getDefaultGateway();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if this is the default VPC NAT Gateway in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/vpc_nat_gateway#default_gateway VpcNatGateway#default_gateway}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcNatGatewayEgressesList <a name="VpcNatGatewayEgressesList" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGatewayEgressesList;

new VpcNatGatewayEgressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.get"></a>

```java
public VpcNatGatewayEgressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VpcNatGatewayEgressesOutputReference <a name="VpcNatGatewayEgressesOutputReference" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGatewayEgressesOutputReference;

new VpcNatGatewayEgressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.publicGateways">publicGateways</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList">VpcNatGatewayEgressesPublicGatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses">VpcNatGatewayEgresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicGateways`<sup>Required</sup> <a name="publicGateways" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.publicGateways"></a>

```java
public VpcNatGatewayEgressesPublicGatewaysList getPublicGateways();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList">VpcNatGatewayEgressesPublicGatewaysList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesOutputReference.property.internalValue"></a>

```java
public VpcNatGatewayEgresses getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgresses">VpcNatGatewayEgresses</a>

---


### VpcNatGatewayEgressesPublicGatewaysList <a name="VpcNatGatewayEgressesPublicGatewaysList" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGatewayEgressesPublicGatewaysList;

new VpcNatGatewayEgressesPublicGatewaysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.get"></a>

```java
public VpcNatGatewayEgressesPublicGatewaysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VpcNatGatewayEgressesPublicGatewaysOutputReference <a name="VpcNatGatewayEgressesPublicGatewaysOutputReference" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGatewayEgressesPublicGatewaysOutputReference;

new VpcNatGatewayEgressesPublicGatewaysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways">VpcNatGatewayEgressesPublicGateways</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue"></a>

```java
public VpcNatGatewayEgressesPublicGateways getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayEgressesPublicGateways">VpcNatGatewayEgressesPublicGateways</a>

---


### VpcNatGatewayVpcsList <a name="VpcNatGatewayVpcsList" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGatewayVpcsList;

new VpcNatGatewayVpcsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.get"></a>

```java
public VpcNatGatewayVpcsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>>

---


### VpcNatGatewayVpcsOutputReference <a name="VpcNatGatewayVpcsOutputReference" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.vpc_nat_gateway.VpcNatGatewayVpcsOutputReference;

new VpcNatGatewayVpcsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resetDefaultGateway">resetDefaultGateway</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultGateway` <a name="resetDefaultGateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.resetDefaultGateway"></a>

```java
public void resetDefaultGateway()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGatewayInput">defaultGatewayInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuidInput">vpcUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGateway">defaultGateway</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.gatewayIp"></a>

```java
public java.lang.String getGatewayIp();
```

- *Type:* java.lang.String

---

##### `defaultGatewayInput`<sup>Optional</sup> <a name="defaultGatewayInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGatewayInput"></a>

```java
public java.lang.Object getDefaultGatewayInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vpcUuidInput`<sup>Optional</sup> <a name="vpcUuidInput" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuidInput"></a>

```java
public java.lang.String getVpcUuidInput();
```

- *Type:* java.lang.String

---

##### `defaultGateway`<sup>Required</sup> <a name="defaultGateway" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.defaultGateway"></a>

```java
public java.lang.Object getDefaultGateway();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.vpcUuid"></a>

```java
public java.lang.String getVpcUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.vpcNatGateway.VpcNatGatewayVpcs">VpcNatGatewayVpcs</a>

---



