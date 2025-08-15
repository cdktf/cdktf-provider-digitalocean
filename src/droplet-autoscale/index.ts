/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DropletAutoscaleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Droplet autoscale pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#name DropletAutoscale#name}
  */
  readonly name: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#config DropletAutoscale#config}
  */
  readonly config: DropletAutoscaleConfigA;
  /**
  * droplet_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#droplet_template DropletAutoscale#droplet_template}
  */
  readonly dropletTemplate: DropletAutoscaleDropletTemplate;
}
export interface DropletAutoscaleCurrentUtilization {
}

export function dropletAutoscaleCurrentUtilizationToTerraform(struct?: DropletAutoscaleCurrentUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dropletAutoscaleCurrentUtilizationToHclTerraform(struct?: DropletAutoscaleCurrentUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DropletAutoscaleCurrentUtilizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DropletAutoscaleCurrentUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DropletAutoscaleCurrentUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }
}

export class DropletAutoscaleCurrentUtilizationList extends cdktf.ComplexList {

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
  public get(index: number): DropletAutoscaleCurrentUtilizationOutputReference {
    return new DropletAutoscaleCurrentUtilizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DropletAutoscaleConfigA {
  /**
  * Cooldown duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#cooldown_minutes DropletAutoscale#cooldown_minutes}
  */
  readonly cooldownMinutes?: number;
  /**
  * Max number of members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#max_instances DropletAutoscale#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Min number of members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#min_instances DropletAutoscale#min_instances}
  */
  readonly minInstances?: number;
  /**
  * CPU target threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#target_cpu_utilization DropletAutoscale#target_cpu_utilization}
  */
  readonly targetCpuUtilization?: number;
  /**
  * Memory target threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#target_memory_utilization DropletAutoscale#target_memory_utilization}
  */
  readonly targetMemoryUtilization?: number;
  /**
  * Target number of members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#target_number_instances DropletAutoscale#target_number_instances}
  */
  readonly targetNumberInstances?: number;
}

export function dropletAutoscaleConfigAToTerraform(struct?: DropletAutoscaleConfigAOutputReference | DropletAutoscaleConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown_minutes: cdktf.numberToTerraform(struct!.cooldownMinutes),
    max_instances: cdktf.numberToTerraform(struct!.maxInstances),
    min_instances: cdktf.numberToTerraform(struct!.minInstances),
    target_cpu_utilization: cdktf.numberToTerraform(struct!.targetCpuUtilization),
    target_memory_utilization: cdktf.numberToTerraform(struct!.targetMemoryUtilization),
    target_number_instances: cdktf.numberToTerraform(struct!.targetNumberInstances),
  }
}


export function dropletAutoscaleConfigAToHclTerraform(struct?: DropletAutoscaleConfigAOutputReference | DropletAutoscaleConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooldown_minutes: {
      value: cdktf.numberToHclTerraform(struct!.cooldownMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_instances: {
      value: cdktf.numberToHclTerraform(struct!.maxInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instances: {
      value: cdktf.numberToHclTerraform(struct!.minInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_cpu_utilization: {
      value: cdktf.numberToHclTerraform(struct!.targetCpuUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_memory_utilization: {
      value: cdktf.numberToHclTerraform(struct!.targetMemoryUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_number_instances: {
      value: cdktf.numberToHclTerraform(struct!.targetNumberInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DropletAutoscaleConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DropletAutoscaleConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldownMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldownMinutes = this._cooldownMinutes;
    }
    if (this._maxInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstances = this._maxInstances;
    }
    if (this._minInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstances = this._minInstances;
    }
    if (this._targetCpuUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCpuUtilization = this._targetCpuUtilization;
    }
    if (this._targetMemoryUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMemoryUtilization = this._targetMemoryUtilization;
    }
    if (this._targetNumberInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNumberInstances = this._targetNumberInstances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DropletAutoscaleConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cooldownMinutes = undefined;
      this._maxInstances = undefined;
      this._minInstances = undefined;
      this._targetCpuUtilization = undefined;
      this._targetMemoryUtilization = undefined;
      this._targetNumberInstances = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cooldownMinutes = value.cooldownMinutes;
      this._maxInstances = value.maxInstances;
      this._minInstances = value.minInstances;
      this._targetCpuUtilization = value.targetCpuUtilization;
      this._targetMemoryUtilization = value.targetMemoryUtilization;
      this._targetNumberInstances = value.targetNumberInstances;
    }
  }

  // cooldown_minutes - computed: false, optional: true, required: false
  private _cooldownMinutes?: number; 
  public get cooldownMinutes() {
    return this.getNumberAttribute('cooldown_minutes');
  }
  public set cooldownMinutes(value: number) {
    this._cooldownMinutes = value;
  }
  public resetCooldownMinutes() {
    this._cooldownMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownMinutesInput() {
    return this._cooldownMinutes;
  }

  // max_instances - computed: false, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: false, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
  }

  // target_cpu_utilization - computed: false, optional: true, required: false
  private _targetCpuUtilization?: number; 
  public get targetCpuUtilization() {
    return this.getNumberAttribute('target_cpu_utilization');
  }
  public set targetCpuUtilization(value: number) {
    this._targetCpuUtilization = value;
  }
  public resetTargetCpuUtilization() {
    this._targetCpuUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCpuUtilizationInput() {
    return this._targetCpuUtilization;
  }

  // target_memory_utilization - computed: false, optional: true, required: false
  private _targetMemoryUtilization?: number; 
  public get targetMemoryUtilization() {
    return this.getNumberAttribute('target_memory_utilization');
  }
  public set targetMemoryUtilization(value: number) {
    this._targetMemoryUtilization = value;
  }
  public resetTargetMemoryUtilization() {
    this._targetMemoryUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMemoryUtilizationInput() {
    return this._targetMemoryUtilization;
  }

  // target_number_instances - computed: false, optional: true, required: false
  private _targetNumberInstances?: number; 
  public get targetNumberInstances() {
    return this.getNumberAttribute('target_number_instances');
  }
  public set targetNumberInstances(value: number) {
    this._targetNumberInstances = value;
  }
  public resetTargetNumberInstances() {
    this._targetNumberInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNumberInstancesInput() {
    return this._targetNumberInstances;
  }
}
export interface DropletAutoscaleDropletTemplate {
  /**
  * Droplet image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#image DropletAutoscale#image}
  */
  readonly image: string;
  /**
  * Enable droplet IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#ipv6 DropletAutoscale#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Droplet project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#project_id DropletAutoscale#project_id}
  */
  readonly projectId?: string;
  /**
  * Droplet region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#region DropletAutoscale#region}
  */
  readonly region: string;
  /**
  * Droplet size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#size DropletAutoscale#size}
  */
  readonly size: string;
  /**
  * Droplet SSH keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#ssh_keys DropletAutoscale#ssh_keys}
  */
  readonly sshKeys: string[];
  /**
  * Droplet tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#tags DropletAutoscale#tags}
  */
  readonly tags?: string[];
  /**
  * Droplet user data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#user_data DropletAutoscale#user_data}
  */
  readonly userData?: string;
  /**
  * Droplet VPC UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#vpc_uuid DropletAutoscale#vpc_uuid}
  */
  readonly vpcUuid?: string;
  /**
  * Enable droplet agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#with_droplet_agent DropletAutoscale#with_droplet_agent}
  */
  readonly withDropletAgent?: boolean | cdktf.IResolvable;
}

export function dropletAutoscaleDropletTemplateToTerraform(struct?: DropletAutoscaleDropletTemplateOutputReference | DropletAutoscaleDropletTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    ipv6: cdktf.booleanToTerraform(struct!.ipv6),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    size: cdktf.stringToTerraform(struct!.size),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    user_data: cdktf.stringToTerraform(struct!.userData),
    vpc_uuid: cdktf.stringToTerraform(struct!.vpcUuid),
    with_droplet_agent: cdktf.booleanToTerraform(struct!.withDropletAgent),
  }
}


export function dropletAutoscaleDropletTemplateToHclTerraform(struct?: DropletAutoscaleDropletTemplateOutputReference | DropletAutoscaleDropletTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_uuid: {
      value: cdktf.stringToHclTerraform(struct!.vpcUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_droplet_agent: {
      value: cdktf.booleanToHclTerraform(struct!.withDropletAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DropletAutoscaleDropletTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DropletAutoscaleDropletTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._vpcUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcUuid = this._vpcUuid;
    }
    if (this._withDropletAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.withDropletAgent = this._withDropletAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DropletAutoscaleDropletTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
      this._ipv6 = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._size = undefined;
      this._sshKeys = undefined;
      this._tags = undefined;
      this._userData = undefined;
      this._vpcUuid = undefined;
      this._withDropletAgent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
      this._ipv6 = value.ipv6;
      this._projectId = value.projectId;
      this._region = value.region;
      this._size = value.size;
      this._sshKeys = value.sshKeys;
      this._tags = value.tags;
      this._userData = value.userData;
      this._vpcUuid = value.vpcUuid;
      this._withDropletAgent = value.withDropletAgent;
    }
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // ssh_keys - computed: false, optional: false, required: true
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // vpc_uuid - computed: false, optional: true, required: false
  private _vpcUuid?: string; 
  public get vpcUuid() {
    return this.getStringAttribute('vpc_uuid');
  }
  public set vpcUuid(value: string) {
    this._vpcUuid = value;
  }
  public resetVpcUuid() {
    this._vpcUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcUuidInput() {
    return this._vpcUuid;
  }

  // with_droplet_agent - computed: false, optional: true, required: false
  private _withDropletAgent?: boolean | cdktf.IResolvable; 
  public get withDropletAgent() {
    return this.getBooleanAttribute('with_droplet_agent');
  }
  public set withDropletAgent(value: boolean | cdktf.IResolvable) {
    this._withDropletAgent = value;
  }
  public resetWithDropletAgent() {
    this._withDropletAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDropletAgentInput() {
    return this._withDropletAgent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale digitalocean_droplet_autoscale}
*/
export class DropletAutoscale extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_droplet_autoscale";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DropletAutoscale resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DropletAutoscale to import
  * @param importFromId The id of the existing DropletAutoscale that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DropletAutoscale to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_droplet_autoscale", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.65.0/docs/resources/droplet_autoscale digitalocean_droplet_autoscale} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DropletAutoscaleConfig
  */
  public constructor(scope: Construct, id: string, config: DropletAutoscaleConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_droplet_autoscale',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.65.0',
        providerVersionConstraint: '~> 2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._config.internalValue = config.config;
    this._dropletTemplate.internalValue = config.dropletTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // current_utilization - computed: true, optional: false, required: false
  private _currentUtilization = new DropletAutoscaleCurrentUtilizationList(this, "current_utilization", false);
  public get currentUtilization() {
    return this._currentUtilization;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // config - computed: false, optional: false, required: true
  private _config = new DropletAutoscaleConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DropletAutoscaleConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // droplet_template - computed: false, optional: false, required: true
  private _dropletTemplate = new DropletAutoscaleDropletTemplateOutputReference(this, "droplet_template");
  public get dropletTemplate() {
    return this._dropletTemplate;
  }
  public putDropletTemplate(value: DropletAutoscaleDropletTemplate) {
    this._dropletTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropletTemplateInput() {
    return this._dropletTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      config: dropletAutoscaleConfigAToTerraform(this._config.internalValue),
      droplet_template: dropletAutoscaleDropletTemplateToTerraform(this._dropletTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: dropletAutoscaleConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DropletAutoscaleConfigAList",
      },
      droplet_template: {
        value: dropletAutoscaleDropletTemplateToHclTerraform(this._dropletTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DropletAutoscaleDropletTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
