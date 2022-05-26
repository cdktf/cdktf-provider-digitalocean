// https://www.terraform.io/docs/providers/digitalocean/r/droplet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DropletConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#backups Droplet#backups}
  */
  readonly backups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#droplet_agent Droplet#droplet_agent}
  */
  readonly dropletAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#graceful_shutdown Droplet#graceful_shutdown}
  */
  readonly gracefulShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#id Droplet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#image Droplet#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#ipv6 Droplet#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#monitoring Droplet#monitoring}
  */
  readonly monitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#name Droplet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#private_networking Droplet#private_networking}
  */
  readonly privateNetworking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#region Droplet#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#resize_disk Droplet#resize_disk}
  */
  readonly resizeDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#size Droplet#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#ssh_keys Droplet#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#tags Droplet#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#user_data Droplet#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#volume_ids Droplet#volume_ids}
  */
  readonly volumeIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet#vpc_uuid Droplet#vpc_uuid}
  */
  readonly vpcUuid?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet digitalocean_droplet}
*/
export class Droplet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_droplet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/digitalocean/r/droplet digitalocean_droplet} Resource
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
        providerVersion: '2.20.0',
        providerVersionConstraint: '~> 2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backups = config.backups;
    this._dropletAgent = config.dropletAgent;
    this._gracefulShutdown = config.gracefulShutdown;
    this._id = config.id;
    this._image = config.image;
    this._ipv6 = config.ipv6;
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

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
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
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      name: cdktf.stringToTerraform(this._name),
      private_networking: cdktf.booleanToTerraform(this._privateNetworking),
      region: cdktf.stringToTerraform(this._region),
      resize_disk: cdktf.booleanToTerraform(this._resizeDisk),
      size: cdktf.stringToTerraform(this._size),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform)(this._sshKeys),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      volume_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._volumeIds),
      vpc_uuid: cdktf.stringToTerraform(this._vpcUuid),
    };
  }
}
