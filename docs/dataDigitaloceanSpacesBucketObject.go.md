# `dataDigitaloceanSpacesBucketObject` Submodule <a name="`dataDigitaloceanSpacesBucketObject` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanSpacesBucketObject <a name="DataDigitaloceanSpacesBucketObject" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object digitalocean_spaces_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/datadigitaloceanspacesbucketobject"

datadigitaloceanspacesbucketobject.NewDataDigitaloceanSpacesBucketObject(scope Construct, id *string, config DataDigitaloceanSpacesBucketObjectConfig) DataDigitaloceanSpacesBucketObject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig">DataDigitaloceanSpacesBucketObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig">DataDigitaloceanSpacesBucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetId"></a>

```go
func ResetId()
```

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetRange"></a>

```go
func ResetRange()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.resetVersionId"></a>

```go
func ResetVersionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanSpacesBucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/datadigitaloceanspacesbucketobject"

datadigitaloceanspacesbucketobject.DataDigitaloceanSpacesBucketObject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/datadigitaloceanspacesbucketobject"

datadigitaloceanspacesbucketobject.DataDigitaloceanSpacesBucketObject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/datadigitaloceanspacesbucketobject"

datadigitaloceanspacesbucketobject.DataDigitaloceanSpacesBucketObject_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/datadigitaloceanspacesbucketobject"

datadigitaloceanspacesbucketobject.DataDigitaloceanSpacesBucketObject_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanSpacesBucketObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanSpacesBucketObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanSpacesBucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanSpacesBucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.cacheControl">CacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentLength">ContentLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.expiration">Expiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.expires">Expires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.websiteRedirectLocation">WebsiteRedirectLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.rangeInput">RangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.range">Range</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.cacheControl"></a>

```go
func CacheControl() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentEncoding"></a>

```go
func ContentEncoding() *string
```

- *Type:* *string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentLanguage"></a>

```go
func ContentLanguage() *string
```

- *Type:* *string

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentLength"></a>

```go
func ContentLength() *f64
```

- *Type:* *f64

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.expiration"></a>

```go
func Expiration() *string
```

- *Type:* *string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.expires"></a>

```go
func Expires() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `WebsiteRedirectLocation`<sup>Required</sup> <a name="WebsiteRedirectLocation" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.websiteRedirectLocation"></a>

```go
func WebsiteRedirectLocation() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.rangeInput"></a>

```go
func RangeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.range"></a>

```go
func Range() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanSpacesBucketObjectConfig <a name="DataDigitaloceanSpacesBucketObjectConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v11/datadigitaloceanspacesbucketobject"

&datadigitaloceanspacesbucketobject.DataDigitaloceanSpacesBucketObjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Key: *string,
	Region: *string,
	Id: *string,
	Range: *string,
	VersionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#bucket DataDigitaloceanSpacesBucketObject#bucket}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#key DataDigitaloceanSpacesBucketObject#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#region DataDigitaloceanSpacesBucketObject#region}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#id DataDigitaloceanSpacesBucketObject#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.range">Range</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#range DataDigitaloceanSpacesBucketObject#range}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.versionId">VersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#version_id DataDigitaloceanSpacesBucketObject#version_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#bucket DataDigitaloceanSpacesBucketObject#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#key DataDigitaloceanSpacesBucketObject#key}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#region DataDigitaloceanSpacesBucketObject#region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#id DataDigitaloceanSpacesBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.range"></a>

```go
Range *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#range DataDigitaloceanSpacesBucketObject#range}.

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-digitalocean.dataDigitaloceanSpacesBucketObject.DataDigitaloceanSpacesBucketObjectConfig.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.51.0/docs/data-sources/spaces_bucket_object#version_id DataDigitaloceanSpacesBucketObject#version_id}.

---



