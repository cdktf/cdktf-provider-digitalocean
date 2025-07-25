/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { DataDigitaloceanAppSpecWorkerLogDestinationDatadogList,
DataDigitaloceanAppSpecWorkerLogDestinationLogtailList,
DataDigitaloceanAppSpecWorkerAlertList,
DataDigitaloceanAppSpecWorkerAutoscalingList,
DataDigitaloceanAppSpecWorkerBitbucketList,
DataDigitaloceanAppSpecWorkerEnvList,
DataDigitaloceanAppSpecWorkerGitList,
DataDigitaloceanAppSpecWorkerGithubList,
DataDigitaloceanAppSpecWorkerGitlabList,
DataDigitaloceanAppSpecWorkerImageList,
DataDigitaloceanAppSpecAlertList,
DataDigitaloceanAppSpecDatabaseList,
DataDigitaloceanAppSpecDomainList,
DataDigitaloceanAppSpecEgressList,
DataDigitaloceanAppSpecEnvList,
DataDigitaloceanAppSpecFunctionList,
DataDigitaloceanAppSpecIngressList,
DataDigitaloceanAppSpecJobList,
DataDigitaloceanAppSpecServiceList,
DataDigitaloceanAppSpecStaticSiteList } from './structs0'
export interface DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuth {
}

export function dataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuthToTerraform(struct?: DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuthToHclTerraform(struct?: DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuthList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuthOutputReference {
    return new DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanAppSpecWorkerLogDestinationOpenSearch {
}

export function dataDigitaloceanAppSpecWorkerLogDestinationOpenSearchToTerraform(struct?: DataDigitaloceanAppSpecWorkerLogDestinationOpenSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanAppSpecWorkerLogDestinationOpenSearchToHclTerraform(struct?: DataDigitaloceanAppSpecWorkerLogDestinationOpenSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanAppSpecWorkerLogDestinationOpenSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanAppSpecWorkerLogDestinationOpenSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
}

export class DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchOutputReference {
    return new DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanAppSpecWorkerLogDestinationPapertrail {
}

export function dataDigitaloceanAppSpecWorkerLogDestinationPapertrailToTerraform(struct?: DataDigitaloceanAppSpecWorkerLogDestinationPapertrail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanAppSpecWorkerLogDestinationPapertrailToHclTerraform(struct?: DataDigitaloceanAppSpecWorkerLogDestinationPapertrail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanAppSpecWorkerLogDestinationPapertrailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanAppSpecWorkerLogDestinationPapertrail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanAppSpecWorkerLogDestinationPapertrail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}

export class DataDigitaloceanAppSpecWorkerLogDestinationPapertrailList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDigitaloceanAppSpecWorkerLogDestinationPapertrailOutputReference {
    return new DataDigitaloceanAppSpecWorkerLogDestinationPapertrailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanAppSpecWorkerLogDestination {
}

export function dataDigitaloceanAppSpecWorkerLogDestinationToTerraform(struct?: DataDigitaloceanAppSpecWorkerLogDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanAppSpecWorkerLogDestinationToHclTerraform(struct?: DataDigitaloceanAppSpecWorkerLogDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanAppSpecWorkerLogDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanAppSpecWorkerLogDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanAppSpecWorkerLogDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datadog - computed: true, optional: false, required: false
  private _datadog = new DataDigitaloceanAppSpecWorkerLogDestinationDatadogList(this, "datadog", false);
  public get datadog() {
    return this._datadog;
  }

  // logtail - computed: true, optional: false, required: false
  private _logtail = new DataDigitaloceanAppSpecWorkerLogDestinationLogtailList(this, "logtail", false);
  public get logtail() {
    return this._logtail;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_search - computed: true, optional: false, required: false
  private _openSearch = new DataDigitaloceanAppSpecWorkerLogDestinationOpenSearchList(this, "open_search", false);
  public get openSearch() {
    return this._openSearch;
  }

  // papertrail - computed: true, optional: false, required: false
  private _papertrail = new DataDigitaloceanAppSpecWorkerLogDestinationPapertrailList(this, "papertrail", false);
  public get papertrail() {
    return this._papertrail;
  }
}

export class DataDigitaloceanAppSpecWorkerLogDestinationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDigitaloceanAppSpecWorkerLogDestinationOutputReference {
    return new DataDigitaloceanAppSpecWorkerLogDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanAppSpecWorkerTermination {
}

export function dataDigitaloceanAppSpecWorkerTerminationToTerraform(struct?: DataDigitaloceanAppSpecWorkerTermination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanAppSpecWorkerTerminationToHclTerraform(struct?: DataDigitaloceanAppSpecWorkerTermination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanAppSpecWorkerTerminationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanAppSpecWorkerTermination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanAppSpecWorkerTermination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grace_period_seconds - computed: true, optional: false, required: false
  public get gracePeriodSeconds() {
    return this.getNumberAttribute('grace_period_seconds');
  }
}

export class DataDigitaloceanAppSpecWorkerTerminationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDigitaloceanAppSpecWorkerTerminationOutputReference {
    return new DataDigitaloceanAppSpecWorkerTerminationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanAppSpecWorker {
}

export function dataDigitaloceanAppSpecWorkerToTerraform(struct?: DataDigitaloceanAppSpecWorker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanAppSpecWorkerToHclTerraform(struct?: DataDigitaloceanAppSpecWorker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanAppSpecWorkerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanAppSpecWorker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanAppSpecWorker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert - computed: true, optional: false, required: false
  private _alert = new DataDigitaloceanAppSpecWorkerAlertList(this, "alert", false);
  public get alert() {
    return this._alert;
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataDigitaloceanAppSpecWorkerAutoscalingList(this, "autoscaling", false);
  public get autoscaling() {
    return this._autoscaling;
  }

  // bitbucket - computed: true, optional: false, required: false
  private _bitbucket = new DataDigitaloceanAppSpecWorkerBitbucketList(this, "bitbucket", false);
  public get bitbucket() {
    return this._bitbucket;
  }

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // dockerfile_path - computed: true, optional: false, required: false
  public get dockerfilePath() {
    return this.getStringAttribute('dockerfile_path');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataDigitaloceanAppSpecWorkerEnvList(this, "env", true);
  public get env() {
    return this._env;
  }

  // environment_slug - computed: true, optional: false, required: false
  public get environmentSlug() {
    return this.getStringAttribute('environment_slug');
  }

  // git - computed: true, optional: false, required: false
  private _git = new DataDigitaloceanAppSpecWorkerGitList(this, "git", false);
  public get git() {
    return this._git;
  }

  // github - computed: true, optional: false, required: false
  private _github = new DataDigitaloceanAppSpecWorkerGithubList(this, "github", false);
  public get github() {
    return this._github;
  }

  // gitlab - computed: true, optional: false, required: false
  private _gitlab = new DataDigitaloceanAppSpecWorkerGitlabList(this, "gitlab", false);
  public get gitlab() {
    return this._gitlab;
  }

  // image - computed: true, optional: false, required: false
  private _image = new DataDigitaloceanAppSpecWorkerImageList(this, "image", false);
  public get image() {
    return this._image;
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_size_slug - computed: true, optional: false, required: false
  public get instanceSizeSlug() {
    return this.getStringAttribute('instance_size_slug');
  }

  // log_destination - computed: true, optional: false, required: false
  private _logDestination = new DataDigitaloceanAppSpecWorkerLogDestinationList(this, "log_destination", false);
  public get logDestination() {
    return this._logDestination;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // run_command - computed: true, optional: false, required: false
  public get runCommand() {
    return this.getStringAttribute('run_command');
  }

  // source_dir - computed: true, optional: false, required: false
  public get sourceDir() {
    return this.getStringAttribute('source_dir');
  }

  // termination - computed: true, optional: false, required: false
  private _termination = new DataDigitaloceanAppSpecWorkerTerminationList(this, "termination", false);
  public get termination() {
    return this._termination;
  }
}

export class DataDigitaloceanAppSpecWorkerList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDigitaloceanAppSpecWorkerOutputReference {
    return new DataDigitaloceanAppSpecWorkerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanAppSpec {
}

export function dataDigitaloceanAppSpecToTerraform(struct?: DataDigitaloceanAppSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDigitaloceanAppSpecToHclTerraform(struct?: DataDigitaloceanAppSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDigitaloceanAppSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanAppSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanAppSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert - computed: true, optional: false, required: false
  private _alert = new DataDigitaloceanAppSpecAlertList(this, "alert", false);
  public get alert() {
    return this._alert;
  }

  // database - computed: true, optional: false, required: false
  private _database = new DataDigitaloceanAppSpecDatabaseList(this, "database", false);
  public get database() {
    return this._database;
  }

  // disable_edge_cache - computed: true, optional: false, required: false
  public get disableEdgeCache() {
    return this.getBooleanAttribute('disable_edge_cache');
  }

  // disable_email_obfuscation - computed: true, optional: false, required: false
  public get disableEmailObfuscation() {
    return this.getBooleanAttribute('disable_email_obfuscation');
  }

  // domain - computed: true, optional: false, required: false
  private _domain = new DataDigitaloceanAppSpecDomainList(this, "domain", false);
  public get domain() {
    return this._domain;
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }

  // egress - computed: true, optional: false, required: false
  private _egress = new DataDigitaloceanAppSpecEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }

  // enhanced_threat_control_enabled - computed: true, optional: false, required: false
  public get enhancedThreatControlEnabled() {
    return this.getBooleanAttribute('enhanced_threat_control_enabled');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataDigitaloceanAppSpecEnvList(this, "env", true);
  public get env() {
    return this._env;
  }

  // features - computed: true, optional: false, required: false
  public get features() {
    return cdktf.Fn.tolist(this.getListAttribute('features'));
  }

  // function - computed: true, optional: false, required: false
  private _function = new DataDigitaloceanAppSpecFunctionList(this, "function", false);
  public get function() {
    return this._function;
  }

  // ingress - computed: true, optional: false, required: false
  private _ingress = new DataDigitaloceanAppSpecIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }

  // job - computed: true, optional: false, required: false
  private _job = new DataDigitaloceanAppSpecJobList(this, "job", false);
  public get job() {
    return this._job;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service - computed: true, optional: false, required: false
  private _service = new DataDigitaloceanAppSpecServiceList(this, "service", false);
  public get service() {
    return this._service;
  }

  // static_site - computed: true, optional: false, required: false
  private _staticSite = new DataDigitaloceanAppSpecStaticSiteList(this, "static_site", false);
  public get staticSite() {
    return this._staticSite;
  }

  // worker - computed: true, optional: false, required: false
  private _worker = new DataDigitaloceanAppSpecWorkerList(this, "worker", false);
  public get worker() {
    return this._worker;
  }
}

export class DataDigitaloceanAppSpecList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDigitaloceanAppSpecOutputReference {
    return new DataDigitaloceanAppSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDigitaloceanAppDedicatedIps {
  /**
  * The ID of the dedicated egress IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/app#id DataDigitaloceanApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP address of the dedicated egress IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/app#ip DataDigitaloceanApp#ip}
  */
  readonly ip?: string;
  /**
  * The status of the dedicated egress IP: 'UNKNOWN', 'ASSIGNING', 'ASSIGNED', or 'REMOVED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.61.0/docs/data-sources/app#status DataDigitaloceanApp#status}
  */
  readonly status?: string;
}

export function dataDigitaloceanAppDedicatedIpsToTerraform(struct?: DataDigitaloceanAppDedicatedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataDigitaloceanAppDedicatedIpsToHclTerraform(struct?: DataDigitaloceanAppDedicatedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDigitaloceanAppDedicatedIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDigitaloceanAppDedicatedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDigitaloceanAppDedicatedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
      this._status = value.status;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataDigitaloceanAppDedicatedIpsList extends cdktf.ComplexList {
  public internalValue? : DataDigitaloceanAppDedicatedIps[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDigitaloceanAppDedicatedIpsOutputReference {
    return new DataDigitaloceanAppDedicatedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
