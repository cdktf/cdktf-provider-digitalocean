/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenaiAgentRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the child agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#child_agent_uuid GenaiAgentRoute#child_agent_uuid}
  */
  readonly childAgentUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#id GenaiAgentRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * if-case condition for the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#if_case GenaiAgentRoute#if_case}
  */
  readonly ifCase?: string;
  /**
  * The UUID of the parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#parent_agent_uuid GenaiAgentRoute#parent_agent_uuid}
  */
  readonly parentAgentUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#rollback GenaiAgentRoute#rollback}
  */
  readonly rollback?: boolean | cdktf.IResolvable;
  /**
  * A name for the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#route_name GenaiAgentRoute#route_name}
  */
  readonly routeName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route digitalocean_genai_agent_route}
*/
export class GenaiAgentRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_agent_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenaiAgentRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenaiAgentRoute to import
  * @param importFromId The id of the existing GenaiAgentRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenaiAgentRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_agent_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_agent_route digitalocean_genai_agent_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenaiAgentRouteConfig
  */
  public constructor(scope: Construct, id: string, config: GenaiAgentRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_agent_route',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.63.0',
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
    this._childAgentUuid = config.childAgentUuid;
    this._id = config.id;
    this._ifCase = config.ifCase;
    this._parentAgentUuid = config.parentAgentUuid;
    this._rollback = config.rollback;
    this._routeName = config.routeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_agent_uuid - computed: false, optional: false, required: true
  private _childAgentUuid?: string; 
  public get childAgentUuid() {
    return this.getStringAttribute('child_agent_uuid');
  }
  public set childAgentUuid(value: string) {
    this._childAgentUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childAgentUuidInput() {
    return this._childAgentUuid;
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

  // if_case - computed: false, optional: true, required: false
  private _ifCase?: string; 
  public get ifCase() {
    return this.getStringAttribute('if_case');
  }
  public set ifCase(value: string) {
    this._ifCase = value;
  }
  public resetIfCase() {
    this._ifCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifCaseInput() {
    return this._ifCase;
  }

  // parent_agent_uuid - computed: false, optional: false, required: true
  private _parentAgentUuid?: string; 
  public get parentAgentUuid() {
    return this.getStringAttribute('parent_agent_uuid');
  }
  public set parentAgentUuid(value: string) {
    this._parentAgentUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentAgentUuidInput() {
    return this._parentAgentUuid;
  }

  // rollback - computed: false, optional: true, required: false
  private _rollback?: boolean | cdktf.IResolvable; 
  public get rollback() {
    return this.getBooleanAttribute('rollback');
  }
  public set rollback(value: boolean | cdktf.IResolvable) {
    this._rollback = value;
  }
  public resetRollback() {
    this._rollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackInput() {
    return this._rollback;
  }

  // route_name - computed: false, optional: true, required: false
  private _routeName?: string; 
  public get routeName() {
    return this.getStringAttribute('route_name');
  }
  public set routeName(value: string) {
    this._routeName = value;
  }
  public resetRouteName() {
    this._routeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeNameInput() {
    return this._routeName;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      child_agent_uuid: cdktf.stringToTerraform(this._childAgentUuid),
      id: cdktf.stringToTerraform(this._id),
      if_case: cdktf.stringToTerraform(this._ifCase),
      parent_agent_uuid: cdktf.stringToTerraform(this._parentAgentUuid),
      rollback: cdktf.booleanToTerraform(this._rollback),
      route_name: cdktf.stringToTerraform(this._routeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_agent_uuid: {
        value: cdktf.stringToHclTerraform(this._childAgentUuid),
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
      if_case: {
        value: cdktf.stringToHclTerraform(this._ifCase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_agent_uuid: {
        value: cdktf.stringToHclTerraform(this._parentAgentUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollback: {
        value: cdktf.booleanToHclTerraform(this._rollback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_name: {
        value: cdktf.stringToHclTerraform(this._routeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
