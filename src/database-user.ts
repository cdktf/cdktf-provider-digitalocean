// https://www.terraform.io/docs/providers/digitalocean/r/database_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/database_user#cluster_id DatabaseUser#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/database_user#mysql_auth_plugin DatabaseUser#mysql_auth_plugin}
  */
  readonly mysqlAuthPlugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/database_user#name DatabaseUser#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/digitalocean/r/database_user digitalocean_database_user}
*/
export class DatabaseUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/digitalocean/r/database_user digitalocean_database_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseUserConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseUserConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_user',
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
    this._clusterId = config.clusterId;
    this._mysqlAuthPlugin = config.mysqlAuthPlugin;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mysql_auth_plugin - computed: false, optional: true, required: false
  private _mysqlAuthPlugin?: string; 
  public get mysqlAuthPlugin() {
    return this.getStringAttribute('mysql_auth_plugin');
  }
  public set mysqlAuthPlugin(value: string) {
    this._mysqlAuthPlugin = value;
  }
  public resetMysqlAuthPlugin() {
    this._mysqlAuthPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlAuthPluginInput() {
    return this._mysqlAuthPlugin;
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      mysql_auth_plugin: cdktf.stringToTerraform(this._mysqlAuthPlugin),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
