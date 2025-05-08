# `kubernetesCluster` Submodule <a name="`kubernetesCluster` Submodule" id="@cdktf/provider-digitalocean.kubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesCluster <a name="KubernetesCluster" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster digitalocean_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesCluster;

KubernetesCluster.Builder.create(Construct scope, java.lang.String id)
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
    .nodePool(KubernetesClusterNodePool)
    .region(java.lang.String)
    .version(java.lang.String)
//  .autoUpgrade(java.lang.Boolean)
//  .autoUpgrade(IResolvable)
//  .clusterAutoscalerConfiguration(IResolvable)
//  .clusterAutoscalerConfiguration(java.util.List<KubernetesClusterClusterAutoscalerConfiguration>)
//  .clusterSubnet(java.lang.String)
//  .controlPlaneFirewall(KubernetesClusterControlPlaneFirewall)
//  .destroyAllAssociatedResources(java.lang.Boolean)
//  .destroyAllAssociatedResources(IResolvable)
//  .ha(java.lang.Boolean)
//  .ha(IResolvable)
//  .id(java.lang.String)
//  .kubeconfigExpireSeconds(java.lang.Number)
//  .maintenancePolicy(KubernetesClusterMaintenancePolicy)
//  .registryIntegration(java.lang.Boolean)
//  .registryIntegration(IResolvable)
//  .routingAgent(KubernetesClusterRoutingAgent)
//  .serviceSubnet(java.lang.String)
//  .surgeUpgrade(java.lang.Boolean)
//  .surgeUpgrade(IResolvable)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(KubernetesClusterTimeouts)
//  .vpcUuid(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.nodePool">nodePool</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a></code> | node_pool block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#region KubernetesCluster#region}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.autoUpgrade">autoUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#auto_upgrade KubernetesCluster#auto_upgrade}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.clusterAutoscalerConfiguration">clusterAutoscalerConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>></code> | cluster_autoscaler_configuration block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.clusterSubnet">clusterSubnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#cluster_subnet KubernetesCluster#cluster_subnet}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.controlPlaneFirewall">controlPlaneFirewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a></code> | control_plane_firewall block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.destroyAllAssociatedResources">destroyAllAssociatedResources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#destroy_all_associated_resources KubernetesCluster#destroy_all_associated_resources}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.ha">ha</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#ha KubernetesCluster#ha}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.kubeconfigExpireSeconds">kubeconfigExpireSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#kubeconfig_expire_seconds KubernetesCluster#kubeconfig_expire_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.registryIntegration">registryIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#registry_integration KubernetesCluster#registry_integration}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.routingAgent">routingAgent</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a></code> | routing_agent block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.serviceSubnet">serviceSubnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#service_subnet KubernetesCluster#service_subnet}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.surgeUpgrade">surgeUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#surge_upgrade KubernetesCluster#surge_upgrade}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#vpc_uuid KubernetesCluster#vpc_uuid}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}.

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.nodePool"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

node_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#node_pool KubernetesCluster#node_pool}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#region KubernetesCluster#region}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}.

---

##### `autoUpgrade`<sup>Optional</sup> <a name="autoUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.autoUpgrade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#auto_upgrade KubernetesCluster#auto_upgrade}.

---

##### `clusterAutoscalerConfiguration`<sup>Optional</sup> <a name="clusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.clusterAutoscalerConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>>

cluster_autoscaler_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#cluster_autoscaler_configuration KubernetesCluster#cluster_autoscaler_configuration}

---

##### `clusterSubnet`<sup>Optional</sup> <a name="clusterSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.clusterSubnet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#cluster_subnet KubernetesCluster#cluster_subnet}.

---

##### `controlPlaneFirewall`<sup>Optional</sup> <a name="controlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.controlPlaneFirewall"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

control_plane_firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#control_plane_firewall KubernetesCluster#control_plane_firewall}

---

##### `destroyAllAssociatedResources`<sup>Optional</sup> <a name="destroyAllAssociatedResources" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.destroyAllAssociatedResources"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#destroy_all_associated_resources KubernetesCluster#destroy_all_associated_resources}.

---

##### `ha`<sup>Optional</sup> <a name="ha" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.ha"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#ha KubernetesCluster#ha}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubeconfigExpireSeconds`<sup>Optional</sup> <a name="kubeconfigExpireSeconds" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.kubeconfigExpireSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#kubeconfig_expire_seconds KubernetesCluster#kubeconfig_expire_seconds}.

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#maintenance_policy KubernetesCluster#maintenance_policy}

---

##### `registryIntegration`<sup>Optional</sup> <a name="registryIntegration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.registryIntegration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#registry_integration KubernetesCluster#registry_integration}.

---

##### `routingAgent`<sup>Optional</sup> <a name="routingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.routingAgent"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

routing_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#routing_agent KubernetesCluster#routing_agent}

---

##### `serviceSubnet`<sup>Optional</sup> <a name="serviceSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.serviceSubnet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#service_subnet KubernetesCluster#service_subnet}.

---

##### `surgeUpgrade`<sup>Optional</sup> <a name="surgeUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.surgeUpgrade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#surge_upgrade KubernetesCluster#surge_upgrade}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#timeouts KubernetesCluster#timeouts}

---

##### `vpcUuid`<sup>Optional</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.Initializer.parameter.vpcUuid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#vpc_uuid KubernetesCluster#vpc_uuid}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putClusterAutoscalerConfiguration">putClusterAutoscalerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putControlPlaneFirewall">putControlPlaneFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putNodePool">putNodePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putRoutingAgent">putRoutingAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetAutoUpgrade">resetAutoUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterAutoscalerConfiguration">resetClusterAutoscalerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterSubnet">resetClusterSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetControlPlaneFirewall">resetControlPlaneFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetDestroyAllAssociatedResources">resetDestroyAllAssociatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetHa">resetHa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetKubeconfigExpireSeconds">resetKubeconfigExpireSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRegistryIntegration">resetRegistryIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRoutingAgent">resetRoutingAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetServiceSubnet">resetServiceSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetSurgeUpgrade">resetSurgeUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetVpcUuid">resetVpcUuid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusterAutoscalerConfiguration` <a name="putClusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putClusterAutoscalerConfiguration"></a>

```java
public void putClusterAutoscalerConfiguration(IResolvable OR java.util.List<KubernetesClusterClusterAutoscalerConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putClusterAutoscalerConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>>

---

##### `putControlPlaneFirewall` <a name="putControlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putControlPlaneFirewall"></a>

```java
public void putControlPlaneFirewall(KubernetesClusterControlPlaneFirewall value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putControlPlaneFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putMaintenancePolicy"></a>

```java
public void putMaintenancePolicy(KubernetesClusterMaintenancePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

---

##### `putNodePool` <a name="putNodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putNodePool"></a>

```java
public void putNodePool(KubernetesClusterNodePool value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putNodePool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

---

##### `putRoutingAgent` <a name="putRoutingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putRoutingAgent"></a>

```java
public void putRoutingAgent(KubernetesClusterRoutingAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putRoutingAgent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putTimeouts"></a>

```java
public void putTimeouts(KubernetesClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a>

---

##### `resetAutoUpgrade` <a name="resetAutoUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetAutoUpgrade"></a>

```java
public void resetAutoUpgrade()
```

##### `resetClusterAutoscalerConfiguration` <a name="resetClusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterAutoscalerConfiguration"></a>

```java
public void resetClusterAutoscalerConfiguration()
```

##### `resetClusterSubnet` <a name="resetClusterSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetClusterSubnet"></a>

```java
public void resetClusterSubnet()
```

##### `resetControlPlaneFirewall` <a name="resetControlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetControlPlaneFirewall"></a>

```java
public void resetControlPlaneFirewall()
```

##### `resetDestroyAllAssociatedResources` <a name="resetDestroyAllAssociatedResources" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetDestroyAllAssociatedResources"></a>

```java
public void resetDestroyAllAssociatedResources()
```

##### `resetHa` <a name="resetHa" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetHa"></a>

```java
public void resetHa()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetId"></a>

```java
public void resetId()
```

##### `resetKubeconfigExpireSeconds` <a name="resetKubeconfigExpireSeconds" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetKubeconfigExpireSeconds"></a>

```java
public void resetKubeconfigExpireSeconds()
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetMaintenancePolicy"></a>

```java
public void resetMaintenancePolicy()
```

##### `resetRegistryIntegration` <a name="resetRegistryIntegration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRegistryIntegration"></a>

```java
public void resetRegistryIntegration()
```

##### `resetRoutingAgent` <a name="resetRoutingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetRoutingAgent"></a>

```java
public void resetRoutingAgent()
```

##### `resetServiceSubnet` <a name="resetServiceSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetServiceSubnet"></a>

```java
public void resetServiceSubnet()
```

##### `resetSurgeUpgrade` <a name="resetSurgeUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetSurgeUpgrade"></a>

```java
public void resetSurgeUpgrade()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcUuid` <a name="resetVpcUuid" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.resetVpcUuid"></a>

```java
public void resetVpcUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesCluster;

KubernetesCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesCluster;

KubernetesCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesCluster;

KubernetesCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesCluster;

KubernetesCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KubernetesCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KubernetesCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KubernetesCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfiguration">clusterAutoscalerConfiguration</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList">KubernetesClusterClusterAutoscalerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewall">controlPlaneFirewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference">KubernetesClusterControlPlaneFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeConfig">kubeConfig</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList">KubernetesClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference">KubernetesClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePool">nodePool</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference">KubernetesClusterNodePoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgent">routingAgent</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference">KubernetesClusterRoutingAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference">KubernetesClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.urn">urn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgradeInput">autoUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfigurationInput">clusterAutoscalerConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnetInput">clusterSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewallInput">controlPlaneFirewallInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResourcesInput">destroyAllAssociatedResourcesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.haInput">haInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSecondsInput">kubeconfigExpireSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePoolInput">nodePoolInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegrationInput">registryIntegrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgentInput">routingAgentInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnetInput">serviceSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgradeInput">surgeUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuidInput">vpcUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgrade">autoUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnet">clusterSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResources">destroyAllAssociatedResources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ha">ha</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSeconds">kubeconfigExpireSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegration">registryIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnet">serviceSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgrade">surgeUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterAutoscalerConfiguration`<sup>Required</sup> <a name="clusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfiguration"></a>

```java
public KubernetesClusterClusterAutoscalerConfigurationList getClusterAutoscalerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList">KubernetesClusterClusterAutoscalerConfigurationList</a>

---

##### `controlPlaneFirewall`<sup>Required</sup> <a name="controlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewall"></a>

```java
public KubernetesClusterControlPlaneFirewallOutputReference getControlPlaneFirewall();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference">KubernetesClusterControlPlaneFirewallOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

---

##### `kubeConfig`<sup>Required</sup> <a name="kubeConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeConfig"></a>

```java
public KubernetesClusterKubeConfigList getKubeConfig();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList">KubernetesClusterKubeConfigList</a>

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicy"></a>

```java
public KubernetesClusterMaintenancePolicyOutputReference getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference">KubernetesClusterMaintenancePolicyOutputReference</a>

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePool"></a>

```java
public KubernetesClusterNodePoolOutputReference getNodePool();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference">KubernetesClusterNodePoolOutputReference</a>

---

##### `routingAgent`<sup>Required</sup> <a name="routingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgent"></a>

```java
public KubernetesClusterRoutingAgentOutputReference getRoutingAgent();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference">KubernetesClusterRoutingAgentOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeouts"></a>

```java
public KubernetesClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference">KubernetesClusterTimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.urn"></a>

```java
public java.lang.String getUrn();
```

- *Type:* java.lang.String

---

##### `autoUpgradeInput`<sup>Optional</sup> <a name="autoUpgradeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgradeInput"></a>

```java
public java.lang.Object getAutoUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterAutoscalerConfigurationInput`<sup>Optional</sup> <a name="clusterAutoscalerConfigurationInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterAutoscalerConfigurationInput"></a>

```java
public java.lang.Object getClusterAutoscalerConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>>

---

##### `clusterSubnetInput`<sup>Optional</sup> <a name="clusterSubnetInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnetInput"></a>

```java
public java.lang.String getClusterSubnetInput();
```

- *Type:* java.lang.String

---

##### `controlPlaneFirewallInput`<sup>Optional</sup> <a name="controlPlaneFirewallInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.controlPlaneFirewallInput"></a>

```java
public KubernetesClusterControlPlaneFirewall getControlPlaneFirewallInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

---

##### `destroyAllAssociatedResourcesInput`<sup>Optional</sup> <a name="destroyAllAssociatedResourcesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResourcesInput"></a>

```java
public java.lang.Object getDestroyAllAssociatedResourcesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `haInput`<sup>Optional</sup> <a name="haInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.haInput"></a>

```java
public java.lang.Object getHaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubeconfigExpireSecondsInput`<sup>Optional</sup> <a name="kubeconfigExpireSecondsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSecondsInput"></a>

```java
public java.lang.Number getKubeconfigExpireSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.maintenancePolicyInput"></a>

```java
public KubernetesClusterMaintenancePolicy getMaintenancePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodePoolInput`<sup>Optional</sup> <a name="nodePoolInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.nodePoolInput"></a>

```java
public KubernetesClusterNodePool getNodePoolInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `registryIntegrationInput`<sup>Optional</sup> <a name="registryIntegrationInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegrationInput"></a>

```java
public java.lang.Object getRegistryIntegrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `routingAgentInput`<sup>Optional</sup> <a name="routingAgentInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.routingAgentInput"></a>

```java
public KubernetesClusterRoutingAgent getRoutingAgentInput();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

---

##### `serviceSubnetInput`<sup>Optional</sup> <a name="serviceSubnetInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnetInput"></a>

```java
public java.lang.String getServiceSubnetInput();
```

- *Type:* java.lang.String

---

##### `surgeUpgradeInput`<sup>Optional</sup> <a name="surgeUpgradeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgradeInput"></a>

```java
public java.lang.Object getSurgeUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `vpcUuidInput`<sup>Optional</sup> <a name="vpcUuidInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuidInput"></a>

```java
public java.lang.String getVpcUuidInput();
```

- *Type:* java.lang.String

---

##### `autoUpgrade`<sup>Required</sup> <a name="autoUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.autoUpgrade"></a>

```java
public java.lang.Object getAutoUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterSubnet`<sup>Required</sup> <a name="clusterSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.clusterSubnet"></a>

```java
public java.lang.String getClusterSubnet();
```

- *Type:* java.lang.String

---

##### `destroyAllAssociatedResources`<sup>Required</sup> <a name="destroyAllAssociatedResources" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.destroyAllAssociatedResources"></a>

```java
public java.lang.Object getDestroyAllAssociatedResources();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ha`<sup>Required</sup> <a name="ha" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.ha"></a>

```java
public java.lang.Object getHa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubeconfigExpireSeconds`<sup>Required</sup> <a name="kubeconfigExpireSeconds" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.kubeconfigExpireSeconds"></a>

```java
public java.lang.Number getKubeconfigExpireSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `registryIntegration`<sup>Required</sup> <a name="registryIntegration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.registryIntegration"></a>

```java
public java.lang.Object getRegistryIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceSubnet`<sup>Required</sup> <a name="serviceSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.serviceSubnet"></a>

```java
public java.lang.String getServiceSubnet();
```

- *Type:* java.lang.String

---

##### `surgeUpgrade`<sup>Required</sup> <a name="surgeUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.surgeUpgrade"></a>

```java
public java.lang.Object getSurgeUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `vpcUuid`<sup>Required</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.vpcUuid"></a>

```java
public java.lang.String getVpcUuid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterClusterAutoscalerConfiguration <a name="KubernetesClusterClusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterClusterAutoscalerConfiguration;

KubernetesClusterClusterAutoscalerConfiguration.builder()
//  .scaleDownUnneededTime(java.lang.String)
//  .scaleDownUtilizationThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUnneededTime">scaleDownUnneededTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#scale_down_unneeded_time KubernetesCluster#scale_down_unneeded_time}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUtilizationThreshold">scaleDownUtilizationThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#scale_down_utilization_threshold KubernetesCluster#scale_down_utilization_threshold}. |

---

##### `scaleDownUnneededTime`<sup>Optional</sup> <a name="scaleDownUnneededTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUnneededTime"></a>

```java
public java.lang.String getScaleDownUnneededTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#scale_down_unneeded_time KubernetesCluster#scale_down_unneeded_time}.

---

##### `scaleDownUtilizationThreshold`<sup>Optional</sup> <a name="scaleDownUtilizationThreshold" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration.property.scaleDownUtilizationThreshold"></a>

```java
public java.lang.Number getScaleDownUtilizationThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#scale_down_utilization_threshold KubernetesCluster#scale_down_utilization_threshold}.

---

### KubernetesClusterConfig <a name="KubernetesClusterConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterConfig;

KubernetesClusterConfig.builder()
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
    .nodePool(KubernetesClusterNodePool)
    .region(java.lang.String)
    .version(java.lang.String)
//  .autoUpgrade(java.lang.Boolean)
//  .autoUpgrade(IResolvable)
//  .clusterAutoscalerConfiguration(IResolvable)
//  .clusterAutoscalerConfiguration(java.util.List<KubernetesClusterClusterAutoscalerConfiguration>)
//  .clusterSubnet(java.lang.String)
//  .controlPlaneFirewall(KubernetesClusterControlPlaneFirewall)
//  .destroyAllAssociatedResources(java.lang.Boolean)
//  .destroyAllAssociatedResources(IResolvable)
//  .ha(java.lang.Boolean)
//  .ha(IResolvable)
//  .id(java.lang.String)
//  .kubeconfigExpireSeconds(java.lang.Number)
//  .maintenancePolicy(KubernetesClusterMaintenancePolicy)
//  .registryIntegration(java.lang.Boolean)
//  .registryIntegration(IResolvable)
//  .routingAgent(KubernetesClusterRoutingAgent)
//  .serviceSubnet(java.lang.String)
//  .surgeUpgrade(java.lang.Boolean)
//  .surgeUpgrade(IResolvable)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(KubernetesClusterTimeouts)
//  .vpcUuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.nodePool">nodePool</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a></code> | node_pool block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#region KubernetesCluster#region}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.autoUpgrade">autoUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#auto_upgrade KubernetesCluster#auto_upgrade}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterAutoscalerConfiguration">clusterAutoscalerConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>></code> | cluster_autoscaler_configuration block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterSubnet">clusterSubnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#cluster_subnet KubernetesCluster#cluster_subnet}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.controlPlaneFirewall">controlPlaneFirewall</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a></code> | control_plane_firewall block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.destroyAllAssociatedResources">destroyAllAssociatedResources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#destroy_all_associated_resources KubernetesCluster#destroy_all_associated_resources}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.ha">ha</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#ha KubernetesCluster#ha}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.kubeconfigExpireSeconds">kubeconfigExpireSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#kubeconfig_expire_seconds KubernetesCluster#kubeconfig_expire_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.registryIntegration">registryIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#registry_integration KubernetesCluster#registry_integration}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.routingAgent">routingAgent</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a></code> | routing_agent block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.serviceSubnet">serviceSubnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#service_subnet KubernetesCluster#service_subnet}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.surgeUpgrade">surgeUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#surge_upgrade KubernetesCluster#surge_upgrade}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.vpcUuid">vpcUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#vpc_uuid KubernetesCluster#vpc_uuid}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}.

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.nodePool"></a>

```java
public KubernetesClusterNodePool getNodePool();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

node_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#node_pool KubernetesCluster#node_pool}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#region KubernetesCluster#region}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}.

---

##### `autoUpgrade`<sup>Optional</sup> <a name="autoUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.autoUpgrade"></a>

```java
public java.lang.Object getAutoUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#auto_upgrade KubernetesCluster#auto_upgrade}.

---

##### `clusterAutoscalerConfiguration`<sup>Optional</sup> <a name="clusterAutoscalerConfiguration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterAutoscalerConfiguration"></a>

```java
public java.lang.Object getClusterAutoscalerConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>>

cluster_autoscaler_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#cluster_autoscaler_configuration KubernetesCluster#cluster_autoscaler_configuration}

---

##### `clusterSubnet`<sup>Optional</sup> <a name="clusterSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.clusterSubnet"></a>

```java
public java.lang.String getClusterSubnet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#cluster_subnet KubernetesCluster#cluster_subnet}.

---

##### `controlPlaneFirewall`<sup>Optional</sup> <a name="controlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.controlPlaneFirewall"></a>

```java
public KubernetesClusterControlPlaneFirewall getControlPlaneFirewall();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

control_plane_firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#control_plane_firewall KubernetesCluster#control_plane_firewall}

---

##### `destroyAllAssociatedResources`<sup>Optional</sup> <a name="destroyAllAssociatedResources" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.destroyAllAssociatedResources"></a>

```java
public java.lang.Object getDestroyAllAssociatedResources();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#destroy_all_associated_resources KubernetesCluster#destroy_all_associated_resources}.

---

##### `ha`<sup>Optional</sup> <a name="ha" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.ha"></a>

```java
public java.lang.Object getHa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#ha KubernetesCluster#ha}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubeconfigExpireSeconds`<sup>Optional</sup> <a name="kubeconfigExpireSeconds" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.kubeconfigExpireSeconds"></a>

```java
public java.lang.Number getKubeconfigExpireSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#kubeconfig_expire_seconds KubernetesCluster#kubeconfig_expire_seconds}.

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.maintenancePolicy"></a>

```java
public KubernetesClusterMaintenancePolicy getMaintenancePolicy();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#maintenance_policy KubernetesCluster#maintenance_policy}

---

##### `registryIntegration`<sup>Optional</sup> <a name="registryIntegration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.registryIntegration"></a>

```java
public java.lang.Object getRegistryIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#registry_integration KubernetesCluster#registry_integration}.

---

##### `routingAgent`<sup>Optional</sup> <a name="routingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.routingAgent"></a>

```java
public KubernetesClusterRoutingAgent getRoutingAgent();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

routing_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#routing_agent KubernetesCluster#routing_agent}

---

##### `serviceSubnet`<sup>Optional</sup> <a name="serviceSubnet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.serviceSubnet"></a>

```java
public java.lang.String getServiceSubnet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#service_subnet KubernetesCluster#service_subnet}.

---

##### `surgeUpgrade`<sup>Optional</sup> <a name="surgeUpgrade" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.surgeUpgrade"></a>

```java
public java.lang.Object getSurgeUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#surge_upgrade KubernetesCluster#surge_upgrade}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.timeouts"></a>

```java
public KubernetesClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#timeouts KubernetesCluster#timeouts}

---

##### `vpcUuid`<sup>Optional</sup> <a name="vpcUuid" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterConfig.property.vpcUuid"></a>

```java
public java.lang.String getVpcUuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#vpc_uuid KubernetesCluster#vpc_uuid}.

---

### KubernetesClusterControlPlaneFirewall <a name="KubernetesClusterControlPlaneFirewall" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterControlPlaneFirewall;

KubernetesClusterControlPlaneFirewall.builder()
    .allowedAddresses(java.util.List<java.lang.String>)
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.allowedAddresses">allowedAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#allowed_addresses KubernetesCluster#allowed_addresses}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}. |

---

##### `allowedAddresses`<sup>Required</sup> <a name="allowedAddresses" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.allowedAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#allowed_addresses KubernetesCluster#allowed_addresses}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}.

---

### KubernetesClusterKubeConfig <a name="KubernetesClusterKubeConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterKubeConfig;

KubernetesClusterKubeConfig.builder()
    .build();
```


### KubernetesClusterMaintenancePolicy <a name="KubernetesClusterMaintenancePolicy" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterMaintenancePolicy;

KubernetesClusterMaintenancePolicy.builder()
//  .day(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.day">day</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#day KubernetesCluster#day}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#start_time KubernetesCluster#start_time}. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#day KubernetesCluster#day}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#start_time KubernetesCluster#start_time}.

---

### KubernetesClusterNodePool <a name="KubernetesClusterNodePool" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterNodePool;

KubernetesClusterNodePool.builder()
    .name(java.lang.String)
    .size(java.lang.String)
//  .autoScale(java.lang.Boolean)
//  .autoScale(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maxNodes(java.lang.Number)
//  .minNodes(java.lang.Number)
//  .nodeCount(java.lang.Number)
//  .tags(java.util.List<java.lang.String>)
//  .taint(IResolvable)
//  .taint(java.util.List<KubernetesClusterNodePoolTaint>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#size KubernetesCluster#size}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.autoScale">autoScale</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#auto_scale KubernetesCluster#auto_scale}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#max_nodes KubernetesCluster#max_nodes}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#min_nodes KubernetesCluster#min_nodes}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#node_count KubernetesCluster#node_count}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.taint">taint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>></code> | taint block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#size KubernetesCluster#size}.

---

##### `autoScale`<sup>Optional</sup> <a name="autoScale" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.autoScale"></a>

```java
public java.lang.Object getAutoScale();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#auto_scale KubernetesCluster#auto_scale}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}.

---

##### `maxNodes`<sup>Optional</sup> <a name="maxNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#max_nodes KubernetesCluster#max_nodes}.

---

##### `minNodes`<sup>Optional</sup> <a name="minNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#min_nodes KubernetesCluster#min_nodes}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#node_count KubernetesCluster#node_count}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}.

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool.property.taint"></a>

```java
public java.lang.Object getTaint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>>

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#taint KubernetesCluster#taint}

---

### KubernetesClusterNodePoolNodes <a name="KubernetesClusterNodePoolNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterNodePoolNodes;

KubernetesClusterNodePoolNodes.builder()
    .build();
```


### KubernetesClusterNodePoolTaint <a name="KubernetesClusterNodePoolTaint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterNodePoolTaint;

KubernetesClusterNodePoolTaint.builder()
    .effect(java.lang.String)
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.effect">effect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#effect KubernetesCluster#effect}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#key KubernetesCluster#key}. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#value KubernetesCluster#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#effect KubernetesCluster#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#key KubernetesCluster#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#value KubernetesCluster#value}.

---

### KubernetesClusterRoutingAgent <a name="KubernetesClusterRoutingAgent" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterRoutingAgent;

KubernetesClusterRoutingAgent.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}.

---

### KubernetesClusterTimeouts <a name="KubernetesClusterTimeouts" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterTimeouts;

KubernetesClusterTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#create KubernetesCluster#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/kubernetes_cluster#create KubernetesCluster#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterClusterAutoscalerConfigurationList <a name="KubernetesClusterClusterAutoscalerConfigurationList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterClusterAutoscalerConfigurationList;

new KubernetesClusterClusterAutoscalerConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.get"></a>

```java
public KubernetesClusterClusterAutoscalerConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>>

---


### KubernetesClusterClusterAutoscalerConfigurationOutputReference <a name="KubernetesClusterClusterAutoscalerConfigurationOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference;

new KubernetesClusterClusterAutoscalerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUnneededTime">resetScaleDownUnneededTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUtilizationThreshold">resetScaleDownUtilizationThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScaleDownUnneededTime` <a name="resetScaleDownUnneededTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUnneededTime"></a>

```java
public void resetScaleDownUnneededTime()
```

##### `resetScaleDownUtilizationThreshold` <a name="resetScaleDownUtilizationThreshold" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.resetScaleDownUtilizationThreshold"></a>

```java
public void resetScaleDownUtilizationThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTimeInput">scaleDownUnneededTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThresholdInput">scaleDownUtilizationThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTime">scaleDownUnneededTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThreshold">scaleDownUtilizationThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleDownUnneededTimeInput`<sup>Optional</sup> <a name="scaleDownUnneededTimeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTimeInput"></a>

```java
public java.lang.String getScaleDownUnneededTimeInput();
```

- *Type:* java.lang.String

---

##### `scaleDownUtilizationThresholdInput`<sup>Optional</sup> <a name="scaleDownUtilizationThresholdInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThresholdInput"></a>

```java
public java.lang.Number getScaleDownUtilizationThresholdInput();
```

- *Type:* java.lang.Number

---

##### `scaleDownUnneededTime`<sup>Required</sup> <a name="scaleDownUnneededTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUnneededTime"></a>

```java
public java.lang.String getScaleDownUnneededTime();
```

- *Type:* java.lang.String

---

##### `scaleDownUtilizationThreshold`<sup>Required</sup> <a name="scaleDownUtilizationThreshold" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.scaleDownUtilizationThreshold"></a>

```java
public java.lang.Number getScaleDownUtilizationThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterClusterAutoscalerConfiguration">KubernetesClusterClusterAutoscalerConfiguration</a>

---


### KubernetesClusterControlPlaneFirewallOutputReference <a name="KubernetesClusterControlPlaneFirewallOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterControlPlaneFirewallOutputReference;

new KubernetesClusterControlPlaneFirewallOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddressesInput">allowedAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddresses">allowedAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAddressesInput`<sup>Optional</sup> <a name="allowedAddressesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedAddresses`<sup>Required</sup> <a name="allowedAddresses" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.allowedAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewallOutputReference.property.internalValue"></a>

```java
public KubernetesClusterControlPlaneFirewall getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterControlPlaneFirewall">KubernetesClusterControlPlaneFirewall</a>

---


### KubernetesClusterKubeConfigList <a name="KubernetesClusterKubeConfigList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterKubeConfigList;

new KubernetesClusterKubeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.get"></a>

```java
public KubernetesClusterKubeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### KubernetesClusterKubeConfigOutputReference <a name="KubernetesClusterKubeConfigOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterKubeConfigOutputReference;

new KubernetesClusterKubeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.rawConfig">rawConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig">KubernetesClusterKubeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```java
public java.lang.String getClusterCaCertificate();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `rawConfig`<sup>Required</sup> <a name="rawConfig" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.rawConfig"></a>

```java
public java.lang.String getRawConfig();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfigOutputReference.property.internalValue"></a>

```java
public KubernetesClusterKubeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterKubeConfig">KubernetesClusterKubeConfig</a>

---


### KubernetesClusterMaintenancePolicyOutputReference <a name="KubernetesClusterMaintenancePolicyOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterMaintenancePolicyOutputReference;

new KubernetesClusterMaintenancePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```java
public KubernetesClusterMaintenancePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterMaintenancePolicy">KubernetesClusterMaintenancePolicy</a>

---


### KubernetesClusterNodePoolNodesList <a name="KubernetesClusterNodePoolNodesList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterNodePoolNodesList;

new KubernetesClusterNodePoolNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.get"></a>

```java
public KubernetesClusterNodePoolNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### KubernetesClusterNodePoolNodesOutputReference <a name="KubernetesClusterNodePoolNodesOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterNodePoolNodesOutputReference;

new KubernetesClusterNodePoolNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.dropletId">dropletId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes">KubernetesClusterNodePoolNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dropletId`<sup>Required</sup> <a name="dropletId" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.dropletId"></a>

```java
public java.lang.String getDropletId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesOutputReference.property.internalValue"></a>

```java
public KubernetesClusterNodePoolNodes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodes">KubernetesClusterNodePoolNodes</a>

---


### KubernetesClusterNodePoolOutputReference <a name="KubernetesClusterNodePoolOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterNodePoolOutputReference;

new KubernetesClusterNodePoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.putTaint">putTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetAutoScale">resetAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMaxNodes">resetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMinNodes">resetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTaint">resetTaint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaint` <a name="putTaint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.putTaint"></a>

```java
public void putTaint(IResolvable OR java.util.List<KubernetesClusterNodePoolTaint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.putTaint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>>

---

##### `resetAutoScale` <a name="resetAutoScale" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetAutoScale"></a>

```java
public void resetAutoScale()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaxNodes` <a name="resetMaxNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMaxNodes"></a>

```java
public void resetMaxNodes()
```

##### `resetMinNodes` <a name="resetMinNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetMinNodes"></a>

```java
public void resetMinNodes()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaint` <a name="resetTaint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.resetTaint"></a>

```java
public void resetTaint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.actualNodeCount">actualNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList">KubernetesClusterNodePoolNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taint">taint</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList">KubernetesClusterNodePoolTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScaleInput">autoScaleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodesInput">maxNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodesInput">minNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taintInput">taintInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScale">autoScale</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actualNodeCount`<sup>Required</sup> <a name="actualNodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.actualNodeCount"></a>

```java
public java.lang.Number getActualNodeCount();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodes"></a>

```java
public KubernetesClusterNodePoolNodesList getNodes();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolNodesList">KubernetesClusterNodePoolNodesList</a>

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taint"></a>

```java
public KubernetesClusterNodePoolTaintList getTaint();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList">KubernetesClusterNodePoolTaintList</a>

---

##### `autoScaleInput`<sup>Optional</sup> <a name="autoScaleInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScaleInput"></a>

```java
public java.lang.Object getAutoScaleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodesInput"></a>

```java
public java.lang.Number getMaxNodesInput();
```

- *Type:* java.lang.Number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodesInput"></a>

```java
public java.lang.Number getMinNodesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `taintInput`<sup>Optional</sup> <a name="taintInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.taintInput"></a>

```java
public java.lang.Object getTaintInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>>

---

##### `autoScale`<sup>Required</sup> <a name="autoScale" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.autoScale"></a>

```java
public java.lang.Object getAutoScale();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolOutputReference.property.internalValue"></a>

```java
public KubernetesClusterNodePool getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePool">KubernetesClusterNodePool</a>

---


### KubernetesClusterNodePoolTaintList <a name="KubernetesClusterNodePoolTaintList" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterNodePoolTaintList;

new KubernetesClusterNodePoolTaintList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.get"></a>

```java
public KubernetesClusterNodePoolTaintOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>>

---


### KubernetesClusterNodePoolTaintOutputReference <a name="KubernetesClusterNodePoolTaintOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterNodePoolTaintOutputReference;

new KubernetesClusterNodePoolTaintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaintOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterNodePoolTaint">KubernetesClusterNodePoolTaint</a>

---


### KubernetesClusterRoutingAgentOutputReference <a name="KubernetesClusterRoutingAgentOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterRoutingAgentOutputReference;

new KubernetesClusterRoutingAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgentOutputReference.property.internalValue"></a>

```java
public KubernetesClusterRoutingAgent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterRoutingAgent">KubernetesClusterRoutingAgent</a>

---


### KubernetesClusterTimeoutsOutputReference <a name="KubernetesClusterTimeoutsOutputReference" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.kubernetes_cluster.KubernetesClusterTimeoutsOutputReference;

new KubernetesClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-digitalocean.kubernetesCluster.KubernetesClusterTimeouts">KubernetesClusterTimeouts</a>

---



