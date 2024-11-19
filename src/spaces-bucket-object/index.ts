/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpacesBucketObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#acl SpacesBucketObject#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#bucket SpacesBucketObject#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#cache_control SpacesBucketObject#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#content SpacesBucketObject#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#content_base64 SpacesBucketObject#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#content_disposition SpacesBucketObject#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#content_encoding SpacesBucketObject#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#content_language SpacesBucketObject#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#content_type SpacesBucketObject#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#etag SpacesBucketObject#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#force_destroy SpacesBucketObject#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#id SpacesBucketObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#key SpacesBucketObject#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#metadata SpacesBucketObject#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#region SpacesBucketObject#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#source SpacesBucketObject#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#website_redirect SpacesBucketObject#website_redirect}
  */
  readonly websiteRedirect?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object digitalocean_spaces_bucket_object}
*/
export class SpacesBucketObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_spaces_bucket_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpacesBucketObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpacesBucketObject to import
  * @param importFromId The id of the existing SpacesBucketObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpacesBucketObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_spaces_bucket_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.44.0/docs/resources/spaces_bucket_object digitalocean_spaces_bucket_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpacesBucketObjectConfig
  */
  public constructor(scope: Construct, id: string, config: SpacesBucketObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_spaces_bucket_object',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.44.0',
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
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._cacheControl = config.cacheControl;
    this._content = config.content;
    this._contentBase64 = config.contentBase64;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._etag = config.etag;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._key = config.key;
    this._metadata = config.metadata;
    this._region = config.region;
    this._source = config.source;
    this._websiteRedirect = config.websiteRedirect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

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

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_base64 - computed: false, optional: true, required: false
  private _contentBase64?: string; 
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }
  public set contentBase64(value: string) {
    this._contentBase64 = value;
  }
  public resetContentBase64() {
    this._contentBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBase64Input() {
    return this._contentBase64;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string; 
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // website_redirect - computed: false, optional: true, required: false
  private _websiteRedirect?: string; 
  public get websiteRedirect() {
    return this.getStringAttribute('website_redirect');
  }
  public set websiteRedirect(value: string) {
    this._websiteRedirect = value;
  }
  public resetWebsiteRedirect() {
    this._websiteRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteRedirectInput() {
    return this._websiteRedirect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      content: cdktf.stringToTerraform(this._content),
      content_base64: cdktf.stringToTerraform(this._contentBase64),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_type: cdktf.stringToTerraform(this._contentType),
      etag: cdktf.stringToTerraform(this._etag),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      region: cdktf.stringToTerraform(this._region),
      source: cdktf.stringToTerraform(this._source),
      website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_control: {
        value: cdktf.stringToHclTerraform(this._cacheControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_base64: {
        value: cdktf.stringToHclTerraform(this._contentBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_disposition: {
        value: cdktf.stringToHclTerraform(this._contentDisposition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_encoding: {
        value: cdktf.stringToHclTerraform(this._contentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_language: {
        value: cdktf.stringToHclTerraform(this._contentLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website_redirect: {
        value: cdktf.stringToHclTerraform(this._websiteRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
