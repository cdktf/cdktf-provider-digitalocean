// https://www.terraform.io/docs/providers/digitalocean/d/tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * name of the tag
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/tag#name DataDigitaloceanTag#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/digitalocean/d/tag digitalocean_tag}
*/
export class DataDigitaloceanTag extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_tag";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/digitalocean/d/tag digitalocean_tag} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanTagConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanTagConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_tag',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // databases_count - computed: true, optional: false, required: false
  public get databasesCount() {
    return this.getNumberAttribute('databases_count');
  }

  // droplets_count - computed: true, optional: false, required: false
  public get dropletsCount() {
    return this.getNumberAttribute('droplets_count');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // images_count - computed: true, optional: false, required: false
  public get imagesCount() {
    return this.getNumberAttribute('images_count');
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

  // total_resource_count - computed: true, optional: false, required: false
  public get totalResourceCount() {
    return this.getNumberAttribute('total_resource_count');
  }

  // volume_snapshots_count - computed: true, optional: false, required: false
  public get volumeSnapshotsCount() {
    return this.getNumberAttribute('volume_snapshots_count');
  }

  // volumes_count - computed: true, optional: false, required: false
  public get volumesCount() {
    return this.getNumberAttribute('volumes_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
