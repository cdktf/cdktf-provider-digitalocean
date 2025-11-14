# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-digitalocean.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitaloceanProvider <a name="DigitaloceanProvider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs digitalocean}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DigitaloceanProvider(Construct Scope, string Id, DigitaloceanProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig">DigitaloceanProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetApiEndpoint` <a name="ResetApiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetApiEndpoint"></a>

```csharp
private void ResetApiEndpoint()
```

##### `ResetHttpRetryMax` <a name="ResetHttpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryMax"></a>

```csharp
private void ResetHttpRetryMax()
```

##### `ResetHttpRetryWaitMax` <a name="ResetHttpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMax"></a>

```csharp
private void ResetHttpRetryWaitMax()
```

##### `ResetHttpRetryWaitMin` <a name="ResetHttpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetHttpRetryWaitMin"></a>

```csharp
private void ResetHttpRetryWaitMin()
```

##### `ResetRequestsPerSecond` <a name="ResetRequestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetRequestsPerSecond"></a>

```csharp
private void ResetRequestsPerSecond()
```

##### `ResetSpacesAccessId` <a name="ResetSpacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesAccessId"></a>

```csharp
private void ResetSpacesAccessId()
```

##### `ResetSpacesEndpoint` <a name="ResetSpacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesEndpoint"></a>

```csharp
private void ResetSpacesEndpoint()
```

##### `ResetSpacesSecretKey` <a name="ResetSpacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesSecretKey"></a>

```csharp
private void ResetSpacesSecretKey()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetToken"></a>

```csharp
private void ResetToken()
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

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DigitaloceanProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DigitaloceanProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DigitaloceanProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

DigitaloceanProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DigitaloceanProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DigitaloceanProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DigitaloceanProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DigitaloceanProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpointInput">ApiEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMaxInput">HttpRetryMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMaxInput">HttpRetryWaitMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMinInput">HttpRetryWaitMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecondInput">RequestsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessIdInput">SpacesAccessIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpointInput">SpacesEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKeyInput">SpacesSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpoint">ApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMax">HttpRetryMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMax">HttpRetryWaitMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMin">HttpRetryWaitMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessId">SpacesAccessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpoint">SpacesEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKey">SpacesSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ApiEndpointInput`<sup>Optional</sup> <a name="ApiEndpointInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpointInput"></a>

```csharp
public string ApiEndpointInput { get; }
```

- *Type:* string

---

##### `HttpRetryMaxInput`<sup>Optional</sup> <a name="HttpRetryMaxInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMaxInput"></a>

```csharp
public double HttpRetryMaxInput { get; }
```

- *Type:* double

---

##### `HttpRetryWaitMaxInput`<sup>Optional</sup> <a name="HttpRetryWaitMaxInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMaxInput"></a>

```csharp
public double HttpRetryWaitMaxInput { get; }
```

- *Type:* double

---

##### `HttpRetryWaitMinInput`<sup>Optional</sup> <a name="HttpRetryWaitMinInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMinInput"></a>

```csharp
public double HttpRetryWaitMinInput { get; }
```

- *Type:* double

---

##### `RequestsPerSecondInput`<sup>Optional</sup> <a name="RequestsPerSecondInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecondInput"></a>

```csharp
public double RequestsPerSecondInput { get; }
```

- *Type:* double

---

##### `SpacesAccessIdInput`<sup>Optional</sup> <a name="SpacesAccessIdInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessIdInput"></a>

```csharp
public string SpacesAccessIdInput { get; }
```

- *Type:* string

---

##### `SpacesEndpointInput`<sup>Optional</sup> <a name="SpacesEndpointInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpointInput"></a>

```csharp
public string SpacesEndpointInput { get; }
```

- *Type:* string

---

##### `SpacesSecretKeyInput`<sup>Optional</sup> <a name="SpacesSecretKeyInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKeyInput"></a>

```csharp
public string SpacesSecretKeyInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `ApiEndpoint`<sup>Optional</sup> <a name="ApiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpoint"></a>

```csharp
public string ApiEndpoint { get; }
```

- *Type:* string

---

##### `HttpRetryMax`<sup>Optional</sup> <a name="HttpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryMax"></a>

```csharp
public double HttpRetryMax { get; }
```

- *Type:* double

---

##### `HttpRetryWaitMax`<sup>Optional</sup> <a name="HttpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMax"></a>

```csharp
public double HttpRetryWaitMax { get; }
```

- *Type:* double

---

##### `HttpRetryWaitMin`<sup>Optional</sup> <a name="HttpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.httpRetryWaitMin"></a>

```csharp
public double HttpRetryWaitMin { get; }
```

- *Type:* double

---

##### `RequestsPerSecond`<sup>Optional</sup> <a name="RequestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.requestsPerSecond"></a>

```csharp
public double RequestsPerSecond { get; }
```

- *Type:* double

---

##### `SpacesAccessId`<sup>Optional</sup> <a name="SpacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessId"></a>

```csharp
public string SpacesAccessId { get; }
```

- *Type:* string

---

##### `SpacesEndpoint`<sup>Optional</sup> <a name="SpacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpoint"></a>

```csharp
public string SpacesEndpoint { get; }
```

- *Type:* string

---

##### `SpacesSecretKey`<sup>Optional</sup> <a name="SpacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKey"></a>

```csharp
public string SpacesSecretKey { get; }
```

- *Type:* string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DigitaloceanProviderConfig <a name="DigitaloceanProviderConfig" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DigitaloceanProviderConfig {
    string Alias = null,
    string ApiEndpoint = null,
    double HttpRetryMax = null,
    double HttpRetryWaitMax = null,
    double HttpRetryWaitMin = null,
    double RequestsPerSecond = null,
    string SpacesAccessId = null,
    string SpacesEndpoint = null,
    string SpacesSecretKey = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.apiEndpoint">ApiEndpoint</a></code> | <code>string</code> | The URL to use for the DigitalOcean API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryMax">HttpRetryMax</a></code> | <code>double</code> | The maximum number of retries on a failed API request. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMax">HttpRetryWaitMax</a></code> | <code>double</code> | The maximum wait time (in seconds) between failed API requests. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMin">HttpRetryWaitMin</a></code> | <code>double</code> | The minimum wait time (in seconds) between failed API requests. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>double</code> | The rate of requests per second to limit the HTTP client. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesAccessId">SpacesAccessId</a></code> | <code>string</code> | The access key ID for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesEndpoint">SpacesEndpoint</a></code> | <code>string</code> | The URL to use for the DigitalOcean Spaces API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesSecretKey">SpacesSecretKey</a></code> | <code>string</code> | The secret access key for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.token">Token</a></code> | <code>string</code> | The token key for API operations. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs#alias DigitaloceanProvider#alias}

---

##### `ApiEndpoint`<sup>Optional</sup> <a name="ApiEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.apiEndpoint"></a>

```csharp
public string ApiEndpoint { get; set; }
```

- *Type:* string

The URL to use for the DigitalOcean API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs#api_endpoint DigitaloceanProvider#api_endpoint}

---

##### `HttpRetryMax`<sup>Optional</sup> <a name="HttpRetryMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryMax"></a>

```csharp
public double HttpRetryMax { get; set; }
```

- *Type:* double

The maximum number of retries on a failed API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs#http_retry_max DigitaloceanProvider#http_retry_max}

---

##### `HttpRetryWaitMax`<sup>Optional</sup> <a name="HttpRetryWaitMax" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMax"></a>

```csharp
public double HttpRetryWaitMax { get; set; }
```

- *Type:* double

The maximum wait time (in seconds) between failed API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs#http_retry_wait_max DigitaloceanProvider#http_retry_wait_max}

---

##### `HttpRetryWaitMin`<sup>Optional</sup> <a name="HttpRetryWaitMin" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.httpRetryWaitMin"></a>

```csharp
public double HttpRetryWaitMin { get; set; }
```

- *Type:* double

The minimum wait time (in seconds) between failed API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs#http_retry_wait_min DigitaloceanProvider#http_retry_wait_min}

---

##### `RequestsPerSecond`<sup>Optional</sup> <a name="RequestsPerSecond" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.requestsPerSecond"></a>

```csharp
public double RequestsPerSecond { get; set; }
```

- *Type:* double

The rate of requests per second to limit the HTTP client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs#requests_per_second DigitaloceanProvider#requests_per_second}

---

##### `SpacesAccessId`<sup>Optional</sup> <a name="SpacesAccessId" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesAccessId"></a>

```csharp
public string SpacesAccessId { get; set; }
```

- *Type:* string

The access key ID for Spaces API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs#spaces_access_id DigitaloceanProvider#spaces_access_id}

---

##### `SpacesEndpoint`<sup>Optional</sup> <a name="SpacesEndpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesEndpoint"></a>

```csharp
public string SpacesEndpoint { get; set; }
```

- *Type:* string

The URL to use for the DigitalOcean Spaces API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs#spaces_endpoint DigitaloceanProvider#spaces_endpoint}

---

##### `SpacesSecretKey`<sup>Optional</sup> <a name="SpacesSecretKey" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesSecretKey"></a>

```csharp
public string SpacesSecretKey { get; set; }
```

- *Type:* string

The secret access key for Spaces API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs#spaces_secret_key DigitaloceanProvider#spaces_secret_key}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The token key for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs#token DigitaloceanProvider#token}

---



