# `loadbalancer` Submodule <a name="`loadbalancer` Submodule" id="@cdktf/provider-digitalocean.loadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Loadbalancer <a name="Loadbalancer" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer digitalocean_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.Loadbalancer(
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
  algorithm: str = None,
  disable_lets_encrypt_dns_records: typing.Union[bool, IResolvable] = None,
  domains: typing.Union[IResolvable, typing.List[LoadbalancerDomains]] = None,
  droplet_ids: typing.List[typing.Union[int, float]] = None,
  droplet_tag: str = None,
  enable_backend_keepalive: typing.Union[bool, IResolvable] = None,
  enable_proxy_protocol: typing.Union[bool, IResolvable] = None,
  firewall: LoadbalancerFirewall = None,
  forwarding_rule: typing.Union[IResolvable, typing.List[LoadbalancerForwardingRule]] = None,
  glb_settings: LoadbalancerGlbSettings = None,
  healthcheck: LoadbalancerHealthcheck = None,
  http_idle_timeout_seconds: typing.Union[int, float] = None,
  id: str = None,
  network: str = None,
  project_id: str = None,
  redirect_http_to_https: typing.Union[bool, IResolvable] = None,
  region: str = None,
  size: str = None,
  size_unit: typing.Union[int, float] = None,
  sticky_sessions: LoadbalancerStickySessions = None,
  target_load_balancer_ids: typing.List[str] = None,
  type: str = None,
  vpc_uuid: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#name Loadbalancer#name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.disableLetsEncryptDnsRecords">disable_lets_encrypt_dns_records</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.domains">domains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>]]</code> | domains block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dropletIds">droplet_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dropletTag">droplet_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.enableBackendKeepalive">enable_backend_keepalive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.enableProxyProtocol">enable_proxy_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.forwardingRule">forwarding_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>]]</code> | forwarding_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.glbSettings">glb_settings</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | glb_settings block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.httpIdleTimeoutSeconds">http_idle_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#id Loadbalancer#id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.network">network</a></code> | <code>str</code> | the type of network the load balancer is accessible from (EXTERNAL or INTERNAL). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.redirectHttpToHttps">redirect_http_to_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#region Loadbalancer#region}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#size Loadbalancer#size}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.sizeUnit">size_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.stickySessions">sticky_sessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | sticky_sessions block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.targetLoadBalancerIds">target_load_balancer_ids</a></code> | <code>typing.List[str]</code> | list of load balancer IDs to put behind a global load balancer. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.type">type</a></code> | <code>str</code> | the type of the load balancer (GLOBAL or REGIONAL). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.vpcUuid">vpc_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#name Loadbalancer#name}.

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}.

---

##### `disable_lets_encrypt_dns_records`<sup>Optional</sup> <a name="disable_lets_encrypt_dns_records" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.disableLetsEncryptDnsRecords"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}.

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.domains"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>]]

domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#domains Loadbalancer#domains}

---

##### `droplet_ids`<sup>Optional</sup> <a name="droplet_ids" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dropletIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}.

---

##### `droplet_tag`<sup>Optional</sup> <a name="droplet_tag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.dropletTag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}.

---

##### `enable_backend_keepalive`<sup>Optional</sup> <a name="enable_backend_keepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.enableBackendKeepalive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}.

---

##### `enable_proxy_protocol`<sup>Optional</sup> <a name="enable_proxy_protocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.enableProxyProtocol"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}.

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.firewall"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#firewall Loadbalancer#firewall}

---

##### `forwarding_rule`<sup>Optional</sup> <a name="forwarding_rule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.forwardingRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>]]

forwarding_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#forwarding_rule Loadbalancer#forwarding_rule}

---

##### `glb_settings`<sup>Optional</sup> <a name="glb_settings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.glbSettings"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

glb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#glb_settings Loadbalancer#glb_settings}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.healthcheck"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#healthcheck Loadbalancer#healthcheck}

---

##### `http_idle_timeout_seconds`<sup>Optional</sup> <a name="http_idle_timeout_seconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.httpIdleTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#id Loadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.network"></a>

- *Type:* str

the type of network the load balancer is accessible from (EXTERNAL or INTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#network Loadbalancer#network}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}.

---

##### `redirect_http_to_https`<sup>Optional</sup> <a name="redirect_http_to_https" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.redirectHttpToHttps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#region Loadbalancer#region}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.size"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#size Loadbalancer#size}.

---

##### `size_unit`<sup>Optional</sup> <a name="size_unit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.sizeUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}.

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.stickySessions"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

sticky_sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#sticky_sessions Loadbalancer#sticky_sessions}

---

##### `target_load_balancer_ids`<sup>Optional</sup> <a name="target_load_balancer_ids" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.targetLoadBalancerIds"></a>

- *Type:* typing.List[str]

list of load balancer IDs to put behind a global load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#target_load_balancer_ids Loadbalancer#target_load_balancer_ids}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.type"></a>

- *Type:* str

the type of the load balancer (GLOBAL or REGIONAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#type Loadbalancer#type}

---

##### `vpc_uuid`<sup>Optional</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.Initializer.parameter.vpcUuid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putDomains">put_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall">put_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule">put_forwarding_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings">put_glb_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck">put_healthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions">put_sticky_sessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDisableLetsEncryptDnsRecords">reset_disable_lets_encrypt_dns_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDomains">reset_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletIds">reset_droplet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletTag">reset_droplet_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableBackendKeepalive">reset_enable_backend_keepalive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableProxyProtocol">reset_enable_proxy_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetFirewall">reset_firewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetForwardingRule">reset_forwarding_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetGlbSettings">reset_glb_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHealthcheck">reset_healthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHttpIdleTimeoutSeconds">reset_http_idle_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRedirectHttpToHttps">reset_redirect_http_to_https</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSizeUnit">reset_size_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetStickySessions">reset_sticky_sessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTargetLoadBalancerIds">reset_target_load_balancer_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetVpcUuid">reset_vpc_uuid</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_domains` <a name="put_domains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putDomains"></a>

```python
def put_domains(
  value: typing.Union[IResolvable, typing.List[LoadbalancerDomains]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putDomains.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>]]

---

##### `put_firewall` <a name="put_firewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall"></a>

```python
def put_firewall(
  allow: typing.List[str] = None,
  deny: typing.List[str] = None
) -> None
```

###### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall.parameter.allow"></a>

- *Type:* typing.List[str]

the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#allow Loadbalancer#allow}

---

###### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putFirewall.parameter.deny"></a>

- *Type:* typing.List[str]

the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#deny Loadbalancer#deny}

---

##### `put_forwarding_rule` <a name="put_forwarding_rule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule"></a>

```python
def put_forwarding_rule(
  value: typing.Union[IResolvable, typing.List[LoadbalancerForwardingRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putForwardingRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>]]

---

##### `put_glb_settings` <a name="put_glb_settings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings"></a>

```python
def put_glb_settings(
  target_port: typing.Union[int, float],
  target_protocol: str,
  cdn: LoadbalancerGlbSettingsCdn = None,
  failover_threshold: typing.Union[int, float] = None,
  region_priorities: typing.Mapping[typing.Union[int, float]] = None
) -> None
```

###### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings.parameter.targetPort"></a>

- *Type:* typing.Union[int, float]

target port rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}

---

###### `target_protocol`<sup>Required</sup> <a name="target_protocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings.parameter.targetProtocol"></a>

- *Type:* str

target protocol rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}

---

###### `cdn`<sup>Optional</sup> <a name="cdn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings.parameter.cdn"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

cdn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#cdn Loadbalancer#cdn}

---

###### `failover_threshold`<sup>Optional</sup> <a name="failover_threshold" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings.parameter.failoverThreshold"></a>

- *Type:* typing.Union[int, float]

fail-over threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#failover_threshold Loadbalancer#failover_threshold}

---

###### `region_priorities`<sup>Optional</sup> <a name="region_priorities" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putGlbSettings.parameter.regionPriorities"></a>

- *Type:* typing.Mapping[typing.Union[int, float]]

region priority map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#region_priorities Loadbalancer#region_priorities}

---

##### `put_healthcheck` <a name="put_healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck"></a>

```python
def put_healthcheck(
  port: typing.Union[int, float],
  protocol: str,
  check_interval_seconds: typing.Union[int, float] = None,
  healthy_threshold: typing.Union[int, float] = None,
  path: str = None,
  response_timeout_seconds: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
) -> None
```

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#port Loadbalancer#port}.

---

###### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}.

---

###### `check_interval_seconds`<sup>Optional</sup> <a name="check_interval_seconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck.parameter.checkIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}.

---

###### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck.parameter.healthyThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#path Loadbalancer#path}.

---

###### `response_timeout_seconds`<sup>Optional</sup> <a name="response_timeout_seconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck.parameter.responseTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}.

---

###### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putHealthcheck.parameter.unhealthyThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}.

---

##### `put_sticky_sessions` <a name="put_sticky_sessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions"></a>

```python
def put_sticky_sessions(
  cookie_name: str = None,
  cookie_ttl_seconds: typing.Union[int, float] = None,
  type: str = None
) -> None
```

###### `cookie_name`<sup>Optional</sup> <a name="cookie_name" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions.parameter.cookieName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}.

---

###### `cookie_ttl_seconds`<sup>Optional</sup> <a name="cookie_ttl_seconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions.parameter.cookieTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.putStickySessions.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#type Loadbalancer#type}.

---

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_disable_lets_encrypt_dns_records` <a name="reset_disable_lets_encrypt_dns_records" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDisableLetsEncryptDnsRecords"></a>

```python
def reset_disable_lets_encrypt_dns_records() -> None
```

##### `reset_domains` <a name="reset_domains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDomains"></a>

```python
def reset_domains() -> None
```

##### `reset_droplet_ids` <a name="reset_droplet_ids" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletIds"></a>

```python
def reset_droplet_ids() -> None
```

##### `reset_droplet_tag` <a name="reset_droplet_tag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetDropletTag"></a>

```python
def reset_droplet_tag() -> None
```

##### `reset_enable_backend_keepalive` <a name="reset_enable_backend_keepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableBackendKeepalive"></a>

```python
def reset_enable_backend_keepalive() -> None
```

##### `reset_enable_proxy_protocol` <a name="reset_enable_proxy_protocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetEnableProxyProtocol"></a>

```python
def reset_enable_proxy_protocol() -> None
```

##### `reset_firewall` <a name="reset_firewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetFirewall"></a>

```python
def reset_firewall() -> None
```

##### `reset_forwarding_rule` <a name="reset_forwarding_rule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetForwardingRule"></a>

```python
def reset_forwarding_rule() -> None
```

##### `reset_glb_settings` <a name="reset_glb_settings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetGlbSettings"></a>

```python
def reset_glb_settings() -> None
```

##### `reset_healthcheck` <a name="reset_healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHealthcheck"></a>

```python
def reset_healthcheck() -> None
```

##### `reset_http_idle_timeout_seconds` <a name="reset_http_idle_timeout_seconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetHttpIdleTimeoutSeconds"></a>

```python
def reset_http_idle_timeout_seconds() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_redirect_http_to_https` <a name="reset_redirect_http_to_https" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRedirectHttpToHttps"></a>

```python
def reset_redirect_http_to_https() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_size_unit` <a name="reset_size_unit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetSizeUnit"></a>

```python
def reset_size_unit() -> None
```

##### `reset_sticky_sessions` <a name="reset_sticky_sessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetStickySessions"></a>

```python
def reset_sticky_sessions() -> None
```

##### `reset_target_load_balancer_ids` <a name="reset_target_load_balancer_ids" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetTargetLoadBalancerIds"></a>

```python
def reset_target_load_balancer_ids() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vpc_uuid` <a name="reset_vpc_uuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.resetVpcUuid"></a>

```python
def reset_vpc_uuid() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.Loadbalancer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.Loadbalancer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.Loadbalancer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.Loadbalancer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Loadbalancer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Loadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Loadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domains">domains</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList">LoadbalancerDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference">LoadbalancerFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRule">forwarding_rule</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList">LoadbalancerForwardingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettings">glb_settings</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference">LoadbalancerGlbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference">LoadbalancerHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessions">sticky_sessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference">LoadbalancerStickySessionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.urn">urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecordsInput">disable_lets_encrypt_dns_records_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domainsInput">domains_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIdsInput">droplet_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTagInput">droplet_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepaliveInput">enable_backend_keepalive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocolInput">enable_proxy_protocol_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewallInput">firewall_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRuleInput">forwarding_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettingsInput">glb_settings_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheckInput">healthcheck_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSecondsInput">http_idle_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttpsInput">redirect_http_to_https_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnitInput">size_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessionsInput">sticky_sessions_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIdsInput">target_load_balancer_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuidInput">vpc_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecords">disable_lets_encrypt_dns_records</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIds">droplet_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTag">droplet_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepalive">enable_backend_keepalive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocol">enable_proxy_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSeconds">http_idle_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttps">redirect_http_to_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnit">size_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIds">target_load_balancer_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuid">vpc_uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domains"></a>

```python
domains: LoadbalancerDomainsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList">LoadbalancerDomainsList</a>

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewall"></a>

```python
firewall: LoadbalancerFirewallOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference">LoadbalancerFirewallOutputReference</a>

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRule"></a>

```python
forwarding_rule: LoadbalancerForwardingRuleList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList">LoadbalancerForwardingRuleList</a>

---

##### `glb_settings`<sup>Required</sup> <a name="glb_settings" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettings"></a>

```python
glb_settings: LoadbalancerGlbSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference">LoadbalancerGlbSettingsOutputReference</a>

---

##### `healthcheck`<sup>Required</sup> <a name="healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheck"></a>

```python
healthcheck: LoadbalancerHealthcheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference">LoadbalancerHealthcheckOutputReference</a>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `sticky_sessions`<sup>Required</sup> <a name="sticky_sessions" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessions"></a>

```python
sticky_sessions: LoadbalancerStickySessionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference">LoadbalancerStickySessionsOutputReference</a>

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.urn"></a>

```python
urn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `disable_lets_encrypt_dns_records_input`<sup>Optional</sup> <a name="disable_lets_encrypt_dns_records_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecordsInput"></a>

```python
disable_lets_encrypt_dns_records_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.domainsInput"></a>

```python
domains_input: typing.Union[IResolvable, typing.List[LoadbalancerDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>]]

---

##### `droplet_ids_input`<sup>Optional</sup> <a name="droplet_ids_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIdsInput"></a>

```python
droplet_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `droplet_tag_input`<sup>Optional</sup> <a name="droplet_tag_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTagInput"></a>

```python
droplet_tag_input: str
```

- *Type:* str

---

##### `enable_backend_keepalive_input`<sup>Optional</sup> <a name="enable_backend_keepalive_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepaliveInput"></a>

```python
enable_backend_keepalive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_proxy_protocol_input`<sup>Optional</sup> <a name="enable_proxy_protocol_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocolInput"></a>

```python
enable_proxy_protocol_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_input`<sup>Optional</sup> <a name="firewall_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.firewallInput"></a>

```python
firewall_input: LoadbalancerFirewall
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---

##### `forwarding_rule_input`<sup>Optional</sup> <a name="forwarding_rule_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.forwardingRuleInput"></a>

```python
forwarding_rule_input: typing.Union[IResolvable, typing.List[LoadbalancerForwardingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>]]

---

##### `glb_settings_input`<sup>Optional</sup> <a name="glb_settings_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.glbSettingsInput"></a>

```python
glb_settings_input: LoadbalancerGlbSettings
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

---

##### `healthcheck_input`<sup>Optional</sup> <a name="healthcheck_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.healthcheckInput"></a>

```python
healthcheck_input: LoadbalancerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---

##### `http_idle_timeout_seconds_input`<sup>Optional</sup> <a name="http_idle_timeout_seconds_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSecondsInput"></a>

```python
http_idle_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `redirect_http_to_https_input`<sup>Optional</sup> <a name="redirect_http_to_https_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttpsInput"></a>

```python
redirect_http_to_https_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `size_unit_input`<sup>Optional</sup> <a name="size_unit_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnitInput"></a>

```python
size_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sticky_sessions_input`<sup>Optional</sup> <a name="sticky_sessions_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.stickySessionsInput"></a>

```python
sticky_sessions_input: LoadbalancerStickySessions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---

##### `target_load_balancer_ids_input`<sup>Optional</sup> <a name="target_load_balancer_ids_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIdsInput"></a>

```python
target_load_balancer_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_uuid_input`<sup>Optional</sup> <a name="vpc_uuid_input" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuidInput"></a>

```python
vpc_uuid_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `disable_lets_encrypt_dns_records`<sup>Required</sup> <a name="disable_lets_encrypt_dns_records" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.disableLetsEncryptDnsRecords"></a>

```python
disable_lets_encrypt_dns_records: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `droplet_ids`<sup>Required</sup> <a name="droplet_ids" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletIds"></a>

```python
droplet_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `droplet_tag`<sup>Required</sup> <a name="droplet_tag" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.dropletTag"></a>

```python
droplet_tag: str
```

- *Type:* str

---

##### `enable_backend_keepalive`<sup>Required</sup> <a name="enable_backend_keepalive" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableBackendKeepalive"></a>

```python
enable_backend_keepalive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_proxy_protocol`<sup>Required</sup> <a name="enable_proxy_protocol" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.enableProxyProtocol"></a>

```python
enable_proxy_protocol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_idle_timeout_seconds`<sup>Required</sup> <a name="http_idle_timeout_seconds" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.httpIdleTimeoutSeconds"></a>

```python
http_idle_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `redirect_http_to_https`<sup>Required</sup> <a name="redirect_http_to_https" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.redirectHttpToHttps"></a>

```python
redirect_http_to_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `size_unit`<sup>Required</sup> <a name="size_unit" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.sizeUnit"></a>

```python
size_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_load_balancer_ids`<sup>Required</sup> <a name="target_load_balancer_ids" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.targetLoadBalancerIds"></a>

```python
target_load_balancer_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_uuid`<sup>Required</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.vpcUuid"></a>

```python
vpc_uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.loadbalancer.Loadbalancer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerConfig <a name="LoadbalancerConfig" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  algorithm: str = None,
  disable_lets_encrypt_dns_records: typing.Union[bool, IResolvable] = None,
  domains: typing.Union[IResolvable, typing.List[LoadbalancerDomains]] = None,
  droplet_ids: typing.List[typing.Union[int, float]] = None,
  droplet_tag: str = None,
  enable_backend_keepalive: typing.Union[bool, IResolvable] = None,
  enable_proxy_protocol: typing.Union[bool, IResolvable] = None,
  firewall: LoadbalancerFirewall = None,
  forwarding_rule: typing.Union[IResolvable, typing.List[LoadbalancerForwardingRule]] = None,
  glb_settings: LoadbalancerGlbSettings = None,
  healthcheck: LoadbalancerHealthcheck = None,
  http_idle_timeout_seconds: typing.Union[int, float] = None,
  id: str = None,
  network: str = None,
  project_id: str = None,
  redirect_http_to_https: typing.Union[bool, IResolvable] = None,
  region: str = None,
  size: str = None,
  size_unit: typing.Union[int, float] = None,
  sticky_sessions: LoadbalancerStickySessions = None,
  target_load_balancer_ids: typing.List[str] = None,
  type: str = None,
  vpc_uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#name Loadbalancer#name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.disableLetsEncryptDnsRecords">disable_lets_encrypt_dns_records</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.domains">domains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>]]</code> | domains block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletIds">droplet_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletTag">droplet_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableBackendKeepalive">enable_backend_keepalive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableProxyProtocol">enable_proxy_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forwardingRule">forwarding_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>]]</code> | forwarding_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.glbSettings">glb_settings</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | glb_settings block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.httpIdleTimeoutSeconds">http_idle_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#id Loadbalancer#id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.network">network</a></code> | <code>str</code> | the type of network the load balancer is accessible from (EXTERNAL or INTERNAL). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.redirectHttpToHttps">redirect_http_to_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#region Loadbalancer#region}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#size Loadbalancer#size}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.sizeUnit">size_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.stickySessions">sticky_sessions</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | sticky_sessions block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.targetLoadBalancerIds">target_load_balancer_ids</a></code> | <code>typing.List[str]</code> | list of load balancer IDs to put behind a global load balancer. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.type">type</a></code> | <code>str</code> | the type of the load balancer (GLOBAL or REGIONAL). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.vpcUuid">vpc_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#name Loadbalancer#name}.

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}.

---

##### `disable_lets_encrypt_dns_records`<sup>Optional</sup> <a name="disable_lets_encrypt_dns_records" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.disableLetsEncryptDnsRecords"></a>

```python
disable_lets_encrypt_dns_records: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}.

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.domains"></a>

```python
domains: typing.Union[IResolvable, typing.List[LoadbalancerDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>]]

domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#domains Loadbalancer#domains}

---

##### `droplet_ids`<sup>Optional</sup> <a name="droplet_ids" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletIds"></a>

```python
droplet_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}.

---

##### `droplet_tag`<sup>Optional</sup> <a name="droplet_tag" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.dropletTag"></a>

```python
droplet_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}.

---

##### `enable_backend_keepalive`<sup>Optional</sup> <a name="enable_backend_keepalive" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableBackendKeepalive"></a>

```python
enable_backend_keepalive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}.

---

##### `enable_proxy_protocol`<sup>Optional</sup> <a name="enable_proxy_protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.enableProxyProtocol"></a>

```python
enable_proxy_protocol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}.

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.firewall"></a>

```python
firewall: LoadbalancerFirewall
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#firewall Loadbalancer#firewall}

---

##### `forwarding_rule`<sup>Optional</sup> <a name="forwarding_rule" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.forwardingRule"></a>

```python
forwarding_rule: typing.Union[IResolvable, typing.List[LoadbalancerForwardingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>]]

forwarding_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#forwarding_rule Loadbalancer#forwarding_rule}

---

##### `glb_settings`<sup>Optional</sup> <a name="glb_settings" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.glbSettings"></a>

```python
glb_settings: LoadbalancerGlbSettings
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

glb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#glb_settings Loadbalancer#glb_settings}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.healthcheck"></a>

```python
healthcheck: LoadbalancerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#healthcheck Loadbalancer#healthcheck}

---

##### `http_idle_timeout_seconds`<sup>Optional</sup> <a name="http_idle_timeout_seconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.httpIdleTimeoutSeconds"></a>

```python
http_idle_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#id Loadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.network"></a>

```python
network: str
```

- *Type:* str

the type of network the load balancer is accessible from (EXTERNAL or INTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#network Loadbalancer#network}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}.

---

##### `redirect_http_to_https`<sup>Optional</sup> <a name="redirect_http_to_https" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.redirectHttpToHttps"></a>

```python
redirect_http_to_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#region Loadbalancer#region}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.size"></a>

```python
size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#size Loadbalancer#size}.

---

##### `size_unit`<sup>Optional</sup> <a name="size_unit" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.sizeUnit"></a>

```python
size_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}.

---

##### `sticky_sessions`<sup>Optional</sup> <a name="sticky_sessions" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.stickySessions"></a>

```python
sticky_sessions: LoadbalancerStickySessions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

sticky_sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#sticky_sessions Loadbalancer#sticky_sessions}

---

##### `target_load_balancer_ids`<sup>Optional</sup> <a name="target_load_balancer_ids" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.targetLoadBalancerIds"></a>

```python
target_load_balancer_ids: typing.List[str]
```

- *Type:* typing.List[str]

list of load balancer IDs to put behind a global load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#target_load_balancer_ids Loadbalancer#target_load_balancer_ids}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.type"></a>

```python
type: str
```

- *Type:* str

the type of the load balancer (GLOBAL or REGIONAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#type Loadbalancer#type}

---

##### `vpc_uuid`<sup>Optional</sup> <a name="vpc_uuid" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerConfig.property.vpcUuid"></a>

```python
vpc_uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}.

---

### LoadbalancerDomains <a name="LoadbalancerDomains" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerDomains(
  name: str,
  certificate_name: str = None,
  is_managed: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.name">name</a></code> | <code>str</code> | domain name. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.certificateName">certificate_name</a></code> | <code>str</code> | name of certificate required for TLS handshaking. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.isManaged">is_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | flag indicating if domain is managed by DigitalOcean. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.name"></a>

```python
name: str
```

- *Type:* str

domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#name Loadbalancer#name}

---

##### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

name of certificate required for TLS handshaking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}

---

##### `is_managed`<sup>Optional</sup> <a name="is_managed" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains.property.isManaged"></a>

```python
is_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

flag indicating if domain is managed by DigitalOcean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#is_managed Loadbalancer#is_managed}

---

### LoadbalancerFirewall <a name="LoadbalancerFirewall" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerFirewall(
  allow: typing.List[str] = None,
  deny: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.allow">allow</a></code> | <code>typing.List[str]</code> | the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16'). |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.deny">deny</a></code> | <code>typing.List[str]</code> | the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16'). |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.allow"></a>

```python
allow: typing.List[str]
```

- *Type:* typing.List[str]

the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#allow Loadbalancer#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall.property.deny"></a>

```python
deny: typing.List[str]
```

- *Type:* typing.List[str]

the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#deny Loadbalancer#deny}

---

### LoadbalancerForwardingRule <a name="LoadbalancerForwardingRule" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerForwardingRule(
  entry_port: typing.Union[int, float],
  entry_protocol: str,
  target_port: typing.Union[int, float],
  target_protocol: str,
  certificate_id: str = None,
  certificate_name: str = None,
  tls_passthrough: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryPort">entry_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#entry_port Loadbalancer#entry_port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryProtocol">entry_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#entry_protocol Loadbalancer#entry_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetPort">target_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetProtocol">target_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#certificate_id Loadbalancer#certificate_id}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateName">certificate_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.tlsPassthrough">tls_passthrough</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#tls_passthrough Loadbalancer#tls_passthrough}. |

---

##### `entry_port`<sup>Required</sup> <a name="entry_port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryPort"></a>

```python
entry_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#entry_port Loadbalancer#entry_port}.

---

##### `entry_protocol`<sup>Required</sup> <a name="entry_protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.entryProtocol"></a>

```python
entry_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#entry_protocol Loadbalancer#entry_protocol}.

---

##### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetPort"></a>

```python
target_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}.

---

##### `target_protocol`<sup>Required</sup> <a name="target_protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.targetProtocol"></a>

```python
target_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}.

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#certificate_id Loadbalancer#certificate_id}.

---

##### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}.

---

##### `tls_passthrough`<sup>Optional</sup> <a name="tls_passthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule.property.tlsPassthrough"></a>

```python
tls_passthrough: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#tls_passthrough Loadbalancer#tls_passthrough}.

---

### LoadbalancerGlbSettings <a name="LoadbalancerGlbSettings" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerGlbSettings(
  target_port: typing.Union[int, float],
  target_protocol: str,
  cdn: LoadbalancerGlbSettingsCdn = None,
  failover_threshold: typing.Union[int, float] = None,
  region_priorities: typing.Mapping[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetPort">target_port</a></code> | <code>typing.Union[int, float]</code> | target port rules. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetProtocol">target_protocol</a></code> | <code>str</code> | target protocol rules. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.cdn">cdn</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | cdn block. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.failoverThreshold">failover_threshold</a></code> | <code>typing.Union[int, float]</code> | fail-over threshold. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.regionPriorities">region_priorities</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | region priority map. |

---

##### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetPort"></a>

```python
target_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

target port rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}

---

##### `target_protocol`<sup>Required</sup> <a name="target_protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.targetProtocol"></a>

```python
target_protocol: str
```

- *Type:* str

target protocol rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}

---

##### `cdn`<sup>Optional</sup> <a name="cdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.cdn"></a>

```python
cdn: LoadbalancerGlbSettingsCdn
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

cdn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#cdn Loadbalancer#cdn}

---

##### `failover_threshold`<sup>Optional</sup> <a name="failover_threshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.failoverThreshold"></a>

```python
failover_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

fail-over threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#failover_threshold Loadbalancer#failover_threshold}

---

##### `region_priorities`<sup>Optional</sup> <a name="region_priorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings.property.regionPriorities"></a>

```python
region_priorities: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

region priority map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#region_priorities Loadbalancer#region_priorities}

---

### LoadbalancerGlbSettingsCdn <a name="LoadbalancerGlbSettingsCdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerGlbSettingsCdn(
  is_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | cache enable flag. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

cache enable flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#is_enabled Loadbalancer#is_enabled}

---

### LoadbalancerHealthcheck <a name="LoadbalancerHealthcheck" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerHealthcheck(
  port: typing.Union[int, float],
  protocol: str,
  check_interval_seconds: typing.Union[int, float] = None,
  healthy_threshold: typing.Union[int, float] = None,
  path: str = None,
  response_timeout_seconds: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#port Loadbalancer#port}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.checkIntervalSeconds">check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#path Loadbalancer#path}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.responseTimeoutSeconds">response_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#port Loadbalancer#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}.

---

##### `check_interval_seconds`<sup>Optional</sup> <a name="check_interval_seconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.checkIntervalSeconds"></a>

```python
check_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}.

---

##### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#path Loadbalancer#path}.

---

##### `response_timeout_seconds`<sup>Optional</sup> <a name="response_timeout_seconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.responseTimeoutSeconds"></a>

```python
response_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}.

---

##### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}.

---

### LoadbalancerStickySessions <a name="LoadbalancerStickySessions" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerStickySessions(
  cookie_name: str = None,
  cookie_ttl_seconds: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieName">cookie_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieTtlSeconds">cookie_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#type Loadbalancer#type}. |

---

##### `cookie_name`<sup>Optional</sup> <a name="cookie_name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}.

---

##### `cookie_ttl_seconds`<sup>Optional</sup> <a name="cookie_ttl_seconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.cookieTtlSeconds"></a>

```python
cookie_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#type Loadbalancer#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerDomainsList <a name="LoadbalancerDomainsList" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerDomainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadbalancerDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadbalancerDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>]]

---


### LoadbalancerDomainsOutputReference <a name="LoadbalancerDomainsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetCertificateName">reset_certificate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetIsManaged">reset_is_managed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_name` <a name="reset_certificate_name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetCertificateName"></a>

```python
def reset_certificate_name() -> None
```

##### `reset_is_managed` <a name="reset_is_managed" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.resetIsManaged"></a>

```python
def reset_is_managed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.sslValidationErrorReasons">ssl_validation_error_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.verificationErrorReasons">verification_error_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManagedInput">is_managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManaged">is_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssl_validation_error_reasons`<sup>Required</sup> <a name="ssl_validation_error_reasons" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.sslValidationErrorReasons"></a>

```python
ssl_validation_error_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verification_error_reasons`<sup>Required</sup> <a name="verification_error_reasons" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.verificationErrorReasons"></a>

```python
verification_error_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `is_managed_input`<sup>Optional</sup> <a name="is_managed_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManagedInput"></a>

```python
is_managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `is_managed`<sup>Required</sup> <a name="is_managed" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.isManaged"></a>

```python
is_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomainsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadbalancerDomains]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerDomains">LoadbalancerDomains</a>]

---


### LoadbalancerFirewallOutputReference <a name="LoadbalancerFirewallOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerFirewallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetDeny">reset_deny</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_deny` <a name="reset_deny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.resetDeny"></a>

```python
def reset_deny() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allowInput">allow_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.denyInput">deny_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allow">allow</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.deny">deny</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allowInput"></a>

```python
allow_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deny_input`<sup>Optional</sup> <a name="deny_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.denyInput"></a>

```python
deny_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.allow"></a>

```python
allow: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.deny"></a>

```python
deny: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewallOutputReference.property.internalValue"></a>

```python
internal_value: LoadbalancerFirewall
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerFirewall">LoadbalancerFirewall</a>

---


### LoadbalancerForwardingRuleList <a name="LoadbalancerForwardingRuleList" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerForwardingRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadbalancerForwardingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoadbalancerForwardingRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>]]

---


### LoadbalancerForwardingRuleOutputReference <a name="LoadbalancerForwardingRuleOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerForwardingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateId">reset_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateName">reset_certificate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetTlsPassthrough">reset_tls_passthrough</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_id` <a name="reset_certificate_id" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```

##### `reset_certificate_name` <a name="reset_certificate_name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetCertificateName"></a>

```python
def reset_certificate_name() -> None
```

##### `reset_tls_passthrough` <a name="reset_tls_passthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.resetTlsPassthrough"></a>

```python
def reset_tls_passthrough() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPortInput">entry_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocolInput">entry_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPortInput">target_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocolInput">target_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthroughInput">tls_passthrough_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPort">entry_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocol">entry_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPort">target_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocol">target_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthrough">tls_passthrough</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `entry_port_input`<sup>Optional</sup> <a name="entry_port_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPortInput"></a>

```python
entry_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entry_protocol_input`<sup>Optional</sup> <a name="entry_protocol_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocolInput"></a>

```python
entry_protocol_input: str
```

- *Type:* str

---

##### `target_port_input`<sup>Optional</sup> <a name="target_port_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPortInput"></a>

```python
target_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_protocol_input`<sup>Optional</sup> <a name="target_protocol_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocolInput"></a>

```python
target_protocol_input: str
```

- *Type:* str

---

##### `tls_passthrough_input`<sup>Optional</sup> <a name="tls_passthrough_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthroughInput"></a>

```python
tls_passthrough_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `entry_port`<sup>Required</sup> <a name="entry_port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryPort"></a>

```python
entry_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entry_protocol`<sup>Required</sup> <a name="entry_protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.entryProtocol"></a>

```python
entry_protocol: str
```

- *Type:* str

---

##### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetPort"></a>

```python
target_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_protocol`<sup>Required</sup> <a name="target_protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.targetProtocol"></a>

```python
target_protocol: str
```

- *Type:* str

---

##### `tls_passthrough`<sup>Required</sup> <a name="tls_passthrough" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.tlsPassthrough"></a>

```python
tls_passthrough: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoadbalancerForwardingRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerForwardingRule">LoadbalancerForwardingRule</a>]

---


### LoadbalancerGlbSettingsCdnOutputReference <a name="LoadbalancerGlbSettingsCdnOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerGlbSettingsCdnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference.property.internalValue"></a>

```python
internal_value: LoadbalancerGlbSettingsCdn
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

---


### LoadbalancerGlbSettingsOutputReference <a name="LoadbalancerGlbSettingsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerGlbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.putCdn">put_cdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetCdn">reset_cdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetFailoverThreshold">reset_failover_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetRegionPriorities">reset_region_priorities</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cdn` <a name="put_cdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.putCdn"></a>

```python
def put_cdn(
  is_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.putCdn.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

cache enable flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.40.0/docs/resources/loadbalancer#is_enabled Loadbalancer#is_enabled}

---

##### `reset_cdn` <a name="reset_cdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetCdn"></a>

```python
def reset_cdn() -> None
```

##### `reset_failover_threshold` <a name="reset_failover_threshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetFailoverThreshold"></a>

```python
def reset_failover_threshold() -> None
```

##### `reset_region_priorities` <a name="reset_region_priorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.resetRegionPriorities"></a>

```python
def reset_region_priorities() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdn">cdn</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference">LoadbalancerGlbSettingsCdnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdnInput">cdn_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThresholdInput">failover_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPrioritiesInput">region_priorities_input</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPortInput">target_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocolInput">target_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThreshold">failover_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPriorities">region_priorities</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPort">target_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocol">target_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cdn`<sup>Required</sup> <a name="cdn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdn"></a>

```python
cdn: LoadbalancerGlbSettingsCdnOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdnOutputReference">LoadbalancerGlbSettingsCdnOutputReference</a>

---

##### `cdn_input`<sup>Optional</sup> <a name="cdn_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.cdnInput"></a>

```python
cdn_input: LoadbalancerGlbSettingsCdn
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsCdn">LoadbalancerGlbSettingsCdn</a>

---

##### `failover_threshold_input`<sup>Optional</sup> <a name="failover_threshold_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThresholdInput"></a>

```python
failover_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_priorities_input`<sup>Optional</sup> <a name="region_priorities_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPrioritiesInput"></a>

```python
region_priorities_input: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `target_port_input`<sup>Optional</sup> <a name="target_port_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPortInput"></a>

```python
target_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_protocol_input`<sup>Optional</sup> <a name="target_protocol_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocolInput"></a>

```python
target_protocol_input: str
```

- *Type:* str

---

##### `failover_threshold`<sup>Required</sup> <a name="failover_threshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.failoverThreshold"></a>

```python
failover_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_priorities`<sup>Required</sup> <a name="region_priorities" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.regionPriorities"></a>

```python
region_priorities: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetPort"></a>

```python
target_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_protocol`<sup>Required</sup> <a name="target_protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.targetProtocol"></a>

```python
target_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: LoadbalancerGlbSettings
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerGlbSettings">LoadbalancerGlbSettings</a>

---


### LoadbalancerHealthcheckOutputReference <a name="LoadbalancerHealthcheckOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerHealthcheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetCheckIntervalSeconds">reset_check_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetHealthyThreshold">reset_healthy_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetResponseTimeoutSeconds">reset_response_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetUnhealthyThreshold">reset_unhealthy_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_check_interval_seconds` <a name="reset_check_interval_seconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetCheckIntervalSeconds"></a>

```python
def reset_check_interval_seconds() -> None
```

##### `reset_healthy_threshold` <a name="reset_healthy_threshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetHealthyThreshold"></a>

```python
def reset_healthy_threshold() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_response_timeout_seconds` <a name="reset_response_timeout_seconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetResponseTimeoutSeconds"></a>

```python
def reset_response_timeout_seconds() -> None
```

##### `reset_unhealthy_threshold` <a name="reset_unhealthy_threshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.resetUnhealthyThreshold"></a>

```python
def reset_unhealthy_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSecondsInput">check_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThresholdInput">healthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSecondsInput">response_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThresholdInput">unhealthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds">check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds">response_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_interval_seconds_input`<sup>Optional</sup> <a name="check_interval_seconds_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSecondsInput"></a>

```python
check_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold_input`<sup>Optional</sup> <a name="healthy_threshold_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThresholdInput"></a>

```python
healthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `response_timeout_seconds_input`<sup>Optional</sup> <a name="response_timeout_seconds_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSecondsInput"></a>

```python
response_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold_input`<sup>Optional</sup> <a name="unhealthy_threshold_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThresholdInput"></a>

```python
unhealthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `check_interval_seconds`<sup>Required</sup> <a name="check_interval_seconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.checkIntervalSeconds"></a>

```python
check_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `response_timeout_seconds`<sup>Required</sup> <a name="response_timeout_seconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.responseTimeoutSeconds"></a>

```python
response_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheckOutputReference.property.internalValue"></a>

```python
internal_value: LoadbalancerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerHealthcheck">LoadbalancerHealthcheck</a>

---


### LoadbalancerStickySessionsOutputReference <a name="LoadbalancerStickySessionsOutputReference" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import loadbalancer

loadbalancer.LoadbalancerStickySessionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieName">reset_cookie_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieTtlSeconds">reset_cookie_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cookie_name` <a name="reset_cookie_name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieName"></a>

```python
def reset_cookie_name() -> None
```

##### `reset_cookie_ttl_seconds` <a name="reset_cookie_ttl_seconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetCookieTtlSeconds"></a>

```python
def reset_cookie_ttl_seconds() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieNameInput">cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSecondsInput">cookie_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieName">cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds">cookie_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_name_input`<sup>Optional</sup> <a name="cookie_name_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieNameInput"></a>

```python
cookie_name_input: str
```

- *Type:* str

---

##### `cookie_ttl_seconds_input`<sup>Optional</sup> <a name="cookie_ttl_seconds_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSecondsInput"></a>

```python
cookie_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

---

##### `cookie_ttl_seconds`<sup>Required</sup> <a name="cookie_ttl_seconds" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.cookieTtlSeconds"></a>

```python
cookie_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessionsOutputReference.property.internalValue"></a>

```python
internal_value: LoadbalancerStickySessions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.loadbalancer.LoadbalancerStickySessions">LoadbalancerStickySessions</a>

---



