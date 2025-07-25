/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenaiKnowledgeBaseDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * UUID of the Knowledge Base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source#knowledge_base_uuid GenaiKnowledgeBaseDataSource#knowledge_base_uuid}
  */
  readonly knowledgeBaseUuid: string;
  /**
  * spaces_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source#spaces_data_source GenaiKnowledgeBaseDataSource#spaces_data_source}
  */
  readonly spacesDataSource?: GenaiKnowledgeBaseDataSourceSpacesDataSource;
  /**
  * web_crawler_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source#web_crawler_data_source GenaiKnowledgeBaseDataSource#web_crawler_data_source}
  */
  readonly webCrawlerDataSource?: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource;
}
export interface GenaiKnowledgeBaseDataSourceSpacesDataSource {
  /**
  * The name of the Spaces bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source#bucket_name GenaiKnowledgeBaseDataSource#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * The path to the item in the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source#item_path GenaiKnowledgeBaseDataSource#item_path}
  */
  readonly itemPath?: string;
  /**
  * The region of the Spaces bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source#region GenaiKnowledgeBaseDataSource#region}
  */
  readonly region?: string;
}

export function genaiKnowledgeBaseDataSourceSpacesDataSourceToTerraform(struct?: GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference | GenaiKnowledgeBaseDataSourceSpacesDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    item_path: cdktf.stringToTerraform(struct!.itemPath),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function genaiKnowledgeBaseDataSourceSpacesDataSourceToHclTerraform(struct?: GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference | GenaiKnowledgeBaseDataSourceSpacesDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item_path: {
      value: cdktf.stringToHclTerraform(struct!.itemPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenaiKnowledgeBaseDataSourceSpacesDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._itemPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemPath = this._itemPath;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiKnowledgeBaseDataSourceSpacesDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._itemPath = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._itemPath = value.itemPath;
      this._region = value.region;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // item_path - computed: false, optional: true, required: false
  private _itemPath?: string; 
  public get itemPath() {
    return this.getStringAttribute('item_path');
  }
  public set itemPath(value: string) {
    this._itemPath = value;
  }
  public resetItemPath() {
    this._itemPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemPathInput() {
    return this._itemPath;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface GenaiKnowledgeBaseDataSourceWebCrawlerDataSource {
  /**
  * The base URL to crawl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source#base_url GenaiKnowledgeBaseDataSource#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Options for specifying how URLs found on pages should be handled. 
  * - UNKNOWN: Default unknown value
  * - SCOPED: Only include the base URL.
  * - PATH: Crawl the base URL and linked pages within the URL path.
  * - DOMAIN: Crawl the base URL and linked pages within the same domain.
  * - SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source#crawling_option GenaiKnowledgeBaseDataSource#crawling_option}
  */
  readonly crawlingOption?: string;
  /**
  * Whether to embed media content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source#embed_media GenaiKnowledgeBaseDataSource#embed_media}
  */
  readonly embedMedia?: boolean | cdktf.IResolvable;
}

export function genaiKnowledgeBaseDataSourceWebCrawlerDataSourceToTerraform(struct?: GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference | GenaiKnowledgeBaseDataSourceWebCrawlerDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    crawling_option: cdktf.stringToTerraform(struct!.crawlingOption),
    embed_media: cdktf.booleanToTerraform(struct!.embedMedia),
  }
}


export function genaiKnowledgeBaseDataSourceWebCrawlerDataSourceToHclTerraform(struct?: GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference | GenaiKnowledgeBaseDataSourceWebCrawlerDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crawling_option: {
      value: cdktf.stringToHclTerraform(struct!.crawlingOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embed_media: {
      value: cdktf.booleanToHclTerraform(struct!.embedMedia),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenaiKnowledgeBaseDataSourceWebCrawlerDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._crawlingOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlingOption = this._crawlingOption;
    }
    if (this._embedMedia !== undefined) {
      hasAnyValues = true;
      internalValueResult.embedMedia = this._embedMedia;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseUrl = undefined;
      this._crawlingOption = undefined;
      this._embedMedia = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseUrl = value.baseUrl;
      this._crawlingOption = value.crawlingOption;
      this._embedMedia = value.embedMedia;
    }
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // crawling_option - computed: false, optional: true, required: false
  private _crawlingOption?: string; 
  public get crawlingOption() {
    return this.getStringAttribute('crawling_option');
  }
  public set crawlingOption(value: string) {
    this._crawlingOption = value;
  }
  public resetCrawlingOption() {
    this._crawlingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlingOptionInput() {
    return this._crawlingOption;
  }

  // embed_media - computed: false, optional: true, required: false
  private _embedMedia?: boolean | cdktf.IResolvable; 
  public get embedMedia() {
    return this.getBooleanAttribute('embed_media');
  }
  public set embedMedia(value: boolean | cdktf.IResolvable) {
    this._embedMedia = value;
  }
  public resetEmbedMedia() {
    this._embedMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedMediaInput() {
    return this._embedMedia;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source digitalocean_genai_knowledge_base_data_source}
*/
export class GenaiKnowledgeBaseDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_genai_knowledge_base_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenaiKnowledgeBaseDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenaiKnowledgeBaseDataSource to import
  * @param importFromId The id of the existing GenaiKnowledgeBaseDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenaiKnowledgeBaseDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_genai_knowledge_base_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/resources/genai_knowledge_base_data_source digitalocean_genai_knowledge_base_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenaiKnowledgeBaseDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: GenaiKnowledgeBaseDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_genai_knowledge_base_data_source',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.61.0',
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
    this._knowledgeBaseUuid = config.knowledgeBaseUuid;
    this._spacesDataSource.internalValue = config.spacesDataSource;
    this._webCrawlerDataSource.internalValue = config.webCrawlerDataSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // knowledge_base_uuid - computed: false, optional: false, required: true
  private _knowledgeBaseUuid?: string; 
  public get knowledgeBaseUuid() {
    return this.getStringAttribute('knowledge_base_uuid');
  }
  public set knowledgeBaseUuid(value: string) {
    this._knowledgeBaseUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseUuidInput() {
    return this._knowledgeBaseUuid;
  }

  // spaces_data_source - computed: false, optional: true, required: false
  private _spacesDataSource = new GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference(this, "spaces_data_source");
  public get spacesDataSource() {
    return this._spacesDataSource;
  }
  public putSpacesDataSource(value: GenaiKnowledgeBaseDataSourceSpacesDataSource) {
    this._spacesDataSource.internalValue = value;
  }
  public resetSpacesDataSource() {
    this._spacesDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spacesDataSourceInput() {
    return this._spacesDataSource.internalValue;
  }

  // web_crawler_data_source - computed: false, optional: true, required: false
  private _webCrawlerDataSource = new GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference(this, "web_crawler_data_source");
  public get webCrawlerDataSource() {
    return this._webCrawlerDataSource;
  }
  public putWebCrawlerDataSource(value: GenaiKnowledgeBaseDataSourceWebCrawlerDataSource) {
    this._webCrawlerDataSource.internalValue = value;
  }
  public resetWebCrawlerDataSource() {
    this._webCrawlerDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCrawlerDataSourceInput() {
    return this._webCrawlerDataSource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      knowledge_base_uuid: cdktf.stringToTerraform(this._knowledgeBaseUuid),
      spaces_data_source: genaiKnowledgeBaseDataSourceSpacesDataSourceToTerraform(this._spacesDataSource.internalValue),
      web_crawler_data_source: genaiKnowledgeBaseDataSourceWebCrawlerDataSourceToTerraform(this._webCrawlerDataSource.internalValue),
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
      knowledge_base_uuid: {
        value: cdktf.stringToHclTerraform(this._knowledgeBaseUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spaces_data_source: {
        value: genaiKnowledgeBaseDataSourceSpacesDataSourceToHclTerraform(this._spacesDataSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiKnowledgeBaseDataSourceSpacesDataSourceList",
      },
      web_crawler_data_source: {
        value: genaiKnowledgeBaseDataSourceWebCrawlerDataSourceToHclTerraform(this._webCrawlerDataSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
