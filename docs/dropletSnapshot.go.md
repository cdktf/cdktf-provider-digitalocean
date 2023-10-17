# `digitalocean_droplet_snapshot`

Refer to the Terraform Registory for docs: [`digitalocean_droplet_snapshot`](https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/droplet_snapshot).

# `dropletSnapshot` Submodule <a name="`dropletSnapshot` Submodule" id="@cdktf/provider-digitalocean.dropletSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DropletSnapshot <a name="DropletSnapshot" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/droplet_snapshot digitalocean_droplet_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v10/dropletsnapshot"

dropletsnapshot.NewDropletSnapshot(scope Construct, id *string, config DropletSnapshotConfig) DropletSnapshot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig">DropletSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig">DropletSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v10/dropletsnapshot"

dropletsnapshot.DropletSnapshot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v10/dropletsnapshot"

dropletsnapshot.DropletSnapshot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v10/dropletsnapshot"

dropletsnapshot.DropletSnapshot_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.minDiskSize">MinDiskSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.dropletIdInput">DropletIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.dropletId">DropletId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `MinDiskSize`<sup>Required</sup> <a name="MinDiskSize" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.minDiskSize"></a>

```go
func MinDiskSize() *f64
```

- *Type:* *f64

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `DropletIdInput`<sup>Optional</sup> <a name="DropletIdInput" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.dropletIdInput"></a>

```go
func DropletIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DropletId`<sup>Required</sup> <a name="DropletId" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.dropletId"></a>

```go
func DropletId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DropletSnapshotConfig <a name="DropletSnapshotConfig" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v10/dropletsnapshot"

&dropletsnapshot.DropletSnapshotConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DropletId: *string,
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.dropletId">DropletId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/droplet_snapshot#droplet_id DropletSnapshot#droplet_id}. |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/droplet_snapshot#name DropletSnapshot#name}. |
| <code><a href="#@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/droplet_snapshot#id DropletSnapshot#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DropletId`<sup>Required</sup> <a name="DropletId" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.dropletId"></a>

```go
DropletId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/droplet_snapshot#droplet_id DropletSnapshot#droplet_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/droplet_snapshot#name DropletSnapshot#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dropletSnapshot.DropletSnapshotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.30.0/docs/resources/droplet_snapshot#id DropletSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



