/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcNatGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * ICMP connection timeout (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#icmp_timeout_seconds VpcNatGateway#icmp_timeout_seconds}
  */
  readonly icmpTimeoutSeconds?: number;
  /**
  * Name of the VPC NAT Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#name VpcNatGateway#name}
  */
  readonly name: string;
  /**
  * ID of the project to which the VPC NAT Gateway will be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#project_id VpcNatGateway#project_id}
  */
  readonly projectId?: string;
  /**
  * Region of the VPC NAT Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#region VpcNatGateway#region}
  */
  readonly region: string;
  /**
  * Size of the VPC NAT Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#size VpcNatGateway#size}
  */
  readonly size: number;
  /**
  * TCP connection timeout (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#tcp_timeout_seconds VpcNatGateway#tcp_timeout_seconds}
  */
  readonly tcpTimeoutSeconds?: number;
  /**
  * Type of the VPC NAT Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#type VpcNatGateway#type}
  */
  readonly type: string;
  /**
  * UDP connection timeout (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#udp_timeout_seconds VpcNatGateway#udp_timeout_seconds}
  */
  readonly udpTimeoutSeconds?: number;
  /**
  * vpcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#vpcs VpcNatGateway#vpcs}
  */
  readonly vpcs: VpcNatGatewayVpcs[] | cdktf.IResolvable;
}
export interface VpcNatGatewayEgressesPublicGateways {
}

export function vpcNatGatewayEgressesPublicGatewaysToTerraform(struct?: VpcNatGatewayEgressesPublicGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcNatGatewayEgressesPublicGatewaysToHclTerraform(struct?: VpcNatGatewayEgressesPublicGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcNatGatewayEgressesPublicGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcNatGatewayEgressesPublicGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcNatGatewayEgressesPublicGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
}

export class VpcNatGatewayEgressesPublicGatewaysList extends cdktf.ComplexList {

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
  public get(index: number): VpcNatGatewayEgressesPublicGatewaysOutputReference {
    return new VpcNatGatewayEgressesPublicGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcNatGatewayEgresses {
}

export function vpcNatGatewayEgressesToTerraform(struct?: VpcNatGatewayEgresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcNatGatewayEgressesToHclTerraform(struct?: VpcNatGatewayEgresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcNatGatewayEgressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcNatGatewayEgresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcNatGatewayEgresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_gateways - computed: true, optional: false, required: false
  private _publicGateways = new VpcNatGatewayEgressesPublicGatewaysList(this, "public_gateways", true);
  public get publicGateways() {
    return this._publicGateways;
  }
}

export class VpcNatGatewayEgressesList extends cdktf.ComplexList {

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
  public get(index: number): VpcNatGatewayEgressesOutputReference {
    return new VpcNatGatewayEgressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcNatGatewayVpcs {
  /**
  * Indicates if this is the default VPC NAT Gateway in the VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#default_gateway VpcNatGateway#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * ID of the ingress VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#vpc_uuid VpcNatGateway#vpc_uuid}
  */
  readonly vpcUuid: string;
}

export function vpcNatGatewayVpcsToTerraform(struct?: VpcNatGatewayVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    vpc_uuid: cdktf.stringToTerraform(struct!.vpcUuid),
  }
}


export function vpcNatGatewayVpcsToHclTerraform(struct?: VpcNatGatewayVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpc_uuid: {
      value: cdktf.stringToHclTerraform(struct!.vpcUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcNatGatewayVpcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcNatGatewayVpcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._vpcUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcUuid = this._vpcUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcNatGatewayVpcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultGateway = undefined;
      this._vpcUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultGateway = value.defaultGateway;
      this._vpcUuid = value.vpcUuid;
    }
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // gateway_ip - computed: true, optional: false, required: false
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }

  // vpc_uuid - computed: false, optional: false, required: true
  private _vpcUuid?: string; 
  public get vpcUuid() {
    return this.getStringAttribute('vpc_uuid');
  }
  public set vpcUuid(value: string) {
    this._vpcUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcUuidInput() {
    return this._vpcUuid;
  }
}

export class VpcNatGatewayVpcsList extends cdktf.ComplexList {
  public internalValue? : VpcNatGatewayVpcs[] | cdktf.IResolvable

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
  public get(index: number): VpcNatGatewayVpcsOutputReference {
    return new VpcNatGatewayVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway digitalocean_vpc_nat_gateway}
*/
export class VpcNatGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_vpc_nat_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcNatGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcNatGateway to import
  * @param importFromId The id of the existing VpcNatGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcNatGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_vpc_nat_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/vpc_nat_gateway digitalocean_vpc_nat_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcNatGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VpcNatGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_vpc_nat_gateway',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.71.0',
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
    this._icmpTimeoutSeconds = config.icmpTimeoutSeconds;
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
    this._size = config.size;
    this._tcpTimeoutSeconds = config.tcpTimeoutSeconds;
    this._type = config.type;
    this._udpTimeoutSeconds = config.udpTimeoutSeconds;
    this._vpcs.internalValue = config.vpcs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // egresses - computed: true, optional: false, required: false
  private _egresses = new VpcNatGatewayEgressesList(this, "egresses", false);
  public get egresses() {
    return this._egresses;
  }

  // icmp_timeout_seconds - computed: true, optional: true, required: false
  private _icmpTimeoutSeconds?: number; 
  public get icmpTimeoutSeconds() {
    return this.getNumberAttribute('icmp_timeout_seconds');
  }
  public set icmpTimeoutSeconds(value: number) {
    this._icmpTimeoutSeconds = value;
  }
  public resetIcmpTimeoutSeconds() {
    this._icmpTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTimeoutSecondsInput() {
    return this._icmpTimeoutSeconds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tcp_timeout_seconds - computed: true, optional: true, required: false
  private _tcpTimeoutSeconds?: number; 
  public get tcpTimeoutSeconds() {
    return this.getNumberAttribute('tcp_timeout_seconds');
  }
  public set tcpTimeoutSeconds(value: number) {
    this._tcpTimeoutSeconds = value;
  }
  public resetTcpTimeoutSeconds() {
    this._tcpTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeoutSecondsInput() {
    return this._tcpTimeoutSeconds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // udp_timeout_seconds - computed: true, optional: true, required: false
  private _udpTimeoutSeconds?: number; 
  public get udpTimeoutSeconds() {
    return this.getNumberAttribute('udp_timeout_seconds');
  }
  public set udpTimeoutSeconds(value: number) {
    this._udpTimeoutSeconds = value;
  }
  public resetUdpTimeoutSeconds() {
    this._udpTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutSecondsInput() {
    return this._udpTimeoutSeconds;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vpcs - computed: false, optional: false, required: true
  private _vpcs = new VpcNatGatewayVpcsList(this, "vpcs", true);
  public get vpcs() {
    return this._vpcs;
  }
  public putVpcs(value: VpcNatGatewayVpcs[] | cdktf.IResolvable) {
    this._vpcs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcsInput() {
    return this._vpcs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      icmp_timeout_seconds: cdktf.numberToTerraform(this._icmpTimeoutSeconds),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      size: cdktf.numberToTerraform(this._size),
      tcp_timeout_seconds: cdktf.numberToTerraform(this._tcpTimeoutSeconds),
      type: cdktf.stringToTerraform(this._type),
      udp_timeout_seconds: cdktf.numberToTerraform(this._udpTimeoutSeconds),
      vpcs: cdktf.listMapper(vpcNatGatewayVpcsToTerraform, true)(this._vpcs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icmp_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._icmpTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._tcpTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._udpTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpcs: {
        value: cdktf.listMapperHcl(vpcNatGatewayVpcsToHclTerraform, true)(this._vpcs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcNatGatewayVpcsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
