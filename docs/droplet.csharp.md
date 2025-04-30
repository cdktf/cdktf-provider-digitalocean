# `droplet` Submodule <a name="`droplet` Submodule" id="@cdktf/provider-digitalocean.droplet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Droplet <a name="Droplet" id="@cdktf/provider-digitalocean.droplet.Droplet"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet digitalocean_droplet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.droplet.Droplet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new Droplet(Construct Scope, string Id, DropletConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig">DropletConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.droplet.Droplet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletConfig">DropletConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.putBackupPolicy">PutBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetBackupPolicy">ResetBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetBackups">ResetBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetDropletAgent">ResetDropletAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetGracefulShutdown">ResetGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetPrivateNetworking">ResetPrivateNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetResizeDisk">ResetResizeDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetVolumeIds">ResetVolumeIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.resetVpcUuid">ResetVpcUuid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.droplet.Droplet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.droplet.Droplet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.droplet.Droplet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.droplet.Droplet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.droplet.Droplet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.droplet.Droplet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.droplet.Droplet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.droplet.Droplet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.droplet.Droplet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.droplet.Droplet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.droplet.Droplet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.droplet.Droplet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.droplet.Droplet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.droplet.Droplet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.droplet.Droplet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.droplet.Droplet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.Droplet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.droplet.Droplet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.droplet.Droplet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.droplet.Droplet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.droplet.Droplet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.droplet.Droplet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.droplet.Droplet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.droplet.Droplet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupPolicy` <a name="PutBackupPolicy" id="@cdktf/provider-digitalocean.droplet.Droplet.putBackupPolicy"></a>

```csharp
private void PutBackupPolicy(DropletBackupPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.droplet.Droplet.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-digitalocean.droplet.Droplet.putTimeouts"></a>

```csharp
private void PutTimeouts(DropletTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.droplet.Droplet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts">DropletTimeouts</a>

---

##### `ResetBackupPolicy` <a name="ResetBackupPolicy" id="@cdktf/provider-digitalocean.droplet.Droplet.resetBackupPolicy"></a>

```csharp
private void ResetBackupPolicy()
```

##### `ResetBackups` <a name="ResetBackups" id="@cdktf/provider-digitalocean.droplet.Droplet.resetBackups"></a>

```csharp
private void ResetBackups()
```

##### `ResetDropletAgent` <a name="ResetDropletAgent" id="@cdktf/provider-digitalocean.droplet.Droplet.resetDropletAgent"></a>

```csharp
private void ResetDropletAgent()
```

##### `ResetGracefulShutdown` <a name="ResetGracefulShutdown" id="@cdktf/provider-digitalocean.droplet.Droplet.resetGracefulShutdown"></a>

```csharp
private void ResetGracefulShutdown()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.droplet.Droplet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-digitalocean.droplet.Droplet.resetIpv6"></a>

```csharp
private void ResetIpv6()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-digitalocean.droplet.Droplet.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-digitalocean.droplet.Droplet.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetPrivateNetworking` <a name="ResetPrivateNetworking" id="@cdktf/provider-digitalocean.droplet.Droplet.resetPrivateNetworking"></a>

```csharp
private void ResetPrivateNetworking()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-digitalocean.droplet.Droplet.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResizeDisk` <a name="ResetResizeDisk" id="@cdktf/provider-digitalocean.droplet.Droplet.resetResizeDisk"></a>

```csharp
private void ResetResizeDisk()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-digitalocean.droplet.Droplet.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.droplet.Droplet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-digitalocean.droplet.Droplet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-digitalocean.droplet.Droplet.resetUserData"></a>

```csharp
private void ResetUserData()
```

##### `ResetVolumeIds` <a name="ResetVolumeIds" id="@cdktf/provider-digitalocean.droplet.Droplet.resetVolumeIds"></a>

```csharp
private void ResetVolumeIds()
```

##### `ResetVpcUuid` <a name="ResetVpcUuid" id="@cdktf/provider-digitalocean.droplet.Droplet.resetVpcUuid"></a>

```csharp
private void ResetVpcUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Droplet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.droplet.Droplet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

Droplet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.droplet.Droplet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.droplet.Droplet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

Droplet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.droplet.Droplet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.droplet.Droplet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

Droplet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.droplet.Droplet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

Droplet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Droplet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Droplet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Droplet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.droplet.Droplet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Droplet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference">DropletBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.disk">Disk</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv4AddressPrivate">Ipv4AddressPrivate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.locked">Locked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.priceHourly">PriceHourly</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.priceMonthly">PriceMonthly</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference">DropletTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.urn">Urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.vcpus">Vcpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.backupPolicyInput">BackupPolicyInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.backupsInput">BackupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.dropletAgentInput">DropletAgentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.gracefulShutdownInput">GracefulShutdownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6Input">Ipv6Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.monitoringInput">MonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.privateNetworkingInput">PrivateNetworkingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.resizeDiskInput">ResizeDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.sizeInput">SizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.volumeIdsInput">VolumeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.vpcUuidInput">VpcUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.backups">Backups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.dropletAgent">DropletAgent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.gracefulShutdown">GracefulShutdown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6">Ipv6</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.monitoring">Monitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.privateNetworking">PrivateNetworking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.resizeDisk">ResizeDisk</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.volumeIds">VolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.vpcUuid">VpcUuid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.droplet.Droplet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.droplet.Droplet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.droplet.Droplet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.droplet.Droplet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.droplet.Droplet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.droplet.Droplet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.droplet.Droplet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.droplet.Droplet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.droplet.Droplet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.droplet.Droplet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.droplet.Droplet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.droplet.Droplet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.droplet.Droplet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.droplet.Droplet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="@cdktf/provider-digitalocean.droplet.Droplet.property.backupPolicy"></a>

```csharp
public DropletBackupPolicyOutputReference BackupPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference">DropletBackupPolicyOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.droplet.Droplet.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-digitalocean.droplet.Droplet.property.disk"></a>

```csharp
public double Disk { get; }
```

- *Type:* double

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; }
```

- *Type:* string

---

##### `Ipv4AddressPrivate`<sup>Required</sup> <a name="Ipv4AddressPrivate" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv4AddressPrivate"></a>

```csharp
public string Ipv4AddressPrivate { get; }
```

- *Type:* string

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-digitalocean.droplet.Droplet.property.locked"></a>

```csharp
public IResolvable Locked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-digitalocean.droplet.Droplet.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `PriceHourly`<sup>Required</sup> <a name="PriceHourly" id="@cdktf/provider-digitalocean.droplet.Droplet.property.priceHourly"></a>

```csharp
public double PriceHourly { get; }
```

- *Type:* double

---

##### `PriceMonthly`<sup>Required</sup> <a name="PriceMonthly" id="@cdktf/provider-digitalocean.droplet.Droplet.property.priceMonthly"></a>

```csharp
public double PriceMonthly { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.droplet.Droplet.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-digitalocean.droplet.Droplet.property.timeouts"></a>

```csharp
public DropletTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference">DropletTimeoutsOutputReference</a>

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-digitalocean.droplet.Droplet.property.urn"></a>

```csharp
public string Urn { get; }
```

- *Type:* string

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-digitalocean.droplet.Droplet.property.vcpus"></a>

```csharp
public double Vcpus { get; }
```

- *Type:* double

---

##### `BackupPolicyInput`<sup>Optional</sup> <a name="BackupPolicyInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.backupPolicyInput"></a>

```csharp
public DropletBackupPolicy BackupPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a>

---

##### `BackupsInput`<sup>Optional</sup> <a name="BackupsInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.backupsInput"></a>

```csharp
public object BackupsInput { get; }
```

- *Type:* object

---

##### `DropletAgentInput`<sup>Optional</sup> <a name="DropletAgentInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.dropletAgentInput"></a>

```csharp
public object DropletAgentInput { get; }
```

- *Type:* object

---

##### `GracefulShutdownInput`<sup>Optional</sup> <a name="GracefulShutdownInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.gracefulShutdownInput"></a>

```csharp
public object GracefulShutdownInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6Input"></a>

```csharp
public object Ipv6Input { get; }
```

- *Type:* object

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.monitoringInput"></a>

```csharp
public object MonitoringInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateNetworkingInput`<sup>Optional</sup> <a name="PrivateNetworkingInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.privateNetworkingInput"></a>

```csharp
public object PrivateNetworkingInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResizeDiskInput`<sup>Optional</sup> <a name="ResizeDiskInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.resizeDiskInput"></a>

```csharp
public object ResizeDiskInput { get; }
```

- *Type:* object

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.sizeInput"></a>

```csharp
public string SizeInput { get; }
```

- *Type:* string

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `VolumeIdsInput`<sup>Optional</sup> <a name="VolumeIdsInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.volumeIdsInput"></a>

```csharp
public string[] VolumeIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcUuidInput`<sup>Optional</sup> <a name="VpcUuidInput" id="@cdktf/provider-digitalocean.droplet.Droplet.property.vpcUuidInput"></a>

```csharp
public string VpcUuidInput { get; }
```

- *Type:* string

---

##### `Backups`<sup>Required</sup> <a name="Backups" id="@cdktf/provider-digitalocean.droplet.Droplet.property.backups"></a>

```csharp
public object Backups { get; }
```

- *Type:* object

---

##### `DropletAgent`<sup>Required</sup> <a name="DropletAgent" id="@cdktf/provider-digitalocean.droplet.Droplet.property.dropletAgent"></a>

```csharp
public object DropletAgent { get; }
```

- *Type:* object

---

##### `GracefulShutdown`<sup>Required</sup> <a name="GracefulShutdown" id="@cdktf/provider-digitalocean.droplet.Droplet.property.gracefulShutdown"></a>

```csharp
public object GracefulShutdown { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.droplet.Droplet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-digitalocean.droplet.Droplet.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6"></a>

```csharp
public object Ipv6 { get; }
```

- *Type:* object

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-digitalocean.droplet.Droplet.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-digitalocean.droplet.Droplet.property.monitoring"></a>

```csharp
public object Monitoring { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.droplet.Droplet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateNetworking`<sup>Required</sup> <a name="PrivateNetworking" id="@cdktf/provider-digitalocean.droplet.Droplet.property.privateNetworking"></a>

```csharp
public object PrivateNetworking { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.droplet.Droplet.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResizeDisk`<sup>Required</sup> <a name="ResizeDisk" id="@cdktf/provider-digitalocean.droplet.Droplet.property.resizeDisk"></a>

```csharp
public object ResizeDisk { get; }
```

- *Type:* object

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.droplet.Droplet.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-digitalocean.droplet.Droplet.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.droplet.Droplet.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-digitalocean.droplet.Droplet.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `VolumeIds`<sup>Required</sup> <a name="VolumeIds" id="@cdktf/provider-digitalocean.droplet.Droplet.property.volumeIds"></a>

```csharp
public string[] VolumeIds { get; }
```

- *Type:* string[]

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.droplet.Droplet.property.vpcUuid"></a>

```csharp
public string VpcUuid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.Droplet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.droplet.Droplet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DropletBackupPolicy <a name="DropletBackupPolicy" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DropletBackupPolicy {
    double Hour = null,
    string Plan = null,
    string Weekday = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.hour">Hour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#hour Droplet#hour}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.plan">Plan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#plan Droplet#plan}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.weekday">Weekday</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#weekday Droplet#weekday}. |

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.hour"></a>

```csharp
public double Hour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#hour Droplet#hour}.

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#plan Droplet#plan}.

---

##### `Weekday`<sup>Optional</sup> <a name="Weekday" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicy.property.weekday"></a>

```csharp
public string Weekday { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#weekday Droplet#weekday}.

---

### DropletConfig <a name="DropletConfig" id="@cdktf/provider-digitalocean.droplet.DropletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.droplet.DropletConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DropletConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Image,
    string Name,
    string Size,
    DropletBackupPolicy BackupPolicy = null,
    object Backups = null,
    object DropletAgent = null,
    object GracefulShutdown = null,
    string Id = null,
    object Ipv6 = null,
    string Ipv6Address = null,
    object Monitoring = null,
    object PrivateNetworking = null,
    string Region = null,
    object ResizeDisk = null,
    string[] SshKeys = null,
    string[] Tags = null,
    DropletTimeouts Timeouts = null,
    string UserData = null,
    string[] VolumeIds = null,
    string VpcUuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#image Droplet#image}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#name Droplet#name}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.size">Size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#size Droplet#size}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.backups">Backups</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#backups Droplet#backups}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.dropletAgent">DropletAgent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#droplet_agent Droplet#droplet_agent}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.gracefulShutdown">GracefulShutdown</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#graceful_shutdown Droplet#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#id Droplet#id}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.ipv6">Ipv6</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#ipv6 Droplet#ipv6}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#ipv6_address Droplet#ipv6_address}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.monitoring">Monitoring</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#monitoring Droplet#monitoring}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.privateNetworking">PrivateNetworking</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#private_networking Droplet#private_networking}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#region Droplet#region}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.resizeDisk">ResizeDisk</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#resize_disk Droplet#resize_disk}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#ssh_keys Droplet#ssh_keys}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#tags Droplet#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts">DropletTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#user_data Droplet#user_data}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.volumeIds">VolumeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#volume_ids Droplet#volume_ids}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletConfig.property.vpcUuid">VpcUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#vpc_uuid Droplet#vpc_uuid}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#image Droplet#image}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#name Droplet#name}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.size"></a>

```csharp
public string Size { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#size Droplet#size}.

---

##### `BackupPolicy`<sup>Optional</sup> <a name="BackupPolicy" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.backupPolicy"></a>

```csharp
public DropletBackupPolicy BackupPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#backup_policy Droplet#backup_policy}

---

##### `Backups`<sup>Optional</sup> <a name="Backups" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.backups"></a>

```csharp
public object Backups { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#backups Droplet#backups}.

---

##### `DropletAgent`<sup>Optional</sup> <a name="DropletAgent" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.dropletAgent"></a>

```csharp
public object DropletAgent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#droplet_agent Droplet#droplet_agent}.

---

##### `GracefulShutdown`<sup>Optional</sup> <a name="GracefulShutdown" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.gracefulShutdown"></a>

```csharp
public object GracefulShutdown { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#graceful_shutdown Droplet#graceful_shutdown}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#id Droplet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.ipv6"></a>

```csharp
public object Ipv6 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#ipv6 Droplet#ipv6}.

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#ipv6_address Droplet#ipv6_address}.

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.monitoring"></a>

```csharp
public object Monitoring { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#monitoring Droplet#monitoring}.

---

##### `PrivateNetworking`<sup>Optional</sup> <a name="PrivateNetworking" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.privateNetworking"></a>

```csharp
public object PrivateNetworking { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#private_networking Droplet#private_networking}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#region Droplet#region}.

---

##### `ResizeDisk`<sup>Optional</sup> <a name="ResizeDisk" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.resizeDisk"></a>

```csharp
public object ResizeDisk { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#resize_disk Droplet#resize_disk}.

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#ssh_keys Droplet#ssh_keys}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#tags Droplet#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.timeouts"></a>

```csharp
public DropletTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts">DropletTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#timeouts Droplet#timeouts}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#user_data Droplet#user_data}.

---

##### `VolumeIds`<sup>Optional</sup> <a name="VolumeIds" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.volumeIds"></a>

```csharp
public string[] VolumeIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#volume_ids Droplet#volume_ids}.

---

##### `VpcUuid`<sup>Optional</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.droplet.DropletConfig.property.vpcUuid"></a>

```csharp
public string VpcUuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#vpc_uuid Droplet#vpc_uuid}.

---

### DropletTimeouts <a name="DropletTimeouts" id="@cdktf/provider-digitalocean.droplet.DropletTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.droplet.DropletTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DropletTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#create Droplet#create}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#delete Droplet#delete}. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#update Droplet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#create Droplet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#delete Droplet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-digitalocean.droplet.DropletTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.52.0/docs/resources/droplet#update Droplet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DropletBackupPolicyOutputReference <a name="DropletBackupPolicyOutputReference" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DropletBackupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetWeekday">ResetWeekday</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetHour"></a>

```csharp
private void ResetHour()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetPlan"></a>

```csharp
private void ResetPlan()
```

##### `ResetWeekday` <a name="ResetWeekday" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.resetWeekday"></a>

```csharp
private void ResetWeekday()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.hourInput">HourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.weekdayInput">WeekdayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.weekday">Weekday</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.hourInput"></a>

```csharp
public double HourInput { get; }
```

- *Type:* double

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `WeekdayInput`<sup>Optional</sup> <a name="WeekdayInput" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.weekdayInput"></a>

```csharp
public string WeekdayInput { get; }
```

- *Type:* string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `Weekday`<sup>Required</sup> <a name="Weekday" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.weekday"></a>

```csharp
public string Weekday { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.droplet.DropletBackupPolicyOutputReference.property.internalValue"></a>

```csharp
public DropletBackupPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.droplet.DropletBackupPolicy">DropletBackupPolicy</a>

---


### DropletTimeoutsOutputReference <a name="DropletTimeoutsOutputReference" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new DropletTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.droplet.DropletTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



