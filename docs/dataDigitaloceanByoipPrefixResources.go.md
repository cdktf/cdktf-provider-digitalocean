# `dataDigitaloceanByoipPrefixResources` Submodule <a name="`dataDigitaloceanByoipPrefixResources` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanByoipPrefixResources <a name="DataDigitaloceanByoipPrefixResources" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources digitalocean_byoip_prefix_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanbyoipprefixresources"

datadigitaloceanbyoipprefixresources.NewDataDigitaloceanByoipPrefixResources(scope Construct, id *string, config DataDigitaloceanByoipPrefixResourcesConfig) DataDigitaloceanByoipPrefixResources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig">DataDigitaloceanByoipPrefixResourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig">DataDigitaloceanByoipPrefixResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanByoipPrefixResources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanbyoipprefixresources"

datadigitaloceanbyoipprefixresources.DataDigitaloceanByoipPrefixResources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanbyoipprefixresources"

datadigitaloceanbyoipprefixresources.DataDigitaloceanByoipPrefixResources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanbyoipprefixresources"

datadigitaloceanbyoipprefixresources.DataDigitaloceanByoipPrefixResources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanbyoipprefixresources"

datadigitaloceanbyoipprefixresources.DataDigitaloceanByoipPrefixResources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanByoipPrefixResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanByoipPrefixResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanByoipPrefixResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanByoipPrefixResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.addresses">Addresses</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList">DataDigitaloceanByoipPrefixResourcesAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuidInput">ByoipPrefixUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuid">ByoipPrefixUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.addresses"></a>

```go
func Addresses() DataDigitaloceanByoipPrefixResourcesAddressesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList">DataDigitaloceanByoipPrefixResourcesAddressesList</a>

---

##### `ByoipPrefixUuidInput`<sup>Optional</sup> <a name="ByoipPrefixUuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuidInput"></a>

```go
func ByoipPrefixUuidInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ByoipPrefixUuid`<sup>Required</sup> <a name="ByoipPrefixUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.byoipPrefixUuid"></a>

```go
func ByoipPrefixUuid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanByoipPrefixResourcesAddresses <a name="DataDigitaloceanByoipPrefixResourcesAddresses" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanbyoipprefixresources"

&datadigitaloceanbyoipprefixresources.DataDigitaloceanByoipPrefixResourcesAddresses {

}
```


### DataDigitaloceanByoipPrefixResourcesConfig <a name="DataDigitaloceanByoipPrefixResourcesConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanbyoipprefixresources"

&datadigitaloceanbyoipprefixresources.DataDigitaloceanByoipPrefixResourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ByoipPrefixUuid: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.byoipPrefixUuid">ByoipPrefixUuid</a></code> | <code>*string</code> | UUID of the BYOIP prefix to list assigned addresses from. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#id DataDigitaloceanByoipPrefixResources#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ByoipPrefixUuid`<sup>Required</sup> <a name="ByoipPrefixUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.byoipPrefixUuid"></a>

```go
ByoipPrefixUuid *string
```

- *Type:* *string

UUID of the BYOIP prefix to list assigned addresses from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#byoip_prefix_uuid DataDigitaloceanByoipPrefixResources#byoip_prefix_uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/byoip_prefix_resources#id DataDigitaloceanByoipPrefixResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanByoipPrefixResourcesAddressesList <a name="DataDigitaloceanByoipPrefixResourcesAddressesList" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanbyoipprefixresources"

datadigitaloceanbyoipprefixresources.NewDataDigitaloceanByoipPrefixResourcesAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanByoipPrefixResourcesAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.get"></a>

```go
func Get(index *f64) DataDigitaloceanByoipPrefixResourcesAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanByoipPrefixResourcesAddressesOutputReference <a name="DataDigitaloceanByoipPrefixResourcesAddressesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanbyoipprefixresources"

datadigitaloceanbyoipprefixresources.NewDataDigitaloceanByoipPrefixResourcesAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanByoipPrefixResourcesAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.assignedAt">AssignedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses">DataDigitaloceanByoipPrefixResourcesAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssignedAt`<sup>Required</sup> <a name="AssignedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.assignedAt"></a>

```go
func AssignedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanByoipPrefixResourcesAddresses
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanByoipPrefixResources.DataDigitaloceanByoipPrefixResourcesAddresses">DataDigitaloceanByoipPrefixResourcesAddresses</a>

---



