/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseKafkaSchemaRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#cluster_id DatabaseKafkaSchemaRegistry#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#id DatabaseKafkaSchemaRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#schema DatabaseKafkaSchemaRegistry#schema}
  */
  readonly schema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#schema_type DatabaseKafkaSchemaRegistry#schema_type}
  */
  readonly schemaType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#subject_name DatabaseKafkaSchemaRegistry#subject_name}
  */
  readonly subjectName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry digitalocean_database_kafka_schema_registry}
*/
export class DatabaseKafkaSchemaRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_kafka_schema_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseKafkaSchemaRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseKafkaSchemaRegistry to import
  * @param importFromId The id of the existing DatabaseKafkaSchemaRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseKafkaSchemaRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_kafka_schema_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/database_kafka_schema_registry digitalocean_database_kafka_schema_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseKafkaSchemaRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseKafkaSchemaRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_kafka_schema_registry',
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
    this._id = config.id;
    this._schema = config.schema;
    this._schemaType = config.schemaType;
    this._subjectName = config.subjectName;
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

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // schema_type - computed: false, optional: false, required: true
  private _schemaType?: string; 
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }
  public set schemaType(value: string) {
    this._schemaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTypeInput() {
    return this._schemaType;
  }

  // subject_name - computed: false, optional: false, required: true
  private _subjectName?: string; 
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }
  public set subjectName(value: string) {
    this._subjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameInput() {
    return this._subjectName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      schema: cdktf.stringToTerraform(this._schema),
      schema_type: cdktf.stringToTerraform(this._schemaType),
      subject_name: cdktf.stringToTerraform(this._subjectName),
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
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_type: {
        value: cdktf.stringToHclTerraform(this._schemaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_name: {
        value: cdktf.stringToHclTerraform(this._subjectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
