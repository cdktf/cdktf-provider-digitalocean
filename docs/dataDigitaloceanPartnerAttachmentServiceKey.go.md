# `dataDigitaloceanPartnerAttachmentServiceKey` Submodule <a name="`dataDigitaloceanPartnerAttachmentServiceKey` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanPartnerAttachmentServiceKey <a name="DataDigitaloceanPartnerAttachmentServiceKey" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/partner_attachment_service_key digitalocean_partner_attachment_service_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachmentservicekey"

datadigitaloceanpartnerattachmentservicekey.NewDataDigitaloceanPartnerAttachmentServiceKey(scope Construct, id *string, config DataDigitaloceanPartnerAttachmentServiceKeyConfig) DataDigitaloceanPartnerAttachmentServiceKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig">DataDigitaloceanPartnerAttachmentServiceKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig">DataDigitaloceanPartnerAttachmentServiceKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanPartnerAttachmentServiceKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachmentservicekey"

datadigitaloceanpartnerattachmentservicekey.DataDigitaloceanPartnerAttachmentServiceKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachmentservicekey"

datadigitaloceanpartnerattachmentservicekey.DataDigitaloceanPartnerAttachmentServiceKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachmentservicekey"

datadigitaloceanpartnerattachmentservicekey.DataDigitaloceanPartnerAttachmentServiceKey_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachmentservicekey"

datadigitaloceanpartnerattachmentservicekey.DataDigitaloceanPartnerAttachmentServiceKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanPartnerAttachmentServiceKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanPartnerAttachmentServiceKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanPartnerAttachmentServiceKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/partner_attachment_service_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanPartnerAttachmentServiceKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentIdInput">AttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `AttachmentIdInput`<sup>Optional</sup> <a name="AttachmentIdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentIdInput"></a>

```go
func AttachmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanPartnerAttachmentServiceKeyConfig <a name="DataDigitaloceanPartnerAttachmentServiceKeyConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceanpartnerattachmentservicekey"

&datadigitaloceanpartnerattachmentservicekey.DataDigitaloceanPartnerAttachmentServiceKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AttachmentId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | The ID of the Partner Attachment for which to retrieve the service key. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/partner_attachment_service_key#id DataDigitaloceanPartnerAttachmentServiceKey#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.attachmentId"></a>

```go
AttachmentId *string
```

- *Type:* *string

The ID of the Partner Attachment for which to retrieve the service key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/partner_attachment_service_key#attachment_id DataDigitaloceanPartnerAttachmentServiceKey#attachment_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanPartnerAttachmentServiceKey.DataDigitaloceanPartnerAttachmentServiceKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.69.0/docs/data-sources/partner_attachment_service_key#id DataDigitaloceanPartnerAttachmentServiceKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



