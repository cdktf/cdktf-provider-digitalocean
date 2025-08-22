# `dataDigitaloceanGenaiOpenaiApiKeys` Submodule <a name="`dataDigitaloceanGenaiOpenaiApiKeys` Submodule" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDigitaloceanGenaiOpenaiApiKeys <a name="DataDigitaloceanGenaiOpenaiApiKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys digitalocean_genai_openai_api_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeys(scope Construct, id *string, config DataDigitaloceanGenaiOpenaiApiKeysConfig) DataDigitaloceanGenaiOpenaiApiKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig">DataDigitaloceanGenaiOpenaiApiKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig">DataDigitaloceanGenaiOpenaiApiKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort">PutSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetSort">ResetSort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSort` <a name="PutSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort"></a>

```go
func PutSort(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.putSort.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetId"></a>

```go
func ResetId()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.resetSort"></a>

```go
func ResetSort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.DataDigitaloceanGenaiOpenaiApiKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.DataDigitaloceanGenaiOpenaiApiKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.DataDigitaloceanGenaiOpenaiApiKeys_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.DataDigitaloceanGenaiOpenaiApiKeys_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDigitaloceanGenaiOpenaiApiKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDigitaloceanGenaiOpenaiApiKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDigitaloceanGenaiOpenaiApiKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDigitaloceanGenaiOpenaiApiKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList">DataDigitaloceanGenaiOpenaiApiKeysFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.openaiApiKeys">OpenaiApiKeys</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sort">Sort</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList">DataDigitaloceanGenaiOpenaiApiKeysSortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sortInput">SortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filter"></a>

```go
func Filter() DataDigitaloceanGenaiOpenaiApiKeysFilterList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList">DataDigitaloceanGenaiOpenaiApiKeysFilterList</a>

---

##### `OpenaiApiKeys`<sup>Required</sup> <a name="OpenaiApiKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.openaiApiKeys"></a>

```go
func OpenaiApiKeys() DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList</a>

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sort"></a>

```go
func Sort() DataDigitaloceanGenaiOpenaiApiKeysSortList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList">DataDigitaloceanGenaiOpenaiApiKeysSortList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.sortInput"></a>

```go
func SortInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDigitaloceanGenaiOpenaiApiKeysConfig <a name="DataDigitaloceanGenaiOpenaiApiKeysConfig" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

&datadigitaloceangenaiopenaiapikeys.DataDigitaloceanGenaiOpenaiApiKeysConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	Id: *string,
	Sort: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#id DataDigitaloceanGenaiOpenaiApiKeys#id}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.sort">Sort</a></code> | <code>interface{}</code> | sort block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#filter DataDigitaloceanGenaiOpenaiApiKeys#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#id DataDigitaloceanGenaiOpenaiApiKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysConfig.property.sort"></a>

```go
Sort interface{}
```

- *Type:* interface{}

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#sort DataDigitaloceanGenaiOpenaiApiKeys#sort}

---

### DataDigitaloceanGenaiOpenaiApiKeysFilter <a name="DataDigitaloceanGenaiOpenaiApiKeysFilter" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

&datadigitaloceangenaiopenaiapikeys.DataDigitaloceanGenaiOpenaiApiKeysFilter {
	Key: *string,
	Values: *[]*string,
	All: interface{},
	MatchBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#values DataDigitaloceanGenaiOpenaiApiKeys#values}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.all">All</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#all DataDigitaloceanGenaiOpenaiApiKeys#all}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.matchBy">MatchBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#match_by DataDigitaloceanGenaiOpenaiApiKeys#match_by}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#values DataDigitaloceanGenaiOpenaiApiKeys#values}.

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.all"></a>

```go
All interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#all DataDigitaloceanGenaiOpenaiApiKeys#all}.

---

##### `MatchBy`<sup>Optional</sup> <a name="MatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilter.property.matchBy"></a>

```go
MatchBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#match_by DataDigitaloceanGenaiOpenaiApiKeys#match_by}.

---

### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

&datadigitaloceangenaiopenaiapikeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys {

}
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

&datadigitaloceangenaiopenaiapikeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels {

}
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

&datadigitaloceangenaiopenaiapikeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement {

}
```


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

&datadigitaloceangenaiopenaiapikeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions {

}
```


### DataDigitaloceanGenaiOpenaiApiKeysSort <a name="DataDigitaloceanGenaiOpenaiApiKeysSort" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

&datadigitaloceangenaiopenaiapikeys.DataDigitaloceanGenaiOpenaiApiKeysSort {
	Key: *string,
	Direction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.direction">Direction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#direction DataDigitaloceanGenaiOpenaiApiKeys#direction}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#key DataDigitaloceanGenaiOpenaiApiKeys#key}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSort.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.66.0/docs/data-sources/genai_openai_api_keys#direction DataDigitaloceanGenaiOpenaiApiKeys#direction}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDigitaloceanGenaiOpenaiApiKeysFilterList <a name="DataDigitaloceanGenaiOpenaiApiKeysFilterList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiOpenaiApiKeysFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetMatchBy">ResetMatchBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetAll"></a>

```go
func ResetAll()
```

##### `ResetMatchBy` <a name="ResetMatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.resetMatchBy"></a>

```go
func ResetMatchBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.allInput">AllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchByInput">MatchByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.all">All</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchBy">MatchBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.allInput"></a>

```go
func AllInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchByInput`<sup>Optional</sup> <a name="MatchByInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchByInput"></a>

```go
func MatchByInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.all"></a>

```go
func All() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchBy`<sup>Required</sup> <a name="MatchBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.matchBy"></a>

```go
func MatchBy() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreement</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.agreement">Agreement</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceName">InferenceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceVersion">InferenceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.isFoundational">IsFoundational</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.parentUuid">ParentUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.uploadComplete">UploadComplete</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.usecases">Usecases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Agreement`<sup>Required</sup> <a name="Agreement" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.agreement"></a>

```go
func Agreement() DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsAgreementList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `InferenceName`<sup>Required</sup> <a name="InferenceName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceName"></a>

```go
func InferenceName() *string
```

- *Type:* *string

---

##### `InferenceVersion`<sup>Required</sup> <a name="InferenceVersion" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.inferenceVersion"></a>

```go
func InferenceVersion() *string
```

- *Type:* *string

---

##### `IsFoundational`<sup>Required</sup> <a name="IsFoundational" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.isFoundational"></a>

```go
func IsFoundational() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentUuid`<sup>Required</sup> <a name="ParentUuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.parentUuid"></a>

```go
func ParentUuid() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UploadComplete`<sup>Required</sup> <a name="UploadComplete" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.uploadComplete"></a>

```go
func UploadComplete() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Usecases`<sup>Required</sup> <a name="Usecases" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.usecases"></a>

```go
func Usecases() *[]*string
```

- *Type:* *[]*string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.versions"></a>

```go
func Versions() DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModels</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.major">Major</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.minor">Minor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.patch">Patch</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Major`<sup>Required</sup> <a name="Major" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.major"></a>

```go
func Major() *f64
```

- *Type:* *f64

---

##### `Minor`<sup>Required</sup> <a name="Minor" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.minor"></a>

```go
func Minor() *f64
```

- *Type:* *f64

---

##### `Patch`<sup>Required</sup> <a name="Patch" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.patch"></a>

```go
func Patch() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsVersions</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.deletedAt">DeletedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.models">Models</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.deletedAt"></a>

```go
func DeletedAt() *string
```

- *Type:* *string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.models"></a>

```go
func Models() DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysModelsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys
```

- *Type:* <a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys">DataDigitaloceanGenaiOpenaiApiKeysOpenaiApiKeys</a>

---


### DataDigitaloceanGenaiOpenaiApiKeysSortList <a name="DataDigitaloceanGenaiOpenaiApiKeysSortList" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysSortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDigitaloceanGenaiOpenaiApiKeysSortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get"></a>

```go
func Get(index *f64) DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference <a name="DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/datadigitaloceangenaiopenaiapikeys"

datadigitaloceangenaiopenaiapikeys.NewDataDigitaloceanGenaiOpenaiApiKeysSortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.resetDirection"></a>

```go
func ResetDirection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.dataDigitaloceanGenaiOpenaiApiKeys.DataDigitaloceanGenaiOpenaiApiKeysSortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



