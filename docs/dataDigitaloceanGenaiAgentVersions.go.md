# `dataDigitaloceanGenaiAgentVersions` Submodule <a name="`dataDigitaloceanGenaiAgentVersions` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiAgentVersions <a name="DataDigitaloceanGenaiAgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions digitalocean_genai_agent_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersions(scope Construct, id *string, config DataDigitaloceanGenaiAgentVersionsConfig) DataDigitaloceanGenaiAgentVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig">DataDigitaloceanGenaiAgentVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig">DataDigitaloceanGenaiAgentVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort">PutSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetSort">ResetSort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSort` <a name="PutSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort"></a>

```go
func PutSort(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.putSort.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetId"></a>

```go
func ResetId()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.resetSort"></a>

```go
func ResetSort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiAgentVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanGenaiAgentVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanGenaiAgentVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanGenaiAgentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiAgentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentVersions">AgentVersions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList">DataDigitaloceanGenaiAgentVersionsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sort">Sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList">DataDigitaloceanGenaiAgentVersionsSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentIdInput">AgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sortInput">SortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AgentVersions`<sup>Required</sup> <a name="AgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentVersions"></a>

```go
func AgentVersions() DataDigitaloceanGenaiAgentVersionsAgentVersionsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filter"></a>

```go
func Filter() DataDigitaloceanGenaiAgentVersionsFilterList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList">DataDigitaloceanGenaiAgentVersionsFilterList</a>

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sort"></a>

```go
func Sort() DataDigitaloceanGenaiAgentVersionsSortList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList">DataDigitaloceanGenaiAgentVersionsSortList</a>

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentIdInput"></a>

```go
func AgentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.sortInput"></a>

```go
func SortInput() interface{}
```

- *Type:* interface{}

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiAgentVersionsAgentVersions <a name="DataDigitaloceanGenaiAgentVersionsAgentVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

&datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersionsAgentVersions {

}
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

&datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents {

}
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

&datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions {

}
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

&datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails {

}
```


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

&datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases {

}
```


### DataDigitaloceanGenaiAgentVersionsConfig <a name="DataDigitaloceanGenaiAgentVersionsConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

&datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgentId: *string,
	Filter: interface{},
	Id: *string,
	Sort: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.agentId">AgentId</a></code> | <code>*string</code> | The ID of the agent to fetch versions for. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.sort">Sort</a></code> | <code>interface{}</code> | sort block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.agentId"></a>

```go
AgentId *string
```

- *Type:* *string

The ID of the agent to fetch versions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#agent_id DataDigitaloceanGenaiAgentVersions#agent_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#filter DataDigitaloceanGenaiAgentVersions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#id DataDigitaloceanGenaiAgentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsConfig.property.sort"></a>

```go
Sort interface{}
```

- *Type:* interface{}

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#sort DataDigitaloceanGenaiAgentVersions#sort}

---

### DataDigitaloceanGenaiAgentVersionsFilter <a name="DataDigitaloceanGenaiAgentVersionsFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

&datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersionsFilter {
	Key: *string,
	Values: *[]*string,
	All: interface{},
	MatchBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#values DataDigitaloceanGenaiAgentVersions#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.all">All</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#all DataDigitaloceanGenaiAgentVersions#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.matchBy">MatchBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#match_by DataDigitaloceanGenaiAgentVersions#match_by}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#values DataDigitaloceanGenaiAgentVersions#values}.

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.all"></a>

```go
All interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#all DataDigitaloceanGenaiAgentVersions#all}.

---

##### `MatchBy`<sup>Optional</sup> <a name="MatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilter.property.matchBy"></a>

```go
MatchBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#match_by DataDigitaloceanGenaiAgentVersions#match_by}.

---

### DataDigitaloceanGenaiAgentVersionsSort <a name="DataDigitaloceanGenaiAgentVersionsSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

&datadigitaloceangenaiagentversions.DataDigitaloceanGenaiAgentVersionsSort {
	Key: *string,
	Direction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.direction">Direction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#direction DataDigitaloceanGenaiAgentVersions#direction}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#key DataDigitaloceanGenaiAgentVersions#key}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSort.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_agent_versions#direction DataDigitaloceanGenaiAgentVersions#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.agentName">AgentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.childAgentUuid">ChildAgentUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.ifCase">IfCase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.isDeleted">IsDeleted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.routeName">RouteName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.agentName"></a>

```go
func AgentName() *string
```

- *Type:* *string

---

##### `ChildAgentUuid`<sup>Required</sup> <a name="ChildAgentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.childAgentUuid"></a>

```go
func ChildAgentUuid() *string
```

- *Type:* *string

---

##### `IfCase`<sup>Required</sup> <a name="IfCase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.ifCase"></a>

```go
func IfCase() *string
```

- *Type:* *string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.isDeleted"></a>

```go
func IsDeleted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RouteName`<sup>Required</sup> <a name="RouteName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.routeName"></a>

```go
func RouteName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgents</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasName">FaasName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasNamespace">FaasNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.isDeleted">IsDeleted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FaasName`<sup>Required</sup> <a name="FaasName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasName"></a>

```go
func FaasName() *string
```

- *Type:* *string

---

##### `FaasNamespace`<sup>Required</sup> <a name="FaasNamespace" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.faasNamespace"></a>

```go
func FaasNamespace() *string
```

- *Type:* *string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.isDeleted"></a>

```go
func IsDeleted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctions</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.isDeleted">IsDeleted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.isDeleted"></a>

```go
func IsDeleted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrails</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.isDeleted">IsDeleted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.isDeleted"></a>

```go
func IsDeleted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBases</a>

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsList <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsAgentVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiAgentVersionsAgentVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference <a name="DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.agentUuid">AgentUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedChildAgents">AttachedChildAgents</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedFunctions">AttachedFunctions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedGuardrails">AttachedGuardrails</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedKnowledgeBases">AttachedKnowledgeBases</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.canRollback">CanRollback</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdByEmail">CreatedByEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.currentlyApplied">CurrentlyApplied</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.instruction">Instruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.k">K</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.provideCitations">ProvideCitations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.retrievalMethod">RetrievalMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.triggerAction">TriggerAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.versionHash">VersionHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions">DataDigitaloceanGenaiAgentVersionsAgentVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentUuid`<sup>Required</sup> <a name="AgentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.agentUuid"></a>

```go
func AgentUuid() *string
```

- *Type:* *string

---

##### `AttachedChildAgents`<sup>Required</sup> <a name="AttachedChildAgents" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedChildAgents"></a>

```go
func AttachedChildAgents() DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedChildAgentsList</a>

---

##### `AttachedFunctions`<sup>Required</sup> <a name="AttachedFunctions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedFunctions"></a>

```go
func AttachedFunctions() DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedFunctionsList</a>

---

##### `AttachedGuardrails`<sup>Required</sup> <a name="AttachedGuardrails" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedGuardrails"></a>

```go
func AttachedGuardrails() DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedGuardrailsList</a>

---

##### `AttachedKnowledgeBases`<sup>Required</sup> <a name="AttachedKnowledgeBases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.attachedKnowledgeBases"></a>

```go
func AttachedKnowledgeBases() DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList">DataDigitaloceanGenaiAgentVersionsAgentVersionsAttachedKnowledgeBasesList</a>

---

##### `CanRollback`<sup>Required</sup> <a name="CanRollback" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.canRollback"></a>

```go
func CanRollback() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedByEmail`<sup>Required</sup> <a name="CreatedByEmail" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.createdByEmail"></a>

```go
func CreatedByEmail() *string
```

- *Type:* *string

---

##### `CurrentlyApplied`<sup>Required</sup> <a name="CurrentlyApplied" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.currentlyApplied"></a>

```go
func CurrentlyApplied() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.instruction"></a>

```go
func Instruction() *string
```

- *Type:* *string

---

##### `K`<sup>Required</sup> <a name="K" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.k"></a>

```go
func K() *f64
```

- *Type:* *f64

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProvideCitations`<sup>Required</sup> <a name="ProvideCitations" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.provideCitations"></a>

```go
func ProvideCitations() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RetrievalMethod`<sup>Required</sup> <a name="RetrievalMethod" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.retrievalMethod"></a>

```go
func RetrievalMethod() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `TriggerAction`<sup>Required</sup> <a name="TriggerAction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.triggerAction"></a>

```go
func TriggerAction() *string
```

- *Type:* *string

---

##### `VersionHash`<sup>Required</sup> <a name="VersionHash" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.versionHash"></a>

```go
func VersionHash() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiAgentVersionsAgentVersions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsAgentVersions">DataDigitaloceanGenaiAgentVersionsAgentVersions</a>

---


### DataDigitaloceanGenaiAgentVersionsFilterList <a name="DataDigitaloceanGenaiAgentVersionsFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiAgentVersionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiAgentVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDigitaloceanGenaiAgentVersionsFilterOutputReference <a name="DataDigitaloceanGenaiAgentVersionsFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiAgentVersionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetMatchBy">ResetMatchBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetAll"></a>

```go
func ResetAll()
```

##### `ResetMatchBy` <a name="ResetMatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.resetMatchBy"></a>

```go
func ResetMatchBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.allInput">AllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchByInput">MatchByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.all">All</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchBy">MatchBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.allInput"></a>

```go
func AllInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchByInput`<sup>Optional</sup> <a name="MatchByInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchByInput"></a>

```go
func MatchByInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.all"></a>

```go
func All() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchBy`<sup>Required</sup> <a name="MatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.matchBy"></a>

```go
func MatchBy() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDigitaloceanGenaiAgentVersionsSortList <a name="DataDigitaloceanGenaiAgentVersionsSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsSortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiAgentVersionsSortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiAgentVersionsSortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDigitaloceanGenaiAgentVersionsSortOutputReference <a name="DataDigitaloceanGenaiAgentVersionsSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiagentversions"

datadigitaloceangenaiagentversions.NewDataDigitaloceanGenaiAgentVersionsSortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiAgentVersionsSortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.resetDirection"></a>

```go
func ResetDirection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiAgentVersions.DataDigitaloceanGenaiAgentVersionsSortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



