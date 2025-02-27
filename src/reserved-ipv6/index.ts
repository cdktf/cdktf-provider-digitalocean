// https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/reserved_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReservedIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/reserved_ipv6#droplet_id ReservedIpv6#droplet_id}
  */
  readonly dropletId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/reserved_ipv6#id ReservedIpv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/reserved_ipv6#ip ReservedIpv6#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/reserved_ipv6#region_slug ReservedIpv6#region_slug}
  */
  readonly regionSlug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/reserved_ipv6 digitalocean_reserved_ipv6}
*/
export class ReservedIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_reserved_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReservedIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReservedIpv6 to import
  * @param importFromId The id of the existing ReservedIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/reserved_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReservedIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_reserved_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.1/docs/resources/reserved_ipv6 digitalocean_reserved_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReservedIpv6Config
  */
  public constructor(scope: Construct, id: string, config: ReservedIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_reserved_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.49.1',
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
    this._dropletId = config.dropletId;
    this._id = config.id;
    this._ip = config.ip;
    this._regionSlug = config.regionSlug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // droplet_id - computed: true, optional: true, required: false
  private _dropletId?: number; 
  public get dropletId() {
    return this.getNumberAttribute('droplet_id');
  }
  public set dropletId(value: number) {
    this._dropletId = value;
  }
  public resetDropletId() {
    this._dropletId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropletIdInput() {
    return this._dropletId;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // region_slug - computed: false, optional: false, required: true
  private _regionSlug?: string; 
  public get regionSlug() {
    return this.getStringAttribute('region_slug');
  }
  public set regionSlug(value: string) {
    this._regionSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionSlugInput() {
    return this._regionSlug;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      droplet_id: cdktf.numberToTerraform(this._dropletId),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      region_slug: cdktf.stringToTerraform(this._regionSlug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      droplet_id: {
        value: cdktf.numberToHclTerraform(this._dropletId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_slug: {
        value: cdktf.stringToHclTerraform(this._regionSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
