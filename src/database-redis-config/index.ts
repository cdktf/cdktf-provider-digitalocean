/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseRedisConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#acl_channels_default DatabaseRedisConfig#acl_channels_default}
  */
  readonly aclChannelsDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#cluster_id DatabaseRedisConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#id DatabaseRedisConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#io_threads DatabaseRedisConfig#io_threads}
  */
  readonly ioThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#lfu_decay_time DatabaseRedisConfig#lfu_decay_time}
  */
  readonly lfuDecayTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#lfu_log_factor DatabaseRedisConfig#lfu_log_factor}
  */
  readonly lfuLogFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#maxmemory_policy DatabaseRedisConfig#maxmemory_policy}
  */
  readonly maxmemoryPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#notify_keyspace_events DatabaseRedisConfig#notify_keyspace_events}
  */
  readonly notifyKeyspaceEvents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#number_of_databases DatabaseRedisConfig#number_of_databases}
  */
  readonly numberOfDatabases?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#persistence DatabaseRedisConfig#persistence}
  */
  readonly persistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#pubsub_client_output_buffer_limit DatabaseRedisConfig#pubsub_client_output_buffer_limit}
  */
  readonly pubsubClientOutputBufferLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#ssl DatabaseRedisConfig#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#timeout DatabaseRedisConfig#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config digitalocean_database_redis_config}
*/
export class DatabaseRedisConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_redis_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseRedisConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseRedisConfig to import
  * @param importFromId The id of the existing DatabaseRedisConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseRedisConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_redis_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs/resources/database_redis_config digitalocean_database_redis_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseRedisConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseRedisConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_redis_config',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.39.2',
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
    this._aclChannelsDefault = config.aclChannelsDefault;
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._ioThreads = config.ioThreads;
    this._lfuDecayTime = config.lfuDecayTime;
    this._lfuLogFactor = config.lfuLogFactor;
    this._maxmemoryPolicy = config.maxmemoryPolicy;
    this._notifyKeyspaceEvents = config.notifyKeyspaceEvents;
    this._numberOfDatabases = config.numberOfDatabases;
    this._persistence = config.persistence;
    this._pubsubClientOutputBufferLimit = config.pubsubClientOutputBufferLimit;
    this._ssl = config.ssl;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_channels_default - computed: true, optional: true, required: false
  private _aclChannelsDefault?: string; 
  public get aclChannelsDefault() {
    return this.getStringAttribute('acl_channels_default');
  }
  public set aclChannelsDefault(value: string) {
    this._aclChannelsDefault = value;
  }
  public resetAclChannelsDefault() {
    this._aclChannelsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclChannelsDefaultInput() {
    return this._aclChannelsDefault;
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

  // io_threads - computed: true, optional: true, required: false
  private _ioThreads?: number; 
  public get ioThreads() {
    return this.getNumberAttribute('io_threads');
  }
  public set ioThreads(value: number) {
    this._ioThreads = value;
  }
  public resetIoThreads() {
    this._ioThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioThreadsInput() {
    return this._ioThreads;
  }

  // lfu_decay_time - computed: true, optional: true, required: false
  private _lfuDecayTime?: number; 
  public get lfuDecayTime() {
    return this.getNumberAttribute('lfu_decay_time');
  }
  public set lfuDecayTime(value: number) {
    this._lfuDecayTime = value;
  }
  public resetLfuDecayTime() {
    this._lfuDecayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfuDecayTimeInput() {
    return this._lfuDecayTime;
  }

  // lfu_log_factor - computed: true, optional: true, required: false
  private _lfuLogFactor?: number; 
  public get lfuLogFactor() {
    return this.getNumberAttribute('lfu_log_factor');
  }
  public set lfuLogFactor(value: number) {
    this._lfuLogFactor = value;
  }
  public resetLfuLogFactor() {
    this._lfuLogFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfuLogFactorInput() {
    return this._lfuLogFactor;
  }

  // maxmemory_policy - computed: true, optional: true, required: false
  private _maxmemoryPolicy?: string; 
  public get maxmemoryPolicy() {
    return this.getStringAttribute('maxmemory_policy');
  }
  public set maxmemoryPolicy(value: string) {
    this._maxmemoryPolicy = value;
  }
  public resetMaxmemoryPolicy() {
    this._maxmemoryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemoryPolicyInput() {
    return this._maxmemoryPolicy;
  }

  // notify_keyspace_events - computed: true, optional: true, required: false
  private _notifyKeyspaceEvents?: string; 
  public get notifyKeyspaceEvents() {
    return this.getStringAttribute('notify_keyspace_events');
  }
  public set notifyKeyspaceEvents(value: string) {
    this._notifyKeyspaceEvents = value;
  }
  public resetNotifyKeyspaceEvents() {
    this._notifyKeyspaceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyKeyspaceEventsInput() {
    return this._notifyKeyspaceEvents;
  }

  // number_of_databases - computed: true, optional: true, required: false
  private _numberOfDatabases?: number; 
  public get numberOfDatabases() {
    return this.getNumberAttribute('number_of_databases');
  }
  public set numberOfDatabases(value: number) {
    this._numberOfDatabases = value;
  }
  public resetNumberOfDatabases() {
    this._numberOfDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDatabasesInput() {
    return this._numberOfDatabases;
  }

  // persistence - computed: true, optional: true, required: false
  private _persistence?: string; 
  public get persistence() {
    return this.getStringAttribute('persistence');
  }
  public set persistence(value: string) {
    this._persistence = value;
  }
  public resetPersistence() {
    this._persistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence;
  }

  // pubsub_client_output_buffer_limit - computed: true, optional: true, required: false
  private _pubsubClientOutputBufferLimit?: number; 
  public get pubsubClientOutputBufferLimit() {
    return this.getNumberAttribute('pubsub_client_output_buffer_limit');
  }
  public set pubsubClientOutputBufferLimit(value: number) {
    this._pubsubClientOutputBufferLimit = value;
  }
  public resetPubsubClientOutputBufferLimit() {
    this._pubsubClientOutputBufferLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubClientOutputBufferLimitInput() {
    return this._pubsubClientOutputBufferLimit;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_channels_default: cdktf.stringToTerraform(this._aclChannelsDefault),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      io_threads: cdktf.numberToTerraform(this._ioThreads),
      lfu_decay_time: cdktf.numberToTerraform(this._lfuDecayTime),
      lfu_log_factor: cdktf.numberToTerraform(this._lfuLogFactor),
      maxmemory_policy: cdktf.stringToTerraform(this._maxmemoryPolicy),
      notify_keyspace_events: cdktf.stringToTerraform(this._notifyKeyspaceEvents),
      number_of_databases: cdktf.numberToTerraform(this._numberOfDatabases),
      persistence: cdktf.stringToTerraform(this._persistence),
      pubsub_client_output_buffer_limit: cdktf.numberToTerraform(this._pubsubClientOutputBufferLimit),
      ssl: cdktf.booleanToTerraform(this._ssl),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_channels_default: {
        value: cdktf.stringToHclTerraform(this._aclChannelsDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      io_threads: {
        value: cdktf.numberToHclTerraform(this._ioThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lfu_decay_time: {
        value: cdktf.numberToHclTerraform(this._lfuDecayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lfu_log_factor: {
        value: cdktf.numberToHclTerraform(this._lfuLogFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxmemory_policy: {
        value: cdktf.stringToHclTerraform(this._maxmemoryPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_keyspace_events: {
        value: cdktf.stringToHclTerraform(this._notifyKeyspaceEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_databases: {
        value: cdktf.numberToHclTerraform(this._numberOfDatabases),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistence: {
        value: cdktf.stringToHclTerraform(this._persistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pubsub_client_output_buffer_limit: {
        value: cdktf.numberToHclTerraform(this._pubsubClientOutputBufferLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
