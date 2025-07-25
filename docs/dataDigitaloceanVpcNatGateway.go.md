# `dataDigitaloceanVpcNatGateway` Submodule <a name="`dataDigitaloceanVpcNatGateway` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanVpcNatGateway <a name="DataDigitaloceanVpcNatGateway" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/vpc_nat_gateway digitalocean_vpc_nat_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

datadigitaloceanvpcnatgateway.NewDataDigitaloceanVpcNatGateway(scope Construct, id *string, config DataDigitaloceanVpcNatGatewayConfig) DataDigitaloceanVpcNatGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig">DataDigitaloceanVpcNatGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig">DataDigitaloceanVpcNatGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanVpcNatGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

datadigitaloceanvpcnatgateway.DataDigitaloceanVpcNatGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

datadigitaloceanvpcnatgateway.DataDigitaloceanVpcNatGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

datadigitaloceanvpcnatgateway.DataDigitaloceanVpcNatGateway_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

datadigitaloceanvpcnatgateway.DataDigitaloceanVpcNatGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanVpcNatGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanVpcNatGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanVpcNatGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/vpc_nat_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanVpcNatGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.egresses">Egresses</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList">DataDigitaloceanVpcNatGatewayEgressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.icmpTimeoutSeconds">IcmpTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tcpTimeoutSeconds">TcpTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.udpTimeoutSeconds">UdpTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.vpcs">Vpcs</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList">DataDigitaloceanVpcNatGatewayVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Egresses`<sup>Required</sup> <a name="Egresses" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.egresses"></a>

```go
func Egresses() DataDigitaloceanVpcNatGatewayEgressesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList">DataDigitaloceanVpcNatGatewayEgressesList</a>

---

##### `IcmpTimeoutSeconds`<sup>Required</sup> <a name="IcmpTimeoutSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.icmpTimeoutSeconds"></a>

```go
func IcmpTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TcpTimeoutSeconds`<sup>Required</sup> <a name="TcpTimeoutSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tcpTimeoutSeconds"></a>

```go
func TcpTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UdpTimeoutSeconds`<sup>Required</sup> <a name="UdpTimeoutSeconds" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.udpTimeoutSeconds"></a>

```go
func UdpTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Vpcs`<sup>Required</sup> <a name="Vpcs" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.vpcs"></a>

```go
func Vpcs() DataDigitaloceanVpcNatGatewayVpcsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList">DataDigitaloceanVpcNatGatewayVpcsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanVpcNatGatewayConfig <a name="DataDigitaloceanVpcNatGatewayConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

&datadigitaloceanvpcnatgateway.DataDigitaloceanVpcNatGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.id">Id</a></code> | <code>*string</code> | ID of the VPC NAT Gateway. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Name of the VPC NAT Gateway. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/vpc_nat_gateway#id DataDigitaloceanVpcNatGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the VPC NAT Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/vpc_nat_gateway#name DataDigitaloceanVpcNatGateway#name}

---

### DataDigitaloceanVpcNatGatewayEgresses <a name="DataDigitaloceanVpcNatGatewayEgresses" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

&datadigitaloceanvpcnatgateway.DataDigitaloceanVpcNatGatewayEgresses {

}
```


### DataDigitaloceanVpcNatGatewayEgressesPublicGateways <a name="DataDigitaloceanVpcNatGatewayEgressesPublicGateways" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

&datadigitaloceanvpcnatgateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways {

}
```


### DataDigitaloceanVpcNatGatewayVpcs <a name="DataDigitaloceanVpcNatGatewayVpcs" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

&datadigitaloceanvpcnatgateway.DataDigitaloceanVpcNatGatewayVpcs {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanVpcNatGatewayEgressesList <a name="DataDigitaloceanVpcNatGatewayEgressesList" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

datadigitaloceanvpcnatgateway.NewDataDigitaloceanVpcNatGatewayEgressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanVpcNatGatewayEgressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.get"></a>

```go
func Get(index *f64) DataDigitaloceanVpcNatGatewayEgressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanVpcNatGatewayEgressesOutputReference <a name="DataDigitaloceanVpcNatGatewayEgressesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

datadigitaloceanvpcnatgateway.NewDataDigitaloceanVpcNatGatewayEgressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanVpcNatGatewayEgressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.publicGateways">PublicGateways</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList">DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses">DataDigitaloceanVpcNatGatewayEgresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicGateways`<sup>Required</sup> <a name="PublicGateways" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.publicGateways"></a>

```go
func PublicGateways() DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList">DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanVpcNatGatewayEgresses
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgresses">DataDigitaloceanVpcNatGatewayEgresses</a>

---


### DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList <a name="DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

datadigitaloceanvpcnatgateway.NewDataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.get"></a>

```go
func Get(index *f64) DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference <a name="DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

datadigitaloceanvpcnatgateway.NewDataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4">Ipv4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways">DataDigitaloceanVpcNatGatewayEgressesPublicGateways</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.ipv4"></a>

```go
func Ipv4() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGatewaysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanVpcNatGatewayEgressesPublicGateways
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayEgressesPublicGateways">DataDigitaloceanVpcNatGatewayEgressesPublicGateways</a>

---


### DataDigitaloceanVpcNatGatewayVpcsList <a name="DataDigitaloceanVpcNatGatewayVpcsList" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

datadigitaloceanvpcnatgateway.NewDataDigitaloceanVpcNatGatewayVpcsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanVpcNatGatewayVpcsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.get"></a>

```go
func Get(index *f64) DataDigitaloceanVpcNatGatewayVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanVpcNatGatewayVpcsOutputReference <a name="DataDigitaloceanVpcNatGatewayVpcsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanvpcnatgateway"

datadigitaloceanvpcnatgateway.NewDataDigitaloceanVpcNatGatewayVpcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanVpcNatGatewayVpcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.defaultGateway">DefaultGateway</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.gatewayIp">GatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs">DataDigitaloceanVpcNatGatewayVpcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultGateway`<sup>Required</sup> <a name="DefaultGateway" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.defaultGateway"></a>

```go
func DefaultGateway() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `GatewayIp`<sup>Required</sup> <a name="GatewayIp" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.gatewayIp"></a>

```go
func GatewayIp() *string
```

- *Type:* *string

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.vpcUuid"></a>

```go
func VpcUuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanVpcNatGatewayVpcs
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanVpcNatGateway.DataDigitaloceanVpcNatGatewayVpcs">DataDigitaloceanVpcNatGatewayVpcs</a>

---



