// https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The comparison operator to use for value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#compare MonitorAlert#compare}
  */
  readonly compare: string;
  /**
  * Description of the alert policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#description MonitorAlert#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#enabled MonitorAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The droplets to apply the alert policy to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#entities MonitorAlert#entities}
  */
  readonly entities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#tags MonitorAlert#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#type MonitorAlert#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#value MonitorAlert#value}
  */
  readonly value: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#window MonitorAlert#window}
  */
  readonly window: string;
  /**
  * alerts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#alerts MonitorAlert#alerts}
  */
  readonly alerts: MonitorAlertAlerts;
}
export interface MonitorAlertAlertsSlack {
  /**
  * The Slack channel to send alerts to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#channel MonitorAlert#channel}
  */
  readonly channel: string;
  /**
  * The webhook URL for Slack
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#url MonitorAlert#url}
  */
  readonly url: string;
}

export function monitorAlertAlertsSlackToTerraform(struct?: MonitorAlertAlertsSlack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface MonitorAlertAlerts {
  /**
  * List of email addresses to sent notifications to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#email MonitorAlert#email}
  */
  readonly email?: string[];
  /**
  * slack block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert#slack MonitorAlert#slack}
  */
  readonly slack?: MonitorAlertAlertsSlack[] | cdktf.IResolvable;
}

export function monitorAlertAlertsToTerraform(struct?: MonitorAlertAlertsOutputReference | MonitorAlertAlerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    slack: cdktf.listMapper(monitorAlertAlertsSlackToTerraform)(struct!.slack),
  }
}

export class MonitorAlertAlertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertAlerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._slack !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertAlerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._slack = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._slack = value.slack;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // slack - computed: false, optional: true, required: false
  private _slack?: MonitorAlertAlertsSlack[] | cdktf.IResolvable; 
  public get slack() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('slack');
  }
  public set slack(value: MonitorAlertAlertsSlack[] | cdktf.IResolvable) {
    this._slack = value;
  }
  public resetSlack() {
    this._slack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert digitalocean_monitor_alert}
*/
export class MonitorAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_monitor_alert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/digitalocean/r/monitor_alert digitalocean_monitor_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorAlertConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_monitor_alert',
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
    this._compare = config.compare;
    this._description = config.description;
    this._enabled = config.enabled;
    this._entities = config.entities;
    this._tags = config.tags;
    this._type = config.type;
    this._value = config.value;
    this._window = config.window;
    this._alerts.internalValue = config.alerts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compare - computed: false, optional: false, required: true
  private _compare?: string; 
  public get compare() {
    return this.getStringAttribute('compare');
  }
  public set compare(value: string) {
    this._compare = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareInput() {
    return this._compare;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // entities - computed: false, optional: true, required: false
  private _entities?: string[]; 
  public get entities() {
    return cdktf.Fn.tolist(this.getListAttribute('entities'));
  }
  public set entities(value: string[]) {
    this._entities = value;
  }
  public resetEntities() {
    this._entities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // window - computed: false, optional: false, required: true
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // alerts - computed: false, optional: false, required: true
  private _alerts = new MonitorAlertAlertsOutputReference(this, "alerts");
  public get alerts() {
    return this._alerts;
  }
  public putAlerts(value: MonitorAlertAlerts) {
    this._alerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compare: cdktf.stringToTerraform(this._compare),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entities: cdktf.listMapper(cdktf.stringToTerraform)(this._entities),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.numberToTerraform(this._value),
      window: cdktf.stringToTerraform(this._window),
      alerts: monitorAlertAlertsToTerraform(this._alerts.internalValue),
    };
  }
}
