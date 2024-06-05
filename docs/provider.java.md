# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-digitalocean.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitaloceanProvider <a name="DigitaloceanProvider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs digitalocean}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.provider.DigitaloceanProvider;

DigitaloceanProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .apiEndpoint(java.lang.String)
//  .httpRetryMax(java.lang.Number)
//  .httpRetryWaitMax(java.lang.Number)
//  .httpRetryWaitMin(java.lang.Number)
//  .requestsPerSecond(java.lang.Number)
//  .spacesAccessId(java.lang.String)
//  .spacesEndpoint(java.lang.String)
//  .spacesSecretKey(java.lang.String)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.apiEndpoint">apiEndpoint</a></code> | <code>java.lang.String</code> | The URL to use for the DigitalOcean API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.httpRetryMax">httpRetryMax</a></code> | <code>java.lang.Number</code> | The maximum number of retries on a failed API request. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.httpRetryWaitMax">httpRetryWaitMax</a></code> | <code>java.lang.Number</code> | The maximum wait time (in seconds) between failed API requests. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.httpRetryWaitMin">httpRetryWaitMin</a></code> | <code>java.lang.Number</code> | The minimum wait time (in seconds) between failed API requests. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.requestsPerSecond">requestsPerSecond</a></code> | <code>java.lang.Number</code> | The rate of requests per second to limit the HTTP client. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesAccessId">spacesAccessId</a></code> | <code>java.lang.String</code> | The access key ID for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesEndpoint">spacesEndpoint</a></code> | <code>java.lang.String</code> | The URL to use for the DigitalOcean Spaces API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesSecretKey">spacesSecretKey</a></code> | <code>java.lang.String</code> | The secret access key for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | The token key for API operations. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#alias DigitaloceanProvider#alias}

---

##### `apiEndpoint`<sup>Optional</sup> <a name="apiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.apiEndpoint"></a>

- *Type:* java.lang.String

The URL to use for the DigitalOcean API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#api_endpoint DigitaloceanProvider#api_endpoint}

---

##### `httpRetryMax`<sup>Optional</sup> <a name="httpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.httpRetryMax"></a>

- *Type:* java.lang.Number

The maximum number of retries on a failed API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#http_retry_max DigitaloceanProvider#http_retry_max}

---

##### `httpRetryWaitMax`<sup>Optional</sup> <a name="httpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.httpRetryWaitMax"></a>

- *Type:* java.lang.Number

The maximum wait time (in seconds) between failed API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#http_retry_wait_max DigitaloceanProvider#http_retry_wait_max}

---

##### `httpRetryWaitMin`<sup>Optional</sup> <a name="httpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.httpRetryWaitMin"></a>

- *Type:* java.lang.Number

The minimum wait time (in seconds) between failed API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#http_retry_wait_min DigitaloceanProvider#http_retry_wait_min}

---

##### `requestsPerSecond`<sup>Optional</sup> <a name="requestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.requestsPerSecond"></a>

- *Type:* java.lang.Number

The rate of requests per second to limit the HTTP client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#requests_per_second DigitaloceanProvider#requests_per_second}

---

##### `spacesAccessId`<sup>Optional</sup> <a name="spacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesAccessId"></a>

- *Type:* java.lang.String

The access key ID for Spaces API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#spaces_access_id DigitaloceanProvider#spaces_access_id}

---

##### `spacesEndpoint`<sup>Optional</sup> <a name="spacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesEndpoint"></a>

- *Type:* java.lang.String

The URL to use for the DigitalOcean Spaces API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#spaces_endpoint DigitaloceanProvider#spaces_endpoint}

---

##### `spacesSecretKey`<sup>Optional</sup> <a name="spacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesSecretKey"></a>

- *Type:* java.lang.String

The secret access key for Spaces API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#spaces_secret_key DigitaloceanProvider#spaces_secret_key}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

The token key for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#token DigitaloceanProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetApiEndpoint">resetApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryMax">resetHttpRetryMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMax">resetHttpRetryWaitMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMin">resetHttpRetryWaitMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetRequestsPerSecond">resetRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesAccessId">resetSpacesAccessId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesEndpoint">resetSpacesEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesSecretKey">resetSpacesSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetApiEndpoint` <a name="resetApiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetApiEndpoint"></a>

```java
public void resetApiEndpoint()
```

##### `resetHttpRetryMax` <a name="resetHttpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryMax"></a>

```java
public void resetHttpRetryMax()
```

##### `resetHttpRetryWaitMax` <a name="resetHttpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMax"></a>

```java
public void resetHttpRetryWaitMax()
```

##### `resetHttpRetryWaitMin` <a name="resetHttpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMin"></a>

```java
public void resetHttpRetryWaitMin()
```

##### `resetRequestsPerSecond` <a name="resetRequestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetRequestsPerSecond"></a>

```java
public void resetRequestsPerSecond()
```

##### `resetSpacesAccessId` <a name="resetSpacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesAccessId"></a>

```java
public void resetSpacesAccessId()
```

##### `resetSpacesEndpoint` <a name="resetSpacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesEndpoint"></a>

```java
public void resetSpacesEndpoint()
```

##### `resetSpacesSecretKey` <a name="resetSpacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesSecretKey"></a>

```java
public void resetSpacesSecretKey()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DigitaloceanProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.provider.DigitaloceanProvider;

DigitaloceanProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.provider.DigitaloceanProvider;

DigitaloceanProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.provider.DigitaloceanProvider;

DigitaloceanProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.provider.DigitaloceanProvider;

DigitaloceanProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DigitaloceanProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DigitaloceanProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DigitaloceanProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DigitaloceanProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DigitaloceanProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpointInput">apiEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMaxInput">httpRetryMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMaxInput">httpRetryWaitMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMinInput">httpRetryWaitMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecondInput">requestsPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessIdInput">spacesAccessIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpointInput">spacesEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKeyInput">spacesSecretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpoint">apiEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMax">httpRetryMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMax">httpRetryWaitMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMin">httpRetryWaitMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecond">requestsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessId">spacesAccessId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpoint">spacesEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKey">spacesSecretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `apiEndpointInput`<sup>Optional</sup> <a name="apiEndpointInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpointInput"></a>

```java
public java.lang.String getApiEndpointInput();
```

- *Type:* java.lang.String

---

##### `httpRetryMaxInput`<sup>Optional</sup> <a name="httpRetryMaxInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMaxInput"></a>

```java
public java.lang.Number getHttpRetryMaxInput();
```

- *Type:* java.lang.Number

---

##### `httpRetryWaitMaxInput`<sup>Optional</sup> <a name="httpRetryWaitMaxInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMaxInput"></a>

```java
public java.lang.Number getHttpRetryWaitMaxInput();
```

- *Type:* java.lang.Number

---

##### `httpRetryWaitMinInput`<sup>Optional</sup> <a name="httpRetryWaitMinInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMinInput"></a>

```java
public java.lang.Number getHttpRetryWaitMinInput();
```

- *Type:* java.lang.Number

---

##### `requestsPerSecondInput`<sup>Optional</sup> <a name="requestsPerSecondInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecondInput"></a>

```java
public java.lang.Number getRequestsPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `spacesAccessIdInput`<sup>Optional</sup> <a name="spacesAccessIdInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessIdInput"></a>

```java
public java.lang.String getSpacesAccessIdInput();
```

- *Type:* java.lang.String

---

##### `spacesEndpointInput`<sup>Optional</sup> <a name="spacesEndpointInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpointInput"></a>

```java
public java.lang.String getSpacesEndpointInput();
```

- *Type:* java.lang.String

---

##### `spacesSecretKeyInput`<sup>Optional</sup> <a name="spacesSecretKeyInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKeyInput"></a>

```java
public java.lang.String getSpacesSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `apiEndpoint`<sup>Optional</sup> <a name="apiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpoint"></a>

```java
public java.lang.String getApiEndpoint();
```

- *Type:* java.lang.String

---

##### `httpRetryMax`<sup>Optional</sup> <a name="httpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMax"></a>

```java
public java.lang.Number getHttpRetryMax();
```

- *Type:* java.lang.Number

---

##### `httpRetryWaitMax`<sup>Optional</sup> <a name="httpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMax"></a>

```java
public java.lang.Number getHttpRetryWaitMax();
```

- *Type:* java.lang.Number

---

##### `httpRetryWaitMin`<sup>Optional</sup> <a name="httpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMin"></a>

```java
public java.lang.Number getHttpRetryWaitMin();
```

- *Type:* java.lang.Number

---

##### `requestsPerSecond`<sup>Optional</sup> <a name="requestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecond"></a>

```java
public java.lang.Number getRequestsPerSecond();
```

- *Type:* java.lang.Number

---

##### `spacesAccessId`<sup>Optional</sup> <a name="spacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessId"></a>

```java
public java.lang.String getSpacesAccessId();
```

- *Type:* java.lang.String

---

##### `spacesEndpoint`<sup>Optional</sup> <a name="spacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpoint"></a>

```java
public java.lang.String getSpacesEndpoint();
```

- *Type:* java.lang.String

---

##### `spacesSecretKey`<sup>Optional</sup> <a name="spacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKey"></a>

```java
public java.lang.String getSpacesSecretKey();
```

- *Type:* java.lang.String

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DigitaloceanProviderConfig <a name="DigitaloceanProviderConfig" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.digitalocean.provider.DigitaloceanProviderConfig;

DigitaloceanProviderConfig.builder()
//  .alias(java.lang.String)
//  .apiEndpoint(java.lang.String)
//  .httpRetryMax(java.lang.Number)
//  .httpRetryWaitMax(java.lang.Number)
//  .httpRetryWaitMin(java.lang.Number)
//  .requestsPerSecond(java.lang.Number)
//  .spacesAccessId(java.lang.String)
//  .spacesEndpoint(java.lang.String)
//  .spacesSecretKey(java.lang.String)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.apiEndpoint">apiEndpoint</a></code> | <code>java.lang.String</code> | The URL to use for the DigitalOcean API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryMax">httpRetryMax</a></code> | <code>java.lang.Number</code> | The maximum number of retries on a failed API request. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMax">httpRetryWaitMax</a></code> | <code>java.lang.Number</code> | The maximum wait time (in seconds) between failed API requests. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMin">httpRetryWaitMin</a></code> | <code>java.lang.Number</code> | The minimum wait time (in seconds) between failed API requests. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.requestsPerSecond">requestsPerSecond</a></code> | <code>java.lang.Number</code> | The rate of requests per second to limit the HTTP client. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesAccessId">spacesAccessId</a></code> | <code>java.lang.String</code> | The access key ID for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesEndpoint">spacesEndpoint</a></code> | <code>java.lang.String</code> | The URL to use for the DigitalOcean Spaces API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesSecretKey">spacesSecretKey</a></code> | <code>java.lang.String</code> | The secret access key for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | The token key for API operations. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#alias DigitaloceanProvider#alias}

---

##### `apiEndpoint`<sup>Optional</sup> <a name="apiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.apiEndpoint"></a>

```java
public java.lang.String getApiEndpoint();
```

- *Type:* java.lang.String

The URL to use for the DigitalOcean API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#api_endpoint DigitaloceanProvider#api_endpoint}

---

##### `httpRetryMax`<sup>Optional</sup> <a name="httpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryMax"></a>

```java
public java.lang.Number getHttpRetryMax();
```

- *Type:* java.lang.Number

The maximum number of retries on a failed API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#http_retry_max DigitaloceanProvider#http_retry_max}

---

##### `httpRetryWaitMax`<sup>Optional</sup> <a name="httpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMax"></a>

```java
public java.lang.Number getHttpRetryWaitMax();
```

- *Type:* java.lang.Number

The maximum wait time (in seconds) between failed API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#http_retry_wait_max DigitaloceanProvider#http_retry_wait_max}

---

##### `httpRetryWaitMin`<sup>Optional</sup> <a name="httpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMin"></a>

```java
public java.lang.Number getHttpRetryWaitMin();
```

- *Type:* java.lang.Number

The minimum wait time (in seconds) between failed API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#http_retry_wait_min DigitaloceanProvider#http_retry_wait_min}

---

##### `requestsPerSecond`<sup>Optional</sup> <a name="requestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.requestsPerSecond"></a>

```java
public java.lang.Number getRequestsPerSecond();
```

- *Type:* java.lang.Number

The rate of requests per second to limit the HTTP client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#requests_per_second DigitaloceanProvider#requests_per_second}

---

##### `spacesAccessId`<sup>Optional</sup> <a name="spacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesAccessId"></a>

```java
public java.lang.String getSpacesAccessId();
```

- *Type:* java.lang.String

The access key ID for Spaces API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#spaces_access_id DigitaloceanProvider#spaces_access_id}

---

##### `spacesEndpoint`<sup>Optional</sup> <a name="spacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesEndpoint"></a>

```java
public java.lang.String getSpacesEndpoint();
```

- *Type:* java.lang.String

The URL to use for the DigitalOcean Spaces API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#spaces_endpoint DigitaloceanProvider#spaces_endpoint}

---

##### `spacesSecretKey`<sup>Optional</sup> <a name="spacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesSecretKey"></a>

```java
public java.lang.String getSpacesSecretKey();
```

- *Type:* java.lang.String

The secret access key for Spaces API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#spaces_secret_key DigitaloceanProvider#spaces_secret_key}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The token key for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.39.2/docs#token DigitaloceanProvider#token}

---



