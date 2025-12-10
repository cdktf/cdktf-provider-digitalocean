# `dataDigitaloceanGenaiIndexingJob` Submodule <a name="`dataDigitaloceanGenaiIndexingJob` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiIndexingJob <a name="DataDigitaloceanGenaiIndexingJob" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_indexing_job digitalocean_genai_indexing_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiindexingjob"

datadigitaloceangenaiindexingjob.NewDataDigitaloceanGenaiIndexingJob(scope Construct, id *string, config DataDigitaloceanGenaiIndexingJobConfig) DataDigitaloceanGenaiIndexingJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig">DataDigitaloceanGenaiIndexingJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig">DataDigitaloceanGenaiIndexingJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiindexingjob"

datadigitaloceangenaiindexingjob.DataDigitaloceanGenaiIndexingJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiindexingjob"

datadigitaloceangenaiindexingjob.DataDigitaloceanGenaiIndexingJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiindexingjob"

datadigitaloceangenaiindexingjob.DataDigitaloceanGenaiIndexingJob_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiindexingjob"

datadigitaloceangenaiindexingjob.DataDigitaloceanGenaiIndexingJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanGenaiIndexingJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanGenaiIndexingJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanGenaiIndexingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_indexing_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiIndexingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.completedDatasources">CompletedDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dataSourceUuids">DataSourceUuids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.finishedAt">FinishedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.knowledgeBaseUuid">KnowledgeBaseUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.phase">Phase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.startedAt">StartedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalDatasources">TotalDatasources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsFailed">TotalItemsFailed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsIndexed">TotalItemsIndexed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsSkipped">TotalItemsSkipped</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompletedDatasources`<sup>Required</sup> <a name="CompletedDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.completedDatasources"></a>

```go
func CompletedDatasources() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataSourceUuids`<sup>Required</sup> <a name="DataSourceUuids" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.dataSourceUuids"></a>

```go
func DataSourceUuids() *[]*string
```

- *Type:* *[]*string

---

##### `FinishedAt`<sup>Required</sup> <a name="FinishedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.finishedAt"></a>

```go
func FinishedAt() *string
```

- *Type:* *string

---

##### `KnowledgeBaseUuid`<sup>Required</sup> <a name="KnowledgeBaseUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.knowledgeBaseUuid"></a>

```go
func KnowledgeBaseUuid() *string
```

- *Type:* *string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.phase"></a>

```go
func Phase() *string
```

- *Type:* *string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.startedAt"></a>

```go
func StartedAt() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `TotalDatasources`<sup>Required</sup> <a name="TotalDatasources" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalDatasources"></a>

```go
func TotalDatasources() *f64
```

- *Type:* *f64

---

##### `TotalItemsFailed`<sup>Required</sup> <a name="TotalItemsFailed" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsFailed"></a>

```go
func TotalItemsFailed() *string
```

- *Type:* *string

---

##### `TotalItemsIndexed`<sup>Required</sup> <a name="TotalItemsIndexed" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsIndexed"></a>

```go
func TotalItemsIndexed() *string
```

- *Type:* *string

---

##### `TotalItemsSkipped`<sup>Required</sup> <a name="TotalItemsSkipped" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.totalItemsSkipped"></a>

```go
func TotalItemsSkipped() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiIndexingJobConfig <a name="DataDigitaloceanGenaiIndexingJobConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiindexingjob"

&datadigitaloceangenaiindexingjob.DataDigitaloceanGenaiIndexingJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Uuid: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.uuid">Uuid</a></code> | <code>*string</code> | UUID of the indexing job. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_indexing_job#id DataDigitaloceanGenaiIndexingJob#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

UUID of the indexing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_indexing_job#uuid DataDigitaloceanGenaiIndexingJob#uuid}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiIndexingJob.DataDigitaloceanGenaiIndexingJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.71.0/docs/data-sources/genai_indexing_job#id DataDigitaloceanGenaiIndexingJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



