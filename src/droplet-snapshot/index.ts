// https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/droplet_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DropletSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/droplet_snapshot#droplet_id DropletSnapshot#droplet_id}
  */
  readonly dropletId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/droplet_snapshot#id DropletSnapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/droplet_snapshot#name DropletSnapshot#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/droplet_snapshot digitalocean_droplet_snapshot}
*/
export class DropletSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_droplet_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DropletSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DropletSnapshot to import
  * @param importFromId The id of the existing DropletSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/droplet_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DropletSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_droplet_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.43.0/docs/resources/droplet_snapshot digitalocean_droplet_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DropletSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: DropletSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_droplet_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.43.0',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // droplet_id - computed: false, optional: false, required: true
  private _dropletId?: string; 
  public get dropletId() {
    return this.getStringAttribute('droplet_id');
  }
  public set dropletId(value: string) {
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

  // min_disk_size - computed: true, optional: false, required: false
  public get minDiskSize() {
    return this.getNumberAttribute('min_disk_size');
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

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      droplet_id: cdktf.stringToTerraform(this._dropletId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      droplet_id: {
        value: cdktf.stringToHclTerraform(this._dropletId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
