// https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/database_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanDatabaseUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/database_user#cluster_id DataDigitaloceanDatabaseUser#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/database_user#id DataDigitaloceanDatabaseUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/database_user#name DataDigitaloceanDatabaseUser#name}
  */
  readonly name: string;
}
export interface DataDigitaloceanDatabaseUserSettingsAcl {
}

export function dataDigitaloceanDatabaseUserSettingsAclToTerraform(struct?: DataDigitaloceanDatabaseUserSettingsAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanDatabaseUserSettingsAclToHclTerraform(struct?: DataDigitaloceanDatabaseUserSettingsAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanDatabaseUserSettingsAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanDatabaseUserSettingsAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanDatabaseUserSettingsAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export class DataDigitaloceanDatabaseUserSettingsAclList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanDatabaseUserSettingsAclOutputReference {
    return new DataDigitaloceanDatabaseUserSettingsAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanDatabaseUserSettingsOpensearchAcl {
}

export function dataDigitaloceanDatabaseUserSettingsOpensearchAclToTerraform(struct?: DataDigitaloceanDatabaseUserSettingsOpensearchAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanDatabaseUserSettingsOpensearchAclToHclTerraform(struct?: DataDigitaloceanDatabaseUserSettingsOpensearchAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanDatabaseUserSettingsOpensearchAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanDatabaseUserSettingsOpensearchAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanDatabaseUserSettingsOpensearchAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }
}

export class DataDigitaloceanDatabaseUserSettingsOpensearchAclList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanDatabaseUserSettingsOpensearchAclOutputReference {
    return new DataDigitaloceanDatabaseUserSettingsOpensearchAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanDatabaseUserSettings {
}

export function dataDigitaloceanDatabaseUserSettingsToTerraform(struct?: DataDigitaloceanDatabaseUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanDatabaseUserSettingsToHclTerraform(struct?: DataDigitaloceanDatabaseUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanDatabaseUserSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDigitaloceanDatabaseUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanDatabaseUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl - computed: true, optional: false, required: false
  private _acl = new DataDigitaloceanDatabaseUserSettingsAclList(this, "acl", false);
  public get acl() {
    return this._acl;
  }

  // opensearch_acl - computed: true, optional: false, required: false
  private _opensearchAcl = new DataDigitaloceanDatabaseUserSettingsOpensearchAclList(this, "opensearch_acl", false);
  public get opensearchAcl() {
    return this._opensearchAcl;
  }
}

export class DataDigitaloceanDatabaseUserSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDigitaloceanDatabaseUserSettingsOutputReference {
    return new DataDigitaloceanDatabaseUserSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/database_user digitalocean_database_user}
*/
export class DataDigitaloceanDatabaseUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanDatabaseUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanDatabaseUser to import
  * @param importFromId The id of the existing DataDigitaloceanDatabaseUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/database_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanDatabaseUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/database_user digitalocean_database_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanDatabaseUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanDatabaseUserConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_user',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.49.0',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_cert - computed: true, optional: false, required: false
  public get accessCert() {
    return this.getStringAttribute('access_cert');
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // mysql_auth_plugin - computed: true, optional: false, required: false
  public get mysqlAuthPlugin() {
    return this.getStringAttribute('mysql_auth_plugin');
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataDigitaloceanDatabaseUserSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
