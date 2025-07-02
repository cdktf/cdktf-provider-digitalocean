/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_mongodb_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseMongodbConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_mongodb_config#cluster_id DatabaseMongodbConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_mongodb_config#default_read_concern DatabaseMongodbConfig#default_read_concern}
  */
  readonly defaultReadConcern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_mongodb_config#default_write_concern DatabaseMongodbConfig#default_write_concern}
  */
  readonly defaultWriteConcern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_mongodb_config#id DatabaseMongodbConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_mongodb_config#slow_op_threshold_ms DatabaseMongodbConfig#slow_op_threshold_ms}
  */
  readonly slowOpThresholdMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_mongodb_config#transaction_lifetime_limit_seconds DatabaseMongodbConfig#transaction_lifetime_limit_seconds}
  */
  readonly transactionLifetimeLimitSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_mongodb_config#verbosity DatabaseMongodbConfig#verbosity}
  */
  readonly verbosity?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_mongodb_config digitalocean_database_mongodb_config}
*/
export class DatabaseMongodbConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_mongodb_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseMongodbConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseMongodbConfig to import
  * @param importFromId The id of the existing DatabaseMongodbConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_mongodb_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseMongodbConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_mongodb_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.58.0/docs/resources/database_mongodb_config digitalocean_database_mongodb_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseMongodbConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseMongodbConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_mongodb_config',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.58.0',
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
    this._defaultReadConcern = config.defaultReadConcern;
    this._defaultWriteConcern = config.defaultWriteConcern;
    this._id = config.id;
    this._slowOpThresholdMs = config.slowOpThresholdMs;
    this._transactionLifetimeLimitSeconds = config.transactionLifetimeLimitSeconds;
    this._verbosity = config.verbosity;
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

  // default_read_concern - computed: true, optional: true, required: false
  private _defaultReadConcern?: string; 
  public get defaultReadConcern() {
    return this.getStringAttribute('default_read_concern');
  }
  public set defaultReadConcern(value: string) {
    this._defaultReadConcern = value;
  }
  public resetDefaultReadConcern() {
    this._defaultReadConcern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReadConcernInput() {
    return this._defaultReadConcern;
  }

  // default_write_concern - computed: true, optional: true, required: false
  private _defaultWriteConcern?: string; 
  public get defaultWriteConcern() {
    return this.getStringAttribute('default_write_concern');
  }
  public set defaultWriteConcern(value: string) {
    this._defaultWriteConcern = value;
  }
  public resetDefaultWriteConcern() {
    this._defaultWriteConcern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWriteConcernInput() {
    return this._defaultWriteConcern;
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

  // slow_op_threshold_ms - computed: true, optional: true, required: false
  private _slowOpThresholdMs?: number; 
  public get slowOpThresholdMs() {
    return this.getNumberAttribute('slow_op_threshold_ms');
  }
  public set slowOpThresholdMs(value: number) {
    this._slowOpThresholdMs = value;
  }
  public resetSlowOpThresholdMs() {
    this._slowOpThresholdMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowOpThresholdMsInput() {
    return this._slowOpThresholdMs;
  }

  // transaction_lifetime_limit_seconds - computed: true, optional: true, required: false
  private _transactionLifetimeLimitSeconds?: number; 
  public get transactionLifetimeLimitSeconds() {
    return this.getNumberAttribute('transaction_lifetime_limit_seconds');
  }
  public set transactionLifetimeLimitSeconds(value: number) {
    this._transactionLifetimeLimitSeconds = value;
  }
  public resetTransactionLifetimeLimitSeconds() {
    this._transactionLifetimeLimitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionLifetimeLimitSecondsInput() {
    return this._transactionLifetimeLimitSeconds;
  }

  // verbosity - computed: true, optional: true, required: false
  private _verbosity?: number; 
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
  public set verbosity(value: number) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      default_read_concern: cdktf.stringToTerraform(this._defaultReadConcern),
      default_write_concern: cdktf.stringToTerraform(this._defaultWriteConcern),
      id: cdktf.stringToTerraform(this._id),
      slow_op_threshold_ms: cdktf.numberToTerraform(this._slowOpThresholdMs),
      transaction_lifetime_limit_seconds: cdktf.numberToTerraform(this._transactionLifetimeLimitSeconds),
      verbosity: cdktf.numberToTerraform(this._verbosity),
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
      default_read_concern: {
        value: cdktf.stringToHclTerraform(this._defaultReadConcern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_write_concern: {
        value: cdktf.stringToHclTerraform(this._defaultWriteConcern),
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
      slow_op_threshold_ms: {
        value: cdktf.numberToHclTerraform(this._slowOpThresholdMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transaction_lifetime_limit_seconds: {
        value: cdktf.numberToHclTerraform(this._transactionLifetimeLimitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      verbosity: {
        value: cdktf.numberToHclTerraform(this._verbosity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
