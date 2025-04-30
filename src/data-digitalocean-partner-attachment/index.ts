// https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/data-sources/partner_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanPartnerAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Partner Attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/data-sources/partner_attachment#id DataDigitaloceanPartnerAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Partner Attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/data-sources/partner_attachment#name DataDigitaloceanPartnerAttachment#name}
  */
  readonly name?: string;
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/data-sources/partner_attachment#bgp DataDigitaloceanPartnerAttachment#bgp}
  */
  readonly bgp?: DataDigitaloceanPartnerAttachmentBgp;
}
export interface DataDigitaloceanPartnerAttachmentBgp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/data-sources/partner_attachment#local_router_ip DataDigitaloceanPartnerAttachment#local_router_ip}
  */
  readonly localRouterIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/data-sources/partner_attachment#peer_router_asn DataDigitaloceanPartnerAttachment#peer_router_asn}
  */
  readonly peerRouterAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/data-sources/partner_attachment#peer_router_ip DataDigitaloceanPartnerAttachment#peer_router_ip}
  */
  readonly peerRouterIp?: string;
}

export function dataDigitaloceanPartnerAttachmentBgpToTerraform(struct?: DataDigitaloceanPartnerAttachmentBgpOutputReference | DataDigitaloceanPartnerAttachmentBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_router_ip: cdktf.stringToTerraform(struct!.localRouterIp),
    peer_router_asn: cdktf.numberToTerraform(struct!.peerRouterAsn),
    peer_router_ip: cdktf.stringToTerraform(struct!.peerRouterIp),
  }
}


export function dataDigitaloceanPartnerAttachmentBgpToHclTerraform(struct?: DataDigitaloceanPartnerAttachmentBgpOutputReference | DataDigitaloceanPartnerAttachmentBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataDigitaloceanPartnerAttachmentBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDigitaloceanPartnerAttachmentBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataDigitaloceanPartnerAttachmentBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localRouterIp = undefined;
      this._peerRouterAsn = undefined;
      this._peerRouterIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localRouterIp = value.localRouterIp;
      this._peerRouterAsn = value.peerRouterAsn;
      this._peerRouterIp = value.peerRouterIp;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/data-sources/partner_attachment digitalocean_partner_attachment}
*/
export class DataDigitaloceanPartnerAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_partner_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanPartnerAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanPartnerAttachment to import
  * @param importFromId The id of the existing DataDigitaloceanPartnerAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/data-sources/partner_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanPartnerAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_partner_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/data-sources/partner_attachment digitalocean_partner_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanPartnerAttachmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanPartnerAttachmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_partner_attachment',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.52.0',
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
    this._id = config.id;
    this._name = config.name;
    this._bgp.internalValue = config.bgp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_bandwidth_in_mbps - computed: true, optional: false, required: false
  public get connectionBandwidthInMbps() {
    return this.getNumberAttribute('connection_bandwidth_in_mbps');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // naas_provider - computed: true, optional: false, required: false
  public get naasProvider() {
    return this.getStringAttribute('naas_provider');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vpc_ids - computed: true, optional: false, required: false
  public get vpcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_ids'));
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new DataDigitaloceanPartnerAttachmentBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: DataDigitaloceanPartnerAttachmentBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      bgp: dataDigitaloceanPartnerAttachmentBgpToTerraform(this._bgp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      bgp: {
        value: dataDigitaloceanPartnerAttachmentBgpToHclTerraform(this._bgp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanPartnerAttachmentBgpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
