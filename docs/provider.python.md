# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-digitalocean.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitaloceanProvider <a name="DigitaloceanProvider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/digitalocean digitalocean}.

#### Initializers <a name="Initializers" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import provider

provider.DigitaloceanProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  api_endpoint: str = None,
  spaces_access_id: str = None,
  spaces_endpoint: str = None,
  spaces_secret_key: str = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.apiEndpoint">api_endpoint</a></code> | <code>str</code> | The URL to use for the DigitalOcean API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesAccessId">spaces_access_id</a></code> | <code>str</code> | The access key ID for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesEndpoint">spaces_endpoint</a></code> | <code>str</code> | The URL to use for the DigitalOcean Spaces API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesSecretKey">spaces_secret_key</a></code> | <code>str</code> | The secret access key for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | The token key for API operations. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#alias DigitaloceanProvider#alias}

---

##### `api_endpoint`<sup>Optional</sup> <a name="api_endpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.apiEndpoint"></a>

- *Type:* str

The URL to use for the DigitalOcean API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#api_endpoint DigitaloceanProvider#api_endpoint}

---

##### `spaces_access_id`<sup>Optional</sup> <a name="spaces_access_id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesAccessId"></a>

- *Type:* str

The access key ID for Spaces API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#spaces_access_id DigitaloceanProvider#spaces_access_id}

---

##### `spaces_endpoint`<sup>Optional</sup> <a name="spaces_endpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesEndpoint"></a>

- *Type:* str

The URL to use for the DigitalOcean Spaces API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#spaces_endpoint DigitaloceanProvider#spaces_endpoint}

---

##### `spaces_secret_key`<sup>Optional</sup> <a name="spaces_secret_key" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.spacesSecretKey"></a>

- *Type:* str

The secret access key for Spaces API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#spaces_secret_key DigitaloceanProvider#spaces_secret_key}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.Initializer.parameter.token"></a>

- *Type:* str

The token key for API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#token DigitaloceanProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetApiEndpoint">reset_api_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesAccessId">reset_spaces_access_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesEndpoint">reset_spaces_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesSecretKey">reset_spaces_secret_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_api_endpoint` <a name="reset_api_endpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetApiEndpoint"></a>

```python
def reset_api_endpoint() -> None
```

##### `reset_spaces_access_id` <a name="reset_spaces_access_id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesAccessId"></a>

```python
def reset_spaces_access_id() -> None
```

##### `reset_spaces_endpoint` <a name="reset_spaces_endpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesEndpoint"></a>

```python
def reset_spaces_endpoint() -> None
```

##### `reset_spaces_secret_key` <a name="reset_spaces_secret_key" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetSpacesSecretKey"></a>

```python
def reset_spaces_secret_key() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_digitalocean import provider

provider.DigitaloceanProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_digitalocean import provider

provider.DigitaloceanProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_digitalocean import provider

provider.DigitaloceanProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpointInput">api_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessIdInput">spaces_access_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpointInput">spaces_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKeyInput">spaces_secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpoint">api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessId">spaces_access_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpoint">spaces_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKey">spaces_secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `api_endpoint_input`<sup>Optional</sup> <a name="api_endpoint_input" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpointInput"></a>

```python
api_endpoint_input: str
```

- *Type:* str

---

##### `spaces_access_id_input`<sup>Optional</sup> <a name="spaces_access_id_input" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessIdInput"></a>

```python
spaces_access_id_input: str
```

- *Type:* str

---

##### `spaces_endpoint_input`<sup>Optional</sup> <a name="spaces_endpoint_input" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpointInput"></a>

```python
spaces_endpoint_input: str
```

- *Type:* str

---

##### `spaces_secret_key_input`<sup>Optional</sup> <a name="spaces_secret_key_input" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKeyInput"></a>

```python
spaces_secret_key_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `api_endpoint`<sup>Optional</sup> <a name="api_endpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.apiEndpoint"></a>

```python
api_endpoint: str
```

- *Type:* str

---

##### `spaces_access_id`<sup>Optional</sup> <a name="spaces_access_id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesAccessId"></a>

```python
spaces_access_id: str
```

- *Type:* str

---

##### `spaces_endpoint`<sup>Optional</sup> <a name="spaces_endpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesEndpoint"></a>

```python
spaces_endpoint: str
```

- *Type:* str

---

##### `spaces_secret_key`<sup>Optional</sup> <a name="spaces_secret_key" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.spacesSecretKey"></a>

```python
spaces_secret_key: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-digitalocean.provider.DigitaloceanProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DigitaloceanProviderConfig <a name="DigitaloceanProviderConfig" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_digitalocean import provider

provider.DigitaloceanProviderConfig(
  alias: str = None,
  api_endpoint: str = None,
  spaces_access_id: str = None,
  spaces_endpoint: str = None,
  spaces_secret_key: str = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.apiEndpoint">api_endpoint</a></code> | <code>str</code> | The URL to use for the DigitalOcean API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesAccessId">spaces_access_id</a></code> | <code>str</code> | The access key ID for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesEndpoint">spaces_endpoint</a></code> | <code>str</code> | The URL to use for the DigitalOcean Spaces API. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesSecretKey">spaces_secret_key</a></code> | <code>str</code> | The secret access key for Spaces API operations. |
| <code><a href="#@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.token">token</a></code> | <code>str</code> | The token key for API operations. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#alias DigitaloceanProvider#alias}

---

##### `api_endpoint`<sup>Optional</sup> <a name="api_endpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.apiEndpoint"></a>

```python
api_endpoint: str
```

- *Type:* str

The URL to use for the DigitalOcean API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#api_endpoint DigitaloceanProvider#api_endpoint}

---

##### `spaces_access_id`<sup>Optional</sup> <a name="spaces_access_id" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesAccessId"></a>

```python
spaces_access_id: str
```

- *Type:* str

The access key ID for Spaces API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#spaces_access_id DigitaloceanProvider#spaces_access_id}

---

##### `spaces_endpoint`<sup>Optional</sup> <a name="spaces_endpoint" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesEndpoint"></a>

```python
spaces_endpoint: str
```

- *Type:* str

The URL to use for the DigitalOcean Spaces API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#spaces_endpoint DigitaloceanProvider#spaces_endpoint}

---

##### `spaces_secret_key`<sup>Optional</sup> <a name="spaces_secret_key" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.spacesSecretKey"></a>

```python
spaces_secret_key: str
```

- *Type:* str

The secret access key for Spaces API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#spaces_secret_key DigitaloceanProvider#spaces_secret_key}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-digitalocean.provider.DigitaloceanProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

The token key for API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean#token DigitaloceanProvider#token}

---


