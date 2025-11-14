# `dataDigitaloceanGenaiKnowledgeBase` Submodule <a name="`dataDigitaloceanGenaiKnowledgeBase` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiKnowledgeBase <a name="DataDigitaloceanGenaiKnowledgeBase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base digitalocean_genai_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebase"

datadigitaloceangenaiknowledgebase.NewDataDigitaloceanGenaiKnowledgeBase(scope Construct, id *string, config DataDigitaloceanGenaiKnowledgeBaseConfig) DataDigitaloceanGenaiKnowledgeBase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig">DataDigitaloceanGenaiKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig">DataDigitaloceanGenaiKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob">PutLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetAddedToAgentAt">ResetAddedToAgentAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetEmbeddingModelUuid">ResetEmbeddingModelUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetIsPublic">ResetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetLastIndexingJob">ResetLastIndexingJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUserId">ResetUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLastIndexingJob` <a name="PutLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob"></a>

```go
func PutLastIndexingJob(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.putLastIndexingJob.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddedToAgentAt` <a name="ResetAddedToAgentAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetAddedToAgentAt"></a>

```go
func ResetAddedToAgentAt()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetDatabaseId"></a>

```go
func ResetDatabaseId()
```

##### `ResetEmbeddingModelUuid` <a name="ResetEmbeddingModelUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetEmbeddingModelUuid"></a>

```go
func ResetEmbeddingModelUuid()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetId"></a>

```go
func ResetId()
```

##### `ResetIsPublic` <a name="ResetIsPublic" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetIsPublic"></a>

```go
func ResetIsPublic()
```

##### `ResetLastIndexingJob` <a name="ResetLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetLastIndexingJob"></a>

```go
func ResetLastIndexingJob()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetName"></a>

```go
func ResetName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUserId"></a>

```go
func ResetUserId()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.resetUuid"></a>

```go
func ResetUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebase"

datadigitaloceangenaiknowledgebase.DataDigitaloceanGenaiKnowledgeBase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebase"

datadigitaloceangenaiknowledgebase.DataDigitaloceanGenaiKnowledgeBase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebase"

datadigitaloceangenaiknowledgebase.DataDigitaloceanGenaiKnowledgeBase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebase"

datadigitaloceangenaiknowledgebase.DataDigitaloceanGenaiKnowledgeBase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanGenaiKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanGenaiKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanGenaiKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJob">LastIndexingJob</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAtInput">AddedToAgentAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuidInput">EmbeddingModelUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublicInput">IsPublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJobInput">LastIndexingJobInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAt">AddedToAgentAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuid">EmbeddingModelUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublic">IsPublic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `LastIndexingJob`<sup>Required</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJob"></a>

```go
func LastIndexingJob() DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList">DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AddedToAgentAtInput`<sup>Optional</sup> <a name="AddedToAgentAtInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAtInput"></a>

```go
func AddedToAgentAtInput() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `EmbeddingModelUuidInput`<sup>Optional</sup> <a name="EmbeddingModelUuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuidInput"></a>

```go
func EmbeddingModelUuidInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsPublicInput`<sup>Optional</sup> <a name="IsPublicInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublicInput"></a>

```go
func IsPublicInput() interface{}
```

- *Type:* interface{}

---

##### `LastIndexingJobInput`<sup>Optional</sup> <a name="LastIndexingJobInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.lastIndexingJobInput"></a>

```go
func LastIndexingJobInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `AddedToAgentAt`<sup>Required</sup> <a name="AddedToAgentAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.addedToAgentAt"></a>

```go
func AddedToAgentAt() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `EmbeddingModelUuid`<sup>Required</sup> <a name="EmbeddingModelUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.embeddingModelUuid"></a>

```go
func EmbeddingModelUuid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.isPublic"></a>

```go
func IsPublic() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiKnowledgeBaseConfig <a name="DataDigitaloceanGenaiKnowledgeBaseConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebase"

&datadigitaloceangenaiknowledgebase.DataDigitaloceanGenaiKnowledgeBaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AddedToAgentAt: *string,
	DatabaseId: *string,
	EmbeddingModelUuid: *string,
	Id: *string,
	IsPublic: interface{},
	LastIndexingJob: interface{},
	Name: *string,
	ProjectId: *string,
	Region: *string,
	Tags: *[]*string,
	UserId: *string,
	Uuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.addedToAgentAt">AddedToAgentAt</a></code> | <code>*string</code> | Timestamp when the Knowledge Base was added to the Agent. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Database ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.embeddingModelUuid">EmbeddingModelUuid</a></code> | <code>*string</code> | Embedding model UUID for the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.isPublic">IsPublic</a></code> | <code>interface{}</code> | Indicates if the Knowledge Base is public. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lastIndexingJob">LastIndexingJob</a></code> | <code>interface{}</code> | last_indexing_job block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Project ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.region">Region</a></code> | <code>*string</code> | Region of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | List of tags. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.userId">UserId</a></code> | <code>*string</code> | User ID of the Knowledge Base. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.uuid">Uuid</a></code> | <code>*string</code> | UUID of the Knowledge Base. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddedToAgentAt`<sup>Optional</sup> <a name="AddedToAgentAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.addedToAgentAt"></a>

```go
AddedToAgentAt *string
```

- *Type:* *string

Timestamp when the Knowledge Base was added to the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#added_to_agent_at DataDigitaloceanGenaiKnowledgeBase#added_to_agent_at}

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Database ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#database_id DataDigitaloceanGenaiKnowledgeBase#database_id}

---

##### `EmbeddingModelUuid`<sup>Optional</sup> <a name="EmbeddingModelUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.embeddingModelUuid"></a>

```go
EmbeddingModelUuid *string
```

- *Type:* *string

Embedding model UUID for the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#embedding_model_uuid DataDigitaloceanGenaiKnowledgeBase#embedding_model_uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#id DataDigitaloceanGenaiKnowledgeBase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsPublic`<sup>Optional</sup> <a name="IsPublic" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.isPublic"></a>

```go
IsPublic interface{}
```

- *Type:* interface{}

Indicates if the Knowledge Base is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#is_public DataDigitaloceanGenaiKnowledgeBase#is_public}

---

##### `LastIndexingJob`<sup>Optional</sup> <a name="LastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.lastIndexingJob"></a>

```go
LastIndexingJob interface{}
```

- *Type:* interface{}

last_indexing_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#last_indexing_job DataDigitaloceanGenaiKnowledgeBase#last_indexing_job}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#name DataDigitaloceanGenaiKnowledgeBase#name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Project ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#project_id DataDigitaloceanGenaiKnowledgeBase#project_id}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#region DataDigitaloceanGenaiKnowledgeBase#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#tags DataDigitaloceanGenaiKnowledgeBase#tags}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

User ID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#user_id DataDigitaloceanGenaiKnowledgeBase#user_id}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseConfig.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

UUID of the Knowledge Base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}

---

### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebase"

&datadigitaloceangenaiknowledgebase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob {
	CompletedDatasources: *f64,
	DataSourceUuids: *[]*string,
	Phase: *string,
	Tokens: *f64,
	TotalDatasources: *f64,
	Uuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.completedDatasources">CompletedDatasources</a></code> | <code>*f64</code> | Number of completed datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids">DataSourceUuids</a></code> | <code>*[]*string</code> | Datasource UUIDs for the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.phase">Phase</a></code> | <code>*string</code> | Phase of the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.tokens">Tokens</a></code> | <code>*f64</code> | Number of tokens processed in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.totalDatasources">TotalDatasources</a></code> | <code>*f64</code> | Total number of datasources in the last indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.uuid">Uuid</a></code> | <code>*string</code> | UUID  of the last indexing job. |

---

##### `CompletedDatasources`<sup>Optional</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.completedDatasources"></a>

```go
CompletedDatasources *f64
```

- *Type:* *f64

Number of completed datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#completed_datasources DataDigitaloceanGenaiKnowledgeBase#completed_datasources}

---

##### `DataSourceUuids`<sup>Optional</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.dataSourceUuids"></a>

```go
DataSourceUuids *[]*string
```

- *Type:* *[]*string

Datasource UUIDs for the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#data_source_uuids DataDigitaloceanGenaiKnowledgeBase#data_source_uuids}

---

##### `Phase`<sup>Optional</sup> <a name="Phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.phase"></a>

```go
Phase *string
```

- *Type:* *string

Phase of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#phase DataDigitaloceanGenaiKnowledgeBase#phase}

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.tokens"></a>

```go
Tokens *f64
```

- *Type:* *f64

Number of tokens processed in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#tokens DataDigitaloceanGenaiKnowledgeBase#tokens}

---

##### `TotalDatasources`<sup>Optional</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.totalDatasources"></a>

```go
TotalDatasources *f64
```

- *Type:* *f64

Total number of datasources in the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#total_datasources DataDigitaloceanGenaiKnowledgeBase#total_datasources}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJob.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

UUID  of the last indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/genai_knowledge_base#uuid DataDigitaloceanGenaiKnowledgeBase#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebase"

datadigitaloceangenaiknowledgebase.NewDataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference <a name="DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiknowledgebase"

datadigitaloceangenaiknowledgebase.NewDataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources">ResetCompletedDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids">ResetDataSourceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase">ResetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources">ResetTotalDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompletedDatasources` <a name="ResetCompletedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetCompletedDatasources"></a>

```go
func ResetCompletedDatasources()
```

##### `ResetDataSourceUuids` <a name="ResetDataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetDataSourceUuids"></a>

```go
func ResetDataSourceUuids()
```

##### `ResetPhase` <a name="ResetPhase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetPhase"></a>

```go
func ResetPhase()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTokens"></a>

```go
func ResetTokens()
```

##### `ResetTotalDatasources` <a name="ResetTotalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetTotalDatasources"></a>

```go
func ResetTotalDatasources()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.resetUuid"></a>

```go
func ResetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt">FinishedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt">StartedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput">CompletedDatasourcesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput">DataSourceUuidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput">PhaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput">TokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput">TotalDatasourcesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources">CompletedDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids">DataSourceUuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase">Phase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources">TotalDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.finishedAt"></a>

```go
func FinishedAt() *string
```

- *Type:* *string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.knowledgeBaseUuid"></a>

```go
func KnowledgeBaseUuid() *string
```

- *Type:* *string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.startedAt"></a>

```go
func StartedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `CompletedDatasourcesInput`<sup>Optional</sup> <a name="CompletedDatasourcesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasourcesInput"></a>

```go
func CompletedDatasourcesInput() *f64
```

- *Type:* *f64

---

##### `DataSourceUuidsInput`<sup>Optional</sup> <a name="DataSourceUuidsInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuidsInput"></a>

```go
func DataSourceUuidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PhaseInput`<sup>Optional</sup> <a name="PhaseInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phaseInput"></a>

```go
func PhaseInput() *string
```

- *Type:* *string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokensInput"></a>

```go
func TokensInput() *f64
```

- *Type:* *f64

---

##### `TotalDatasourcesInput`<sup>Optional</sup> <a name="TotalDatasourcesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasourcesInput"></a>

```go
func TotalDatasourcesInput() *f64
```

- *Type:* *f64

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `CompletedDatasources`<sup>Required</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.completedDatasources"></a>

```go
func CompletedDatasources() *f64
```

- *Type:* *f64

---

##### `DataSourceUuids`<sup>Required</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.dataSourceUuids"></a>

```go
func DataSourceUuids() *[]*string
```

- *Type:* *[]*string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.phase"></a>

```go
func Phase() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `TotalDatasources`<sup>Required</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.totalDatasources"></a>

```go
func TotalDatasources() *f64
```

- *Type:* *f64

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiKnowledgeBase.DataDigitaloceanGenaiKnowledgeBaseLastIndexingJobOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



