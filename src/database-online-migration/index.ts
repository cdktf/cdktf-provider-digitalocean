/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseOnlineMigrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration#cluster_id DatabaseOnlineMigration#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Disables SSL encryption when connecting to the source database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration#disable_ssl DatabaseOnlineMigration#disable_ssl}
  */
  readonly disableSsl?: boolean | cdktf.IResolvable;
  /**
  * The list of databases to be ignored during the migration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration#ignore_dbs DatabaseOnlineMigration#ignore_dbs}
  */
  readonly ignoreDbs?: string[];
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration#source DatabaseOnlineMigration#source}
  */
  readonly source: DatabaseOnlineMigrationSource;
}
export interface DatabaseOnlineMigrationSource {
  /**
  * The name of the default database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration#db_name DatabaseOnlineMigration#db_name}
  */
  readonly dbName: string;
  /**
  * The FQDN pointing to the database cluster's current primary node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration#host DatabaseOnlineMigration#host}
  */
  readonly host: string;
  /**
  * The password of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration#password DatabaseOnlineMigration#password}
  */
  readonly password: string;
  /**
  * The port on which the database cluster is listening
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration#port DatabaseOnlineMigration#port}
  */
  readonly port: number;
  /**
  * The default user of the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration#username DatabaseOnlineMigration#username}
  */
  readonly username: string;
}

export function databaseOnlineMigrationSourceToTerraform(struct?: DatabaseOnlineMigrationSourceOutputReference | DatabaseOnlineMigrationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseOnlineMigrationSourceToHclTerraform(struct?: DatabaseOnlineMigrationSourceOutputReference | DatabaseOnlineMigrationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseOnlineMigrationSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseOnlineMigrationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseOnlineMigrationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbName = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbName = value.dbName;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
    }
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration digitalocean_database_online_migration}
*/
export class DatabaseOnlineMigration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_online_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseOnlineMigration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseOnlineMigration to import
  * @param importFromId The id of the existing DatabaseOnlineMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseOnlineMigration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_online_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_online_migration digitalocean_database_online_migration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseOnlineMigrationConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseOnlineMigrationConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_online_migration',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.67.0',
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
    this._disableSsl = config.disableSsl;
    this._ignoreDbs = config.ignoreDbs;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disable_ssl - computed: false, optional: true, required: false
  private _disableSsl?: boolean | cdktf.IResolvable; 
  public get disableSsl() {
    return this.getBooleanAttribute('disable_ssl');
  }
  public set disableSsl(value: boolean | cdktf.IResolvable) {
    this._disableSsl = value;
  }
  public resetDisableSsl() {
    this._disableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSslInput() {
    return this._disableSsl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_dbs - computed: false, optional: true, required: false
  private _ignoreDbs?: string[]; 
  public get ignoreDbs() {
    return cdktf.Fn.tolist(this.getListAttribute('ignore_dbs'));
  }
  public set ignoreDbs(value: string[]) {
    this._ignoreDbs = value;
  }
  public resetIgnoreDbs() {
    this._ignoreDbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDbsInput() {
    return this._ignoreDbs;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // source - computed: false, optional: false, required: true
  private _source = new DatabaseOnlineMigrationSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DatabaseOnlineMigrationSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      disable_ssl: cdktf.booleanToTerraform(this._disableSsl),
      ignore_dbs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreDbs),
      source: databaseOnlineMigrationSourceToTerraform(this._source.internalValue),
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
      disable_ssl: {
        value: cdktf.booleanToHclTerraform(this._disableSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_dbs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreDbs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source: {
        value: databaseOnlineMigrationSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseOnlineMigrationSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
