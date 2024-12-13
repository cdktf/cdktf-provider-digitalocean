# `containerRegistryDockerCredentials` Submodule <a name="`containerRegistryDockerCredentials` Submodule" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryDockerCredentials <a name="ContainerRegistryDockerCredentials" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/resources/container_registry_docker_credentials digitalocean_container_registry_docker_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new ContainerRegistryDockerCredentials(Construct Scope, string Id, ContainerRegistryDockerCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig">ContainerRegistryDockerCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig">ContainerRegistryDockerCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetExpirySeconds">ResetExpirySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetWrite">ResetWrite</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetExpirySeconds` <a name="ResetExpirySeconds" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetExpirySeconds"></a>

```csharp
private void ResetExpirySeconds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetWrite` <a name="ResetWrite" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetWrite"></a>

```csharp
private void ResetWrite()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistryDockerCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

ContainerRegistryDockerCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

ContainerRegistryDockerCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

ContainerRegistryDockerCredentials.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

ContainerRegistryDockerCredentials.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerRegistryDockerCredentials resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerRegistryDockerCredentials to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerRegistryDockerCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/resources/container_registry_docker_credentials#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryDockerCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.credentialExpirationTime">CredentialExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dockerCredentials">DockerCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySecondsInput">ExpirySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryNameInput">RegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.writeInput">WriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySeconds">ExpirySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryName">RegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.write">Write</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CredentialExpirationTime`<sup>Required</sup> <a name="CredentialExpirationTime" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.credentialExpirationTime"></a>

```csharp
public string CredentialExpirationTime { get; }
```

- *Type:* string

---

##### `DockerCredentials`<sup>Required</sup> <a name="DockerCredentials" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dockerCredentials"></a>

```csharp
public string DockerCredentials { get; }
```

- *Type:* string

---

##### `ExpirySecondsInput`<sup>Optional</sup> <a name="ExpirySecondsInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySecondsInput"></a>

```csharp
public double ExpirySecondsInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegistryNameInput`<sup>Optional</sup> <a name="RegistryNameInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryNameInput"></a>

```csharp
public string RegistryNameInput { get; }
```

- *Type:* string

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.writeInput"></a>

```csharp
public object WriteInput { get; }
```

- *Type:* object

---

##### `ExpirySeconds`<sup>Required</sup> <a name="ExpirySeconds" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySeconds"></a>

```csharp
public double ExpirySeconds { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryName"></a>

```csharp
public string RegistryName { get; }
```

- *Type:* string

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.write"></a>

```csharp
public object Write { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryDockerCredentialsConfig <a name="ContainerRegistryDockerCredentialsConfig" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Digitalocean;

new ContainerRegistryDockerCredentialsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RegistryName,
    double ExpirySeconds = null,
    string Id = null,
    object Write = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.registryName">RegistryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/resources/container_registry_docker_credentials#registry_name ContainerRegistryDockerCredentials#registry_name}. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.expirySeconds">ExpirySeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/resources/container_registry_docker_credentials#expiry_seconds ContainerRegistryDockerCredentials#expiry_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/resources/container_registry_docker_credentials#id ContainerRegistryDockerCredentials#id}. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.write">Write</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/resources/container_registry_docker_credentials#write ContainerRegistryDockerCredentials#write}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.registryName"></a>

```csharp
public string RegistryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/resources/container_registry_docker_credentials#registry_name ContainerRegistryDockerCredentials#registry_name}.

---

##### `ExpirySeconds`<sup>Optional</sup> <a name="ExpirySeconds" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.expirySeconds"></a>

```csharp
public double ExpirySeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/resources/container_registry_docker_credentials#expiry_seconds ContainerRegistryDockerCredentials#expiry_seconds}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/resources/container_registry_docker_credentials#id ContainerRegistryDockerCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Write`<sup>Optional</sup> <a name="Write" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.write"></a>

```csharp
public object Write { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.46.0/docs/resources/container_registry_docker_credentials#write ContainerRegistryDockerCredentials#write}.

---



