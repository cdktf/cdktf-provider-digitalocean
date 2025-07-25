/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_agents_by_openai_api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_agents_by_openai_api_key#id DataDigitaloceanGenaiAgentsByOpenaiApiKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The UUID of the OpenAI API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_agents_by_openai_api_key#uuid DataDigitaloceanGenaiAgentsByOpenaiApiKey#uuid}
  */
  readonly uuid: string;
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrail {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrailToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrailToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_uuid - computed: true, optional: false, required: false
  public get agentUuid() {
    return this.getStringAttribute('agent_uuid');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_response - computed: true, optional: false, required: false
  public get defaultResponse() {
    return this.getStringAttribute('default_response');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // guardrail_uuid - computed: true, optional: false, required: false
  public get guardrailUuid() {
    return this.getStringAttribute('guardrail_uuid');
  }

  // is_attached - computed: true, optional: false, required: false
  public get isAttached() {
    return this.getBooleanAttribute('is_attached');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrailList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrailOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKey {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKeyToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKeyToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKey | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKeyOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfos {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfosToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfosToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfos | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfosOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeys {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeysToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeysToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeys | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeysOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbot {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbot | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiers {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiersToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiersToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiers | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiersList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiersOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKey {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKeyToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKeyToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKey | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKeyOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfos {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfosToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfosToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfos | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfosOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeys {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeysToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeysToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeys | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeysOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbot {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbot | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiers {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiersToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiersToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiers | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiersList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiersOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeployment {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeploymentToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeploymentToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeploymentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeployment | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeploymentList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeploymentOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgents {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgents | undefined) {
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
  private _anthropicApiKey = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsAnthropicApiKeyList(this, "anthropic_api_key", false);
  public get anthropicApiKey() {
    return this._anthropicApiKey;
  }

  // api_key_infos - computed: true, optional: false, required: false
  private _apiKeyInfos = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeyInfosList(this, "api_key_infos", false);
  public get apiKeyInfos() {
    return this._apiKeyInfos;
  }

  // api_keys - computed: true, optional: false, required: false
  private _apiKeys = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }

  // chatbot - computed: true, optional: false, required: false
  private _chatbot = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotList(this, "chatbot", false);
  public get chatbot() {
    return this._chatbot;
  }

  // chatbot_identifiers - computed: true, optional: false, required: false
  private _chatbotIdentifiers = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsChatbotIdentifiersList(this, "chatbot_identifiers", false);
  public get chatbotIdentifiers() {
    return this._chatbotIdentifiers;
  }

  // deployment - computed: true, optional: false, required: false
  private _deployment = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsDeploymentList(this, "deployment", false);
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeployment {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeploymentToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeploymentToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeploymentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeployment | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeploymentList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeploymentOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctions {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctionsToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctionsToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctions | undefined) {
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // faasname - computed: true, optional: false, required: false
  public get faasname() {
    return this.getStringAttribute('faasname');
  }

  // faasnamespace - computed: true, optional: false, required: false
  public get faasnamespace() {
    return this.getStringAttribute('faasnamespace');
  }

  // guardrail_uuid - computed: true, optional: false, required: false
  public get guardrailUuid() {
    return this.getStringAttribute('guardrail_uuid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctionsOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJob {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJobToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJobToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completed_datasources - computed: true, optional: false, required: false
  public get completedDatasources() {
    return this.getNumberAttribute('completed_datasources');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_source_uuids - computed: true, optional: false, required: false
  public get dataSourceUuids() {
    return this.getListAttribute('data_source_uuids');
  }

  // finished_at - computed: true, optional: false, required: false
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }

  // knowledge_base_uuid - computed: true, optional: false, required: false
  public get knowledgeBaseUuid() {
    return this.getStringAttribute('knowledge_base_uuid');
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // started_at - computed: true, optional: false, required: false
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }

  // tokens - computed: true, optional: false, required: false
  public get tokens() {
    return this.getNumberAttribute('tokens');
  }

  // total_datasources - computed: true, optional: false, required: false
  public get totalDatasources() {
    return this.getNumberAttribute('total_datasources');
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJobList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJobOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBases {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // embedding_model_uuid - computed: true, optional: false, required: false
  public get embeddingModelUuid() {
    return this.getStringAttribute('embedding_model_uuid');
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // last_indexing_job - computed: true, optional: false, required: false
  private _lastIndexingJob = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesLastIndexingJobList(this, "last_indexing_job", false);
  public get lastIndexingJob() {
    return this._lastIndexingJob;
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreement {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreementToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreementToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreementList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreementOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersions {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersionsToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersionsToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // major - computed: true, optional: false, required: false
  public get major() {
    return this.getNumberAttribute('major');
  }

  // minor - computed: true, optional: false, required: false
  public get minor() {
    return this.getNumberAttribute('minor');
  }

  // patch - computed: true, optional: false, required: false
  public get patch() {
    return this.getNumberAttribute('patch');
  }
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersionsOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModel {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agreement - computed: true, optional: false, required: false
  private _agreement = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelAgreementList(this, "agreement", false);
  public get agreement() {
    return this._agreement;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // inference_name - computed: true, optional: false, required: false
  public get inferenceName() {
    return this.getStringAttribute('inference_name');
  }

  // inference_version - computed: true, optional: false, required: false
  public get inferenceVersion() {
    return this.getStringAttribute('inference_version');
  }

  // is_foundational - computed: true, optional: false, required: false
  public get isFoundational() {
    return this.getBooleanAttribute('is_foundational');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_uuid - computed: true, optional: false, required: false
  public get parentUuid() {
    return this.getStringAttribute('parent_uuid');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // upload_complete - computed: true, optional: false, required: false
  public get uploadComplete() {
    return this.getBooleanAttribute('upload_complete');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // usecases - computed: true, optional: false, required: false
  public get usecases() {
    return this.getListAttribute('usecases');
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKey {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKeyToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKeyToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKey | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKeyOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKey {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKeyToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKeyToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKey | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKeyOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfos {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfosToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfosToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfos | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfosOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeys {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeysToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeysToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeys | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeysOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbot {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbot | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiers {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiersToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiersToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiers | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiersList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiersOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeployment {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeploymentToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeploymentToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeploymentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeployment | undefined) {
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeploymentList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeploymentOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgents {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgents | undefined) {
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
  private _anthropicApiKey = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsAnthropicApiKeyList(this, "anthropic_api_key", false);
  public get anthropicApiKey() {
    return this._anthropicApiKey;
  }

  // api_key_infos - computed: true, optional: false, required: false
  private _apiKeyInfos = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeyInfosList(this, "api_key_infos", false);
  public get apiKeyInfos() {
    return this._apiKeyInfos;
  }

  // api_keys - computed: true, optional: false, required: false
  private _apiKeys = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }

  // chatbot - computed: true, optional: false, required: false
  private _chatbot = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotList(this, "chatbot", false);
  public get chatbot() {
    return this._chatbot;
  }

  // chatbot_identifiers - computed: true, optional: false, required: false
  private _chatbotIdentifiers = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsChatbotIdentifiersList(this, "chatbot_identifiers", false);
  public get chatbotIdentifiers() {
    return this._chatbotIdentifiers;
  }

  // deployment - computed: true, optional: false, required: false
  private _deployment = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsDeploymentList(this, "deployment", false);
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJob {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJobToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJobToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completed_datasources - computed: true, optional: false, required: false
  public get completedDatasources() {
    return this.getNumberAttribute('completed_datasources');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_source_uuids - computed: true, optional: false, required: false
  public get dataSourceUuids() {
    return this.getListAttribute('data_source_uuids');
  }

  // finished_at - computed: true, optional: false, required: false
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }

  // knowledge_base_uuid - computed: true, optional: false, required: false
  public get knowledgeBaseUuid() {
    return this.getStringAttribute('knowledge_base_uuid');
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // started_at - computed: true, optional: false, required: false
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }

  // tokens - computed: true, optional: false, required: false
  public get tokens() {
    return this.getNumberAttribute('tokens');
  }

  // total_datasources - computed: true, optional: false, required: false
  public get totalDatasources() {
    return this.getNumberAttribute('total_datasources');
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJobList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJobOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBases {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // embedding_model_uuid - computed: true, optional: false, required: false
  public get embeddingModelUuid() {
    return this.getStringAttribute('embedding_model_uuid');
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // last_indexing_job - computed: true, optional: false, required: false
  private _lastIndexingJob = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesLastIndexingJobList(this, "last_indexing_job", false);
  public get lastIndexingJob() {
    return this._lastIndexingJob;
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreement {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreementToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreementToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreementList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreementOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersions {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersionsToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersionsToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // major - computed: true, optional: false, required: false
  public get major() {
    return this.getNumberAttribute('major');
  }

  // minor - computed: true, optional: false, required: false
  public get minor() {
    return this.getNumberAttribute('minor');
  }

  // patch - computed: true, optional: false, required: false
  public get patch() {
    return this.getNumberAttribute('patch');
  }
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersionsOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModel {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agreement - computed: true, optional: false, required: false
  private _agreement = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelAgreementList(this, "agreement", false);
  public get agreement() {
    return this._agreement;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // inference_name - computed: true, optional: false, required: false
  public get inferenceName() {
    return this.getStringAttribute('inference_name');
  }

  // inference_version - computed: true, optional: false, required: false
  public get inferenceVersion() {
    return this.getStringAttribute('inference_version');
  }

  // is_foundational - computed: true, optional: false, required: false
  public get isFoundational() {
    return this.getBooleanAttribute('is_foundational');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_uuid - computed: true, optional: false, required: false
  public get parentUuid() {
    return this.getStringAttribute('parent_uuid');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // upload_complete - computed: true, optional: false, required: false
  public get uploadComplete() {
    return this.getBooleanAttribute('upload_complete');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // usecases - computed: true, optional: false, required: false
  public get usecases() {
    return this.getListAttribute('usecases');
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplate {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplate | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // instruction - computed: true, optional: false, required: false
  public get instruction() {
    return this.getStringAttribute('instruction');
  }

  // k - computed: true, optional: false, required: false
  public get k() {
    return this.getNumberAttribute('k');
  }

  // knowledge_bases - computed: true, optional: false, required: false
  private _knowledgeBases = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateKnowledgeBasesList(this, "knowledge_bases", false);
  public get knowledgeBases() {
    return this._knowledgeBases;
  }

  // max_tokens - computed: true, optional: false, required: false
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }

  // model - computed: true, optional: false, required: false
  private _model = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateModelList(this, "model", false);
  public get model() {
    return this._model;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }

  // top_p - computed: true, optional: false, required: false
  public get topP() {
    return this.getNumberAttribute('top_p');
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

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgents {
}

export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsToTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsToHclTerraform(struct?: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_guardrail - computed: true, optional: false, required: false
  private _agentGuardrail = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAgentGuardrailList(this, "agent_guardrail", false);
  public get agentGuardrail() {
    return this._agentGuardrail;
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // anthropic_api_key - computed: true, optional: false, required: false
  private _anthropicApiKey = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsAnthropicApiKeyList(this, "anthropic_api_key", false);
  public get anthropicApiKey() {
    return this._anthropicApiKey;
  }

  // api_key_infos - computed: true, optional: false, required: false
  private _apiKeyInfos = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeyInfosList(this, "api_key_infos", false);
  public get apiKeyInfos() {
    return this._apiKeyInfos;
  }

  // api_keys - computed: true, optional: false, required: false
  private _apiKeys = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }

  // chatbot - computed: true, optional: false, required: false
  private _chatbot = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotList(this, "chatbot", false);
  public get chatbot() {
    return this._chatbot;
  }

  // chatbot_identifiers - computed: true, optional: false, required: false
  private _chatbotIdentifiers = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChatbotIdentifiersList(this, "chatbot_identifiers", false);
  public get chatbotIdentifiers() {
    return this._chatbotIdentifiers;
  }

  // child_agents - computed: true, optional: false, required: false
  private _childAgents = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsChildAgentsList(this, "child_agents", false);
  public get childAgents() {
    return this._childAgents;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deployment - computed: true, optional: false, required: false
  private _deployment = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsDeploymentList(this, "deployment", false);
  public get deployment() {
    return this._deployment;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // functions - computed: true, optional: false, required: false
  private _functions = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsFunctionsList(this, "functions", false);
  public get functions() {
    return this._functions;
  }

  // if_case - computed: true, optional: false, required: false
  public get ifCase() {
    return this.getStringAttribute('if_case');
  }

  // instruction - computed: true, optional: false, required: false
  public get instruction() {
    return this.getStringAttribute('instruction');
  }

  // k - computed: true, optional: false, required: false
  public get k() {
    return this.getNumberAttribute('k');
  }

  // knowledge_bases - computed: true, optional: false, required: false
  private _knowledgeBases = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsKnowledgeBasesList(this, "knowledge_bases", false);
  public get knowledgeBases() {
    return this._knowledgeBases;
  }

  // max_tokens - computed: true, optional: false, required: false
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }

  // model - computed: true, optional: false, required: false
  private _model = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsModelList(this, "model", false);
  public get model() {
    return this._model;
  }

  // model_uuid - computed: true, optional: false, required: false
  public get modelUuid() {
    return this.getStringAttribute('model_uuid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_ai_api_key - computed: true, optional: false, required: false
  private _openAiApiKey = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOpenAiApiKeyList(this, "open_ai_api_key", false);
  public get openAiApiKey() {
    return this._openAiApiKey;
  }

  // parent_agents - computed: true, optional: false, required: false
  private _parentAgents = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsParentAgentsList(this, "parent_agents", false);
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

  // retrieval_method - computed: true, optional: false, required: false
  public get retrievalMethod() {
    return this.getStringAttribute('retrieval_method');
  }

  // route_created_at - computed: true, optional: false, required: false
  public get routeCreatedAt() {
    return this.getStringAttribute('route_created_at');
  }

  // route_created_by - computed: true, optional: false, required: false
  public get routeCreatedBy() {
    return this.getStringAttribute('route_created_by');
  }

  // route_name - computed: true, optional: false, required: false
  public get routeName() {
    return this.getStringAttribute('route_name');
  }

  // route_uuid - computed: true, optional: false, required: false
  public get routeUuid() {
    return this.getStringAttribute('route_uuid');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }

  // template - computed: true, optional: false, required: false
  private _template = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsTemplateList(this, "template", false);
  public get template() {
    return this._template;
  }

  // top_p - computed: true, optional: false, required: false
  public get topP() {
    return this.getNumberAttribute('top_p');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOutputReference {
    return new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_agents_by_openai_api_key digitalocean_genai_agents_by_openai_api_key}
*/
export class DataDigitaloceanGenaiAgentsByOpenaiApiKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_agents_by_openai_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanGenaiAgentsByOpenaiApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanGenaiAgentsByOpenaiApiKey to import
  * @param importFromId The id of the existing DataDigitaloceanGenaiAgentsByOpenaiApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_agents_by_openai_api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanGenaiAgentsByOpenaiApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_agents_by_openai_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_agents_by_openai_api_key digitalocean_genai_agents_by_openai_api_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanGenaiAgentsByOpenaiApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanGenaiAgentsByOpenaiApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_agents_by_openai_api_key',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.61.0',
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
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agents - computed: true, optional: false, required: false
  private _agents = new DataDigitaloceanGenaiAgentsByOpenaiApiKeyAgentsList(this, "agents", false);
  public get agents() {
    return this._agents;
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

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
