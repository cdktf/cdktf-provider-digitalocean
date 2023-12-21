# `dataDigitaloceanDatabaseUser` Submodule <a name="`dataDigitaloceanDatabaseUser` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanDatabaseUser <a name="DataDigitaloceanDatabaseUser" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/data-sources/database_user digitalocean_database_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

datadigitaloceandatabaseuser.NewDataDigitaloceanDatabaseUser(scope Construct, id *string, config DataDigitaloceanDatabaseUserConfig) DataDigitaloceanDatabaseUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig">DataDigitaloceanDatabaseUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig">DataDigitaloceanDatabaseUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanDatabaseUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

datadigitaloceandatabaseuser.DataDigitaloceanDatabaseUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

datadigitaloceandatabaseuser.DataDigitaloceanDatabaseUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

datadigitaloceandatabaseuser.DataDigitaloceanDatabaseUser_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

datadigitaloceandatabaseuser.DataDigitaloceanDatabaseUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanDatabaseUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanDatabaseUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanDatabaseUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/data-sources/database_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanDatabaseUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.mysqlAuthPlugin">MysqlAuthPlugin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList">DataDigitaloceanDatabaseUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `MysqlAuthPlugin`<sup>Required</sup> <a name="MysqlAuthPlugin" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.mysqlAuthPlugin"></a>

```go
func MysqlAuthPlugin() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.settings"></a>

```go
func Settings() DataDigitaloceanDatabaseUserSettingsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList">DataDigitaloceanDatabaseUserSettingsList</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanDatabaseUserConfig <a name="DataDigitaloceanDatabaseUserConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

&datadigitaloceandatabaseuser.DataDigitaloceanDatabaseUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/data-sources/database_user#cluster_id DataDigitaloceanDatabaseUser#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/data-sources/database_user#name DataDigitaloceanDatabaseUser#name}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/data-sources/database_user#id DataDigitaloceanDatabaseUser#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/data-sources/database_user#cluster_id DataDigitaloceanDatabaseUser#cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/data-sources/database_user#name DataDigitaloceanDatabaseUser#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.34.1/docs/data-sources/database_user#id DataDigitaloceanDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanDatabaseUserSettings <a name="DataDigitaloceanDatabaseUserSettings" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

&datadigitaloceandatabaseuser.DataDigitaloceanDatabaseUserSettings {

}
```


### DataDigitaloceanDatabaseUserSettingsAcl <a name="DataDigitaloceanDatabaseUserSettingsAcl" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAcl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAcl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

&datadigitaloceandatabaseuser.DataDigitaloceanDatabaseUserSettingsAcl {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanDatabaseUserSettingsAclList <a name="DataDigitaloceanDatabaseUserSettingsAclList" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

datadigitaloceandatabaseuser.NewDataDigitaloceanDatabaseUserSettingsAclList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanDatabaseUserSettingsAclList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.get"></a>

```go
func Get(index *f64) DataDigitaloceanDatabaseUserSettingsAclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanDatabaseUserSettingsAclOutputReference <a name="DataDigitaloceanDatabaseUserSettingsAclOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

datadigitaloceandatabaseuser.NewDataDigitaloceanDatabaseUserSettingsAclOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanDatabaseUserSettingsAclOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAcl">DataDigitaloceanDatabaseUserSettingsAcl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanDatabaseUserSettingsAcl
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAcl">DataDigitaloceanDatabaseUserSettingsAcl</a>

---


### DataDigitaloceanDatabaseUserSettingsList <a name="DataDigitaloceanDatabaseUserSettingsList" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

datadigitaloceandatabaseuser.NewDataDigitaloceanDatabaseUserSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanDatabaseUserSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.get"></a>

```go
func Get(index *f64) DataDigitaloceanDatabaseUserSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanDatabaseUserSettingsOutputReference <a name="DataDigitaloceanDatabaseUserSettingsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceandatabaseuser"

datadigitaloceandatabaseuser.NewDataDigitaloceanDatabaseUserSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanDatabaseUserSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.property.acl">Acl</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList">DataDigitaloceanDatabaseUserSettingsAclList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettings">DataDigitaloceanDatabaseUserSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.property.acl"></a>

```go
func Acl() DataDigitaloceanDatabaseUserSettingsAclList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsAclList">DataDigitaloceanDatabaseUserSettingsAclList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanDatabaseUserSettings
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDatabaseUser.DataDigitaloceanDatabaseUserSettings">DataDigitaloceanDatabaseUserSettings</a>

---



