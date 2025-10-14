/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenaiKnowledgeBaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The time when the knowledge base was added to the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#added_to_agent_at GenaiKnowledgeBase#added_to_agent_at}
  */
  readonly addedToAgentAt?: string;
  /**
  * The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#database_id GenaiKnowledgeBase#database_id}
  */
  readonly databaseId?: string;
  /**
  * The unique identifier of the embedding model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#embedding_model_uuid GenaiKnowledgeBase#embedding_model_uuid}
  */
  readonly embeddingModelUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether the knowledge base is public or private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#is_public GenaiKnowledgeBase#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * The name of the knowledge base.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#name GenaiKnowledgeBase#name}
  */
  readonly name: string;
  /**
  * The unique identifier of the project to which the knowledge base belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#project_id GenaiKnowledgeBase#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}
  */
  readonly tags?: string[];
  /**
  * The unique identifier of the VPC to which the knowledge base belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#vpc_uuid GenaiKnowledgeBase#vpc_uuid}
  */
  readonly vpcUuid?: string;
  /**
  * datasources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#datasources GenaiKnowledgeBase#datasources}
  */
  readonly datasources: GenaiKnowledgeBaseDatasources[] | cdktf.IResolvable;
  /**
  * last_indexing_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}
  */
  readonly lastIndexingJob?: GenaiKnowledgeBaseLastIndexingJob[] | cdktf.IResolvable;
}
export interface GenaiKnowledgeBaseDatasourcesFileUploadDataSource {
  /**
  * The original name of the uploaded file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#original_file_name GenaiKnowledgeBase#original_file_name}
  */
  readonly originalFileName?: string;
  /**
  * The size of the file in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#size_in_bytes GenaiKnowledgeBase#size_in_bytes}
  */
  readonly sizeInBytes?: string;
  /**
  * The stored object key for the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#stored_object_key GenaiKnowledgeBase#stored_object_key}
  */
  readonly storedObjectKey?: string;
}

export function genaiKnowledgeBaseDatasourcesFileUploadDataSourceToTerraform(struct?: GenaiKnowledgeBaseDatasourcesFileUploadDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    original_file_name: cdktf.stringToTerraform(struct!.originalFileName),
    size_in_bytes: cdktf.stringToTerraform(struct!.sizeInBytes),
    stored_object_key: cdktf.stringToTerraform(struct!.storedObjectKey),
  }
}


export function genaiKnowledgeBaseDatasourcesFileUploadDataSourceToHclTerraform(struct?: GenaiKnowledgeBaseDatasourcesFileUploadDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    original_file_name: {
      value: cdktf.stringToHclTerraform(struct!.originalFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_in_bytes: {
      value: cdktf.stringToHclTerraform(struct!.sizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stored_object_key: {
      value: cdktf.stringToHclTerraform(struct!.storedObjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenaiKnowledgeBaseDatasourcesFileUploadDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originalFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalFileName = this._originalFileName;
    }
    if (this._sizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInBytes = this._sizeInBytes;
    }
    if (this._storedObjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storedObjectKey = this._storedObjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiKnowledgeBaseDatasourcesFileUploadDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originalFileName = undefined;
      this._sizeInBytes = undefined;
      this._storedObjectKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originalFileName = value.originalFileName;
      this._sizeInBytes = value.sizeInBytes;
      this._storedObjectKey = value.storedObjectKey;
    }
  }

  // original_file_name - computed: false, optional: true, required: false
  private _originalFileName?: string; 
  public get originalFileName() {
    return this.getStringAttribute('original_file_name');
  }
  public set originalFileName(value: string) {
    this._originalFileName = value;
  }
  public resetOriginalFileName() {
    this._originalFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalFileNameInput() {
    return this._originalFileName;
  }

  // size_in_bytes - computed: false, optional: true, required: false
  private _sizeInBytes?: string; 
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }
  public set sizeInBytes(value: string) {
    this._sizeInBytes = value;
  }
  public resetSizeInBytes() {
    this._sizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInBytesInput() {
    return this._sizeInBytes;
  }

  // stored_object_key - computed: false, optional: true, required: false
  private _storedObjectKey?: string; 
  public get storedObjectKey() {
    return this.getStringAttribute('stored_object_key');
  }
  public set storedObjectKey(value: string) {
    this._storedObjectKey = value;
  }
  public resetStoredObjectKey() {
    this._storedObjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedObjectKeyInput() {
    return this._storedObjectKey;
  }
}

export class GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList extends cdktf.ComplexList {
  public internalValue? : GenaiKnowledgeBaseDatasourcesFileUploadDataSource[] | cdktf.IResolvable

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
  public get(index: number): GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference {
    return new GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiKnowledgeBaseDatasourcesLastIndexingJob {
  /**
  * Number of completed datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}
  */
  readonly completedDatasources?: number;
  /**
  * Datasource UUIDs for the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}
  */
  readonly dataSourceUuids?: string[];
  /**
  * Phase of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}
  */
  readonly phase?: string;
  /**
  * Number of tokens processed in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}
  */
  readonly tokens?: number;
  /**
  * Total number of datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}
  */
  readonly totalDatasources?: number;
  /**
  * UUID  of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}
  */
  readonly uuid?: string;
}

export function genaiKnowledgeBaseDatasourcesLastIndexingJobToTerraform(struct?: GenaiKnowledgeBaseDatasourcesLastIndexingJob | cdktf.IResolvable): any {
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


export function genaiKnowledgeBaseDatasourcesLastIndexingJobToHclTerraform(struct?: GenaiKnowledgeBaseDatasourcesLastIndexingJob | cdktf.IResolvable): any {
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

export class GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenaiKnowledgeBaseDatasourcesLastIndexingJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GenaiKnowledgeBaseDatasourcesLastIndexingJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completedDatasources = undefined;
      this._dataSourceUuids = undefined;
      this._phase = undefined;
      this._tokens = undefined;
      this._totalDatasources = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class GenaiKnowledgeBaseDatasourcesLastIndexingJobList extends cdktf.ComplexList {
  public internalValue? : GenaiKnowledgeBaseDatasourcesLastIndexingJob[] | cdktf.IResolvable

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
  public get(index: number): GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference {
    return new GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiKnowledgeBaseDatasourcesSpacesDataSource {
  /**
  * The name of the Spaces bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#bucket_name GenaiKnowledgeBase#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * The path to the item in the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#item_path GenaiKnowledgeBase#item_path}
  */
  readonly itemPath?: string;
  /**
  * The region of the Spaces bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}
  */
  readonly region?: string;
}

export function genaiKnowledgeBaseDatasourcesSpacesDataSourceToTerraform(struct?: GenaiKnowledgeBaseDatasourcesSpacesDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    item_path: cdktf.stringToTerraform(struct!.itemPath),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function genaiKnowledgeBaseDatasourcesSpacesDataSourceToHclTerraform(struct?: GenaiKnowledgeBaseDatasourcesSpacesDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item_path: {
      value: cdktf.stringToHclTerraform(struct!.itemPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenaiKnowledgeBaseDatasourcesSpacesDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._itemPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemPath = this._itemPath;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiKnowledgeBaseDatasourcesSpacesDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._itemPath = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._itemPath = value.itemPath;
      this._region = value.region;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // item_path - computed: false, optional: true, required: false
  private _itemPath?: string; 
  public get itemPath() {
    return this.getStringAttribute('item_path');
  }
  public set itemPath(value: string) {
    this._itemPath = value;
  }
  public resetItemPath() {
    this._itemPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemPathInput() {
    return this._itemPath;
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
}

export class GenaiKnowledgeBaseDatasourcesSpacesDataSourceList extends cdktf.ComplexList {
  public internalValue? : GenaiKnowledgeBaseDatasourcesSpacesDataSource[] | cdktf.IResolvable

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
  public get(index: number): GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference {
    return new GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource {
  /**
  * The base URL to crawl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#base_url GenaiKnowledgeBase#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Options for specifying how URLs found on pages should be handled. 
  * - UNKNOWN: Default unknown value
  * - SCOPED: Only include the base URL.
  * - PATH: Crawl the base URL and linked pages within the URL path.
  * - DOMAIN: Crawl the base URL and linked pages within the same domain.
  * - SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#crawling_option GenaiKnowledgeBase#crawling_option}
  */
  readonly crawlingOption?: string;
  /**
  * Whether to embed media content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#embed_media GenaiKnowledgeBase#embed_media}
  */
  readonly embedMedia?: boolean | cdktf.IResolvable;
}

export function genaiKnowledgeBaseDatasourcesWebCrawlerDataSourceToTerraform(struct?: GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    crawling_option: cdktf.stringToTerraform(struct!.crawlingOption),
    embed_media: cdktf.booleanToTerraform(struct!.embedMedia),
  }
}


export function genaiKnowledgeBaseDatasourcesWebCrawlerDataSourceToHclTerraform(struct?: GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crawling_option: {
      value: cdktf.stringToHclTerraform(struct!.crawlingOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embed_media: {
      value: cdktf.booleanToHclTerraform(struct!.embedMedia),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._crawlingOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlingOption = this._crawlingOption;
    }
    if (this._embedMedia !== undefined) {
      hasAnyValues = true;
      internalValueResult.embedMedia = this._embedMedia;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
      this._crawlingOption = undefined;
      this._embedMedia = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
      this._crawlingOption = value.crawlingOption;
      this._embedMedia = value.embedMedia;
    }
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // crawling_option - computed: false, optional: true, required: false
  private _crawlingOption?: string; 
  public get crawlingOption() {
    return this.getStringAttribute('crawling_option');
  }
  public set crawlingOption(value: string) {
    this._crawlingOption = value;
  }
  public resetCrawlingOption() {
    this._crawlingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlingOptionInput() {
    return this._crawlingOption;
  }

  // embed_media - computed: false, optional: true, required: false
  private _embedMedia?: boolean | cdktf.IResolvable; 
  public get embedMedia() {
    return this.getBooleanAttribute('embed_media');
  }
  public set embedMedia(value: boolean | cdktf.IResolvable) {
    this._embedMedia = value;
  }
  public resetEmbedMedia() {
    this._embedMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedMediaInput() {
    return this._embedMedia;
  }
}

export class GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList extends cdktf.ComplexList {
  public internalValue? : GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[] | cdktf.IResolvable

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
  public get(index: number): GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference {
    return new GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiKnowledgeBaseDatasources {
  /**
  * UUID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}
  */
  readonly uuid?: string;
  /**
  * file_upload_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#file_upload_data_source GenaiKnowledgeBase#file_upload_data_source}
  */
  readonly fileUploadDataSource?: GenaiKnowledgeBaseDatasourcesFileUploadDataSource[] | cdktf.IResolvable;
  /**
  * last_indexing_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}
  */
  readonly lastIndexingJob?: GenaiKnowledgeBaseDatasourcesLastIndexingJob[] | cdktf.IResolvable;
  /**
  * spaces_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#spaces_data_source GenaiKnowledgeBase#spaces_data_source}
  */
  readonly spacesDataSource?: GenaiKnowledgeBaseDatasourcesSpacesDataSource[] | cdktf.IResolvable;
  /**
  * web_crawler_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#web_crawler_data_source GenaiKnowledgeBase#web_crawler_data_source}
  */
  readonly webCrawlerDataSource?: GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[] | cdktf.IResolvable;
}

export function genaiKnowledgeBaseDatasourcesToTerraform(struct?: GenaiKnowledgeBaseDatasources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    file_upload_data_source: cdktf.listMapper(genaiKnowledgeBaseDatasourcesFileUploadDataSourceToTerraform, true)(struct!.fileUploadDataSource),
    last_indexing_job: cdktf.listMapper(genaiKnowledgeBaseDatasourcesLastIndexingJobToTerraform, true)(struct!.lastIndexingJob),
    spaces_data_source: cdktf.listMapper(genaiKnowledgeBaseDatasourcesSpacesDataSourceToTerraform, true)(struct!.spacesDataSource),
    web_crawler_data_source: cdktf.listMapper(genaiKnowledgeBaseDatasourcesWebCrawlerDataSourceToTerraform, true)(struct!.webCrawlerDataSource),
  }
}


export function genaiKnowledgeBaseDatasourcesToHclTerraform(struct?: GenaiKnowledgeBaseDatasources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_upload_data_source: {
      value: cdktf.listMapperHcl(genaiKnowledgeBaseDatasourcesFileUploadDataSourceToHclTerraform, true)(struct!.fileUploadDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList",
    },
    last_indexing_job: {
      value: cdktf.listMapperHcl(genaiKnowledgeBaseDatasourcesLastIndexingJobToHclTerraform, true)(struct!.lastIndexingJob),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiKnowledgeBaseDatasourcesLastIndexingJobList",
    },
    spaces_data_source: {
      value: cdktf.listMapperHcl(genaiKnowledgeBaseDatasourcesSpacesDataSourceToHclTerraform, true)(struct!.spacesDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiKnowledgeBaseDatasourcesSpacesDataSourceList",
    },
    web_crawler_data_source: {
      value: cdktf.listMapperHcl(genaiKnowledgeBaseDatasourcesWebCrawlerDataSourceToHclTerraform, true)(struct!.webCrawlerDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiKnowledgeBaseDatasourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenaiKnowledgeBaseDatasources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._fileUploadDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUploadDataSource = this._fileUploadDataSource?.internalValue;
    }
    if (this._lastIndexingJob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastIndexingJob = this._lastIndexingJob?.internalValue;
    }
    if (this._spacesDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spacesDataSource = this._spacesDataSource?.internalValue;
    }
    if (this._webCrawlerDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCrawlerDataSource = this._webCrawlerDataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiKnowledgeBaseDatasources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uuid = undefined;
      this._fileUploadDataSource.internalValue = undefined;
      this._lastIndexingJob.internalValue = undefined;
      this._spacesDataSource.internalValue = undefined;
      this._webCrawlerDataSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uuid = value.uuid;
      this._fileUploadDataSource.internalValue = value.fileUploadDataSource;
      this._lastIndexingJob.internalValue = value.lastIndexingJob;
      this._spacesDataSource.internalValue = value.spacesDataSource;
      this._webCrawlerDataSource.internalValue = value.webCrawlerDataSource;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // file_upload_data_source - computed: false, optional: true, required: false
  private _fileUploadDataSource = new GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList(this, "file_upload_data_source", false);
  public get fileUploadDataSource() {
    return this._fileUploadDataSource;
  }
  public putFileUploadDataSource(value: GenaiKnowledgeBaseDatasourcesFileUploadDataSource[] | cdktf.IResolvable) {
    this._fileUploadDataSource.internalValue = value;
  }
  public resetFileUploadDataSource() {
    this._fileUploadDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUploadDataSourceInput() {
    return this._fileUploadDataSource.internalValue;
  }

  // last_indexing_job - computed: false, optional: true, required: false
  private _lastIndexingJob = new GenaiKnowledgeBaseDatasourcesLastIndexingJobList(this, "last_indexing_job", false);
  public get lastIndexingJob() {
    return this._lastIndexingJob;
  }
  public putLastIndexingJob(value: GenaiKnowledgeBaseDatasourcesLastIndexingJob[] | cdktf.IResolvable) {
    this._lastIndexingJob.internalValue = value;
  }
  public resetLastIndexingJob() {
    this._lastIndexingJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastIndexingJobInput() {
    return this._lastIndexingJob.internalValue;
  }

  // spaces_data_source - computed: false, optional: true, required: false
  private _spacesDataSource = new GenaiKnowledgeBaseDatasourcesSpacesDataSourceList(this, "spaces_data_source", false);
  public get spacesDataSource() {
    return this._spacesDataSource;
  }
  public putSpacesDataSource(value: GenaiKnowledgeBaseDatasourcesSpacesDataSource[] | cdktf.IResolvable) {
    this._spacesDataSource.internalValue = value;
  }
  public resetSpacesDataSource() {
    this._spacesDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spacesDataSourceInput() {
    return this._spacesDataSource.internalValue;
  }

  // web_crawler_data_source - computed: false, optional: true, required: false
  private _webCrawlerDataSource = new GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList(this, "web_crawler_data_source", false);
  public get webCrawlerDataSource() {
    return this._webCrawlerDataSource;
  }
  public putWebCrawlerDataSource(value: GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[] | cdktf.IResolvable) {
    this._webCrawlerDataSource.internalValue = value;
  }
  public resetWebCrawlerDataSource() {
    this._webCrawlerDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCrawlerDataSourceInput() {
    return this._webCrawlerDataSource.internalValue;
  }
}

export class GenaiKnowledgeBaseDatasourcesList extends cdktf.ComplexList {
  public internalValue? : GenaiKnowledgeBaseDatasources[] | cdktf.IResolvable

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
  public get(index: number): GenaiKnowledgeBaseDatasourcesOutputReference {
    return new GenaiKnowledgeBaseDatasourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenaiKnowledgeBaseLastIndexingJob {
  /**
  * Number of completed datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}
  */
  readonly completedDatasources?: number;
  /**
  * Datasource UUIDs for the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}
  */
  readonly dataSourceUuids?: string[];
  /**
  * Phase of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}
  */
  readonly phase?: string;
  /**
  * Number of tokens processed in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}
  */
  readonly tokens?: number;
  /**
  * Total number of datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}
  */
  readonly totalDatasources?: number;
  /**
  * UUID  of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}
  */
  readonly uuid?: string;
}

export function genaiKnowledgeBaseLastIndexingJobToTerraform(struct?: GenaiKnowledgeBaseLastIndexingJob | cdktf.IResolvable): any {
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


export function genaiKnowledgeBaseLastIndexingJobToHclTerraform(struct?: GenaiKnowledgeBaseLastIndexingJob | cdktf.IResolvable): any {
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

export class GenaiKnowledgeBaseLastIndexingJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenaiKnowledgeBaseLastIndexingJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GenaiKnowledgeBaseLastIndexingJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completedDatasources = undefined;
      this._dataSourceUuids = undefined;
      this._phase = undefined;
      this._tokens = undefined;
      this._totalDatasources = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class GenaiKnowledgeBaseLastIndexingJobList extends cdktf.ComplexList {
  public internalValue? : GenaiKnowledgeBaseLastIndexingJob[] | cdktf.IResolvable

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
  public get(index: number): GenaiKnowledgeBaseLastIndexingJobOutputReference {
    return new GenaiKnowledgeBaseLastIndexingJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base digitalocean_genai_knowledge_base}
*/
export class GenaiKnowledgeBase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_knowledge_base";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenaiKnowledgeBase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenaiKnowledgeBase to import
  * @param importFromId The id of the existing GenaiKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenaiKnowledgeBase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_knowledge_base", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.68.0/docs/resources/genai_knowledge_base digitalocean_genai_knowledge_base} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenaiKnowledgeBaseConfig
  */
  public constructor(scope: Construct, id: string, config: GenaiKnowledgeBaseConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_knowledge_base',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.68.0',
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
    this._addedToAgentAt = config.addedToAgentAt;
    this._databaseId = config.databaseId;
    this._embeddingModelUuid = config.embeddingModelUuid;
    this._id = config.id;
    this._isPublic = config.isPublic;
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
    this._tags = config.tags;
    this._vpcUuid = config.vpcUuid;
    this._datasources.internalValue = config.datasources;
    this._lastIndexingJob.internalValue = config.lastIndexingJob;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // added_to_agent_at - computed: false, optional: true, required: false
  private _addedToAgentAt?: string; 
  public get addedToAgentAt() {
    return this.getStringAttribute('added_to_agent_at');
  }
  public set addedToAgentAt(value: string) {
    this._addedToAgentAt = value;
  }
  public resetAddedToAgentAt() {
    this._addedToAgentAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addedToAgentAtInput() {
    return this._addedToAgentAt;
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

  // embedding_model_uuid - computed: false, optional: false, required: true
  private _embeddingModelUuid?: string; 
  public get embeddingModelUuid() {
    return this.getStringAttribute('embedding_model_uuid');
  }
  public set embeddingModelUuid(value: string) {
    this._embeddingModelUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelUuidInput() {
    return this._embeddingModelUuid;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // vpc_uuid - computed: false, optional: true, required: false
  private _vpcUuid?: string; 
  public get vpcUuid() {
    return this.getStringAttribute('vpc_uuid');
  }
  public set vpcUuid(value: string) {
    this._vpcUuid = value;
  }
  public resetVpcUuid() {
    this._vpcUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcUuidInput() {
    return this._vpcUuid;
  }

  // datasources - computed: false, optional: false, required: true
  private _datasources = new GenaiKnowledgeBaseDatasourcesList(this, "datasources", false);
  public get datasources() {
    return this._datasources;
  }
  public putDatasources(value: GenaiKnowledgeBaseDatasources[] | cdktf.IResolvable) {
    this._datasources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourcesInput() {
    return this._datasources.internalValue;
  }

  // last_indexing_job - computed: false, optional: true, required: false
  private _lastIndexingJob = new GenaiKnowledgeBaseLastIndexingJobList(this, "last_indexing_job", false);
  public get lastIndexingJob() {
    return this._lastIndexingJob;
  }
  public putLastIndexingJob(value: GenaiKnowledgeBaseLastIndexingJob[] | cdktf.IResolvable) {
    this._lastIndexingJob.internalValue = value;
  }
  public resetLastIndexingJob() {
    this._lastIndexingJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastIndexingJobInput() {
    return this._lastIndexingJob.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      added_to_agent_at: cdktf.stringToTerraform(this._addedToAgentAt),
      database_id: cdktf.stringToTerraform(this._databaseId),
      embedding_model_uuid: cdktf.stringToTerraform(this._embeddingModelUuid),
      id: cdktf.stringToTerraform(this._id),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vpc_uuid: cdktf.stringToTerraform(this._vpcUuid),
      datasources: cdktf.listMapper(genaiKnowledgeBaseDatasourcesToTerraform, true)(this._datasources.internalValue),
      last_indexing_job: cdktf.listMapper(genaiKnowledgeBaseLastIndexingJobToTerraform, true)(this._lastIndexingJob.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      added_to_agent_at: {
        value: cdktf.stringToHclTerraform(this._addedToAgentAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      embedding_model_uuid: {
        value: cdktf.stringToHclTerraform(this._embeddingModelUuid),
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
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_uuid: {
        value: cdktf.stringToHclTerraform(this._vpcUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datasources: {
        value: cdktf.listMapperHcl(genaiKnowledgeBaseDatasourcesToHclTerraform, true)(this._datasources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiKnowledgeBaseDatasourcesList",
      },
      last_indexing_job: {
        value: cdktf.listMapperHcl(genaiKnowledgeBaseLastIndexingJobToHclTerraform, true)(this._lastIndexingJob.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiKnowledgeBaseLastIndexingJobList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
