# `dataDigitaloceanGenaiKnowledgeBaseDataSources` Submodule <a name="`dataDigitaloceanGenaiKnowledgeBaseDataSources` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiKnowledgeBaseDataSources <a name="DataDigitaloceanGenaiKnowledgeBaseDataSources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base_data_sources digitalocean_genai_knowledge_base_data_sources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.NewDataDigitaloceanGenaiKnowledgeBaseDataSources(scope Construct, id *string, config DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig) DataDigitaloceanGenaiKnowledgeBaseDataSources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig">DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig">DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBaseDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.DataDigitaloceanGenaiKnowledgeBaseDataSources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.DataDigitaloceanGenaiKnowledgeBaseDataSources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.DataDigitaloceanGenaiKnowledgeBaseDataSources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.DataDigitaloceanGenaiKnowledgeBaseDataSources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBaseDataSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanGenaiKnowledgeBaseDataSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanGenaiKnowledgeBaseDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiKnowledgeBaseDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.datasources">Datasources</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuidInput">KnowledgeBaseUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Datasources`<sup>Required</sup> <a name="Datasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.datasources"></a>

```go
func Datasources() DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KnowledgeBaseUuidInput`<sup>Optional</sup> <a name="KnowledgeBaseUuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuidInput"></a>

```go
func KnowledgeBaseUuidInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.knowledgeBaseUuid"></a>

```go
func KnowledgeBaseUuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

&datadigitaloceangenaiknowledgebasedatasources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KnowledgeBaseUuid: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>*string</code> | UUID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base_data_sources#id DataDigitaloceanGenaiKnowledgeBaseDataSources#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.knowledgeBaseUuid"></a>

```go
KnowledgeBaseUuid *string
```

- *Type:* *string

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base_data_sources#knowledge_base_uuid DataDigitaloceanGenaiKnowledgeBaseDataSources#knowledge_base_uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.62.0/docs/data-sources/genai_knowledge_base_data_sources#id DataDigitaloceanGenaiKnowledgeBaseDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

&datadigitaloceangenaiknowledgebasedatasources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources {

}
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

&datadigitaloceangenaiknowledgebasedatasources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource {

}
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

&datadigitaloceangenaiknowledgebasedatasources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob {

}
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

&datadigitaloceangenaiknowledgebasedatasources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource {

}
```


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

&datadigitaloceangenaiknowledgebasedatasources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.NewDataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.NewDataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.originalFileName">OriginalFileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes">SizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey">StoredObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OriginalFileName`<sup>Required</sup> <a name="OriginalFileName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.originalFileName"></a>

```go
func OriginalFileName() *string
```

- *Type:* *string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.sizeInBytes"></a>

```go
func SizeInBytes() *string
```

- *Type:* *string

---

##### `StoredObjectKey`<sup>Required</sup> <a name="StoredObjectKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.storedObjectKey"></a>

```go
func StoredObjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSource</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.NewDataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.NewDataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.completedDatasources">CompletedDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids">DataSourceUuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.finishedAt">FinishedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.phase">Phase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.startedAt">StartedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.totalDatasources">TotalDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompletedDatasources`<sup>Required</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.completedDatasources"></a>

```go
func CompletedDatasources() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataSourceUuids`<sup>Required</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```go
func DataSourceUuids() *[]*string
```

- *Type:* *[]*string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.finishedAt"></a>

```go
func FinishedAt() *string
```

- *Type:* *string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```go
func KnowledgeBaseUuid() *string
```

- *Type:* *string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.phase"></a>

```go
func Phase() *string
```

- *Type:* *string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.startedAt"></a>

```go
func StartedAt() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `TotalDatasources`<sup>Required</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.totalDatasources"></a>

```go
func TotalDatasources() *f64
```

- *Type:* *f64

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJob</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.NewDataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.NewDataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fileUploadDataSource">FileUploadDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.lastIndexingJob">LastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.spacesDataSource">SpacesDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.webCrawlerDataSource">WebCrawlerDataSource</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FileUploadDataSource`<sup>Required</sup> <a name="FileUploadDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.fileUploadDataSource"></a>

```go
func FileUploadDataSource() DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesFileUploadDataSourceList</a>

---

##### `LastIndexingJob`<sup>Required</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.lastIndexingJob"></a>

```go
func LastIndexingJob() DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesLastIndexingJobList</a>

---

##### `SpacesDataSource`<sup>Required</sup> <a name="SpacesDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.spacesDataSource"></a>

```go
func SpacesDataSource() DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `WebCrawlerDataSource`<sup>Required</sup> <a name="WebCrawlerDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.webCrawlerDataSource"></a>

```go
func WebCrawlerDataSource() DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasources</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.NewDataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.NewDataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.itemPath">ItemPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `ItemPath`<sup>Required</sup> <a name="ItemPath" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.itemPath"></a>

```go
func ItemPath() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesSpacesDataSource</a>

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.NewDataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebasedatasources"

datadigitaloceangenaiknowledgebasedatasources.NewDataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption">CrawlingOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia">EmbedMedia</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `CrawlingOption`<sup>Required</sup> <a name="CrawlingOption" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.crawlingOption"></a>

```go
func CrawlingOption() *string
```

- *Type:* *string

---

##### `EmbedMedia`<sup>Required</sup> <a name="EmbedMedia" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.embedMedia"></a>

```go
func EmbedMedia() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBaseDataSources.DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource">DataDigitaloceanGenaiKnowledgeBaseDataSourcesDatasourcesWebCrawlerDataSource</a>

---



