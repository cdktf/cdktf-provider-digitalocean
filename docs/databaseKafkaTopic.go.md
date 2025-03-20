# `databaseKafkaTopic` Submodule <a name="`databaseKafkaTopic` Submodule" id="@cdktf/provider-digitalocean.databaseKafkaTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseKafkaTopic <a name="DatabaseKafkaTopic" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic digitalocean_database_kafka_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkatopic"

databasekafkatopic.NewDatabaseKafkaTopic(scope Construct, id *string, config DatabaseKafkaTopicConfig) DatabaseKafkaTopic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig">DatabaseKafkaTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig">DatabaseKafkaTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetPartitionCount">ResetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetReplicationFactor">ResetReplicationFactor</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig"></a>

```go
func PutConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.putConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetId"></a>

```go
func ResetId()
```

##### `ResetPartitionCount` <a name="ResetPartitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetPartitionCount"></a>

```go
func ResetPartitionCount()
```

##### `ResetReplicationFactor` <a name="ResetReplicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.resetReplicationFactor"></a>

```go
func ResetReplicationFactor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseKafkaTopic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkatopic"

databasekafkatopic.DatabaseKafkaTopic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkatopic"

databasekafkatopic.DatabaseKafkaTopic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkatopic"

databasekafkatopic.DatabaseKafkaTopic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkatopic"

databasekafkatopic.DatabaseKafkaTopic_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseKafkaTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseKafkaTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseKafkaTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseKafkaTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.config">Config</a></code> | <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList">DatabaseKafkaTopicConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCountInput">PartitionCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactorInput">ReplicationFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCount">PartitionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactor">ReplicationFactor</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.config"></a>

```go
func Config() DatabaseKafkaTopicConfigAList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList">DatabaseKafkaTopicConfigAList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionCountInput`<sup>Optional</sup> <a name="PartitionCountInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCountInput"></a>

```go
func PartitionCountInput() *f64
```

- *Type:* *f64

---

##### `ReplicationFactorInput`<sup>Optional</sup> <a name="ReplicationFactorInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactorInput"></a>

```go
func ReplicationFactorInput() *f64
```

- *Type:* *f64

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartitionCount`<sup>Required</sup> <a name="PartitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.partitionCount"></a>

```go
func PartitionCount() *f64
```

- *Type:* *f64

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.replicationFactor"></a>

```go
func ReplicationFactor() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseKafkaTopicConfig <a name="DatabaseKafkaTopicConfig" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkatopic"

&databasekafkatopic.DatabaseKafkaTopicConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Name: *string,
	Config: interface{},
	Id: *string,
	PartitionCount: *f64,
	ReplicationFactor: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.config">Config</a></code> | <code>interface{}</code> | config block. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.partitionCount">PartitionCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.replicationFactor">ReplicationFactor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#cluster_id DatabaseKafkaTopic#cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#name DatabaseKafkaTopic#name}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.config"></a>

```go
Config interface{}
```

- *Type:* interface{}

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#config DatabaseKafkaTopic#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#id DatabaseKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionCount`<sup>Optional</sup> <a name="PartitionCount" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.partitionCount"></a>

```go
PartitionCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#partition_count DatabaseKafkaTopic#partition_count}.

---

##### `ReplicationFactor`<sup>Optional</sup> <a name="ReplicationFactor" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfig.property.replicationFactor"></a>

```go
ReplicationFactor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#replication_factor DatabaseKafkaTopic#replication_factor}.

---

### DatabaseKafkaTopicConfigA <a name="DatabaseKafkaTopicConfigA" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkatopic"

&databasekafkatopic.DatabaseKafkaTopicConfigA {
	CleanupPolicy: *string,
	CompressionType: *string,
	DeleteRetentionMs: *string,
	FileDeleteDelayMs: *string,
	FlushMessages: *string,
	FlushMs: *string,
	IndexIntervalBytes: *string,
	MaxCompactionLagMs: *string,
	MaxMessageBytes: *string,
	MessageDownConversionEnable: interface{},
	MessageFormatVersion: *string,
	MessageTimestampDifferenceMaxMs: *string,
	MessageTimestampType: *string,
	MinCleanableDirtyRatio: *f64,
	MinCompactionLagMs: *string,
	MinInsyncReplicas: *f64,
	Preallocate: interface{},
	RetentionBytes: *string,
	RetentionMs: *string,
	SegmentBytes: *string,
	SegmentIndexBytes: *string,
	SegmentJitterMs: *string,
	SegmentMs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.cleanupPolicy">CleanupPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#cleanup_policy DatabaseKafkaTopic#cleanup_policy}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.compressionType">CompressionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#compression_type DatabaseKafkaTopic#compression_type}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.deleteRetentionMs">DeleteRetentionMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#delete_retention_ms DatabaseKafkaTopic#delete_retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.fileDeleteDelayMs">FileDeleteDelayMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#file_delete_delay_ms DatabaseKafkaTopic#file_delete_delay_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMessages">FlushMessages</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#flush_messages DatabaseKafkaTopic#flush_messages}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMs">FlushMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#flush_ms DatabaseKafkaTopic#flush_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.indexIntervalBytes">IndexIntervalBytes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#index_interval_bytes DatabaseKafkaTopic#index_interval_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxCompactionLagMs">MaxCompactionLagMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#max_compaction_lag_ms DatabaseKafkaTopic#max_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxMessageBytes">MaxMessageBytes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#max_message_bytes DatabaseKafkaTopic#max_message_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageDownConversionEnable">MessageDownConversionEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#message_down_conversion_enable DatabaseKafkaTopic#message_down_conversion_enable}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageFormatVersion">MessageFormatVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#message_format_version DatabaseKafkaTopic#message_format_version}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampDifferenceMaxMs">MessageTimestampDifferenceMaxMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#message_timestamp_difference_max_ms DatabaseKafkaTopic#message_timestamp_difference_max_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampType">MessageTimestampType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#message_timestamp_type DatabaseKafkaTopic#message_timestamp_type}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCleanableDirtyRatio">MinCleanableDirtyRatio</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#min_cleanable_dirty_ratio DatabaseKafkaTopic#min_cleanable_dirty_ratio}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCompactionLagMs">MinCompactionLagMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#min_compaction_lag_ms DatabaseKafkaTopic#min_compaction_lag_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minInsyncReplicas">MinInsyncReplicas</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#min_insync_replicas DatabaseKafkaTopic#min_insync_replicas}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.preallocate">Preallocate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#preallocate DatabaseKafkaTopic#preallocate}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionBytes">RetentionBytes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#retention_bytes DatabaseKafkaTopic#retention_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionMs">RetentionMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#retention_ms DatabaseKafkaTopic#retention_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentBytes">SegmentBytes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#segment_bytes DatabaseKafkaTopic#segment_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentIndexBytes">SegmentIndexBytes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#segment_index_bytes DatabaseKafkaTopic#segment_index_bytes}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentJitterMs">SegmentJitterMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#segment_jitter_ms DatabaseKafkaTopic#segment_jitter_ms}. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentMs">SegmentMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#segment_ms DatabaseKafkaTopic#segment_ms}. |

---

##### `CleanupPolicy`<sup>Optional</sup> <a name="CleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.cleanupPolicy"></a>

```go
CleanupPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#cleanup_policy DatabaseKafkaTopic#cleanup_policy}.

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#compression_type DatabaseKafkaTopic#compression_type}.

---

##### `DeleteRetentionMs`<sup>Optional</sup> <a name="DeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.deleteRetentionMs"></a>

```go
DeleteRetentionMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#delete_retention_ms DatabaseKafkaTopic#delete_retention_ms}.

---

##### `FileDeleteDelayMs`<sup>Optional</sup> <a name="FileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.fileDeleteDelayMs"></a>

```go
FileDeleteDelayMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#file_delete_delay_ms DatabaseKafkaTopic#file_delete_delay_ms}.

---

##### `FlushMessages`<sup>Optional</sup> <a name="FlushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMessages"></a>

```go
FlushMessages *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#flush_messages DatabaseKafkaTopic#flush_messages}.

---

##### `FlushMs`<sup>Optional</sup> <a name="FlushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.flushMs"></a>

```go
FlushMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#flush_ms DatabaseKafkaTopic#flush_ms}.

---

##### `IndexIntervalBytes`<sup>Optional</sup> <a name="IndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.indexIntervalBytes"></a>

```go
IndexIntervalBytes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#index_interval_bytes DatabaseKafkaTopic#index_interval_bytes}.

---

##### `MaxCompactionLagMs`<sup>Optional</sup> <a name="MaxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxCompactionLagMs"></a>

```go
MaxCompactionLagMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#max_compaction_lag_ms DatabaseKafkaTopic#max_compaction_lag_ms}.

---

##### `MaxMessageBytes`<sup>Optional</sup> <a name="MaxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.maxMessageBytes"></a>

```go
MaxMessageBytes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#max_message_bytes DatabaseKafkaTopic#max_message_bytes}.

---

##### `MessageDownConversionEnable`<sup>Optional</sup> <a name="MessageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageDownConversionEnable"></a>

```go
MessageDownConversionEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#message_down_conversion_enable DatabaseKafkaTopic#message_down_conversion_enable}.

---

##### `MessageFormatVersion`<sup>Optional</sup> <a name="MessageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageFormatVersion"></a>

```go
MessageFormatVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#message_format_version DatabaseKafkaTopic#message_format_version}.

---

##### `MessageTimestampDifferenceMaxMs`<sup>Optional</sup> <a name="MessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampDifferenceMaxMs"></a>

```go
MessageTimestampDifferenceMaxMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#message_timestamp_difference_max_ms DatabaseKafkaTopic#message_timestamp_difference_max_ms}.

---

##### `MessageTimestampType`<sup>Optional</sup> <a name="MessageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.messageTimestampType"></a>

```go
MessageTimestampType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#message_timestamp_type DatabaseKafkaTopic#message_timestamp_type}.

---

##### `MinCleanableDirtyRatio`<sup>Optional</sup> <a name="MinCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCleanableDirtyRatio"></a>

```go
MinCleanableDirtyRatio *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#min_cleanable_dirty_ratio DatabaseKafkaTopic#min_cleanable_dirty_ratio}.

---

##### `MinCompactionLagMs`<sup>Optional</sup> <a name="MinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minCompactionLagMs"></a>

```go
MinCompactionLagMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#min_compaction_lag_ms DatabaseKafkaTopic#min_compaction_lag_ms}.

---

##### `MinInsyncReplicas`<sup>Optional</sup> <a name="MinInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.minInsyncReplicas"></a>

```go
MinInsyncReplicas *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#min_insync_replicas DatabaseKafkaTopic#min_insync_replicas}.

---

##### `Preallocate`<sup>Optional</sup> <a name="Preallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.preallocate"></a>

```go
Preallocate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#preallocate DatabaseKafkaTopic#preallocate}.

---

##### `RetentionBytes`<sup>Optional</sup> <a name="RetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionBytes"></a>

```go
RetentionBytes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#retention_bytes DatabaseKafkaTopic#retention_bytes}.

---

##### `RetentionMs`<sup>Optional</sup> <a name="RetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.retentionMs"></a>

```go
RetentionMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#retention_ms DatabaseKafkaTopic#retention_ms}.

---

##### `SegmentBytes`<sup>Optional</sup> <a name="SegmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentBytes"></a>

```go
SegmentBytes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#segment_bytes DatabaseKafkaTopic#segment_bytes}.

---

##### `SegmentIndexBytes`<sup>Optional</sup> <a name="SegmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentIndexBytes"></a>

```go
SegmentIndexBytes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#segment_index_bytes DatabaseKafkaTopic#segment_index_bytes}.

---

##### `SegmentJitterMs`<sup>Optional</sup> <a name="SegmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentJitterMs"></a>

```go
SegmentJitterMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#segment_jitter_ms DatabaseKafkaTopic#segment_jitter_ms}.

---

##### `SegmentMs`<sup>Optional</sup> <a name="SegmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigA.property.segmentMs"></a>

```go
SegmentMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.49.2/docs/resources/database_kafka_topic#segment_ms DatabaseKafkaTopic#segment_ms}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseKafkaTopicConfigAList <a name="DatabaseKafkaTopicConfigAList" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkatopic"

databasekafkatopic.NewDatabaseKafkaTopicConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseKafkaTopicConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get"></a>

```go
func Get(index *f64) DatabaseKafkaTopicConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseKafkaTopicConfigAOutputReference <a name="DatabaseKafkaTopicConfigAOutputReference" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-digitalocean-go/digitalocean/databasekafkatopic"

databasekafkatopic.NewDatabaseKafkaTopicConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseKafkaTopicConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCleanupPolicy">ResetCleanupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetDeleteRetentionMs">ResetDeleteRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFileDeleteDelayMs">ResetFileDeleteDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMessages">ResetFlushMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMs">ResetFlushMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetIndexIntervalBytes">ResetIndexIntervalBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxCompactionLagMs">ResetMaxCompactionLagMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxMessageBytes">ResetMaxMessageBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageDownConversionEnable">ResetMessageDownConversionEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageFormatVersion">ResetMessageFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampDifferenceMaxMs">ResetMessageTimestampDifferenceMaxMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampType">ResetMessageTimestampType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCleanableDirtyRatio">ResetMinCleanableDirtyRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCompactionLagMs">ResetMinCompactionLagMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinInsyncReplicas">ResetMinInsyncReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetPreallocate">ResetPreallocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionBytes">ResetRetentionBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionMs">ResetRetentionMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentBytes">ResetSegmentBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentIndexBytes">ResetSegmentIndexBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentJitterMs">ResetSegmentJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentMs">ResetSegmentMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCleanupPolicy` <a name="ResetCleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCleanupPolicy"></a>

```go
func ResetCleanupPolicy()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetCompressionType"></a>

```go
func ResetCompressionType()
```

##### `ResetDeleteRetentionMs` <a name="ResetDeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetDeleteRetentionMs"></a>

```go
func ResetDeleteRetentionMs()
```

##### `ResetFileDeleteDelayMs` <a name="ResetFileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFileDeleteDelayMs"></a>

```go
func ResetFileDeleteDelayMs()
```

##### `ResetFlushMessages` <a name="ResetFlushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMessages"></a>

```go
func ResetFlushMessages()
```

##### `ResetFlushMs` <a name="ResetFlushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetFlushMs"></a>

```go
func ResetFlushMs()
```

##### `ResetIndexIntervalBytes` <a name="ResetIndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetIndexIntervalBytes"></a>

```go
func ResetIndexIntervalBytes()
```

##### `ResetMaxCompactionLagMs` <a name="ResetMaxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxCompactionLagMs"></a>

```go
func ResetMaxCompactionLagMs()
```

##### `ResetMaxMessageBytes` <a name="ResetMaxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMaxMessageBytes"></a>

```go
func ResetMaxMessageBytes()
```

##### `ResetMessageDownConversionEnable` <a name="ResetMessageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageDownConversionEnable"></a>

```go
func ResetMessageDownConversionEnable()
```

##### `ResetMessageFormatVersion` <a name="ResetMessageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageFormatVersion"></a>

```go
func ResetMessageFormatVersion()
```

##### `ResetMessageTimestampDifferenceMaxMs` <a name="ResetMessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampDifferenceMaxMs"></a>

```go
func ResetMessageTimestampDifferenceMaxMs()
```

##### `ResetMessageTimestampType` <a name="ResetMessageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMessageTimestampType"></a>

```go
func ResetMessageTimestampType()
```

##### `ResetMinCleanableDirtyRatio` <a name="ResetMinCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCleanableDirtyRatio"></a>

```go
func ResetMinCleanableDirtyRatio()
```

##### `ResetMinCompactionLagMs` <a name="ResetMinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinCompactionLagMs"></a>

```go
func ResetMinCompactionLagMs()
```

##### `ResetMinInsyncReplicas` <a name="ResetMinInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetMinInsyncReplicas"></a>

```go
func ResetMinInsyncReplicas()
```

##### `ResetPreallocate` <a name="ResetPreallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetPreallocate"></a>

```go
func ResetPreallocate()
```

##### `ResetRetentionBytes` <a name="ResetRetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionBytes"></a>

```go
func ResetRetentionBytes()
```

##### `ResetRetentionMs` <a name="ResetRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetRetentionMs"></a>

```go
func ResetRetentionMs()
```

##### `ResetSegmentBytes` <a name="ResetSegmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentBytes"></a>

```go
func ResetSegmentBytes()
```

##### `ResetSegmentIndexBytes` <a name="ResetSegmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentIndexBytes"></a>

```go
func ResetSegmentIndexBytes()
```

##### `ResetSegmentJitterMs` <a name="ResetSegmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentJitterMs"></a>

```go
func ResetSegmentJitterMs()
```

##### `ResetSegmentMs` <a name="ResetSegmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.resetSegmentMs"></a>

```go
func ResetSegmentMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicyInput">CleanupPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMsInput">DeleteRetentionMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMsInput">FileDeleteDelayMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessagesInput">FlushMessagesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMsInput">FlushMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytesInput">IndexIntervalBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMsInput">MaxCompactionLagMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytesInput">MaxMessageBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnableInput">MessageDownConversionEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersionInput">MessageFormatVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMsInput">MessageTimestampDifferenceMaxMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampTypeInput">MessageTimestampTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatioInput">MinCleanableDirtyRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMsInput">MinCompactionLagMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicasInput">MinInsyncReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocateInput">PreallocateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytesInput">RetentionBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMsInput">RetentionMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytesInput">SegmentBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytesInput">SegmentIndexBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMsInput">SegmentJitterMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMsInput">SegmentMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicy">CleanupPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMs">DeleteRetentionMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMs">FileDeleteDelayMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessages">FlushMessages</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMs">FlushMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytes">IndexIntervalBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMs">MaxCompactionLagMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytes">MaxMessageBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnable">MessageDownConversionEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersion">MessageFormatVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMs">MessageTimestampDifferenceMaxMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampType">MessageTimestampType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatio">MinCleanableDirtyRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMs">MinCompactionLagMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicas">MinInsyncReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocate">Preallocate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytes">RetentionBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMs">RetentionMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytes">SegmentBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytes">SegmentIndexBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMs">SegmentJitterMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMs">SegmentMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CleanupPolicyInput`<sup>Optional</sup> <a name="CleanupPolicyInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicyInput"></a>

```go
func CleanupPolicyInput() *string
```

- *Type:* *string

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `DeleteRetentionMsInput`<sup>Optional</sup> <a name="DeleteRetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMsInput"></a>

```go
func DeleteRetentionMsInput() *string
```

- *Type:* *string

---

##### `FileDeleteDelayMsInput`<sup>Optional</sup> <a name="FileDeleteDelayMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMsInput"></a>

```go
func FileDeleteDelayMsInput() *string
```

- *Type:* *string

---

##### `FlushMessagesInput`<sup>Optional</sup> <a name="FlushMessagesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessagesInput"></a>

```go
func FlushMessagesInput() *string
```

- *Type:* *string

---

##### `FlushMsInput`<sup>Optional</sup> <a name="FlushMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMsInput"></a>

```go
func FlushMsInput() *string
```

- *Type:* *string

---

##### `IndexIntervalBytesInput`<sup>Optional</sup> <a name="IndexIntervalBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytesInput"></a>

```go
func IndexIntervalBytesInput() *string
```

- *Type:* *string

---

##### `MaxCompactionLagMsInput`<sup>Optional</sup> <a name="MaxCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMsInput"></a>

```go
func MaxCompactionLagMsInput() *string
```

- *Type:* *string

---

##### `MaxMessageBytesInput`<sup>Optional</sup> <a name="MaxMessageBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytesInput"></a>

```go
func MaxMessageBytesInput() *string
```

- *Type:* *string

---

##### `MessageDownConversionEnableInput`<sup>Optional</sup> <a name="MessageDownConversionEnableInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnableInput"></a>

```go
func MessageDownConversionEnableInput() interface{}
```

- *Type:* interface{}

---

##### `MessageFormatVersionInput`<sup>Optional</sup> <a name="MessageFormatVersionInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersionInput"></a>

```go
func MessageFormatVersionInput() *string
```

- *Type:* *string

---

##### `MessageTimestampDifferenceMaxMsInput`<sup>Optional</sup> <a name="MessageTimestampDifferenceMaxMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMsInput"></a>

```go
func MessageTimestampDifferenceMaxMsInput() *string
```

- *Type:* *string

---

##### `MessageTimestampTypeInput`<sup>Optional</sup> <a name="MessageTimestampTypeInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampTypeInput"></a>

```go
func MessageTimestampTypeInput() *string
```

- *Type:* *string

---

##### `MinCleanableDirtyRatioInput`<sup>Optional</sup> <a name="MinCleanableDirtyRatioInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatioInput"></a>

```go
func MinCleanableDirtyRatioInput() *f64
```

- *Type:* *f64

---

##### `MinCompactionLagMsInput`<sup>Optional</sup> <a name="MinCompactionLagMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMsInput"></a>

```go
func MinCompactionLagMsInput() *string
```

- *Type:* *string

---

##### `MinInsyncReplicasInput`<sup>Optional</sup> <a name="MinInsyncReplicasInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicasInput"></a>

```go
func MinInsyncReplicasInput() *f64
```

- *Type:* *f64

---

##### `PreallocateInput`<sup>Optional</sup> <a name="PreallocateInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocateInput"></a>

```go
func PreallocateInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionBytesInput`<sup>Optional</sup> <a name="RetentionBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytesInput"></a>

```go
func RetentionBytesInput() *string
```

- *Type:* *string

---

##### `RetentionMsInput`<sup>Optional</sup> <a name="RetentionMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMsInput"></a>

```go
func RetentionMsInput() *string
```

- *Type:* *string

---

##### `SegmentBytesInput`<sup>Optional</sup> <a name="SegmentBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytesInput"></a>

```go
func SegmentBytesInput() *string
```

- *Type:* *string

---

##### `SegmentIndexBytesInput`<sup>Optional</sup> <a name="SegmentIndexBytesInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytesInput"></a>

```go
func SegmentIndexBytesInput() *string
```

- *Type:* *string

---

##### `SegmentJitterMsInput`<sup>Optional</sup> <a name="SegmentJitterMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMsInput"></a>

```go
func SegmentJitterMsInput() *string
```

- *Type:* *string

---

##### `SegmentMsInput`<sup>Optional</sup> <a name="SegmentMsInput" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMsInput"></a>

```go
func SegmentMsInput() *string
```

- *Type:* *string

---

##### `CleanupPolicy`<sup>Required</sup> <a name="CleanupPolicy" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.cleanupPolicy"></a>

```go
func CleanupPolicy() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `DeleteRetentionMs`<sup>Required</sup> <a name="DeleteRetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.deleteRetentionMs"></a>

```go
func DeleteRetentionMs() *string
```

- *Type:* *string

---

##### `FileDeleteDelayMs`<sup>Required</sup> <a name="FileDeleteDelayMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.fileDeleteDelayMs"></a>

```go
func FileDeleteDelayMs() *string
```

- *Type:* *string

---

##### `FlushMessages`<sup>Required</sup> <a name="FlushMessages" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMessages"></a>

```go
func FlushMessages() *string
```

- *Type:* *string

---

##### `FlushMs`<sup>Required</sup> <a name="FlushMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.flushMs"></a>

```go
func FlushMs() *string
```

- *Type:* *string

---

##### `IndexIntervalBytes`<sup>Required</sup> <a name="IndexIntervalBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.indexIntervalBytes"></a>

```go
func IndexIntervalBytes() *string
```

- *Type:* *string

---

##### `MaxCompactionLagMs`<sup>Required</sup> <a name="MaxCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxCompactionLagMs"></a>

```go
func MaxCompactionLagMs() *string
```

- *Type:* *string

---

##### `MaxMessageBytes`<sup>Required</sup> <a name="MaxMessageBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.maxMessageBytes"></a>

```go
func MaxMessageBytes() *string
```

- *Type:* *string

---

##### `MessageDownConversionEnable`<sup>Required</sup> <a name="MessageDownConversionEnable" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageDownConversionEnable"></a>

```go
func MessageDownConversionEnable() interface{}
```

- *Type:* interface{}

---

##### `MessageFormatVersion`<sup>Required</sup> <a name="MessageFormatVersion" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageFormatVersion"></a>

```go
func MessageFormatVersion() *string
```

- *Type:* *string

---

##### `MessageTimestampDifferenceMaxMs`<sup>Required</sup> <a name="MessageTimestampDifferenceMaxMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampDifferenceMaxMs"></a>

```go
func MessageTimestampDifferenceMaxMs() *string
```

- *Type:* *string

---

##### `MessageTimestampType`<sup>Required</sup> <a name="MessageTimestampType" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.messageTimestampType"></a>

```go
func MessageTimestampType() *string
```

- *Type:* *string

---

##### `MinCleanableDirtyRatio`<sup>Required</sup> <a name="MinCleanableDirtyRatio" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCleanableDirtyRatio"></a>

```go
func MinCleanableDirtyRatio() *f64
```

- *Type:* *f64

---

##### `MinCompactionLagMs`<sup>Required</sup> <a name="MinCompactionLagMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minCompactionLagMs"></a>

```go
func MinCompactionLagMs() *string
```

- *Type:* *string

---

##### `MinInsyncReplicas`<sup>Required</sup> <a name="MinInsyncReplicas" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.minInsyncReplicas"></a>

```go
func MinInsyncReplicas() *f64
```

- *Type:* *f64

---

##### `Preallocate`<sup>Required</sup> <a name="Preallocate" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.preallocate"></a>

```go
func Preallocate() interface{}
```

- *Type:* interface{}

---

##### `RetentionBytes`<sup>Required</sup> <a name="RetentionBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionBytes"></a>

```go
func RetentionBytes() *string
```

- *Type:* *string

---

##### `RetentionMs`<sup>Required</sup> <a name="RetentionMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.retentionMs"></a>

```go
func RetentionMs() *string
```

- *Type:* *string

---

##### `SegmentBytes`<sup>Required</sup> <a name="SegmentBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentBytes"></a>

```go
func SegmentBytes() *string
```

- *Type:* *string

---

##### `SegmentIndexBytes`<sup>Required</sup> <a name="SegmentIndexBytes" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentIndexBytes"></a>

```go
func SegmentIndexBytes() *string
```

- *Type:* *string

---

##### `SegmentJitterMs`<sup>Required</sup> <a name="SegmentJitterMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentJitterMs"></a>

```go
func SegmentJitterMs() *string
```

- *Type:* *string

---

##### `SegmentMs`<sup>Required</sup> <a name="SegmentMs" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.segmentMs"></a>

```go
func SegmentMs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-digitalocean.databaseKafkaTopic.DatabaseKafkaTopicConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



