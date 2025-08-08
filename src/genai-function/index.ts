/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenaiFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the GenAI resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function#agent_id GenaiFunction#agent_id}
  */
  readonly agentId: string;
  /**
  * The region where the GenAI resource will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function#description GenaiFunction#description}
  */
  readonly description: string;
  /**
  * The model to use for the GenAI resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function#faas_name GenaiFunction#faas_name}
  */
  readonly faasName?: string;
  /**
  * The current status of the GenAI resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function#faas_namespace GenaiFunction#faas_namespace}
  */
  readonly faasNamespace: string;
  /**
  * The creation timestamp of the GenAI resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function#function_name GenaiFunction#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function#id GenaiFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The input schema of the GenAI resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function#input_schema GenaiFunction#input_schema}
  */
  readonly inputSchema: string;
  /**
  * The output schema of the GenAI resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function#output_schema GenaiFunction#output_schema}
  */
  readonly outputSchema?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function digitalocean_genai_function}
*/
export class GenaiFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenaiFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenaiFunction to import
  * @param importFromId The id of the existing GenaiFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenaiFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.63.0/docs/resources/genai_function digitalocean_genai_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenaiFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: GenaiFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_function',
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
    this._agentId = config.agentId;
    this._description = config.description;
    this._faasName = config.faasName;
    this._faasNamespace = config.faasNamespace;
    this._functionName = config.functionName;
    this._id = config.id;
    this._inputSchema = config.inputSchema;
    this._outputSchema = config.outputSchema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // faas_name - computed: false, optional: true, required: false
  private _faasName?: string; 
  public get faasName() {
    return this.getStringAttribute('faas_name');
  }
  public set faasName(value: string) {
    this._faasName = value;
  }
  public resetFaasName() {
    this._faasName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faasNameInput() {
    return this._faasName;
  }

  // faas_namespace - computed: false, optional: false, required: true
  private _faasNamespace?: string; 
  public get faasNamespace() {
    return this.getStringAttribute('faas_namespace');
  }
  public set faasNamespace(value: string) {
    this._faasNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get faasNamespaceInput() {
    return this._faasNamespace;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // function_uuid - computed: true, optional: false, required: false
  public get functionUuid() {
    return this.getStringAttribute('function_uuid');
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

  // input_schema - computed: false, optional: false, required: true
  private _inputSchema?: string; 
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string) {
    this._inputSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema;
  }

  // output_schema - computed: false, optional: true, required: false
  private _outputSchema?: string; 
  public get outputSchema() {
    return this.getStringAttribute('output_schema');
  }
  public set outputSchema(value: string) {
    this._outputSchema = value;
  }
  public resetOutputSchema() {
    this._outputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaInput() {
    return this._outputSchema;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      description: cdktf.stringToTerraform(this._description),
      faas_name: cdktf.stringToTerraform(this._faasName),
      faas_namespace: cdktf.stringToTerraform(this._faasNamespace),
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      input_schema: cdktf.stringToTerraform(this._inputSchema),
      output_schema: cdktf.stringToTerraform(this._outputSchema),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faas_name: {
        value: cdktf.stringToHclTerraform(this._faasName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faas_namespace: {
        value: cdktf.stringToHclTerraform(this._faasNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
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
      input_schema: {
        value: cdktf.stringToHclTerraform(this._inputSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_schema: {
        value: cdktf.stringToHclTerraform(this._outputSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
