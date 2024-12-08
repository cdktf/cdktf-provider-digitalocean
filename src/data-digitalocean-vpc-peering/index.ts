// https://registry.terraform.io/providers/digitalocean/digitalocean/2.45.0/docs/data-sources/vpc_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanVpcPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the VPC Peering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.45.0/docs/data-sources/vpc_peering#id DataDigitaloceanVpcPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the VPC Peering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.45.0/docs/data-sources/vpc_peering#name DataDigitaloceanVpcPeering#name}
  */
  readonly name?: string;
  /**
  * The list of VPCs to be peered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.45.0/docs/data-sources/vpc_peering#vpc_ids DataDigitaloceanVpcPeering#vpc_ids}
  */
  readonly vpcIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.45.0/docs/data-sources/vpc_peering digitalocean_vpc_peering}
*/
export class DataDigitaloceanVpcPeering extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_vpc_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanVpcPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanVpcPeering to import
  * @param importFromId The id of the existing DataDigitaloceanVpcPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.45.0/docs/data-sources/vpc_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanVpcPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_vpc_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.45.0/docs/data-sources/vpc_peering digitalocean_vpc_peering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanVpcPeeringConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanVpcPeeringConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_vpc_peering',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.45.0',
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
    this._vpcIds = config.vpcIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_ids - computed: true, optional: true, required: false
  private _vpcIds?: string[]; 
  public get vpcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_ids'));
  }
  public set vpcIds(value: string[]) {
    this._vpcIds = value;
  }
  public resetVpcIds() {
    this._vpcIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdsInput() {
    return this._vpcIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcIds),
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
      vpc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
