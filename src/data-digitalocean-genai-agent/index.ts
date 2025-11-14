/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanGenaiAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Agent to retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#agent_id DataDigitaloceanGenaiAgent#agent_id}
  */
  readonly agentId: string;
  /**
  * Description for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#description DataDigitaloceanGenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#id DataDigitaloceanGenaiAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If case condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#if_case DataDigitaloceanGenaiAgent#if_case}
  */
  readonly ifCase?: string;
  /**
  * K value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#k DataDigitaloceanGenaiAgent#k}
  */
  readonly k?: number;
  /**
  * Maximum tokens allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#max_tokens DataDigitaloceanGenaiAgent#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Retrieval method used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#retrieval_method DataDigitaloceanGenaiAgent#retrieval_method}
  */
  readonly retrievalMethod?: string;
  /**
  * User who created the route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#route_created_by DataDigitaloceanGenaiAgent#route_created_by}
  */
  readonly routeCreatedBy?: string;
  /**
  * Route name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#route_name DataDigitaloceanGenaiAgent#route_name}
  */
  readonly routeName?: string;
  /**
  * Route UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#route_uuid DataDigitaloceanGenaiAgent#route_uuid}
  */
  readonly routeUuid?: string;
  /**
  * List of Tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#tags DataDigitaloceanGenaiAgent#tags}
  */
  readonly tags?: string[];
  /**
  * Agent temperature setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#temperature DataDigitaloceanGenaiAgent#temperature}
  */
  readonly temperature?: number;
  /**
  * Top P sampling parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#top_p DataDigitaloceanGenaiAgent#top_p}
  */
  readonly topP?: number;
  /**
  * URL for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#url DataDigitaloceanGenaiAgent#url}
  */
  readonly url?: string;
  /**
  * User ID linked with the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#user_id DataDigitaloceanGenaiAgent#user_id}
  */
  readonly userId?: string;
  /**
  * agent_guardrail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#agent_guardrail DataDigitaloceanGenaiAgent#agent_guardrail}
  */
  readonly agentGuardrail?: DataDigitaloceanGenaiAgentAgentGuardrail[] | cdktf.IResolvable;
  /**
  * anthropic_api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#anthropic_api_key DataDigitaloceanGenaiAgent#anthropic_api_key}
  */
  readonly anthropicApiKey?: DataDigitaloceanGenaiAgentAnthropicApiKey[] | cdktf.IResolvable;
  /**
  * api_key_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#api_key_infos DataDigitaloceanGenaiAgent#api_key_infos}
  */
  readonly apiKeyInfos?: DataDigitaloceanGenaiAgentApiKeyInfos[] | cdktf.IResolvable;
  /**
  * api_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#api_keys DataDigitaloceanGenaiAgent#api_keys}
  */
  readonly apiKeys?: DataDigitaloceanGenaiAgentApiKeys[] | cdktf.IResolvable;
  /**
  * chatbot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#chatbot DataDigitaloceanGenaiAgent#chatbot}
  */
  readonly chatbot?: DataDigitaloceanGenaiAgentChatbot[] | cdktf.IResolvable;
  /**
  * chatbot_identifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#chatbot_identifiers DataDigitaloceanGenaiAgent#chatbot_identifiers}
  */
  readonly chatbotIdentifiers?: DataDigitaloceanGenaiAgentChatbotIdentifiers[] | cdktf.IResolvable;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#deployment DataDigitaloceanGenaiAgent#deployment}
  */
  readonly deployment?: DataDigitaloceanGenaiAgentDeployment[] | cdktf.IResolvable;
  /**
  * functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#functions DataDigitaloceanGenaiAgent#functions}
  */
  readonly functions?: DataDigitaloceanGenaiAgentFunctions[] | cdktf.IResolvable;
  /**
  * knowledge_bases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#knowledge_bases DataDigitaloceanGenaiAgent#knowledge_bases}
  */
  readonly knowledgeBases?: DataDigitaloceanGenaiAgentKnowledgeBases[] | cdktf.IResolvable;
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#model DataDigitaloceanGenaiAgent#model}
  */
  readonly model?: DataDigitaloceanGenaiAgentModel[] | cdktf.IResolvable;
  /**
  * open_ai_api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#open_ai_api_key DataDigitaloceanGenaiAgent#open_ai_api_key}
  */
  readonly openAiApiKey?: DataDigitaloceanGenaiAgentOpenAiApiKey[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#template DataDigitaloceanGenaiAgent#template}
  */
  readonly template?: DataDigitaloceanGenaiAgentTemplate[] | cdktf.IResolvable;
}
export interface DataDigitaloceanGenaiAgentChildAgentsAnthropicApiKey {
}

export function dataDigitaloceanGenaiAgentChildAgentsAnthropicApiKeyToTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsAnthropicApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentChildAgentsAnthropicApiKeyToHclTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsAnthropicApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentChildAgentsAnthropicApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentChildAgentsAnthropicApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentChildAgentsAnthropicApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataDigitaloceanGenaiAgentChildAgentsAnthropicApiKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentChildAgentsAnthropicApiKeyOutputReference {
    return new DataDigitaloceanGenaiAgentChildAgentsAnthropicApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentChildAgentsApiKeyInfos {
}

export function dataDigitaloceanGenaiAgentChildAgentsApiKeyInfosToTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsApiKeyInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentChildAgentsApiKeyInfosToHclTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsApiKeyInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentChildAgentsApiKeyInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentChildAgentsApiKeyInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentChildAgentsApiKeyInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataDigitaloceanGenaiAgentChildAgentsApiKeyInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentChildAgentsApiKeyInfosOutputReference {
    return new DataDigitaloceanGenaiAgentChildAgentsApiKeyInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentChildAgentsApiKeys {
}

export function dataDigitaloceanGenaiAgentChildAgentsApiKeysToTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentChildAgentsApiKeysToHclTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentChildAgentsApiKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentChildAgentsApiKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentChildAgentsApiKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
}

export class DataDigitaloceanGenaiAgentChildAgentsApiKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentChildAgentsApiKeysOutputReference {
    return new DataDigitaloceanGenaiAgentChildAgentsApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentChildAgentsChatbot {
}

export function dataDigitaloceanGenaiAgentChildAgentsChatbotToTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsChatbot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentChildAgentsChatbotToHclTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsChatbot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentChildAgentsChatbotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentChildAgentsChatbot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentChildAgentsChatbot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // button_background_color - computed: true, optional: false, required: false
  public get buttonBackgroundColor() {
    return this.getStringAttribute('button_background_color');
  }

  // logo - computed: true, optional: false, required: false
  public get logo() {
    return this.getStringAttribute('logo');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_color - computed: true, optional: false, required: false
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }

  // secondary_color - computed: true, optional: false, required: false
  public get secondaryColor() {
    return this.getStringAttribute('secondary_color');
  }

  // starting_message - computed: true, optional: false, required: false
  public get startingMessage() {
    return this.getStringAttribute('starting_message');
  }
}

export class DataDigitaloceanGenaiAgentChildAgentsChatbotList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentChildAgentsChatbotOutputReference {
    return new DataDigitaloceanGenaiAgentChildAgentsChatbotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiers {
}

export function dataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiersToTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiersToHclTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chatbot_id - computed: true, optional: false, required: false
  public get chatbotId() {
    return this.getStringAttribute('chatbot_id');
  }
}

export class DataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiersList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiersOutputReference {
    return new DataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentChildAgentsDeployment {
}

export function dataDigitaloceanGenaiAgentChildAgentsDeploymentToTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentChildAgentsDeploymentToHclTerraform(struct?: DataDigitaloceanGenaiAgentChildAgentsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentChildAgentsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentChildAgentsDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentChildAgentsDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataDigitaloceanGenaiAgentChildAgentsDeploymentList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentChildAgentsDeploymentOutputReference {
    return new DataDigitaloceanGenaiAgentChildAgentsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentChildAgents {
}

export function dataDigitaloceanGenaiAgentChildAgentsToTerraform(struct?: DataDigitaloceanGenaiAgentChildAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentChildAgentsToHclTerraform(struct?: DataDigitaloceanGenaiAgentChildAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentChildAgentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentChildAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentChildAgents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // anthropic_api_key - computed: true, optional: false, required: false
  private _anthropicApiKey = new DataDigitaloceanGenaiAgentChildAgentsAnthropicApiKeyList(this, "anthropic_api_key", false);
  public get anthropicApiKey() {
    return this._anthropicApiKey;
  }

  // api_key_infos - computed: true, optional: false, required: false
  private _apiKeyInfos = new DataDigitaloceanGenaiAgentChildAgentsApiKeyInfosList(this, "api_key_infos", false);
  public get apiKeyInfos() {
    return this._apiKeyInfos;
  }

  // api_keys - computed: true, optional: false, required: false
  private _apiKeys = new DataDigitaloceanGenaiAgentChildAgentsApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }

  // chatbot - computed: true, optional: false, required: false
  private _chatbot = new DataDigitaloceanGenaiAgentChildAgentsChatbotList(this, "chatbot", false);
  public get chatbot() {
    return this._chatbot;
  }

  // chatbot_identifiers - computed: true, optional: false, required: false
  private _chatbotIdentifiers = new DataDigitaloceanGenaiAgentChildAgentsChatbotIdentifiersList(this, "chatbot_identifiers", false);
  public get chatbotIdentifiers() {
    return this._chatbotIdentifiers;
  }

  // deployment - computed: true, optional: false, required: false
  private _deployment = new DataDigitaloceanGenaiAgentChildAgentsDeploymentList(this, "deployment", false);
  public get deployment() {
    return this._deployment;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // instruction - computed: true, optional: false, required: false
  public get instruction() {
    return this.getStringAttribute('instruction');
  }

  // model_uuid - computed: true, optional: false, required: false
  public get modelUuid() {
    return this.getStringAttribute('model_uuid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataDigitaloceanGenaiAgentChildAgentsList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentChildAgentsOutputReference {
    return new DataDigitaloceanGenaiAgentChildAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentParentAgentsAnthropicApiKey {
}

export function dataDigitaloceanGenaiAgentParentAgentsAnthropicApiKeyToTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsAnthropicApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentParentAgentsAnthropicApiKeyToHclTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsAnthropicApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentParentAgentsAnthropicApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentParentAgentsAnthropicApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentParentAgentsAnthropicApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataDigitaloceanGenaiAgentParentAgentsAnthropicApiKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentParentAgentsAnthropicApiKeyOutputReference {
    return new DataDigitaloceanGenaiAgentParentAgentsAnthropicApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentParentAgentsApiKeyInfos {
}

export function dataDigitaloceanGenaiAgentParentAgentsApiKeyInfosToTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsApiKeyInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentParentAgentsApiKeyInfosToHclTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsApiKeyInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentParentAgentsApiKeyInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentParentAgentsApiKeyInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentParentAgentsApiKeyInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataDigitaloceanGenaiAgentParentAgentsApiKeyInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentParentAgentsApiKeyInfosOutputReference {
    return new DataDigitaloceanGenaiAgentParentAgentsApiKeyInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentParentAgentsApiKeys {
}

export function dataDigitaloceanGenaiAgentParentAgentsApiKeysToTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentParentAgentsApiKeysToHclTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentParentAgentsApiKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentParentAgentsApiKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentParentAgentsApiKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
}

export class DataDigitaloceanGenaiAgentParentAgentsApiKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentParentAgentsApiKeysOutputReference {
    return new DataDigitaloceanGenaiAgentParentAgentsApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentParentAgentsChatbot {
}

export function dataDigitaloceanGenaiAgentParentAgentsChatbotToTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsChatbot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentParentAgentsChatbotToHclTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsChatbot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentParentAgentsChatbotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentParentAgentsChatbot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentParentAgentsChatbot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // button_background_color - computed: true, optional: false, required: false
  public get buttonBackgroundColor() {
    return this.getStringAttribute('button_background_color');
  }

  // logo - computed: true, optional: false, required: false
  public get logo() {
    return this.getStringAttribute('logo');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_color - computed: true, optional: false, required: false
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }

  // secondary_color - computed: true, optional: false, required: false
  public get secondaryColor() {
    return this.getStringAttribute('secondary_color');
  }

  // starting_message - computed: true, optional: false, required: false
  public get startingMessage() {
    return this.getStringAttribute('starting_message');
  }
}

export class DataDigitaloceanGenaiAgentParentAgentsChatbotList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentParentAgentsChatbotOutputReference {
    return new DataDigitaloceanGenaiAgentParentAgentsChatbotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiers {
}

export function dataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiersToTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiersToHclTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chatbot_id - computed: true, optional: false, required: false
  public get chatbotId() {
    return this.getStringAttribute('chatbot_id');
  }
}

export class DataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiersList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiersOutputReference {
    return new DataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentParentAgentsDeployment {
}

export function dataDigitaloceanGenaiAgentParentAgentsDeploymentToTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentParentAgentsDeploymentToHclTerraform(struct?: DataDigitaloceanGenaiAgentParentAgentsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentParentAgentsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentParentAgentsDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentParentAgentsDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataDigitaloceanGenaiAgentParentAgentsDeploymentList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentParentAgentsDeploymentOutputReference {
    return new DataDigitaloceanGenaiAgentParentAgentsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentParentAgents {
}

export function dataDigitaloceanGenaiAgentParentAgentsToTerraform(struct?: DataDigitaloceanGenaiAgentParentAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentParentAgentsToHclTerraform(struct?: DataDigitaloceanGenaiAgentParentAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentParentAgentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentParentAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentParentAgents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // anthropic_api_key - computed: true, optional: false, required: false
  private _anthropicApiKey = new DataDigitaloceanGenaiAgentParentAgentsAnthropicApiKeyList(this, "anthropic_api_key", false);
  public get anthropicApiKey() {
    return this._anthropicApiKey;
  }

  // api_key_infos - computed: true, optional: false, required: false
  private _apiKeyInfos = new DataDigitaloceanGenaiAgentParentAgentsApiKeyInfosList(this, "api_key_infos", false);
  public get apiKeyInfos() {
    return this._apiKeyInfos;
  }

  // api_keys - computed: true, optional: false, required: false
  private _apiKeys = new DataDigitaloceanGenaiAgentParentAgentsApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }

  // chatbot - computed: true, optional: false, required: false
  private _chatbot = new DataDigitaloceanGenaiAgentParentAgentsChatbotList(this, "chatbot", false);
  public get chatbot() {
    return this._chatbot;
  }

  // chatbot_identifiers - computed: true, optional: false, required: false
  private _chatbotIdentifiers = new DataDigitaloceanGenaiAgentParentAgentsChatbotIdentifiersList(this, "chatbot_identifiers", false);
  public get chatbotIdentifiers() {
    return this._chatbotIdentifiers;
  }

  // deployment - computed: true, optional: false, required: false
  private _deployment = new DataDigitaloceanGenaiAgentParentAgentsDeploymentList(this, "deployment", false);
  public get deployment() {
    return this._deployment;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // instruction - computed: true, optional: false, required: false
  public get instruction() {
    return this.getStringAttribute('instruction');
  }

  // model_uuid - computed: true, optional: false, required: false
  public get modelUuid() {
    return this.getStringAttribute('model_uuid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataDigitaloceanGenaiAgentParentAgentsList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentParentAgentsOutputReference {
    return new DataDigitaloceanGenaiAgentParentAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentAgentGuardrail {
  /**
  * Agent UUID for the Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#agent_uuid DataDigitaloceanGenaiAgent#agent_uuid}
  */
  readonly agentUuid?: string;
  /**
  * Default response for the Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#default_response DataDigitaloceanGenaiAgent#default_response}
  */
  readonly defaultResponse?: string;
  /**
  * Description of the Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#description DataDigitaloceanGenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Guardrail UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#guardrail_uuid DataDigitaloceanGenaiAgent#guardrail_uuid}
  */
  readonly guardrailUuid?: string;
  /**
  * Indicates if the Guardrail is default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#is_default DataDigitaloceanGenaiAgent#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Name of Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Priority of the Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#priority DataDigitaloceanGenaiAgent#priority}
  */
  readonly priority?: number;
  /**
  * Type of the Guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#type DataDigitaloceanGenaiAgent#type}
  */
  readonly type?: string;
  /**
  * Guardrail UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#uuid DataDigitaloceanGenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function dataDigitaloceanGenaiAgentAgentGuardrailToTerraform(struct?: DataDigitaloceanGenaiAgentAgentGuardrail | cdktf.IResolvable): any {
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


export function dataDigitaloceanGenaiAgentAgentGuardrailToHclTerraform(struct?: DataDigitaloceanGenaiAgentAgentGuardrail | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentAgentGuardrailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentAgentGuardrail | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentAgentGuardrail | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentAgentGuardrailList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentAgentGuardrail[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentAgentGuardrailOutputReference {
    return new DataDigitaloceanGenaiAgentAgentGuardrailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentAnthropicApiKey {
  /**
  * Created By user ID for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#created_by DataDigitaloceanGenaiAgent#created_by}
  */
  readonly createdBy?: string;
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#uuid DataDigitaloceanGenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function dataDigitaloceanGenaiAgentAnthropicApiKeyToTerraform(struct?: DataDigitaloceanGenaiAgentAnthropicApiKey | cdktf.IResolvable): any {
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


export function dataDigitaloceanGenaiAgentAnthropicApiKeyToHclTerraform(struct?: DataDigitaloceanGenaiAgentAnthropicApiKey | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentAnthropicApiKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentAnthropicApiKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentAnthropicApiKey | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentAnthropicApiKeyList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentAnthropicApiKey[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentAnthropicApiKeyOutputReference {
    return new DataDigitaloceanGenaiAgentAnthropicApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentApiKeyInfos {
  /**
  * Created By user ID for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#created_by DataDigitaloceanGenaiAgent#created_by}
  */
  readonly createdBy?: string;
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Updated At timestamp for the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#secret_key DataDigitaloceanGenaiAgent#secret_key}
  */
  readonly secretKey?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#uuid DataDigitaloceanGenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function dataDigitaloceanGenaiAgentApiKeyInfosToTerraform(struct?: DataDigitaloceanGenaiAgentApiKeyInfos | cdktf.IResolvable): any {
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


export function dataDigitaloceanGenaiAgentApiKeyInfosToHclTerraform(struct?: DataDigitaloceanGenaiAgentApiKeyInfos | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentApiKeyInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentApiKeyInfos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentApiKeyInfos | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentApiKeyInfosList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentApiKeyInfos[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentApiKeyInfosOutputReference {
    return new DataDigitaloceanGenaiAgentApiKeyInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentApiKeys {
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#api_key DataDigitaloceanGenaiAgent#api_key}
  */
  readonly apiKey?: string;
}

export function dataDigitaloceanGenaiAgentApiKeysToTerraform(struct?: DataDigitaloceanGenaiAgentApiKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function dataDigitaloceanGenaiAgentApiKeysToHclTerraform(struct?: DataDigitaloceanGenaiAgentApiKeys | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentApiKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentApiKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentApiKeys | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentApiKeysList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentApiKeys[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentApiKeysOutputReference {
    return new DataDigitaloceanGenaiAgentApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentChatbot {
  /**
  * Background color for the chatbot button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#button_background_color DataDigitaloceanGenaiAgent#button_background_color}
  */
  readonly buttonBackgroundColor?: string;
  /**
  * Logo for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#logo DataDigitaloceanGenaiAgent#logo}
  */
  readonly logo?: string;
  /**
  * Name of the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Primary color for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#primary_color DataDigitaloceanGenaiAgent#primary_color}
  */
  readonly primaryColor?: string;
  /**
  * Secondary color for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#secondary_color DataDigitaloceanGenaiAgent#secondary_color}
  */
  readonly secondaryColor?: string;
  /**
  * Starting message for the chatbot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#starting_message DataDigitaloceanGenaiAgent#starting_message}
  */
  readonly startingMessage?: string;
}

export function dataDigitaloceanGenaiAgentChatbotToTerraform(struct?: DataDigitaloceanGenaiAgentChatbot | cdktf.IResolvable): any {
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


export function dataDigitaloceanGenaiAgentChatbotToHclTerraform(struct?: DataDigitaloceanGenaiAgentChatbot | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentChatbotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentChatbot | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentChatbot | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentChatbotList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentChatbot[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentChatbotOutputReference {
    return new DataDigitaloceanGenaiAgentChatbotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentChatbotIdentifiers {
  /**
  * Chatbot ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#chatbot_id DataDigitaloceanGenaiAgent#chatbot_id}
  */
  readonly chatbotId?: string;
}

export function dataDigitaloceanGenaiAgentChatbotIdentifiersToTerraform(struct?: DataDigitaloceanGenaiAgentChatbotIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chatbot_id: cdktf.stringToTerraform(struct!.chatbotId),
  }
}


export function dataDigitaloceanGenaiAgentChatbotIdentifiersToHclTerraform(struct?: DataDigitaloceanGenaiAgentChatbotIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chatbot_id: {
      value: cdktf.stringToHclTerraform(struct!.chatbotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDigitaloceanGenaiAgentChatbotIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentChatbotIdentifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chatbotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatbotId = this._chatbotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentChatbotIdentifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chatbotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chatbotId = value.chatbotId;
    }
  }

  // chatbot_id - computed: false, optional: true, required: false
  private _chatbotId?: string; 
  public get chatbotId() {
    return this.getStringAttribute('chatbot_id');
  }
  public set chatbotId(value: string) {
    this._chatbotId = value;
  }
  public resetChatbotId() {
    this._chatbotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatbotIdInput() {
    return this._chatbotId;
  }
}

export class DataDigitaloceanGenaiAgentChatbotIdentifiersList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentChatbotIdentifiers[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentChatbotIdentifiersOutputReference {
    return new DataDigitaloceanGenaiAgentChatbotIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentDeployment {
  /**
  * Name of the API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Status of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#status DataDigitaloceanGenaiAgent#status}
  */
  readonly status?: string;
  /**
  * Url of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#url DataDigitaloceanGenaiAgent#url}
  */
  readonly url?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#uuid DataDigitaloceanGenaiAgent#uuid}
  */
  readonly uuid?: string;
  /**
  * Visibility of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#visibility DataDigitaloceanGenaiAgent#visibility}
  */
  readonly visibility?: string;
}

export function dataDigitaloceanGenaiAgentDeploymentToTerraform(struct?: DataDigitaloceanGenaiAgentDeployment | cdktf.IResolvable): any {
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


export function dataDigitaloceanGenaiAgentDeploymentToHclTerraform(struct?: DataDigitaloceanGenaiAgentDeployment | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentDeploymentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentDeployment | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentDeploymentList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentDeployment[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentDeploymentOutputReference {
    return new DataDigitaloceanGenaiAgentDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentFunctions {
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#api_key DataDigitaloceanGenaiAgent#api_key}
  */
  readonly apiKey?: string;
  /**
  * Description of the Function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#description DataDigitaloceanGenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Name of function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#faasname DataDigitaloceanGenaiAgent#faasname}
  */
  readonly faasname?: string;
  /**
  * Namespace of function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#faasnamespace DataDigitaloceanGenaiAgent#faasnamespace}
  */
  readonly faasnamespace?: string;
  /**
  * Guardrail UUID for the Function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#guardrail_uuid DataDigitaloceanGenaiAgent#guardrail_uuid}
  */
  readonly guardrailUuid?: string;
  /**
  * Name of function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Url of the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#url DataDigitaloceanGenaiAgent#url}
  */
  readonly url?: string;
  /**
  * API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#uuid DataDigitaloceanGenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function dataDigitaloceanGenaiAgentFunctionsToTerraform(struct?: DataDigitaloceanGenaiAgentFunctions | cdktf.IResolvable): any {
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


export function dataDigitaloceanGenaiAgentFunctionsToHclTerraform(struct?: DataDigitaloceanGenaiAgentFunctions | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentFunctions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentFunctions | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentFunctionsList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentFunctions[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentFunctionsOutputReference {
    return new DataDigitaloceanGenaiAgentFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJob {
  /**
  * Number of completed datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#completed_datasources DataDigitaloceanGenaiAgent#completed_datasources}
  */
  readonly completedDatasources?: number;
  /**
  * Datasource UUIDs for the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#data_source_uuids DataDigitaloceanGenaiAgent#data_source_uuids}
  */
  readonly dataSourceUuids?: string[];
  /**
  * Phase of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#phase DataDigitaloceanGenaiAgent#phase}
  */
  readonly phase?: string;
  /**
  * Number of tokens processed in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#tokens DataDigitaloceanGenaiAgent#tokens}
  */
  readonly tokens?: number;
  /**
  * Total number of datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#total_datasources DataDigitaloceanGenaiAgent#total_datasources}
  */
  readonly totalDatasources?: number;
  /**
  * UUID  of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#uuid DataDigitaloceanGenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function dataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJobToTerraform(struct?: DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJobOutputReference | DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJob): any {
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


export function dataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJobToHclTerraform(struct?: DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJobOutputReference | DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJob): any {
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

export class DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJob | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJob | undefined) {
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
export interface DataDigitaloceanGenaiAgentKnowledgeBases {
  /**
  * Database ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#database_id DataDigitaloceanGenaiAgent#database_id}
  */
  readonly databaseId?: string;
  /**
  * Embedding model UUID for the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#embedding_model_uuid DataDigitaloceanGenaiAgent#embedding_model_uuid}
  */
  readonly embeddingModelUuid?: string;
  /**
  * Indicates if the Knowledge Base is public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#is_public DataDigitaloceanGenaiAgent#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Name of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Project ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#project_id DataDigitaloceanGenaiAgent#project_id}
  */
  readonly projectId?: string;
  /**
  * Region of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#region DataDigitaloceanGenaiAgent#region}
  */
  readonly region?: string;
  /**
  * List of tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#tags DataDigitaloceanGenaiAgent#tags}
  */
  readonly tags?: string[];
  /**
  * User ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#user_id DataDigitaloceanGenaiAgent#user_id}
  */
  readonly userId?: string;
  /**
  * last_indexing_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#last_indexing_job DataDigitaloceanGenaiAgent#last_indexing_job}
  */
  readonly lastIndexingJob?: DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJob;
}

export function dataDigitaloceanGenaiAgentKnowledgeBasesToTerraform(struct?: DataDigitaloceanGenaiAgentKnowledgeBases | cdktf.IResolvable): any {
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
    last_indexing_job: dataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJobToTerraform(struct!.lastIndexingJob),
  }
}


export function dataDigitaloceanGenaiAgentKnowledgeBasesToHclTerraform(struct?: DataDigitaloceanGenaiAgentKnowledgeBases | cdktf.IResolvable): any {
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
      value: dataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJobToHclTerraform(struct!.lastIndexingJob),
      isBlock: true,
      type: "list",
      storageClassType: "DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJobList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDigitaloceanGenaiAgentKnowledgeBasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentKnowledgeBases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentKnowledgeBases | cdktf.IResolvable | undefined) {
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
  private _lastIndexingJob = new DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJobOutputReference(this, "last_indexing_job");
  public get lastIndexingJob() {
    return this._lastIndexingJob;
  }
  public putLastIndexingJob(value: DataDigitaloceanGenaiAgentKnowledgeBasesLastIndexingJob) {
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

export class DataDigitaloceanGenaiAgentKnowledgeBasesList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentKnowledgeBases[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentKnowledgeBasesOutputReference {
    return new DataDigitaloceanGenaiAgentKnowledgeBasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentModelAgreement {
  /**
  * Description of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#description DataDigitaloceanGenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Name of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * URL of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#url DataDigitaloceanGenaiAgent#url}
  */
  readonly url?: string;
  /**
  * UUID of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#uuid DataDigitaloceanGenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function dataDigitaloceanGenaiAgentModelAgreementToTerraform(struct?: DataDigitaloceanGenaiAgentModelAgreement | cdktf.IResolvable): any {
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


export function dataDigitaloceanGenaiAgentModelAgreementToHclTerraform(struct?: DataDigitaloceanGenaiAgentModelAgreement | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentModelAgreementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentModelAgreement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentModelAgreement | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentModelAgreementList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentModelAgreement[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentModelAgreementOutputReference {
    return new DataDigitaloceanGenaiAgentModelAgreementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentModelVersions {
  /**
  * Major version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#major DataDigitaloceanGenaiAgent#major}
  */
  readonly major?: number;
  /**
  * Minor version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#minor DataDigitaloceanGenaiAgent#minor}
  */
  readonly minor?: number;
  /**
  * Patch version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#patch DataDigitaloceanGenaiAgent#patch}
  */
  readonly patch?: number;
}

export function dataDigitaloceanGenaiAgentModelVersionsToTerraform(struct?: DataDigitaloceanGenaiAgentModelVersions | cdktf.IResolvable): any {
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


export function dataDigitaloceanGenaiAgentModelVersionsToHclTerraform(struct?: DataDigitaloceanGenaiAgentModelVersions | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentModelVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentModelVersions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentModelVersions | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentModelVersionsList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentModelVersions[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentModelVersionsOutputReference {
    return new DataDigitaloceanGenaiAgentModelVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentModel {
  /**
  * Inference name of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#inference_name DataDigitaloceanGenaiAgent#inference_name}
  */
  readonly inferenceName?: string;
  /**
  * Infernce version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#inference_version DataDigitaloceanGenaiAgent#inference_version}
  */
  readonly inferenceVersion?: string;
  /**
  * Indicates if the Model Base is foundational
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#is_foundational DataDigitaloceanGenaiAgent#is_foundational}
  */
  readonly isFoundational?: boolean | cdktf.IResolvable;
  /**
  * Name of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Parent UUID of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#parent_uuid DataDigitaloceanGenaiAgent#parent_uuid}
  */
  readonly parentUuid?: string;
  /**
  * Provider of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#provider DataDigitaloceanGenaiAgent#provider}
  */
  readonly provider?: string;
  /**
  * Indicates if the Model upload is complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#upload_complete DataDigitaloceanGenaiAgent#upload_complete}
  */
  readonly uploadComplete?: boolean | cdktf.IResolvable;
  /**
  * URL of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#url DataDigitaloceanGenaiAgent#url}
  */
  readonly url?: string;
  /**
  * List of Usecases for the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#usecases DataDigitaloceanGenaiAgent#usecases}
  */
  readonly usecases?: string[];
  /**
  * agreement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#agreement DataDigitaloceanGenaiAgent#agreement}
  */
  readonly agreement?: DataDigitaloceanGenaiAgentModelAgreement[] | cdktf.IResolvable;
  /**
  * versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#versions DataDigitaloceanGenaiAgent#versions}
  */
  readonly versions?: DataDigitaloceanGenaiAgentModelVersions[] | cdktf.IResolvable;
}

export function dataDigitaloceanGenaiAgentModelToTerraform(struct?: DataDigitaloceanGenaiAgentModel | cdktf.IResolvable): any {
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
    agreement: cdktf.listMapper(dataDigitaloceanGenaiAgentModelAgreementToTerraform, true)(struct!.agreement),
    versions: cdktf.listMapper(dataDigitaloceanGenaiAgentModelVersionsToTerraform, true)(struct!.versions),
  }
}


export function dataDigitaloceanGenaiAgentModelToHclTerraform(struct?: DataDigitaloceanGenaiAgentModel | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentModelAgreementToHclTerraform, true)(struct!.agreement),
      isBlock: true,
      type: "list",
      storageClassType: "DataDigitaloceanGenaiAgentModelAgreementList",
    },
    versions: {
      value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentModelVersionsToHclTerraform, true)(struct!.versions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDigitaloceanGenaiAgentModelVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDigitaloceanGenaiAgentModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentModel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentModel | cdktf.IResolvable | undefined) {
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
  private _agreement = new DataDigitaloceanGenaiAgentModelAgreementList(this, "agreement", false);
  public get agreement() {
    return this._agreement;
  }
  public putAgreement(value: DataDigitaloceanGenaiAgentModelAgreement[] | cdktf.IResolvable) {
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
  private _versions = new DataDigitaloceanGenaiAgentModelVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: DataDigitaloceanGenaiAgentModelVersions[] | cdktf.IResolvable) {
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

export class DataDigitaloceanGenaiAgentModelList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentModel[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentModelOutputReference {
    return new DataDigitaloceanGenaiAgentModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentOpenAiApiKey {
  /**
  * OpenAI API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#api_key DataDigitaloceanGenaiAgent#api_key}
  */
  readonly apiKey?: string;
}

export function dataDigitaloceanGenaiAgentOpenAiApiKeyToTerraform(struct?: DataDigitaloceanGenaiAgentOpenAiApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function dataDigitaloceanGenaiAgentOpenAiApiKeyToHclTerraform(struct?: DataDigitaloceanGenaiAgentOpenAiApiKey | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentOpenAiApiKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentOpenAiApiKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentOpenAiApiKey | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentOpenAiApiKeyList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentOpenAiApiKey[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentOpenAiApiKeyOutputReference {
    return new DataDigitaloceanGenaiAgentOpenAiApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJob {
  /**
  * Number of completed datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#completed_datasources DataDigitaloceanGenaiAgent#completed_datasources}
  */
  readonly completedDatasources?: number;
  /**
  * Datasource UUIDs for the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#data_source_uuids DataDigitaloceanGenaiAgent#data_source_uuids}
  */
  readonly dataSourceUuids?: string[];
  /**
  * Phase of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#phase DataDigitaloceanGenaiAgent#phase}
  */
  readonly phase?: string;
  /**
  * Number of tokens processed in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#tokens DataDigitaloceanGenaiAgent#tokens}
  */
  readonly tokens?: number;
  /**
  * Total number of datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#total_datasources DataDigitaloceanGenaiAgent#total_datasources}
  */
  readonly totalDatasources?: number;
  /**
  * UUID  of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#uuid DataDigitaloceanGenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function dataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJobToTerraform(struct?: DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJobOutputReference | DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJob): any {
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


export function dataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJobToHclTerraform(struct?: DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJobOutputReference | DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJob): any {
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

export class DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJob | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJob | undefined) {
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
export interface DataDigitaloceanGenaiAgentTemplateKnowledgeBases {
  /**
  * Database ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#database_id DataDigitaloceanGenaiAgent#database_id}
  */
  readonly databaseId?: string;
  /**
  * Embedding model UUID for the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#embedding_model_uuid DataDigitaloceanGenaiAgent#embedding_model_uuid}
  */
  readonly embeddingModelUuid?: string;
  /**
  * Indicates if the Knowledge Base is public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#is_public DataDigitaloceanGenaiAgent#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Name of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Project ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#project_id DataDigitaloceanGenaiAgent#project_id}
  */
  readonly projectId?: string;
  /**
  * Region of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#region DataDigitaloceanGenaiAgent#region}
  */
  readonly region?: string;
  /**
  * List of tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#tags DataDigitaloceanGenaiAgent#tags}
  */
  readonly tags?: string[];
  /**
  * User ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#user_id DataDigitaloceanGenaiAgent#user_id}
  */
  readonly userId?: string;
  /**
  * last_indexing_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#last_indexing_job DataDigitaloceanGenaiAgent#last_indexing_job}
  */
  readonly lastIndexingJob?: DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJob;
}

export function dataDigitaloceanGenaiAgentTemplateKnowledgeBasesToTerraform(struct?: DataDigitaloceanGenaiAgentTemplateKnowledgeBases | cdktf.IResolvable): any {
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
    last_indexing_job: dataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJobToTerraform(struct!.lastIndexingJob),
  }
}


export function dataDigitaloceanGenaiAgentTemplateKnowledgeBasesToHclTerraform(struct?: DataDigitaloceanGenaiAgentTemplateKnowledgeBases | cdktf.IResolvable): any {
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
      value: dataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJobToHclTerraform(struct!.lastIndexingJob),
      isBlock: true,
      type: "list",
      storageClassType: "DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJobList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDigitaloceanGenaiAgentTemplateKnowledgeBasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentTemplateKnowledgeBases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentTemplateKnowledgeBases | cdktf.IResolvable | undefined) {
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
  private _lastIndexingJob = new DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJobOutputReference(this, "last_indexing_job");
  public get lastIndexingJob() {
    return this._lastIndexingJob;
  }
  public putLastIndexingJob(value: DataDigitaloceanGenaiAgentTemplateKnowledgeBasesLastIndexingJob) {
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

export class DataDigitaloceanGenaiAgentTemplateKnowledgeBasesList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentTemplateKnowledgeBases[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentTemplateKnowledgeBasesOutputReference {
    return new DataDigitaloceanGenaiAgentTemplateKnowledgeBasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentTemplateModelAgreement {
  /**
  * Description of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#description DataDigitaloceanGenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Name of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * URL of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#url DataDigitaloceanGenaiAgent#url}
  */
  readonly url?: string;
  /**
  * UUID of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#uuid DataDigitaloceanGenaiAgent#uuid}
  */
  readonly uuid?: string;
}

export function dataDigitaloceanGenaiAgentTemplateModelAgreementToTerraform(struct?: DataDigitaloceanGenaiAgentTemplateModelAgreement | cdktf.IResolvable): any {
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


export function dataDigitaloceanGenaiAgentTemplateModelAgreementToHclTerraform(struct?: DataDigitaloceanGenaiAgentTemplateModelAgreement | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentTemplateModelAgreementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentTemplateModelAgreement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentTemplateModelAgreement | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentTemplateModelAgreementList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentTemplateModelAgreement[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentTemplateModelAgreementOutputReference {
    return new DataDigitaloceanGenaiAgentTemplateModelAgreementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentTemplateModelVersions {
  /**
  * Major version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#major DataDigitaloceanGenaiAgent#major}
  */
  readonly major?: number;
  /**
  * Minor version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#minor DataDigitaloceanGenaiAgent#minor}
  */
  readonly minor?: number;
  /**
  * Patch version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#patch DataDigitaloceanGenaiAgent#patch}
  */
  readonly patch?: number;
}

export function dataDigitaloceanGenaiAgentTemplateModelVersionsToTerraform(struct?: DataDigitaloceanGenaiAgentTemplateModelVersions | cdktf.IResolvable): any {
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


export function dataDigitaloceanGenaiAgentTemplateModelVersionsToHclTerraform(struct?: DataDigitaloceanGenaiAgentTemplateModelVersions | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiAgentTemplateModelVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentTemplateModelVersions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentTemplateModelVersions | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiAgentTemplateModelVersionsList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentTemplateModelVersions[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentTemplateModelVersionsOutputReference {
    return new DataDigitaloceanGenaiAgentTemplateModelVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentTemplateModel {
  /**
  * Inference name of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#inference_name DataDigitaloceanGenaiAgent#inference_name}
  */
  readonly inferenceName?: string;
  /**
  * Infernce version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#inference_version DataDigitaloceanGenaiAgent#inference_version}
  */
  readonly inferenceVersion?: string;
  /**
  * Indicates if the Model Base is foundational
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#is_foundational DataDigitaloceanGenaiAgent#is_foundational}
  */
  readonly isFoundational?: boolean | cdktf.IResolvable;
  /**
  * Name of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Parent UUID of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#parent_uuid DataDigitaloceanGenaiAgent#parent_uuid}
  */
  readonly parentUuid?: string;
  /**
  * Provider of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#provider DataDigitaloceanGenaiAgent#provider}
  */
  readonly provider?: string;
  /**
  * Indicates if the Model upload is complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#upload_complete DataDigitaloceanGenaiAgent#upload_complete}
  */
  readonly uploadComplete?: boolean | cdktf.IResolvable;
  /**
  * URL of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#url DataDigitaloceanGenaiAgent#url}
  */
  readonly url?: string;
  /**
  * List of Usecases for the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#usecases DataDigitaloceanGenaiAgent#usecases}
  */
  readonly usecases?: string[];
  /**
  * agreement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#agreement DataDigitaloceanGenaiAgent#agreement}
  */
  readonly agreement?: DataDigitaloceanGenaiAgentTemplateModelAgreement[] | cdktf.IResolvable;
  /**
  * versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#versions DataDigitaloceanGenaiAgent#versions}
  */
  readonly versions?: DataDigitaloceanGenaiAgentTemplateModelVersions[] | cdktf.IResolvable;
}

export function dataDigitaloceanGenaiAgentTemplateModelToTerraform(struct?: DataDigitaloceanGenaiAgentTemplateModel | cdktf.IResolvable): any {
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
    agreement: cdktf.listMapper(dataDigitaloceanGenaiAgentTemplateModelAgreementToTerraform, true)(struct!.agreement),
    versions: cdktf.listMapper(dataDigitaloceanGenaiAgentTemplateModelVersionsToTerraform, true)(struct!.versions),
  }
}


export function dataDigitaloceanGenaiAgentTemplateModelToHclTerraform(struct?: DataDigitaloceanGenaiAgentTemplateModel | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentTemplateModelAgreementToHclTerraform, true)(struct!.agreement),
      isBlock: true,
      type: "list",
      storageClassType: "DataDigitaloceanGenaiAgentTemplateModelAgreementList",
    },
    versions: {
      value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentTemplateModelVersionsToHclTerraform, true)(struct!.versions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDigitaloceanGenaiAgentTemplateModelVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDigitaloceanGenaiAgentTemplateModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentTemplateModel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentTemplateModel | cdktf.IResolvable | undefined) {
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
  private _agreement = new DataDigitaloceanGenaiAgentTemplateModelAgreementList(this, "agreement", false);
  public get agreement() {
    return this._agreement;
  }
  public putAgreement(value: DataDigitaloceanGenaiAgentTemplateModelAgreement[] | cdktf.IResolvable) {
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
  private _versions = new DataDigitaloceanGenaiAgentTemplateModelVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: DataDigitaloceanGenaiAgentTemplateModelVersions[] | cdktf.IResolvable) {
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

export class DataDigitaloceanGenaiAgentTemplateModelList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentTemplateModel[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentTemplateModelOutputReference {
    return new DataDigitaloceanGenaiAgentTemplateModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentTemplate {
  /**
  * Description of the Agent Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#description DataDigitaloceanGenaiAgent#description}
  */
  readonly description?: string;
  /**
  * Instruction for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#instruction DataDigitaloceanGenaiAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * K value for the Agent Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#k DataDigitaloceanGenaiAgent#k}
  */
  readonly k?: number;
  /**
  * Maximum tokens allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#max_tokens DataDigitaloceanGenaiAgent#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Name of the Agent Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#name DataDigitaloceanGenaiAgent#name}
  */
  readonly name?: string;
  /**
  * Agent temperature setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#temperature DataDigitaloceanGenaiAgent#temperature}
  */
  readonly temperature?: number;
  /**
  * Top P sampling parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#top_p DataDigitaloceanGenaiAgent#top_p}
  */
  readonly topP?: number;
  /**
  * uuid of the Agent Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#uuid DataDigitaloceanGenaiAgent#uuid}
  */
  readonly uuid?: string;
  /**
  * knowledge_bases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#knowledge_bases DataDigitaloceanGenaiAgent#knowledge_bases}
  */
  readonly knowledgeBases?: DataDigitaloceanGenaiAgentTemplateKnowledgeBases[] | cdktf.IResolvable;
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#model DataDigitaloceanGenaiAgent#model}
  */
  readonly model?: DataDigitaloceanGenaiAgentTemplateModel[] | cdktf.IResolvable;
}

export function dataDigitaloceanGenaiAgentTemplateToTerraform(struct?: DataDigitaloceanGenaiAgentTemplate | cdktf.IResolvable): any {
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
    knowledge_bases: cdktf.listMapper(dataDigitaloceanGenaiAgentTemplateKnowledgeBasesToTerraform, true)(struct!.knowledgeBases),
    model: cdktf.listMapper(dataDigitaloceanGenaiAgentTemplateModelToTerraform, true)(struct!.model),
  }
}


export function dataDigitaloceanGenaiAgentTemplateToHclTerraform(struct?: DataDigitaloceanGenaiAgentTemplate | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentTemplateKnowledgeBasesToHclTerraform, true)(struct!.knowledgeBases),
      isBlock: true,
      type: "list",
      storageClassType: "DataDigitaloceanGenaiAgentTemplateKnowledgeBasesList",
    },
    model: {
      value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentTemplateModelToHclTerraform, true)(struct!.model),
      isBlock: true,
      type: "list",
      storageClassType: "DataDigitaloceanGenaiAgentTemplateModelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDigitaloceanGenaiAgentTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiAgentTemplate | cdktf.IResolvable | undefined) {
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
  private _knowledgeBases = new DataDigitaloceanGenaiAgentTemplateKnowledgeBasesList(this, "knowledge_bases", false);
  public get knowledgeBases() {
    return this._knowledgeBases;
  }
  public putKnowledgeBases(value: DataDigitaloceanGenaiAgentTemplateKnowledgeBases[] | cdktf.IResolvable) {
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
  private _model = new DataDigitaloceanGenaiAgentTemplateModelList(this, "model", false);
  public get model() {
    return this._model;
  }
  public putModel(value: DataDigitaloceanGenaiAgentTemplateModel[] | cdktf.IResolvable) {
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

export class DataDigitaloceanGenaiAgentTemplateList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiAgentTemplate[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiAgentTemplateOutputReference {
    return new DataDigitaloceanGenaiAgentTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent digitalocean_genai_agent}
*/
export class DataDigitaloceanGenaiAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanGenaiAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanGenaiAgent to import
  * @param importFromId The id of the existing DataDigitaloceanGenaiAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanGenaiAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_agent digitalocean_genai_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanGenaiAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanGenaiAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_agent',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.69.0',
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
    this._id = config.id;
    this._ifCase = config.ifCase;
    this._k = config.k;
    this._maxTokens = config.maxTokens;
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
    this._deployment.internalValue = config.deployment;
    this._functions.internalValue = config.functions;
    this._knowledgeBases.internalValue = config.knowledgeBases;
    this._model.internalValue = config.model;
    this._openAiApiKey.internalValue = config.openAiApiKey;
    this._template.internalValue = config.template;
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

  // child_agents - computed: true, optional: false, required: false
  private _childAgents = new DataDigitaloceanGenaiAgentChildAgentsList(this, "child_agents", false);
  public get childAgents() {
    return this._childAgents;
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

  // instruction - computed: true, optional: false, required: false
  public get instruction() {
    return this.getStringAttribute('instruction');
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

  // model_uuid - computed: true, optional: false, required: false
  public get modelUuid() {
    return this.getStringAttribute('model_uuid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_agents - computed: true, optional: false, required: false
  private _parentAgents = new DataDigitaloceanGenaiAgentParentAgentsList(this, "parent_agents", false);
  public get parentAgents() {
    return this._parentAgents;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
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
  private _agentGuardrail = new DataDigitaloceanGenaiAgentAgentGuardrailList(this, "agent_guardrail", false);
  public get agentGuardrail() {
    return this._agentGuardrail;
  }
  public putAgentGuardrail(value: DataDigitaloceanGenaiAgentAgentGuardrail[] | cdktf.IResolvable) {
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
  private _anthropicApiKey = new DataDigitaloceanGenaiAgentAnthropicApiKeyList(this, "anthropic_api_key", false);
  public get anthropicApiKey() {
    return this._anthropicApiKey;
  }
  public putAnthropicApiKey(value: DataDigitaloceanGenaiAgentAnthropicApiKey[] | cdktf.IResolvable) {
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
  private _apiKeyInfos = new DataDigitaloceanGenaiAgentApiKeyInfosList(this, "api_key_infos", false);
  public get apiKeyInfos() {
    return this._apiKeyInfos;
  }
  public putApiKeyInfos(value: DataDigitaloceanGenaiAgentApiKeyInfos[] | cdktf.IResolvable) {
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
  private _apiKeys = new DataDigitaloceanGenaiAgentApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }
  public putApiKeys(value: DataDigitaloceanGenaiAgentApiKeys[] | cdktf.IResolvable) {
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
  private _chatbot = new DataDigitaloceanGenaiAgentChatbotList(this, "chatbot", false);
  public get chatbot() {
    return this._chatbot;
  }
  public putChatbot(value: DataDigitaloceanGenaiAgentChatbot[] | cdktf.IResolvable) {
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
  private _chatbotIdentifiers = new DataDigitaloceanGenaiAgentChatbotIdentifiersList(this, "chatbot_identifiers", false);
  public get chatbotIdentifiers() {
    return this._chatbotIdentifiers;
  }
  public putChatbotIdentifiers(value: DataDigitaloceanGenaiAgentChatbotIdentifiers[] | cdktf.IResolvable) {
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
  private _deployment = new DataDigitaloceanGenaiAgentDeploymentList(this, "deployment", false);
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataDigitaloceanGenaiAgentDeployment[] | cdktf.IResolvable) {
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
  private _functions = new DataDigitaloceanGenaiAgentFunctionsList(this, "functions", false);
  public get functions() {
    return this._functions;
  }
  public putFunctions(value: DataDigitaloceanGenaiAgentFunctions[] | cdktf.IResolvable) {
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
  private _knowledgeBases = new DataDigitaloceanGenaiAgentKnowledgeBasesList(this, "knowledge_bases", false);
  public get knowledgeBases() {
    return this._knowledgeBases;
  }
  public putKnowledgeBases(value: DataDigitaloceanGenaiAgentKnowledgeBases[] | cdktf.IResolvable) {
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
  private _model = new DataDigitaloceanGenaiAgentModelList(this, "model", false);
  public get model() {
    return this._model;
  }
  public putModel(value: DataDigitaloceanGenaiAgentModel[] | cdktf.IResolvable) {
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
  private _openAiApiKey = new DataDigitaloceanGenaiAgentOpenAiApiKeyList(this, "open_ai_api_key", false);
  public get openAiApiKey() {
    return this._openAiApiKey;
  }
  public putOpenAiApiKey(value: DataDigitaloceanGenaiAgentOpenAiApiKey[] | cdktf.IResolvable) {
    this._openAiApiKey.internalValue = value;
  }
  public resetOpenAiApiKey() {
    this._openAiApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openAiApiKeyInput() {
    return this._openAiApiKey.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataDigitaloceanGenaiAgentTemplateList(this, "template", false);
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataDigitaloceanGenaiAgentTemplate[] | cdktf.IResolvable) {
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
      agent_id: cdktf.stringToTerraform(this._agentId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      if_case: cdktf.stringToTerraform(this._ifCase),
      k: cdktf.numberToTerraform(this._k),
      max_tokens: cdktf.numberToTerraform(this._maxTokens),
      retrieval_method: cdktf.stringToTerraform(this._retrievalMethod),
      route_created_by: cdktf.stringToTerraform(this._routeCreatedBy),
      route_name: cdktf.stringToTerraform(this._routeName),
      route_uuid: cdktf.stringToTerraform(this._routeUuid),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      temperature: cdktf.numberToTerraform(this._temperature),
      top_p: cdktf.numberToTerraform(this._topP),
      url: cdktf.stringToTerraform(this._url),
      user_id: cdktf.stringToTerraform(this._userId),
      agent_guardrail: cdktf.listMapper(dataDigitaloceanGenaiAgentAgentGuardrailToTerraform, true)(this._agentGuardrail.internalValue),
      anthropic_api_key: cdktf.listMapper(dataDigitaloceanGenaiAgentAnthropicApiKeyToTerraform, true)(this._anthropicApiKey.internalValue),
      api_key_infos: cdktf.listMapper(dataDigitaloceanGenaiAgentApiKeyInfosToTerraform, true)(this._apiKeyInfos.internalValue),
      api_keys: cdktf.listMapper(dataDigitaloceanGenaiAgentApiKeysToTerraform, true)(this._apiKeys.internalValue),
      chatbot: cdktf.listMapper(dataDigitaloceanGenaiAgentChatbotToTerraform, true)(this._chatbot.internalValue),
      chatbot_identifiers: cdktf.listMapper(dataDigitaloceanGenaiAgentChatbotIdentifiersToTerraform, true)(this._chatbotIdentifiers.internalValue),
      deployment: cdktf.listMapper(dataDigitaloceanGenaiAgentDeploymentToTerraform, true)(this._deployment.internalValue),
      functions: cdktf.listMapper(dataDigitaloceanGenaiAgentFunctionsToTerraform, true)(this._functions.internalValue),
      knowledge_bases: cdktf.listMapper(dataDigitaloceanGenaiAgentKnowledgeBasesToTerraform, true)(this._knowledgeBases.internalValue),
      model: cdktf.listMapper(dataDigitaloceanGenaiAgentModelToTerraform, true)(this._model.internalValue),
      open_ai_api_key: cdktf.listMapper(dataDigitaloceanGenaiAgentOpenAiApiKeyToTerraform, true)(this._openAiApiKey.internalValue),
      template: cdktf.listMapper(dataDigitaloceanGenaiAgentTemplateToTerraform, true)(this._template.internalValue),
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
      k: {
        value: cdktf.numberToHclTerraform(this._k),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_tokens: {
        value: cdktf.numberToHclTerraform(this._maxTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentAgentGuardrailToHclTerraform, true)(this._agentGuardrail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentAgentGuardrailList",
      },
      anthropic_api_key: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentAnthropicApiKeyToHclTerraform, true)(this._anthropicApiKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentAnthropicApiKeyList",
      },
      api_key_infos: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentApiKeyInfosToHclTerraform, true)(this._apiKeyInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentApiKeyInfosList",
      },
      api_keys: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentApiKeysToHclTerraform, true)(this._apiKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentApiKeysList",
      },
      chatbot: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentChatbotToHclTerraform, true)(this._chatbot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentChatbotList",
      },
      chatbot_identifiers: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentChatbotIdentifiersToHclTerraform, true)(this._chatbotIdentifiers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentChatbotIdentifiersList",
      },
      deployment: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentDeploymentToHclTerraform, true)(this._deployment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentDeploymentList",
      },
      functions: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentFunctionsToHclTerraform, true)(this._functions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentFunctionsList",
      },
      knowledge_bases: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentKnowledgeBasesToHclTerraform, true)(this._knowledgeBases.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentKnowledgeBasesList",
      },
      model: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentModelToHclTerraform, true)(this._model.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentModelList",
      },
      open_ai_api_key: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentOpenAiApiKeyToHclTerraform, true)(this._openAiApiKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentOpenAiApiKeyList",
      },
      template: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiAgentTemplateToHclTerraform, true)(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiAgentTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
