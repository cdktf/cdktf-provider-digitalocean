# `spacesBucket` Submodule <a name="`spacesBucket` Submodule" id="@cdktf/provider-digitalocean.spacesBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpacesBucket <a name="SpacesBucket" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket"></a>

Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket digitalocean_spaces_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  acl: str = None,
  cors_rule: typing.Union[IResolvable, typing.List[SpacesBucketCorsRule]] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[SpacesBucketLifecycleRule]] = None,
  region: str = None,
  versioning: SpacesBucketVersioning = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.name">name</a></code> | <code>str</code> | Bucket name. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.acl">acl</a></code> | <code>str</code> | Canned ACL applied on bucket creation. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule">SpacesBucketCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Unless true, the bucket will only be destroyed if empty. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#id SpacesBucket#id}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule">SpacesBucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.region">region</a></code> | <code>str</code> | Bucket region. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning">SpacesBucketVersioning</a></code> | versioning block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.name"></a>

- *Type:* str

Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#name SpacesBucket#name}

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.acl"></a>

- *Type:* str

Canned ACL applied on bucket creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#acl SpacesBucket#acl}

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.corsRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule">SpacesBucketCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#cors_rule SpacesBucket#cors_rule}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Unless true, the bucket will only be destroyed if empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#force_destroy SpacesBucket#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#id SpacesBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.lifecycleRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule">SpacesBucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#lifecycle_rule SpacesBucket#lifecycle_rule}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.region"></a>

- *Type:* str

Bucket region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#region SpacesBucket#region}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.Initializer.parameter.versioning"></a>

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning">SpacesBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#versioning SpacesBucket#versioning}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.putLifecycleRule">put_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.putVersioning">put_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetCorsRule">reset_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetLifecycleRule">reset_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetVersioning">reset_versioning</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.putCorsRule"></a>

```python
def put_cors_rule(
  value: typing.Union[IResolvable, typing.List[SpacesBucketCorsRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.putCorsRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule">SpacesBucketCorsRule</a>]]

---

##### `put_lifecycle_rule` <a name="put_lifecycle_rule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.putLifecycleRule"></a>

```python
def put_lifecycle_rule(
  value: typing.Union[IResolvable, typing.List[SpacesBucketLifecycleRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.putLifecycleRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule">SpacesBucketLifecycleRule</a>]]

---

##### `put_versioning` <a name="put_versioning" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.putVersioning"></a>

```python
def put_versioning(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.putVersioning.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#enabled SpacesBucket#enabled}.

---

##### `reset_acl` <a name="reset_acl" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_cors_rule` <a name="reset_cors_rule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetCorsRule"></a>

```python
def reset_cors_rule() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lifecycle_rule` <a name="reset_lifecycle_rule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetLifecycleRule"></a>

```python
def reset_lifecycle_rule() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_versioning` <a name="reset_versioning" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.resetVersioning"></a>

```python
def reset_versioning() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpacesBucket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucket.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpacesBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpacesBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpacesBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpacesBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.bucketDomainName">bucket_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList">SpacesBucketCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.lifecycleRule">lifecycle_rule</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList">SpacesBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.urn">urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference">SpacesBucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.aclInput">acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.corsRuleInput">cors_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule">SpacesBucketCorsRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.lifecycleRuleInput">lifecycle_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule">SpacesBucketLifecycleRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.versioningInput">versioning_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning">SpacesBucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.acl">acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_domain_name`<sup>Required</sup> <a name="bucket_domain_name" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.bucketDomainName"></a>

```python
bucket_domain_name: str
```

- *Type:* str

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.corsRule"></a>

```python
cors_rule: SpacesBucketCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList">SpacesBucketCorsRuleList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `lifecycle_rule`<sup>Required</sup> <a name="lifecycle_rule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.lifecycleRule"></a>

```python
lifecycle_rule: SpacesBucketLifecycleRuleList
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList">SpacesBucketLifecycleRuleList</a>

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.urn"></a>

```python
urn: str
```

- *Type:* str

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.versioning"></a>

```python
versioning: SpacesBucketVersioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference">SpacesBucketVersioningOutputReference</a>

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.aclInput"></a>

```python
acl_input: str
```

- *Type:* str

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.corsRuleInput"></a>

```python
cors_rule_input: typing.Union[IResolvable, typing.List[SpacesBucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule">SpacesBucketCorsRule</a>]]

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifecycle_rule_input`<sup>Optional</sup> <a name="lifecycle_rule_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.lifecycleRuleInput"></a>

```python
lifecycle_rule_input: typing.Union[IResolvable, typing.List[SpacesBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule">SpacesBucketLifecycleRule</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `versioning_input`<sup>Optional</sup> <a name="versioning_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.versioningInput"></a>

```python
versioning_input: SpacesBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning">SpacesBucketVersioning</a>

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.acl"></a>

```python
acl: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpacesBucketConfig <a name="SpacesBucketConfig" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  acl: str = None,
  cors_rule: typing.Union[IResolvable, typing.List[SpacesBucketCorsRule]] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[SpacesBucketLifecycleRule]] = None,
  region: str = None,
  versioning: SpacesBucketVersioning = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.name">name</a></code> | <code>str</code> | Bucket name. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.acl">acl</a></code> | <code>str</code> | Canned ACL applied on bucket creation. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule">SpacesBucketCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Unless true, the bucket will only be destroyed if empty. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#id SpacesBucket#id}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule">SpacesBucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.region">region</a></code> | <code>str</code> | Bucket region. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning">SpacesBucketVersioning</a></code> | versioning block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#name SpacesBucket#name}

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.acl"></a>

```python
acl: str
```

- *Type:* str

Canned ACL applied on bucket creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#acl SpacesBucket#acl}

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.corsRule"></a>

```python
cors_rule: typing.Union[IResolvable, typing.List[SpacesBucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule">SpacesBucketCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#cors_rule SpacesBucket#cors_rule}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Unless true, the bucket will only be destroyed if empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#force_destroy SpacesBucket#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#id SpacesBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.lifecycleRule"></a>

```python
lifecycle_rule: typing.Union[IResolvable, typing.List[SpacesBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule">SpacesBucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#lifecycle_rule SpacesBucket#lifecycle_rule}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Bucket region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#region SpacesBucket#region}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketConfig.property.versioning"></a>

```python
versioning: SpacesBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning">SpacesBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#versioning SpacesBucket#versioning}

---

### SpacesBucketCorsRule <a name="SpacesBucketCorsRule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketCorsRule(
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  allowed_headers: typing.List[str] = None,
  max_age_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | A list of HTTP methods (e.g. GET) which are allowed from the specified origin. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | A list of hosts from which requests using the specified methods are allowed. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | A list of headers that will be included in the CORS preflight request's Access-Control-Request-Headers. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#max_age_seconds SpacesBucket#max_age_seconds}. |

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

A list of HTTP methods (e.g. GET) which are allowed from the specified origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#allowed_methods SpacesBucket#allowed_methods}

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

A list of hosts from which requests using the specified methods are allowed.

A host may contain one wildcard (e.g. http://*.example.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#allowed_origins SpacesBucket#allowed_origins}

---

##### `allowed_headers`<sup>Optional</sup> <a name="allowed_headers" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

A list of headers that will be included in the CORS preflight request's Access-Control-Request-Headers.

A header may contain one wildcard (e.g. x-amz-*).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#allowed_headers SpacesBucket#allowed_headers}

---

##### `max_age_seconds`<sup>Optional</sup> <a name="max_age_seconds" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#max_age_seconds SpacesBucket#max_age_seconds}.

---

### SpacesBucketLifecycleRule <a name="SpacesBucketLifecycleRule" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketLifecycleRule(
  enabled: typing.Union[bool, IResolvable],
  abort_incomplete_multipart_upload_days: typing.Union[int, float] = None,
  expiration: SpacesBucketLifecycleRuleExpiration = None,
  id: str = None,
  noncurrent_version_expiration: SpacesBucketLifecycleRuleNoncurrentVersionExpiration = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#enabled SpacesBucket#enabled}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.abortIncompleteMultipartUploadDays">abort_incomplete_multipart_upload_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#abort_incomplete_multipart_upload_days SpacesBucket#abort_incomplete_multipart_upload_days}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration">SpacesBucketLifecycleRuleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#id SpacesBucket#id}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.noncurrentVersionExpiration">noncurrent_version_expiration</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpiration">SpacesBucketLifecycleRuleNoncurrentVersionExpiration</a></code> | noncurrent_version_expiration block. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#prefix SpacesBucket#prefix}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#enabled SpacesBucket#enabled}.

---

##### `abort_incomplete_multipart_upload_days`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload_days" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.abortIncompleteMultipartUploadDays"></a>

```python
abort_incomplete_multipart_upload_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#abort_incomplete_multipart_upload_days SpacesBucket#abort_incomplete_multipart_upload_days}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.expiration"></a>

```python
expiration: SpacesBucketLifecycleRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration">SpacesBucketLifecycleRuleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#expiration SpacesBucket#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#id SpacesBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noncurrent_version_expiration`<sup>Optional</sup> <a name="noncurrent_version_expiration" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.noncurrentVersionExpiration"></a>

```python
noncurrent_version_expiration: SpacesBucketLifecycleRuleNoncurrentVersionExpiration
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpiration">SpacesBucketLifecycleRuleNoncurrentVersionExpiration</a>

noncurrent_version_expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#noncurrent_version_expiration SpacesBucket#noncurrent_version_expiration}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#prefix SpacesBucket#prefix}.

---

### SpacesBucketLifecycleRuleExpiration <a name="SpacesBucketLifecycleRuleExpiration" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketLifecycleRuleExpiration(
  date: str = None,
  days: typing.Union[int, float] = None,
  expired_object_delete_marker: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration.property.date">date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#date SpacesBucket#date}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#days SpacesBucket#days}. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker">expired_object_delete_marker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#expired_object_delete_marker SpacesBucket#expired_object_delete_marker}. |

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration.property.date"></a>

```python
date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#date SpacesBucket#date}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#days SpacesBucket#days}.

---

##### `expired_object_delete_marker`<sup>Optional</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker"></a>

```python
expired_object_delete_marker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#expired_object_delete_marker SpacesBucket#expired_object_delete_marker}.

---

### SpacesBucketLifecycleRuleNoncurrentVersionExpiration <a name="SpacesBucketLifecycleRuleNoncurrentVersionExpiration" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpiration(
  days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpiration.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#days SpacesBucket#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpiration.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#days SpacesBucket#days}.

---

### SpacesBucketVersioning <a name="SpacesBucketVersioning" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketVersioning(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#enabled SpacesBucket#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#enabled SpacesBucket#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpacesBucketCorsRuleList <a name="SpacesBucketCorsRuleList" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketCorsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpacesBucketCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule">SpacesBucketCorsRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpacesBucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule">SpacesBucketCorsRule</a>]]

---


### SpacesBucketCorsRuleOutputReference <a name="SpacesBucketCorsRuleOutputReference" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.resetAllowedHeaders">reset_allowed_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.resetMaxAgeSeconds">reset_max_age_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_headers` <a name="reset_allowed_headers" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.resetAllowedHeaders"></a>

```python
def reset_allowed_headers() -> None
```

##### `reset_max_age_seconds` <a name="reset_max_age_seconds" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```python
def reset_max_age_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.maxAgeSecondsInput">max_age_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule">SpacesBucketCorsRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds_input`<sup>Optional</sup> <a name="max_age_seconds_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```python
max_age_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds`<sup>Required</sup> <a name="max_age_seconds" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpacesBucketCorsRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketCorsRule">SpacesBucketCorsRule</a>]

---


### SpacesBucketLifecycleRuleExpirationOutputReference <a name="SpacesBucketLifecycleRuleExpirationOutputReference" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.resetDate">reset_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker">reset_expired_object_delete_marker</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date` <a name="reset_date" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.resetDate"></a>

```python
def reset_date() -> None
```

##### `reset_days` <a name="reset_days" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_expired_object_delete_marker` <a name="reset_expired_object_delete_marker" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker"></a>

```python
def reset_expired_object_delete_marker() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.dateInput">date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput">expired_object_delete_marker_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.date">date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker">expired_object_delete_marker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration">SpacesBucketLifecycleRuleExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_input`<sup>Optional</sup> <a name="date_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.dateInput"></a>

```python
date_input: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expired_object_delete_marker_input`<sup>Optional</sup> <a name="expired_object_delete_marker_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput"></a>

```python
expired_object_delete_marker_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.date"></a>

```python
date: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expired_object_delete_marker`<sup>Required</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker"></a>

```python
expired_object_delete_marker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference.property.internalValue"></a>

```python
internal_value: SpacesBucketLifecycleRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration">SpacesBucketLifecycleRuleExpiration</a>

---


### SpacesBucketLifecycleRuleList <a name="SpacesBucketLifecycleRuleList" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketLifecycleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpacesBucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule">SpacesBucketLifecycleRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpacesBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule">SpacesBucketLifecycleRule</a>]]

---


### SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference <a name="SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays">reset_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays"></a>

```python
def reset_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpiration">SpacesBucketLifecycleRuleNoncurrentVersionExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```python
internal_value: SpacesBucketLifecycleRuleNoncurrentVersionExpiration
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpiration">SpacesBucketLifecycleRuleNoncurrentVersionExpiration</a>

---


### SpacesBucketLifecycleRuleOutputReference <a name="SpacesBucketLifecycleRuleOutputReference" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketLifecycleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.putExpiration">put_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration">put_noncurrent_version_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays">reset_abort_incomplete_multipart_upload_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration">reset_noncurrent_version_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expiration` <a name="put_expiration" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.putExpiration"></a>

```python
def put_expiration(
  date: str = None,
  days: typing.Union[int, float] = None,
  expired_object_delete_marker: typing.Union[bool, IResolvable] = None
) -> None
```

###### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.putExpiration.parameter.date"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#date SpacesBucket#date}.

---

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.putExpiration.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#days SpacesBucket#days}.

---

###### `expired_object_delete_marker`<sup>Optional</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.putExpiration.parameter.expiredObjectDeleteMarker"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#expired_object_delete_marker SpacesBucket#expired_object_delete_marker}.

---

##### `put_noncurrent_version_expiration` <a name="put_noncurrent_version_expiration" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration"></a>

```python
def put_noncurrent_version_expiration(
  days: typing.Union[int, float] = None
) -> None
```

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.54.0/docs/resources/spaces_bucket#days SpacesBucket#days}.

---

##### `reset_abort_incomplete_multipart_upload_days` <a name="reset_abort_incomplete_multipart_upload_days" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays"></a>

```python
def reset_abort_incomplete_multipart_upload_days() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_noncurrent_version_expiration` <a name="reset_noncurrent_version_expiration" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration"></a>

```python
def reset_noncurrent_version_expiration() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference">SpacesBucketLifecycleRuleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration">noncurrent_version_expiration</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference">SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput">abort_incomplete_multipart_upload_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.expirationInput">expiration_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration">SpacesBucketLifecycleRuleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput">noncurrent_version_expiration_input</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpiration">SpacesBucketLifecycleRuleNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays">abort_incomplete_multipart_upload_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule">SpacesBucketLifecycleRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.expiration"></a>

```python
expiration: SpacesBucketLifecycleRuleExpirationOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpirationOutputReference">SpacesBucketLifecycleRuleExpirationOutputReference</a>

---

##### `noncurrent_version_expiration`<sup>Required</sup> <a name="noncurrent_version_expiration" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration"></a>

```python
noncurrent_version_expiration: SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference">SpacesBucketLifecycleRuleNoncurrentVersionExpirationOutputReference</a>

---

##### `abort_incomplete_multipart_upload_days_input`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload_days_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput"></a>

```python
abort_incomplete_multipart_upload_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.expirationInput"></a>

```python
expiration_input: SpacesBucketLifecycleRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleExpiration">SpacesBucketLifecycleRuleExpiration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `noncurrent_version_expiration_input`<sup>Optional</sup> <a name="noncurrent_version_expiration_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput"></a>

```python
noncurrent_version_expiration_input: SpacesBucketLifecycleRuleNoncurrentVersionExpiration
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleNoncurrentVersionExpiration">SpacesBucketLifecycleRuleNoncurrentVersionExpiration</a>

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `abort_incomplete_multipart_upload_days`<sup>Required</sup> <a name="abort_incomplete_multipart_upload_days" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays"></a>

```python
abort_incomplete_multipart_upload_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpacesBucketLifecycleRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketLifecycleRule">SpacesBucketLifecycleRule</a>]

---


### SpacesBucketVersioningOutputReference <a name="SpacesBucketVersioningOutputReference" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import spaces_bucket

spacesBucket.SpacesBucketVersioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning">SpacesBucketVersioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioningOutputReference.property.internalValue"></a>

```python
internal_value: SpacesBucketVersioning
```

- *Type:* <a href="#@cdktf/provider-digitalocean.spacesBucket.SpacesBucketVersioning">SpacesBucketVersioning</a>

---



