/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanSpacesBucketObjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#bucket DataDigitaloceanSpacesBucketObjects#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#delimiter DataDigitaloceanSpacesBucketObjects#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#encoding_type DataDigitaloceanSpacesBucketObjects#encoding_type}
  */
  readonly encodingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#id DataDigitaloceanSpacesBucketObjects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#max_keys DataDigitaloceanSpacesBucketObjects#max_keys}
  */
  readonly maxKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#prefix DataDigitaloceanSpacesBucketObjects#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#region DataDigitaloceanSpacesBucketObjects#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects digitalocean_spaces_bucket_objects}
*/
export class DataDigitaloceanSpacesBucketObjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_spaces_bucket_objects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanSpacesBucketObjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanSpacesBucketObjects to import
  * @param importFromId The id of the existing DataDigitaloceanSpacesBucketObjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanSpacesBucketObjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_spaces_bucket_objects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/data-sources/spaces_bucket_objects digitalocean_spaces_bucket_objects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanSpacesBucketObjectsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanSpacesBucketObjectsConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_spaces_bucket_objects',
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
    this._bucket = config.bucket;
    this._delimiter = config.delimiter;
    this._encodingType = config.encodingType;
    this._id = config.id;
    this._maxKeys = config.maxKeys;
    this._prefix = config.prefix;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // common_prefixes - computed: true, optional: false, required: false
  public get commonPrefixes() {
    return this.getListAttribute('common_prefixes');
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // encoding_type - computed: false, optional: true, required: false
  private _encodingType?: string; 
  public get encodingType() {
    return this.getStringAttribute('encoding_type');
  }
  public set encodingType(value: string) {
    this._encodingType = value;
  }
  public resetEncodingType() {
    this._encodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingTypeInput() {
    return this._encodingType;
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

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.getListAttribute('keys');
  }

  // max_keys - computed: false, optional: true, required: false
  private _maxKeys?: number; 
  public get maxKeys() {
    return this.getNumberAttribute('max_keys');
  }
  public set maxKeys(value: number) {
    this._maxKeys = value;
  }
  public resetMaxKeys() {
    this._maxKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxKeysInput() {
    return this._maxKeys;
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      delimiter: cdktf.stringToTerraform(this._delimiter),
      encoding_type: cdktf.stringToTerraform(this._encodingType),
      id: cdktf.stringToTerraform(this._id),
      max_keys: cdktf.numberToTerraform(this._maxKeys),
      prefix: cdktf.stringToTerraform(this._prefix),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delimiter: {
        value: cdktf.stringToHclTerraform(this._delimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encoding_type: {
        value: cdktf.stringToHclTerraform(this._encodingType),
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
      max_keys: {
        value: cdktf.numberToHclTerraform(this._maxKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
