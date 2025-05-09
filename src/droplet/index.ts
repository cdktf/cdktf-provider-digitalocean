/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DropletConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#backups Droplet#backups}
  */
  readonly backups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#droplet_agent Droplet#droplet_agent}
  */
  readonly dropletAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#graceful_shutdown Droplet#graceful_shutdown}
  */
  readonly gracefulShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#id Droplet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#image Droplet#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#ipv6 Droplet#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#ipv6_address Droplet#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#monitoring Droplet#monitoring}
  */
  readonly monitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#name Droplet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#private_networking Droplet#private_networking}
  */
  readonly privateNetworking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#region Droplet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#resize_disk Droplet#resize_disk}
  */
  readonly resizeDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#size Droplet#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#ssh_keys Droplet#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#tags Droplet#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#user_data Droplet#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#volume_ids Droplet#volume_ids}
  */
  readonly volumeIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#vpc_uuid Droplet#vpc_uuid}
  */
  readonly vpcUuid?: string;
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#backup_policy Droplet#backup_policy}
  */
  readonly backupPolicy?: DropletBackupPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#timeouts Droplet#timeouts}
  */
  readonly timeouts?: DropletTimeouts;
}
export interface DropletBackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#hour Droplet#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#plan Droplet#plan}
  */
  readonly plan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#weekday Droplet#weekday}
  */
  readonly weekday?: string;
}

export function dropletBackupPolicyToTerraform(struct?: DropletBackupPolicyOutputReference | DropletBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    plan: cdktf.stringToTerraform(struct!.plan),
    weekday: cdktf.stringToTerraform(struct!.weekday),
  }
}


export function dropletBackupPolicyToHclTerraform(struct?: DropletBackupPolicyOutputReference | DropletBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    plan: {
      value: cdktf.stringToHclTerraform(struct!.plan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekday: {
      value: cdktf.stringToHclTerraform(struct!.weekday),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DropletBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DropletBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._plan !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan;
    }
    if (this._weekday !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekday = this._weekday;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DropletBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._plan = undefined;
      this._weekday = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._plan = value.plan;
      this._weekday = value.weekday;
    }
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // weekday - computed: false, optional: true, required: false
  private _weekday?: string; 
  public get weekday() {
    return this.getStringAttribute('weekday');
  }
  public set weekday(value: string) {
    this._weekday = value;
  }
  public resetWeekday() {
    this._weekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayInput() {
    return this._weekday;
  }
}
export interface DropletTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#create Droplet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#delete Droplet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#update Droplet#update}
  */
  readonly update?: string;
}

export function dropletTimeoutsToTerraform(struct?: DropletTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dropletTimeoutsToHclTerraform(struct?: DropletTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DropletTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DropletTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DropletTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet digitalocean_droplet}
*/
export class Droplet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_droplet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Droplet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Droplet to import
  * @param importFromId The id of the existing Droplet that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Droplet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_droplet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.53.0/docs/resources/droplet digitalocean_droplet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DropletConfig
  */
  public constructor(scope: Construct, id: string, config: DropletConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_droplet',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.53.0',
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
    this._backups = config.backups;
    this._dropletAgent = config.dropletAgent;
    this._gracefulShutdown = config.gracefulShutdown;
    this._id = config.id;
    this._image = config.image;
    this._ipv6 = config.ipv6;
    this._ipv6Address = config.ipv6Address;
    this._monitoring = config.monitoring;
    this._name = config.name;
    this._privateNetworking = config.privateNetworking;
    this._region = config.region;
    this._resizeDisk = config.resizeDisk;
    this._size = config.size;
    this._sshKeys = config.sshKeys;
    this._tags = config.tags;
    this._userData = config.userData;
    this._volumeIds = config.volumeIds;
    this._vpcUuid = config.vpcUuid;
    this._backupPolicy.internalValue = config.backupPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backups - computed: false, optional: true, required: false
  private _backups?: boolean | cdktf.IResolvable; 
  public get backups() {
    return this.getBooleanAttribute('backups');
  }
  public set backups(value: boolean | cdktf.IResolvable) {
    this._backups = value;
  }
  public resetBackups() {
    this._backups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getNumberAttribute('disk');
  }

  // droplet_agent - computed: false, optional: true, required: false
  private _dropletAgent?: boolean | cdktf.IResolvable; 
  public get dropletAgent() {
    return this.getBooleanAttribute('droplet_agent');
  }
  public set dropletAgent(value: boolean | cdktf.IResolvable) {
    this._dropletAgent = value;
  }
  public resetDropletAgent() {
    this._dropletAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropletAgentInput() {
    return this._dropletAgent;
  }

  // graceful_shutdown - computed: false, optional: true, required: false
  private _gracefulShutdown?: boolean | cdktf.IResolvable; 
  public get gracefulShutdown() {
    return this.getBooleanAttribute('graceful_shutdown');
  }
  public set gracefulShutdown(value: boolean | cdktf.IResolvable) {
    this._gracefulShutdown = value;
  }
  public resetGracefulShutdown() {
    this._gracefulShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownInput() {
    return this._gracefulShutdown;
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

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_private - computed: true, optional: false, required: false
  public get ipv4AddressPrivate() {
    return this.getStringAttribute('ipv4_address_private');
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

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: boolean | cdktf.IResolvable; 
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktf.IResolvable) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
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

  // price_hourly - computed: true, optional: false, required: false
  public get priceHourly() {
    return this.getNumberAttribute('price_hourly');
  }

  // price_monthly - computed: true, optional: false, required: false
  public get priceMonthly() {
    return this.getNumberAttribute('price_monthly');
  }

  // private_networking - computed: true, optional: true, required: false
  private _privateNetworking?: boolean | cdktf.IResolvable; 
  public get privateNetworking() {
    return this.getBooleanAttribute('private_networking');
  }
  public set privateNetworking(value: boolean | cdktf.IResolvable) {
    this._privateNetworking = value;
  }
  public resetPrivateNetworking() {
    this._privateNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkingInput() {
    return this._privateNetworking;
  }

  // region - computed: true, optional: true, required: false
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

  // resize_disk - computed: false, optional: true, required: false
  private _resizeDisk?: boolean | cdktf.IResolvable; 
  public get resizeDisk() {
    return this.getBooleanAttribute('resize_disk');
  }
  public set resizeDisk(value: boolean | cdktf.IResolvable) {
    this._resizeDisk = value;
  }
  public resetResizeDisk() {
    this._resizeDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeDiskInput() {
    return this._resizeDisk;
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

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
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

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }

  // volume_ids - computed: true, optional: true, required: false
  private _volumeIds?: string[]; 
  public get volumeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('volume_ids'));
  }
  public set volumeIds(value: string[]) {
    this._volumeIds = value;
  }
  public resetVolumeIds() {
    this._volumeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdsInput() {
    return this._volumeIds;
  }

  // vpc_uuid - computed: true, optional: true, required: false
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

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new DropletBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: DropletBackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DropletTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DropletTimeouts) {
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
      backups: cdktf.booleanToTerraform(this._backups),
      droplet_agent: cdktf.booleanToTerraform(this._dropletAgent),
      graceful_shutdown: cdktf.booleanToTerraform(this._gracefulShutdown),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      name: cdktf.stringToTerraform(this._name),
      private_networking: cdktf.booleanToTerraform(this._privateNetworking),
      region: cdktf.stringToTerraform(this._region),
      resize_disk: cdktf.booleanToTerraform(this._resizeDisk),
      size: cdktf.stringToTerraform(this._size),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._volumeIds),
      vpc_uuid: cdktf.stringToTerraform(this._vpcUuid),
      backup_policy: dropletBackupPolicyToTerraform(this._backupPolicy.internalValue),
      timeouts: dropletTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backups: {
        value: cdktf.booleanToHclTerraform(this._backups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      droplet_agent: {
        value: cdktf.booleanToHclTerraform(this._dropletAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graceful_shutdown: {
        value: cdktf.booleanToHclTerraform(this._gracefulShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring: {
        value: cdktf.booleanToHclTerraform(this._monitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_networking: {
        value: cdktf.booleanToHclTerraform(this._privateNetworking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resize_disk: {
        value: cdktf.booleanToHclTerraform(this._resizeDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._volumeIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_uuid: {
        value: cdktf.stringToHclTerraform(this._vpcUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_policy: {
        value: dropletBackupPolicyToHclTerraform(this._backupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DropletBackupPolicyList",
      },
      timeouts: {
        value: dropletTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DropletTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
