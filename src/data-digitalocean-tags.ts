// https://www.terraform.io/docs/providers/digitalocean/d/tags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanTagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/tags#filter DataDigitaloceanTags#filter}
  */
  readonly filter?: DataDigitaloceanTagsFilter[] | cdktf.IResolvable;
  /**
  * sort block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/tags#sort DataDigitaloceanTags#sort}
  */
  readonly sort?: DataDigitaloceanTagsSort[] | cdktf.IResolvable;
}
export interface DataDigitaloceanTagsTags {
}

export function dataDigitaloceanTagsTagsToTerraform(struct?: DataDigitaloceanTagsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDigitaloceanTagsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanTagsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanTagsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // databases_count - computed: true, optional: false, required: false
  public get databasesCount() {
    return this.getNumberAttribute('databases_count');
  }

  // droplets_count - computed: true, optional: false, required: false
  public get dropletsCount() {
    return this.getNumberAttribute('droplets_count');
  }

  // images_count - computed: true, optional: false, required: false
  public get imagesCount() {
    return this.getNumberAttribute('images_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // total_resource_count - computed: true, optional: false, required: false
  public get totalResourceCount() {
    return this.getNumberAttribute('total_resource_count');
  }

  // volume_snapshots_count - computed: true, optional: false, required: false
  public get volumeSnapshotsCount() {
    return this.getNumberAttribute('volume_snapshots_count');
  }

  // volumes_count - computed: true, optional: false, required: false
  public get volumesCount() {
    return this.getNumberAttribute('volumes_count');
  }
}

export class DataDigitaloceanTagsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanTagsTagsOutputReference {
    return new DataDigitaloceanTagsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanTagsFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/tags#all DataDigitaloceanTags#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/tags#key DataDigitaloceanTags#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/tags#match_by DataDigitaloceanTags#match_by}
  */
  readonly matchBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/tags#values DataDigitaloceanTags#values}
  */
  readonly values: string[];
}

export function dataDigitaloceanTagsFilterToTerraform(struct?: DataDigitaloceanTagsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    key: cdktf.stringToTerraform(struct!.key),
    match_by: cdktf.stringToTerraform(struct!.matchBy),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataDigitaloceanTagsSort {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/tags#direction DataDigitaloceanTags#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/tags#key DataDigitaloceanTags#key}
  */
  readonly key: string;
}

export function dataDigitaloceanTagsSortToTerraform(struct?: DataDigitaloceanTagsSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/digitalocean/d/tags digitalocean_tags}
*/
export class DataDigitaloceanTags extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_tags";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/digitalocean/d/tags digitalocean_tags} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanTagsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanTagsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_tags',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.19.0',
        providerVersionConstraint: '~> 2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filter = config.filter;
    this._sort = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataDigitaloceanTagsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataDigitaloceanTagsFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('filter')));
  }
  public set filter(value: DataDigitaloceanTagsFilter[] | cdktf.IResolvable) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: DataDigitaloceanTagsSort[] | cdktf.IResolvable; 
  public get sort() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sort');
  }
  public set sort(value: DataDigitaloceanTagsSort[] | cdktf.IResolvable) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.listMapper(dataDigitaloceanTagsFilterToTerraform)(this._filter),
      sort: cdktf.listMapper(dataDigitaloceanTagsSortToTerraform)(this._sort),
    };
  }
}
