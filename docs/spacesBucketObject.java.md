# `spacesBucketObject` Submodule <a name="`spacesBucketObject` Submodule" id="@cdktf/provider-digitalocean.spacesBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpacesBucketObject <a name="SpacesBucketObject" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object digitalocean_spaces_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_object.SpacesBucketObject;

SpacesBucketObject.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .key(java.lang.String)
    .region(java.lang.String)
//  .acl(java.lang.String)
//  .cacheControl(java.lang.String)
//  .content(java.lang.String)
//  .contentBase64(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .etag(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .source(java.lang.String)
//  .websiteRedirect(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#bucket SpacesBucketObject#bucket}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#key SpacesBucketObject#key}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#region SpacesBucketObject#region}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#acl SpacesBucketObject#acl}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#cache_control SpacesBucketObject#cache_control}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content SpacesBucketObject#content}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_base64 SpacesBucketObject#content_base64}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_disposition SpacesBucketObject#content_disposition}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_encoding SpacesBucketObject#content_encoding}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_language SpacesBucketObject#content_language}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_type SpacesBucketObject#content_type}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#etag SpacesBucketObject#etag}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#force_destroy SpacesBucketObject#force_destroy}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#id SpacesBucketObject#id}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#metadata SpacesBucketObject#metadata}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#source SpacesBucketObject#source}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#website_redirect SpacesBucketObject#website_redirect}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#bucket SpacesBucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#key SpacesBucketObject#key}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#region SpacesBucketObject#region}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.acl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#acl SpacesBucketObject#acl}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.cacheControl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#cache_control SpacesBucketObject#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content SpacesBucketObject#content}.

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.contentBase64"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_base64 SpacesBucketObject#content_base64}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.contentDisposition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_disposition SpacesBucketObject#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.contentEncoding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_encoding SpacesBucketObject#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.contentLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_language SpacesBucketObject#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_type SpacesBucketObject#content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#etag SpacesBucketObject#etag}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#force_destroy SpacesBucketObject#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#id SpacesBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#metadata SpacesBucketObject#metadata}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#source SpacesBucketObject#source}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.Initializer.parameter.websiteRedirect"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#website_redirect SpacesBucketObject#website_redirect}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentBase64">resetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetAcl"></a>

```java
public void resetAcl()
```

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetCacheControl"></a>

```java
public void resetCacheControl()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentBase64` <a name="resetContentBase64" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentBase64"></a>

```java
public void resetContentBase64()
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentDisposition"></a>

```java
public void resetContentDisposition()
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentEncoding"></a>

```java
public void resetContentEncoding()
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentLanguage"></a>

```java
public void resetContentLanguage()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetSource"></a>

```java
public void resetSource()
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.resetWebsiteRedirect"></a>

```java
public void resetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpacesBucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_object.SpacesBucketObject;

SpacesBucketObject.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_object.SpacesBucketObject;

SpacesBucketObject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_object.SpacesBucketObject;

SpacesBucketObject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_object.SpacesBucketObject;

SpacesBucketObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpacesBucketObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SpacesBucketObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpacesBucketObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpacesBucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SpacesBucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.aclInput">aclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cacheControlInput">cacheControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentBase64Input">contentBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentDispositionInput">contentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentEncodingInput">contentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentLanguageInput">contentLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.acl">acl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.aclInput"></a>

```java
public java.lang.String getAclInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cacheControlInput"></a>

```java
public java.lang.String getCacheControlInput();
```

- *Type:* java.lang.String

---

##### `contentBase64Input`<sup>Optional</sup> <a name="contentBase64Input" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentBase64Input"></a>

```java
public java.lang.String getContentBase64Input();
```

- *Type:* java.lang.String

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentDispositionInput"></a>

```java
public java.lang.String getContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentEncodingInput"></a>

```java
public java.lang.String getContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentLanguageInput"></a>

```java
public java.lang.String getContentLanguageInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.websiteRedirectInput"></a>

```java
public java.lang.String getWebsiteRedirectInput();
```

- *Type:* java.lang.String

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentBase64"></a>

```java
public java.lang.String getContentBase64();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpacesBucketObjectConfig <a name="SpacesBucketObjectConfig" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.spaces_bucket_object.SpacesBucketObjectConfig;

SpacesBucketObjectConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .key(java.lang.String)
    .region(java.lang.String)
//  .acl(java.lang.String)
//  .cacheControl(java.lang.String)
//  .content(java.lang.String)
//  .contentBase64(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .etag(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .source(java.lang.String)
//  .websiteRedirect(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#bucket SpacesBucketObject#bucket}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#key SpacesBucketObject#key}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#region SpacesBucketObject#region}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#acl SpacesBucketObject#acl}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#cache_control SpacesBucketObject#cache_control}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content SpacesBucketObject#content}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_base64 SpacesBucketObject#content_base64}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_disposition SpacesBucketObject#content_disposition}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_encoding SpacesBucketObject#content_encoding}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_language SpacesBucketObject#content_language}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_type SpacesBucketObject#content_type}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#etag SpacesBucketObject#etag}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#force_destroy SpacesBucketObject#force_destroy}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#id SpacesBucketObject#id}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#metadata SpacesBucketObject#metadata}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#source SpacesBucketObject#source}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#website_redirect SpacesBucketObject#website_redirect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#bucket SpacesBucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#key SpacesBucketObject#key}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#region SpacesBucketObject#region}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#acl SpacesBucketObject#acl}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#cache_control SpacesBucketObject#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content SpacesBucketObject#content}.

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentBase64"></a>

```java
public java.lang.String getContentBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_base64 SpacesBucketObject#content_base64}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_disposition SpacesBucketObject#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_encoding SpacesBucketObject#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_language SpacesBucketObject#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#content_type SpacesBucketObject#content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#etag SpacesBucketObject#etag}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#force_destroy SpacesBucketObject#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#id SpacesBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#metadata SpacesBucketObject#metadata}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#source SpacesBucketObject#source}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-digitalocean.spacesBucketObject.SpacesBucketObjectConfig.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.50.0/docs/resources/spaces_bucket_object#website_redirect SpacesBucketObject#website_redirect}.

---



