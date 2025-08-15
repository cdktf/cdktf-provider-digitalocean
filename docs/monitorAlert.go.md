# `monitorAlert` Submodule <a name="`monitorAlert` Submodule" id="@cdktf/provider-digitalocean.monitorAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAlert <a name="MonitorAlert" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert digitalocean_monitor_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/monitoralert"

monitoralert.NewMonitorAlert(scope Construct, id *string, config MonitorAlertConfig) MonitorAlert
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig">MonitorAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig">MonitorAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts">PutAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEntities">ResetEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlerts` <a name="PutAlerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts"></a>

```go
func PutAlerts(value MonitorAlertAlerts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.putAlerts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEntities` <a name="ResetEntities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetEntities"></a>

```go
func ResetEntities()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorAlert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/monitoralert"

monitoralert.MonitorAlert_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/monitoralert"

monitoralert.MonitorAlert_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/monitoralert"

monitoralert.MonitorAlert_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/monitoralert"

monitoralert.MonitorAlert_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MonitorAlert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MonitorAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MonitorAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MonitorAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alerts">Alerts</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference">MonitorAlertAlertsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alertsInput">AlertsInput</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compareInput">CompareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entitiesInput">EntitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.windowInput">WindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compare">Compare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entities">Entities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.window">Window</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alerts`<sup>Required</sup> <a name="Alerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alerts"></a>

```go
func Alerts() MonitorAlertAlertsOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference">MonitorAlertAlertsOutputReference</a>

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `AlertsInput`<sup>Optional</sup> <a name="AlertsInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.alertsInput"></a>

```go
func AlertsInput() MonitorAlertAlerts
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

---

##### `CompareInput`<sup>Optional</sup> <a name="CompareInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compareInput"></a>

```go
func CompareInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entitiesInput"></a>

```go
func EntitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.windowInput"></a>

```go
func WindowInput() *string
```

- *Type:* *string

---

##### `Compare`<sup>Required</sup> <a name="Compare" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.compare"></a>

```go
func Compare() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.entities"></a>

```go
func Entities() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.window"></a>

```go
func Window() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlert.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAlertAlerts <a name="MonitorAlertAlerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/monitoralert"

&monitoralert.MonitorAlertAlerts {
	Email: *[]*string,
	Slack: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.email">Email</a></code> | <code>*[]*string</code> | List of email addresses to sent notifications to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.slack">Slack</a></code> | <code>interface{}</code> | slack block. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.email"></a>

```go
Email *[]*string
```

- *Type:* *[]*string

List of email addresses to sent notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#email MonitorAlert#email}

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts.property.slack"></a>

```go
Slack interface{}
```

- *Type:* interface{}

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#slack MonitorAlert#slack}

---

### MonitorAlertAlertsSlack <a name="MonitorAlertAlertsSlack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/monitoralert"

&monitoralert.MonitorAlertAlertsSlack {
	Channel: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.channel">Channel</a></code> | <code>*string</code> | The Slack channel to send alerts to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.url">Url</a></code> | <code>*string</code> | The webhook URL for Slack. |

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

The Slack channel to send alerts to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#channel MonitorAlert#channel}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlack.property.url"></a>

```go
Url *string
```

- *Type:* *string

The webhook URL for Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#url MonitorAlert#url}

---

### MonitorAlertConfig <a name="MonitorAlertConfig" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/monitoralert"

&monitoralert.MonitorAlertConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Alerts: github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13.monitorAlert.MonitorAlertAlerts,
	Compare: *string,
	Description: *string,
	Type: *string,
	Value: *f64,
	Window: *string,
	Enabled: interface{},
	Entities: *[]*string,
	Id: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.alerts">Alerts</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | alerts block. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.compare">Compare</a></code> | <code>*string</code> | The comparison operator to use for value. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.description">Description</a></code> | <code>*string</code> | Description of the alert policy. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#type MonitorAlert#type}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#value MonitorAlert#value}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.window">Window</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#window MonitorAlert#window}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#enabled MonitorAlert#enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.entities">Entities</a></code> | <code>*[]*string</code> | The droplets to apply the alert policy to. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#id MonitorAlert#id}. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#tags MonitorAlert#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alerts`<sup>Required</sup> <a name="Alerts" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.alerts"></a>

```go
Alerts MonitorAlertAlerts
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

alerts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#alerts MonitorAlert#alerts}

---

##### `Compare`<sup>Required</sup> <a name="Compare" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.compare"></a>

```go
Compare *string
```

- *Type:* *string

The comparison operator to use for value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#compare MonitorAlert#compare}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the alert policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#description MonitorAlert#description}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#type MonitorAlert#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#value MonitorAlert#value}.

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.window"></a>

```go
Window *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#window MonitorAlert#window}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#enabled MonitorAlert#enabled}.

---

##### `Entities`<sup>Optional</sup> <a name="Entities" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.entities"></a>

```go
Entities *[]*string
```

- *Type:* *[]*string

The droplets to apply the alert policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#entities MonitorAlert#entities}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#id MonitorAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/monitor_alert#tags MonitorAlert#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAlertAlertsOutputReference <a name="MonitorAlertAlertsOutputReference" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/monitoralert"

monitoralert.NewMonitorAlertAlertsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorAlertAlertsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSlack` <a name="PutSlack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack"></a>

```go
func PutSlack(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.putSlack.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.resetSlack"></a>

```go
func ResetSlack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList">MonitorAlertAlertsSlackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.emailInput">EmailInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slackInput">SlackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.email">Email</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slack"></a>

```go
func Slack() MonitorAlertAlertsSlackList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList">MonitorAlertAlertsSlackList</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.emailInput"></a>

```go
func EmailInput() *[]*string
```

- *Type:* *[]*string

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.slackInput"></a>

```go
func SlackInput() interface{}
```

- *Type:* interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.email"></a>

```go
func Email() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorAlertAlerts
```

- *Type:* <a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlerts">MonitorAlertAlerts</a>

---


### MonitorAlertAlertsSlackList <a name="MonitorAlertAlertsSlackList" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/monitoralert"

monitoralert.NewMonitorAlertAlertsSlackList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorAlertAlertsSlackList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get"></a>

```go
func Get(index *f64) MonitorAlertAlertsSlackOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorAlertAlertsSlackOutputReference <a name="MonitorAlertAlertsSlackOutputReference" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/v13/monitoralert"

monitoralert.NewMonitorAlertAlertsSlackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorAlertAlertsSlackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.monitorAlert.MonitorAlertAlertsSlackOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



