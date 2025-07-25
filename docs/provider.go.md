# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-digitalocean.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitaloceanProvider <a name="DigitaloceanProvider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs digitalocean}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/provider"

provider.NewDigitaloceanProvider(scope Construct, id *string, config DigitaloceanProviderConfig) DigitaloceanProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig">DigitaloceanProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig">DigitaloceanProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetApiEndpoint">ResetApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryMax">ResetHttpRetryMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMax">ResetHttpRetryWaitMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMin">ResetHttpRetryWaitMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetRequestsPerSecond">ResetRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesAccessId">ResetSpacesAccessId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesEndpoint">ResetSpacesEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesSecretKey">ResetSpacesSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetApiEndpoint` <a name="ResetApiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetApiEndpoint"></a>

```go
func ResetApiEndpoint()
```

##### `ResetHttpRetryMax` <a name="ResetHttpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryMax"></a>

```go
func ResetHttpRetryMax()
```

##### `ResetHttpRetryWaitMax` <a name="ResetHttpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMax"></a>

```go
func ResetHttpRetryWaitMax()
```

##### `ResetHttpRetryWaitMin` <a name="ResetHttpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMin"></a>

```go
func ResetHttpRetryWaitMin()
```

##### `ResetRequestsPerSecond` <a name="ResetRequestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetRequestsPerSecond"></a>

```go
func ResetRequestsPerSecond()
```

##### `ResetSpacesAccessId` <a name="ResetSpacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesAccessId"></a>

```go
func ResetSpacesAccessId()
```

##### `ResetSpacesEndpoint` <a name="ResetSpacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesEndpoint"></a>

```go
func ResetSpacesEndpoint()
```

##### `ResetSpacesSecretKey` <a name="ResetSpacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesSecretKey"></a>

```go
func ResetSpacesSecretKey()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetToken"></a>

```go
func ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DigitaloceanProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/provider"

provider.DigitaloceanProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/provider"

provider.DigitaloceanProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/provider"

provider.DigitaloceanProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/provider"

provider.DigitaloceanProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DigitaloceanProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DigitaloceanProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DigitaloceanProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DigitaloceanProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpointInput">ApiEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMaxInput">HttpRetryMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMaxInput">HttpRetryWaitMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMinInput">HttpRetryWaitMinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecondInput">RequestsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessIdInput">SpacesAccessIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpointInput">SpacesEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKeyInput">SpacesSecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpoint">ApiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMax">HttpRetryMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMax">HttpRetryWaitMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMin">HttpRetryWaitMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessId">SpacesAccessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpoint">SpacesEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKey">SpacesSecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ApiEndpointInput`<sup>Optional</sup> <a name="ApiEndpointInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpointInput"></a>

```go
func ApiEndpointInput() *string
```

- *Type:* *string

---

##### `HttpRetryMaxInput`<sup>Optional</sup> <a name="HttpRetryMaxInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMaxInput"></a>

```go
func HttpRetryMaxInput() *f64
```

- *Type:* *f64

---

##### `HttpRetryWaitMaxInput`<sup>Optional</sup> <a name="HttpRetryWaitMaxInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMaxInput"></a>

```go
func HttpRetryWaitMaxInput() *f64
```

- *Type:* *f64

---

##### `HttpRetryWaitMinInput`<sup>Optional</sup> <a name="HttpRetryWaitMinInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMinInput"></a>

```go
func HttpRetryWaitMinInput() *f64
```

- *Type:* *f64

---

##### `RequestsPerSecondInput`<sup>Optional</sup> <a name="RequestsPerSecondInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecondInput"></a>

```go
func RequestsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `SpacesAccessIdInput`<sup>Optional</sup> <a name="SpacesAccessIdInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessIdInput"></a>

```go
func SpacesAccessIdInput() *string
```

- *Type:* *string

---

##### `SpacesEndpointInput`<sup>Optional</sup> <a name="SpacesEndpointInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpointInput"></a>

```go
func SpacesEndpointInput() *string
```

- *Type:* *string

---

##### `SpacesSecretKeyInput`<sup>Optional</sup> <a name="SpacesSecretKeyInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKeyInput"></a>

```go
func SpacesSecretKeyInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `ApiEndpoint`<sup>Optional</sup> <a name="ApiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpoint"></a>

```go
func ApiEndpoint() *string
```

- *Type:* *string

---

##### `HttpRetryMax`<sup>Optional</sup> <a name="HttpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMax"></a>

```go
func HttpRetryMax() *f64
```

- *Type:* *f64

---

##### `HttpRetryWaitMax`<sup>Optional</sup> <a name="HttpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMax"></a>

```go
func HttpRetryWaitMax() *f64
```

- *Type:* *f64

---

##### `HttpRetryWaitMin`<sup>Optional</sup> <a name="HttpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMin"></a>

```go
func HttpRetryWaitMin() *f64
```

- *Type:* *f64

---

##### `RequestsPerSecond`<sup>Optional</sup> <a name="RequestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecond"></a>

```go
func RequestsPerSecond() *f64
```

- *Type:* *f64

---

##### `SpacesAccessId`<sup>Optional</sup> <a name="SpacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessId"></a>

```go
func SpacesAccessId() *string
```

- *Type:* *string

---

##### `SpacesEndpoint`<sup>Optional</sup> <a name="SpacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpoint"></a>

```go
func SpacesEndpoint() *string
```

- *Type:* *string

---

##### `SpacesSecretKey`<sup>Optional</sup> <a name="SpacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKey"></a>

```go
func SpacesSecretKey() *string
```

- *Type:* *string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DigitaloceanProviderConfig <a name="DigitaloceanProviderConfig" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/provider"

&provider.DigitaloceanProviderConfig {
	Alias: *string,
	ApiEndpoint: *string,
	HttpRetryMax: *f64,
	HttpRetryWaitMax: *f64,
	HttpRetryWaitMin: *f64,
	RequestsPerSecond: *f64,
	SpacesAccessId: *string,
	SpacesEndpoint: *string,
	SpacesSecretKey: *string,
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.apiEndpoint">ApiEndpoint</a></code> | <code>*string</code> | The URL to use for the DigitalOcean API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryMax">HttpRetryMax</a></code> | <code>*f64</code> | The maximum number of retries on a failed API request. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMax">HttpRetryWaitMax</a></code> | <code>*f64</code> | The maximum wait time (in seconds) between failed API requests. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMin">HttpRetryWaitMin</a></code> | <code>*f64</code> | The minimum wait time (in seconds) between failed API requests. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>*f64</code> | The rate of requests per second to limit the HTTP client. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesAccessId">SpacesAccessId</a></code> | <code>*string</code> | The access key ID for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesEndpoint">SpacesEndpoint</a></code> | <code>*string</code> | The URL to use for the DigitalOcean Spaces API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesSecretKey">SpacesSecretKey</a></code> | <code>*string</code> | The secret access key for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.token">Token</a></code> | <code>*string</code> | The token key for API operations. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs#alias DigitaloceanProvider#alias}

---

##### `ApiEndpoint`<sup>Optional</sup> <a name="ApiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.apiEndpoint"></a>

```go
ApiEndpoint *string
```

- *Type:* *string

The URL to use for the DigitalOcean API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs#api_endpoint DigitaloceanProvider#api_endpoint}

---

##### `HttpRetryMax`<sup>Optional</sup> <a name="HttpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryMax"></a>

```go
HttpRetryMax *f64
```

- *Type:* *f64

The maximum number of retries on a failed API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs#http_retry_max DigitaloceanProvider#http_retry_max}

---

##### `HttpRetryWaitMax`<sup>Optional</sup> <a name="HttpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMax"></a>

```go
HttpRetryWaitMax *f64
```

- *Type:* *f64

The maximum wait time (in seconds) between failed API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs#http_retry_wait_max DigitaloceanProvider#http_retry_wait_max}

---

##### `HttpRetryWaitMin`<sup>Optional</sup> <a name="HttpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMin"></a>

```go
HttpRetryWaitMin *f64
```

- *Type:* *f64

The minimum wait time (in seconds) between failed API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs#http_retry_wait_min DigitaloceanProvider#http_retry_wait_min}

---

##### `RequestsPerSecond`<sup>Optional</sup> <a name="RequestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.requestsPerSecond"></a>

```go
RequestsPerSecond *f64
```

- *Type:* *f64

The rate of requests per second to limit the HTTP client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs#requests_per_second DigitaloceanProvider#requests_per_second}

---

##### `SpacesAccessId`<sup>Optional</sup> <a name="SpacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesAccessId"></a>

```go
SpacesAccessId *string
```

- *Type:* *string

The access key ID for Spaces API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs#spaces_access_id DigitaloceanProvider#spaces_access_id}

---

##### `SpacesEndpoint`<sup>Optional</sup> <a name="SpacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesEndpoint"></a>

```go
SpacesEndpoint *string
```

- *Type:* *string

The URL to use for the DigitalOcean Spaces API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs#spaces_endpoint DigitaloceanProvider#spaces_endpoint}

---

##### `SpacesSecretKey`<sup>Optional</sup> <a name="SpacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesSecretKey"></a>

```go
SpacesSecretKey *string
```

- *Type:* *string

The secret access key for Spaces API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs#spaces_secret_key DigitaloceanProvider#spaces_secret_key}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

The token key for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs#token DigitaloceanProvider#token}

---



