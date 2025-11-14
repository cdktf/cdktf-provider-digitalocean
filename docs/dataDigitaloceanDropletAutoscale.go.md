# `dataDigitaloceanDropletAutoscale` Submodule <a name="`dataDigitaloceanDropletAutoscale` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanDropletAutoscale <a name="DataDigitaloceanDropletAutoscale" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/droplet_autoscale digitalocean_droplet_autoscale}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

datadigitaloceandropletautoscale.NewDataDigitaloceanDropletAutoscale(scope Construct, id *string, config DataDigitaloceanDropletAutoscaleConfig) DataDigitaloceanDropletAutoscale
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig">DataDigitaloceanDropletAutoscaleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig">DataDigitaloceanDropletAutoscaleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanDropletAutoscale resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

datadigitaloceandropletautoscale.DataDigitaloceanDropletAutoscale_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

datadigitaloceandropletautoscale.DataDigitaloceanDropletAutoscale_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

datadigitaloceandropletautoscale.DataDigitaloceanDropletAutoscale_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

datadigitaloceandropletautoscale.DataDigitaloceanDropletAutoscale_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanDropletAutoscale resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanDropletAutoscale to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanDropletAutoscale that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/droplet_autoscale#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanDropletAutoscale to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList">DataDigitaloceanDropletAutoscaleConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.currentUtilization">CurrentUtilization</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList">DataDigitaloceanDropletAutoscaleCurrentUtilizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dropletTemplate">DropletTemplate</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList">DataDigitaloceanDropletAutoscaleDropletTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.config"></a>

```go
func Config() DataDigitaloceanDropletAutoscaleConfigAList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList">DataDigitaloceanDropletAutoscaleConfigAList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CurrentUtilization`<sup>Required</sup> <a name="CurrentUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.currentUtilization"></a>

```go
func CurrentUtilization() DataDigitaloceanDropletAutoscaleCurrentUtilizationList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList">DataDigitaloceanDropletAutoscaleCurrentUtilizationList</a>

---

##### `DropletTemplate`<sup>Required</sup> <a name="DropletTemplate" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.dropletTemplate"></a>

```go
func DropletTemplate() DataDigitaloceanDropletAutoscaleDropletTemplateList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList">DataDigitaloceanDropletAutoscaleDropletTemplateList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscale.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanDropletAutoscaleConfig <a name="DataDigitaloceanDropletAutoscaleConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

&datadigitaloceandropletautoscale.DataDigitaloceanDropletAutoscaleConfig {
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
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.id">Id</a></code> | <code>*string</code> | ID of the Droplet autoscale pool. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Droplet autoscale pool. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/droplet_autoscale#id DataDigitaloceanDropletAutoscale#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Droplet autoscale pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/droplet_autoscale#name DataDigitaloceanDropletAutoscale#name}

---

### DataDigitaloceanDropletAutoscaleConfigA <a name="DataDigitaloceanDropletAutoscaleConfigA" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

&datadigitaloceandropletautoscale.DataDigitaloceanDropletAutoscaleConfigA {

}
```


### DataDigitaloceanDropletAutoscaleCurrentUtilization <a name="DataDigitaloceanDropletAutoscaleCurrentUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

&datadigitaloceandropletautoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization {

}
```


### DataDigitaloceanDropletAutoscaleDropletTemplate <a name="DataDigitaloceanDropletAutoscaleDropletTemplate" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

&datadigitaloceandropletautoscale.DataDigitaloceanDropletAutoscaleDropletTemplate {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanDropletAutoscaleConfigAList <a name="DataDigitaloceanDropletAutoscaleConfigAList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

datadigitaloceandropletautoscale.NewDataDigitaloceanDropletAutoscaleConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanDropletAutoscaleConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get"></a>

```go
func Get(index *f64) DataDigitaloceanDropletAutoscaleConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanDropletAutoscaleConfigAOutputReference <a name="DataDigitaloceanDropletAutoscaleConfigAOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

datadigitaloceandropletautoscale.NewDataDigitaloceanDropletAutoscaleConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanDropletAutoscaleConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.cooldownMinutes">CooldownMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.minInstances">MinInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetCpuUtilization">TargetCpuUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization">TargetMemoryUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetNumberInstances">TargetNumberInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA">DataDigitaloceanDropletAutoscaleConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CooldownMinutes`<sup>Required</sup> <a name="CooldownMinutes" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.cooldownMinutes"></a>

```go
func CooldownMinutes() *f64
```

- *Type:* *f64

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.minInstances"></a>

```go
func MinInstances() *f64
```

- *Type:* *f64

---

##### `TargetCpuUtilization`<sup>Required</sup> <a name="TargetCpuUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetCpuUtilization"></a>

```go
func TargetCpuUtilization() *f64
```

- *Type:* *f64

---

##### `TargetMemoryUtilization`<sup>Required</sup> <a name="TargetMemoryUtilization" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetMemoryUtilization"></a>

```go
func TargetMemoryUtilization() *f64
```

- *Type:* *f64

---

##### `TargetNumberInstances`<sup>Required</sup> <a name="TargetNumberInstances" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.targetNumberInstances"></a>

```go
func TargetNumberInstances() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanDropletAutoscaleConfigA
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleConfigA">DataDigitaloceanDropletAutoscaleConfigA</a>

---


### DataDigitaloceanDropletAutoscaleCurrentUtilizationList <a name="DataDigitaloceanDropletAutoscaleCurrentUtilizationList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

datadigitaloceandropletautoscale.NewDataDigitaloceanDropletAutoscaleCurrentUtilizationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanDropletAutoscaleCurrentUtilizationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get"></a>

```go
func Get(index *f64) DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference <a name="DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

datadigitaloceandropletautoscale.NewDataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization">DataDigitaloceanDropletAutoscaleCurrentUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanDropletAutoscaleCurrentUtilization
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleCurrentUtilization">DataDigitaloceanDropletAutoscaleCurrentUtilization</a>

---


### DataDigitaloceanDropletAutoscaleDropletTemplateList <a name="DataDigitaloceanDropletAutoscaleDropletTemplateList" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

datadigitaloceandropletautoscale.NewDataDigitaloceanDropletAutoscaleDropletTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanDropletAutoscaleDropletTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get"></a>

```go
func Get(index *f64) DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference <a name="DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceandropletautoscale"

datadigitaloceandropletautoscale.NewDataDigitaloceanDropletAutoscaleDropletTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.ipv6">Ipv6</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.size">Size</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.vpcUuid">VpcUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent">WithDropletAgent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate">DataDigitaloceanDropletAutoscaleDropletTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.ipv6"></a>

```go
func Ipv6() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `VpcUuid`<sup>Required</sup> <a name="VpcUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.vpcUuid"></a>

```go
func VpcUuid() *string
```

- *Type:* *string

---

##### `WithDropletAgent`<sup>Required</sup> <a name="WithDropletAgent" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.withDropletAgent"></a>

```go
func WithDropletAgent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanDropletAutoscaleDropletTemplate
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanDropletAutoscale.DataDigitaloceanDropletAutoscaleDropletTemplate">DataDigitaloceanDropletAutoscaleDropletTemplate</a>

---



