/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenaiOpenaiApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The OpenAI API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#api_key GenaiOpenaiApiKey#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#id GenaiOpenaiApiKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A name for the API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}
  */
  readonly name: string;
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#model GenaiOpenaiApiKey#model}
  */
  readonly model?: GenaiOpenaiApiKeyModel[] | cdktf.IResolvable;
}
export interface GenaiOpenaiApiKeyModelAgreement {
  /**
  * Description of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#description GenaiOpenaiApiKey#description}
  */
  readonly description?: string;
  /**
  * Name of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}
  */
  readonly name?: string;
  /**
  * URL of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#url GenaiOpenaiApiKey#url}
  */
  readonly url?: string;
  /**
  * UUID of the agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#uuid GenaiOpenaiApiKey#uuid}
  */
  readonly uuid?: string;
}

export function genaiOpenaiApiKeyModelAgreementToTerraform(struct?: GenaiOpenaiApiKeyModelAgreement | cdktf.IResolvable): any {
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


export function genaiOpenaiApiKeyModelAgreementToHclTerraform(struct?: GenaiOpenaiApiKeyModelAgreement | cdktf.IResolvable): any {
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

export class GenaiOpenaiApiKeyModelAgreementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenaiOpenaiApiKeyModelAgreement | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GenaiOpenaiApiKeyModelAgreement | cdktf.IResolvable | undefined) {
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

export class GenaiOpenaiApiKeyModelAgreementList extends cdktf.ComplexList {
  public internalValue? : GenaiOpenaiApiKeyModelAgreement[] | cdktf.IResolvable

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
  public get(index: number): GenaiOpenaiApiKeyModelAgreementOutputReference {
    return new GenaiOpenaiApiKeyModelAgreementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiOpenaiApiKeyModelVersions {
  /**
  * Major version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#major GenaiOpenaiApiKey#major}
  */
  readonly major?: number;
  /**
  * Minor version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#minor GenaiOpenaiApiKey#minor}
  */
  readonly minor?: number;
  /**
  * Patch version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#patch GenaiOpenaiApiKey#patch}
  */
  readonly patch?: number;
}

export function genaiOpenaiApiKeyModelVersionsToTerraform(struct?: GenaiOpenaiApiKeyModelVersions | cdktf.IResolvable): any {
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


export function genaiOpenaiApiKeyModelVersionsToHclTerraform(struct?: GenaiOpenaiApiKeyModelVersions | cdktf.IResolvable): any {
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

export class GenaiOpenaiApiKeyModelVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenaiOpenaiApiKeyModelVersions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GenaiOpenaiApiKeyModelVersions | cdktf.IResolvable | undefined) {
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

export class GenaiOpenaiApiKeyModelVersionsList extends cdktf.ComplexList {
  public internalValue? : GenaiOpenaiApiKeyModelVersions[] | cdktf.IResolvable

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
  public get(index: number): GenaiOpenaiApiKeyModelVersionsOutputReference {
    return new GenaiOpenaiApiKeyModelVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiOpenaiApiKeyModel {
  /**
  * Inference name of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#inference_name GenaiOpenaiApiKey#inference_name}
  */
  readonly inferenceName?: string;
  /**
  * Infernce version of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#inference_version GenaiOpenaiApiKey#inference_version}
  */
  readonly inferenceVersion?: string;
  /**
  * Indicates if the Model Base is foundational
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#is_foundational GenaiOpenaiApiKey#is_foundational}
  */
  readonly isFoundational?: boolean | cdktf.IResolvable;
  /**
  * Name of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#name GenaiOpenaiApiKey#name}
  */
  readonly name?: string;
  /**
  * Parent UUID of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#parent_uuid GenaiOpenaiApiKey#parent_uuid}
  */
  readonly parentUuid?: string;
  /**
  * Provider of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#provider GenaiOpenaiApiKey#provider}
  */
  readonly provider?: string;
  /**
  * Indicates if the Model upload is complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#upload_complete GenaiOpenaiApiKey#upload_complete}
  */
  readonly uploadComplete?: boolean | cdktf.IResolvable;
  /**
  * URL of the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#url GenaiOpenaiApiKey#url}
  */
  readonly url?: string;
  /**
  * List of Usecases for the Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#usecases GenaiOpenaiApiKey#usecases}
  */
  readonly usecases?: string[];
  /**
  * agreement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#agreement GenaiOpenaiApiKey#agreement}
  */
  readonly agreement?: GenaiOpenaiApiKeyModelAgreement[] | cdktf.IResolvable;
  /**
  * versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#versions GenaiOpenaiApiKey#versions}
  */
  readonly versions?: GenaiOpenaiApiKeyModelVersions[] | cdktf.IResolvable;
}

export function genaiOpenaiApiKeyModelToTerraform(struct?: GenaiOpenaiApiKeyModel | cdktf.IResolvable): any {
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
    agreement: cdktf.listMapper(genaiOpenaiApiKeyModelAgreementToTerraform, true)(struct!.agreement),
    versions: cdktf.listMapper(genaiOpenaiApiKeyModelVersionsToTerraform, true)(struct!.versions),
  }
}


export function genaiOpenaiApiKeyModelToHclTerraform(struct?: GenaiOpenaiApiKeyModel | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(genaiOpenaiApiKeyModelAgreementToHclTerraform, true)(struct!.agreement),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiOpenaiApiKeyModelAgreementList",
    },
    versions: {
      value: cdktf.listMapperHcl(genaiOpenaiApiKeyModelVersionsToHclTerraform, true)(struct!.versions),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiOpenaiApiKeyModelVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiOpenaiApiKeyModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenaiOpenaiApiKeyModel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GenaiOpenaiApiKeyModel | cdktf.IResolvable | undefined) {
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
  private _agreement = new GenaiOpenaiApiKeyModelAgreementList(this, "agreement", false);
  public get agreement() {
    return this._agreement;
  }
  public putAgreement(value: GenaiOpenaiApiKeyModelAgreement[] | cdktf.IResolvable) {
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
  private _versions = new GenaiOpenaiApiKeyModelVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: GenaiOpenaiApiKeyModelVersions[] | cdktf.IResolvable) {
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

export class GenaiOpenaiApiKeyModelList extends cdktf.ComplexList {
  public internalValue? : GenaiOpenaiApiKeyModel[] | cdktf.IResolvable

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
  public get(index: number): GenaiOpenaiApiKeyModelOutputReference {
    return new GenaiOpenaiApiKeyModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key digitalocean_genai_openai_api_key}
*/
export class GenaiOpenaiApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_openai_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenaiOpenaiApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenaiOpenaiApiKey to import
  * @param importFromId The id of the existing GenaiOpenaiApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenaiOpenaiApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_openai_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_openai_api_key digitalocean_genai_openai_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenaiOpenaiApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: GenaiOpenaiApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_openai_api_key',
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
    this._apiKey = config.apiKey;
    this._id = config.id;
    this._name = config.name;
    this._model.internalValue = config.model;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // model - computed: false, optional: true, required: false
  private _model = new GenaiOpenaiApiKeyModelList(this, "model", false);
  public get model() {
    return this._model;
  }
  public putModel(value: GenaiOpenaiApiKeyModel[] | cdktf.IResolvable) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      model: cdktf.listMapper(genaiOpenaiApiKeyModelToTerraform, true)(this._model.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
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
      model: {
        value: cdktf.listMapperHcl(genaiOpenaiApiKeyModelToHclTerraform, true)(this._model.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiOpenaiApiKeyModelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
