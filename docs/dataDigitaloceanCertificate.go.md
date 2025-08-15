# `dataDigitaloceanCertificate` Submodule <a name="`dataDigitaloceanCertificate` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanCertificate <a name="DataDigitaloceanCertificate" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/certificate digitalocean_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceancertificate"

datadigitaloceancertificate.NewDataDigitaloceanCertificate(scope Construct, id *string, config DataDigitaloceanCertificateConfig) DataDigitaloceanCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig">DataDigitaloceanCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig">DataDigitaloceanCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceancertificate"

datadigitaloceancertificate.DataDigitaloceanCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceancertificate"

datadigitaloceancertificate.DataDigitaloceanCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceancertificate"

datadigitaloceancertificate.DataDigitaloceanCertificate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceancertificate"

datadigitaloceancertificate.DataDigitaloceanCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.notAfter">NotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.notAfter"></a>

```go
func NotAfter() *string
```

- *Type:* *string

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.sha1Fingerprint"></a>

```go
func Sha1Fingerprint() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanCertificateConfig <a name="DataDigitaloceanCertificateConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceancertificate"

&datadigitaloceancertificate.DataDigitaloceanCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.name">Name</a></code> | <code>*string</code> | name of the certificate. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/certificate#id DataDigitaloceanCertificate#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

name of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/certificate#name DataDigitaloceanCertificate#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanCertificate.DataDigitaloceanCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/data-sources/certificate#id DataDigitaloceanCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



