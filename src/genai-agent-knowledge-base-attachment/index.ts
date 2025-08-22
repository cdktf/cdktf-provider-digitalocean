/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenaiAgentKnowledgeBaseAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for an agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment#agent_uuid GenaiAgentKnowledgeBaseAttachment#agent_uuid}
  */
  readonly agentUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment#id GenaiAgentKnowledgeBaseAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique identifier for a knowledge base.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment#knowledge_base_uuid GenaiAgentKnowledgeBaseAttachment#knowledge_base_uuid}
  */
  readonly knowledgeBaseUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment digitalocean_genai_agent_knowledge_base_attachment}
*/
export class GenaiAgentKnowledgeBaseAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_agent_knowledge_base_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenaiAgentKnowledgeBaseAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenaiAgentKnowledgeBaseAttachment to import
  * @param importFromId The id of the existing GenaiAgentKnowledgeBaseAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenaiAgentKnowledgeBaseAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_agent_knowledge_base_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment digitalocean_genai_agent_knowledge_base_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenaiAgentKnowledgeBaseAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: GenaiAgentKnowledgeBaseAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_agent_knowledge_base_attachment',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.66.0',
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
    this._agentUuid = config.agentUuid;
    this._id = config.id;
    this._knowledgeBaseUuid = config.knowledgeBaseUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_uuid - computed: false, optional: false, required: true
  private _agentUuid?: string; 
  public get agentUuid() {
    return this.getStringAttribute('agent_uuid');
  }
  public set agentUuid(value: string) {
    this._agentUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentUuidInput() {
    return this._agentUuid;
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

  // knowledge_base_uuid - computed: false, optional: false, required: true
  private _knowledgeBaseUuid?: string; 
  public get knowledgeBaseUuid() {
    return this.getStringAttribute('knowledge_base_uuid');
  }
  public set knowledgeBaseUuid(value: string) {
    this._knowledgeBaseUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseUuidInput() {
    return this._knowledgeBaseUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_uuid: cdktf.stringToTerraform(this._agentUuid),
      id: cdktf.stringToTerraform(this._id),
      knowledge_base_uuid: cdktf.stringToTerraform(this._knowledgeBaseUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_uuid: {
        value: cdktf.stringToHclTerraform(this._agentUuid),
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
      knowledge_base_uuid: {
        value: cdktf.stringToHclTerraform(this._knowledgeBaseUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
