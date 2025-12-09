/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanByoipPrefixResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the BYOIP prefix to list assigned addresses from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#byoip_prefix_uuid DataDigitaloceanByoipPrefixResources#byoip_prefix_uuid}
  */
  readonly byoipPrefixUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#id DataDigitaloceanByoipPrefixResources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDigitaloceanByoipPrefixResourcesAddresses {
}

export function dataDigitaloceanByoipPrefixResourcesAddressesToTerraform(struct?: DataDigitaloceanByoipPrefixResourcesAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanByoipPrefixResourcesAddressesToHclTerraform(struct?: DataDigitaloceanByoipPrefixResourcesAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanByoipPrefixResourcesAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanByoipPrefixResourcesAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanByoipPrefixResourcesAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_at - computed: true, optional: false, required: false
  public get assignedAt() {
    return this.getStringAttribute('assigned_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataDigitaloceanByoipPrefixResourcesAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanByoipPrefixResourcesAddressesOutputReference {
    return new DataDigitaloceanByoipPrefixResourcesAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources digitalocean_byoip_prefix_resources}
*/
export class DataDigitaloceanByoipPrefixResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_byoip_prefix_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanByoipPrefixResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanByoipPrefixResources to import
  * @param importFromId The id of the existing DataDigitaloceanByoipPrefixResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanByoipPrefixResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_byoip_prefix_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources digitalocean_byoip_prefix_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanByoipPrefixResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanByoipPrefixResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_byoip_prefix_resources',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.71.0',
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
    this._byoipPrefixUuid = config.byoipPrefixUuid;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DataDigitaloceanByoipPrefixResourcesAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

  // byoip_prefix_uuid - computed: false, optional: false, required: true
  private _byoipPrefixUuid?: string; 
  public get byoipPrefixUuid() {
    return this.getStringAttribute('byoip_prefix_uuid');
  }
  public set byoipPrefixUuid(value: string) {
    this._byoipPrefixUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get byoipPrefixUuidInput() {
    return this._byoipPrefixUuid;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      byoip_prefix_uuid: cdktf.stringToTerraform(this._byoipPrefixUuid),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      byoip_prefix_uuid: {
        value: cdktf.stringToHclTerraform(this._byoipPrefixUuid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
