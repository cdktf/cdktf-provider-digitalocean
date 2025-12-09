# `genaiKnowledgeBase` Submodule <a name="`genaiKnowledgeBase` Submodule" id="@cdktf/provider-digitalocean.genaiKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiKnowledgeBase <a name="GenaiKnowledgeBase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base digitalocean_genai_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBase(Construct Scope, string Id, GenaiKnowledgeBaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig">GenaiKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig">GenaiKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources">PutDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob">PutLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetAddedToAgentAt">ResetAddedToAgentAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetIsPublic">ResetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetLastIndexingJob">ResetLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetVpcUuid">ResetVpcUuid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDatasources` <a name="PutDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources"></a>

```csharp
private void PutDatasources(IResolvable|GenaiKnowledgeBaseDatasources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putDatasources.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]

---

##### `PutLastIndexingJob` <a name="PutLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob"></a>

```csharp
private void PutLastIndexingJob(IResolvable|GenaiKnowledgeBaseLastIndexingJob[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.putLastIndexingJob.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]

---

##### `ResetAddedToAgentAt` <a name="ResetAddedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetAddedToAgentAt"></a>

```csharp
private void ResetAddedToAgentAt()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetDatabaseId"></a>

```csharp
private void ResetDatabaseId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsPublic` <a name="ResetIsPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetIsPublic"></a>

```csharp
private void ResetIsPublic()
```

##### `ResetLastIndexingJob` <a name="ResetLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetLastIndexingJob"></a>

```csharp
private void ResetLastIndexingJob()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpcUuid` <a name="ResetVpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.resetVpcUuid"></a>

```csharp
private void ResetVpcUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiKnowledgeBase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiKnowledgeBase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiKnowledgeBase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiKnowledgeBase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GenaiKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenaiKnowledgeBase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenaiKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GenaiKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasources">Datasources</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList">GenaiKnowledgeBaseDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJob">LastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList">GenaiKnowledgeBaseLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAtInput">AddedToAgentAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasourcesInput">DatasourcesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuidInput">EmbeddingModelUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublicInput">IsPublicInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJobInput">LastIndexingJobInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuidInput">VpcUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAt">AddedToAgentAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuid">EmbeddingModelUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublic">IsPublic</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuid">VpcUuid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Datasources`<sup>Required</sup> <a name="Datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasources"></a>

```csharp
public GenaiKnowledgeBaseDatasourcesList Datasources { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList">GenaiKnowledgeBaseDatasourcesList</a>

---

##### `LastIndexingJob`<sup>Required</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJob"></a>

```csharp
public GenaiKnowledgeBaseLastIndexingJobList LastIndexingJob { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList">GenaiKnowledgeBaseLastIndexingJobList</a>

---

##### `AddedToAgentAtInput`<sup>Optional</sup> <a name="AddedToAgentAtInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAtInput"></a>

```csharp
public string AddedToAgentAtInput { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `DatasourcesInput`<sup>Optional</sup> <a name="DatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.datasourcesInput"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasources[] DatasourcesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]

---

##### `EmbeddingModelUuidInput`<sup>Optional</sup> <a name="EmbeddingModelUuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuidInput"></a>

```csharp
public string EmbeddingModelUuidInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsPublicInput`<sup>Optional</sup> <a name="IsPublicInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublicInput"></a>

```csharp
public bool|IResolvable IsPublicInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `LastIndexingJobInput`<sup>Optional</sup> <a name="LastIndexingJobInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.lastIndexingJobInput"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseLastIndexingJob[] LastIndexingJobInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `VpcUuidInput`<sup>Optional</sup> <a name="VpcUuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuidInput"></a>

```csharp
public string VpcUuidInput { get; }
```

- *Type:* string

---

##### `AddedToAgentAt`<sup>Required</sup> <a name="AddedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.addedToAgentAt"></a>

```csharp
public string AddedToAgentAt { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `EmbeddingModelUuid`<sup>Required</sup> <a name="EmbeddingModelUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.embeddingModelUuid"></a>

```csharp
public string EmbeddingModelUuid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.isPublic"></a>

```csharp
public bool|IResolvable IsPublic { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.vpcUuid"></a>

```csharp
public string VpcUuid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiKnowledgeBaseConfig <a name="GenaiKnowledgeBaseConfig" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|GenaiKnowledgeBaseDatasources[] Datasources,
    string EmbeddingModelUuid,
    string Name,
    string ProjectId,
    string Region,
    string AddedToAgentAt = null,
    string DatabaseId = null,
    string Id = null,
    bool|IResolvable IsPublic = null,
    IResolvable|GenaiKnowledgeBaseLastIndexingJob[] LastIndexingJob = null,
    string[] Tags = null,
    string VpcUuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.datasources">Datasources</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]</code> | datasources block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.embeddingModelUuid">EmbeddingModelUuid</a></code> | <code>string</code> | The unique identifier of the embedding model. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.name">Name</a></code> | <code>string</code> | The name of the knowledge base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The unique identifier of the project to which the knowledge base belongs. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.addedToAgentAt">AddedToAgentAt</a></code> | <code>string</code> | The time when the knowledge base was added to the agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.isPublic">IsPublic</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates whether the knowledge base is public or private. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lastIndexingJob">LastIndexingJob</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.vpcUuid">VpcUuid</a></code> | <code>string</code> | The unique identifier of the VPC to which the knowledge base belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Datasources`<sup>Required</sup> <a name="Datasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.datasources"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasources[] Datasources { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]

datasources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#datasources GenaiKnowledgeBase#datasources}

---

##### `EmbeddingModelUuid`<sup>Required</sup> <a name="EmbeddingModelUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.embeddingModelUuid"></a>

```csharp
public string EmbeddingModelUuid { get; set; }
```

- *Type:* string

The unique identifier of the embedding model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#embedding_model_uuid GenaiKnowledgeBase#embedding_model_uuid}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#name GenaiKnowledgeBase#name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The unique identifier of the project to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#project_id GenaiKnowledgeBase#project_id}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}.

---

##### `AddedToAgentAt`<sup>Optional</sup> <a name="AddedToAgentAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.addedToAgentAt"></a>

```csharp
public string AddedToAgentAt { get; set; }
```

- *Type:* string

The time when the knowledge base was added to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#added_to_agent_at GenaiKnowledgeBase#added_to_agent_at}

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

The unique identifier of the DigitalOcean OpenSearch database this knowledge base will use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#database_id GenaiKnowledgeBase#database_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#id GenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsPublic`<sup>Optional</sup> <a name="IsPublic" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.isPublic"></a>

```csharp
public bool|IResolvable IsPublic { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates whether the knowledge base is public or private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#is_public GenaiKnowledgeBase#is_public}

---

##### `LastIndexingJob`<sup>Optional</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.lastIndexingJob"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseLastIndexingJob[] LastIndexingJob { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#tags GenaiKnowledgeBase#tags}.

---

##### `VpcUuid`<sup>Optional</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseConfig.property.vpcUuid"></a>

```csharp
public string VpcUuid { get; set; }
```

- *Type:* string

The unique identifier of the VPC to which the knowledge base belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#vpc_uuid GenaiKnowledgeBase#vpc_uuid}

---

### GenaiKnowledgeBaseDatasources <a name="GenaiKnowledgeBaseDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasources {
    IResolvable|GenaiKnowledgeBaseDatasourcesFileUploadDataSource[] FileUploadDataSource = null,
    IResolvable|GenaiKnowledgeBaseDatasourcesLastIndexingJob[] LastIndexingJob = null,
    IResolvable|GenaiKnowledgeBaseDatasourcesSpacesDataSource[] SpacesDataSource = null,
    string Uuid = null,
    IResolvable|GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[] WebCrawlerDataSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.fileUploadDataSource">FileUploadDataSource</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]</code> | file_upload_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.lastIndexingJob">LastIndexingJob</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.spacesDataSource">SpacesDataSource</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]</code> | spaces_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.uuid">Uuid</a></code> | <code>string</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.webCrawlerDataSource">WebCrawlerDataSource</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]</code> | web_crawler_data_source block. |

---

##### `FileUploadDataSource`<sup>Optional</sup> <a name="FileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.fileUploadDataSource"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesFileUploadDataSource[] FileUploadDataSource { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]

file_upload_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#file_upload_data_source GenaiKnowledgeBase#file_upload_data_source}

---

##### `LastIndexingJob`<sup>Optional</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.lastIndexingJob"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesLastIndexingJob[] LastIndexingJob { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#last_indexing_job GenaiKnowledgeBase#last_indexing_job}

---

##### `SpacesDataSource`<sup>Optional</sup> <a name="SpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.spacesDataSource"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesSpacesDataSource[] SpacesDataSource { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]

spaces_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#spaces_data_source GenaiKnowledgeBase#spaces_data_source}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

##### `WebCrawlerDataSource`<sup>Optional</sup> <a name="WebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources.property.webCrawlerDataSource"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[] WebCrawlerDataSource { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]

web_crawler_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#web_crawler_data_source GenaiKnowledgeBase#web_crawler_data_source}

---

### GenaiKnowledgeBaseDatasourcesFileUploadDataSource <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesFileUploadDataSource {
    string OriginalFileName = null,
    string SizeInBytes = null,
    string StoredObjectKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.originalFileName">OriginalFileName</a></code> | <code>string</code> | The original name of the uploaded file. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.sizeInBytes">SizeInBytes</a></code> | <code>string</code> | The size of the file in bytes. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.storedObjectKey">StoredObjectKey</a></code> | <code>string</code> | The stored object key for the file. |

---

##### `OriginalFileName`<sup>Optional</sup> <a name="OriginalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.originalFileName"></a>

```csharp
public string OriginalFileName { get; set; }
```

- *Type:* string

The original name of the uploaded file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#original_file_name GenaiKnowledgeBase#original_file_name}

---

##### `SizeInBytes`<sup>Optional</sup> <a name="SizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.sizeInBytes"></a>

```csharp
public string SizeInBytes { get; set; }
```

- *Type:* string

The size of the file in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#size_in_bytes GenaiKnowledgeBase#size_in_bytes}

---

##### `StoredObjectKey`<sup>Optional</sup> <a name="StoredObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource.property.storedObjectKey"></a>

```csharp
public string StoredObjectKey { get; set; }
```

- *Type:* string

The stored object key for the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#stored_object_key GenaiKnowledgeBase#stored_object_key}

---

### GenaiKnowledgeBaseDatasourcesLastIndexingJob <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesLastIndexingJob {
    double CompletedDatasources = null,
    string[] DataSourceUuids = null,
    string Phase = null,
    double Tokens = null,
    double TotalDatasources = null,
    string Uuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.completedDatasources">CompletedDatasources</a></code> | <code>double</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.dataSourceUuids">DataSourceUuids</a></code> | <code>string[]</code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.phase">Phase</a></code> | <code>string</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.tokens">Tokens</a></code> | <code>double</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.totalDatasources">TotalDatasources</a></code> | <code>double</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.uuid">Uuid</a></code> | <code>string</code> | UUID  of the last indexing job. |

---

##### `CompletedDatasources`<sup>Optional</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.completedDatasources"></a>

```csharp
public double CompletedDatasources { get; set; }
```

- *Type:* double

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}

---

##### `DataSourceUuids`<sup>Optional</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.dataSourceUuids"></a>

```csharp
public string[] DataSourceUuids { get; set; }
```

- *Type:* string[]

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}

---

##### `Phase`<sup>Optional</sup> <a name="Phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.phase"></a>

```csharp
public string Phase { get; set; }
```

- *Type:* string

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.tokens"></a>

```csharp
public double Tokens { get; set; }
```

- *Type:* double

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}

---

##### `TotalDatasources`<sup>Optional</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.totalDatasources"></a>

```csharp
public double TotalDatasources { get; set; }
```

- *Type:* double

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

### GenaiKnowledgeBaseDatasourcesSpacesDataSource <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesSpacesDataSource {
    string BucketName = null,
    string ItemPath = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.bucketName">BucketName</a></code> | <code>string</code> | The name of the Spaces bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.itemPath">ItemPath</a></code> | <code>string</code> | The path to the item in the bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.region">Region</a></code> | <code>string</code> | The region of the Spaces bucket. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The name of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#bucket_name GenaiKnowledgeBase#bucket_name}

---

##### `ItemPath`<sup>Optional</sup> <a name="ItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.itemPath"></a>

```csharp
public string ItemPath { get; set; }
```

- *Type:* string

The path to the item in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#item_path GenaiKnowledgeBase#item_path}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#region GenaiKnowledgeBase#region}

---

### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource {
    string BaseUrl = null,
    string CrawlingOption = null,
    bool|IResolvable EmbedMedia = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.baseUrl">BaseUrl</a></code> | <code>string</code> | The base URL to crawl. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.crawlingOption">CrawlingOption</a></code> | <code>string</code> | Options for specifying how URLs found on pages should be handled. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.embedMedia">EmbedMedia</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether to embed media content. |

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

The base URL to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#base_url GenaiKnowledgeBase#base_url}

---

##### `CrawlingOption`<sup>Optional</sup> <a name="CrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.crawlingOption"></a>

```csharp
public string CrawlingOption { get; set; }
```

- *Type:* string

Options for specifying how URLs found on pages should be handled.

* UNKNOWN: Default unknown value
* SCOPED: Only include the base URL.
* PATH: Crawl the base URL and linked pages within the URL path.
* DOMAIN: Crawl the base URL and linked pages within the same domain.
* SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#crawling_option GenaiKnowledgeBase#crawling_option}

---

##### `EmbedMedia`<sup>Optional</sup> <a name="EmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource.property.embedMedia"></a>

```csharp
public bool|IResolvable EmbedMedia { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether to embed media content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#embed_media GenaiKnowledgeBase#embed_media}

---

### GenaiKnowledgeBaseLastIndexingJob <a name="GenaiKnowledgeBaseLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseLastIndexingJob {
    double CompletedDatasources = null,
    string[] DataSourceUuids = null,
    string Phase = null,
    double Tokens = null,
    double TotalDatasources = null,
    string Uuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.completedDatasources">CompletedDatasources</a></code> | <code>double</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids">DataSourceUuids</a></code> | <code>string[]</code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.phase">Phase</a></code> | <code>string</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.tokens">Tokens</a></code> | <code>double</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.totalDatasources">TotalDatasources</a></code> | <code>double</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.uuid">Uuid</a></code> | <code>string</code> | UUID  of the last indexing job. |

---

##### `CompletedDatasources`<sup>Optional</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.completedDatasources"></a>

```csharp
public double CompletedDatasources { get; set; }
```

- *Type:* double

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#completed_datasources GenaiKnowledgeBase#completed_datasources}

---

##### `DataSourceUuids`<sup>Optional</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids"></a>

```csharp
public string[] DataSourceUuids { get; set; }
```

- *Type:* string[]

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#data_source_uuids GenaiKnowledgeBase#data_source_uuids}

---

##### `Phase`<sup>Optional</sup> <a name="Phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.phase"></a>

```csharp
public string Phase { get; set; }
```

- *Type:* string

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#phase GenaiKnowledgeBase#phase}

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.tokens"></a>

```csharp
public double Tokens { get; set; }
```

- *Type:* double

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#tokens GenaiKnowledgeBase#tokens}

---

##### `TotalDatasources`<sup>Optional</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.totalDatasources"></a>

```csharp
public double TotalDatasources { get; set; }
```

- *Type:* double

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#total_datasources GenaiKnowledgeBase#total_datasources}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/resources/genai_knowledge_base#uuid GenaiKnowledgeBase#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get"></a>

```csharp
private GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesFileUploadDataSource[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]

---


### GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetOriginalFileName">ResetOriginalFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetSizeInBytes">ResetSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetStoredObjectKey">ResetStoredObjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOriginalFileName` <a name="ResetOriginalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetOriginalFileName"></a>

```csharp
private void ResetOriginalFileName()
```

##### `ResetSizeInBytes` <a name="ResetSizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetSizeInBytes"></a>

```csharp
private void ResetSizeInBytes()
```

##### `ResetStoredObjectKey` <a name="ResetStoredObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.resetStoredObjectKey"></a>

```csharp
private void ResetStoredObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileNameInput">OriginalFileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytesInput">SizeInBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKeyInput">StoredObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileName">OriginalFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes">SizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey">StoredObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OriginalFileNameInput`<sup>Optional</sup> <a name="OriginalFileNameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileNameInput"></a>

```csharp
public string OriginalFileNameInput { get; }
```

- *Type:* string

---

##### `SizeInBytesInput`<sup>Optional</sup> <a name="SizeInBytesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytesInput"></a>

```csharp
public string SizeInBytesInput { get; }
```

- *Type:* string

---

##### `StoredObjectKeyInput`<sup>Optional</sup> <a name="StoredObjectKeyInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKeyInput"></a>

```csharp
public string StoredObjectKeyInput { get; }
```

- *Type:* string

---

##### `OriginalFileName`<sup>Required</sup> <a name="OriginalFileName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.originalFileName"></a>

```csharp
public string OriginalFileName { get; }
```

- *Type:* string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes"></a>

```csharp
public string SizeInBytes { get; }
```

- *Type:* string

---

##### `StoredObjectKey`<sup>Required</sup> <a name="StoredObjectKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey"></a>

```csharp
public string StoredObjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesFileUploadDataSource InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>

---


### GenaiKnowledgeBaseDatasourcesLastIndexingJobList <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJobList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesLastIndexingJobList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get"></a>

```csharp
private GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesLastIndexingJob[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]

---


### GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference <a name="GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetCompletedDatasources">ResetCompletedDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetDataSourceUuids">ResetDataSourceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetPhase">ResetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTotalDatasources">ResetTotalDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompletedDatasources` <a name="ResetCompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```csharp
private void ResetCompletedDatasources()
```

##### `ResetDataSourceUuids` <a name="ResetDataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```csharp
private void ResetDataSourceUuids()
```

##### `ResetPhase` <a name="ResetPhase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetPhase"></a>

```csharp
private void ResetPhase()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTokens"></a>

```csharp
private void ResetTokens()
```

##### `ResetTotalDatasources` <a name="ResetTotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetTotalDatasources"></a>

```csharp
private void ResetTotalDatasources()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.resetUuid"></a>

```csharp
private void ResetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.finishedAt">FinishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.startedAt">StartedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasourcesInput">CompletedDatasourcesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuidsInput">DataSourceUuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phaseInput">PhaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokensInput">TokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasourcesInput">TotalDatasourcesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasources">CompletedDatasources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids">DataSourceUuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phase">Phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokens">Tokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasources">TotalDatasources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.finishedAt"></a>

```csharp
public string FinishedAt { get; }
```

- *Type:* string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```csharp
public string KnowledgeBaseUuid { get; }
```

- *Type:* string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.startedAt"></a>

```csharp
public string StartedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `CompletedDatasourcesInput`<sup>Optional</sup> <a name="CompletedDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```csharp
public double CompletedDatasourcesInput { get; }
```

- *Type:* double

---

##### `DataSourceUuidsInput`<sup>Optional</sup> <a name="DataSourceUuidsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```csharp
public string[] DataSourceUuidsInput { get; }
```

- *Type:* string[]

---

##### `PhaseInput`<sup>Optional</sup> <a name="PhaseInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phaseInput"></a>

```csharp
public string PhaseInput { get; }
```

- *Type:* string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokensInput"></a>

```csharp
public double TokensInput { get; }
```

- *Type:* double

---

##### `TotalDatasourcesInput`<sup>Optional</sup> <a name="TotalDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```csharp
public double TotalDatasourcesInput { get; }
```

- *Type:* double

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `CompletedDatasources`<sup>Required</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.completedDatasources"></a>

```csharp
public double CompletedDatasources { get; }
```

- *Type:* double

---

##### `DataSourceUuids`<sup>Required</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```csharp
public string[] DataSourceUuids { get; }
```

- *Type:* string[]

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.phase"></a>

```csharp
public string Phase { get; }
```

- *Type:* string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.tokens"></a>

```csharp
public double Tokens { get; }
```

- *Type:* double

---

##### `TotalDatasources`<sup>Required</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.totalDatasources"></a>

```csharp
public double TotalDatasources { get; }
```

- *Type:* double

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesLastIndexingJob InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>

---


### GenaiKnowledgeBaseDatasourcesList <a name="GenaiKnowledgeBaseDatasourcesList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get"></a>

```csharp
private GenaiKnowledgeBaseDatasourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesList.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasources[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>[]

---


### GenaiKnowledgeBaseDatasourcesOutputReference <a name="GenaiKnowledgeBaseDatasourcesOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource">PutFileUploadDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob">PutLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource">PutSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource">PutWebCrawlerDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetFileUploadDataSource">ResetFileUploadDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetLastIndexingJob">ResetLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetSpacesDataSource">ResetSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetWebCrawlerDataSource">ResetWebCrawlerDataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFileUploadDataSource` <a name="PutFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource"></a>

```csharp
private void PutFileUploadDataSource(IResolvable|GenaiKnowledgeBaseDatasourcesFileUploadDataSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putFileUploadDataSource.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]

---

##### `PutLastIndexingJob` <a name="PutLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob"></a>

```csharp
private void PutLastIndexingJob(IResolvable|GenaiKnowledgeBaseDatasourcesLastIndexingJob[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putLastIndexingJob.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]

---

##### `PutSpacesDataSource` <a name="PutSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource"></a>

```csharp
private void PutSpacesDataSource(IResolvable|GenaiKnowledgeBaseDatasourcesSpacesDataSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putSpacesDataSource.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]

---

##### `PutWebCrawlerDataSource` <a name="PutWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource"></a>

```csharp
private void PutWebCrawlerDataSource(IResolvable|GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.putWebCrawlerDataSource.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]

---

##### `ResetFileUploadDataSource` <a name="ResetFileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetFileUploadDataSource"></a>

```csharp
private void ResetFileUploadDataSource()
```

##### `ResetLastIndexingJob` <a name="ResetLastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetLastIndexingJob"></a>

```csharp
private void ResetLastIndexingJob()
```

##### `ResetSpacesDataSource` <a name="ResetSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetSpacesDataSource"></a>

```csharp
private void ResetSpacesDataSource()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetUuid"></a>

```csharp
private void ResetUuid()
```

##### `ResetWebCrawlerDataSource` <a name="ResetWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.resetWebCrawlerDataSource"></a>

```csharp
private void ResetWebCrawlerDataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSource">FileUploadDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList">GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJob">LastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList">GenaiKnowledgeBaseDatasourcesLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSource">SpacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList">GenaiKnowledgeBaseDatasourcesSpacesDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSource">WebCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSourceInput">FileUploadDataSourceInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJobInput">LastIndexingJobInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSourceInput">SpacesDataSourceInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSourceInput">WebCrawlerDataSourceInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FileUploadDataSource`<sup>Required</sup> <a name="FileUploadDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSource"></a>

```csharp
public GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList FileUploadDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList">GenaiKnowledgeBaseDatasourcesFileUploadDataSourceList</a>

---

##### `LastIndexingJob`<sup>Required</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJob"></a>

```csharp
public GenaiKnowledgeBaseDatasourcesLastIndexingJobList LastIndexingJob { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJobList">GenaiKnowledgeBaseDatasourcesLastIndexingJobList</a>

---

##### `SpacesDataSource`<sup>Required</sup> <a name="SpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSource"></a>

```csharp
public GenaiKnowledgeBaseDatasourcesSpacesDataSourceList SpacesDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList">GenaiKnowledgeBaseDatasourcesSpacesDataSourceList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `WebCrawlerDataSource`<sup>Required</sup> <a name="WebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSource"></a>

```csharp
public GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList WebCrawlerDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList</a>

---

##### `FileUploadDataSourceInput`<sup>Optional</sup> <a name="FileUploadDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.fileUploadDataSourceInput"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesFileUploadDataSource[] FileUploadDataSourceInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesFileUploadDataSource">GenaiKnowledgeBaseDatasourcesFileUploadDataSource</a>[]

---

##### `LastIndexingJobInput`<sup>Optional</sup> <a name="LastIndexingJobInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.lastIndexingJobInput"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesLastIndexingJob[] LastIndexingJobInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesLastIndexingJob">GenaiKnowledgeBaseDatasourcesLastIndexingJob</a>[]

---

##### `SpacesDataSourceInput`<sup>Optional</sup> <a name="SpacesDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.spacesDataSourceInput"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesSpacesDataSource[] SpacesDataSourceInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `WebCrawlerDataSourceInput`<sup>Optional</sup> <a name="WebCrawlerDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.webCrawlerDataSourceInput"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[] WebCrawlerDataSourceInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasources InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasources">GenaiKnowledgeBaseDatasources</a>

---


### GenaiKnowledgeBaseDatasourcesSpacesDataSourceList <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesSpacesDataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get"></a>

```csharp
private GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceList.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesSpacesDataSource[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>[]

---


### GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetItemPath">ResetItemPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetItemPath` <a name="ResetItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetItemPath"></a>

```csharp
private void ResetItemPath()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPathInput">ItemPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPath">ItemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `ItemPathInput`<sup>Optional</sup> <a name="ItemPathInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPathInput"></a>

```csharp
public string ItemPathInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ItemPath`<sup>Required</sup> <a name="ItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.itemPath"></a>

```csharp
public string ItemPath { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesSpacesDataSource InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesSpacesDataSource">GenaiKnowledgeBaseDatasourcesSpacesDataSource</a>

---


### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get"></a>

```csharp
private GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceList.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>[]

---


### GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference <a name="GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetCrawlingOption">ResetCrawlingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetEmbedMedia">ResetEmbedMedia</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetCrawlingOption` <a name="ResetCrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetCrawlingOption"></a>

```csharp
private void ResetCrawlingOption()
```

##### `ResetEmbedMedia` <a name="ResetEmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.resetEmbedMedia"></a>

```csharp
private void ResetEmbedMedia()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOptionInput">CrawlingOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMediaInput">EmbedMediaInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption">CrawlingOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia">EmbedMedia</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `CrawlingOptionInput`<sup>Optional</sup> <a name="CrawlingOptionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOptionInput"></a>

```csharp
public string CrawlingOptionInput { get; }
```

- *Type:* string

---

##### `EmbedMediaInput`<sup>Optional</sup> <a name="EmbedMediaInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMediaInput"></a>

```csharp
public bool|IResolvable EmbedMediaInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `CrawlingOption`<sup>Required</sup> <a name="CrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```csharp
public string CrawlingOption { get; }
```

- *Type:* string

---

##### `EmbedMedia`<sup>Required</sup> <a name="EmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```csharp
public bool|IResolvable EmbedMedia { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource">GenaiKnowledgeBaseDatasourcesWebCrawlerDataSource</a>

---


### GenaiKnowledgeBaseLastIndexingJobList <a name="GenaiKnowledgeBaseLastIndexingJobList" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseLastIndexingJobList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get"></a>

```csharp
private GenaiKnowledgeBaseLastIndexingJobOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobList.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseLastIndexingJob[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>[]

---


### GenaiKnowledgeBaseLastIndexingJobOutputReference <a name="GenaiKnowledgeBaseLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseLastIndexingJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources">ResetCompletedDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids">ResetDataSourceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase">ResetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources">ResetTotalDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompletedDatasources` <a name="ResetCompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```csharp
private void ResetCompletedDatasources()
```

##### `ResetDataSourceUuids` <a name="ResetDataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```csharp
private void ResetDataSourceUuids()
```

##### `ResetPhase` <a name="ResetPhase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase"></a>

```csharp
private void ResetPhase()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens"></a>

```csharp
private void ResetTokens()
```

##### `ResetTotalDatasources` <a name="ResetTotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources"></a>

```csharp
private void ResetTotalDatasources()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid"></a>

```csharp
private void ResetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt">FinishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt">StartedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput">CompletedDatasourcesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput">DataSourceUuidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput">PhaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput">TokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput">TotalDatasourcesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources">CompletedDatasources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids">DataSourceUuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase">Phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens">Tokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources">TotalDatasources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt"></a>

```csharp
public string FinishedAt { get; }
```

- *Type:* string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```csharp
public string KnowledgeBaseUuid { get; }
```

- *Type:* string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt"></a>

```csharp
public string StartedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `CompletedDatasourcesInput`<sup>Optional</sup> <a name="CompletedDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```csharp
public double CompletedDatasourcesInput { get; }
```

- *Type:* double

---

##### `DataSourceUuidsInput`<sup>Optional</sup> <a name="DataSourceUuidsInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```csharp
public string[] DataSourceUuidsInput { get; }
```

- *Type:* string[]

---

##### `PhaseInput`<sup>Optional</sup> <a name="PhaseInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput"></a>

```csharp
public string PhaseInput { get; }
```

- *Type:* string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput"></a>

```csharp
public double TokensInput { get; }
```

- *Type:* double

---

##### `TotalDatasourcesInput`<sup>Optional</sup> <a name="TotalDatasourcesInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```csharp
public double TotalDatasourcesInput { get; }
```

- *Type:* double

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `CompletedDatasources`<sup>Required</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources"></a>

```csharp
public double CompletedDatasources { get; }
```

- *Type:* double

---

##### `DataSourceUuids`<sup>Required</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```csharp
public string[] DataSourceUuids { get; }
```

- *Type:* string[]

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase"></a>

```csharp
public string Phase { get; }
```

- *Type:* string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens"></a>

```csharp
public double Tokens { get; }
```

- *Type:* double

---

##### `TotalDatasources`<sup>Required</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources"></a>

```csharp
public double TotalDatasources { get; }
```

- *Type:* double

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenaiKnowledgeBaseLastIndexingJob InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-digitalocean.genaiKnowledgeBase.GenaiKnowledgeBaseLastIndexingJob">GenaiKnowledgeBaseLastIndexingJob</a>

---



