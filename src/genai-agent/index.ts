/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenaiAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional Anthropic API key ID to use with Anthropic models
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#anthropic_key_uuid GenaiAgent#anthropic_key_uuid}
  */
  readonly anthropicKeyUuid?: string;
  /**
  * Timestamp when the Agent was created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#created_at GenaiAgent#created_at}
  */
  readonly createdAt?: string;
  /**
  * Description for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#description GenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#id GenaiAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If case condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#if_case GenaiAgent#if_case}
  */
  readonly ifCase?: string;
  /**
  * Instruction for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#instruction GenaiAgent#instruction}
  */
  readonly instruction: string;
  /**
  * K value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#k GenaiAgent#k}
  */
  readonly k?: number;
  /**
  * Ids of the knowledge base(s) to attach to the agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#knowledge_base_uuid GenaiAgent#knowledge_base_uuid}
  */
  readonly knowledgeBaseUuid?: string[];
  /**
  * Maximum tokens allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#max_tokens GenaiAgent#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Model UUID of the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#model_uuid GenaiAgent#model_uuid}
  */
  readonly modelUuid: string;
  /**
  * Name of the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name: string;
  /**
  * Optional OpenAI API key ID to use with OpenAI models
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#open_ai_key_uuid GenaiAgent#open_ai_key_uuid}
  */
  readonly openAiKeyUuid?: string;
  /**
  * Project ID of the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#project_id GenaiAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Indicates if the agent should provide citations in responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#provide_citations GenaiAgent#provide_citations}
  */
  readonly provideCitations?: boolean | cdktf.IResolvable;
  /**
  * Region where the Agent is deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#region GenaiAgent#region}
  */
  readonly region: string;
  /**
  * Retrieval method used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#retrieval_method GenaiAgent#retrieval_method}
  */
  readonly retrievalMethod?: string;
  /**
  * User who created the route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#route_created_by GenaiAgent#route_created_by}
  */
  readonly routeCreatedBy?: string;
  /**
  * Route name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#route_name GenaiAgent#route_name}
  */
  readonly routeName?: string;
  /**
  * Route UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#route_uuid GenaiAgent#route_uuid}
  */
  readonly routeUuid?: string;
  /**
  * List of Tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#tags GenaiAgent#tags}
  */
  readonly tags?: string[];
  /**
  * Agent temperature setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#temperature GenaiAgent#temperature}
  */
  readonly temperature?: number;
  /**
  * Top P sampling parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#top_p GenaiAgent#top_p}
  */
  readonly topP?: number;
  /**
  * URL for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#url GenaiAgent#url}
  */
  readonly url?: string;
  /**
  * User ID linked with the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#user_id GenaiAgent#user_id}
  */
  readonly userId?: string;
  /**
  * agent_guardrail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#agent_guardrail GenaiAgent#agent_guardrail}
  */
  readonly agentGuardrail?: GenaiAgentAgentGuardrail[] | cdktf.IResolvable;
  /**
  * anthropic_api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#anthropic_api_key GenaiAgent#anthropic_api_key}
  */
  readonly anthropicApiKey?: GenaiAgentAnthropicApiKey[] | cdktf.IResolvable;
  /**
  * api_key_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#api_key_infos GenaiAgent#api_key_infos}
  */
  readonly apiKeyInfos?: GenaiAgentApiKeyInfos[] | cdktf.IResolvable;
  /**
  * api_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#api_keys GenaiAgent#api_keys}
  */
  readonly apiKeys?: GenaiAgentApiKeys[] | cdktf.IResolvable;
  /**
  * chatbot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#chatbot GenaiAgent#chatbot}
  */
  readonly chatbot?: GenaiAgentChatbot[] | cdktf.IResolvable;
  /**
  * chatbot_identifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#chatbot_identifiers GenaiAgent#chatbot_identifiers}
  */
  readonly chatbotIdentifiers?: GenaiAgentChatbotIdentifiers[] | cdktf.IResolvable;
  /**
  * child_agents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#child_agents GenaiAgent#child_agents}
  */
  readonly childAgents?: GenaiAgentChildAgents[] | cdktf.IResolvable;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#deployment GenaiAgent#deployment}
  */
  readonly deployment?: GenaiAgentDeployment[] | cdktf.IResolvable;
  /**
  * functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#functions GenaiAgent#functions}
  */
  readonly functions?: GenaiAgentFunctions[] | cdktf.IResolvable;
  /**
  * knowledge_bases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#knowledge_bases GenaiAgent#knowledge_bases}
  */
  readonly knowledgeBases?: GenaiAgentKnowledgeBases[] | cdktf.IResolvable;
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#model GenaiAgent#model}
  */
  readonly model?: GenaiAgentModel[] | cdktf.IResolvable;
  /**
  * open_ai_api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#open_ai_api_key GenaiAgent#open_ai_api_key}
  */
  readonly openAiApiKey?: GenaiAgentOpenAiApiKey[] | cdktf.IResolvable;
  /**
  * parent_agents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#parent_agents GenaiAgent#parent_agents}
  */
  readonly parentAgents?: GenaiAgentParentAgents[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#template GenaiAgent#template}
  */
  readonly template?: GenaiAgentTemplate[] | cdktf.IResolvable;
}
export interface GenaiAgentAgentGuardrail {
  /**
  * Agent UUID for the Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#agent_uuid GenaiAgent#agent_uuid}
  */
  readonly agentUuid?: string;
  /**
  * Default response for the Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#default_response GenaiAgent#default_response}
  */
  readonly defaultResponse?: string;
  /**
  * Description of the Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#description GenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Guardrail UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#guardrail_uuid GenaiAgent#guardrail_uuid}
  */
  readonly guardrailUuid?: string;
  /**
  * Indicates if the Guardrail is default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#is_default GenaiAgent#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Name of Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Priority of the Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#priority GenaiAgent#priority}
  */
  readonly priority?: number;
  /**
  * Type of the Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#type GenaiAgent#type}
  */
  readonly type?: string;
  /**
  * Guardrail UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentAgentGuardrailToTerraform(struct?: GenaiAgentAgentGuardrail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_uuid: cdktf.stringToTerraform(struct!.agentUuid),
    default_response: cdktf.stringToTerraform(struct!.defaultResponse),
    description: cdktf.stringToTerraform(struct!.description),
    guardrail_uuid: cdktf.stringToTerraform(struct!.guardrailUuid),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentAgentGuardrailToHclTerraform(struct?: GenaiAgentAgentGuardrail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_uuid: {
      value: cdktf.stringToHclTerraform(struct!.agentUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_response: {
      value: cdktf.stringToHclTerraform(struct!.defaultResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guardrail_uuid: {
      value: cdktf.stringToHclTerraform(struct!.guardrailUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentAgentGuardrailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentAgentGuardrail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentUuid = this._agentUuid;
    }
    if (this._defaultResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResponse = this._defaultResponse;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._guardrailUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailUuid = this._guardrailUuid;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentAgentGuardrail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentUuid = undefined;
      this._defaultResponse = undefined;
      this._description = undefined;
      this._guardrailUuid = undefined;
      this._isDefault = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentUuid = value.agentUuid;
      this._defaultResponse = value.defaultResponse;
      this._description = value.description;
      this._guardrailUuid = value.guardrailUuid;
      this._isDefault = value.isDefault;
      this._name = value.name;
      this._priority = value.priority;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // agent_uuid - computed: false, optional: true, required: false
  private _agentUuid?: string; 
  public get agentUuid() {
    return this.getStringAttribute('agent_uuid');
  }
  public set agentUuid(value: string) {
    this._agentUuid = value;
  }
  public resetAgentUuid() {
    this._agentUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentUuidInput() {
    return this._agentUuid;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_response - computed: false, optional: true, required: false
  private _defaultResponse?: string; 
  public get defaultResponse() {
    return this.getStringAttribute('default_response');
  }
  public set defaultResponse(value: string) {
    this._defaultResponse = value;
  }
  public resetDefaultResponse() {
    this._defaultResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResponseInput() {
    return this._defaultResponse;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // guardrail_uuid - computed: false, optional: true, required: false
  private _guardrailUuid?: string; 
  public get guardrailUuid() {
    return this.getStringAttribute('guardrail_uuid');
  }
  public set guardrailUuid(value: string) {
    this._guardrailUuid = value;
  }
  public resetGuardrailUuid() {
    this._guardrailUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailUuidInput() {
    return this._guardrailUuid;
  }

  // is_attached - computed: true, optional: false, required: false
  public get isAttached() {
    return this.getBooleanAttribute('is_attached');
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // name - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GenaiAgentAgentGuardrailList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentAgentGuardrail[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentAgentGuardrailOutputReference {
    return new GenaiAgentAgentGuardrailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentAnthropicApiKey {
  /**
  * Created By user ID for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#created_by GenaiAgent#created_by}
  */
  readonly createdBy?: string;
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentAnthropicApiKeyToTerraform(struct?: GenaiAgentAnthropicApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentAnthropicApiKeyToHclTerraform(struct?: GenaiAgentAnthropicApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentAnthropicApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentAnthropicApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentAnthropicApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBy = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBy = value.createdBy;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // name - computed: false, optional: true, required: false
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GenaiAgentAnthropicApiKeyList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentAnthropicApiKey[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentAnthropicApiKeyOutputReference {
    return new GenaiAgentAnthropicApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentApiKeyInfos {
  /**
  * Created By user ID for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#created_by GenaiAgent#created_by}
  */
  readonly createdBy?: string;
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Updated At timestamp for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#secret_key GenaiAgent#secret_key}
  */
  readonly secretKey?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentApiKeyInfosToTerraform(struct?: GenaiAgentApiKeyInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    name: cdktf.stringToTerraform(struct!.name),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentApiKeyInfosToHclTerraform(struct?: GenaiAgentApiKeyInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentApiKeyInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentApiKeyInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentApiKeyInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBy = undefined;
      this._name = undefined;
      this._secretKey = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBy = value.createdBy;
      this._name = value.name;
      this._secretKey = value.secretKey;
      this._uuid = value.uuid;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // name - computed: false, optional: true, required: false
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

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GenaiAgentApiKeyInfosList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentApiKeyInfos[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentApiKeyInfosOutputReference {
    return new GenaiAgentApiKeyInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentApiKeys {
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#api_key GenaiAgent#api_key}
  */
  readonly apiKey?: string;
}

export function genaiAgentApiKeysToTerraform(struct?: GenaiAgentApiKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function genaiAgentApiKeysToHclTerraform(struct?: GenaiAgentApiKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentApiKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentApiKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentApiKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}

export class GenaiAgentApiKeysList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentApiKeys[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentApiKeysOutputReference {
    return new GenaiAgentApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentChatbot {
  /**
  * Background color for the chatbot button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#button_background_color GenaiAgent#button_background_color}
  */
  readonly buttonBackgroundColor?: string;
  /**
  * Logo for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#logo GenaiAgent#logo}
  */
  readonly logo?: string;
  /**
  * Name of the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Primary color for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#primary_color GenaiAgent#primary_color}
  */
  readonly primaryColor?: string;
  /**
  * Secondary color for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#secondary_color GenaiAgent#secondary_color}
  */
  readonly secondaryColor?: string;
  /**
  * Starting message for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#starting_message GenaiAgent#starting_message}
  */
  readonly startingMessage?: string;
}

export function genaiAgentChatbotToTerraform(struct?: GenaiAgentChatbot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    button_background_color: cdktf.stringToTerraform(struct!.buttonBackgroundColor),
    logo: cdktf.stringToTerraform(struct!.logo),
    name: cdktf.stringToTerraform(struct!.name),
    primary_color: cdktf.stringToTerraform(struct!.primaryColor),
    secondary_color: cdktf.stringToTerraform(struct!.secondaryColor),
    starting_message: cdktf.stringToTerraform(struct!.startingMessage),
  }
}


export function genaiAgentChatbotToHclTerraform(struct?: GenaiAgentChatbot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    button_background_color: {
      value: cdktf.stringToHclTerraform(struct!.buttonBackgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo: {
      value: cdktf.stringToHclTerraform(struct!.logo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_color: {
      value: cdktf.stringToHclTerraform(struct!.primaryColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_color: {
      value: cdktf.stringToHclTerraform(struct!.secondaryColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_message: {
      value: cdktf.stringToHclTerraform(struct!.startingMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentChatbotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentChatbot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonBackgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonBackgroundColor = this._buttonBackgroundColor;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryColor = this._primaryColor;
    }
    if (this._secondaryColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryColor = this._secondaryColor;
    }
    if (this._startingMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingMessage = this._startingMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentChatbot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonBackgroundColor = undefined;
      this._logo = undefined;
      this._name = undefined;
      this._primaryColor = undefined;
      this._secondaryColor = undefined;
      this._startingMessage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonBackgroundColor = value.buttonBackgroundColor;
      this._logo = value.logo;
      this._name = value.name;
      this._primaryColor = value.primaryColor;
      this._secondaryColor = value.secondaryColor;
      this._startingMessage = value.startingMessage;
    }
  }

  // button_background_color - computed: false, optional: true, required: false
  private _buttonBackgroundColor?: string; 
  public get buttonBackgroundColor() {
    return this.getStringAttribute('button_background_color');
  }
  public set buttonBackgroundColor(value: string) {
    this._buttonBackgroundColor = value;
  }
  public resetButtonBackgroundColor() {
    this._buttonBackgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonBackgroundColorInput() {
    return this._buttonBackgroundColor;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // name - computed: false, optional: true, required: false
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

  // primary_color - computed: false, optional: true, required: false
  private _primaryColor?: string; 
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }
  public set primaryColor(value: string) {
    this._primaryColor = value;
  }
  public resetPrimaryColor() {
    this._primaryColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorInput() {
    return this._primaryColor;
  }

  // secondary_color - computed: false, optional: true, required: false
  private _secondaryColor?: string; 
  public get secondaryColor() {
    return this.getStringAttribute('secondary_color');
  }
  public set secondaryColor(value: string) {
    this._secondaryColor = value;
  }
  public resetSecondaryColor() {
    this._secondaryColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryColorInput() {
    return this._secondaryColor;
  }

  // starting_message - computed: false, optional: true, required: false
  private _startingMessage?: string; 
  public get startingMessage() {
    return this.getStringAttribute('starting_message');
  }
  public set startingMessage(value: string) {
    this._startingMessage = value;
  }
  public resetStartingMessage() {
    this._startingMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingMessageInput() {
    return this._startingMessage;
  }
}

export class GenaiAgentChatbotList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentChatbot[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentChatbotOutputReference {
    return new GenaiAgentChatbotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentChatbotIdentifiers {
}

export function genaiAgentChatbotIdentifiersToTerraform(struct?: GenaiAgentChatbotIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function genaiAgentChatbotIdentifiersToHclTerraform(struct?: GenaiAgentChatbotIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GenaiAgentChatbotIdentifiersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentChatbotIdentifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentChatbotIdentifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // chatbot_id - computed: true, optional: false, required: false
  public get chatbotId() {
    return this.getStringAttribute('chatbot_id');
  }
}

export class GenaiAgentChatbotIdentifiersList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentChatbotIdentifiers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentChatbotIdentifiersOutputReference {
    return new GenaiAgentChatbotIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentChildAgentsAnthropicApiKey {
  /**
  * Created By user ID for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#created_by GenaiAgent#created_by}
  */
  readonly createdBy?: string;
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentChildAgentsAnthropicApiKeyToTerraform(struct?: GenaiAgentChildAgentsAnthropicApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentChildAgentsAnthropicApiKeyToHclTerraform(struct?: GenaiAgentChildAgentsAnthropicApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentChildAgentsAnthropicApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentChildAgentsAnthropicApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentChildAgentsAnthropicApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBy = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBy = value.createdBy;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // name - computed: false, optional: true, required: false
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GenaiAgentChildAgentsAnthropicApiKeyList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentChildAgentsAnthropicApiKey[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentChildAgentsAnthropicApiKeyOutputReference {
    return new GenaiAgentChildAgentsAnthropicApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentChildAgentsApiKeyInfos {
  /**
  * Created By user ID for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#created_by GenaiAgent#created_by}
  */
  readonly createdBy?: string;
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Updated At timestamp for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#secret_key GenaiAgent#secret_key}
  */
  readonly secretKey?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentChildAgentsApiKeyInfosToTerraform(struct?: GenaiAgentChildAgentsApiKeyInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    name: cdktf.stringToTerraform(struct!.name),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentChildAgentsApiKeyInfosToHclTerraform(struct?: GenaiAgentChildAgentsApiKeyInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentChildAgentsApiKeyInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentChildAgentsApiKeyInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentChildAgentsApiKeyInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBy = undefined;
      this._name = undefined;
      this._secretKey = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBy = value.createdBy;
      this._name = value.name;
      this._secretKey = value.secretKey;
      this._uuid = value.uuid;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // name - computed: false, optional: true, required: false
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

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GenaiAgentChildAgentsApiKeyInfosList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentChildAgentsApiKeyInfos[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentChildAgentsApiKeyInfosOutputReference {
    return new GenaiAgentChildAgentsApiKeyInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentChildAgentsApiKeys {
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#api_key GenaiAgent#api_key}
  */
  readonly apiKey?: string;
}

export function genaiAgentChildAgentsApiKeysToTerraform(struct?: GenaiAgentChildAgentsApiKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function genaiAgentChildAgentsApiKeysToHclTerraform(struct?: GenaiAgentChildAgentsApiKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentChildAgentsApiKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentChildAgentsApiKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentChildAgentsApiKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}

export class GenaiAgentChildAgentsApiKeysList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentChildAgentsApiKeys[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentChildAgentsApiKeysOutputReference {
    return new GenaiAgentChildAgentsApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentChildAgentsChatbot {
  /**
  * Background color for the chatbot button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#button_background_color GenaiAgent#button_background_color}
  */
  readonly buttonBackgroundColor?: string;
  /**
  * Logo for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#logo GenaiAgent#logo}
  */
  readonly logo?: string;
  /**
  * Name of the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Primary color for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#primary_color GenaiAgent#primary_color}
  */
  readonly primaryColor?: string;
  /**
  * Secondary color for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#secondary_color GenaiAgent#secondary_color}
  */
  readonly secondaryColor?: string;
  /**
  * Starting message for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#starting_message GenaiAgent#starting_message}
  */
  readonly startingMessage?: string;
}

export function genaiAgentChildAgentsChatbotToTerraform(struct?: GenaiAgentChildAgentsChatbot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    button_background_color: cdktf.stringToTerraform(struct!.buttonBackgroundColor),
    logo: cdktf.stringToTerraform(struct!.logo),
    name: cdktf.stringToTerraform(struct!.name),
    primary_color: cdktf.stringToTerraform(struct!.primaryColor),
    secondary_color: cdktf.stringToTerraform(struct!.secondaryColor),
    starting_message: cdktf.stringToTerraform(struct!.startingMessage),
  }
}


export function genaiAgentChildAgentsChatbotToHclTerraform(struct?: GenaiAgentChildAgentsChatbot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    button_background_color: {
      value: cdktf.stringToHclTerraform(struct!.buttonBackgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo: {
      value: cdktf.stringToHclTerraform(struct!.logo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_color: {
      value: cdktf.stringToHclTerraform(struct!.primaryColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_color: {
      value: cdktf.stringToHclTerraform(struct!.secondaryColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_message: {
      value: cdktf.stringToHclTerraform(struct!.startingMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentChildAgentsChatbotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentChildAgentsChatbot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonBackgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonBackgroundColor = this._buttonBackgroundColor;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryColor = this._primaryColor;
    }
    if (this._secondaryColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryColor = this._secondaryColor;
    }
    if (this._startingMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingMessage = this._startingMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentChildAgentsChatbot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonBackgroundColor = undefined;
      this._logo = undefined;
      this._name = undefined;
      this._primaryColor = undefined;
      this._secondaryColor = undefined;
      this._startingMessage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonBackgroundColor = value.buttonBackgroundColor;
      this._logo = value.logo;
      this._name = value.name;
      this._primaryColor = value.primaryColor;
      this._secondaryColor = value.secondaryColor;
      this._startingMessage = value.startingMessage;
    }
  }

  // button_background_color - computed: false, optional: true, required: false
  private _buttonBackgroundColor?: string; 
  public get buttonBackgroundColor() {
    return this.getStringAttribute('button_background_color');
  }
  public set buttonBackgroundColor(value: string) {
    this._buttonBackgroundColor = value;
  }
  public resetButtonBackgroundColor() {
    this._buttonBackgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonBackgroundColorInput() {
    return this._buttonBackgroundColor;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // name - computed: false, optional: true, required: false
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

  // primary_color - computed: false, optional: true, required: false
  private _primaryColor?: string; 
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }
  public set primaryColor(value: string) {
    this._primaryColor = value;
  }
  public resetPrimaryColor() {
    this._primaryColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorInput() {
    return this._primaryColor;
  }

  // secondary_color - computed: false, optional: true, required: false
  private _secondaryColor?: string; 
  public get secondaryColor() {
    return this.getStringAttribute('secondary_color');
  }
  public set secondaryColor(value: string) {
    this._secondaryColor = value;
  }
  public resetSecondaryColor() {
    this._secondaryColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryColorInput() {
    return this._secondaryColor;
  }

  // starting_message - computed: false, optional: true, required: false
  private _startingMessage?: string; 
  public get startingMessage() {
    return this.getStringAttribute('starting_message');
  }
  public set startingMessage(value: string) {
    this._startingMessage = value;
  }
  public resetStartingMessage() {
    this._startingMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingMessageInput() {
    return this._startingMessage;
  }
}

export class GenaiAgentChildAgentsChatbotList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentChildAgentsChatbot[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentChildAgentsChatbotOutputReference {
    return new GenaiAgentChildAgentsChatbotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentChildAgentsChatbotIdentifiers {
}

export function genaiAgentChildAgentsChatbotIdentifiersToTerraform(struct?: GenaiAgentChildAgentsChatbotIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function genaiAgentChildAgentsChatbotIdentifiersToHclTerraform(struct?: GenaiAgentChildAgentsChatbotIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GenaiAgentChildAgentsChatbotIdentifiersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentChildAgentsChatbotIdentifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentChildAgentsChatbotIdentifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // chatbot_id - computed: true, optional: false, required: false
  public get chatbotId() {
    return this.getStringAttribute('chatbot_id');
  }
}

export class GenaiAgentChildAgentsChatbotIdentifiersList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentChildAgentsChatbotIdentifiers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentChildAgentsChatbotIdentifiersOutputReference {
    return new GenaiAgentChildAgentsChatbotIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentChildAgentsDeployment {
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Status of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#status GenaiAgent#status}
  */
  readonly status?: string;
  /**
  * Url of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#url GenaiAgent#url}
  */
  readonly url?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
  /**
  * Visibility of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#visibility GenaiAgent#visibility}
  */
  readonly visibility?: string;
}

export function genaiAgentChildAgentsDeploymentToTerraform(struct?: GenaiAgentChildAgentsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    url: cdktf.stringToTerraform(struct!.url),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function genaiAgentChildAgentsDeploymentToHclTerraform(struct?: GenaiAgentChildAgentsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentChildAgentsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentChildAgentsDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentChildAgentsDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._status = undefined;
      this._url = undefined;
      this._uuid = undefined;
      this._visibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._status = value.status;
      this._url = value.url;
      this._uuid = value.uuid;
      this._visibility = value.visibility;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // name - computed: false, optional: true, required: false
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}

export class GenaiAgentChildAgentsDeploymentList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentChildAgentsDeployment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentChildAgentsDeploymentOutputReference {
    return new GenaiAgentChildAgentsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentChildAgents {
  /**
  * Description for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#description GenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Instruction for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#instruction GenaiAgent#instruction}
  */
  readonly instruction: string;
  /**
  * Model UUID of the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#model_uuid GenaiAgent#model_uuid}
  */
  readonly modelUuid: string;
  /**
  * Name of the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name: string;
  /**
  * Project ID of the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#project_id GenaiAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Region where the Agent is deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#region GenaiAgent#region}
  */
  readonly region: string;
  /**
  * anthropic_api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#anthropic_api_key GenaiAgent#anthropic_api_key}
  */
  readonly anthropicApiKey?: GenaiAgentChildAgentsAnthropicApiKey[] | cdktf.IResolvable;
  /**
  * api_key_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#api_key_infos GenaiAgent#api_key_infos}
  */
  readonly apiKeyInfos?: GenaiAgentChildAgentsApiKeyInfos[] | cdktf.IResolvable;
  /**
  * api_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#api_keys GenaiAgent#api_keys}
  */
  readonly apiKeys?: GenaiAgentChildAgentsApiKeys[] | cdktf.IResolvable;
  /**
  * chatbot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#chatbot GenaiAgent#chatbot}
  */
  readonly chatbot?: GenaiAgentChildAgentsChatbot[] | cdktf.IResolvable;
  /**
  * chatbot_identifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#chatbot_identifiers GenaiAgent#chatbot_identifiers}
  */
  readonly chatbotIdentifiers?: GenaiAgentChildAgentsChatbotIdentifiers[] | cdktf.IResolvable;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#deployment GenaiAgent#deployment}
  */
  readonly deployment?: GenaiAgentChildAgentsDeployment[] | cdktf.IResolvable;
}

export function genaiAgentChildAgentsToTerraform(struct?: GenaiAgentChildAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    instruction: cdktf.stringToTerraform(struct!.instruction),
    model_uuid: cdktf.stringToTerraform(struct!.modelUuid),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    anthropic_api_key: cdktf.listMapper(genaiAgentChildAgentsAnthropicApiKeyToTerraform, true)(struct!.anthropicApiKey),
    api_key_infos: cdktf.listMapper(genaiAgentChildAgentsApiKeyInfosToTerraform, true)(struct!.apiKeyInfos),
    api_keys: cdktf.listMapper(genaiAgentChildAgentsApiKeysToTerraform, true)(struct!.apiKeys),
    chatbot: cdktf.listMapper(genaiAgentChildAgentsChatbotToTerraform, true)(struct!.chatbot),
    chatbot_identifiers: cdktf.listMapper(genaiAgentChildAgentsChatbotIdentifiersToTerraform, true)(struct!.chatbotIdentifiers),
    deployment: cdktf.listMapper(genaiAgentChildAgentsDeploymentToTerraform, true)(struct!.deployment),
  }
}


export function genaiAgentChildAgentsToHclTerraform(struct?: GenaiAgentChildAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: cdktf.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_uuid: {
      value: cdktf.stringToHclTerraform(struct!.modelUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anthropic_api_key: {
      value: cdktf.listMapperHcl(genaiAgentChildAgentsAnthropicApiKeyToHclTerraform, true)(struct!.anthropicApiKey),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentChildAgentsAnthropicApiKeyList",
    },
    api_key_infos: {
      value: cdktf.listMapperHcl(genaiAgentChildAgentsApiKeyInfosToHclTerraform, true)(struct!.apiKeyInfos),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentChildAgentsApiKeyInfosList",
    },
    api_keys: {
      value: cdktf.listMapperHcl(genaiAgentChildAgentsApiKeysToHclTerraform, true)(struct!.apiKeys),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentChildAgentsApiKeysList",
    },
    chatbot: {
      value: cdktf.listMapperHcl(genaiAgentChildAgentsChatbotToHclTerraform, true)(struct!.chatbot),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentChildAgentsChatbotList",
    },
    chatbot_identifiers: {
      value: cdktf.listMapperHcl(genaiAgentChildAgentsChatbotIdentifiersToHclTerraform, true)(struct!.chatbotIdentifiers),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentChildAgentsChatbotIdentifiersList",
    },
    deployment: {
      value: cdktf.listMapperHcl(genaiAgentChildAgentsDeploymentToHclTerraform, true)(struct!.deployment),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentChildAgentsDeploymentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentChildAgentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentChildAgents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    if (this._modelUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelUuid = this._modelUuid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._anthropicApiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropicApiKey = this._anthropicApiKey?.internalValue;
    }
    if (this._apiKeyInfos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyInfos = this._apiKeyInfos?.internalValue;
    }
    if (this._apiKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeys = this._apiKeys?.internalValue;
    }
    if (this._chatbot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatbot = this._chatbot?.internalValue;
    }
    if (this._chatbotIdentifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatbotIdentifiers = this._chatbotIdentifiers?.internalValue;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentChildAgents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._instruction = undefined;
      this._modelUuid = undefined;
      this._name = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._anthropicApiKey.internalValue = undefined;
      this._apiKeyInfos.internalValue = undefined;
      this._apiKeys.internalValue = undefined;
      this._chatbot.internalValue = undefined;
      this._chatbotIdentifiers.internalValue = undefined;
      this._deployment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._instruction = value.instruction;
      this._modelUuid = value.modelUuid;
      this._name = value.name;
      this._projectId = value.projectId;
      this._region = value.region;
      this._anthropicApiKey.internalValue = value.anthropicApiKey;
      this._apiKeyInfos.internalValue = value.apiKeyInfos;
      this._apiKeys.internalValue = value.apiKeys;
      this._chatbot.internalValue = value.chatbot;
      this._chatbotIdentifiers.internalValue = value.chatbotIdentifiers;
      this._deployment.internalValue = value.deployment;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // instruction - computed: false, optional: false, required: true
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // model_uuid - computed: false, optional: false, required: true
  private _modelUuid?: string; 
  public get modelUuid() {
    return this.getStringAttribute('model_uuid');
  }
  public set modelUuid(value: string) {
    this._modelUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelUuidInput() {
    return this._modelUuid;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // anthropic_api_key - computed: false, optional: true, required: false
  private _anthropicApiKey = new GenaiAgentChildAgentsAnthropicApiKeyList(this, "anthropic_api_key", false);
  public get anthropicApiKey() {
    return this._anthropicApiKey;
  }
  public putAnthropicApiKey(value: GenaiAgentChildAgentsAnthropicApiKey[] | cdktf.IResolvable) {
    this._anthropicApiKey.internalValue = value;
  }
  public resetAnthropicApiKey() {
    this._anthropicApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicApiKeyInput() {
    return this._anthropicApiKey.internalValue;
  }

  // api_key_infos - computed: false, optional: true, required: false
  private _apiKeyInfos = new GenaiAgentChildAgentsApiKeyInfosList(this, "api_key_infos", false);
  public get apiKeyInfos() {
    return this._apiKeyInfos;
  }
  public putApiKeyInfos(value: GenaiAgentChildAgentsApiKeyInfos[] | cdktf.IResolvable) {
    this._apiKeyInfos.internalValue = value;
  }
  public resetApiKeyInfos() {
    this._apiKeyInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInfosInput() {
    return this._apiKeyInfos.internalValue;
  }

  // api_keys - computed: false, optional: true, required: false
  private _apiKeys = new GenaiAgentChildAgentsApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }
  public putApiKeys(value: GenaiAgentChildAgentsApiKeys[] | cdktf.IResolvable) {
    this._apiKeys.internalValue = value;
  }
  public resetApiKeys() {
    this._apiKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeysInput() {
    return this._apiKeys.internalValue;
  }

  // chatbot - computed: false, optional: true, required: false
  private _chatbot = new GenaiAgentChildAgentsChatbotList(this, "chatbot", false);
  public get chatbot() {
    return this._chatbot;
  }
  public putChatbot(value: GenaiAgentChildAgentsChatbot[] | cdktf.IResolvable) {
    this._chatbot.internalValue = value;
  }
  public resetChatbot() {
    this._chatbot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatbotInput() {
    return this._chatbot.internalValue;
  }

  // chatbot_identifiers - computed: false, optional: true, required: false
  private _chatbotIdentifiers = new GenaiAgentChildAgentsChatbotIdentifiersList(this, "chatbot_identifiers", false);
  public get chatbotIdentifiers() {
    return this._chatbotIdentifiers;
  }
  public putChatbotIdentifiers(value: GenaiAgentChildAgentsChatbotIdentifiers[] | cdktf.IResolvable) {
    this._chatbotIdentifiers.internalValue = value;
  }
  public resetChatbotIdentifiers() {
    this._chatbotIdentifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatbotIdentifiersInput() {
    return this._chatbotIdentifiers.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new GenaiAgentChildAgentsDeploymentList(this, "deployment", false);
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: GenaiAgentChildAgentsDeployment[] | cdktf.IResolvable) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }
}

export class GenaiAgentChildAgentsList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentChildAgents[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentChildAgentsOutputReference {
    return new GenaiAgentChildAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentDeployment {
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Status of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#status GenaiAgent#status}
  */
  readonly status?: string;
  /**
  * Url of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#url GenaiAgent#url}
  */
  readonly url?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
  /**
  * Visibility of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#visibility GenaiAgent#visibility}
  */
  readonly visibility?: string;
}

export function genaiAgentDeploymentToTerraform(struct?: GenaiAgentDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    url: cdktf.stringToTerraform(struct!.url),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function genaiAgentDeploymentToHclTerraform(struct?: GenaiAgentDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._status = undefined;
      this._url = undefined;
      this._uuid = undefined;
      this._visibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._status = value.status;
      this._url = value.url;
      this._uuid = value.uuid;
      this._visibility = value.visibility;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // name - computed: false, optional: true, required: false
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}

export class GenaiAgentDeploymentList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentDeployment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentDeploymentOutputReference {
    return new GenaiAgentDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentFunctions {
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#api_key GenaiAgent#api_key}
  */
  readonly apiKey?: string;
  /**
  * Description of the Function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#description GenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Name of function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#faasname GenaiAgent#faasname}
  */
  readonly faasname?: string;
  /**
  * Namespace of function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#faasnamespace GenaiAgent#faasnamespace}
  */
  readonly faasnamespace?: string;
  /**
  * Guardrail UUID for the Function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#guardrail_uuid GenaiAgent#guardrail_uuid}
  */
  readonly guardrailUuid?: string;
  /**
  * Name of function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Url of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#url GenaiAgent#url}
  */
  readonly url?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentFunctionsToTerraform(struct?: GenaiAgentFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    description: cdktf.stringToTerraform(struct!.description),
    faasname: cdktf.stringToTerraform(struct!.faasname),
    faasnamespace: cdktf.stringToTerraform(struct!.faasnamespace),
    guardrail_uuid: cdktf.stringToTerraform(struct!.guardrailUuid),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentFunctionsToHclTerraform(struct?: GenaiAgentFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    faasname: {
      value: cdktf.stringToHclTerraform(struct!.faasname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    faasnamespace: {
      value: cdktf.stringToHclTerraform(struct!.faasnamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guardrail_uuid: {
      value: cdktf.stringToHclTerraform(struct!.guardrailUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentFunctionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentFunctions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._faasname !== undefined) {
      hasAnyValues = true;
      internalValueResult.faasname = this._faasname;
    }
    if (this._faasnamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.faasnamespace = this._faasnamespace;
    }
    if (this._guardrailUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailUuid = this._guardrailUuid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentFunctions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._description = undefined;
      this._faasname = undefined;
      this._faasnamespace = undefined;
      this._guardrailUuid = undefined;
      this._name = undefined;
      this._url = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._description = value.description;
      this._faasname = value.faasname;
      this._faasnamespace = value.faasnamespace;
      this._guardrailUuid = value.guardrailUuid;
      this._name = value.name;
      this._url = value.url;
      this._uuid = value.uuid;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // faasname - computed: false, optional: true, required: false
  private _faasname?: string; 
  public get faasname() {
    return this.getStringAttribute('faasname');
  }
  public set faasname(value: string) {
    this._faasname = value;
  }
  public resetFaasname() {
    this._faasname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faasnameInput() {
    return this._faasname;
  }

  // faasnamespace - computed: false, optional: true, required: false
  private _faasnamespace?: string; 
  public get faasnamespace() {
    return this.getStringAttribute('faasnamespace');
  }
  public set faasnamespace(value: string) {
    this._faasnamespace = value;
  }
  public resetFaasnamespace() {
    this._faasnamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faasnamespaceInput() {
    return this._faasnamespace;
  }

  // guardrail_uuid - computed: false, optional: true, required: false
  private _guardrailUuid?: string; 
  public get guardrailUuid() {
    return this.getStringAttribute('guardrail_uuid');
  }
  public set guardrailUuid(value: string) {
    this._guardrailUuid = value;
  }
  public resetGuardrailUuid() {
    this._guardrailUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailUuidInput() {
    return this._guardrailUuid;
  }

  // name - computed: false, optional: true, required: false
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GenaiAgentFunctionsList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentFunctions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentFunctionsOutputReference {
    return new GenaiAgentFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentKnowledgeBasesLastIndexingJob {
  /**
  * Number of completed datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#completed_datasources GenaiAgent#completed_datasources}
  */
  readonly completedDatasources?: number;
  /**
  * Datasource UUIDs for the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#data_source_uuids GenaiAgent#data_source_uuids}
  */
  readonly dataSourceUuids?: string[];
  /**
  * Phase of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#phase GenaiAgent#phase}
  */
  readonly phase?: string;
  /**
  * Number of tokens processed in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#tokens GenaiAgent#tokens}
  */
  readonly tokens?: number;
  /**
  * Total number of datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#total_datasources GenaiAgent#total_datasources}
  */
  readonly totalDatasources?: number;
  /**
  * UUID  of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentKnowledgeBasesLastIndexingJobToTerraform(struct?: GenaiAgentKnowledgeBasesLastIndexingJobOutputReference | GenaiAgentKnowledgeBasesLastIndexingJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completed_datasources: cdktf.numberToTerraform(struct!.completedDatasources),
    data_source_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataSourceUuids),
    phase: cdktf.stringToTerraform(struct!.phase),
    tokens: cdktf.numberToTerraform(struct!.tokens),
    total_datasources: cdktf.numberToTerraform(struct!.totalDatasources),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentKnowledgeBasesLastIndexingJobToHclTerraform(struct?: GenaiAgentKnowledgeBasesLastIndexingJobOutputReference | GenaiAgentKnowledgeBasesLastIndexingJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    completed_datasources: {
      value: cdktf.numberToHclTerraform(struct!.completedDatasources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_source_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataSourceUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.numberToHclTerraform(struct!.tokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_datasources: {
      value: cdktf.numberToHclTerraform(struct!.totalDatasources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentKnowledgeBasesLastIndexingJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenaiAgentKnowledgeBasesLastIndexingJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completedDatasources !== undefined) {
      hasAnyValues = true;
      internalValueResult.completedDatasources = this._completedDatasources;
    }
    if (this._dataSourceUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceUuids = this._dataSourceUuids;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._tokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens;
    }
    if (this._totalDatasources !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDatasources = this._totalDatasources;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentKnowledgeBasesLastIndexingJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._completedDatasources = undefined;
      this._dataSourceUuids = undefined;
      this._phase = undefined;
      this._tokens = undefined;
      this._totalDatasources = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._completedDatasources = value.completedDatasources;
      this._dataSourceUuids = value.dataSourceUuids;
      this._phase = value.phase;
      this._tokens = value.tokens;
      this._totalDatasources = value.totalDatasources;
      this._uuid = value.uuid;
    }
  }

  // completed_datasources - computed: false, optional: true, required: false
  private _completedDatasources?: number; 
  public get completedDatasources() {
    return this.getNumberAttribute('completed_datasources');
  }
  public set completedDatasources(value: number) {
    this._completedDatasources = value;
  }
  public resetCompletedDatasources() {
    this._completedDatasources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completedDatasourcesInput() {
    return this._completedDatasources;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_source_uuids - computed: false, optional: true, required: false
  private _dataSourceUuids?: string[]; 
  public get dataSourceUuids() {
    return this.getListAttribute('data_source_uuids');
  }
  public set dataSourceUuids(value: string[]) {
    this._dataSourceUuids = value;
  }
  public resetDataSourceUuids() {
    this._dataSourceUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceUuidsInput() {
    return this._dataSourceUuids;
  }

  // finished_at - computed: true, optional: false, required: false
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }

  // knowledge_base_uuid - computed: true, optional: false, required: false
  public get knowledgeBaseUuid() {
    return this.getStringAttribute('knowledge_base_uuid');
  }

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // started_at - computed: true, optional: false, required: false
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }

  // tokens - computed: false, optional: true, required: false
  private _tokens?: number; 
  public get tokens() {
    return this.getNumberAttribute('tokens');
  }
  public set tokens(value: number) {
    this._tokens = value;
  }
  public resetTokens() {
    this._tokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens;
  }

  // total_datasources - computed: false, optional: true, required: false
  private _totalDatasources?: number; 
  public get totalDatasources() {
    return this.getNumberAttribute('total_datasources');
  }
  public set totalDatasources(value: number) {
    this._totalDatasources = value;
  }
  public resetTotalDatasources() {
    this._totalDatasources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDatasourcesInput() {
    return this._totalDatasources;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface GenaiAgentKnowledgeBases {
  /**
  * Database ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#database_id GenaiAgent#database_id}
  */
  readonly databaseId?: string;
  /**
  * Embedding model UUID for the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#embedding_model_uuid GenaiAgent#embedding_model_uuid}
  */
  readonly embeddingModelUuid?: string;
  /**
  * Indicates if the Knowledge Base is public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#is_public GenaiAgent#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Name of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Project ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#project_id GenaiAgent#project_id}
  */
  readonly projectId?: string;
  /**
  * Region of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#region GenaiAgent#region}
  */
  readonly region?: string;
  /**
  * List of tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#tags GenaiAgent#tags}
  */
  readonly tags?: string[];
  /**
  * User ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#user_id GenaiAgent#user_id}
  */
  readonly userId?: string;
  /**
  * last_indexing_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#last_indexing_job GenaiAgent#last_indexing_job}
  */
  readonly lastIndexingJob?: GenaiAgentKnowledgeBasesLastIndexingJob;
}

export function genaiAgentKnowledgeBasesToTerraform(struct?: GenaiAgentKnowledgeBases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_id: cdktf.stringToTerraform(struct!.databaseId),
    embedding_model_uuid: cdktf.stringToTerraform(struct!.embeddingModelUuid),
    is_public: cdktf.booleanToTerraform(struct!.isPublic),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    user_id: cdktf.stringToTerraform(struct!.userId),
    last_indexing_job: genaiAgentKnowledgeBasesLastIndexingJobToTerraform(struct!.lastIndexingJob),
  }
}


export function genaiAgentKnowledgeBasesToHclTerraform(struct?: GenaiAgentKnowledgeBases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedding_model_uuid: {
      value: cdktf.stringToHclTerraform(struct!.embeddingModelUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_public: {
      value: cdktf.booleanToHclTerraform(struct!.isPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_indexing_job: {
      value: genaiAgentKnowledgeBasesLastIndexingJobToHclTerraform(struct!.lastIndexingJob),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentKnowledgeBasesLastIndexingJobList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentKnowledgeBasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentKnowledgeBases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._embeddingModelUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelUuid = this._embeddingModelUuid;
    }
    if (this._isPublic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublic = this._isPublic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._lastIndexingJob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastIndexingJob = this._lastIndexingJob?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentKnowledgeBases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseId = undefined;
      this._embeddingModelUuid = undefined;
      this._isPublic = undefined;
      this._name = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._tags = undefined;
      this._userId = undefined;
      this._lastIndexingJob.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseId = value.databaseId;
      this._embeddingModelUuid = value.embeddingModelUuid;
      this._isPublic = value.isPublic;
      this._name = value.name;
      this._projectId = value.projectId;
      this._region = value.region;
      this._tags = value.tags;
      this._userId = value.userId;
      this._lastIndexingJob.internalValue = value.lastIndexingJob;
    }
  }

  // added_to_agent_at - computed: true, optional: false, required: false
  public get addedToAgentAt() {
    return this.getStringAttribute('added_to_agent_at');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // database_id - computed: false, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // embedding_model_uuid - computed: false, optional: true, required: false
  private _embeddingModelUuid?: string; 
  public get embeddingModelUuid() {
    return this.getStringAttribute('embedding_model_uuid');
  }
  public set embeddingModelUuid(value: string) {
    this._embeddingModelUuid = value;
  }
  public resetEmbeddingModelUuid() {
    this._embeddingModelUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelUuidInput() {
    return this._embeddingModelUuid;
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // name - computed: false, optional: true, required: false
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // last_indexing_job - computed: false, optional: true, required: false
  private _lastIndexingJob = new GenaiAgentKnowledgeBasesLastIndexingJobOutputReference(this, "last_indexing_job");
  public get lastIndexingJob() {
    return this._lastIndexingJob;
  }
  public putLastIndexingJob(value: GenaiAgentKnowledgeBasesLastIndexingJob) {
    this._lastIndexingJob.internalValue = value;
  }
  public resetLastIndexingJob() {
    this._lastIndexingJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastIndexingJobInput() {
    return this._lastIndexingJob.internalValue;
  }
}

export class GenaiAgentKnowledgeBasesList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentKnowledgeBases[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentKnowledgeBasesOutputReference {
    return new GenaiAgentKnowledgeBasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentModelAgreement {
  /**
  * Description of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#description GenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Name of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * URL of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#url GenaiAgent#url}
  */
  readonly url?: string;
  /**
  * UUID of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentModelAgreementToTerraform(struct?: GenaiAgentModelAgreement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentModelAgreementToHclTerraform(struct?: GenaiAgentModelAgreement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentModelAgreementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentModelAgreement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentModelAgreement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._url = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._url = value.url;
      this._uuid = value.uuid;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: true, required: false
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GenaiAgentModelAgreementList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentModelAgreement[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentModelAgreementOutputReference {
    return new GenaiAgentModelAgreementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentModelVersions {
  /**
  * Major version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#major GenaiAgent#major}
  */
  readonly major?: number;
  /**
  * Minor version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#minor GenaiAgent#minor}
  */
  readonly minor?: number;
  /**
  * Patch version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#patch GenaiAgent#patch}
  */
  readonly patch?: number;
}

export function genaiAgentModelVersionsToTerraform(struct?: GenaiAgentModelVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    major: cdktf.numberToTerraform(struct!.major),
    minor: cdktf.numberToTerraform(struct!.minor),
    patch: cdktf.numberToTerraform(struct!.patch),
  }
}


export function genaiAgentModelVersionsToHclTerraform(struct?: GenaiAgentModelVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    major: {
      value: cdktf.numberToHclTerraform(struct!.major),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minor: {
      value: cdktf.numberToHclTerraform(struct!.minor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    patch: {
      value: cdktf.numberToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentModelVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentModelVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._major !== undefined) {
      hasAnyValues = true;
      internalValueResult.major = this._major;
    }
    if (this._minor !== undefined) {
      hasAnyValues = true;
      internalValueResult.minor = this._minor;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentModelVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._major = undefined;
      this._minor = undefined;
      this._patch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._major = value.major;
      this._minor = value.minor;
      this._patch = value.patch;
    }
  }

  // major - computed: false, optional: true, required: false
  private _major?: number; 
  public get major() {
    return this.getNumberAttribute('major');
  }
  public set major(value: number) {
    this._major = value;
  }
  public resetMajor() {
    this._major = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorInput() {
    return this._major;
  }

  // minor - computed: false, optional: true, required: false
  private _minor?: number; 
  public get minor() {
    return this.getNumberAttribute('minor');
  }
  public set minor(value: number) {
    this._minor = value;
  }
  public resetMinor() {
    this._minor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorInput() {
    return this._minor;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: number; 
  public get patch() {
    return this.getNumberAttribute('patch');
  }
  public set patch(value: number) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }
}

export class GenaiAgentModelVersionsList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentModelVersions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentModelVersionsOutputReference {
    return new GenaiAgentModelVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentModel {
  /**
  * Inference name of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#inference_name GenaiAgent#inference_name}
  */
  readonly inferenceName?: string;
  /**
  * Infernce version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#inference_version GenaiAgent#inference_version}
  */
  readonly inferenceVersion?: string;
  /**
  * Indicates if the Model Base is foundational
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#is_foundational GenaiAgent#is_foundational}
  */
  readonly isFoundational?: boolean | cdktf.IResolvable;
  /**
  * Name of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Parent UUID of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#parent_uuid GenaiAgent#parent_uuid}
  */
  readonly parentUuid?: string;
  /**
  * Provider of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#provider GenaiAgent#provider}
  */
  readonly provider?: string;
  /**
  * Indicates if the Model upload is complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#upload_complete GenaiAgent#upload_complete}
  */
  readonly uploadComplete?: boolean | cdktf.IResolvable;
  /**
  * URL of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#url GenaiAgent#url}
  */
  readonly url?: string;
  /**
  * List of Usecases for the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#usecases GenaiAgent#usecases}
  */
  readonly usecases?: string[];
  /**
  * agreement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#agreement GenaiAgent#agreement}
  */
  readonly agreement?: GenaiAgentModelAgreement[] | cdktf.IResolvable;
  /**
  * versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#versions GenaiAgent#versions}
  */
  readonly versions?: GenaiAgentModelVersions[] | cdktf.IResolvable;
}

export function genaiAgentModelToTerraform(struct?: GenaiAgentModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inference_name: cdktf.stringToTerraform(struct!.inferenceName),
    inference_version: cdktf.stringToTerraform(struct!.inferenceVersion),
    is_foundational: cdktf.booleanToTerraform(struct!.isFoundational),
    name: cdktf.stringToTerraform(struct!.name),
    parent_uuid: cdktf.stringToTerraform(struct!.parentUuid),
    provider: cdktf.stringToTerraform(struct!.provider),
    upload_complete: cdktf.booleanToTerraform(struct!.uploadComplete),
    url: cdktf.stringToTerraform(struct!.url),
    usecases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usecases),
    agreement: cdktf.listMapper(genaiAgentModelAgreementToTerraform, true)(struct!.agreement),
    versions: cdktf.listMapper(genaiAgentModelVersionsToTerraform, true)(struct!.versions),
  }
}


export function genaiAgentModelToHclTerraform(struct?: GenaiAgentModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inference_name: {
      value: cdktf.stringToHclTerraform(struct!.inferenceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_version: {
      value: cdktf.stringToHclTerraform(struct!.inferenceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_foundational: {
      value: cdktf.booleanToHclTerraform(struct!.isFoundational),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_uuid: {
      value: cdktf.stringToHclTerraform(struct!.parentUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_complete: {
      value: cdktf.booleanToHclTerraform(struct!.uploadComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usecases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    agreement: {
      value: cdktf.listMapperHcl(genaiAgentModelAgreementToHclTerraform, true)(struct!.agreement),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentModelAgreementList",
    },
    versions: {
      value: cdktf.listMapperHcl(genaiAgentModelVersionsToHclTerraform, true)(struct!.versions),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentModelVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inferenceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceName = this._inferenceName;
    }
    if (this._inferenceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceVersion = this._inferenceVersion;
    }
    if (this._isFoundational !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFoundational = this._isFoundational;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentUuid = this._parentUuid;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._uploadComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadComplete = this._uploadComplete;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._usecases !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecases = this._usecases;
    }
    if (this._agreement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agreement = this._agreement?.internalValue;
    }
    if (this._versions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inferenceName = undefined;
      this._inferenceVersion = undefined;
      this._isFoundational = undefined;
      this._name = undefined;
      this._parentUuid = undefined;
      this._provider = undefined;
      this._uploadComplete = undefined;
      this._url = undefined;
      this._usecases = undefined;
      this._agreement.internalValue = undefined;
      this._versions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inferenceName = value.inferenceName;
      this._inferenceVersion = value.inferenceVersion;
      this._isFoundational = value.isFoundational;
      this._name = value.name;
      this._parentUuid = value.parentUuid;
      this._provider = value.provider;
      this._uploadComplete = value.uploadComplete;
      this._url = value.url;
      this._usecases = value.usecases;
      this._agreement.internalValue = value.agreement;
      this._versions.internalValue = value.versions;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // inference_name - computed: false, optional: true, required: false
  private _inferenceName?: string; 
  public get inferenceName() {
    return this.getStringAttribute('inference_name');
  }
  public set inferenceName(value: string) {
    this._inferenceName = value;
  }
  public resetInferenceName() {
    this._inferenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceNameInput() {
    return this._inferenceName;
  }

  // inference_version - computed: false, optional: true, required: false
  private _inferenceVersion?: string; 
  public get inferenceVersion() {
    return this.getStringAttribute('inference_version');
  }
  public set inferenceVersion(value: string) {
    this._inferenceVersion = value;
  }
  public resetInferenceVersion() {
    this._inferenceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceVersionInput() {
    return this._inferenceVersion;
  }

  // is_foundational - computed: false, optional: true, required: false
  private _isFoundational?: boolean | cdktf.IResolvable; 
  public get isFoundational() {
    return this.getBooleanAttribute('is_foundational');
  }
  public set isFoundational(value: boolean | cdktf.IResolvable) {
    this._isFoundational = value;
  }
  public resetIsFoundational() {
    this._isFoundational = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFoundationalInput() {
    return this._isFoundational;
  }

  // name - computed: false, optional: true, required: false
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

  // parent_uuid - computed: false, optional: true, required: false
  private _parentUuid?: string; 
  public get parentUuid() {
    return this.getStringAttribute('parent_uuid');
  }
  public set parentUuid(value: string) {
    this._parentUuid = value;
  }
  public resetParentUuid() {
    this._parentUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentUuidInput() {
    return this._parentUuid;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // upload_complete - computed: false, optional: true, required: false
  private _uploadComplete?: boolean | cdktf.IResolvable; 
  public get uploadComplete() {
    return this.getBooleanAttribute('upload_complete');
  }
  public set uploadComplete(value: boolean | cdktf.IResolvable) {
    this._uploadComplete = value;
  }
  public resetUploadComplete() {
    this._uploadComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadCompleteInput() {
    return this._uploadComplete;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // usecases - computed: false, optional: true, required: false
  private _usecases?: string[]; 
  public get usecases() {
    return this.getListAttribute('usecases');
  }
  public set usecases(value: string[]) {
    this._usecases = value;
  }
  public resetUsecases() {
    this._usecases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usecasesInput() {
    return this._usecases;
  }

  // agreement - computed: false, optional: true, required: false
  private _agreement = new GenaiAgentModelAgreementList(this, "agreement", false);
  public get agreement() {
    return this._agreement;
  }
  public putAgreement(value: GenaiAgentModelAgreement[] | cdktf.IResolvable) {
    this._agreement.internalValue = value;
  }
  public resetAgreement() {
    this._agreement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementInput() {
    return this._agreement.internalValue;
  }

  // versions - computed: false, optional: true, required: false
  private _versions = new GenaiAgentModelVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: GenaiAgentModelVersions[] | cdktf.IResolvable) {
    this._versions.internalValue = value;
  }
  public resetVersions() {
    this._versions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }
}

export class GenaiAgentModelList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentModel[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentModelOutputReference {
    return new GenaiAgentModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentOpenAiApiKey {
  /**
  * Created By user ID for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#created_by GenaiAgent#created_by}
  */
  readonly createdBy?: string;
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentOpenAiApiKeyToTerraform(struct?: GenaiAgentOpenAiApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentOpenAiApiKeyToHclTerraform(struct?: GenaiAgentOpenAiApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentOpenAiApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentOpenAiApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentOpenAiApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBy = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBy = value.createdBy;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // name - computed: false, optional: true, required: false
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GenaiAgentOpenAiApiKeyList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentOpenAiApiKey[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentOpenAiApiKeyOutputReference {
    return new GenaiAgentOpenAiApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentParentAgentsAnthropicApiKey {
  /**
  * Created By user ID for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#created_by GenaiAgent#created_by}
  */
  readonly createdBy?: string;
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentParentAgentsAnthropicApiKeyToTerraform(struct?: GenaiAgentParentAgentsAnthropicApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentParentAgentsAnthropicApiKeyToHclTerraform(struct?: GenaiAgentParentAgentsAnthropicApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentParentAgentsAnthropicApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentParentAgentsAnthropicApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentParentAgentsAnthropicApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBy = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBy = value.createdBy;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // name - computed: false, optional: true, required: false
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GenaiAgentParentAgentsAnthropicApiKeyList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentParentAgentsAnthropicApiKey[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentParentAgentsAnthropicApiKeyOutputReference {
    return new GenaiAgentParentAgentsAnthropicApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentParentAgentsApiKeyInfos {
  /**
  * Created By user ID for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#created_by GenaiAgent#created_by}
  */
  readonly createdBy?: string;
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Updated At timestamp for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#secret_key GenaiAgent#secret_key}
  */
  readonly secretKey?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentParentAgentsApiKeyInfosToTerraform(struct?: GenaiAgentParentAgentsApiKeyInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    name: cdktf.stringToTerraform(struct!.name),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentParentAgentsApiKeyInfosToHclTerraform(struct?: GenaiAgentParentAgentsApiKeyInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentParentAgentsApiKeyInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentParentAgentsApiKeyInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentParentAgentsApiKeyInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBy = undefined;
      this._name = undefined;
      this._secretKey = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBy = value.createdBy;
      this._name = value.name;
      this._secretKey = value.secretKey;
      this._uuid = value.uuid;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // name - computed: false, optional: true, required: false
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

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GenaiAgentParentAgentsApiKeyInfosList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentParentAgentsApiKeyInfos[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentParentAgentsApiKeyInfosOutputReference {
    return new GenaiAgentParentAgentsApiKeyInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentParentAgentsApiKeys {
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#api_key GenaiAgent#api_key}
  */
  readonly apiKey?: string;
}

export function genaiAgentParentAgentsApiKeysToTerraform(struct?: GenaiAgentParentAgentsApiKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function genaiAgentParentAgentsApiKeysToHclTerraform(struct?: GenaiAgentParentAgentsApiKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentParentAgentsApiKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentParentAgentsApiKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentParentAgentsApiKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}

export class GenaiAgentParentAgentsApiKeysList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentParentAgentsApiKeys[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentParentAgentsApiKeysOutputReference {
    return new GenaiAgentParentAgentsApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentParentAgentsChatbot {
  /**
  * Background color for the chatbot button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#button_background_color GenaiAgent#button_background_color}
  */
  readonly buttonBackgroundColor?: string;
  /**
  * Logo for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#logo GenaiAgent#logo}
  */
  readonly logo?: string;
  /**
  * Name of the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Primary color for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#primary_color GenaiAgent#primary_color}
  */
  readonly primaryColor?: string;
  /**
  * Secondary color for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#secondary_color GenaiAgent#secondary_color}
  */
  readonly secondaryColor?: string;
  /**
  * Starting message for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#starting_message GenaiAgent#starting_message}
  */
  readonly startingMessage?: string;
}

export function genaiAgentParentAgentsChatbotToTerraform(struct?: GenaiAgentParentAgentsChatbot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    button_background_color: cdktf.stringToTerraform(struct!.buttonBackgroundColor),
    logo: cdktf.stringToTerraform(struct!.logo),
    name: cdktf.stringToTerraform(struct!.name),
    primary_color: cdktf.stringToTerraform(struct!.primaryColor),
    secondary_color: cdktf.stringToTerraform(struct!.secondaryColor),
    starting_message: cdktf.stringToTerraform(struct!.startingMessage),
  }
}


export function genaiAgentParentAgentsChatbotToHclTerraform(struct?: GenaiAgentParentAgentsChatbot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    button_background_color: {
      value: cdktf.stringToHclTerraform(struct!.buttonBackgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo: {
      value: cdktf.stringToHclTerraform(struct!.logo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_color: {
      value: cdktf.stringToHclTerraform(struct!.primaryColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_color: {
      value: cdktf.stringToHclTerraform(struct!.secondaryColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_message: {
      value: cdktf.stringToHclTerraform(struct!.startingMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentParentAgentsChatbotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentParentAgentsChatbot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonBackgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonBackgroundColor = this._buttonBackgroundColor;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryColor = this._primaryColor;
    }
    if (this._secondaryColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryColor = this._secondaryColor;
    }
    if (this._startingMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingMessage = this._startingMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentParentAgentsChatbot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonBackgroundColor = undefined;
      this._logo = undefined;
      this._name = undefined;
      this._primaryColor = undefined;
      this._secondaryColor = undefined;
      this._startingMessage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonBackgroundColor = value.buttonBackgroundColor;
      this._logo = value.logo;
      this._name = value.name;
      this._primaryColor = value.primaryColor;
      this._secondaryColor = value.secondaryColor;
      this._startingMessage = value.startingMessage;
    }
  }

  // button_background_color - computed: false, optional: true, required: false
  private _buttonBackgroundColor?: string; 
  public get buttonBackgroundColor() {
    return this.getStringAttribute('button_background_color');
  }
  public set buttonBackgroundColor(value: string) {
    this._buttonBackgroundColor = value;
  }
  public resetButtonBackgroundColor() {
    this._buttonBackgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonBackgroundColorInput() {
    return this._buttonBackgroundColor;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // name - computed: false, optional: true, required: false
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

  // primary_color - computed: false, optional: true, required: false
  private _primaryColor?: string; 
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }
  public set primaryColor(value: string) {
    this._primaryColor = value;
  }
  public resetPrimaryColor() {
    this._primaryColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorInput() {
    return this._primaryColor;
  }

  // secondary_color - computed: false, optional: true, required: false
  private _secondaryColor?: string; 
  public get secondaryColor() {
    return this.getStringAttribute('secondary_color');
  }
  public set secondaryColor(value: string) {
    this._secondaryColor = value;
  }
  public resetSecondaryColor() {
    this._secondaryColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryColorInput() {
    return this._secondaryColor;
  }

  // starting_message - computed: false, optional: true, required: false
  private _startingMessage?: string; 
  public get startingMessage() {
    return this.getStringAttribute('starting_message');
  }
  public set startingMessage(value: string) {
    this._startingMessage = value;
  }
  public resetStartingMessage() {
    this._startingMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingMessageInput() {
    return this._startingMessage;
  }
}

export class GenaiAgentParentAgentsChatbotList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentParentAgentsChatbot[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentParentAgentsChatbotOutputReference {
    return new GenaiAgentParentAgentsChatbotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentParentAgentsChatbotIdentifiers {
}

export function genaiAgentParentAgentsChatbotIdentifiersToTerraform(struct?: GenaiAgentParentAgentsChatbotIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function genaiAgentParentAgentsChatbotIdentifiersToHclTerraform(struct?: GenaiAgentParentAgentsChatbotIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GenaiAgentParentAgentsChatbotIdentifiersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentParentAgentsChatbotIdentifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentParentAgentsChatbotIdentifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // chatbot_id - computed: true, optional: false, required: false
  public get chatbotId() {
    return this.getStringAttribute('chatbot_id');
  }
}

export class GenaiAgentParentAgentsChatbotIdentifiersList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentParentAgentsChatbotIdentifiers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentParentAgentsChatbotIdentifiersOutputReference {
    return new GenaiAgentParentAgentsChatbotIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentParentAgentsDeployment {
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Status of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#status GenaiAgent#status}
  */
  readonly status?: string;
  /**
  * Url of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#url GenaiAgent#url}
  */
  readonly url?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
  /**
  * Visibility of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#visibility GenaiAgent#visibility}
  */
  readonly visibility?: string;
}

export function genaiAgentParentAgentsDeploymentToTerraform(struct?: GenaiAgentParentAgentsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    url: cdktf.stringToTerraform(struct!.url),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function genaiAgentParentAgentsDeploymentToHclTerraform(struct?: GenaiAgentParentAgentsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentParentAgentsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentParentAgentsDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentParentAgentsDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._status = undefined;
      this._url = undefined;
      this._uuid = undefined;
      this._visibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._status = value.status;
      this._url = value.url;
      this._uuid = value.uuid;
      this._visibility = value.visibility;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // name - computed: false, optional: true, required: false
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}

export class GenaiAgentParentAgentsDeploymentList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentParentAgentsDeployment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentParentAgentsDeploymentOutputReference {
    return new GenaiAgentParentAgentsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentParentAgents {
  /**
  * Description for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#description GenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Instruction for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#instruction GenaiAgent#instruction}
  */
  readonly instruction: string;
  /**
  * Model UUID of the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#model_uuid GenaiAgent#model_uuid}
  */
  readonly modelUuid: string;
  /**
  * Name of the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name: string;
  /**
  * Project ID of the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#project_id GenaiAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Region where the Agent is deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#region GenaiAgent#region}
  */
  readonly region: string;
  /**
  * anthropic_api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#anthropic_api_key GenaiAgent#anthropic_api_key}
  */
  readonly anthropicApiKey?: GenaiAgentParentAgentsAnthropicApiKey[] | cdktf.IResolvable;
  /**
  * api_key_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#api_key_infos GenaiAgent#api_key_infos}
  */
  readonly apiKeyInfos?: GenaiAgentParentAgentsApiKeyInfos[] | cdktf.IResolvable;
  /**
  * api_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#api_keys GenaiAgent#api_keys}
  */
  readonly apiKeys?: GenaiAgentParentAgentsApiKeys[] | cdktf.IResolvable;
  /**
  * chatbot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#chatbot GenaiAgent#chatbot}
  */
  readonly chatbot?: GenaiAgentParentAgentsChatbot[] | cdktf.IResolvable;
  /**
  * chatbot_identifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#chatbot_identifiers GenaiAgent#chatbot_identifiers}
  */
  readonly chatbotIdentifiers?: GenaiAgentParentAgentsChatbotIdentifiers[] | cdktf.IResolvable;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#deployment GenaiAgent#deployment}
  */
  readonly deployment?: GenaiAgentParentAgentsDeployment[] | cdktf.IResolvable;
}

export function genaiAgentParentAgentsToTerraform(struct?: GenaiAgentParentAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    instruction: cdktf.stringToTerraform(struct!.instruction),
    model_uuid: cdktf.stringToTerraform(struct!.modelUuid),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    anthropic_api_key: cdktf.listMapper(genaiAgentParentAgentsAnthropicApiKeyToTerraform, true)(struct!.anthropicApiKey),
    api_key_infos: cdktf.listMapper(genaiAgentParentAgentsApiKeyInfosToTerraform, true)(struct!.apiKeyInfos),
    api_keys: cdktf.listMapper(genaiAgentParentAgentsApiKeysToTerraform, true)(struct!.apiKeys),
    chatbot: cdktf.listMapper(genaiAgentParentAgentsChatbotToTerraform, true)(struct!.chatbot),
    chatbot_identifiers: cdktf.listMapper(genaiAgentParentAgentsChatbotIdentifiersToTerraform, true)(struct!.chatbotIdentifiers),
    deployment: cdktf.listMapper(genaiAgentParentAgentsDeploymentToTerraform, true)(struct!.deployment),
  }
}


export function genaiAgentParentAgentsToHclTerraform(struct?: GenaiAgentParentAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: cdktf.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_uuid: {
      value: cdktf.stringToHclTerraform(struct!.modelUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anthropic_api_key: {
      value: cdktf.listMapperHcl(genaiAgentParentAgentsAnthropicApiKeyToHclTerraform, true)(struct!.anthropicApiKey),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentParentAgentsAnthropicApiKeyList",
    },
    api_key_infos: {
      value: cdktf.listMapperHcl(genaiAgentParentAgentsApiKeyInfosToHclTerraform, true)(struct!.apiKeyInfos),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentParentAgentsApiKeyInfosList",
    },
    api_keys: {
      value: cdktf.listMapperHcl(genaiAgentParentAgentsApiKeysToHclTerraform, true)(struct!.apiKeys),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentParentAgentsApiKeysList",
    },
    chatbot: {
      value: cdktf.listMapperHcl(genaiAgentParentAgentsChatbotToHclTerraform, true)(struct!.chatbot),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentParentAgentsChatbotList",
    },
    chatbot_identifiers: {
      value: cdktf.listMapperHcl(genaiAgentParentAgentsChatbotIdentifiersToHclTerraform, true)(struct!.chatbotIdentifiers),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentParentAgentsChatbotIdentifiersList",
    },
    deployment: {
      value: cdktf.listMapperHcl(genaiAgentParentAgentsDeploymentToHclTerraform, true)(struct!.deployment),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentParentAgentsDeploymentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentParentAgentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentParentAgents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    if (this._modelUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelUuid = this._modelUuid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._anthropicApiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropicApiKey = this._anthropicApiKey?.internalValue;
    }
    if (this._apiKeyInfos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyInfos = this._apiKeyInfos?.internalValue;
    }
    if (this._apiKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeys = this._apiKeys?.internalValue;
    }
    if (this._chatbot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatbot = this._chatbot?.internalValue;
    }
    if (this._chatbotIdentifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatbotIdentifiers = this._chatbotIdentifiers?.internalValue;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentParentAgents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._instruction = undefined;
      this._modelUuid = undefined;
      this._name = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._anthropicApiKey.internalValue = undefined;
      this._apiKeyInfos.internalValue = undefined;
      this._apiKeys.internalValue = undefined;
      this._chatbot.internalValue = undefined;
      this._chatbotIdentifiers.internalValue = undefined;
      this._deployment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._instruction = value.instruction;
      this._modelUuid = value.modelUuid;
      this._name = value.name;
      this._projectId = value.projectId;
      this._region = value.region;
      this._anthropicApiKey.internalValue = value.anthropicApiKey;
      this._apiKeyInfos.internalValue = value.apiKeyInfos;
      this._apiKeys.internalValue = value.apiKeys;
      this._chatbot.internalValue = value.chatbot;
      this._chatbotIdentifiers.internalValue = value.chatbotIdentifiers;
      this._deployment.internalValue = value.deployment;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // instruction - computed: false, optional: false, required: true
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // model_uuid - computed: false, optional: false, required: true
  private _modelUuid?: string; 
  public get modelUuid() {
    return this.getStringAttribute('model_uuid');
  }
  public set modelUuid(value: string) {
    this._modelUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelUuidInput() {
    return this._modelUuid;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // anthropic_api_key - computed: false, optional: true, required: false
  private _anthropicApiKey = new GenaiAgentParentAgentsAnthropicApiKeyList(this, "anthropic_api_key", false);
  public get anthropicApiKey() {
    return this._anthropicApiKey;
  }
  public putAnthropicApiKey(value: GenaiAgentParentAgentsAnthropicApiKey[] | cdktf.IResolvable) {
    this._anthropicApiKey.internalValue = value;
  }
  public resetAnthropicApiKey() {
    this._anthropicApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicApiKeyInput() {
    return this._anthropicApiKey.internalValue;
  }

  // api_key_infos - computed: false, optional: true, required: false
  private _apiKeyInfos = new GenaiAgentParentAgentsApiKeyInfosList(this, "api_key_infos", false);
  public get apiKeyInfos() {
    return this._apiKeyInfos;
  }
  public putApiKeyInfos(value: GenaiAgentParentAgentsApiKeyInfos[] | cdktf.IResolvable) {
    this._apiKeyInfos.internalValue = value;
  }
  public resetApiKeyInfos() {
    this._apiKeyInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInfosInput() {
    return this._apiKeyInfos.internalValue;
  }

  // api_keys - computed: false, optional: true, required: false
  private _apiKeys = new GenaiAgentParentAgentsApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }
  public putApiKeys(value: GenaiAgentParentAgentsApiKeys[] | cdktf.IResolvable) {
    this._apiKeys.internalValue = value;
  }
  public resetApiKeys() {
    this._apiKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeysInput() {
    return this._apiKeys.internalValue;
  }

  // chatbot - computed: false, optional: true, required: false
  private _chatbot = new GenaiAgentParentAgentsChatbotList(this, "chatbot", false);
  public get chatbot() {
    return this._chatbot;
  }
  public putChatbot(value: GenaiAgentParentAgentsChatbot[] | cdktf.IResolvable) {
    this._chatbot.internalValue = value;
  }
  public resetChatbot() {
    this._chatbot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatbotInput() {
    return this._chatbot.internalValue;
  }

  // chatbot_identifiers - computed: false, optional: true, required: false
  private _chatbotIdentifiers = new GenaiAgentParentAgentsChatbotIdentifiersList(this, "chatbot_identifiers", false);
  public get chatbotIdentifiers() {
    return this._chatbotIdentifiers;
  }
  public putChatbotIdentifiers(value: GenaiAgentParentAgentsChatbotIdentifiers[] | cdktf.IResolvable) {
    this._chatbotIdentifiers.internalValue = value;
  }
  public resetChatbotIdentifiers() {
    this._chatbotIdentifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatbotIdentifiersInput() {
    return this._chatbotIdentifiers.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new GenaiAgentParentAgentsDeploymentList(this, "deployment", false);
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: GenaiAgentParentAgentsDeployment[] | cdktf.IResolvable) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }
}

export class GenaiAgentParentAgentsList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentParentAgents[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentParentAgentsOutputReference {
    return new GenaiAgentParentAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentTemplateKnowledgeBasesLastIndexingJob {
  /**
  * Number of completed datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#completed_datasources GenaiAgent#completed_datasources}
  */
  readonly completedDatasources?: number;
  /**
  * Datasource UUIDs for the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#data_source_uuids GenaiAgent#data_source_uuids}
  */
  readonly dataSourceUuids?: string[];
  /**
  * Phase of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#phase GenaiAgent#phase}
  */
  readonly phase?: string;
  /**
  * Number of tokens processed in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#tokens GenaiAgent#tokens}
  */
  readonly tokens?: number;
  /**
  * Total number of datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#total_datasources GenaiAgent#total_datasources}
  */
  readonly totalDatasources?: number;
  /**
  * UUID  of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentTemplateKnowledgeBasesLastIndexingJobToTerraform(struct?: GenaiAgentTemplateKnowledgeBasesLastIndexingJobOutputReference | GenaiAgentTemplateKnowledgeBasesLastIndexingJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completed_datasources: cdktf.numberToTerraform(struct!.completedDatasources),
    data_source_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataSourceUuids),
    phase: cdktf.stringToTerraform(struct!.phase),
    tokens: cdktf.numberToTerraform(struct!.tokens),
    total_datasources: cdktf.numberToTerraform(struct!.totalDatasources),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentTemplateKnowledgeBasesLastIndexingJobToHclTerraform(struct?: GenaiAgentTemplateKnowledgeBasesLastIndexingJobOutputReference | GenaiAgentTemplateKnowledgeBasesLastIndexingJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    completed_datasources: {
      value: cdktf.numberToHclTerraform(struct!.completedDatasources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_source_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataSourceUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.numberToHclTerraform(struct!.tokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_datasources: {
      value: cdktf.numberToHclTerraform(struct!.totalDatasources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentTemplateKnowledgeBasesLastIndexingJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenaiAgentTemplateKnowledgeBasesLastIndexingJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completedDatasources !== undefined) {
      hasAnyValues = true;
      internalValueResult.completedDatasources = this._completedDatasources;
    }
    if (this._dataSourceUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceUuids = this._dataSourceUuids;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._tokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens;
    }
    if (this._totalDatasources !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDatasources = this._totalDatasources;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentTemplateKnowledgeBasesLastIndexingJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._completedDatasources = undefined;
      this._dataSourceUuids = undefined;
      this._phase = undefined;
      this._tokens = undefined;
      this._totalDatasources = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._completedDatasources = value.completedDatasources;
      this._dataSourceUuids = value.dataSourceUuids;
      this._phase = value.phase;
      this._tokens = value.tokens;
      this._totalDatasources = value.totalDatasources;
      this._uuid = value.uuid;
    }
  }

  // completed_datasources - computed: false, optional: true, required: false
  private _completedDatasources?: number; 
  public get completedDatasources() {
    return this.getNumberAttribute('completed_datasources');
  }
  public set completedDatasources(value: number) {
    this._completedDatasources = value;
  }
  public resetCompletedDatasources() {
    this._completedDatasources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completedDatasourcesInput() {
    return this._completedDatasources;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_source_uuids - computed: false, optional: true, required: false
  private _dataSourceUuids?: string[]; 
  public get dataSourceUuids() {
    return this.getListAttribute('data_source_uuids');
  }
  public set dataSourceUuids(value: string[]) {
    this._dataSourceUuids = value;
  }
  public resetDataSourceUuids() {
    this._dataSourceUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceUuidsInput() {
    return this._dataSourceUuids;
  }

  // finished_at - computed: true, optional: false, required: false
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }

  // knowledge_base_uuid - computed: true, optional: false, required: false
  public get knowledgeBaseUuid() {
    return this.getStringAttribute('knowledge_base_uuid');
  }

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // started_at - computed: true, optional: false, required: false
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }

  // tokens - computed: false, optional: true, required: false
  private _tokens?: number; 
  public get tokens() {
    return this.getNumberAttribute('tokens');
  }
  public set tokens(value: number) {
    this._tokens = value;
  }
  public resetTokens() {
    this._tokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens;
  }

  // total_datasources - computed: false, optional: true, required: false
  private _totalDatasources?: number; 
  public get totalDatasources() {
    return this.getNumberAttribute('total_datasources');
  }
  public set totalDatasources(value: number) {
    this._totalDatasources = value;
  }
  public resetTotalDatasources() {
    this._totalDatasources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDatasourcesInput() {
    return this._totalDatasources;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface GenaiAgentTemplateKnowledgeBases {
  /**
  * Database ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#database_id GenaiAgent#database_id}
  */
  readonly databaseId?: string;
  /**
  * Embedding model UUID for the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#embedding_model_uuid GenaiAgent#embedding_model_uuid}
  */
  readonly embeddingModelUuid?: string;
  /**
  * Indicates if the Knowledge Base is public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#is_public GenaiAgent#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Name of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Project ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#project_id GenaiAgent#project_id}
  */
  readonly projectId?: string;
  /**
  * Region of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#region GenaiAgent#region}
  */
  readonly region?: string;
  /**
  * List of tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#tags GenaiAgent#tags}
  */
  readonly tags?: string[];
  /**
  * User ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#user_id GenaiAgent#user_id}
  */
  readonly userId?: string;
  /**
  * last_indexing_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#last_indexing_job GenaiAgent#last_indexing_job}
  */
  readonly lastIndexingJob?: GenaiAgentTemplateKnowledgeBasesLastIndexingJob;
}

export function genaiAgentTemplateKnowledgeBasesToTerraform(struct?: GenaiAgentTemplateKnowledgeBases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_id: cdktf.stringToTerraform(struct!.databaseId),
    embedding_model_uuid: cdktf.stringToTerraform(struct!.embeddingModelUuid),
    is_public: cdktf.booleanToTerraform(struct!.isPublic),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    user_id: cdktf.stringToTerraform(struct!.userId),
    last_indexing_job: genaiAgentTemplateKnowledgeBasesLastIndexingJobToTerraform(struct!.lastIndexingJob),
  }
}


export function genaiAgentTemplateKnowledgeBasesToHclTerraform(struct?: GenaiAgentTemplateKnowledgeBases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedding_model_uuid: {
      value: cdktf.stringToHclTerraform(struct!.embeddingModelUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_public: {
      value: cdktf.booleanToHclTerraform(struct!.isPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_indexing_job: {
      value: genaiAgentTemplateKnowledgeBasesLastIndexingJobToHclTerraform(struct!.lastIndexingJob),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentTemplateKnowledgeBasesLastIndexingJobList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentTemplateKnowledgeBasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentTemplateKnowledgeBases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._embeddingModelUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelUuid = this._embeddingModelUuid;
    }
    if (this._isPublic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublic = this._isPublic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._lastIndexingJob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastIndexingJob = this._lastIndexingJob?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentTemplateKnowledgeBases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseId = undefined;
      this._embeddingModelUuid = undefined;
      this._isPublic = undefined;
      this._name = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._tags = undefined;
      this._userId = undefined;
      this._lastIndexingJob.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseId = value.databaseId;
      this._embeddingModelUuid = value.embeddingModelUuid;
      this._isPublic = value.isPublic;
      this._name = value.name;
      this._projectId = value.projectId;
      this._region = value.region;
      this._tags = value.tags;
      this._userId = value.userId;
      this._lastIndexingJob.internalValue = value.lastIndexingJob;
    }
  }

  // added_to_agent_at - computed: true, optional: false, required: false
  public get addedToAgentAt() {
    return this.getStringAttribute('added_to_agent_at');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // database_id - computed: false, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // embedding_model_uuid - computed: false, optional: true, required: false
  private _embeddingModelUuid?: string; 
  public get embeddingModelUuid() {
    return this.getStringAttribute('embedding_model_uuid');
  }
  public set embeddingModelUuid(value: string) {
    this._embeddingModelUuid = value;
  }
  public resetEmbeddingModelUuid() {
    this._embeddingModelUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelUuidInput() {
    return this._embeddingModelUuid;
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // name - computed: false, optional: true, required: false
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // last_indexing_job - computed: false, optional: true, required: false
  private _lastIndexingJob = new GenaiAgentTemplateKnowledgeBasesLastIndexingJobOutputReference(this, "last_indexing_job");
  public get lastIndexingJob() {
    return this._lastIndexingJob;
  }
  public putLastIndexingJob(value: GenaiAgentTemplateKnowledgeBasesLastIndexingJob) {
    this._lastIndexingJob.internalValue = value;
  }
  public resetLastIndexingJob() {
    this._lastIndexingJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastIndexingJobInput() {
    return this._lastIndexingJob.internalValue;
  }
}

export class GenaiAgentTemplateKnowledgeBasesList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentTemplateKnowledgeBases[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentTemplateKnowledgeBasesOutputReference {
    return new GenaiAgentTemplateKnowledgeBasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentTemplateModelAgreement {
  /**
  * Description of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#description GenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Name of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * URL of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#url GenaiAgent#url}
  */
  readonly url?: string;
  /**
  * UUID of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function genaiAgentTemplateModelAgreementToTerraform(struct?: GenaiAgentTemplateModelAgreement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function genaiAgentTemplateModelAgreementToHclTerraform(struct?: GenaiAgentTemplateModelAgreement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentTemplateModelAgreementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentTemplateModelAgreement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentTemplateModelAgreement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._url = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._url = value.url;
      this._uuid = value.uuid;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: true, required: false
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class GenaiAgentTemplateModelAgreementList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentTemplateModelAgreement[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentTemplateModelAgreementOutputReference {
    return new GenaiAgentTemplateModelAgreementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentTemplateModelVersions {
  /**
  * Major version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#major GenaiAgent#major}
  */
  readonly major?: number;
  /**
  * Minor version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#minor GenaiAgent#minor}
  */
  readonly minor?: number;
  /**
  * Patch version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#patch GenaiAgent#patch}
  */
  readonly patch?: number;
}

export function genaiAgentTemplateModelVersionsToTerraform(struct?: GenaiAgentTemplateModelVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    major: cdktf.numberToTerraform(struct!.major),
    minor: cdktf.numberToTerraform(struct!.minor),
    patch: cdktf.numberToTerraform(struct!.patch),
  }
}


export function genaiAgentTemplateModelVersionsToHclTerraform(struct?: GenaiAgentTemplateModelVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    major: {
      value: cdktf.numberToHclTerraform(struct!.major),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minor: {
      value: cdktf.numberToHclTerraform(struct!.minor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    patch: {
      value: cdktf.numberToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentTemplateModelVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentTemplateModelVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._major !== undefined) {
      hasAnyValues = true;
      internalValueResult.major = this._major;
    }
    if (this._minor !== undefined) {
      hasAnyValues = true;
      internalValueResult.minor = this._minor;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentTemplateModelVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._major = undefined;
      this._minor = undefined;
      this._patch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._major = value.major;
      this._minor = value.minor;
      this._patch = value.patch;
    }
  }

  // major - computed: false, optional: true, required: false
  private _major?: number; 
  public get major() {
    return this.getNumberAttribute('major');
  }
  public set major(value: number) {
    this._major = value;
  }
  public resetMajor() {
    this._major = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorInput() {
    return this._major;
  }

  // minor - computed: false, optional: true, required: false
  private _minor?: number; 
  public get minor() {
    return this.getNumberAttribute('minor');
  }
  public set minor(value: number) {
    this._minor = value;
  }
  public resetMinor() {
    this._minor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorInput() {
    return this._minor;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: number; 
  public get patch() {
    return this.getNumberAttribute('patch');
  }
  public set patch(value: number) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }
}

export class GenaiAgentTemplateModelVersionsList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentTemplateModelVersions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentTemplateModelVersionsOutputReference {
    return new GenaiAgentTemplateModelVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentTemplateModel {
  /**
  * Inference name of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#inference_name GenaiAgent#inference_name}
  */
  readonly inferenceName?: string;
  /**
  * Infernce version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#inference_version GenaiAgent#inference_version}
  */
  readonly inferenceVersion?: string;
  /**
  * Indicates if the Model Base is foundational
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#is_foundational GenaiAgent#is_foundational}
  */
  readonly isFoundational?: boolean | cdktf.IResolvable;
  /**
  * Name of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Parent UUID of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#parent_uuid GenaiAgent#parent_uuid}
  */
  readonly parentUuid?: string;
  /**
  * Provider of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#provider GenaiAgent#provider}
  */
  readonly provider?: string;
  /**
  * Indicates if the Model upload is complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#upload_complete GenaiAgent#upload_complete}
  */
  readonly uploadComplete?: boolean | cdktf.IResolvable;
  /**
  * URL of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#url GenaiAgent#url}
  */
  readonly url?: string;
  /**
  * List of Usecases for the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#usecases GenaiAgent#usecases}
  */
  readonly usecases?: string[];
  /**
  * agreement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#agreement GenaiAgent#agreement}
  */
  readonly agreement?: GenaiAgentTemplateModelAgreement[] | cdktf.IResolvable;
  /**
  * versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#versions GenaiAgent#versions}
  */
  readonly versions?: GenaiAgentTemplateModelVersions[] | cdktf.IResolvable;
}

export function genaiAgentTemplateModelToTerraform(struct?: GenaiAgentTemplateModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inference_name: cdktf.stringToTerraform(struct!.inferenceName),
    inference_version: cdktf.stringToTerraform(struct!.inferenceVersion),
    is_foundational: cdktf.booleanToTerraform(struct!.isFoundational),
    name: cdktf.stringToTerraform(struct!.name),
    parent_uuid: cdktf.stringToTerraform(struct!.parentUuid),
    provider: cdktf.stringToTerraform(struct!.provider),
    upload_complete: cdktf.booleanToTerraform(struct!.uploadComplete),
    url: cdktf.stringToTerraform(struct!.url),
    usecases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usecases),
    agreement: cdktf.listMapper(genaiAgentTemplateModelAgreementToTerraform, true)(struct!.agreement),
    versions: cdktf.listMapper(genaiAgentTemplateModelVersionsToTerraform, true)(struct!.versions),
  }
}


export function genaiAgentTemplateModelToHclTerraform(struct?: GenaiAgentTemplateModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inference_name: {
      value: cdktf.stringToHclTerraform(struct!.inferenceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_version: {
      value: cdktf.stringToHclTerraform(struct!.inferenceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_foundational: {
      value: cdktf.booleanToHclTerraform(struct!.isFoundational),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_uuid: {
      value: cdktf.stringToHclTerraform(struct!.parentUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_complete: {
      value: cdktf.booleanToHclTerraform(struct!.uploadComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usecases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    agreement: {
      value: cdktf.listMapperHcl(genaiAgentTemplateModelAgreementToHclTerraform, true)(struct!.agreement),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentTemplateModelAgreementList",
    },
    versions: {
      value: cdktf.listMapperHcl(genaiAgentTemplateModelVersionsToHclTerraform, true)(struct!.versions),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentTemplateModelVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentTemplateModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentTemplateModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inferenceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceName = this._inferenceName;
    }
    if (this._inferenceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceVersion = this._inferenceVersion;
    }
    if (this._isFoundational !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFoundational = this._isFoundational;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentUuid = this._parentUuid;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._uploadComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadComplete = this._uploadComplete;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._usecases !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecases = this._usecases;
    }
    if (this._agreement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agreement = this._agreement?.internalValue;
    }
    if (this._versions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentTemplateModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inferenceName = undefined;
      this._inferenceVersion = undefined;
      this._isFoundational = undefined;
      this._name = undefined;
      this._parentUuid = undefined;
      this._provider = undefined;
      this._uploadComplete = undefined;
      this._url = undefined;
      this._usecases = undefined;
      this._agreement.internalValue = undefined;
      this._versions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inferenceName = value.inferenceName;
      this._inferenceVersion = value.inferenceVersion;
      this._isFoundational = value.isFoundational;
      this._name = value.name;
      this._parentUuid = value.parentUuid;
      this._provider = value.provider;
      this._uploadComplete = value.uploadComplete;
      this._url = value.url;
      this._usecases = value.usecases;
      this._agreement.internalValue = value.agreement;
      this._versions.internalValue = value.versions;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // inference_name - computed: false, optional: true, required: false
  private _inferenceName?: string; 
  public get inferenceName() {
    return this.getStringAttribute('inference_name');
  }
  public set inferenceName(value: string) {
    this._inferenceName = value;
  }
  public resetInferenceName() {
    this._inferenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceNameInput() {
    return this._inferenceName;
  }

  // inference_version - computed: false, optional: true, required: false
  private _inferenceVersion?: string; 
  public get inferenceVersion() {
    return this.getStringAttribute('inference_version');
  }
  public set inferenceVersion(value: string) {
    this._inferenceVersion = value;
  }
  public resetInferenceVersion() {
    this._inferenceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceVersionInput() {
    return this._inferenceVersion;
  }

  // is_foundational - computed: false, optional: true, required: false
  private _isFoundational?: boolean | cdktf.IResolvable; 
  public get isFoundational() {
    return this.getBooleanAttribute('is_foundational');
  }
  public set isFoundational(value: boolean | cdktf.IResolvable) {
    this._isFoundational = value;
  }
  public resetIsFoundational() {
    this._isFoundational = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFoundationalInput() {
    return this._isFoundational;
  }

  // name - computed: false, optional: true, required: false
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

  // parent_uuid - computed: false, optional: true, required: false
  private _parentUuid?: string; 
  public get parentUuid() {
    return this.getStringAttribute('parent_uuid');
  }
  public set parentUuid(value: string) {
    this._parentUuid = value;
  }
  public resetParentUuid() {
    this._parentUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentUuidInput() {
    return this._parentUuid;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // upload_complete - computed: false, optional: true, required: false
  private _uploadComplete?: boolean | cdktf.IResolvable; 
  public get uploadComplete() {
    return this.getBooleanAttribute('upload_complete');
  }
  public set uploadComplete(value: boolean | cdktf.IResolvable) {
    this._uploadComplete = value;
  }
  public resetUploadComplete() {
    this._uploadComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadCompleteInput() {
    return this._uploadComplete;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // usecases - computed: false, optional: true, required: false
  private _usecases?: string[]; 
  public get usecases() {
    return this.getListAttribute('usecases');
  }
  public set usecases(value: string[]) {
    this._usecases = value;
  }
  public resetUsecases() {
    this._usecases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usecasesInput() {
    return this._usecases;
  }

  // agreement - computed: false, optional: true, required: false
  private _agreement = new GenaiAgentTemplateModelAgreementList(this, "agreement", false);
  public get agreement() {
    return this._agreement;
  }
  public putAgreement(value: GenaiAgentTemplateModelAgreement[] | cdktf.IResolvable) {
    this._agreement.internalValue = value;
  }
  public resetAgreement() {
    this._agreement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementInput() {
    return this._agreement.internalValue;
  }

  // versions - computed: false, optional: true, required: false
  private _versions = new GenaiAgentTemplateModelVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: GenaiAgentTemplateModelVersions[] | cdktf.IResolvable) {
    this._versions.internalValue = value;
  }
  public resetVersions() {
    this._versions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }
}

export class GenaiAgentTemplateModelList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentTemplateModel[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentTemplateModelOutputReference {
    return new GenaiAgentTemplateModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiAgentTemplate {
  /**
  * Description of the Agent Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#description GenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Instruction for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#instruction GenaiAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * K value for the Agent Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#k GenaiAgent#k}
  */
  readonly k?: number;
  /**
  * Maximum tokens allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#max_tokens GenaiAgent#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Name of the Agent Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#name GenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Agent temperature setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#temperature GenaiAgent#temperature}
  */
  readonly temperature?: number;
  /**
  * Top P sampling parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#top_p GenaiAgent#top_p}
  */
  readonly topP?: number;
  /**
  * uuid of the Agent Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#uuid GenaiAgent#uuid}
  */
  readonly uuid?: string;
  /**
  * knowledge_bases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#knowledge_bases GenaiAgent#knowledge_bases}
  */
  readonly knowledgeBases?: GenaiAgentTemplateKnowledgeBases[] | cdktf.IResolvable;
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#model GenaiAgent#model}
  */
  readonly model?: GenaiAgentTemplateModel[] | cdktf.IResolvable;
}

export function genaiAgentTemplateToTerraform(struct?: GenaiAgentTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    instruction: cdktf.stringToTerraform(struct!.instruction),
    k: cdktf.numberToTerraform(struct!.k),
    max_tokens: cdktf.numberToTerraform(struct!.maxTokens),
    name: cdktf.stringToTerraform(struct!.name),
    temperature: cdktf.numberToTerraform(struct!.temperature),
    top_p: cdktf.numberToTerraform(struct!.topP),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    knowledge_bases: cdktf.listMapper(genaiAgentTemplateKnowledgeBasesToTerraform, true)(struct!.knowledgeBases),
    model: cdktf.listMapper(genaiAgentTemplateModelToTerraform, true)(struct!.model),
  }
}


export function genaiAgentTemplateToHclTerraform(struct?: GenaiAgentTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: cdktf.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k: {
      value: cdktf.numberToHclTerraform(struct!.k),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_tokens: {
      value: cdktf.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temperature: {
      value: cdktf.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktf.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    knowledge_bases: {
      value: cdktf.listMapperHcl(genaiAgentTemplateKnowledgeBasesToHclTerraform, true)(struct!.knowledgeBases),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentTemplateKnowledgeBasesList",
    },
    model: {
      value: cdktf.listMapperHcl(genaiAgentTemplateModelToHclTerraform, true)(struct!.model),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiAgentTemplateModelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiAgentTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GenaiAgentTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    if (this._k !== undefined) {
      hasAnyValues = true;
      internalValueResult.k = this._k;
    }
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._knowledgeBases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBases = this._knowledgeBases?.internalValue;
    }
    if (this._model?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiAgentTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._instruction = undefined;
      this._k = undefined;
      this._maxTokens = undefined;
      this._name = undefined;
      this._temperature = undefined;
      this._topP = undefined;
      this._uuid = undefined;
      this._knowledgeBases.internalValue = undefined;
      this._model.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._instruction = value.instruction;
      this._k = value.k;
      this._maxTokens = value.maxTokens;
      this._name = value.name;
      this._temperature = value.temperature;
      this._topP = value.topP;
      this._uuid = value.uuid;
      this._knowledgeBases.internalValue = value.knowledgeBases;
      this._model.internalValue = value.model;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // instruction - computed: false, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // k - computed: false, optional: true, required: false
  private _k?: number; 
  public get k() {
    return this.getNumberAttribute('k');
  }
  public set k(value: number) {
    this._k = value;
  }
  public resetK() {
    this._k = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kInput() {
    return this._k;
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // name - computed: false, optional: true, required: false
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

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_p - computed: false, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // knowledge_bases - computed: false, optional: true, required: false
  private _knowledgeBases = new GenaiAgentTemplateKnowledgeBasesList(this, "knowledge_bases", false);
  public get knowledgeBases() {
    return this._knowledgeBases;
  }
  public putKnowledgeBases(value: GenaiAgentTemplateKnowledgeBases[] | cdktf.IResolvable) {
    this._knowledgeBases.internalValue = value;
  }
  public resetKnowledgeBases() {
    this._knowledgeBases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBasesInput() {
    return this._knowledgeBases.internalValue;
  }

  // model - computed: false, optional: true, required: false
  private _model = new GenaiAgentTemplateModelList(this, "model", false);
  public get model() {
    return this._model;
  }
  public putModel(value: GenaiAgentTemplateModel[] | cdktf.IResolvable) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }
}

export class GenaiAgentTemplateList extends cdktf.ComplexList {
  public internalValue? : GenaiAgentTemplate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GenaiAgentTemplateOutputReference {
    return new GenaiAgentTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent digitalocean_genai_agent}
*/
export class GenaiAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenaiAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenaiAgent to import
  * @param importFromId The id of the existing GenaiAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenaiAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent digitalocean_genai_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenaiAgentConfig
  */
  public constructor(scope: Construct, id: string, config: GenaiAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_agent',
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
    this._anthropicKeyUuid = config.anthropicKeyUuid;
    this._createdAt = config.createdAt;
    this._description = config.description;
    this._id = config.id;
    this._ifCase = config.ifCase;
    this._instruction = config.instruction;
    this._k = config.k;
    this._knowledgeBaseUuid = config.knowledgeBaseUuid;
    this._maxTokens = config.maxTokens;
    this._modelUuid = config.modelUuid;
    this._name = config.name;
    this._openAiKeyUuid = config.openAiKeyUuid;
    this._projectId = config.projectId;
    this._provideCitations = config.provideCitations;
    this._region = config.region;
    this._retrievalMethod = config.retrievalMethod;
    this._routeCreatedBy = config.routeCreatedBy;
    this._routeName = config.routeName;
    this._routeUuid = config.routeUuid;
    this._tags = config.tags;
    this._temperature = config.temperature;
    this._topP = config.topP;
    this._url = config.url;
    this._userId = config.userId;
    this._agentGuardrail.internalValue = config.agentGuardrail;
    this._anthropicApiKey.internalValue = config.anthropicApiKey;
    this._apiKeyInfos.internalValue = config.apiKeyInfos;
    this._apiKeys.internalValue = config.apiKeys;
    this._chatbot.internalValue = config.chatbot;
    this._chatbotIdentifiers.internalValue = config.chatbotIdentifiers;
    this._childAgents.internalValue = config.childAgents;
    this._deployment.internalValue = config.deployment;
    this._functions.internalValue = config.functions;
    this._knowledgeBases.internalValue = config.knowledgeBases;
    this._model.internalValue = config.model;
    this._openAiApiKey.internalValue = config.openAiApiKey;
    this._parentAgents.internalValue = config.parentAgents;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anthropic_key_uuid - computed: false, optional: true, required: false
  private _anthropicKeyUuid?: string; 
  public get anthropicKeyUuid() {
    return this.getStringAttribute('anthropic_key_uuid');
  }
  public set anthropicKeyUuid(value: string) {
    this._anthropicKeyUuid = value;
  }
  public resetAnthropicKeyUuid() {
    this._anthropicKeyUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicKeyUuidInput() {
    return this._anthropicKeyUuid;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // instruction - computed: false, optional: false, required: true
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // k - computed: false, optional: true, required: false
  private _k?: number; 
  public get k() {
    return this.getNumberAttribute('k');
  }
  public set k(value: number) {
    this._k = value;
  }
  public resetK() {
    this._k = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kInput() {
    return this._k;
  }

  // knowledge_base_uuid - computed: false, optional: true, required: false
  private _knowledgeBaseUuid?: string[]; 
  public get knowledgeBaseUuid() {
    return this.getListAttribute('knowledge_base_uuid');
  }
  public set knowledgeBaseUuid(value: string[]) {
    this._knowledgeBaseUuid = value;
  }
  public resetKnowledgeBaseUuid() {
    this._knowledgeBaseUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseUuidInput() {
    return this._knowledgeBaseUuid;
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // model_uuid - computed: false, optional: false, required: true
  private _modelUuid?: string; 
  public get modelUuid() {
    return this.getStringAttribute('model_uuid');
  }
  public set modelUuid(value: string) {
    this._modelUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelUuidInput() {
    return this._modelUuid;
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

  // open_ai_key_uuid - computed: false, optional: true, required: false
  private _openAiKeyUuid?: string; 
  public get openAiKeyUuid() {
    return this.getStringAttribute('open_ai_key_uuid');
  }
  public set openAiKeyUuid(value: string) {
    this._openAiKeyUuid = value;
  }
  public resetOpenAiKeyUuid() {
    this._openAiKeyUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openAiKeyUuidInput() {
    return this._openAiKeyUuid;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // provide_citations - computed: false, optional: true, required: false
  private _provideCitations?: boolean | cdktf.IResolvable; 
  public get provideCitations() {
    return this.getBooleanAttribute('provide_citations');
  }
  public set provideCitations(value: boolean | cdktf.IResolvable) {
    this._provideCitations = value;
  }
  public resetProvideCitations() {
    this._provideCitations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provideCitationsInput() {
    return this._provideCitations;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // retrieval_method - computed: false, optional: true, required: false
  private _retrievalMethod?: string; 
  public get retrievalMethod() {
    return this.getStringAttribute('retrieval_method');
  }
  public set retrievalMethod(value: string) {
    this._retrievalMethod = value;
  }
  public resetRetrievalMethod() {
    this._retrievalMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalMethodInput() {
    return this._retrievalMethod;
  }

  // route_created_at - computed: true, optional: false, required: false
  public get routeCreatedAt() {
    return this.getStringAttribute('route_created_at');
  }

  // route_created_by - computed: false, optional: true, required: false
  private _routeCreatedBy?: string; 
  public get routeCreatedBy() {
    return this.getStringAttribute('route_created_by');
  }
  public set routeCreatedBy(value: string) {
    this._routeCreatedBy = value;
  }
  public resetRouteCreatedBy() {
    this._routeCreatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeCreatedByInput() {
    return this._routeCreatedBy;
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

  // route_uuid - computed: false, optional: true, required: false
  private _routeUuid?: string; 
  public get routeUuid() {
    return this.getStringAttribute('route_uuid');
  }
  public set routeUuid(value: string) {
    this._routeUuid = value;
  }
  public resetRouteUuid() {
    this._routeUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeUuidInput() {
    return this._routeUuid;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_p - computed: false, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // agent_guardrail - computed: false, optional: true, required: false
  private _agentGuardrail = new GenaiAgentAgentGuardrailList(this, "agent_guardrail", false);
  public get agentGuardrail() {
    return this._agentGuardrail;
  }
  public putAgentGuardrail(value: GenaiAgentAgentGuardrail[] | cdktf.IResolvable) {
    this._agentGuardrail.internalValue = value;
  }
  public resetAgentGuardrail() {
    this._agentGuardrail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGuardrailInput() {
    return this._agentGuardrail.internalValue;
  }

  // anthropic_api_key - computed: false, optional: true, required: false
  private _anthropicApiKey = new GenaiAgentAnthropicApiKeyList(this, "anthropic_api_key", false);
  public get anthropicApiKey() {
    return this._anthropicApiKey;
  }
  public putAnthropicApiKey(value: GenaiAgentAnthropicApiKey[] | cdktf.IResolvable) {
    this._anthropicApiKey.internalValue = value;
  }
  public resetAnthropicApiKey() {
    this._anthropicApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicApiKeyInput() {
    return this._anthropicApiKey.internalValue;
  }

  // api_key_infos - computed: false, optional: true, required: false
  private _apiKeyInfos = new GenaiAgentApiKeyInfosList(this, "api_key_infos", false);
  public get apiKeyInfos() {
    return this._apiKeyInfos;
  }
  public putApiKeyInfos(value: GenaiAgentApiKeyInfos[] | cdktf.IResolvable) {
    this._apiKeyInfos.internalValue = value;
  }
  public resetApiKeyInfos() {
    this._apiKeyInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInfosInput() {
    return this._apiKeyInfos.internalValue;
  }

  // api_keys - computed: false, optional: true, required: false
  private _apiKeys = new GenaiAgentApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }
  public putApiKeys(value: GenaiAgentApiKeys[] | cdktf.IResolvable) {
    this._apiKeys.internalValue = value;
  }
  public resetApiKeys() {
    this._apiKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeysInput() {
    return this._apiKeys.internalValue;
  }

  // chatbot - computed: false, optional: true, required: false
  private _chatbot = new GenaiAgentChatbotList(this, "chatbot", false);
  public get chatbot() {
    return this._chatbot;
  }
  public putChatbot(value: GenaiAgentChatbot[] | cdktf.IResolvable) {
    this._chatbot.internalValue = value;
  }
  public resetChatbot() {
    this._chatbot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatbotInput() {
    return this._chatbot.internalValue;
  }

  // chatbot_identifiers - computed: false, optional: true, required: false
  private _chatbotIdentifiers = new GenaiAgentChatbotIdentifiersList(this, "chatbot_identifiers", false);
  public get chatbotIdentifiers() {
    return this._chatbotIdentifiers;
  }
  public putChatbotIdentifiers(value: GenaiAgentChatbotIdentifiers[] | cdktf.IResolvable) {
    this._chatbotIdentifiers.internalValue = value;
  }
  public resetChatbotIdentifiers() {
    this._chatbotIdentifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatbotIdentifiersInput() {
    return this._chatbotIdentifiers.internalValue;
  }

  // child_agents - computed: false, optional: true, required: false
  private _childAgents = new GenaiAgentChildAgentsList(this, "child_agents", false);
  public get childAgents() {
    return this._childAgents;
  }
  public putChildAgents(value: GenaiAgentChildAgents[] | cdktf.IResolvable) {
    this._childAgents.internalValue = value;
  }
  public resetChildAgents() {
    this._childAgents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childAgentsInput() {
    return this._childAgents.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new GenaiAgentDeploymentList(this, "deployment", false);
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: GenaiAgentDeployment[] | cdktf.IResolvable) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // functions - computed: false, optional: true, required: false
  private _functions = new GenaiAgentFunctionsList(this, "functions", false);
  public get functions() {
    return this._functions;
  }
  public putFunctions(value: GenaiAgentFunctions[] | cdktf.IResolvable) {
    this._functions.internalValue = value;
  }
  public resetFunctions() {
    this._functions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions.internalValue;
  }

  // knowledge_bases - computed: false, optional: true, required: false
  private _knowledgeBases = new GenaiAgentKnowledgeBasesList(this, "knowledge_bases", false);
  public get knowledgeBases() {
    return this._knowledgeBases;
  }
  public putKnowledgeBases(value: GenaiAgentKnowledgeBases[] | cdktf.IResolvable) {
    this._knowledgeBases.internalValue = value;
  }
  public resetKnowledgeBases() {
    this._knowledgeBases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBasesInput() {
    return this._knowledgeBases.internalValue;
  }

  // model - computed: false, optional: true, required: false
  private _model = new GenaiAgentModelList(this, "model", false);
  public get model() {
    return this._model;
  }
  public putModel(value: GenaiAgentModel[] | cdktf.IResolvable) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // open_ai_api_key - computed: false, optional: true, required: false
  private _openAiApiKey = new GenaiAgentOpenAiApiKeyList(this, "open_ai_api_key", false);
  public get openAiApiKey() {
    return this._openAiApiKey;
  }
  public putOpenAiApiKey(value: GenaiAgentOpenAiApiKey[] | cdktf.IResolvable) {
    this._openAiApiKey.internalValue = value;
  }
  public resetOpenAiApiKey() {
    this._openAiApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openAiApiKeyInput() {
    return this._openAiApiKey.internalValue;
  }

  // parent_agents - computed: false, optional: true, required: false
  private _parentAgents = new GenaiAgentParentAgentsList(this, "parent_agents", false);
  public get parentAgents() {
    return this._parentAgents;
  }
  public putParentAgents(value: GenaiAgentParentAgents[] | cdktf.IResolvable) {
    this._parentAgents.internalValue = value;
  }
  public resetParentAgents() {
    this._parentAgents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentAgentsInput() {
    return this._parentAgents.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new GenaiAgentTemplateList(this, "template", false);
  public get template() {
    return this._template;
  }
  public putTemplate(value: GenaiAgentTemplate[] | cdktf.IResolvable) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anthropic_key_uuid: cdktf.stringToTerraform(this._anthropicKeyUuid),
      created_at: cdktf.stringToTerraform(this._createdAt),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      if_case: cdktf.stringToTerraform(this._ifCase),
      instruction: cdktf.stringToTerraform(this._instruction),
      k: cdktf.numberToTerraform(this._k),
      knowledge_base_uuid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._knowledgeBaseUuid),
      max_tokens: cdktf.numberToTerraform(this._maxTokens),
      model_uuid: cdktf.stringToTerraform(this._modelUuid),
      name: cdktf.stringToTerraform(this._name),
      open_ai_key_uuid: cdktf.stringToTerraform(this._openAiKeyUuid),
      project_id: cdktf.stringToTerraform(this._projectId),
      provide_citations: cdktf.booleanToTerraform(this._provideCitations),
      region: cdktf.stringToTerraform(this._region),
      retrieval_method: cdktf.stringToTerraform(this._retrievalMethod),
      route_created_by: cdktf.stringToTerraform(this._routeCreatedBy),
      route_name: cdktf.stringToTerraform(this._routeName),
      route_uuid: cdktf.stringToTerraform(this._routeUuid),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      temperature: cdktf.numberToTerraform(this._temperature),
      top_p: cdktf.numberToTerraform(this._topP),
      url: cdktf.stringToTerraform(this._url),
      user_id: cdktf.stringToTerraform(this._userId),
      agent_guardrail: cdktf.listMapper(genaiAgentAgentGuardrailToTerraform, true)(this._agentGuardrail.internalValue),
      anthropic_api_key: cdktf.listMapper(genaiAgentAnthropicApiKeyToTerraform, true)(this._anthropicApiKey.internalValue),
      api_key_infos: cdktf.listMapper(genaiAgentApiKeyInfosToTerraform, true)(this._apiKeyInfos.internalValue),
      api_keys: cdktf.listMapper(genaiAgentApiKeysToTerraform, true)(this._apiKeys.internalValue),
      chatbot: cdktf.listMapper(genaiAgentChatbotToTerraform, true)(this._chatbot.internalValue),
      chatbot_identifiers: cdktf.listMapper(genaiAgentChatbotIdentifiersToTerraform, true)(this._chatbotIdentifiers.internalValue),
      child_agents: cdktf.listMapper(genaiAgentChildAgentsToTerraform, true)(this._childAgents.internalValue),
      deployment: cdktf.listMapper(genaiAgentDeploymentToTerraform, true)(this._deployment.internalValue),
      functions: cdktf.listMapper(genaiAgentFunctionsToTerraform, true)(this._functions.internalValue),
      knowledge_bases: cdktf.listMapper(genaiAgentKnowledgeBasesToTerraform, true)(this._knowledgeBases.internalValue),
      model: cdktf.listMapper(genaiAgentModelToTerraform, true)(this._model.internalValue),
      open_ai_api_key: cdktf.listMapper(genaiAgentOpenAiApiKeyToTerraform, true)(this._openAiApiKey.internalValue),
      parent_agents: cdktf.listMapper(genaiAgentParentAgentsToTerraform, true)(this._parentAgents.internalValue),
      template: cdktf.listMapper(genaiAgentTemplateToTerraform, true)(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anthropic_key_uuid: {
        value: cdktf.stringToHclTerraform(this._anthropicKeyUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
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
      instruction: {
        value: cdktf.stringToHclTerraform(this._instruction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k: {
        value: cdktf.numberToHclTerraform(this._k),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      knowledge_base_uuid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._knowledgeBaseUuid),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_tokens: {
        value: cdktf.numberToHclTerraform(this._maxTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      model_uuid: {
        value: cdktf.stringToHclTerraform(this._modelUuid),
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
      open_ai_key_uuid: {
        value: cdktf.stringToHclTerraform(this._openAiKeyUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provide_citations: {
        value: cdktf.booleanToHclTerraform(this._provideCitations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retrieval_method: {
        value: cdktf.stringToHclTerraform(this._retrievalMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_created_by: {
        value: cdktf.stringToHclTerraform(this._routeCreatedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_name: {
        value: cdktf.stringToHclTerraform(this._routeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_uuid: {
        value: cdktf.stringToHclTerraform(this._routeUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      temperature: {
        value: cdktf.numberToHclTerraform(this._temperature),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      top_p: {
        value: cdktf.numberToHclTerraform(this._topP),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_guardrail: {
        value: cdktf.listMapperHcl(genaiAgentAgentGuardrailToHclTerraform, true)(this._agentGuardrail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentAgentGuardrailList",
      },
      anthropic_api_key: {
        value: cdktf.listMapperHcl(genaiAgentAnthropicApiKeyToHclTerraform, true)(this._anthropicApiKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentAnthropicApiKeyList",
      },
      api_key_infos: {
        value: cdktf.listMapperHcl(genaiAgentApiKeyInfosToHclTerraform, true)(this._apiKeyInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentApiKeyInfosList",
      },
      api_keys: {
        value: cdktf.listMapperHcl(genaiAgentApiKeysToHclTerraform, true)(this._apiKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentApiKeysList",
      },
      chatbot: {
        value: cdktf.listMapperHcl(genaiAgentChatbotToHclTerraform, true)(this._chatbot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentChatbotList",
      },
      chatbot_identifiers: {
        value: cdktf.listMapperHcl(genaiAgentChatbotIdentifiersToHclTerraform, true)(this._chatbotIdentifiers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentChatbotIdentifiersList",
      },
      child_agents: {
        value: cdktf.listMapperHcl(genaiAgentChildAgentsToHclTerraform, true)(this._childAgents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentChildAgentsList",
      },
      deployment: {
        value: cdktf.listMapperHcl(genaiAgentDeploymentToHclTerraform, true)(this._deployment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentDeploymentList",
      },
      functions: {
        value: cdktf.listMapperHcl(genaiAgentFunctionsToHclTerraform, true)(this._functions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentFunctionsList",
      },
      knowledge_bases: {
        value: cdktf.listMapperHcl(genaiAgentKnowledgeBasesToHclTerraform, true)(this._knowledgeBases.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentKnowledgeBasesList",
      },
      model: {
        value: cdktf.listMapperHcl(genaiAgentModelToHclTerraform, true)(this._model.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentModelList",
      },
      open_ai_api_key: {
        value: cdktf.listMapperHcl(genaiAgentOpenAiApiKeyToHclTerraform, true)(this._openAiApiKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentOpenAiApiKeyList",
      },
      parent_agents: {
        value: cdktf.listMapperHcl(genaiAgentParentAgentsToHclTerraform, true)(this._parentAgents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentParentAgentsList",
      },
      template: {
        value: cdktf.listMapperHcl(genaiAgentTemplateToHclTerraform, true)(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiAgentTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
