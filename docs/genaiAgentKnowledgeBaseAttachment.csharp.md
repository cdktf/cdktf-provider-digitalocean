# `genaiAgentKnowledgeBaseAttachment` Submodule <a name="`genaiAgentKnowledgeBaseAttachment` Submodule" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiAgentKnowledgeBaseAttachment <a name="GenaiAgentKnowledgeBaseAttachment" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment digitalocean_genai_agent_knowledge_base_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiAgentKnowledgeBaseAttachment(Construct Scope, string Id, GenaiAgentKnowledgeBaseAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig">GenaiAgentKnowledgeBaseAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig">GenaiAgentKnowledgeBaseAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiAgentKnowledgeBaseAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiAgentKnowledgeBaseAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiAgentKnowledgeBaseAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiAgentKnowledgeBaseAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiAgentKnowledgeBaseAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GenaiAgentKnowledgeBaseAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenaiAgentKnowledgeBaseAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenaiAgentKnowledgeBaseAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GenaiAgentKnowledgeBaseAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.agentUuidInput">AgentUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.knowledgeBaseUuidInput">KnowledgeBaseUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.agentUuid">AgentUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AgentUuidInput`<sup>Optional</sup> <a name="AgentUuidInput" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.agentUuidInput"></a>

```csharp
public string AgentUuidInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KnowledgeBaseUuidInput`<sup>Optional</sup> <a name="KnowledgeBaseUuidInput" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.knowledgeBaseUuidInput"></a>

```csharp
public string KnowledgeBaseUuidInput { get; }
```

- *Type:* string

---

##### `AgentUuid`<sup>Required</sup> <a name="AgentUuid" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.agentUuid"></a>

```csharp
public string AgentUuid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.knowledgeBaseUuid"></a>

```csharp
public string KnowledgeBaseUuid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiAgentKnowledgeBaseAttachmentConfig <a name="GenaiAgentKnowledgeBaseAttachmentConfig" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiAgentKnowledgeBaseAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AgentUuid,
    string KnowledgeBaseUuid,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.agentUuid">AgentUuid</a></code> | <code>string</code> | A unique identifier for an agent. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>string</code> | A unique identifier for a knowledge base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment#id GenaiAgentKnowledgeBaseAttachment#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AgentUuid`<sup>Required</sup> <a name="AgentUuid" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.agentUuid"></a>

```csharp
public string AgentUuid { get; set; }
```

- *Type:* string

A unique identifier for an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment#agent_uuid GenaiAgentKnowledgeBaseAttachment#agent_uuid}

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.knowledgeBaseUuid"></a>

```csharp
public string KnowledgeBaseUuid { get; set; }
```

- *Type:* string

A unique identifier for a knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment#knowledge_base_uuid GenaiAgentKnowledgeBaseAttachment#knowledge_base_uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiAgentKnowledgeBaseAttachment.GenaiAgentKnowledgeBaseAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/resources/genai_agent_knowledge_base_attachment#id GenaiAgentKnowledgeBaseAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



