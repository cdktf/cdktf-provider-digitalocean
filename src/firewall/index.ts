/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#droplet_ids Firewall#droplet_ids}
  */
  readonly dropletIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#id Firewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#name Firewall#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#tags Firewall#tags}
  */
  readonly tags?: string[];
  /**
  * inbound_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#inbound_rule Firewall#inbound_rule}
  */
  readonly inboundRule?: FirewallInboundRule[] | cdktf.IResolvable;
  /**
  * outbound_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#outbound_rule Firewall#outbound_rule}
  */
  readonly outboundRule?: FirewallOutboundRule[] | cdktf.IResolvable;
}
export interface FirewallPendingChanges {
}

export function firewallPendingChangesToTerraform(struct?: FirewallPendingChanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function firewallPendingChangesToHclTerraform(struct?: FirewallPendingChanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FirewallPendingChangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPendingChanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPendingChanges | undefined) {
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

export class FirewallPendingChangesList extends cdktf.ComplexList {

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
  public get(index: number): FirewallPendingChangesOutputReference {
    return new FirewallPendingChangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInboundRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#port_range Firewall#port_range}
  */
  readonly portRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#protocol Firewall#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#source_addresses Firewall#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#source_droplet_ids Firewall#source_droplet_ids}
  */
  readonly sourceDropletIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#source_kubernetes_ids Firewall#source_kubernetes_ids}
  */
  readonly sourceKubernetesIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#source_load_balancer_uids Firewall#source_load_balancer_uids}
  */
  readonly sourceLoadBalancerUids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#source_tags Firewall#source_tags}
  */
  readonly sourceTags?: string[];
}

export function firewallInboundRuleToTerraform(struct?: FirewallInboundRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_range: cdktf.stringToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddresses),
    source_droplet_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.sourceDropletIds),
    source_kubernetes_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceKubernetesIds),
    source_load_balancer_uids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLoadBalancerUids),
    source_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceTags),
  }
}


export function firewallInboundRuleToHclTerraform(struct?: FirewallInboundRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_droplet_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.sourceDropletIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    source_kubernetes_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceKubernetesIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_load_balancer_uids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLoadBalancerUids),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallInboundRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallInboundRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourceDropletIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDropletIds = this._sourceDropletIds;
    }
    if (this._sourceKubernetesIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKubernetesIds = this._sourceKubernetesIds;
    }
    if (this._sourceLoadBalancerUids !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLoadBalancerUids = this._sourceLoadBalancerUids;
    }
    if (this._sourceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTags = this._sourceTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInboundRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portRange = undefined;
      this._protocol = undefined;
      this._sourceAddresses = undefined;
      this._sourceDropletIds = undefined;
      this._sourceKubernetesIds = undefined;
      this._sourceLoadBalancerUids = undefined;
      this._sourceTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portRange = value.portRange;
      this._protocol = value.protocol;
      this._sourceAddresses = value.sourceAddresses;
      this._sourceDropletIds = value.sourceDropletIds;
      this._sourceKubernetesIds = value.sourceKubernetesIds;
      this._sourceLoadBalancerUids = value.sourceLoadBalancerUids;
      this._sourceTags = value.sourceTags;
    }
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('source_addresses'));
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_droplet_ids - computed: false, optional: true, required: false
  private _sourceDropletIds?: number[]; 
  public get sourceDropletIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('source_droplet_ids')));
  }
  public set sourceDropletIds(value: number[]) {
    this._sourceDropletIds = value;
  }
  public resetSourceDropletIds() {
    this._sourceDropletIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDropletIdsInput() {
    return this._sourceDropletIds;
  }

  // source_kubernetes_ids - computed: false, optional: true, required: false
  private _sourceKubernetesIds?: string[]; 
  public get sourceKubernetesIds() {
    return cdktf.Fn.tolist(this.getListAttribute('source_kubernetes_ids'));
  }
  public set sourceKubernetesIds(value: string[]) {
    this._sourceKubernetesIds = value;
  }
  public resetSourceKubernetesIds() {
    this._sourceKubernetesIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKubernetesIdsInput() {
    return this._sourceKubernetesIds;
  }

  // source_load_balancer_uids - computed: false, optional: true, required: false
  private _sourceLoadBalancerUids?: string[]; 
  public get sourceLoadBalancerUids() {
    return cdktf.Fn.tolist(this.getListAttribute('source_load_balancer_uids'));
  }
  public set sourceLoadBalancerUids(value: string[]) {
    this._sourceLoadBalancerUids = value;
  }
  public resetSourceLoadBalancerUids() {
    this._sourceLoadBalancerUids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLoadBalancerUidsInput() {
    return this._sourceLoadBalancerUids;
  }

  // source_tags - computed: false, optional: true, required: false
  private _sourceTags?: string[]; 
  public get sourceTags() {
    return cdktf.Fn.tolist(this.getListAttribute('source_tags'));
  }
  public set sourceTags(value: string[]) {
    this._sourceTags = value;
  }
  public resetSourceTags() {
    this._sourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTagsInput() {
    return this._sourceTags;
  }
}

export class FirewallInboundRuleList extends cdktf.ComplexList {
  public internalValue? : FirewallInboundRule[] | cdktf.IResolvable

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
  public get(index: number): FirewallInboundRuleOutputReference {
    return new FirewallInboundRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallOutboundRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#destination_addresses Firewall#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#destination_droplet_ids Firewall#destination_droplet_ids}
  */
  readonly destinationDropletIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#destination_kubernetes_ids Firewall#destination_kubernetes_ids}
  */
  readonly destinationKubernetesIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#destination_load_balancer_uids Firewall#destination_load_balancer_uids}
  */
  readonly destinationLoadBalancerUids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#destination_tags Firewall#destination_tags}
  */
  readonly destinationTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#port_range Firewall#port_range}
  */
  readonly portRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#protocol Firewall#protocol}
  */
  readonly protocol: string;
}

export function firewallOutboundRuleToTerraform(struct?: FirewallOutboundRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddresses),
    destination_droplet_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.destinationDropletIds),
    destination_kubernetes_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationKubernetesIds),
    destination_load_balancer_uids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationLoadBalancerUids),
    destination_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationTags),
    port_range: cdktf.stringToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function firewallOutboundRuleToHclTerraform(struct?: FirewallOutboundRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_droplet_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.destinationDropletIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    destination_kubernetes_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationKubernetesIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_load_balancer_uids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationLoadBalancerUids),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallOutboundRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallOutboundRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationDropletIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDropletIds = this._destinationDropletIds;
    }
    if (this._destinationKubernetesIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationKubernetesIds = this._destinationKubernetesIds;
    }
    if (this._destinationLoadBalancerUids !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationLoadBalancerUids = this._destinationLoadBalancerUids;
    }
    if (this._destinationTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTags = this._destinationTags;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallOutboundRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationDropletIds = undefined;
      this._destinationKubernetesIds = undefined;
      this._destinationLoadBalancerUids = undefined;
      this._destinationTags = undefined;
      this._portRange = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationDropletIds = value.destinationDropletIds;
      this._destinationKubernetesIds = value.destinationKubernetesIds;
      this._destinationLoadBalancerUids = value.destinationLoadBalancerUids;
      this._destinationTags = value.destinationTags;
      this._portRange = value.portRange;
      this._protocol = value.protocol;
    }
  }

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_addresses'));
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_droplet_ids - computed: false, optional: true, required: false
  private _destinationDropletIds?: number[]; 
  public get destinationDropletIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('destination_droplet_ids')));
  }
  public set destinationDropletIds(value: number[]) {
    this._destinationDropletIds = value;
  }
  public resetDestinationDropletIds() {
    this._destinationDropletIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDropletIdsInput() {
    return this._destinationDropletIds;
  }

  // destination_kubernetes_ids - computed: false, optional: true, required: false
  private _destinationKubernetesIds?: string[]; 
  public get destinationKubernetesIds() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_kubernetes_ids'));
  }
  public set destinationKubernetesIds(value: string[]) {
    this._destinationKubernetesIds = value;
  }
  public resetDestinationKubernetesIds() {
    this._destinationKubernetesIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationKubernetesIdsInput() {
    return this._destinationKubernetesIds;
  }

  // destination_load_balancer_uids - computed: false, optional: true, required: false
  private _destinationLoadBalancerUids?: string[]; 
  public get destinationLoadBalancerUids() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_load_balancer_uids'));
  }
  public set destinationLoadBalancerUids(value: string[]) {
    this._destinationLoadBalancerUids = value;
  }
  public resetDestinationLoadBalancerUids() {
    this._destinationLoadBalancerUids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLoadBalancerUidsInput() {
    return this._destinationLoadBalancerUids;
  }

  // destination_tags - computed: false, optional: true, required: false
  private _destinationTags?: string[]; 
  public get destinationTags() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_tags'));
  }
  public set destinationTags(value: string[]) {
    this._destinationTags = value;
  }
  public resetDestinationTags() {
    this._destinationTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTagsInput() {
    return this._destinationTags;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class FirewallOutboundRuleList extends cdktf.ComplexList {
  public internalValue? : FirewallOutboundRule[] | cdktf.IResolvable

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
  public get(index: number): FirewallOutboundRuleOutputReference {
    return new FirewallOutboundRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall digitalocean_firewall}
*/
export class Firewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Firewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Firewall to import
  * @param importFromId The id of the existing Firewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Firewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/firewall digitalocean_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_firewall',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.53.0',
        providerVersionConstraint: '~> 2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dropletIds = config.dropletIds;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._inboundRule.internalValue = config.inboundRule;
    this._outboundRule.internalValue = config.outboundRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // droplet_ids - computed: false, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pending_changes - computed: true, optional: false, required: false
  private _pendingChanges = new FirewallPendingChangesList(this, "pending_changes", false);
  public get pendingChanges() {
    return this._pendingChanges;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
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
  private _inboundRule = new FirewallInboundRuleList(this, "inbound_rule", true);
  public get inboundRule() {
    return this._inboundRule;
  }
  public putInboundRule(value: FirewallInboundRule[] | cdktf.IResolvable) {
    this._inboundRule.internalValue = value;
  }
  public resetInboundRule() {
    this._inboundRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRuleInput() {
    return this._inboundRule.internalValue;
  }

  // outbound_rule - computed: false, optional: true, required: false
  private _outboundRule = new FirewallOutboundRuleList(this, "outbound_rule", true);
  public get outboundRule() {
    return this._outboundRule;
  }
  public putOutboundRule(value: FirewallOutboundRule[] | cdktf.IResolvable) {
    this._outboundRule.internalValue = value;
  }
  public resetOutboundRule() {
    this._outboundRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundRuleInput() {
    return this._outboundRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      droplet_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dropletIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      inbound_rule: cdktf.listMapper(firewallInboundRuleToTerraform, true)(this._inboundRule.internalValue),
      outbound_rule: cdktf.listMapper(firewallOutboundRuleToTerraform, true)(this._outboundRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      droplet_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dropletIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      inbound_rule: {
        value: cdktf.listMapperHcl(firewallInboundRuleToHclTerraform, true)(this._inboundRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallInboundRuleList",
      },
      outbound_rule: {
        value: cdktf.listMapperHcl(firewallOutboundRuleToHclTerraform, true)(this._outboundRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallOutboundRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
