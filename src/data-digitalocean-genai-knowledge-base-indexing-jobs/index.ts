/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base_indexing_jobs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base_indexing_jobs#id DataDigitaloceanGenaiKnowledgeBaseIndexingJobs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * UUID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base_indexing_jobs#knowledge_base_uuid DataDigitaloceanGenaiKnowledgeBaseIndexingJobs#knowledge_base_uuid}
  */
  readonly knowledgeBaseUuid: string;
}
export interface DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs {
}

export function dataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsToTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsToHclTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobs | undefined) {
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tokens - computed: true, optional: false, required: false
  public get tokens() {
    return this.getNumberAttribute('tokens');
  }

  // total_datasources - computed: true, optional: false, required: false
  public get totalDatasources() {
    return this.getNumberAttribute('total_datasources');
  }

  // total_items_failed - computed: true, optional: false, required: false
  public get totalItemsFailed() {
    return this.getStringAttribute('total_items_failed');
  }

  // total_items_indexed - computed: true, optional: false, required: false
  public get totalItemsIndexed() {
    return this.getStringAttribute('total_items_indexed');
  }

  // total_items_skipped - computed: true, optional: false, required: false
  public get totalItemsSkipped() {
    return this.getStringAttribute('total_items_skipped');
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

export class DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference {
    return new DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta {
}

export function dataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaToTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaToHclTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // page - computed: true, optional: false, required: false
  public get page() {
    return this.getNumberAttribute('page');
  }

  // pages - computed: true, optional: false, required: false
  public get pages() {
    return this.getNumberAttribute('pages');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference {
    return new DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base_indexing_jobs digitalocean_genai_knowledge_base_indexing_jobs}
*/
export class DataDigitaloceanGenaiKnowledgeBaseIndexingJobs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_knowledge_base_indexing_jobs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBaseIndexingJobs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanGenaiKnowledgeBaseIndexingJobs to import
  * @param importFromId The id of the existing DataDigitaloceanGenaiKnowledgeBaseIndexingJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base_indexing_jobs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanGenaiKnowledgeBaseIndexingJobs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_knowledge_base_indexing_jobs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base_indexing_jobs digitalocean_genai_knowledge_base_indexing_jobs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanGenaiKnowledgeBaseIndexingJobsConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_knowledge_base_indexing_jobs',
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
    this._id = config.id;
    this._knowledgeBaseUuid = config.knowledgeBaseUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // jobs - computed: true, optional: false, required: false
  private _jobs = new DataDigitaloceanGenaiKnowledgeBaseIndexingJobsJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
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

  // meta - computed: true, optional: false, required: false
  private _meta = new DataDigitaloceanGenaiKnowledgeBaseIndexingJobsMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      knowledge_base_uuid: cdktf.stringToTerraform(this._knowledgeBaseUuid),
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
