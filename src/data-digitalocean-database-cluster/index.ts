/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/database_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanDatabaseClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/database_cluster#id DataDigitaloceanDatabaseCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/database_cluster#name DataDigitaloceanDatabaseCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/database_cluster#tags DataDigitaloceanDatabaseCluster#tags}
  */
  readonly tags?: string[];
}
export interface DataDigitaloceanDatabaseClusterMaintenanceWindow {
}

export function dataDigitaloceanDatabaseClusterMaintenanceWindowToTerraform(struct?: DataDigitaloceanDatabaseClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanDatabaseClusterMaintenanceWindowToHclTerraform(struct?: DataDigitaloceanDatabaseClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanDatabaseClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanDatabaseClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanDatabaseClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getStringAttribute('hour');
  }
}

export class DataDigitaloceanDatabaseClusterMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanDatabaseClusterMaintenanceWindowOutputReference {
    return new DataDigitaloceanDatabaseClusterMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/database_cluster digitalocean_database_cluster}
*/
export class DataDigitaloceanDatabaseCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanDatabaseCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanDatabaseCluster to import
  * @param importFromId The id of the existing DataDigitaloceanDatabaseCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/database_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanDatabaseCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/database_cluster digitalocean_database_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanDatabaseClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanDatabaseClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_cluster',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.53.0',
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
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataDigitaloceanDatabaseClusterMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
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

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // private_host - computed: true, optional: false, required: false
  public get privateHost() {
    return this.getStringAttribute('private_host');
  }

  // private_network_uuid - computed: true, optional: false, required: false
  public get privateNetworkUuid() {
    return this.getStringAttribute('private_network_uuid');
  }

  // private_uri - computed: true, optional: false, required: false
  public get privateUri() {
    return this.getStringAttribute('private_uri');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // storage_size_mib - computed: true, optional: false, required: false
  public get storageSizeMib() {
    return this.getStringAttribute('storage_size_mib');
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

  // ui_database - computed: true, optional: false, required: false
  public get uiDatabase() {
    return this.getStringAttribute('ui_database');
  }

  // ui_host - computed: true, optional: false, required: false
  public get uiHost() {
    return this.getStringAttribute('ui_host');
  }

  // ui_password - computed: true, optional: false, required: false
  public get uiPassword() {
    return this.getStringAttribute('ui_password');
  }

  // ui_port - computed: true, optional: false, required: false
  public get uiPort() {
    return this.getNumberAttribute('ui_port');
  }

  // ui_uri - computed: true, optional: false, required: false
  public get uiUri() {
    return this.getStringAttribute('ui_uri');
  }

  // ui_user - computed: true, optional: false, required: false
  public get uiUser() {
    return this.getStringAttribute('ui_user');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
