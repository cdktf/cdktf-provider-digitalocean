# `genaiKnowledgeBaseDataSource` Submodule <a name="`genaiKnowledgeBaseDataSource` Submodule" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenaiKnowledgeBaseDataSource <a name="GenaiKnowledgeBaseDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source digitalocean_genai_knowledge_base_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDataSource(Construct Scope, string Id, GenaiKnowledgeBaseDataSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig">GenaiKnowledgeBaseDataSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig">GenaiKnowledgeBaseDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource">PutSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource">PutWebCrawlerDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetSpacesDataSource">ResetSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetWebCrawlerDataSource">ResetWebCrawlerDataSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSpacesDataSource` <a name="PutSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource"></a>

```csharp
private void PutSpacesDataSource(GenaiKnowledgeBaseDataSourceSpacesDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putSpacesDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

---

##### `PutWebCrawlerDataSource` <a name="PutWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource"></a>

```csharp
private void PutWebCrawlerDataSource(GenaiKnowledgeBaseDataSourceWebCrawlerDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.putWebCrawlerDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSpacesDataSource` <a name="ResetSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetSpacesDataSource"></a>

```csharp
private void ResetSpacesDataSource()
```

##### `ResetWebCrawlerDataSource` <a name="ResetWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.resetWebCrawlerDataSource"></a>

```csharp
private void ResetWebCrawlerDataSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenaiKnowledgeBaseDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiKnowledgeBaseDataSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiKnowledgeBaseDataSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiKnowledgeBaseDataSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

GenaiKnowledgeBaseDataSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GenaiKnowledgeBaseDataSource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenaiKnowledgeBaseDataSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenaiKnowledgeBaseDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GenaiKnowledgeBaseDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSource">SpacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference">GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSource">WebCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference">GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuidInput">KnowledgeBaseUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSourceInput">SpacesDataSourceInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSourceInput">WebCrawlerDataSourceInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SpacesDataSource`<sup>Required</sup> <a name="SpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSource"></a>

```csharp
public GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference SpacesDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference">GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference</a>

---

##### `WebCrawlerDataSource`<sup>Required</sup> <a name="WebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSource"></a>

```csharp
public GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference WebCrawlerDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference">GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KnowledgeBaseUuidInput`<sup>Optional</sup> <a name="KnowledgeBaseUuidInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuidInput"></a>

```csharp
public string KnowledgeBaseUuidInput { get; }
```

- *Type:* string

---

##### `SpacesDataSourceInput`<sup>Optional</sup> <a name="SpacesDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.spacesDataSourceInput"></a>

```csharp
public GenaiKnowledgeBaseDataSourceSpacesDataSource SpacesDataSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

---

##### `WebCrawlerDataSourceInput`<sup>Optional</sup> <a name="WebCrawlerDataSourceInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.webCrawlerDataSourceInput"></a>

```csharp
public GenaiKnowledgeBaseDataSourceWebCrawlerDataSource WebCrawlerDataSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.knowledgeBaseUuid"></a>

```csharp
public string KnowledgeBaseUuid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenaiKnowledgeBaseDataSourceConfig <a name="GenaiKnowledgeBaseDataSourceConfig" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDataSourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KnowledgeBaseUuid,
    string Id = null,
    GenaiKnowledgeBaseDataSourceSpacesDataSource SpacesDataSource = null,
    GenaiKnowledgeBaseDataSourceWebCrawlerDataSource WebCrawlerDataSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>string</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.spacesDataSource">SpacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | spaces_data_source block. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.webCrawlerDataSource">WebCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | web_crawler_data_source block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.knowledgeBaseUuid"></a>

```csharp
public string KnowledgeBaseUuid { get; set; }
```

- *Type:* string

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#knowledge_base_uuid GenaiKnowledgeBaseDataSource#knowledge_base_uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#id GenaiKnowledgeBaseDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SpacesDataSource`<sup>Optional</sup> <a name="SpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.spacesDataSource"></a>

```csharp
public GenaiKnowledgeBaseDataSourceSpacesDataSource SpacesDataSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

spaces_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#spaces_data_source GenaiKnowledgeBaseDataSource#spaces_data_source}

---

##### `WebCrawlerDataSource`<sup>Optional</sup> <a name="WebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceConfig.property.webCrawlerDataSource"></a>

```csharp
public GenaiKnowledgeBaseDataSourceWebCrawlerDataSource WebCrawlerDataSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

web_crawler_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#web_crawler_data_source GenaiKnowledgeBaseDataSource#web_crawler_data_source}

---

### GenaiKnowledgeBaseDataSourceSpacesDataSource <a name="GenaiKnowledgeBaseDataSourceSpacesDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDataSourceSpacesDataSource {
    string BucketName = null,
    string ItemPath = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.bucketName">BucketName</a></code> | <code>string</code> | The name of the Spaces bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.itemPath">ItemPath</a></code> | <code>string</code> | The path to the item in the bucket. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.region">Region</a></code> | <code>string</code> | The region of the Spaces bucket. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The name of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#bucket_name GenaiKnowledgeBaseDataSource#bucket_name}

---

##### `ItemPath`<sup>Optional</sup> <a name="ItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.itemPath"></a>

```csharp
public string ItemPath { get; set; }
```

- *Type:* string

The path to the item in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#item_path GenaiKnowledgeBaseDataSource#item_path}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the Spaces bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#region GenaiKnowledgeBaseDataSource#region}

---

### GenaiKnowledgeBaseDataSourceWebCrawlerDataSource <a name="GenaiKnowledgeBaseDataSourceWebCrawlerDataSource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDataSourceWebCrawlerDataSource {
    string BaseUrl = null,
    string CrawlingOption = null,
    object EmbedMedia = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.baseUrl">BaseUrl</a></code> | <code>string</code> | The base URL to crawl. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.crawlingOption">CrawlingOption</a></code> | <code>string</code> | Options for specifying how URLs found on pages should be handled. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.embedMedia">EmbedMedia</a></code> | <code>object</code> | Whether to embed media content. |

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

The base URL to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#base_url GenaiKnowledgeBaseDataSource#base_url}

---

##### `CrawlingOption`<sup>Optional</sup> <a name="CrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.crawlingOption"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#crawling_option GenaiKnowledgeBaseDataSource#crawling_option}

---

##### `EmbedMedia`<sup>Optional</sup> <a name="EmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource.property.embedMedia"></a>

```csharp
public object EmbedMedia { get; set; }
```

- *Type:* object

Whether to embed media content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.67.0/docs/resources/genai_knowledge_base_data_source#embed_media GenaiKnowledgeBaseDataSource#embed_media}

---

## Classes <a name="Classes" id="Classes"></a>

### GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference <a name="GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetItemPath">ResetItemPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetItemPath` <a name="ResetItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetItemPath"></a>

```csharp
private void ResetItemPath()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPathInput">ItemPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPath">ItemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `ItemPathInput`<sup>Optional</sup> <a name="ItemPathInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPathInput"></a>

```csharp
public string ItemPathInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ItemPath`<sup>Required</sup> <a name="ItemPath" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.itemPath"></a>

```csharp
public string ItemPath { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSourceOutputReference.property.internalValue"></a>

```csharp
public GenaiKnowledgeBaseDataSourceSpacesDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceSpacesDataSource">GenaiKnowledgeBaseDataSourceSpacesDataSource</a>

---


### GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference <a name="GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetCrawlingOption">ResetCrawlingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetEmbedMedia">ResetEmbedMedia</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetCrawlingOption` <a name="ResetCrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetCrawlingOption"></a>

```csharp
private void ResetCrawlingOption()
```

##### `ResetEmbedMedia` <a name="ResetEmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.resetEmbedMedia"></a>

```csharp
private void ResetEmbedMedia()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOptionInput">CrawlingOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMediaInput">EmbedMediaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOption">CrawlingOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMedia">EmbedMedia</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `CrawlingOptionInput`<sup>Optional</sup> <a name="CrawlingOptionInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOptionInput"></a>

```csharp
public string CrawlingOptionInput { get; }
```

- *Type:* string

---

##### `EmbedMediaInput`<sup>Optional</sup> <a name="EmbedMediaInput" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMediaInput"></a>

```csharp
public object EmbedMediaInput { get; }
```

- *Type:* object

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `CrawlingOption`<sup>Required</sup> <a name="CrawlingOption" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```csharp
public string CrawlingOption { get; }
```

- *Type:* string

---

##### `EmbedMedia`<sup>Required</sup> <a name="EmbedMedia" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```csharp
public object EmbedMedia { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```csharp
public GenaiKnowledgeBaseDataSourceWebCrawlerDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-digitalocean.genaiKnowledgeBaseDataSource.GenaiKnowledgeBaseDataSourceWebCrawlerDataSource">GenaiKnowledgeBaseDataSourceWebCrawlerDataSource</a>

---



