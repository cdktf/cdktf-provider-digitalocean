# `containerRegistryDockerCredentials` Submodule <a name="`containerRegistryDockerCredentials` Submodule" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryDockerCredentials <a name="ContainerRegistryDockerCredentials" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/container_registry_docker_credentials digitalocean_container_registry_docker_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v12/containerregistrydockercredentials"

containerregistrydockercredentials.NewContainerRegistryDockerCredentials(scope Construct, id *string, config ContainerRegistryDockerCredentialsConfig) ContainerRegistryDockerCredentials
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig">ContainerRegistryDockerCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetExpirySeconds` <a name="ResetExpirySeconds" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetExpirySeconds"></a>

```go
func ResetExpirySeconds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetId"></a>

```go
func ResetId()
```

##### `ResetWrite` <a name="ResetWrite" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.resetWrite"></a>

```go
func ResetWrite()
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

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v12/containerregistrydockercredentials"

containerregistrydockercredentials.ContainerRegistryDockerCredentials_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v12/containerregistrydockercredentials"

containerregistrydockercredentials.ContainerRegistryDockerCredentials_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v12/containerregistrydockercredentials"

containerregistrydockercredentials.ContainerRegistryDockerCredentials_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v12/containerregistrydockercredentials"

containerregistrydockercredentials.ContainerRegistryDockerCredentials_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerRegistryDockerCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerRegistryDockerCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerRegistryDockerCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/container_registry_docker_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryDockerCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.credentialExpirationTime">CredentialExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dockerCredentials">DockerCredentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySecondsInput">ExpirySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryNameInput">RegistryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.writeInput">WriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySeconds">ExpirySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryName">RegistryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.write">Write</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CredentialExpirationTime`<sup>Required</sup> <a name="CredentialExpirationTime" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.credentialExpirationTime"></a>

```go
func CredentialExpirationTime() *string
```

- *Type:* *string

---

##### `DockerCredentials`<sup>Required</sup> <a name="DockerCredentials" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.dockerCredentials"></a>

```go
func DockerCredentials() *string
```

- *Type:* *string

---

##### `ExpirySecondsInput`<sup>Optional</sup> <a name="ExpirySecondsInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySecondsInput"></a>

```go
func ExpirySecondsInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegistryNameInput`<sup>Optional</sup> <a name="RegistryNameInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryNameInput"></a>

```go
func RegistryNameInput() *string
```

- *Type:* *string

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.writeInput"></a>

```go
func WriteInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirySeconds`<sup>Required</sup> <a name="ExpirySeconds" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.expirySeconds"></a>

```go
func ExpirySeconds() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.registryName"></a>

```go
func RegistryName() *string
```

- *Type:* *string

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.write"></a>

```go
func Write() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentials.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryDockerCredentialsConfig <a name="ContainerRegistryDockerCredentialsConfig" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v12/containerregistrydockercredentials"

&containerregistrydockercredentials.ContainerRegistryDockerCredentialsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RegistryName: *string,
	ExpirySeconds: *f64,
	Id: *string,
	Write: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.registryName">RegistryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/container_registry_docker_credentials#registry_name ContainerRegistryDockerCredentials#registry_name}. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.expirySeconds">ExpirySeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/container_registry_docker_credentials#expiry_seconds ContainerRegistryDockerCredentials#expiry_seconds}. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/container_registry_docker_credentials#id ContainerRegistryDockerCredentials#id}. |
| <code><a href="#@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.write">Write</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/container_registry_docker_credentials#write ContainerRegistryDockerCredentials#write}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.registryName"></a>

```go
RegistryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/container_registry_docker_credentials#registry_name ContainerRegistryDockerCredentials#registry_name}.

---

##### `ExpirySeconds`<sup>Optional</sup> <a name="ExpirySeconds" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.expirySeconds"></a>

```go
ExpirySeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/container_registry_docker_credentials#expiry_seconds ContainerRegistryDockerCredentials#expiry_seconds}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/container_registry_docker_credentials#id ContainerRegistryDockerCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Write`<sup>Optional</sup> <a name="Write" id="@cdktf/provider-digitalocean.containerRegistryDockerCredentials.ContainerRegistryDockerCredentialsConfig.property.write"></a>

```go
Write interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.55.0/docs/resources/container_registry_docker_credentials#write ContainerRegistryDockerCredentials#write}.

---



