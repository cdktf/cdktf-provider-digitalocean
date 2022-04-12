// https://www.terraform.io/docs/providers/digitalocean/r/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfig extends cdktf.TerraformMetaArguments {
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#spec App#spec}
  */
  readonly spec?: AppSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#timeouts App#timeouts}
  */
  readonly timeouts?: AppTimeouts;
}
export interface AppSpecAlert {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#disabled App#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#rule App#rule}
  */
  readonly rule: string;
}

export function appSpecAlertToTerraform(struct?: AppSpecAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    rule: cdktf.stringToTerraform(struct!.rule),
  }
}

export interface AppSpecDatabase {
  /**
  * The name of the underlying DigitalOcean DBaaS cluster. This is required for production databases. For dev databases, if cluster_name is not set, a new cluster will be provisioned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#cluster_name App#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The name of the MySQL or PostgreSQL database to configure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#db_name App#db_name}
  */
  readonly dbName?: string;
  /**
  * The name of the MySQL or PostgreSQL user to configure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#db_user App#db_user}
  */
  readonly dbUser?: string;
  /**
  * The database engine to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#engine App#engine}
  */
  readonly engine?: string;
  /**
  * The name of the component
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#name App#name}
  */
  readonly name?: string;
  /**
  * Whether this is a production or dev database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#production App#production}
  */
  readonly production?: boolean | cdktf.IResolvable;
  /**
  * The version of the database engine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#version App#version}
  */
  readonly version?: string;
}

export function appSpecDatabaseToTerraform(struct?: AppSpecDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    db_user: cdktf.stringToTerraform(struct!.dbUser),
    engine: cdktf.stringToTerraform(struct!.engine),
    name: cdktf.stringToTerraform(struct!.name),
    production: cdktf.booleanToTerraform(struct!.production),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface AppSpecDomain {
  /**
  * The hostname for the domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#name App#name}
  */
  readonly name: string;
  /**
  * The type of the domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#type App#type}
  */
  readonly type?: string;
  /**
  * Indicates whether the domain includes all sub-domains, in addition to the given domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#wildcard App#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
  /**
  * If the domain uses DigitalOcean DNS and you would like App Platform to automatically manage it for you, set this to the name of the domain on your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#zone App#zone}
  */
  readonly zone?: string;
}

export function appSpecDomainToTerraform(struct?: AppSpecDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export interface AppSpecEnv {
  /**
  * The name of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#key App#key}
  */
  readonly key?: string;
  /**
  * The visibility scope of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#scope App#scope}
  */
  readonly scope?: string;
  /**
  * The type of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#type App#type}
  */
  readonly type?: string;
  /**
  * The value of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#value App#value}
  */
  readonly value?: string;
}

export function appSpecEnvToTerraform(struct?: AppSpecEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    scope: cdktf.stringToTerraform(struct!.scope),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AppSpecJobAlert {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#disabled App#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#operator App#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#rule App#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#value App#value}
  */
  readonly value: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#window App#window}
  */
  readonly window: string;
}

export function appSpecJobAlertToTerraform(struct?: AppSpecJobAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    operator: cdktf.stringToTerraform(struct!.operator),
    rule: cdktf.stringToTerraform(struct!.rule),
    value: cdktf.numberToTerraform(struct!.value),
    window: cdktf.stringToTerraform(struct!.window),
  }
}

export interface AppSpecJobEnv {
  /**
  * The name of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#key App#key}
  */
  readonly key?: string;
  /**
  * The visibility scope of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#scope App#scope}
  */
  readonly scope?: string;
  /**
  * The type of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#type App#type}
  */
  readonly type?: string;
  /**
  * The value of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#value App#value}
  */
  readonly value?: string;
}

export function appSpecJobEnvToTerraform(struct?: AppSpecJobEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    scope: cdktf.stringToTerraform(struct!.scope),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AppSpecJobGit {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * The clone URL of the repo.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo_clone_url App#repo_clone_url}
  */
  readonly repoCloneUrl?: string;
}

export function appSpecJobGitToTerraform(struct?: AppSpecJobGitOutputReference | AppSpecJobGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    repo_clone_url: cdktf.stringToTerraform(struct!.repoCloneUrl),
  }
}

export class AppSpecJobGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecJobGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._repoCloneUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoCloneUrl = this._repoCloneUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecJobGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._repoCloneUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._repoCloneUrl = value.repoCloneUrl;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // repo_clone_url - computed: false, optional: true, required: false
  private _repoCloneUrl?: string; 
  public get repoCloneUrl() {
    return this.getStringAttribute('repo_clone_url');
  }
  public set repoCloneUrl(value: string) {
    this._repoCloneUrl = value;
  }
  public resetRepoCloneUrl() {
    this._repoCloneUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoCloneUrlInput() {
    return this._repoCloneUrl;
  }
}
export interface AppSpecJobGithub {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * Whether to automatically deploy new commits made to the repo
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#deploy_on_push App#deploy_on_push}
  */
  readonly deployOnPush?: boolean | cdktf.IResolvable;
  /**
  * The name of the repo in the format `owner/repo`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo App#repo}
  */
  readonly repo?: string;
}

export function appSpecJobGithubToTerraform(struct?: AppSpecJobGithubOutputReference | AppSpecJobGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    deploy_on_push: cdktf.booleanToTerraform(struct!.deployOnPush),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}

export class AppSpecJobGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecJobGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._deployOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployOnPush = this._deployOnPush;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecJobGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._deployOnPush = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._deployOnPush = value.deployOnPush;
      this._repo = value.repo;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // deploy_on_push - computed: false, optional: true, required: false
  private _deployOnPush?: boolean | cdktf.IResolvable; 
  public get deployOnPush() {
    return this.getBooleanAttribute('deploy_on_push');
  }
  public set deployOnPush(value: boolean | cdktf.IResolvable) {
    this._deployOnPush = value;
  }
  public resetDeployOnPush() {
    this._deployOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployOnPushInput() {
    return this._deployOnPush;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface AppSpecJobGitlab {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * Whether to automatically deploy new commits made to the repo
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#deploy_on_push App#deploy_on_push}
  */
  readonly deployOnPush?: boolean | cdktf.IResolvable;
  /**
  * The name of the repo in the format `owner/repo`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo App#repo}
  */
  readonly repo?: string;
}

export function appSpecJobGitlabToTerraform(struct?: AppSpecJobGitlabOutputReference | AppSpecJobGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    deploy_on_push: cdktf.booleanToTerraform(struct!.deployOnPush),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}

export class AppSpecJobGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecJobGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._deployOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployOnPush = this._deployOnPush;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecJobGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._deployOnPush = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._deployOnPush = value.deployOnPush;
      this._repo = value.repo;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // deploy_on_push - computed: false, optional: true, required: false
  private _deployOnPush?: boolean | cdktf.IResolvable; 
  public get deployOnPush() {
    return this.getBooleanAttribute('deploy_on_push');
  }
  public set deployOnPush(value: boolean | cdktf.IResolvable) {
    this._deployOnPush = value;
  }
  public resetDeployOnPush() {
    this._deployOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployOnPushInput() {
    return this._deployOnPush;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface AppSpecJobImage {
  /**
  * The registry name. Must be left empty for the DOCR registry type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#registry App#registry}
  */
  readonly registry?: string;
  /**
  * The registry type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#registry_type App#registry_type}
  */
  readonly registryType: string;
  /**
  * The repository name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repository App#repository}
  */
  readonly repository: string;
  /**
  * The repository tag. Defaults to latest if not provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#tag App#tag}
  */
  readonly tag?: string;
}

export function appSpecJobImageToTerraform(struct?: AppSpecJobImageOutputReference | AppSpecJobImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registry: cdktf.stringToTerraform(struct!.registry),
    registry_type: cdktf.stringToTerraform(struct!.registryType),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export class AppSpecJobImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecJobImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._registryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryType = this._registryType;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecJobImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._registry = undefined;
      this._registryType = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._registry = value.registry;
      this._registryType = value.registryType;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // registry_type - computed: false, optional: false, required: true
  private _registryType?: string; 
  public get registryType() {
    return this.getStringAttribute('registry_type');
  }
  public set registryType(value: string) {
    this._registryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryTypeInput() {
    return this._registryType;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface AppSpecJobLogDestinationDatadog {
  /**
  * Datadog API key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#api_key App#api_key}
  */
  readonly apiKey: string;
  /**
  * Datadog HTTP log intake endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#endpoint App#endpoint}
  */
  readonly endpoint?: string;
}

export function appSpecJobLogDestinationDatadogToTerraform(struct?: AppSpecJobLogDestinationDatadogOutputReference | AppSpecJobLogDestinationDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}

export class AppSpecJobLogDestinationDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecJobLogDestinationDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecJobLogDestinationDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._endpoint = value.endpoint;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface AppSpecJobLogDestinationLogtail {
  /**
  * Logtail token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#token App#token}
  */
  readonly token: string;
}

export function appSpecJobLogDestinationLogtailToTerraform(struct?: AppSpecJobLogDestinationLogtailOutputReference | AppSpecJobLogDestinationLogtail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}

export class AppSpecJobLogDestinationLogtailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecJobLogDestinationLogtail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecJobLogDestinationLogtail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface AppSpecJobLogDestinationPapertrail {
  /**
  * Papertrail syslog endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#endpoint App#endpoint}
  */
  readonly endpoint: string;
}

export function appSpecJobLogDestinationPapertrailToTerraform(struct?: AppSpecJobLogDestinationPapertrailOutputReference | AppSpecJobLogDestinationPapertrail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}

export class AppSpecJobLogDestinationPapertrailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecJobLogDestinationPapertrail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecJobLogDestinationPapertrail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface AppSpecJobLogDestination {
  /**
  * Name of the log destination
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#name App#name}
  */
  readonly name: string;
  /**
  * datadog block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#datadog App#datadog}
  */
  readonly datadog?: AppSpecJobLogDestinationDatadog;
  /**
  * logtail block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#logtail App#logtail}
  */
  readonly logtail?: AppSpecJobLogDestinationLogtail;
  /**
  * papertrail block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#papertrail App#papertrail}
  */
  readonly papertrail?: AppSpecJobLogDestinationPapertrail;
}

export function appSpecJobLogDestinationToTerraform(struct?: AppSpecJobLogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    datadog: appSpecJobLogDestinationDatadogToTerraform(struct!.datadog),
    logtail: appSpecJobLogDestinationLogtailToTerraform(struct!.logtail),
    papertrail: appSpecJobLogDestinationPapertrailToTerraform(struct!.papertrail),
  }
}

export interface AppSpecJob {
  /**
  * An optional build command to run while building this component from source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#build_command App#build_command}
  */
  readonly buildCommand?: string;
  /**
  * The path to a Dockerfile relative to the root of the repo. If set, overrides usage of buildpacks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#dockerfile_path App#dockerfile_path}
  */
  readonly dockerfilePath?: string;
  /**
  * An environment slug describing the type of this app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#environment_slug App#environment_slug}
  */
  readonly environmentSlug?: string;
  /**
  * The amount of instances that this component should be scaled to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#instance_count App#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * The instance size to use for this component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#instance_size_slug App#instance_size_slug}
  */
  readonly instanceSizeSlug?: string;
  /**
  * The type of job and when it will be run during the deployment process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#kind App#kind}
  */
  readonly kind?: string;
  /**
  * The name of the component
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#name App#name}
  */
  readonly name: string;
  /**
  * An optional run command to override the component's default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#run_command App#run_command}
  */
  readonly runCommand?: string;
  /**
  * An optional path to the working directory to use for the build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#source_dir App#source_dir}
  */
  readonly sourceDir?: string;
  /**
  * alert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#alert App#alert}
  */
  readonly alert?: AppSpecJobAlert[] | cdktf.IResolvable;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#env App#env}
  */
  readonly env?: AppSpecJobEnv[] | cdktf.IResolvable;
  /**
  * git block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#git App#git}
  */
  readonly git?: AppSpecJobGit;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#github App#github}
  */
  readonly github?: AppSpecJobGithub;
  /**
  * gitlab block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#gitlab App#gitlab}
  */
  readonly gitlab?: AppSpecJobGitlab;
  /**
  * image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#image App#image}
  */
  readonly image?: AppSpecJobImage;
  /**
  * log_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#log_destination App#log_destination}
  */
  readonly logDestination?: AppSpecJobLogDestination[] | cdktf.IResolvable;
}

export function appSpecJobToTerraform(struct?: AppSpecJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    dockerfile_path: cdktf.stringToTerraform(struct!.dockerfilePath),
    environment_slug: cdktf.stringToTerraform(struct!.environmentSlug),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_size_slug: cdktf.stringToTerraform(struct!.instanceSizeSlug),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    run_command: cdktf.stringToTerraform(struct!.runCommand),
    source_dir: cdktf.stringToTerraform(struct!.sourceDir),
    alert: cdktf.listMapper(appSpecJobAlertToTerraform)(struct!.alert),
    env: cdktf.listMapper(appSpecJobEnvToTerraform)(struct!.env),
    git: appSpecJobGitToTerraform(struct!.git),
    github: appSpecJobGithubToTerraform(struct!.github),
    gitlab: appSpecJobGitlabToTerraform(struct!.gitlab),
    image: appSpecJobImageToTerraform(struct!.image),
    log_destination: cdktf.listMapper(appSpecJobLogDestinationToTerraform)(struct!.logDestination),
  }
}

export interface AppSpecServiceAlert {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#disabled App#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#operator App#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#rule App#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#value App#value}
  */
  readonly value: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#window App#window}
  */
  readonly window: string;
}

export function appSpecServiceAlertToTerraform(struct?: AppSpecServiceAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    operator: cdktf.stringToTerraform(struct!.operator),
    rule: cdktf.stringToTerraform(struct!.rule),
    value: cdktf.numberToTerraform(struct!.value),
    window: cdktf.stringToTerraform(struct!.window),
  }
}

export interface AppSpecServiceCorsAllowOrigins {
  /**
  * Exact string match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#exact App#exact}
  */
  readonly exact?: string;
  /**
  * Prefix-based match. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#prefix App#prefix}
  */
  readonly prefix?: string;
  /**
  * RE2 style regex-based match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#regex App#regex}
  */
  readonly regex?: string;
}

export function appSpecServiceCorsAllowOriginsToTerraform(struct?: AppSpecServiceCorsAllowOriginsOutputReference | AppSpecServiceCorsAllowOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}

export class AppSpecServiceCorsAllowOriginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecServiceCorsAllowOrigins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecServiceCorsAllowOrigins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface AppSpecServiceCors {
  /**
  * Whether browsers should expose the response to the client-side JavaScript code when the request’s credentials mode is `include`. This configures the Access-Control-Allow-Credentials header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#allow_credentials App#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * The set of allowed HTTP request headers. This configures the Access-Control-Allow-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#allow_headers App#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * The set of allowed HTTP methods. This configures the Access-Control-Allow-Methods header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#allow_methods App#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * The set of HTTP response headers that browsers are allowed to access. This configures the Access-Control-Expose-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#expose_headers App#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * An optional duration specifying how long browsers can cache the results of a preflight request. This configures the Access-Control-Max-Age header. Example: `5h30m`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#max_age App#max_age}
  */
  readonly maxAge?: string;
  /**
  * allow_origins block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#allow_origins App#allow_origins}
  */
  readonly allowOrigins?: AppSpecServiceCorsAllowOrigins;
}

export function appSpecServiceCorsToTerraform(struct?: AppSpecServiceCorsOutputReference | AppSpecServiceCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowMethods),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    allow_origins: appSpecServiceCorsAllowOriginsToTerraform(struct!.allowOrigins),
  }
}

export class AppSpecServiceCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecServiceCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._allowOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecServiceCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
      this._allowOrigins.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
      this._allowOrigins.internalValue = value.allowOrigins;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_headers'));
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_methods'));
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('expose_headers'));
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins = new AppSpecServiceCorsAllowOriginsOutputReference(this, "allow_origins");
  public get allowOrigins() {
    return this._allowOrigins;
  }
  public putAllowOrigins(value: AppSpecServiceCorsAllowOrigins) {
    this._allowOrigins.internalValue = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins.internalValue;
  }
}
export interface AppSpecServiceEnv {
  /**
  * The name of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#key App#key}
  */
  readonly key?: string;
  /**
  * The visibility scope of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#scope App#scope}
  */
  readonly scope?: string;
  /**
  * The type of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#type App#type}
  */
  readonly type?: string;
  /**
  * The value of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#value App#value}
  */
  readonly value?: string;
}

export function appSpecServiceEnvToTerraform(struct?: AppSpecServiceEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    scope: cdktf.stringToTerraform(struct!.scope),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AppSpecServiceGit {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * The clone URL of the repo.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo_clone_url App#repo_clone_url}
  */
  readonly repoCloneUrl?: string;
}

export function appSpecServiceGitToTerraform(struct?: AppSpecServiceGitOutputReference | AppSpecServiceGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    repo_clone_url: cdktf.stringToTerraform(struct!.repoCloneUrl),
  }
}

export class AppSpecServiceGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecServiceGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._repoCloneUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoCloneUrl = this._repoCloneUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecServiceGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._repoCloneUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._repoCloneUrl = value.repoCloneUrl;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // repo_clone_url - computed: false, optional: true, required: false
  private _repoCloneUrl?: string; 
  public get repoCloneUrl() {
    return this.getStringAttribute('repo_clone_url');
  }
  public set repoCloneUrl(value: string) {
    this._repoCloneUrl = value;
  }
  public resetRepoCloneUrl() {
    this._repoCloneUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoCloneUrlInput() {
    return this._repoCloneUrl;
  }
}
export interface AppSpecServiceGithub {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * Whether to automatically deploy new commits made to the repo
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#deploy_on_push App#deploy_on_push}
  */
  readonly deployOnPush?: boolean | cdktf.IResolvable;
  /**
  * The name of the repo in the format `owner/repo`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo App#repo}
  */
  readonly repo?: string;
}

export function appSpecServiceGithubToTerraform(struct?: AppSpecServiceGithubOutputReference | AppSpecServiceGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    deploy_on_push: cdktf.booleanToTerraform(struct!.deployOnPush),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}

export class AppSpecServiceGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecServiceGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._deployOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployOnPush = this._deployOnPush;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecServiceGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._deployOnPush = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._deployOnPush = value.deployOnPush;
      this._repo = value.repo;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // deploy_on_push - computed: false, optional: true, required: false
  private _deployOnPush?: boolean | cdktf.IResolvable; 
  public get deployOnPush() {
    return this.getBooleanAttribute('deploy_on_push');
  }
  public set deployOnPush(value: boolean | cdktf.IResolvable) {
    this._deployOnPush = value;
  }
  public resetDeployOnPush() {
    this._deployOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployOnPushInput() {
    return this._deployOnPush;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface AppSpecServiceGitlab {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * Whether to automatically deploy new commits made to the repo
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#deploy_on_push App#deploy_on_push}
  */
  readonly deployOnPush?: boolean | cdktf.IResolvable;
  /**
  * The name of the repo in the format `owner/repo`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo App#repo}
  */
  readonly repo?: string;
}

export function appSpecServiceGitlabToTerraform(struct?: AppSpecServiceGitlabOutputReference | AppSpecServiceGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    deploy_on_push: cdktf.booleanToTerraform(struct!.deployOnPush),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}

export class AppSpecServiceGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecServiceGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._deployOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployOnPush = this._deployOnPush;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecServiceGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._deployOnPush = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._deployOnPush = value.deployOnPush;
      this._repo = value.repo;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // deploy_on_push - computed: false, optional: true, required: false
  private _deployOnPush?: boolean | cdktf.IResolvable; 
  public get deployOnPush() {
    return this.getBooleanAttribute('deploy_on_push');
  }
  public set deployOnPush(value: boolean | cdktf.IResolvable) {
    this._deployOnPush = value;
  }
  public resetDeployOnPush() {
    this._deployOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployOnPushInput() {
    return this._deployOnPush;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface AppSpecServiceHealthCheck {
  /**
  * The number of failed health checks before considered unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#failure_threshold App#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * The route path used for the HTTP health check ping.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#http_path App#http_path}
  */
  readonly httpPath?: string;
  /**
  * The number of seconds to wait before beginning health checks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#initial_delay_seconds App#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * The number of seconds to wait between health checks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#period_seconds App#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * The number of successful health checks before considered healthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#success_threshold App#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * The number of seconds after which the check times out.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#timeout_seconds App#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function appSpecServiceHealthCheckToTerraform(struct?: AppSpecServiceHealthCheckOutputReference | AppSpecServiceHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_path: cdktf.stringToTerraform(struct!.httpPath),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}

export class AppSpecServiceHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecServiceHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPath = this._httpPath;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecServiceHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._httpPath = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._httpPath = value.httpPath;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // http_path - computed: false, optional: true, required: false
  private _httpPath?: string; 
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }
  public set httpPath(value: string) {
    this._httpPath = value;
  }
  public resetHttpPath() {
    this._httpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPathInput() {
    return this._httpPath;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface AppSpecServiceImage {
  /**
  * The registry name. Must be left empty for the DOCR registry type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#registry App#registry}
  */
  readonly registry?: string;
  /**
  * The registry type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#registry_type App#registry_type}
  */
  readonly registryType: string;
  /**
  * The repository name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repository App#repository}
  */
  readonly repository: string;
  /**
  * The repository tag. Defaults to latest if not provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#tag App#tag}
  */
  readonly tag?: string;
}

export function appSpecServiceImageToTerraform(struct?: AppSpecServiceImageOutputReference | AppSpecServiceImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registry: cdktf.stringToTerraform(struct!.registry),
    registry_type: cdktf.stringToTerraform(struct!.registryType),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export class AppSpecServiceImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecServiceImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._registryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryType = this._registryType;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecServiceImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._registry = undefined;
      this._registryType = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._registry = value.registry;
      this._registryType = value.registryType;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // registry_type - computed: false, optional: false, required: true
  private _registryType?: string; 
  public get registryType() {
    return this.getStringAttribute('registry_type');
  }
  public set registryType(value: string) {
    this._registryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryTypeInput() {
    return this._registryType;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface AppSpecServiceLogDestinationDatadog {
  /**
  * Datadog API key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#api_key App#api_key}
  */
  readonly apiKey: string;
  /**
  * Datadog HTTP log intake endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#endpoint App#endpoint}
  */
  readonly endpoint?: string;
}

export function appSpecServiceLogDestinationDatadogToTerraform(struct?: AppSpecServiceLogDestinationDatadogOutputReference | AppSpecServiceLogDestinationDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}

export class AppSpecServiceLogDestinationDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecServiceLogDestinationDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecServiceLogDestinationDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._endpoint = value.endpoint;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface AppSpecServiceLogDestinationLogtail {
  /**
  * Logtail token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#token App#token}
  */
  readonly token: string;
}

export function appSpecServiceLogDestinationLogtailToTerraform(struct?: AppSpecServiceLogDestinationLogtailOutputReference | AppSpecServiceLogDestinationLogtail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}

export class AppSpecServiceLogDestinationLogtailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecServiceLogDestinationLogtail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecServiceLogDestinationLogtail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface AppSpecServiceLogDestinationPapertrail {
  /**
  * Papertrail syslog endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#endpoint App#endpoint}
  */
  readonly endpoint: string;
}

export function appSpecServiceLogDestinationPapertrailToTerraform(struct?: AppSpecServiceLogDestinationPapertrailOutputReference | AppSpecServiceLogDestinationPapertrail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}

export class AppSpecServiceLogDestinationPapertrailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecServiceLogDestinationPapertrail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecServiceLogDestinationPapertrail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface AppSpecServiceLogDestination {
  /**
  * Name of the log destination
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#name App#name}
  */
  readonly name: string;
  /**
  * datadog block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#datadog App#datadog}
  */
  readonly datadog?: AppSpecServiceLogDestinationDatadog;
  /**
  * logtail block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#logtail App#logtail}
  */
  readonly logtail?: AppSpecServiceLogDestinationLogtail;
  /**
  * papertrail block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#papertrail App#papertrail}
  */
  readonly papertrail?: AppSpecServiceLogDestinationPapertrail;
}

export function appSpecServiceLogDestinationToTerraform(struct?: AppSpecServiceLogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    datadog: appSpecServiceLogDestinationDatadogToTerraform(struct!.datadog),
    logtail: appSpecServiceLogDestinationLogtailToTerraform(struct!.logtail),
    papertrail: appSpecServiceLogDestinationPapertrailToTerraform(struct!.papertrail),
  }
}

export interface AppSpecServiceRoutes {
  /**
  * Path specifies an route by HTTP path prefix. Paths must start with / and must be unique within the app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#path App#path}
  */
  readonly path?: string;
  /**
  *  An optional flag to preserve the path that is forwarded to the backend service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#preserve_path_prefix App#preserve_path_prefix}
  */
  readonly preservePathPrefix?: boolean | cdktf.IResolvable;
}

export function appSpecServiceRoutesToTerraform(struct?: AppSpecServiceRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    preserve_path_prefix: cdktf.booleanToTerraform(struct!.preservePathPrefix),
  }
}

export interface AppSpecService {
  /**
  * An optional build command to run while building this component from source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#build_command App#build_command}
  */
  readonly buildCommand?: string;
  /**
  * The path to a Dockerfile relative to the root of the repo. If set, overrides usage of buildpacks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#dockerfile_path App#dockerfile_path}
  */
  readonly dockerfilePath?: string;
  /**
  * An environment slug describing the type of this app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#environment_slug App#environment_slug}
  */
  readonly environmentSlug?: string;
  /**
  * The internal port on which this service's run command will listen.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#http_port App#http_port}
  */
  readonly httpPort?: number;
  /**
  * The amount of instances that this component should be scaled to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#instance_count App#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * The instance size to use for this component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#instance_size_slug App#instance_size_slug}
  */
  readonly instanceSizeSlug?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#internal_ports App#internal_ports}
  */
  readonly internalPorts?: number[];
  /**
  * The name of the component
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#name App#name}
  */
  readonly name: string;
  /**
  * An optional run command to override the component's default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#run_command App#run_command}
  */
  readonly runCommand?: string;
  /**
  * An optional path to the working directory to use for the build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#source_dir App#source_dir}
  */
  readonly sourceDir?: string;
  /**
  * alert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#alert App#alert}
  */
  readonly alert?: AppSpecServiceAlert[] | cdktf.IResolvable;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#cors App#cors}
  */
  readonly cors?: AppSpecServiceCors;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#env App#env}
  */
  readonly env?: AppSpecServiceEnv[] | cdktf.IResolvable;
  /**
  * git block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#git App#git}
  */
  readonly git?: AppSpecServiceGit;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#github App#github}
  */
  readonly github?: AppSpecServiceGithub;
  /**
  * gitlab block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#gitlab App#gitlab}
  */
  readonly gitlab?: AppSpecServiceGitlab;
  /**
  * health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#health_check App#health_check}
  */
  readonly healthCheck?: AppSpecServiceHealthCheck;
  /**
  * image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#image App#image}
  */
  readonly image?: AppSpecServiceImage;
  /**
  * log_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#log_destination App#log_destination}
  */
  readonly logDestination?: AppSpecServiceLogDestination[] | cdktf.IResolvable;
  /**
  * routes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#routes App#routes}
  */
  readonly routes?: AppSpecServiceRoutes[] | cdktf.IResolvable;
}

export function appSpecServiceToTerraform(struct?: AppSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    dockerfile_path: cdktf.stringToTerraform(struct!.dockerfilePath),
    environment_slug: cdktf.stringToTerraform(struct!.environmentSlug),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_size_slug: cdktf.stringToTerraform(struct!.instanceSizeSlug),
    internal_ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.internalPorts),
    name: cdktf.stringToTerraform(struct!.name),
    run_command: cdktf.stringToTerraform(struct!.runCommand),
    source_dir: cdktf.stringToTerraform(struct!.sourceDir),
    alert: cdktf.listMapper(appSpecServiceAlertToTerraform)(struct!.alert),
    cors: appSpecServiceCorsToTerraform(struct!.cors),
    env: cdktf.listMapper(appSpecServiceEnvToTerraform)(struct!.env),
    git: appSpecServiceGitToTerraform(struct!.git),
    github: appSpecServiceGithubToTerraform(struct!.github),
    gitlab: appSpecServiceGitlabToTerraform(struct!.gitlab),
    health_check: appSpecServiceHealthCheckToTerraform(struct!.healthCheck),
    image: appSpecServiceImageToTerraform(struct!.image),
    log_destination: cdktf.listMapper(appSpecServiceLogDestinationToTerraform)(struct!.logDestination),
    routes: cdktf.listMapper(appSpecServiceRoutesToTerraform)(struct!.routes),
  }
}

export interface AppSpecStaticSiteCorsAllowOrigins {
  /**
  * Exact string match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#exact App#exact}
  */
  readonly exact?: string;
  /**
  * Prefix-based match. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#prefix App#prefix}
  */
  readonly prefix?: string;
  /**
  * RE2 style regex-based match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#regex App#regex}
  */
  readonly regex?: string;
}

export function appSpecStaticSiteCorsAllowOriginsToTerraform(struct?: AppSpecStaticSiteCorsAllowOriginsOutputReference | AppSpecStaticSiteCorsAllowOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}

export class AppSpecStaticSiteCorsAllowOriginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecStaticSiteCorsAllowOrigins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecStaticSiteCorsAllowOrigins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface AppSpecStaticSiteCors {
  /**
  * Whether browsers should expose the response to the client-side JavaScript code when the request’s credentials mode is `include`. This configures the Access-Control-Allow-Credentials header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#allow_credentials App#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * The set of allowed HTTP request headers. This configures the Access-Control-Allow-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#allow_headers App#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * The set of allowed HTTP methods. This configures the Access-Control-Allow-Methods header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#allow_methods App#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * The set of HTTP response headers that browsers are allowed to access. This configures the Access-Control-Expose-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#expose_headers App#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * An optional duration specifying how long browsers can cache the results of a preflight request. This configures the Access-Control-Max-Age header. Example: `5h30m`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#max_age App#max_age}
  */
  readonly maxAge?: string;
  /**
  * allow_origins block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#allow_origins App#allow_origins}
  */
  readonly allowOrigins?: AppSpecStaticSiteCorsAllowOrigins;
}

export function appSpecStaticSiteCorsToTerraform(struct?: AppSpecStaticSiteCorsOutputReference | AppSpecStaticSiteCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowMethods),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    allow_origins: appSpecStaticSiteCorsAllowOriginsToTerraform(struct!.allowOrigins),
  }
}

export class AppSpecStaticSiteCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecStaticSiteCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._allowOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecStaticSiteCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
      this._allowOrigins.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
      this._allowOrigins.internalValue = value.allowOrigins;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_headers'));
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_methods'));
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('expose_headers'));
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins = new AppSpecStaticSiteCorsAllowOriginsOutputReference(this, "allow_origins");
  public get allowOrigins() {
    return this._allowOrigins;
  }
  public putAllowOrigins(value: AppSpecStaticSiteCorsAllowOrigins) {
    this._allowOrigins.internalValue = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins.internalValue;
  }
}
export interface AppSpecStaticSiteEnv {
  /**
  * The name of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#key App#key}
  */
  readonly key?: string;
  /**
  * The visibility scope of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#scope App#scope}
  */
  readonly scope?: string;
  /**
  * The type of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#type App#type}
  */
  readonly type?: string;
  /**
  * The value of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#value App#value}
  */
  readonly value?: string;
}

export function appSpecStaticSiteEnvToTerraform(struct?: AppSpecStaticSiteEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    scope: cdktf.stringToTerraform(struct!.scope),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AppSpecStaticSiteGit {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * The clone URL of the repo.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo_clone_url App#repo_clone_url}
  */
  readonly repoCloneUrl?: string;
}

export function appSpecStaticSiteGitToTerraform(struct?: AppSpecStaticSiteGitOutputReference | AppSpecStaticSiteGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    repo_clone_url: cdktf.stringToTerraform(struct!.repoCloneUrl),
  }
}

export class AppSpecStaticSiteGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecStaticSiteGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._repoCloneUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoCloneUrl = this._repoCloneUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecStaticSiteGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._repoCloneUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._repoCloneUrl = value.repoCloneUrl;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // repo_clone_url - computed: false, optional: true, required: false
  private _repoCloneUrl?: string; 
  public get repoCloneUrl() {
    return this.getStringAttribute('repo_clone_url');
  }
  public set repoCloneUrl(value: string) {
    this._repoCloneUrl = value;
  }
  public resetRepoCloneUrl() {
    this._repoCloneUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoCloneUrlInput() {
    return this._repoCloneUrl;
  }
}
export interface AppSpecStaticSiteGithub {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * Whether to automatically deploy new commits made to the repo
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#deploy_on_push App#deploy_on_push}
  */
  readonly deployOnPush?: boolean | cdktf.IResolvable;
  /**
  * The name of the repo in the format `owner/repo`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo App#repo}
  */
  readonly repo?: string;
}

export function appSpecStaticSiteGithubToTerraform(struct?: AppSpecStaticSiteGithubOutputReference | AppSpecStaticSiteGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    deploy_on_push: cdktf.booleanToTerraform(struct!.deployOnPush),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}

export class AppSpecStaticSiteGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecStaticSiteGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._deployOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployOnPush = this._deployOnPush;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecStaticSiteGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._deployOnPush = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._deployOnPush = value.deployOnPush;
      this._repo = value.repo;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // deploy_on_push - computed: false, optional: true, required: false
  private _deployOnPush?: boolean | cdktf.IResolvable; 
  public get deployOnPush() {
    return this.getBooleanAttribute('deploy_on_push');
  }
  public set deployOnPush(value: boolean | cdktf.IResolvable) {
    this._deployOnPush = value;
  }
  public resetDeployOnPush() {
    this._deployOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployOnPushInput() {
    return this._deployOnPush;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface AppSpecStaticSiteGitlab {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * Whether to automatically deploy new commits made to the repo
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#deploy_on_push App#deploy_on_push}
  */
  readonly deployOnPush?: boolean | cdktf.IResolvable;
  /**
  * The name of the repo in the format `owner/repo`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo App#repo}
  */
  readonly repo?: string;
}

export function appSpecStaticSiteGitlabToTerraform(struct?: AppSpecStaticSiteGitlabOutputReference | AppSpecStaticSiteGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    deploy_on_push: cdktf.booleanToTerraform(struct!.deployOnPush),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}

export class AppSpecStaticSiteGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecStaticSiteGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._deployOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployOnPush = this._deployOnPush;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecStaticSiteGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._deployOnPush = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._deployOnPush = value.deployOnPush;
      this._repo = value.repo;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // deploy_on_push - computed: false, optional: true, required: false
  private _deployOnPush?: boolean | cdktf.IResolvable; 
  public get deployOnPush() {
    return this.getBooleanAttribute('deploy_on_push');
  }
  public set deployOnPush(value: boolean | cdktf.IResolvable) {
    this._deployOnPush = value;
  }
  public resetDeployOnPush() {
    this._deployOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployOnPushInput() {
    return this._deployOnPush;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface AppSpecStaticSiteRoutes {
  /**
  * Path specifies an route by HTTP path prefix. Paths must start with / and must be unique within the app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#path App#path}
  */
  readonly path?: string;
  /**
  *  An optional flag to preserve the path that is forwarded to the backend service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#preserve_path_prefix App#preserve_path_prefix}
  */
  readonly preservePathPrefix?: boolean | cdktf.IResolvable;
}

export function appSpecStaticSiteRoutesToTerraform(struct?: AppSpecStaticSiteRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    preserve_path_prefix: cdktf.booleanToTerraform(struct!.preservePathPrefix),
  }
}

export interface AppSpecStaticSite {
  /**
  * An optional build command to run while building this component from source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#build_command App#build_command}
  */
  readonly buildCommand?: string;
  /**
  * The name of the document to use as the fallback for any requests to documents that are not found when serving this static site.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#catchall_document App#catchall_document}
  */
  readonly catchallDocument?: string;
  /**
  * The path to a Dockerfile relative to the root of the repo. If set, overrides usage of buildpacks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#dockerfile_path App#dockerfile_path}
  */
  readonly dockerfilePath?: string;
  /**
  * An environment slug describing the type of this app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#environment_slug App#environment_slug}
  */
  readonly environmentSlug?: string;
  /**
  * The name of the error document to use when serving this static site.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#error_document App#error_document}
  */
  readonly errorDocument?: string;
  /**
  * The name of the index document to use when serving this static site.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#index_document App#index_document}
  */
  readonly indexDocument?: string;
  /**
  * The name of the component
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#name App#name}
  */
  readonly name: string;
  /**
  * An optional path to where the built assets will be located, relative to the build context. If not set, App Platform will automatically scan for these directory names: `_static`, `dist`, `public`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#output_dir App#output_dir}
  */
  readonly outputDir?: string;
  /**
  * An optional path to the working directory to use for the build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#source_dir App#source_dir}
  */
  readonly sourceDir?: string;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#cors App#cors}
  */
  readonly cors?: AppSpecStaticSiteCors;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#env App#env}
  */
  readonly env?: AppSpecStaticSiteEnv[] | cdktf.IResolvable;
  /**
  * git block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#git App#git}
  */
  readonly git?: AppSpecStaticSiteGit;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#github App#github}
  */
  readonly github?: AppSpecStaticSiteGithub;
  /**
  * gitlab block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#gitlab App#gitlab}
  */
  readonly gitlab?: AppSpecStaticSiteGitlab;
  /**
  * routes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#routes App#routes}
  */
  readonly routes?: AppSpecStaticSiteRoutes[] | cdktf.IResolvable;
}

export function appSpecStaticSiteToTerraform(struct?: AppSpecStaticSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    catchall_document: cdktf.stringToTerraform(struct!.catchallDocument),
    dockerfile_path: cdktf.stringToTerraform(struct!.dockerfilePath),
    environment_slug: cdktf.stringToTerraform(struct!.environmentSlug),
    error_document: cdktf.stringToTerraform(struct!.errorDocument),
    index_document: cdktf.stringToTerraform(struct!.indexDocument),
    name: cdktf.stringToTerraform(struct!.name),
    output_dir: cdktf.stringToTerraform(struct!.outputDir),
    source_dir: cdktf.stringToTerraform(struct!.sourceDir),
    cors: appSpecStaticSiteCorsToTerraform(struct!.cors),
    env: cdktf.listMapper(appSpecStaticSiteEnvToTerraform)(struct!.env),
    git: appSpecStaticSiteGitToTerraform(struct!.git),
    github: appSpecStaticSiteGithubToTerraform(struct!.github),
    gitlab: appSpecStaticSiteGitlabToTerraform(struct!.gitlab),
    routes: cdktf.listMapper(appSpecStaticSiteRoutesToTerraform)(struct!.routes),
  }
}

export interface AppSpecWorkerAlert {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#disabled App#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#operator App#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#rule App#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#value App#value}
  */
  readonly value: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#window App#window}
  */
  readonly window: string;
}

export function appSpecWorkerAlertToTerraform(struct?: AppSpecWorkerAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    operator: cdktf.stringToTerraform(struct!.operator),
    rule: cdktf.stringToTerraform(struct!.rule),
    value: cdktf.numberToTerraform(struct!.value),
    window: cdktf.stringToTerraform(struct!.window),
  }
}

export interface AppSpecWorkerEnv {
  /**
  * The name of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#key App#key}
  */
  readonly key?: string;
  /**
  * The visibility scope of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#scope App#scope}
  */
  readonly scope?: string;
  /**
  * The type of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#type App#type}
  */
  readonly type?: string;
  /**
  * The value of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#value App#value}
  */
  readonly value?: string;
}

export function appSpecWorkerEnvToTerraform(struct?: AppSpecWorkerEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    scope: cdktf.stringToTerraform(struct!.scope),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AppSpecWorkerGit {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * The clone URL of the repo.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo_clone_url App#repo_clone_url}
  */
  readonly repoCloneUrl?: string;
}

export function appSpecWorkerGitToTerraform(struct?: AppSpecWorkerGitOutputReference | AppSpecWorkerGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    repo_clone_url: cdktf.stringToTerraform(struct!.repoCloneUrl),
  }
}

export class AppSpecWorkerGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecWorkerGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._repoCloneUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoCloneUrl = this._repoCloneUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecWorkerGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._repoCloneUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._repoCloneUrl = value.repoCloneUrl;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // repo_clone_url - computed: false, optional: true, required: false
  private _repoCloneUrl?: string; 
  public get repoCloneUrl() {
    return this.getStringAttribute('repo_clone_url');
  }
  public set repoCloneUrl(value: string) {
    this._repoCloneUrl = value;
  }
  public resetRepoCloneUrl() {
    this._repoCloneUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoCloneUrlInput() {
    return this._repoCloneUrl;
  }
}
export interface AppSpecWorkerGithub {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * Whether to automatically deploy new commits made to the repo
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#deploy_on_push App#deploy_on_push}
  */
  readonly deployOnPush?: boolean | cdktf.IResolvable;
  /**
  * The name of the repo in the format `owner/repo`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo App#repo}
  */
  readonly repo?: string;
}

export function appSpecWorkerGithubToTerraform(struct?: AppSpecWorkerGithubOutputReference | AppSpecWorkerGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    deploy_on_push: cdktf.booleanToTerraform(struct!.deployOnPush),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}

export class AppSpecWorkerGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecWorkerGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._deployOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployOnPush = this._deployOnPush;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecWorkerGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._deployOnPush = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._deployOnPush = value.deployOnPush;
      this._repo = value.repo;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // deploy_on_push - computed: false, optional: true, required: false
  private _deployOnPush?: boolean | cdktf.IResolvable; 
  public get deployOnPush() {
    return this.getBooleanAttribute('deploy_on_push');
  }
  public set deployOnPush(value: boolean | cdktf.IResolvable) {
    this._deployOnPush = value;
  }
  public resetDeployOnPush() {
    this._deployOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployOnPushInput() {
    return this._deployOnPush;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface AppSpecWorkerGitlab {
  /**
  * The name of the branch to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * Whether to automatically deploy new commits made to the repo
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#deploy_on_push App#deploy_on_push}
  */
  readonly deployOnPush?: boolean | cdktf.IResolvable;
  /**
  * The name of the repo in the format `owner/repo`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repo App#repo}
  */
  readonly repo?: string;
}

export function appSpecWorkerGitlabToTerraform(struct?: AppSpecWorkerGitlabOutputReference | AppSpecWorkerGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    deploy_on_push: cdktf.booleanToTerraform(struct!.deployOnPush),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}

export class AppSpecWorkerGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecWorkerGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._deployOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployOnPush = this._deployOnPush;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecWorkerGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._deployOnPush = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._deployOnPush = value.deployOnPush;
      this._repo = value.repo;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // deploy_on_push - computed: false, optional: true, required: false
  private _deployOnPush?: boolean | cdktf.IResolvable; 
  public get deployOnPush() {
    return this.getBooleanAttribute('deploy_on_push');
  }
  public set deployOnPush(value: boolean | cdktf.IResolvable) {
    this._deployOnPush = value;
  }
  public resetDeployOnPush() {
    this._deployOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployOnPushInput() {
    return this._deployOnPush;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface AppSpecWorkerImage {
  /**
  * The registry name. Must be left empty for the DOCR registry type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#registry App#registry}
  */
  readonly registry?: string;
  /**
  * The registry type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#registry_type App#registry_type}
  */
  readonly registryType: string;
  /**
  * The repository name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#repository App#repository}
  */
  readonly repository: string;
  /**
  * The repository tag. Defaults to latest if not provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#tag App#tag}
  */
  readonly tag?: string;
}

export function appSpecWorkerImageToTerraform(struct?: AppSpecWorkerImageOutputReference | AppSpecWorkerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registry: cdktf.stringToTerraform(struct!.registry),
    registry_type: cdktf.stringToTerraform(struct!.registryType),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export class AppSpecWorkerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecWorkerImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._registryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryType = this._registryType;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecWorkerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._registry = undefined;
      this._registryType = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._registry = value.registry;
      this._registryType = value.registryType;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // registry_type - computed: false, optional: false, required: true
  private _registryType?: string; 
  public get registryType() {
    return this.getStringAttribute('registry_type');
  }
  public set registryType(value: string) {
    this._registryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryTypeInput() {
    return this._registryType;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface AppSpecWorkerLogDestinationDatadog {
  /**
  * Datadog API key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#api_key App#api_key}
  */
  readonly apiKey: string;
  /**
  * Datadog HTTP log intake endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#endpoint App#endpoint}
  */
  readonly endpoint?: string;
}

export function appSpecWorkerLogDestinationDatadogToTerraform(struct?: AppSpecWorkerLogDestinationDatadogOutputReference | AppSpecWorkerLogDestinationDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}

export class AppSpecWorkerLogDestinationDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecWorkerLogDestinationDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecWorkerLogDestinationDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._endpoint = value.endpoint;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface AppSpecWorkerLogDestinationLogtail {
  /**
  * Logtail token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#token App#token}
  */
  readonly token: string;
}

export function appSpecWorkerLogDestinationLogtailToTerraform(struct?: AppSpecWorkerLogDestinationLogtailOutputReference | AppSpecWorkerLogDestinationLogtail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}

export class AppSpecWorkerLogDestinationLogtailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecWorkerLogDestinationLogtail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecWorkerLogDestinationLogtail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface AppSpecWorkerLogDestinationPapertrail {
  /**
  * Papertrail syslog endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#endpoint App#endpoint}
  */
  readonly endpoint: string;
}

export function appSpecWorkerLogDestinationPapertrailToTerraform(struct?: AppSpecWorkerLogDestinationPapertrailOutputReference | AppSpecWorkerLogDestinationPapertrail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}

export class AppSpecWorkerLogDestinationPapertrailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpecWorkerLogDestinationPapertrail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpecWorkerLogDestinationPapertrail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface AppSpecWorkerLogDestination {
  /**
  * Name of the log destination
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#name App#name}
  */
  readonly name: string;
  /**
  * datadog block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#datadog App#datadog}
  */
  readonly datadog?: AppSpecWorkerLogDestinationDatadog;
  /**
  * logtail block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#logtail App#logtail}
  */
  readonly logtail?: AppSpecWorkerLogDestinationLogtail;
  /**
  * papertrail block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#papertrail App#papertrail}
  */
  readonly papertrail?: AppSpecWorkerLogDestinationPapertrail;
}

export function appSpecWorkerLogDestinationToTerraform(struct?: AppSpecWorkerLogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    datadog: appSpecWorkerLogDestinationDatadogToTerraform(struct!.datadog),
    logtail: appSpecWorkerLogDestinationLogtailToTerraform(struct!.logtail),
    papertrail: appSpecWorkerLogDestinationPapertrailToTerraform(struct!.papertrail),
  }
}

export interface AppSpecWorker {
  /**
  * An optional build command to run while building this component from source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#build_command App#build_command}
  */
  readonly buildCommand?: string;
  /**
  * The path to a Dockerfile relative to the root of the repo. If set, overrides usage of buildpacks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#dockerfile_path App#dockerfile_path}
  */
  readonly dockerfilePath?: string;
  /**
  * An environment slug describing the type of this app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#environment_slug App#environment_slug}
  */
  readonly environmentSlug?: string;
  /**
  * The amount of instances that this component should be scaled to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#instance_count App#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * The instance size to use for this component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#instance_size_slug App#instance_size_slug}
  */
  readonly instanceSizeSlug?: string;
  /**
  * The name of the component
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#name App#name}
  */
  readonly name: string;
  /**
  * An optional run command to override the component's default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#run_command App#run_command}
  */
  readonly runCommand?: string;
  /**
  * An optional path to the working directory to use for the build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#source_dir App#source_dir}
  */
  readonly sourceDir?: string;
  /**
  * alert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#alert App#alert}
  */
  readonly alert?: AppSpecWorkerAlert[] | cdktf.IResolvable;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#env App#env}
  */
  readonly env?: AppSpecWorkerEnv[] | cdktf.IResolvable;
  /**
  * git block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#git App#git}
  */
  readonly git?: AppSpecWorkerGit;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#github App#github}
  */
  readonly github?: AppSpecWorkerGithub;
  /**
  * gitlab block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#gitlab App#gitlab}
  */
  readonly gitlab?: AppSpecWorkerGitlab;
  /**
  * image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#image App#image}
  */
  readonly image?: AppSpecWorkerImage;
  /**
  * log_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#log_destination App#log_destination}
  */
  readonly logDestination?: AppSpecWorkerLogDestination[] | cdktf.IResolvable;
}

export function appSpecWorkerToTerraform(struct?: AppSpecWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    dockerfile_path: cdktf.stringToTerraform(struct!.dockerfilePath),
    environment_slug: cdktf.stringToTerraform(struct!.environmentSlug),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_size_slug: cdktf.stringToTerraform(struct!.instanceSizeSlug),
    name: cdktf.stringToTerraform(struct!.name),
    run_command: cdktf.stringToTerraform(struct!.runCommand),
    source_dir: cdktf.stringToTerraform(struct!.sourceDir),
    alert: cdktf.listMapper(appSpecWorkerAlertToTerraform)(struct!.alert),
    env: cdktf.listMapper(appSpecWorkerEnvToTerraform)(struct!.env),
    git: appSpecWorkerGitToTerraform(struct!.git),
    github: appSpecWorkerGithubToTerraform(struct!.github),
    gitlab: appSpecWorkerGitlabToTerraform(struct!.gitlab),
    image: appSpecWorkerImageToTerraform(struct!.image),
    log_destination: cdktf.listMapper(appSpecWorkerLogDestinationToTerraform)(struct!.logDestination),
  }
}

export interface AppSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#domains App#domains}
  */
  readonly domains?: string[];
  /**
  * The name of the app. Must be unique across all apps in the same account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#name App#name}
  */
  readonly name: string;
  /**
  * The slug for the DigitalOcean data center region hosting the app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#region App#region}
  */
  readonly region?: string;
  /**
  * alert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#alert App#alert}
  */
  readonly alert?: AppSpecAlert[] | cdktf.IResolvable;
  /**
  * database block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#database App#database}
  */
  readonly database?: AppSpecDatabase[] | cdktf.IResolvable;
  /**
  * domain block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#domain App#domain}
  */
  readonly domain?: AppSpecDomain[] | cdktf.IResolvable;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#env App#env}
  */
  readonly env?: AppSpecEnv[] | cdktf.IResolvable;
  /**
  * job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#job App#job}
  */
  readonly job?: AppSpecJob[] | cdktf.IResolvable;
  /**
  * service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#service App#service}
  */
  readonly service?: AppSpecService[] | cdktf.IResolvable;
  /**
  * static_site block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#static_site App#static_site}
  */
  readonly staticSite?: AppSpecStaticSite[] | cdktf.IResolvable;
  /**
  * worker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#worker App#worker}
  */
  readonly worker?: AppSpecWorker[] | cdktf.IResolvable;
}

export function appSpecToTerraform(struct?: AppSpecOutputReference | AppSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.domains),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    alert: cdktf.listMapper(appSpecAlertToTerraform)(struct!.alert),
    database: cdktf.listMapper(appSpecDatabaseToTerraform)(struct!.database),
    domain: cdktf.listMapper(appSpecDomainToTerraform)(struct!.domain),
    env: cdktf.listMapper(appSpecEnvToTerraform)(struct!.env),
    job: cdktf.listMapper(appSpecJobToTerraform)(struct!.job),
    service: cdktf.listMapper(appSpecServiceToTerraform)(struct!.service),
    static_site: cdktf.listMapper(appSpecStaticSiteToTerraform)(struct!.staticSite),
    worker: cdktf.listMapper(appSpecWorkerToTerraform)(struct!.worker),
  }
}

export class AppSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._job !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._staticSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticSite = this._staticSite;
    }
    if (this._worker !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
      this._name = undefined;
      this._region = undefined;
      this._alert = undefined;
      this._database = undefined;
      this._domain = undefined;
      this._env = undefined;
      this._job = undefined;
      this._service = undefined;
      this._staticSite = undefined;
      this._worker = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
      this._name = value.name;
      this._region = value.region;
      this._alert = value.alert;
      this._database = value.database;
      this._domain = value.domain;
      this._env = value.env;
      this._job = value.job;
      this._service = value.service;
      this._staticSite = value.staticSite;
      this._worker = value.worker;
    }
  }

  // domains - computed: true, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // alert - computed: false, optional: true, required: false
  private _alert?: AppSpecAlert[] | cdktf.IResolvable; 
  public get alert() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('alert')));
  }
  public set alert(value: AppSpecAlert[] | cdktf.IResolvable) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // database - computed: false, optional: true, required: false
  private _database?: AppSpecDatabase[] | cdktf.IResolvable; 
  public get database() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('database');
  }
  public set database(value: AppSpecDatabase[] | cdktf.IResolvable) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: AppSpecDomain[] | cdktf.IResolvable; 
  public get domain() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('domain');
  }
  public set domain(value: AppSpecDomain[] | cdktf.IResolvable) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // env - computed: false, optional: true, required: false
  private _env?: AppSpecEnv[] | cdktf.IResolvable; 
  public get env() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('env')));
  }
  public set env(value: AppSpecEnv[] | cdktf.IResolvable) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // job - computed: false, optional: true, required: false
  private _job?: AppSpecJob[] | cdktf.IResolvable; 
  public get job() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('job');
  }
  public set job(value: AppSpecJob[] | cdktf.IResolvable) {
    this._job = value;
  }
  public resetJob() {
    this._job = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job;
  }

  // service - computed: false, optional: true, required: false
  private _service?: AppSpecService[] | cdktf.IResolvable; 
  public get service() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('service');
  }
  public set service(value: AppSpecService[] | cdktf.IResolvable) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // static_site - computed: false, optional: true, required: false
  private _staticSite?: AppSpecStaticSite[] | cdktf.IResolvable; 
  public get staticSite() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('static_site');
  }
  public set staticSite(value: AppSpecStaticSite[] | cdktf.IResolvable) {
    this._staticSite = value;
  }
  public resetStaticSite() {
    this._staticSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSiteInput() {
    return this._staticSite;
  }

  // worker - computed: false, optional: true, required: false
  private _worker?: AppSpecWorker[] | cdktf.IResolvable; 
  public get worker() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('worker');
  }
  public set worker(value: AppSpecWorker[] | cdktf.IResolvable) {
    this._worker = value;
  }
  public resetWorker() {
    this._worker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker;
  }
}
export interface AppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/app#create App#create}
  */
  readonly create?: string;
}

export function appTimeoutsToTerraform(struct?: AppTimeoutsOutputReference | AppTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class AppTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/digitalocean/r/app digitalocean_app}
*/
export class App extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/digitalocean/r/app digitalocean_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AppConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_app',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.19.0',
        providerVersionConstraint: '~> 2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_deployment_id - computed: true, optional: false, required: false
  public get activeDeploymentId() {
    return this.getStringAttribute('active_deployment_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_ingress - computed: true, optional: false, required: false
  public get defaultIngress() {
    return this.getStringAttribute('default_ingress');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // live_url - computed: true, optional: false, required: false
  public get liveUrl() {
    return this.getStringAttribute('live_url');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new AppSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      spec: appSpecToTerraform(this._spec.internalValue),
      timeouts: appTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
