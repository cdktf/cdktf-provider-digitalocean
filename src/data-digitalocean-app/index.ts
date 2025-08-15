/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { DataDigitaloceanAppSpecList, 
DataDigitaloceanAppDedicatedIps, 
dataDigitaloceanAppDedicatedIpsToTerraform, 
dataDigitaloceanAppDedicatedIpsToHclTerraform, 
DataDigitaloceanAppDedicatedIpsList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataDigitaloceanAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/app#app_id DataDigitaloceanApp#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/app#id DataDigitaloceanApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * dedicated_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/app#dedicated_ips DataDigitaloceanApp#dedicated_ips}
  */
  readonly dedicatedIps?: DataDigitaloceanAppDedicatedIps[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/app digitalocean_app}
*/
export class DataDigitaloceanApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanApp to import
  * @param importFromId The id of the existing DataDigitaloceanApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/app digitalocean_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanAppConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_app',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.65.0',
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
    this._appId = config.appId;
    this._id = config.id;
    this._dedicatedIps.internalValue = config.dedicatedIps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_deployment_id - computed: true, optional: false, required: false
  public get activeDeploymentId() {
    return this.getStringAttribute('active_deployment_id');
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_ingress - computed: true, optional: false, required: false
  public get defaultIngress() {
    return this.getStringAttribute('default_ingress');
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

  // live_domain - computed: true, optional: false, required: false
  public get liveDomain() {
    return this.getStringAttribute('live_domain');
  }

  // live_url - computed: true, optional: false, required: false
  public get liveUrl() {
    return this.getStringAttribute('live_url');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataDigitaloceanAppSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }

  // dedicated_ips - computed: false, optional: true, required: false
  private _dedicatedIps = new DataDigitaloceanAppDedicatedIpsList(this, "dedicated_ips", false);
  public get dedicatedIps() {
    return this._dedicatedIps;
  }
  public putDedicatedIps(value: DataDigitaloceanAppDedicatedIps[] | cdktf.IResolvable) {
    this._dedicatedIps.internalValue = value;
  }
  public resetDedicatedIps() {
    this._dedicatedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedIpsInput() {
    return this._dedicatedIps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      dedicated_ips: cdktf.listMapper(dataDigitaloceanAppDedicatedIpsToTerraform, true)(this._dedicatedIps.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
      dedicated_ips: {
        value: cdktf.listMapperHcl(dataDigitaloceanAppDedicatedIpsToHclTerraform, true)(this._dedicatedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanAppDedicatedIpsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
