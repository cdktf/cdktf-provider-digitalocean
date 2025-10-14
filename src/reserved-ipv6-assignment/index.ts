/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/reserved_ipv6_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReservedIpv6AssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/reserved_ipv6_assignment#droplet_id ReservedIpv6Assignment#droplet_id}
  */
  readonly dropletId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/reserved_ipv6_assignment#id ReservedIpv6Assignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/reserved_ipv6_assignment#ip ReservedIpv6Assignment#ip}
  */
  readonly ip: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/reserved_ipv6_assignment digitalocean_reserved_ipv6_assignment}
*/
export class ReservedIpv6Assignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_reserved_ipv6_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReservedIpv6Assignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReservedIpv6Assignment to import
  * @param importFromId The id of the existing ReservedIpv6Assignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/reserved_ipv6_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReservedIpv6Assignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_reserved_ipv6_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/reserved_ipv6_assignment digitalocean_reserved_ipv6_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReservedIpv6AssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: ReservedIpv6AssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_reserved_ipv6_assignment',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.68.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // droplet_id - computed: false, optional: false, required: true
  private _dropletId?: number; 
  public get dropletId() {
    return this.getNumberAttribute('droplet_id');
  }
  public set dropletId(value: number) {
    this._dropletId = value;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      droplet_id: cdktf.numberToTerraform(this._dropletId),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
