// https://www.terraform.io/docs/providers/digitalocean/d/firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#droplet_ids DataDigitaloceanFirewall#droplet_ids}
  */
  readonly dropletIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#firewall_id DataDigitaloceanFirewall#firewall_id}
  */
  readonly firewallId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#tags DataDigitaloceanFirewall#tags}
  */
  readonly tags?: string[];
  /**
  * inbound_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#inbound_rule DataDigitaloceanFirewall#inbound_rule}
  */
  readonly inboundRule?: DataDigitaloceanFirewallInboundRule[] | cdktf.IResolvable;
  /**
  * outbound_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#outbound_rule DataDigitaloceanFirewall#outbound_rule}
  */
  readonly outboundRule?: DataDigitaloceanFirewallOutboundRule[] | cdktf.IResolvable;
}
export interface DataDigitaloceanFirewallPendingChanges {
}

export function dataDigitaloceanFirewallPendingChangesToTerraform(struct?: DataDigitaloceanFirewallPendingChanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDigitaloceanFirewallPendingChangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanFirewallPendingChanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanFirewallPendingChanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // droplet_id - computed: true, optional: false, required: false
  public get dropletId() {
    return this.getNumberAttribute('droplet_id');
  }

  // removing - computed: true, optional: false, required: false
  public get removing() {
    return this.getBooleanAttribute('removing');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataDigitaloceanFirewallPendingChangesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDigitaloceanFirewallPendingChangesOutputReference {
    return new DataDigitaloceanFirewallPendingChangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanFirewallInboundRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#port_range DataDigitaloceanFirewall#port_range}
  */
  readonly portRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#protocol DataDigitaloceanFirewall#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#source_addresses DataDigitaloceanFirewall#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#source_droplet_ids DataDigitaloceanFirewall#source_droplet_ids}
  */
  readonly sourceDropletIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#source_kubernetes_ids DataDigitaloceanFirewall#source_kubernetes_ids}
  */
  readonly sourceKubernetesIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#source_load_balancer_uids DataDigitaloceanFirewall#source_load_balancer_uids}
  */
  readonly sourceLoadBalancerUids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#source_tags DataDigitaloceanFirewall#source_tags}
  */
  readonly sourceTags?: string[];
}

export function dataDigitaloceanFirewallInboundRuleToTerraform(struct?: DataDigitaloceanFirewallInboundRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_range: cdktf.stringToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_droplet_ids: cdktf.listMapper(cdktf.numberToTerraform)(struct!.sourceDropletIds),
    source_kubernetes_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceKubernetesIds),
    source_load_balancer_uids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceLoadBalancerUids),
    source_tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceTags),
  }
}

export interface DataDigitaloceanFirewallOutboundRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#destination_addresses DataDigitaloceanFirewall#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#destination_droplet_ids DataDigitaloceanFirewall#destination_droplet_ids}
  */
  readonly destinationDropletIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#destination_kubernetes_ids DataDigitaloceanFirewall#destination_kubernetes_ids}
  */
  readonly destinationKubernetesIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#destination_load_balancer_uids DataDigitaloceanFirewall#destination_load_balancer_uids}
  */
  readonly destinationLoadBalancerUids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#destination_tags DataDigitaloceanFirewall#destination_tags}
  */
  readonly destinationTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#port_range DataDigitaloceanFirewall#port_range}
  */
  readonly portRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall#protocol DataDigitaloceanFirewall#protocol}
  */
  readonly protocol: string;
}

export function dataDigitaloceanFirewallOutboundRuleToTerraform(struct?: DataDigitaloceanFirewallOutboundRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_droplet_ids: cdktf.listMapper(cdktf.numberToTerraform)(struct!.destinationDropletIds),
    destination_kubernetes_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationKubernetesIds),
    destination_load_balancer_uids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationLoadBalancerUids),
    destination_tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationTags),
    port_range: cdktf.stringToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall digitalocean_firewall}
*/
export class DataDigitaloceanFirewall extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_firewall";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/digitalocean/d/firewall digitalocean_firewall} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_firewall',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.19.0',
        providerVersionConstraint: '~> 2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dropletIds = config.dropletIds;
    this._firewallId = config.firewallId;
    this._tags = config.tags;
    this._inboundRule = config.inboundRule;
    this._outboundRule = config.outboundRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // droplet_ids - computed: true, optional: true, required: false
  private _dropletIds?: number[]; 
  public get dropletIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('droplet_ids')));
  }
  public set dropletIds(value: number[]) {
    this._dropletIds = value;
  }
  public resetDropletIds() {
    this._dropletIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropletIdsInput() {
    return this._dropletIds;
  }

  // firewall_id - computed: false, optional: false, required: true
  private _firewallId?: string; 
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }
  public set firewallId(value: string) {
    this._firewallId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pending_changes - computed: true, optional: false, required: false
  private _pendingChanges = new DataDigitaloceanFirewallPendingChangesList(this, "pending_changes", false);
  public get pendingChanges() {
    return this._pendingChanges;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // inbound_rule - computed: false, optional: true, required: false
  private _inboundRule?: DataDigitaloceanFirewallInboundRule[] | cdktf.IResolvable; 
  public get inboundRule() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('inbound_rule')));
  }
  public set inboundRule(value: DataDigitaloceanFirewallInboundRule[] | cdktf.IResolvable) {
    this._inboundRule = value;
  }
  public resetInboundRule() {
    this._inboundRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRuleInput() {
    return this._inboundRule;
  }

  // outbound_rule - computed: false, optional: true, required: false
  private _outboundRule?: DataDigitaloceanFirewallOutboundRule[] | cdktf.IResolvable; 
  public get outboundRule() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('outbound_rule')));
  }
  public set outboundRule(value: DataDigitaloceanFirewallOutboundRule[] | cdktf.IResolvable) {
    this._outboundRule = value;
  }
  public resetOutboundRule() {
    this._outboundRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundRuleInput() {
    return this._outboundRule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      droplet_ids: cdktf.listMapper(cdktf.numberToTerraform)(this._dropletIds),
      firewall_id: cdktf.stringToTerraform(this._firewallId),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      inbound_rule: cdktf.listMapper(dataDigitaloceanFirewallInboundRuleToTerraform)(this._inboundRule),
      outbound_rule: cdktf.listMapper(dataDigitaloceanFirewallOutboundRuleToTerraform)(this._outboundRule),
    };
  }
}
