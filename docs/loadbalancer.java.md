# `loadbalancer` Submodule <a name="`loadbalancer` Submodule" id="@cdktf/provider-digitalocean.loadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Loadbalancer <a name="Loadbalancer" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer digitalocean_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.Loadbalancer;

Loadbalancer.Builder.create(Construct scope, java.lang.String id)
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
//  .algorithm(java.lang.String)
//  .disableLetsEncryptDnsRecords(java.lang.Boolean)
//  .disableLetsEncryptDnsRecords(IResolvable)
//  .domains(IResolvable)
//  .domains(java.util.List<LoadbalancerDomains>)
//  .dropletIds(java.util.List<java.lang.Number>)
//  .dropletTag(java.lang.String)
//  .enableBackendKeepalive(java.lang.Boolean)
//  .enableBackendKeepalive(IResolvable)
//  .enableProxyProtocol(java.lang.Boolean)
//  .enableProxyProtocol(IResolvable)
//  .firewall(LoadbalancerFirewall)
//  .forwardingRule(IResolvable)
//  .forwardingRule(java.util.List<LoadbalancerForwardingRule>)
//  .glbSettings(LoadbalancerGlbSettings)
//  .healthcheck(LoadbalancerHealthcheck)
//  .httpIdleTimeoutSeconds(java.lang.Number)
//  .id(java.lang.String)
//  .network(java.lang.String)
//  .networkStack(java.lang.String)
//  .projectId(java.lang.String)
//  .redirectHttpToHttps(java.lang.Boolean)
//  .redirectHttpToHttps(IResolvable)
//  .region(java.lang.String)
//  .size(java.lang.String)
//  .sizeUnit(java.lang.Number)
//  .stickySessions(LoadbalancerStickySessions)
//  .targetLoadBalancerIds(java.util.List<java.lang.String>)
//  .tlsCipherPolicy(java.lang.String)
//  .type(java.lang.String)
//  .vpcUuid(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#name Loadbalancer#name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.disableLetsEncryptDnsRecords">disableLetsEncryptDnsRecords</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.domains">domains</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>></code> | domains block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dropletIds">dropletIds</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dropletTag">dropletTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.enableBackendKeepalive">enableBackendKeepalive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.enableProxyProtocol">enableProxyProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.forwardingRule">forwardingRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>></code> | forwarding_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.glbSettings">glbSettings</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | glb_settings block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.httpIdleTimeoutSeconds">httpIdleTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#id Loadbalancer#id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | the type of network the load balancer is accessible from (EXTERNAL or INTERNAL). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.networkStack">networkStack</a></code> | <code>java.lang.String</code> | The network stack determines the allocation of ipv4/ipv6 addresses to the load balancer. Enum: 'IPV4' 'DUALSTACK'. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.redirectHttpToHttps">redirectHttpToHttps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#region Loadbalancer#region}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#size Loadbalancer#size}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.sizeUnit">sizeUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.stickySessions">stickySessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | sticky_sessions block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.targetLoadBalancerIds">targetLoadBalancerIds</a></code> | <code>java.util.List<java.lang.String></code> | list of load balancer IDs to put behind a global load balancer. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.tlsCipherPolicy">tlsCipherPolicy</a></code> | <code>java.lang.String</code> | The tls cipher policy to be used for the load balancer. Enum: 'DEFAULT' 'STRONG'. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | the type of the load balancer (GLOBAL, REGIONAL, or REGIONAL_NETWORK). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#name Loadbalancer#name}.

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.algorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}.

---

##### `disableLetsEncryptDnsRecords`<sup>Optional</sup> <a name="disableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.disableLetsEncryptDnsRecords"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}.

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.domains"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>>

domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#domains Loadbalancer#domains}

---

##### `dropletIds`<sup>Optional</sup> <a name="dropletIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dropletIds"></a>

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}.

---

##### `dropletTag`<sup>Optional</sup> <a name="dropletTag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dropletTag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}.

---

##### `enableBackendKeepalive`<sup>Optional</sup> <a name="enableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.enableBackendKeepalive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}.

---

##### `enableProxyProtocol`<sup>Optional</sup> <a name="enableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.enableProxyProtocol"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}.

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.firewall"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#firewall Loadbalancer#firewall}

---

##### `forwardingRule`<sup>Optional</sup> <a name="forwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.forwardingRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>>

forwarding_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#forwarding_rule Loadbalancer#forwarding_rule}

---

##### `glbSettings`<sup>Optional</sup> <a name="glbSettings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.glbSettings"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

glb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#glb_settings Loadbalancer#glb_settings}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.healthcheck"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#healthcheck Loadbalancer#healthcheck}

---

##### `httpIdleTimeoutSeconds`<sup>Optional</sup> <a name="httpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.httpIdleTimeoutSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#id Loadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.network"></a>

- *Type:* java.lang.String

the type of network the load balancer is accessible from (EXTERNAL or INTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#network Loadbalancer#network}

---

##### `networkStack`<sup>Optional</sup> <a name="networkStack" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.networkStack"></a>

- *Type:* java.lang.String

The network stack determines the allocation of ipv4/ipv6 addresses to the load balancer. Enum: 'IPV4' 'DUALSTACK'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#network_stack Loadbalancer#network_stack}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}.

---

##### `redirectHttpToHttps`<sup>Optional</sup> <a name="redirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.redirectHttpToHttps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#region Loadbalancer#region}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.size"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#size Loadbalancer#size}.

---

##### `sizeUnit`<sup>Optional</sup> <a name="sizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.sizeUnit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}.

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.stickySessions"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

sticky_sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#sticky_sessions Loadbalancer#sticky_sessions}

---

##### `targetLoadBalancerIds`<sup>Optional</sup> <a name="targetLoadBalancerIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.targetLoadBalancerIds"></a>

- *Type:* java.util.List<java.lang.String>

list of load balancer IDs to put behind a global load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#target_load_balancer_ids Loadbalancer#target_load_balancer_ids}

---

##### `tlsCipherPolicy`<sup>Optional</sup> <a name="tlsCipherPolicy" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.tlsCipherPolicy"></a>

- *Type:* java.lang.String

The tls cipher policy to be used for the load balancer. Enum: 'DEFAULT' 'STRONG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#tls_cipher_policy Loadbalancer#tls_cipher_policy}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.type"></a>

- *Type:* java.lang.String

the type of the load balancer (GLOBAL, REGIONAL, or REGIONAL_NETWORK).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#type Loadbalancer#type}

---

##### `vpcUuid`<sup>Optional</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.vpcUuid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putDomains">putDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall">putFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule">putForwardingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings">putGlbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck">putHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions">putStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDisableLetsEncryptDnsRecords">resetDisableLetsEncryptDnsRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletIds">resetDropletIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletTag">resetDropletTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableBackendKeepalive">resetEnableBackendKeepalive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableProxyProtocol">resetEnableProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetFirewall">resetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetForwardingRule">resetForwardingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetGlbSettings">resetGlbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHealthcheck">resetHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHttpIdleTimeoutSeconds">resetHttpIdleTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetNetworkStack">resetNetworkStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRedirectHttpToHttps">resetRedirectHttpToHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSizeUnit">resetSizeUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetStickySessions">resetStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTargetLoadBalancerIds">resetTargetLoadBalancerIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTlsCipherPolicy">resetTlsCipherPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetVpcUuid">resetVpcUuid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDomains` <a name="putDomains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putDomains"></a>

```java
public void putDomains(IResolvable OR java.util.List<LoadbalancerDomains> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putDomains.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>>

---

##### `putFirewall` <a name="putFirewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall"></a>

```java
public void putFirewall(LoadbalancerFirewall value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---

##### `putForwardingRule` <a name="putForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule"></a>

```java
public void putForwardingRule(IResolvable OR java.util.List<LoadbalancerForwardingRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>>

---

##### `putGlbSettings` <a name="putGlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings"></a>

```java
public void putGlbSettings(LoadbalancerGlbSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

---

##### `putHealthcheck` <a name="putHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck"></a>

```java
public void putHealthcheck(LoadbalancerHealthcheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---

##### `putStickySessions` <a name="putStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions"></a>

```java
public void putStickySessions(LoadbalancerStickySessions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetDisableLetsEncryptDnsRecords` <a name="resetDisableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDisableLetsEncryptDnsRecords"></a>

```java
public void resetDisableLetsEncryptDnsRecords()
```

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDomains"></a>

```java
public void resetDomains()
```

##### `resetDropletIds` <a name="resetDropletIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletIds"></a>

```java
public void resetDropletIds()
```

##### `resetDropletTag` <a name="resetDropletTag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletTag"></a>

```java
public void resetDropletTag()
```

##### `resetEnableBackendKeepalive` <a name="resetEnableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableBackendKeepalive"></a>

```java
public void resetEnableBackendKeepalive()
```

##### `resetEnableProxyProtocol` <a name="resetEnableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableProxyProtocol"></a>

```java
public void resetEnableProxyProtocol()
```

##### `resetFirewall` <a name="resetFirewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetFirewall"></a>

```java
public void resetFirewall()
```

##### `resetForwardingRule` <a name="resetForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetForwardingRule"></a>

```java
public void resetForwardingRule()
```

##### `resetGlbSettings` <a name="resetGlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetGlbSettings"></a>

```java
public void resetGlbSettings()
```

##### `resetHealthcheck` <a name="resetHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHealthcheck"></a>

```java
public void resetHealthcheck()
```

##### `resetHttpIdleTimeoutSeconds` <a name="resetHttpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHttpIdleTimeoutSeconds"></a>

```java
public void resetHttpIdleTimeoutSeconds()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetId"></a>

```java
public void resetId()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNetworkStack` <a name="resetNetworkStack" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetNetworkStack"></a>

```java
public void resetNetworkStack()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetRedirectHttpToHttps` <a name="resetRedirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRedirectHttpToHttps"></a>

```java
public void resetRedirectHttpToHttps()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSize"></a>

```java
public void resetSize()
```

##### `resetSizeUnit` <a name="resetSizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSizeUnit"></a>

```java
public void resetSizeUnit()
```

##### `resetStickySessions` <a name="resetStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetStickySessions"></a>

```java
public void resetStickySessions()
```

##### `resetTargetLoadBalancerIds` <a name="resetTargetLoadBalancerIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTargetLoadBalancerIds"></a>

```java
public void resetTargetLoadBalancerIds()
```

##### `resetTlsCipherPolicy` <a name="resetTlsCipherPolicy" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTlsCipherPolicy"></a>

```java
public void resetTlsCipherPolicy()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetType"></a>

```java
public void resetType()
```

##### `resetVpcUuid` <a name="resetVpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetVpcUuid"></a>

```java
public void resetVpcUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.Loadbalancer;

Loadbalancer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.Loadbalancer;

Loadbalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.Loadbalancer;

Loadbalancer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.Loadbalancer;

Loadbalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Loadbalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Loadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Loadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Loadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domains">domains</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList">LoadbalancerDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference">LoadbalancerFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRule">forwardingRule</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList">LoadbalancerForwardingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettings">glbSettings</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference">LoadbalancerGlbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference">LoadbalancerHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessions">stickySessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference">LoadbalancerStickySessionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.urn">urn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecordsInput">disableLetsEncryptDnsRecordsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domainsInput">domainsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIdsInput">dropletIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTagInput">dropletTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepaliveInput">enableBackendKeepaliveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocolInput">enableProxyProtocolInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewallInput">firewallInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRuleInput">forwardingRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettingsInput">glbSettingsInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheckInput">healthcheckInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSecondsInput">httpIdleTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkStackInput">networkStackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttpsInput">redirectHttpToHttpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnitInput">sizeUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessionsInput">stickySessionsInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIdsInput">targetLoadBalancerIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tlsCipherPolicyInput">tlsCipherPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuidInput">vpcUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecords">disableLetsEncryptDnsRecords</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIds">dropletIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTag">dropletTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepalive">enableBackendKeepalive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSeconds">httpIdleTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkStack">networkStack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttps">redirectHttpToHttps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnit">sizeUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIds">targetLoadBalancerIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tlsCipherPolicy">tlsCipherPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domains"></a>

```java
public LoadbalancerDomainsList getDomains();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList">LoadbalancerDomainsList</a>

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewall"></a>

```java
public LoadbalancerFirewallOutputReference getFirewall();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference">LoadbalancerFirewallOutputReference</a>

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRule"></a>

```java
public LoadbalancerForwardingRuleList getForwardingRule();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList">LoadbalancerForwardingRuleList</a>

---

##### `glbSettings`<sup>Required</sup> <a name="glbSettings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettings"></a>

```java
public LoadbalancerGlbSettingsOutputReference getGlbSettings();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference">LoadbalancerGlbSettingsOutputReference</a>

---

##### `healthcheck`<sup>Required</sup> <a name="healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheck"></a>

```java
public LoadbalancerHealthcheckOutputReference getHealthcheck();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference">LoadbalancerHealthcheckOutputReference</a>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `stickySessions`<sup>Required</sup> <a name="stickySessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessions"></a>

```java
public LoadbalancerStickySessionsOutputReference getStickySessions();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference">LoadbalancerStickySessionsOutputReference</a>

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.urn"></a>

```java
public java.lang.String getUrn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `disableLetsEncryptDnsRecordsInput`<sup>Optional</sup> <a name="disableLetsEncryptDnsRecordsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecordsInput"></a>

```java
public java.lang.Object getDisableLetsEncryptDnsRecordsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domainsInput"></a>

```java
public java.lang.Object getDomainsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>>

---

##### `dropletIdsInput`<sup>Optional</sup> <a name="dropletIdsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIdsInput"></a>

```java
public java.util.List<java.lang.Number> getDropletIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `dropletTagInput`<sup>Optional</sup> <a name="dropletTagInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTagInput"></a>

```java
public java.lang.String getDropletTagInput();
```

- *Type:* java.lang.String

---

##### `enableBackendKeepaliveInput`<sup>Optional</sup> <a name="enableBackendKeepaliveInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepaliveInput"></a>

```java
public java.lang.Object getEnableBackendKeepaliveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableProxyProtocolInput`<sup>Optional</sup> <a name="enableProxyProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocolInput"></a>

```java
public java.lang.Object getEnableProxyProtocolInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallInput`<sup>Optional</sup> <a name="firewallInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewallInput"></a>

```java
public LoadbalancerFirewall getFirewallInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---

##### `forwardingRuleInput`<sup>Optional</sup> <a name="forwardingRuleInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRuleInput"></a>

```java
public java.lang.Object getForwardingRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>>

---

##### `glbSettingsInput`<sup>Optional</sup> <a name="glbSettingsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettingsInput"></a>

```java
public LoadbalancerGlbSettings getGlbSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

---

##### `healthcheckInput`<sup>Optional</sup> <a name="healthcheckInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheckInput"></a>

```java
public LoadbalancerHealthcheck getHealthcheckInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---

##### `httpIdleTimeoutSecondsInput`<sup>Optional</sup> <a name="httpIdleTimeoutSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSecondsInput"></a>

```java
public java.lang.Number getHttpIdleTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `networkStackInput`<sup>Optional</sup> <a name="networkStackInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkStackInput"></a>

```java
public java.lang.String getNetworkStackInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `redirectHttpToHttpsInput`<sup>Optional</sup> <a name="redirectHttpToHttpsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttpsInput"></a>

```java
public java.lang.Object getRedirectHttpToHttpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `sizeUnitInput`<sup>Optional</sup> <a name="sizeUnitInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnitInput"></a>

```java
public java.lang.Number getSizeUnitInput();
```

- *Type:* java.lang.Number

---

##### `stickySessionsInput`<sup>Optional</sup> <a name="stickySessionsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessionsInput"></a>

```java
public LoadbalancerStickySessions getStickySessionsInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---

##### `targetLoadBalancerIdsInput`<sup>Optional</sup> <a name="targetLoadBalancerIdsInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIdsInput"></a>

```java
public java.util.List<java.lang.String> getTargetLoadBalancerIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsCipherPolicyInput`<sup>Optional</sup> <a name="tlsCipherPolicyInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tlsCipherPolicyInput"></a>

```java
public java.lang.String getTlsCipherPolicyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcUuidInput`<sup>Optional</sup> <a name="vpcUuidInput" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuidInput"></a>

```java
public java.lang.String getVpcUuidInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `disableLetsEncryptDnsRecords`<sup>Required</sup> <a name="disableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecords"></a>

```java
public java.lang.Object getDisableLetsEncryptDnsRecords();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dropletIds`<sup>Required</sup> <a name="dropletIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIds"></a>

```java
public java.util.List<java.lang.Number> getDropletIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `dropletTag`<sup>Required</sup> <a name="dropletTag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTag"></a>

```java
public java.lang.String getDropletTag();
```

- *Type:* java.lang.String

---

##### `enableBackendKeepalive`<sup>Required</sup> <a name="enableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepalive"></a>

```java
public java.lang.Object getEnableBackendKeepalive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocol"></a>

```java
public java.lang.Object getEnableProxyProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpIdleTimeoutSeconds`<sup>Required</sup> <a name="httpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSeconds"></a>

```java
public java.lang.Number getHttpIdleTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkStack`<sup>Required</sup> <a name="networkStack" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkStack"></a>

```java
public java.lang.String getNetworkStack();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `redirectHttpToHttps`<sup>Required</sup> <a name="redirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttps"></a>

```java
public java.lang.Object getRedirectHttpToHttps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `sizeUnit`<sup>Required</sup> <a name="sizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnit"></a>

```java
public java.lang.Number getSizeUnit();
```

- *Type:* java.lang.Number

---

##### `targetLoadBalancerIds`<sup>Required</sup> <a name="targetLoadBalancerIds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIds"></a>

```java
public java.util.List<java.lang.String> getTargetLoadBalancerIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsCipherPolicy`<sup>Required</sup> <a name="tlsCipherPolicy" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tlsCipherPolicy"></a>

```java
public java.lang.String getTlsCipherPolicy();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuid"></a>

```java
public java.lang.String getVpcUuid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerConfig <a name="LoadbalancerConfig" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerConfig;

LoadbalancerConfig.builder()
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
//  .algorithm(java.lang.String)
//  .disableLetsEncryptDnsRecords(java.lang.Boolean)
//  .disableLetsEncryptDnsRecords(IResolvable)
//  .domains(IResolvable)
//  .domains(java.util.List<LoadbalancerDomains>)
//  .dropletIds(java.util.List<java.lang.Number>)
//  .dropletTag(java.lang.String)
//  .enableBackendKeepalive(java.lang.Boolean)
//  .enableBackendKeepalive(IResolvable)
//  .enableProxyProtocol(java.lang.Boolean)
//  .enableProxyProtocol(IResolvable)
//  .firewall(LoadbalancerFirewall)
//  .forwardingRule(IResolvable)
//  .forwardingRule(java.util.List<LoadbalancerForwardingRule>)
//  .glbSettings(LoadbalancerGlbSettings)
//  .healthcheck(LoadbalancerHealthcheck)
//  .httpIdleTimeoutSeconds(java.lang.Number)
//  .id(java.lang.String)
//  .network(java.lang.String)
//  .networkStack(java.lang.String)
//  .projectId(java.lang.String)
//  .redirectHttpToHttps(java.lang.Boolean)
//  .redirectHttpToHttps(IResolvable)
//  .region(java.lang.String)
//  .size(java.lang.String)
//  .sizeUnit(java.lang.Number)
//  .stickySessions(LoadbalancerStickySessions)
//  .targetLoadBalancerIds(java.util.List<java.lang.String>)
//  .tlsCipherPolicy(java.lang.String)
//  .type(java.lang.String)
//  .vpcUuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#name Loadbalancer#name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.disableLetsEncryptDnsRecords">disableLetsEncryptDnsRecords</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.domains">domains</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>></code> | domains block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletIds">dropletIds</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletTag">dropletTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableBackendKeepalive">enableBackendKeepalive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forwardingRule">forwardingRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>></code> | forwarding_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.glbSettings">glbSettings</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | glb_settings block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.httpIdleTimeoutSeconds">httpIdleTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#id Loadbalancer#id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.network">network</a></code> | <code>java.lang.String</code> | the type of network the load balancer is accessible from (EXTERNAL or INTERNAL). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.networkStack">networkStack</a></code> | <code>java.lang.String</code> | The network stack determines the allocation of ipv4/ipv6 addresses to the load balancer. Enum: 'IPV4' 'DUALSTACK'. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.redirectHttpToHttps">redirectHttpToHttps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#region Loadbalancer#region}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#size Loadbalancer#size}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.sizeUnit">sizeUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.stickySessions">stickySessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | sticky_sessions block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.targetLoadBalancerIds">targetLoadBalancerIds</a></code> | <code>java.util.List<java.lang.String></code> | list of load balancer IDs to put behind a global load balancer. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.tlsCipherPolicy">tlsCipherPolicy</a></code> | <code>java.lang.String</code> | The tls cipher policy to be used for the load balancer. Enum: 'DEFAULT' 'STRONG'. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.type">type</a></code> | <code>java.lang.String</code> | the type of the load balancer (GLOBAL, REGIONAL, or REGIONAL_NETWORK). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#name Loadbalancer#name}.

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}.

---

##### `disableLetsEncryptDnsRecords`<sup>Optional</sup> <a name="disableLetsEncryptDnsRecords" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.disableLetsEncryptDnsRecords"></a>

```java
public java.lang.Object getDisableLetsEncryptDnsRecords();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}.

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.domains"></a>

```java
public java.lang.Object getDomains();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>>

domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#domains Loadbalancer#domains}

---

##### `dropletIds`<sup>Optional</sup> <a name="dropletIds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletIds"></a>

```java
public java.util.List<java.lang.Number> getDropletIds();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}.

---

##### `dropletTag`<sup>Optional</sup> <a name="dropletTag" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletTag"></a>

```java
public java.lang.String getDropletTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}.

---

##### `enableBackendKeepalive`<sup>Optional</sup> <a name="enableBackendKeepalive" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableBackendKeepalive"></a>

```java
public java.lang.Object getEnableBackendKeepalive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}.

---

##### `enableProxyProtocol`<sup>Optional</sup> <a name="enableProxyProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableProxyProtocol"></a>

```java
public java.lang.Object getEnableProxyProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}.

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.firewall"></a>

```java
public LoadbalancerFirewall getFirewall();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#firewall Loadbalancer#firewall}

---

##### `forwardingRule`<sup>Optional</sup> <a name="forwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forwardingRule"></a>

```java
public java.lang.Object getForwardingRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>>

forwarding_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#forwarding_rule Loadbalancer#forwarding_rule}

---

##### `glbSettings`<sup>Optional</sup> <a name="glbSettings" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.glbSettings"></a>

```java
public LoadbalancerGlbSettings getGlbSettings();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

glb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#glb_settings Loadbalancer#glb_settings}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.healthcheck"></a>

```java
public LoadbalancerHealthcheck getHealthcheck();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#healthcheck Loadbalancer#healthcheck}

---

##### `httpIdleTimeoutSeconds`<sup>Optional</sup> <a name="httpIdleTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.httpIdleTimeoutSeconds"></a>

```java
public java.lang.Number getHttpIdleTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#id Loadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

the type of network the load balancer is accessible from (EXTERNAL or INTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#network Loadbalancer#network}

---

##### `networkStack`<sup>Optional</sup> <a name="networkStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.networkStack"></a>

```java
public java.lang.String getNetworkStack();
```

- *Type:* java.lang.String

The network stack determines the allocation of ipv4/ipv6 addresses to the load balancer. Enum: 'IPV4' 'DUALSTACK'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#network_stack Loadbalancer#network_stack}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}.

---

##### `redirectHttpToHttps`<sup>Optional</sup> <a name="redirectHttpToHttps" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.redirectHttpToHttps"></a>

```java
public java.lang.Object getRedirectHttpToHttps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#region Loadbalancer#region}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#size Loadbalancer#size}.

---

##### `sizeUnit`<sup>Optional</sup> <a name="sizeUnit" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.sizeUnit"></a>

```java
public java.lang.Number getSizeUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}.

---

##### `stickySessions`<sup>Optional</sup> <a name="stickySessions" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.stickySessions"></a>

```java
public LoadbalancerStickySessions getStickySessions();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

sticky_sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#sticky_sessions Loadbalancer#sticky_sessions}

---

##### `targetLoadBalancerIds`<sup>Optional</sup> <a name="targetLoadBalancerIds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.targetLoadBalancerIds"></a>

```java
public java.util.List<java.lang.String> getTargetLoadBalancerIds();
```

- *Type:* java.util.List<java.lang.String>

list of load balancer IDs to put behind a global load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#target_load_balancer_ids Loadbalancer#target_load_balancer_ids}

---

##### `tlsCipherPolicy`<sup>Optional</sup> <a name="tlsCipherPolicy" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.tlsCipherPolicy"></a>

```java
public java.lang.String getTlsCipherPolicy();
```

- *Type:* java.lang.String

The tls cipher policy to be used for the load balancer. Enum: 'DEFAULT' 'STRONG'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#tls_cipher_policy Loadbalancer#tls_cipher_policy}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

the type of the load balancer (GLOBAL, REGIONAL, or REGIONAL_NETWORK).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#type Loadbalancer#type}

---

##### `vpcUuid`<sup>Optional</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.vpcUuid"></a>

```java
public java.lang.String getVpcUuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}.

---

### LoadbalancerDomains <a name="LoadbalancerDomains" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerDomains;

LoadbalancerDomains.builder()
    .name(java.lang.String)
//  .certificateName(java.lang.String)
//  .isManaged(java.lang.Boolean)
//  .isManaged(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.name">name</a></code> | <code>java.lang.String</code> | domain name. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | name of certificate required for TLS handshaking. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.isManaged">isManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | flag indicating if domain is managed by DigitalOcean. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#name Loadbalancer#name}

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

name of certificate required for TLS handshaking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}

---

##### `isManaged`<sup>Optional</sup> <a name="isManaged" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.isManaged"></a>

```java
public java.lang.Object getIsManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

flag indicating if domain is managed by DigitalOcean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#is_managed Loadbalancer#is_managed}

---

### LoadbalancerFirewall <a name="LoadbalancerFirewall" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerFirewall;

LoadbalancerFirewall.builder()
//  .allow(java.util.List<java.lang.String>)
//  .deny(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.allow">allow</a></code> | <code>java.util.List<java.lang.String></code> | the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16'). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.deny">deny</a></code> | <code>java.util.List<java.lang.String></code> | the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16'). |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.allow"></a>

```java
public java.util.List<java.lang.String> getAllow();
```

- *Type:* java.util.List<java.lang.String>

the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#allow Loadbalancer#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.deny"></a>

```java
public java.util.List<java.lang.String> getDeny();
```

- *Type:* java.util.List<java.lang.String>

the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#deny Loadbalancer#deny}

---

### LoadbalancerForwardingRule <a name="LoadbalancerForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerForwardingRule;

LoadbalancerForwardingRule.builder()
    .entryPort(java.lang.Number)
    .entryProtocol(java.lang.String)
    .targetPort(java.lang.Number)
    .targetProtocol(java.lang.String)
//  .certificateId(java.lang.String)
//  .certificateName(java.lang.String)
//  .tlsPassthrough(java.lang.Boolean)
//  .tlsPassthrough(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryPort">entryPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#entry_port Loadbalancer#entry_port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryProtocol">entryProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#entry_protocol Loadbalancer#entry_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetPort">targetPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetProtocol">targetProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#certificate_id Loadbalancer#certificate_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.tlsPassthrough">tlsPassthrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#tls_passthrough Loadbalancer#tls_passthrough}. |

---

##### `entryPort`<sup>Required</sup> <a name="entryPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryPort"></a>

```java
public java.lang.Number getEntryPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#entry_port Loadbalancer#entry_port}.

---

##### `entryProtocol`<sup>Required</sup> <a name="entryProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryProtocol"></a>

```java
public java.lang.String getEntryProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#entry_protocol Loadbalancer#entry_protocol}.

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetPort"></a>

```java
public java.lang.Number getTargetPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}.

---

##### `targetProtocol`<sup>Required</sup> <a name="targetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetProtocol"></a>

```java
public java.lang.String getTargetProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#certificate_id Loadbalancer#certificate_id}.

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}.

---

##### `tlsPassthrough`<sup>Optional</sup> <a name="tlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.tlsPassthrough"></a>

```java
public java.lang.Object getTlsPassthrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#tls_passthrough Loadbalancer#tls_passthrough}.

---

### LoadbalancerGlbSettings <a name="LoadbalancerGlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerGlbSettings;

LoadbalancerGlbSettings.builder()
    .targetPort(java.lang.Number)
    .targetProtocol(java.lang.String)
//  .cdn(LoadbalancerGlbSettingsCdn)
//  .failoverThreshold(java.lang.Number)
//  .regionPriorities(java.util.Map<java.lang.String, java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetPort">targetPort</a></code> | <code>java.lang.Number</code> | target port rules. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetProtocol">targetProtocol</a></code> | <code>java.lang.String</code> | target protocol rules. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.cdn">cdn</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | cdn block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.failoverThreshold">failoverThreshold</a></code> | <code>java.lang.Number</code> | fail-over threshold. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.regionPriorities">regionPriorities</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | region priority map. |

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetPort"></a>

```java
public java.lang.Number getTargetPort();
```

- *Type:* java.lang.Number

target port rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}

---

##### `targetProtocol`<sup>Required</sup> <a name="targetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetProtocol"></a>

```java
public java.lang.String getTargetProtocol();
```

- *Type:* java.lang.String

target protocol rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}

---

##### `cdn`<sup>Optional</sup> <a name="cdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.cdn"></a>

```java
public LoadbalancerGlbSettingsCdn getCdn();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

cdn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#cdn Loadbalancer#cdn}

---

##### `failoverThreshold`<sup>Optional</sup> <a name="failoverThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.failoverThreshold"></a>

```java
public java.lang.Number getFailoverThreshold();
```

- *Type:* java.lang.Number

fail-over threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#failover_threshold Loadbalancer#failover_threshold}

---

##### `regionPriorities`<sup>Optional</sup> <a name="regionPriorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.regionPriorities"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getRegionPriorities();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

region priority map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#region_priorities Loadbalancer#region_priorities}

---

### LoadbalancerGlbSettingsCdn <a name="LoadbalancerGlbSettingsCdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn;

LoadbalancerGlbSettingsCdn.builder()
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | cache enable flag. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

cache enable flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#is_enabled Loadbalancer#is_enabled}

---

### LoadbalancerHealthcheck <a name="LoadbalancerHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerHealthcheck;

LoadbalancerHealthcheck.builder()
    .port(java.lang.Number)
    .protocol(java.lang.String)
//  .checkIntervalSeconds(java.lang.Number)
//  .healthyThreshold(java.lang.Number)
//  .path(java.lang.String)
//  .responseTimeoutSeconds(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#port Loadbalancer#port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.checkIntervalSeconds">checkIntervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#path Loadbalancer#path}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.responseTimeoutSeconds">responseTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#port Loadbalancer#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}.

---

##### `checkIntervalSeconds`<sup>Optional</sup> <a name="checkIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.checkIntervalSeconds"></a>

```java
public java.lang.Number getCheckIntervalSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}.

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#path Loadbalancer#path}.

---

##### `responseTimeoutSeconds`<sup>Optional</sup> <a name="responseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.responseTimeoutSeconds"></a>

```java
public java.lang.Number getResponseTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}.

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}.

---

### LoadbalancerStickySessions <a name="LoadbalancerStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerStickySessions;

LoadbalancerStickySessions.builder()
//  .cookieName(java.lang.String)
//  .cookieTtlSeconds(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieTtlSeconds">cookieTtlSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#type Loadbalancer#type}. |

---

##### `cookieName`<sup>Optional</sup> <a name="cookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}.

---

##### `cookieTtlSeconds`<sup>Optional</sup> <a name="cookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieTtlSeconds"></a>

```java
public java.lang.Number getCookieTtlSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/loadbalancer#type Loadbalancer#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerDomainsList <a name="LoadbalancerDomainsList" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerDomainsList;

new LoadbalancerDomainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.get"></a>

```java
public LoadbalancerDomainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>>

---


### LoadbalancerDomainsOutputReference <a name="LoadbalancerDomainsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerDomainsOutputReference;

new LoadbalancerDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetIsManaged">resetIsManaged</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateName` <a name="resetCertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetCertificateName"></a>

```java
public void resetCertificateName()
```

##### `resetIsManaged` <a name="resetIsManaged" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetIsManaged"></a>

```java
public void resetIsManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.sslValidationErrorReasons">sslValidationErrorReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.verificationErrorReasons">verificationErrorReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManagedInput">isManagedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManaged">isManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `sslValidationErrorReasons`<sup>Required</sup> <a name="sslValidationErrorReasons" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.sslValidationErrorReasons"></a>

```java
public java.util.List<java.lang.String> getSslValidationErrorReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verificationErrorReasons`<sup>Required</sup> <a name="verificationErrorReasons" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.verificationErrorReasons"></a>

```java
public java.util.List<java.lang.String> getVerificationErrorReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateNameInput"></a>

```java
public java.lang.String getCertificateNameInput();
```

- *Type:* java.lang.String

---

##### `isManagedInput`<sup>Optional</sup> <a name="isManagedInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManagedInput"></a>

```java
public java.lang.Object getIsManagedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `isManaged`<sup>Required</sup> <a name="isManaged" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManaged"></a>

```java
public java.lang.Object getIsManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>

---


### LoadbalancerFirewallOutputReference <a name="LoadbalancerFirewallOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerFirewallOutputReference;

new LoadbalancerFirewallOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetDeny">resetDeny</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetAllow"></a>

```java
public void resetAllow()
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetDeny"></a>

```java
public void resetDeny()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allowInput">allowInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.denyInput">denyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allow">allow</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.deny">deny</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allowInput"></a>

```java
public java.util.List<java.lang.String> getAllowInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.denyInput"></a>

```java
public java.util.List<java.lang.String> getDenyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allow"></a>

```java
public java.util.List<java.lang.String> getAllow();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.deny"></a>

```java
public java.util.List<java.lang.String> getDeny();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.internalValue"></a>

```java
public LoadbalancerFirewall getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---


### LoadbalancerForwardingRuleList <a name="LoadbalancerForwardingRuleList" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerForwardingRuleList;

new LoadbalancerForwardingRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get"></a>

```java
public LoadbalancerForwardingRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>>

---


### LoadbalancerForwardingRuleOutputReference <a name="LoadbalancerForwardingRuleOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference;

new LoadbalancerForwardingRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetTlsPassthrough">resetTlsPassthrough</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetCertificateName` <a name="resetCertificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateName"></a>

```java
public void resetCertificateName()
```

##### `resetTlsPassthrough` <a name="resetTlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetTlsPassthrough"></a>

```java
public void resetTlsPassthrough()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPortInput">entryPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocolInput">entryProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPortInput">targetPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocolInput">targetProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthroughInput">tlsPassthroughInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPort">entryPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocol">entryProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPort">targetPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocol">targetProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthrough">tlsPassthrough</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateNameInput"></a>

```java
public java.lang.String getCertificateNameInput();
```

- *Type:* java.lang.String

---

##### `entryPortInput`<sup>Optional</sup> <a name="entryPortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPortInput"></a>

```java
public java.lang.Number getEntryPortInput();
```

- *Type:* java.lang.Number

---

##### `entryProtocolInput`<sup>Optional</sup> <a name="entryProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocolInput"></a>

```java
public java.lang.String getEntryProtocolInput();
```

- *Type:* java.lang.String

---

##### `targetPortInput`<sup>Optional</sup> <a name="targetPortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPortInput"></a>

```java
public java.lang.Number getTargetPortInput();
```

- *Type:* java.lang.Number

---

##### `targetProtocolInput`<sup>Optional</sup> <a name="targetProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocolInput"></a>

```java
public java.lang.String getTargetProtocolInput();
```

- *Type:* java.lang.String

---

##### `tlsPassthroughInput`<sup>Optional</sup> <a name="tlsPassthroughInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthroughInput"></a>

```java
public java.lang.Object getTlsPassthroughInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `entryPort`<sup>Required</sup> <a name="entryPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPort"></a>

```java
public java.lang.Number getEntryPort();
```

- *Type:* java.lang.Number

---

##### `entryProtocol`<sup>Required</sup> <a name="entryProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocol"></a>

```java
public java.lang.String getEntryProtocol();
```

- *Type:* java.lang.String

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPort"></a>

```java
public java.lang.Number getTargetPort();
```

- *Type:* java.lang.Number

---

##### `targetProtocol`<sup>Required</sup> <a name="targetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocol"></a>

```java
public java.lang.String getTargetProtocol();
```

- *Type:* java.lang.String

---

##### `tlsPassthrough`<sup>Required</sup> <a name="tlsPassthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthrough"></a>

```java
public java.lang.Object getTlsPassthrough();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>

---


### LoadbalancerGlbSettingsCdnOutputReference <a name="LoadbalancerGlbSettingsCdnOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference;

new LoadbalancerGlbSettingsCdnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.internalValue"></a>

```java
public LoadbalancerGlbSettingsCdn getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

---


### LoadbalancerGlbSettingsOutputReference <a name="LoadbalancerGlbSettingsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference;

new LoadbalancerGlbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.putCdn">putCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetCdn">resetCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetFailoverThreshold">resetFailoverThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetRegionPriorities">resetRegionPriorities</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCdn` <a name="putCdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.putCdn"></a>

```java
public void putCdn(LoadbalancerGlbSettingsCdn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.putCdn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

---

##### `resetCdn` <a name="resetCdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetCdn"></a>

```java
public void resetCdn()
```

##### `resetFailoverThreshold` <a name="resetFailoverThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetFailoverThreshold"></a>

```java
public void resetFailoverThreshold()
```

##### `resetRegionPriorities` <a name="resetRegionPriorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetRegionPriorities"></a>

```java
public void resetRegionPriorities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdn">cdn</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference">LoadbalancerGlbSettingsCdnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdnInput">cdnInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThresholdInput">failoverThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPrioritiesInput">regionPrioritiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPortInput">targetPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocolInput">targetProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThreshold">failoverThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPriorities">regionPriorities</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPort">targetPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocol">targetProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cdn`<sup>Required</sup> <a name="cdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdn"></a>

```java
public LoadbalancerGlbSettingsCdnOutputReference getCdn();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference">LoadbalancerGlbSettingsCdnOutputReference</a>

---

##### `cdnInput`<sup>Optional</sup> <a name="cdnInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdnInput"></a>

```java
public LoadbalancerGlbSettingsCdn getCdnInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

---

##### `failoverThresholdInput`<sup>Optional</sup> <a name="failoverThresholdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThresholdInput"></a>

```java
public java.lang.Number getFailoverThresholdInput();
```

- *Type:* java.lang.Number

---

##### `regionPrioritiesInput`<sup>Optional</sup> <a name="regionPrioritiesInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPrioritiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getRegionPrioritiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `targetPortInput`<sup>Optional</sup> <a name="targetPortInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPortInput"></a>

```java
public java.lang.Number getTargetPortInput();
```

- *Type:* java.lang.Number

---

##### `targetProtocolInput`<sup>Optional</sup> <a name="targetProtocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocolInput"></a>

```java
public java.lang.String getTargetProtocolInput();
```

- *Type:* java.lang.String

---

##### `failoverThreshold`<sup>Required</sup> <a name="failoverThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThreshold"></a>

```java
public java.lang.Number getFailoverThreshold();
```

- *Type:* java.lang.Number

---

##### `regionPriorities`<sup>Required</sup> <a name="regionPriorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPriorities"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getRegionPriorities();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPort"></a>

```java
public java.lang.Number getTargetPort();
```

- *Type:* java.lang.Number

---

##### `targetProtocol`<sup>Required</sup> <a name="targetProtocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocol"></a>

```java
public java.lang.String getTargetProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.internalValue"></a>

```java
public LoadbalancerGlbSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

---


### LoadbalancerHealthcheckOutputReference <a name="LoadbalancerHealthcheckOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference;

new LoadbalancerHealthcheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetCheckIntervalSeconds">resetCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetResponseTimeoutSeconds">resetResponseTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckIntervalSeconds` <a name="resetCheckIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetCheckIntervalSeconds"></a>

```java
public void resetCheckIntervalSeconds()
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetResponseTimeoutSeconds` <a name="resetResponseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetResponseTimeoutSeconds"></a>

```java
public void resetResponseTimeoutSeconds()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSecondsInput">checkIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSecondsInput">responseTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds">checkIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds">responseTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `checkIntervalSecondsInput`<sup>Optional</sup> <a name="checkIntervalSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSecondsInput"></a>

```java
public java.lang.Number getCheckIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `responseTimeoutSecondsInput`<sup>Optional</sup> <a name="responseTimeoutSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSecondsInput"></a>

```java
public java.lang.Number getResponseTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `checkIntervalSeconds`<sup>Required</sup> <a name="checkIntervalSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds"></a>

```java
public java.lang.Number getCheckIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `responseTimeoutSeconds`<sup>Required</sup> <a name="responseTimeoutSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds"></a>

```java
public java.lang.Number getResponseTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.internalValue"></a>

```java
public LoadbalancerHealthcheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---


### LoadbalancerStickySessionsOutputReference <a name="LoadbalancerStickySessionsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference;

new LoadbalancerStickySessionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieName">resetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieTtlSeconds">resetCookieTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookieName` <a name="resetCookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieName"></a>

```java
public void resetCookieName()
```

##### `resetCookieTtlSeconds` <a name="resetCookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieTtlSeconds"></a>

```java
public void resetCookieTtlSeconds()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSecondsInput">cookieTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds">cookieTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieNameInput"></a>

```java
public java.lang.String getCookieNameInput();
```

- *Type:* java.lang.String

---

##### `cookieTtlSecondsInput`<sup>Optional</sup> <a name="cookieTtlSecondsInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSecondsInput"></a>

```java
public java.lang.Number getCookieTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

---

##### `cookieTtlSeconds`<sup>Required</sup> <a name="cookieTtlSeconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds"></a>

```java
public java.lang.Number getCookieTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.internalValue"></a>

```java
public LoadbalancerStickySessions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---



