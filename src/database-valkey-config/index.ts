/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseValkeyConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#acl_channels_default DatabaseValkeyConfig#acl_channels_default}
  */
  readonly aclChannelsDefault?: string;
  /**
  * A unique identifier for the database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#cluster_id DatabaseValkeyConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Frequent RDB snapshots. When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when valkey_persistence is set to off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#frequent_snapshots DatabaseValkeyConfig#frequent_snapshots}
  */
  readonly frequentSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#id DatabaseValkeyConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of IO threads used by Valkey. Must be between 1 and 32.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#io_threads DatabaseValkeyConfig#io_threads}
  */
  readonly ioThreads?: number;
  /**
  * The decay time for Valkey's LFU cache eviction. Must be between 1 and 120.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#lfu_decay_time DatabaseValkeyConfig#lfu_decay_time}
  */
  readonly lfuDecayTime?: number;
  /**
  * The log factor for Valkey's LFU (Least Frequently Used) cache eviction. Must be between 1 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#lfu_log_factor DatabaseValkeyConfig#lfu_log_factor}
  */
  readonly lfuLogFactor?: number;
  /**
  * Set notify-keyspace-events option. Requires at least K or E and accepts any combination of the following options. Setting the parameter to "" disables notifications.
  * 
  * K — Keyspace events
  * E — Keyevent events
  * g — Generic commands (e.g. DEL, EXPIRE, RENAME, ...)
  * $ — String commands
  * l — List commands
  * s — Set commands
  * h — Hash commands
  * z — Sorted set commands
  * t — Stream commands
  * d — Module key type events
  * x — Expired events
  * e — Evicted events
  * m — Key miss events
  * n — New key events
  * A — Alias for "g$lshztxed"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#notify_keyspace_events DatabaseValkeyConfig#notify_keyspace_events}
  */
  readonly notifyKeyspaceEvents?: string;
  /**
  * The number of logical databases in the Valkey cluster. Must be between 1 and 128.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#number_of_databases DatabaseValkeyConfig#number_of_databases}
  */
  readonly numberOfDatabases?: number;
  /**
  * When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#persistence DatabaseValkeyConfig#persistence}
  */
  readonly persistence?: string;
  /**
  * Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#pubsub_client_output_buffer_limit DatabaseValkeyConfig#pubsub_client_output_buffer_limit}
  */
  readonly pubsubClientOutputBufferLimit?: number;
  /**
  * Whether to enable SSL/TLS for connections to the Valkey cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#ssl DatabaseValkeyConfig#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * The timeout (in seconds) for Valkey client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#timeout DatabaseValkeyConfig#timeout}
  */
  readonly timeout?: number;
  /**
  * Active expire effort. Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#valkey_active_expire_effort DatabaseValkeyConfig#valkey_active_expire_effort}
  */
  readonly valkeyActiveExpireEffort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config digitalocean_database_valkey_config}
*/
export class DatabaseValkeyConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_valkey_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseValkeyConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseValkeyConfig to import
  * @param importFromId The id of the existing DatabaseValkeyConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseValkeyConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_valkey_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.70.0/docs/resources/database_valkey_config digitalocean_database_valkey_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseValkeyConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseValkeyConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_valkey_config',
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
    this._aclChannelsDefault = config.aclChannelsDefault;
    this._clusterId = config.clusterId;
    this._frequentSnapshots = config.frequentSnapshots;
    this._id = config.id;
    this._ioThreads = config.ioThreads;
    this._lfuDecayTime = config.lfuDecayTime;
    this._lfuLogFactor = config.lfuLogFactor;
    this._notifyKeyspaceEvents = config.notifyKeyspaceEvents;
    this._numberOfDatabases = config.numberOfDatabases;
    this._persistence = config.persistence;
    this._pubsubClientOutputBufferLimit = config.pubsubClientOutputBufferLimit;
    this._ssl = config.ssl;
    this._timeout = config.timeout;
    this._valkeyActiveExpireEffort = config.valkeyActiveExpireEffort;
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

  // frequent_snapshots - computed: true, optional: true, required: false
  private _frequentSnapshots?: boolean | cdktf.IResolvable; 
  public get frequentSnapshots() {
    return this.getBooleanAttribute('frequent_snapshots');
  }
  public set frequentSnapshots(value: boolean | cdktf.IResolvable) {
    this._frequentSnapshots = value;
  }
  public resetFrequentSnapshots() {
    this._frequentSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequentSnapshotsInput() {
    return this._frequentSnapshots;
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

  // valkey_active_expire_effort - computed: true, optional: true, required: false
  private _valkeyActiveExpireEffort?: number; 
  public get valkeyActiveExpireEffort() {
    return this.getNumberAttribute('valkey_active_expire_effort');
  }
  public set valkeyActiveExpireEffort(value: number) {
    this._valkeyActiveExpireEffort = value;
  }
  public resetValkeyActiveExpireEffort() {
    this._valkeyActiveExpireEffort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyActiveExpireEffortInput() {
    return this._valkeyActiveExpireEffort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_channels_default: cdktf.stringToTerraform(this._aclChannelsDefault),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      frequent_snapshots: cdktf.booleanToTerraform(this._frequentSnapshots),
      id: cdktf.stringToTerraform(this._id),
      io_threads: cdktf.numberToTerraform(this._ioThreads),
      lfu_decay_time: cdktf.numberToTerraform(this._lfuDecayTime),
      lfu_log_factor: cdktf.numberToTerraform(this._lfuLogFactor),
      notify_keyspace_events: cdktf.stringToTerraform(this._notifyKeyspaceEvents),
      number_of_databases: cdktf.numberToTerraform(this._numberOfDatabases),
      persistence: cdktf.stringToTerraform(this._persistence),
      pubsub_client_output_buffer_limit: cdktf.numberToTerraform(this._pubsubClientOutputBufferLimit),
      ssl: cdktf.booleanToTerraform(this._ssl),
      timeout: cdktf.numberToTerraform(this._timeout),
      valkey_active_expire_effort: cdktf.numberToTerraform(this._valkeyActiveExpireEffort),
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
      frequent_snapshots: {
        value: cdktf.booleanToHclTerraform(this._frequentSnapshots),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      valkey_active_expire_effort: {
        value: cdktf.numberToHclTerraform(this._valkeyActiveExpireEffort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
