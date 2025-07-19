/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanGenaiKnowledgeBaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timestamp when the Knowledge Base was added to the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#added_to_agent_at DataDigitaloceanGenaiKnowledgeBase#added_to_agent_at}
  */
  readonly addedToAgentAt?: string;
  /**
  * Database ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#database_id DataDigitaloceanGenaiKnowledgeBase#database_id}
  */
  readonly databaseId?: string;
  /**
  * Embedding model UUID for the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#embedding_model_uuid DataDigitaloceanGenaiKnowledgeBase#embedding_model_uuid}
  */
  readonly embeddingModelUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates if the Knowledge Base is public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#is_public DataDigitaloceanGenaiKnowledgeBase#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Name of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#name DataDigitaloceanGenaiKnowledgeBase#name}
  */
  readonly name?: string;
  /**
  * Project ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#project_id DataDigitaloceanGenaiKnowledgeBase#project_id}
  */
  readonly projectId?: string;
  /**
  * Region of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#region DataDigitaloceanGenaiKnowledgeBase#region}
  */
  readonly region?: string;
  /**
  * List of tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#tags DataDigitaloceanGenaiKnowledgeBase#tags}
  */
  readonly tags?: string[];
  /**
  * User ID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#user_id DataDigitaloceanGenaiKnowledgeBase#user_id}
  */
  readonly userId?: string;
  /**
  * UUID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}
  */
  readonly uuid?: string;
  /**
  * last_indexing_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#last_indexing_job DataDigitaloceanGenaiKnowledgeBase#last_indexing_job}
  */
  readonly lastIndexingJob?: DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob[] | cdktf.IResolvable;
}
export interface DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob {
  /**
  * Number of completed datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#completed_datasources DataDigitaloceanGenaiKnowledgeBase#completed_datasources}
  */
  readonly completedDatasources?: number;
  /**
  * Datasource UUIDs for the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#data_source_uuids DataDigitaloceanGenaiKnowledgeBase#data_source_uuids}
  */
  readonly dataSourceUuids?: string[];
  /**
  * Phase of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#phase DataDigitaloceanGenaiKnowledgeBase#phase}
  */
  readonly phase?: string;
  /**
  * Number of tokens processed in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#tokens DataDigitaloceanGenaiKnowledgeBase#tokens}
  */
  readonly tokens?: number;
  /**
  * Total number of datasources in the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#total_datasources DataDigitaloceanGenaiKnowledgeBase#total_datasources}
  */
  readonly totalDatasources?: number;
  /**
  * UUID  of the last indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}
  */
  readonly uuid?: string;
}

export function dataDigitaloceanGenaiKnowledgeBaseLastIndexingJobToTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob | cdktf.IResolvable): any {
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


export function dataDigitaloceanGenaiKnowledgeBaseLastIndexingJobToHclTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob | cdktf.IResolvable): any {
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

export class DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob | cdktf.IResolvable | undefined) {
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

export class DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob[] | cdktf.IResolvable

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
  public get(index: number): DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference {
    return new DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base digitalocean_genai_knowledge_base}
*/
export class DataDigitaloceanGenaiKnowledgeBase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_knowledge_base";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanGenaiKnowledgeBase to import
  * @param importFromId The id of the existing DataDigitaloceanGenaiKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanGenaiKnowledgeBase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_knowledge_base", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.60.0/docs/data-sources/genai_knowledge_base digitalocean_genai_knowledge_base} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanGenaiKnowledgeBaseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanGenaiKnowledgeBaseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_knowledge_base',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.60.0',
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
    this._userId = config.userId;
    this._uuid = config.uuid;
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

  // last_indexing_job - computed: false, optional: true, required: false
  private _lastIndexingJob = new DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList(this, "last_indexing_job", false);
  public get lastIndexingJob() {
    return this._lastIndexingJob;
  }
  public putLastIndexingJob(value: DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob[] | cdktf.IResolvable) {
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
      user_id: cdktf.stringToTerraform(this._userId),
      uuid: cdktf.stringToTerraform(this._uuid),
      last_indexing_job: cdktf.listMapper(dataDigitaloceanGenaiKnowledgeBaseLastIndexingJobToTerraform, true)(this._lastIndexingJob.internalValue),
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
        type: "list",
        storageClassType: "stringList",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
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
      last_indexing_job: {
        value: cdktf.listMapperHcl(dataDigitaloceanGenaiKnowledgeBaseLastIndexingJobToHclTerraform, true)(this._lastIndexingJob.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
