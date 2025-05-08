// https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PartnerAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The connection bandwidth in Mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#connection_bandwidth_in_mbps PartnerAttachment#connection_bandwidth_in_mbps}
  */
  readonly connectionBandwidthInMbps: number;
  /**
  * The NaaS provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#naas_provider PartnerAttachment#naas_provider}
  */
  readonly naasProvider: string;
  /**
  * The name of the Partner Attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#name PartnerAttachment#name}
  */
  readonly name: string;
  /**
  * The region where the Partner Attachment will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#region PartnerAttachment#region}
  */
  readonly region: string;
  /**
  * The list of VPC IDs to attach the Partner Attachment to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#vpc_ids PartnerAttachment#vpc_ids}
  */
  readonly vpcIds: string[];
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#bgp PartnerAttachment#bgp}
  */
  readonly bgp?: PartnerAttachmentBgp;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#timeouts PartnerAttachment#timeouts}
  */
  readonly timeouts?: PartnerAttachmentTimeouts;
}
export interface PartnerAttachmentBgp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#auth_key PartnerAttachment#auth_key}
  */
  readonly authKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#local_router_ip PartnerAttachment#local_router_ip}
  */
  readonly localRouterIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#peer_router_asn PartnerAttachment#peer_router_asn}
  */
  readonly peerRouterAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#peer_router_ip PartnerAttachment#peer_router_ip}
  */
  readonly peerRouterIp?: string;
}

export function partnerAttachmentBgpToTerraform(struct?: PartnerAttachmentBgpOutputReference | PartnerAttachmentBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_key: cdktf.stringToTerraform(struct!.authKey),
    local_router_ip: cdktf.stringToTerraform(struct!.localRouterIp),
    peer_router_asn: cdktf.numberToTerraform(struct!.peerRouterAsn),
    peer_router_ip: cdktf.stringToTerraform(struct!.peerRouterIp),
  }
}


export function partnerAttachmentBgpToHclTerraform(struct?: PartnerAttachmentBgpOutputReference | PartnerAttachmentBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_key: {
      value: cdktf.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_router_ip: {
      value: cdktf.stringToHclTerraform(struct!.localRouterIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_router_asn: {
      value: cdktf.numberToHclTerraform(struct!.peerRouterAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_router_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerRouterIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PartnerAttachmentBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PartnerAttachmentBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._localRouterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRouterIp = this._localRouterIp;
    }
    if (this._peerRouterAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerRouterAsn = this._peerRouterAsn;
    }
    if (this._peerRouterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerRouterIp = this._peerRouterIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PartnerAttachmentBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authKey = undefined;
      this._localRouterIp = undefined;
      this._peerRouterAsn = undefined;
      this._peerRouterIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authKey = value.authKey;
      this._localRouterIp = value.localRouterIp;
      this._peerRouterAsn = value.peerRouterAsn;
      this._peerRouterIp = value.peerRouterIp;
    }
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // local_router_ip - computed: false, optional: true, required: false
  private _localRouterIp?: string; 
  public get localRouterIp() {
    return this.getStringAttribute('local_router_ip');
  }
  public set localRouterIp(value: string) {
    this._localRouterIp = value;
  }
  public resetLocalRouterIp() {
    this._localRouterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRouterIpInput() {
    return this._localRouterIp;
  }

  // peer_router_asn - computed: false, optional: true, required: false
  private _peerRouterAsn?: number; 
  public get peerRouterAsn() {
    return this.getNumberAttribute('peer_router_asn');
  }
  public set peerRouterAsn(value: number) {
    this._peerRouterAsn = value;
  }
  public resetPeerRouterAsn() {
    this._peerRouterAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRouterAsnInput() {
    return this._peerRouterAsn;
  }

  // peer_router_ip - computed: false, optional: true, required: false
  private _peerRouterIp?: string; 
  public get peerRouterIp() {
    return this.getStringAttribute('peer_router_ip');
  }
  public set peerRouterIp(value: string) {
    this._peerRouterIp = value;
  }
  public resetPeerRouterIp() {
    this._peerRouterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRouterIpInput() {
    return this._peerRouterIp;
  }
}
export interface PartnerAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#create PartnerAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#delete PartnerAttachment#delete}
  */
  readonly delete?: string;
}

export function partnerAttachmentTimeoutsToTerraform(struct?: PartnerAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function partnerAttachmentTimeoutsToHclTerraform(struct?: PartnerAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PartnerAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PartnerAttachmentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PartnerAttachmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment digitalocean_partner_attachment}
*/
export class PartnerAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_partner_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PartnerAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PartnerAttachment to import
  * @param importFromId The id of the existing PartnerAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PartnerAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_partner_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/partner_attachment digitalocean_partner_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PartnerAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: PartnerAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_partner_attachment',
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
    this._connectionBandwidthInMbps = config.connectionBandwidthInMbps;
    this._naasProvider = config.naasProvider;
    this._name = config.name;
    this._region = config.region;
    this._vpcIds = config.vpcIds;
    this._bgp.internalValue = config.bgp;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_bandwidth_in_mbps - computed: false, optional: false, required: true
  private _connectionBandwidthInMbps?: number; 
  public get connectionBandwidthInMbps() {
    return this.getNumberAttribute('connection_bandwidth_in_mbps');
  }
  public set connectionBandwidthInMbps(value: number) {
    this._connectionBandwidthInMbps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionBandwidthInMbpsInput() {
    return this._connectionBandwidthInMbps;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // naas_provider - computed: false, optional: false, required: true
  private _naasProvider?: string; 
  public get naasProvider() {
    return this.getStringAttribute('naas_provider');
  }
  public set naasProvider(value: string) {
    this._naasProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get naasProviderInput() {
    return this._naasProvider;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vpc_ids - computed: false, optional: false, required: true
  private _vpcIds?: string[]; 
  public get vpcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_ids'));
  }
  public set vpcIds(value: string[]) {
    this._vpcIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdsInput() {
    return this._vpcIds;
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new PartnerAttachmentBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: PartnerAttachmentBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PartnerAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PartnerAttachmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_bandwidth_in_mbps: cdktf.numberToTerraform(this._connectionBandwidthInMbps),
      naas_provider: cdktf.stringToTerraform(this._naasProvider),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcIds),
      bgp: partnerAttachmentBgpToTerraform(this._bgp.internalValue),
      timeouts: partnerAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_bandwidth_in_mbps: {
        value: cdktf.numberToHclTerraform(this._connectionBandwidthInMbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      naas_provider: {
        value: cdktf.stringToHclTerraform(this._naasProvider),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bgp: {
        value: partnerAttachmentBgpToHclTerraform(this._bgp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PartnerAttachmentBgpList",
      },
      timeouts: {
        value: partnerAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PartnerAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
