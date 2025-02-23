# `dataDigitaloceanReservedIpv6` Submodule <a name="`dataDigitaloceanReservedIpv6` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanReservedIpv6 <a name="DataDigitaloceanReservedIpv6" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/reserved_ipv6 digitalocean_reserved_ipv6}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanreservedipv6"

datadigitaloceanreservedipv6.NewDataDigitaloceanReservedIpv6(scope Construct, id *string, config DataDigitaloceanReservedIpv6Config) DataDigitaloceanReservedIpv6
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config">DataDigitaloceanReservedIpv6Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config">DataDigitaloceanReservedIpv6Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanReservedIpv6 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanreservedipv6"

datadigitaloceanreservedipv6.DataDigitaloceanReservedIpv6_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanreservedipv6"

datadigitaloceanreservedipv6.DataDigitaloceanReservedIpv6_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanreservedipv6"

datadigitaloceanreservedipv6.DataDigitaloceanReservedIpv6_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanreservedipv6"

datadigitaloceanreservedipv6.DataDigitaloceanReservedIpv6_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanReservedIpv6 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanReservedIpv6 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanReservedIpv6 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/reserved_ipv6#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanReservedIpv6 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.dropletId">DropletId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.regionSlug">RegionSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.urn">Urn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DropletId`<sup>Required</sup> <a name="DropletId" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.dropletId"></a>

```go
func DropletId() *f64
```

- *Type:* *f64

---

##### `RegionSlug`<sup>Required</sup> <a name="RegionSlug" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.regionSlug"></a>

```go
func RegionSlug() *string
```

- *Type:* *string

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.urn"></a>

```go
func Urn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanReservedIpv6Config <a name="DataDigitaloceanReservedIpv6Config" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/datadigitaloceanreservedipv6"

&datadigitaloceanreservedipv6.DataDigitaloceanReservedIpv6Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Ip: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.ip">Ip</a></code> | <code>*string</code> | reserved ipv6 address. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/reserved_ipv6#id DataDigitaloceanReservedIpv6#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

reserved ipv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/reserved_ipv6#ip DataDigitaloceanReservedIpv6#ip}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanReservedIpv6.DataDigitaloceanReservedIpv6Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.0/docs/data-sources/reserved_ipv6#id DataDigitaloceanReservedIpv6#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



