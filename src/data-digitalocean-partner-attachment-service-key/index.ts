/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/partner_attachment_service_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanPartnerAttachmentServiceKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Partner Attachment for which to retrieve the service key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/partner_attachment_service_key#attachment_id DataDigitaloceanPartnerAttachmentServiceKey#attachment_id}
  */
  readonly attachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/partner_attachment_service_key#id DataDigitaloceanPartnerAttachmentServiceKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/partner_attachment_service_key digitalocean_partner_attachment_service_key}
*/
export class DataDigitaloceanPartnerAttachmentServiceKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_partner_attachment_service_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDigitaloceanPartnerAttachmentServiceKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDigitaloceanPartnerAttachmentServiceKey to import
  * @param importFromId The id of the existing DataDigitaloceanPartnerAttachmentServiceKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/partner_attachment_service_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDigitaloceanPartnerAttachmentServiceKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_partner_attachment_service_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/partner_attachment_service_key digitalocean_partner_attachment_service_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanPartnerAttachmentServiceKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanPartnerAttachmentServiceKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_partner_attachment_service_key',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.62.0',
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
    this._attachmentId = config.attachmentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_id - computed: false, optional: false, required: true
  private _attachmentId?: string; 
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }
  public set attachmentId(value: string) {
    this._attachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentIdInput() {
    return this._attachmentId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attachment_id: cdktf.stringToTerraform(this._attachmentId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attachment_id: {
        value: cdktf.stringToHclTerraform(this._attachmentId),
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
