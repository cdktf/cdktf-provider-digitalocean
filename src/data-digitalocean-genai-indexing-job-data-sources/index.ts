/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanGenaiIndexingJobDataSourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources#id DataDigitaloceanGenaiIndexingJobDataSources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * UUID of the indexing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources#indexing_job_uuid DataDigitaloceanGenaiIndexingJobDataSources#indexing_job_uuid}
  */
  readonly indexingJobUuid: string;
}
export interface DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources {
}

export function dataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesToTerraform(struct?: DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesToHclTerraform(struct?: DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completed_at - computed: true, optional: false, required: false
  public get completedAt() {
    return this.getStringAttribute('completed_at');
  }

  // data_source_uuid - computed: true, optional: false, required: false
  public get dataSourceUuid() {
    return this.getStringAttribute('data_source_uuid');
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getStringAttribute('error_details');
  }

  // error_msg - computed: true, optional: false, required: false
  public get errorMsg() {
    return this.getStringAttribute('error_msg');
  }

  // failed_item_count - computed: true, optional: false, required: false
  public get failedItemCount() {
    return this.getStringAttribute('failed_item_count');
  }

  // indexed_file_count - computed: true, optional: false, required: false
  public get indexedFileCount() {
    return this.getStringAttribute('indexed_file_count');
  }

  // indexed_item_count - computed: true, optional: false, required: false
  public get indexedItemCount() {
    return this.getStringAttribute('indexed_item_count');
  }

  // removed_item_count - computed: true, optional: false, required: false
  public get removedItemCount() {
    return this.getStringAttribute('removed_item_count');
  }

  // skipped_item_count - computed: true, optional: false, required: false
  public get skippedItemCount() {
    return this.getStringAttribute('skipped_item_count');
  }

  // started_at - computed: true, optional: false, required: false
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_bytes - computed: true, optional: false, required: false
  public get totalBytes() {
    return this.getStringAttribute('total_bytes');
  }

  // total_bytes_indexed - computed: true, optional: false, required: false
  public get totalBytesIndexed() {
    return this.getStringAttribute('total_bytes_indexed');
  }

  // total_file_count - computed: true, optional: false, required: false
  public get totalFileCount() {
    return this.getStringAttribute('total_file_count');
  }
}

export class DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference {
    return new DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources digitalocean_genai_indexing_job_data_sources}
*/
export class DataDigitaloceanGenaiIndexingJobDataSources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_indexing_job_data_sources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJobDataSources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanGenaiIndexingJobDataSources to import
  * @param importFromId The id of the existing DataDigitaloceanGenaiIndexingJobDataSources that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanGenaiIndexingJobDataSources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_indexing_job_data_sources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/data-sources/genai_indexing_job_data_sources digitalocean_genai_indexing_job_data_sources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanGenaiIndexingJobDataSourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanGenaiIndexingJobDataSourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_indexing_job_data_sources',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.70.0',
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
    this._indexingJobUuid = config.indexingJobUuid;
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

  // indexed_data_sources - computed: true, optional: false, required: false
  private _indexedDataSources = new DataDigitaloceanGenaiIndexingJobDataSourcesIndexedDataSourcesList(this, "indexed_data_sources", false);
  public get indexedDataSources() {
    return this._indexedDataSources;
  }

  // indexing_job_uuid - computed: false, optional: false, required: true
  private _indexingJobUuid?: string; 
  public get indexingJobUuid() {
    return this.getStringAttribute('indexing_job_uuid');
  }
  public set indexingJobUuid(value: string) {
    this._indexingJobUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingJobUuidInput() {
    return this._indexingJobUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      indexing_job_uuid: cdktf.stringToTerraform(this._indexingJobUuid),
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
      indexing_job_uuid: {
        value: cdktf.stringToHclTerraform(this._indexingJobUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
