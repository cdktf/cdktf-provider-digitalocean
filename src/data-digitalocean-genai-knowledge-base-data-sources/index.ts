/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base_data_sources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base_data_sources#id DataDigitaloceanGenaiKnowledgeBaseDataSources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * UUID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base_data_sources#knowledge_base_uuid DataDigitaloceanGenaiKnowledgeBaseDataSources#knowledge_base_uuid}
  */
  readonly knowledgeBaseUuid: string;
}
export interface DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource {
}

export function dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceToTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceToHclTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // original_file_name - computed: true, optional: false, required: false
  public get originalFileName() {
    return this.getStringAttribute('original_file_name');
  }

  // size_in_bytes - computed: true, optional: false, required: false
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }

  // stored_object_key - computed: true, optional: false, required: false
  public get storedObjectKey() {
    return this.getStringAttribute('stored_object_key');
  }
}

export class DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference {
    return new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob {
}

export function dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobToTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobToHclTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob | undefined) {
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

export class DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference {
    return new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource {
}

export function dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceToTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceToHclTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // item_path - computed: true, optional: false, required: false
  public get itemPath() {
    return this.getStringAttribute('item_path');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference {
    return new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource {
}

export function dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceToTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceToHclTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // crawling_option - computed: true, optional: false, required: false
  public get crawlingOption() {
    return this.getStringAttribute('crawling_option');
  }

  // embed_media - computed: true, optional: false, required: false
  public get embedMedia() {
    return this.getBooleanAttribute('embed_media');
  }
}

export class DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference {
    return new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources {
}

export function dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesToTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesToHclTerraform(struct?: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources | undefined) {
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

  // file_upload_data_source - computed: true, optional: false, required: false
  private _fileUploadDataSource = new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList(this, "file_upload_data_source", false);
  public get fileUploadDataSource() {
    return this._fileUploadDataSource;
  }

  // last_indexing_job - computed: true, optional: false, required: false
  private _lastIndexingJob = new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList(this, "last_indexing_job", false);
  public get lastIndexingJob() {
    return this._lastIndexingJob;
  }

  // spaces_data_source - computed: true, optional: false, required: false
  private _spacesDataSource = new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList(this, "spaces_data_source", false);
  public get spacesDataSource() {
    return this._spacesDataSource;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // web_crawler_data_source - computed: true, optional: false, required: false
  private _webCrawlerDataSource = new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList(this, "web_crawler_data_source", false);
  public get webCrawlerDataSource() {
    return this._webCrawlerDataSource;
  }
}

export class DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference {
    return new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base_data_sources digitalocean_genai_knowledge_base_data_sources}
*/
export class DataDigitaloceanGenaiKnowledgeBaseDataSources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_knowledge_base_data_sources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBaseDataSources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanGenaiKnowledgeBaseDataSources to import
  * @param importFromId The id of the existing DataDigitaloceanGenaiKnowledgeBaseDataSources that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base_data_sources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanGenaiKnowledgeBaseDataSources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_knowledge_base_data_sources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/genai_knowledge_base_data_sources digitalocean_genai_knowledge_base_data_sources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_knowledge_base_data_sources',
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
    this._knowledgeBaseUuid = config.knowledgeBaseUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datasources - computed: true, optional: false, required: false
  private _datasources = new DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList(this, "datasources", false);
  public get datasources() {
    return this._datasources;
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
