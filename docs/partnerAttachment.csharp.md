# `partnerAttachment` Submodule <a name="`partnerAttachment` Submodule" id="@cdktf/provider-digitalocean.partnerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PartnerAttachment <a name="PartnerAttachment" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment digitalocean_partner_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new PartnerAttachment(Construct Scope, string Id, PartnerAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig">PartnerAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig">PartnerAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp">PutBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetBgp">ResetBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetParentUuid">ResetParentUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetRedundancyZone">ResetRedundancyZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgp` <a name="PutBgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp"></a>

```csharp
private void PutBgp(PartnerAttachmentBgp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(PartnerAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

---

##### `ResetBgp` <a name="ResetBgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetBgp"></a>

```csharp
private void ResetBgp()
```

##### `ResetParentUuid` <a name="ResetParentUuid" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetParentUuid"></a>

```csharp
private void ResetParentUuid()
```

##### `ResetRedundancyZone` <a name="ResetRedundancyZone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetRedundancyZone"></a>

```csharp
private void ResetRedundancyZone()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PartnerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

PartnerAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

PartnerAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

PartnerAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

PartnerAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PartnerAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PartnerAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PartnerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PartnerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgp">Bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference">PartnerAttachmentBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.children">Children</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference">PartnerAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgpInput">BgpInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbpsInput">ConnectionBandwidthInMbpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProviderInput">NaasProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuidInput">ParentUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZoneInput">RedundancyZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIdsInput">VpcIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbps">ConnectionBandwidthInMbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProvider">NaasProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuid">ParentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZone">RedundancyZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIds">VpcIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Bgp`<sup>Required</sup> <a name="Bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgp"></a>

```csharp
public PartnerAttachmentBgpOutputReference Bgp { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference">PartnerAttachmentBgpOutputReference</a>

---

##### `Children`<sup>Required</sup> <a name="Children" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.children"></a>

```csharp
public string[] Children { get; }
```

- *Type:* string[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeouts"></a>

```csharp
public PartnerAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference">PartnerAttachmentTimeoutsOutputReference</a>

---

##### `BgpInput`<sup>Optional</sup> <a name="BgpInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.bgpInput"></a>

```csharp
public PartnerAttachmentBgp BgpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

---

##### `ConnectionBandwidthInMbpsInput`<sup>Optional</sup> <a name="ConnectionBandwidthInMbpsInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbpsInput"></a>

```csharp
public double ConnectionBandwidthInMbpsInput { get; }
```

- *Type:* double

---

##### `NaasProviderInput`<sup>Optional</sup> <a name="NaasProviderInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProviderInput"></a>

```csharp
public string NaasProviderInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentUuidInput`<sup>Optional</sup> <a name="ParentUuidInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuidInput"></a>

```csharp
public string ParentUuidInput { get; }
```

- *Type:* string

---

##### `RedundancyZoneInput`<sup>Optional</sup> <a name="RedundancyZoneInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZoneInput"></a>

```csharp
public string RedundancyZoneInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.timeoutsInput"></a>

```csharp
public IResolvable|PartnerAttachmentTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

---

##### `VpcIdsInput`<sup>Optional</sup> <a name="VpcIdsInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIdsInput"></a>

```csharp
public string[] VpcIdsInput { get; }
```

- *Type:* string[]

---

##### `ConnectionBandwidthInMbps`<sup>Required</sup> <a name="ConnectionBandwidthInMbps" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.connectionBandwidthInMbps"></a>

```csharp
public double ConnectionBandwidthInMbps { get; }
```

- *Type:* double

---

##### `NaasProvider`<sup>Required</sup> <a name="NaasProvider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.naasProvider"></a>

```csharp
public string NaasProvider { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentUuid`<sup>Required</sup> <a name="ParentUuid" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.parentUuid"></a>

```csharp
public string ParentUuid { get; }
```

- *Type:* string

---

##### `RedundancyZone`<sup>Required</sup> <a name="RedundancyZone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.redundancyZone"></a>

```csharp
public string RedundancyZone { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `VpcIds`<sup>Required</sup> <a name="VpcIds" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.vpcIds"></a>

```csharp
public string[] VpcIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PartnerAttachmentBgp <a name="PartnerAttachmentBgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new PartnerAttachmentBgp {
    string AuthKey = null,
    string LocalRouterIp = null,
    double PeerRouterAsn = null,
    string PeerRouterIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.authKey">AuthKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#auth_key PartnerAttachment#auth_key}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.localRouterIp">LocalRouterIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#local_router_ip PartnerAttachment#local_router_ip}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterAsn">PeerRouterAsn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#peer_router_asn PartnerAttachment#peer_router_asn}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterIp">PeerRouterIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#peer_router_ip PartnerAttachment#peer_router_ip}. |

---

##### `AuthKey`<sup>Optional</sup> <a name="AuthKey" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.authKey"></a>

```csharp
public string AuthKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#auth_key PartnerAttachment#auth_key}.

---

##### `LocalRouterIp`<sup>Optional</sup> <a name="LocalRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.localRouterIp"></a>

```csharp
public string LocalRouterIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#local_router_ip PartnerAttachment#local_router_ip}.

---

##### `PeerRouterAsn`<sup>Optional</sup> <a name="PeerRouterAsn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterAsn"></a>

```csharp
public double PeerRouterAsn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#peer_router_asn PartnerAttachment#peer_router_asn}.

---

##### `PeerRouterIp`<sup>Optional</sup> <a name="PeerRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp.property.peerRouterIp"></a>

```csharp
public string PeerRouterIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#peer_router_ip PartnerAttachment#peer_router_ip}.

---

### PartnerAttachmentConfig <a name="PartnerAttachmentConfig" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new PartnerAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double ConnectionBandwidthInMbps,
    string NaasProvider,
    string Name,
    string Region,
    string[] VpcIds,
    PartnerAttachmentBgp Bgp = null,
    string ParentUuid = null,
    string RedundancyZone = null,
    PartnerAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connectionBandwidthInMbps">ConnectionBandwidthInMbps</a></code> | <code>double</code> | The connection bandwidth in Mbps. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.naasProvider">NaasProvider</a></code> | <code>string</code> | The NaaS provider. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.name">Name</a></code> | <code>string</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.region">Region</a></code> | <code>string</code> | The region where the Partner Attachment will be created. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.vpcIds">VpcIds</a></code> | <code>string[]</code> | The list of VPC IDs to attach the Partner Attachment to. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.bgp">Bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.parentUuid">ParentUuid</a></code> | <code>string</code> | The UUID of the Parent Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.redundancyZone">RedundancyZone</a></code> | <code>string</code> | The redundancy zone for the NaaS. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ConnectionBandwidthInMbps`<sup>Required</sup> <a name="ConnectionBandwidthInMbps" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.connectionBandwidthInMbps"></a>

```csharp
public double ConnectionBandwidthInMbps { get; set; }
```

- *Type:* double

The connection bandwidth in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#connection_bandwidth_in_mbps PartnerAttachment#connection_bandwidth_in_mbps}

---

##### `NaasProvider`<sup>Required</sup> <a name="NaasProvider" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.naasProvider"></a>

```csharp
public string NaasProvider { get; set; }
```

- *Type:* string

The NaaS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#naas_provider PartnerAttachment#naas_provider}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#name PartnerAttachment#name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region where the Partner Attachment will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#region PartnerAttachment#region}

---

##### `VpcIds`<sup>Required</sup> <a name="VpcIds" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.vpcIds"></a>

```csharp
public string[] VpcIds { get; set; }
```

- *Type:* string[]

The list of VPC IDs to attach the Partner Attachment to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#vpc_ids PartnerAttachment#vpc_ids}

---

##### `Bgp`<sup>Optional</sup> <a name="Bgp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.bgp"></a>

```csharp
public PartnerAttachmentBgp Bgp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#bgp PartnerAttachment#bgp}

---

##### `ParentUuid`<sup>Optional</sup> <a name="ParentUuid" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.parentUuid"></a>

```csharp
public string ParentUuid { get; set; }
```

- *Type:* string

The UUID of the Parent Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#parent_uuid PartnerAttachment#parent_uuid}

---

##### `RedundancyZone`<sup>Optional</sup> <a name="RedundancyZone" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.redundancyZone"></a>

```csharp
public string RedundancyZone { get; set; }
```

- *Type:* string

The redundancy zone for the NaaS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#redundancy_zone PartnerAttachment#redundancy_zone}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentConfig.property.timeouts"></a>

```csharp
public PartnerAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#timeouts PartnerAttachment#timeouts}

---

### PartnerAttachmentTimeouts <a name="PartnerAttachmentTimeouts" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new PartnerAttachmentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#create PartnerAttachment#create}. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#delete PartnerAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#create PartnerAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/partner_attachment#delete PartnerAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PartnerAttachmentBgpOutputReference <a name="PartnerAttachmentBgpOutputReference" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new PartnerAttachmentBgpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetAuthKey">ResetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetLocalRouterIp">ResetLocalRouterIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterAsn">ResetPeerRouterAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterIp">ResetPeerRouterIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthKey` <a name="ResetAuthKey" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetAuthKey"></a>

```csharp
private void ResetAuthKey()
```

##### `ResetLocalRouterIp` <a name="ResetLocalRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetLocalRouterIp"></a>

```csharp
private void ResetLocalRouterIp()
```

##### `ResetPeerRouterAsn` <a name="ResetPeerRouterAsn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterAsn"></a>

```csharp
private void ResetPeerRouterAsn()
```

##### `ResetPeerRouterIp` <a name="ResetPeerRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.resetPeerRouterIp"></a>

```csharp
private void ResetPeerRouterIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKeyInput">AuthKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIpInput">LocalRouterIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsnInput">PeerRouterAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIpInput">PeerRouterIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKey">AuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIp">LocalRouterIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsn">PeerRouterAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIp">PeerRouterIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthKeyInput`<sup>Optional</sup> <a name="AuthKeyInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKeyInput"></a>

```csharp
public string AuthKeyInput { get; }
```

- *Type:* string

---

##### `LocalRouterIpInput`<sup>Optional</sup> <a name="LocalRouterIpInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIpInput"></a>

```csharp
public string LocalRouterIpInput { get; }
```

- *Type:* string

---

##### `PeerRouterAsnInput`<sup>Optional</sup> <a name="PeerRouterAsnInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsnInput"></a>

```csharp
public double PeerRouterAsnInput { get; }
```

- *Type:* double

---

##### `PeerRouterIpInput`<sup>Optional</sup> <a name="PeerRouterIpInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIpInput"></a>

```csharp
public string PeerRouterIpInput { get; }
```

- *Type:* string

---

##### `AuthKey`<sup>Required</sup> <a name="AuthKey" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.authKey"></a>

```csharp
public string AuthKey { get; }
```

- *Type:* string

---

##### `LocalRouterIp`<sup>Required</sup> <a name="LocalRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.localRouterIp"></a>

```csharp
public string LocalRouterIp { get; }
```

- *Type:* string

---

##### `PeerRouterAsn`<sup>Required</sup> <a name="PeerRouterAsn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterAsn"></a>

```csharp
public double PeerRouterAsn { get; }
```

- *Type:* double

---

##### `PeerRouterIp`<sup>Required</sup> <a name="PeerRouterIp" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.peerRouterIp"></a>

```csharp
public string PeerRouterIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgpOutputReference.property.internalValue"></a>

```csharp
public PartnerAttachmentBgp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentBgp">PartnerAttachmentBgp</a>

---


### PartnerAttachmentTimeoutsOutputReference <a name="PartnerAttachmentTimeoutsOutputReference" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new PartnerAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PartnerAttachmentTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.partnerAttachment.PartnerAttachmentTimeouts">PartnerAttachmentTimeouts</a>

---



