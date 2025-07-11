# `dataDigitaloceanPartnerAttachment` Submodule <a name="`dataDigitaloceanPartnerAttachment` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanPartnerAttachment <a name="DataDigitaloceanPartnerAttachment" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment digitalocean_partner_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachment"

datadigitaloceanpartnerattachment.NewDataDigitaloceanPartnerAttachment(scope Construct, id *string, config DataDigitaloceanPartnerAttachmentConfig) DataDigitaloceanPartnerAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig">DataDigitaloceanPartnerAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig">DataDigitaloceanPartnerAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp">PutBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetBgp">ResetBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetRedundancyZone">ResetRedundancyZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBgp` <a name="PutBgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp"></a>

```go
func PutBgp(value DataDigitaloceanPartnerAttachmentBgp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

---

##### `ResetBgp` <a name="ResetBgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetBgp"></a>

```go
func ResetBgp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetName"></a>

```go
func ResetName()
```

##### `ResetRedundancyZone` <a name="ResetRedundancyZone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.resetRedundancyZone"></a>

```go
func ResetRedundancyZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanPartnerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachment"

datadigitaloceanpartnerattachment.DataDigitaloceanPartnerAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachment"

datadigitaloceanpartnerattachment.DataDigitaloceanPartnerAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachment"

datadigitaloceanpartnerattachment.DataDigitaloceanPartnerAttachment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachment"

datadigitaloceanpartnerattachment.DataDigitaloceanPartnerAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanPartnerAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanPartnerAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanPartnerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanPartnerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgp">Bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference">DataDigitaloceanPartnerAttachmentBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.children">Children</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.connectionBandwidthInMbps">ConnectionBandwidthInMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.naasProvider">NaasProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.parentUuid">ParentUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.vpcIds">VpcIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgpInput">BgpInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZoneInput">RedundancyZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZone">RedundancyZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Bgp`<sup>Required</sup> <a name="Bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgp"></a>

```go
func Bgp() DataDigitaloceanPartnerAttachmentBgpOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference">DataDigitaloceanPartnerAttachmentBgpOutputReference</a>

---

##### `Children`<sup>Required</sup> <a name="Children" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.children"></a>

```go
func Children() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionBandwidthInMbps`<sup>Required</sup> <a name="ConnectionBandwidthInMbps" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.connectionBandwidthInMbps"></a>

```go
func ConnectionBandwidthInMbps() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `NaasProvider`<sup>Required</sup> <a name="NaasProvider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.naasProvider"></a>

```go
func NaasProvider() *string
```

- *Type:* *string

---

##### `ParentUuid`<sup>Required</sup> <a name="ParentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.parentUuid"></a>

```go
func ParentUuid() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `VpcIds`<sup>Required</sup> <a name="VpcIds" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.vpcIds"></a>

```go
func VpcIds() *[]*string
```

- *Type:* *[]*string

---

##### `BgpInput`<sup>Optional</sup> <a name="BgpInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.bgpInput"></a>

```go
func BgpInput() DataDigitaloceanPartnerAttachmentBgp
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RedundancyZoneInput`<sup>Optional</sup> <a name="RedundancyZoneInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZoneInput"></a>

```go
func RedundancyZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RedundancyZone`<sup>Required</sup> <a name="RedundancyZone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.redundancyZone"></a>

```go
func RedundancyZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanPartnerAttachmentBgp <a name="DataDigitaloceanPartnerAttachmentBgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachment"

&datadigitaloceanpartnerattachment.DataDigitaloceanPartnerAttachmentBgp {
	LocalRouterIp: *string,
	PeerRouterAsn: *f64,
	PeerRouterIp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.localRouterIp">LocalRouterIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#local_router_ip DataDigitaloceanPartnerAttachment#local_router_ip}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterAsn">PeerRouterAsn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#peer_router_asn DataDigitaloceanPartnerAttachment#peer_router_asn}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterIp">PeerRouterIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#peer_router_ip DataDigitaloceanPartnerAttachment#peer_router_ip}. |

---

##### `LocalRouterIp`<sup>Optional</sup> <a name="LocalRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.localRouterIp"></a>

```go
LocalRouterIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#local_router_ip DataDigitaloceanPartnerAttachment#local_router_ip}.

---

##### `PeerRouterAsn`<sup>Optional</sup> <a name="PeerRouterAsn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterAsn"></a>

```go
PeerRouterAsn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#peer_router_asn DataDigitaloceanPartnerAttachment#peer_router_asn}.

---

##### `PeerRouterIp`<sup>Optional</sup> <a name="PeerRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp.property.peerRouterIp"></a>

```go
PeerRouterIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#peer_router_ip DataDigitaloceanPartnerAttachment#peer_router_ip}.

---

### DataDigitaloceanPartnerAttachmentConfig <a name="DataDigitaloceanPartnerAttachmentConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachment"

&datadigitaloceanpartnerattachment.DataDigitaloceanPartnerAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bgp: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp,
	Id: *string,
	Name: *string,
	RedundancyZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.bgp">Bgp</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | The ID of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Partner Attachment. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.redundancyZone">RedundancyZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bgp`<sup>Optional</sup> <a name="Bgp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.bgp"></a>

```go
Bgp DataDigitaloceanPartnerAttachmentBgp
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#bgp DataDigitaloceanPartnerAttachment#bgp}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#id DataDigitaloceanPartnerAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Partner Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#name DataDigitaloceanPartnerAttachment#name}

---

##### `RedundancyZone`<sup>Optional</sup> <a name="RedundancyZone" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentConfig.property.redundancyZone"></a>

```go
RedundancyZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.59.0/docs/data-sources/partner_attachment#redundancy_zone DataDigitaloceanPartnerAttachment#redundancy_zone}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanPartnerAttachmentBgpOutputReference <a name="DataDigitaloceanPartnerAttachmentBgpOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachment"

datadigitaloceanpartnerattachment.NewDataDigitaloceanPartnerAttachmentBgpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDigitaloceanPartnerAttachmentBgpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetLocalRouterIp">ResetLocalRouterIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterAsn">ResetPeerRouterAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterIp">ResetPeerRouterIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalRouterIp` <a name="ResetLocalRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetLocalRouterIp"></a>

```go
func ResetLocalRouterIp()
```

##### `ResetPeerRouterAsn` <a name="ResetPeerRouterAsn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterAsn"></a>

```go
func ResetPeerRouterAsn()
```

##### `ResetPeerRouterIp` <a name="ResetPeerRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.resetPeerRouterIp"></a>

```go
func ResetPeerRouterIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIpInput">LocalRouterIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsnInput">PeerRouterAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIpInput">PeerRouterIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIp">LocalRouterIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsn">PeerRouterAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIp">PeerRouterIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalRouterIpInput`<sup>Optional</sup> <a name="LocalRouterIpInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIpInput"></a>

```go
func LocalRouterIpInput() *string
```

- *Type:* *string

---

##### `PeerRouterAsnInput`<sup>Optional</sup> <a name="PeerRouterAsnInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsnInput"></a>

```go
func PeerRouterAsnInput() *f64
```

- *Type:* *f64

---

##### `PeerRouterIpInput`<sup>Optional</sup> <a name="PeerRouterIpInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIpInput"></a>

```go
func PeerRouterIpInput() *string
```

- *Type:* *string

---

##### `LocalRouterIp`<sup>Required</sup> <a name="LocalRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.localRouterIp"></a>

```go
func LocalRouterIp() *string
```

- *Type:* *string

---

##### `PeerRouterAsn`<sup>Required</sup> <a name="PeerRouterAsn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterAsn"></a>

```go
func PeerRouterAsn() *f64
```

- *Type:* *f64

---

##### `PeerRouterIp`<sup>Required</sup> <a name="PeerRouterIp" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.peerRouterIp"></a>

```go
func PeerRouterIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanPartnerAttachmentBgp
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachment.DataDigitaloceanPartnerAttachmentBgp">DataDigitaloceanPartnerAttachmentBgp</a>

---



