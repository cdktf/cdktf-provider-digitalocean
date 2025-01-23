// https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#disable_lets_encrypt_dns_records Loadbalancer#disable_lets_encrypt_dns_records}
  */
  readonly disableLetsEncryptDnsRecords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#droplet_ids Loadbalancer#droplet_ids}
  */
  readonly dropletIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#droplet_tag Loadbalancer#droplet_tag}
  */
  readonly dropletTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#enable_backend_keepalive Loadbalancer#enable_backend_keepalive}
  */
  readonly enableBackendKeepalive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#enable_proxy_protocol Loadbalancer#enable_proxy_protocol}
  */
  readonly enableProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#http_idle_timeout_seconds Loadbalancer#http_idle_timeout_seconds}
  */
  readonly httpIdleTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#id Loadbalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#name Loadbalancer#name}
  */
  readonly name: string;
  /**
  * the type of network the load balancer is accessible from (EXTERNAL or INTERNAL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#network Loadbalancer#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}
  */
  readonly redirectHttpToHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#region Loadbalancer#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#size Loadbalancer#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#size_unit Loadbalancer#size_unit}
  */
  readonly sizeUnit?: number;
  /**
  * list of load balancer IDs to put behind a global load balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#target_load_balancer_ids Loadbalancer#target_load_balancer_ids}
  */
  readonly targetLoadBalancerIds?: string[];
  /**
  * the type of the load balancer (GLOBAL, REGIONAL, or REGIONAL_NETWORK)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#type Loadbalancer#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#vpc_uuid Loadbalancer#vpc_uuid}
  */
  readonly vpcUuid?: string;
  /**
  * domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#domains Loadbalancer#domains}
  */
  readonly domains?: LoadbalancerDomains[] | cdktf.IResolvable;
  /**
  * firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#firewall Loadbalancer#firewall}
  */
  readonly firewall?: LoadbalancerFirewall;
  /**
  * forwarding_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#forwarding_rule Loadbalancer#forwarding_rule}
  */
  readonly forwardingRule?: LoadbalancerForwardingRule[] | cdktf.IResolvable;
  /**
  * glb_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#glb_settings Loadbalancer#glb_settings}
  */
  readonly glbSettings?: LoadbalancerGlbSettings;
  /**
  * healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#healthcheck Loadbalancer#healthcheck}
  */
  readonly healthcheck?: LoadbalancerHealthcheck;
  /**
  * sticky_sessions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#sticky_sessions Loadbalancer#sticky_sessions}
  */
  readonly stickySessions?: LoadbalancerStickySessions;
}
export interface LoadbalancerDomains {
  /**
  * name of certificate required for TLS handshaking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}
  */
  readonly certificateName?: string;
  /**
  * flag indicating if domain is managed by DigitalOcean
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#is_managed Loadbalancer#is_managed}
  */
  readonly isManaged?: boolean | cdktf.IResolvable;
  /**
  * domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#name Loadbalancer#name}
  */
  readonly name: string;
}

export function loadbalancerDomainsToTerraform(struct?: LoadbalancerDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_name: cdktf.stringToTerraform(struct!.certificateName),
    is_managed: cdktf.booleanToTerraform(struct!.isManaged),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function loadbalancerDomainsToHclTerraform(struct?: LoadbalancerDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_name: {
      value: cdktf.stringToHclTerraform(struct!.certificateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_managed: {
      value: cdktf.booleanToHclTerraform(struct!.isManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateName = this._certificateName;
    }
    if (this._isManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.isManaged = this._isManaged;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateName = undefined;
      this._isManaged = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateName = value.certificateName;
      this._isManaged = value.isManaged;
      this._name = value.name;
    }
  }

  // certificate_name - computed: true, optional: true, required: false
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // is_managed - computed: false, optional: true, required: false
  private _isManaged?: boolean | cdktf.IResolvable; 
  public get isManaged() {
    return this.getBooleanAttribute('is_managed');
  }
  public set isManaged(value: boolean | cdktf.IResolvable) {
    this._isManaged = value;
  }
  public resetIsManaged() {
    this._isManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagedInput() {
    return this._isManaged;
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

  // ssl_validation_error_reasons - computed: true, optional: false, required: false
  public get sslValidationErrorReasons() {
    return this.getListAttribute('ssl_validation_error_reasons');
  }

  // verification_error_reasons - computed: true, optional: false, required: false
  public get verificationErrorReasons() {
    return this.getListAttribute('verification_error_reasons');
  }
}

export class LoadbalancerDomainsList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerDomains[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerDomainsOutputReference {
    return new LoadbalancerDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerFirewall {
  /**
  * the rules for ALLOWING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#allow Loadbalancer#allow}
  */
  readonly allow?: string[];
  /**
  * the rules for DENYING traffic to the LB (strings in the form: 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#deny Loadbalancer#deny}
  */
  readonly deny?: string[];
}

export function loadbalancerFirewallToTerraform(struct?: LoadbalancerFirewallOutputReference | LoadbalancerFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allow),
    deny: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deny),
  }
}


export function loadbalancerFirewallToHclTerraform(struct?: LoadbalancerFirewallOutputReference | LoadbalancerFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allow),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deny: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deny),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadbalancerFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow = undefined;
      this._deny = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow = value.allow;
      this._deny = value.deny;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return this.getListAttribute('allow');
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: string[]; 
  public get deny() {
    return this.getListAttribute('deny');
  }
  public set deny(value: string[]) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }
}
export interface LoadbalancerForwardingRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#certificate_id Loadbalancer#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#certificate_name Loadbalancer#certificate_name}
  */
  readonly certificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#entry_port Loadbalancer#entry_port}
  */
  readonly entryPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#entry_protocol Loadbalancer#entry_protocol}
  */
  readonly entryProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}
  */
  readonly targetPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}
  */
  readonly targetProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#tls_passthrough Loadbalancer#tls_passthrough}
  */
  readonly tlsPassthrough?: boolean | cdktf.IResolvable;
}

export function loadbalancerForwardingRuleToTerraform(struct?: LoadbalancerForwardingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    certificate_name: cdktf.stringToTerraform(struct!.certificateName),
    entry_port: cdktf.numberToTerraform(struct!.entryPort),
    entry_protocol: cdktf.stringToTerraform(struct!.entryProtocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
    target_protocol: cdktf.stringToTerraform(struct!.targetProtocol),
    tls_passthrough: cdktf.booleanToTerraform(struct!.tlsPassthrough),
  }
}


export function loadbalancerForwardingRuleToHclTerraform(struct?: LoadbalancerForwardingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_name: {
      value: cdktf.stringToHclTerraform(struct!.certificateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_port: {
      value: cdktf.numberToHclTerraform(struct!.entryPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_protocol: {
      value: cdktf.stringToHclTerraform(struct!.entryProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_protocol: {
      value: cdktf.stringToHclTerraform(struct!.targetProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_passthrough: {
      value: cdktf.booleanToHclTerraform(struct!.tlsPassthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerForwardingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerForwardingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._certificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateName = this._certificateName;
    }
    if (this._entryPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPort = this._entryPort;
    }
    if (this._entryProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryProtocol = this._entryProtocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._targetProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProtocol = this._targetProtocol;
    }
    if (this._tlsPassthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPassthrough = this._tlsPassthrough;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerForwardingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
      this._certificateName = undefined;
      this._entryPort = undefined;
      this._entryProtocol = undefined;
      this._targetPort = undefined;
      this._targetProtocol = undefined;
      this._tlsPassthrough = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
      this._certificateName = value.certificateName;
      this._entryPort = value.entryPort;
      this._entryProtocol = value.entryProtocol;
      this._targetPort = value.targetPort;
      this._targetProtocol = value.targetProtocol;
      this._tlsPassthrough = value.tlsPassthrough;
    }
  }

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // certificate_name - computed: true, optional: true, required: false
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // entry_port - computed: false, optional: false, required: true
  private _entryPort?: number; 
  public get entryPort() {
    return this.getNumberAttribute('entry_port');
  }
  public set entryPort(value: number) {
    this._entryPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPortInput() {
    return this._entryPort;
  }

  // entry_protocol - computed: false, optional: false, required: true
  private _entryProtocol?: string; 
  public get entryProtocol() {
    return this.getStringAttribute('entry_protocol');
  }
  public set entryProtocol(value: string) {
    this._entryProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryProtocolInput() {
    return this._entryProtocol;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // target_protocol - computed: false, optional: false, required: true
  private _targetProtocol?: string; 
  public get targetProtocol() {
    return this.getStringAttribute('target_protocol');
  }
  public set targetProtocol(value: string) {
    this._targetProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProtocolInput() {
    return this._targetProtocol;
  }

  // tls_passthrough - computed: false, optional: true, required: false
  private _tlsPassthrough?: boolean | cdktf.IResolvable; 
  public get tlsPassthrough() {
    return this.getBooleanAttribute('tls_passthrough');
  }
  public set tlsPassthrough(value: boolean | cdktf.IResolvable) {
    this._tlsPassthrough = value;
  }
  public resetTlsPassthrough() {
    this._tlsPassthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPassthroughInput() {
    return this._tlsPassthrough;
  }
}

export class LoadbalancerForwardingRuleList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerForwardingRule[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerForwardingRuleOutputReference {
    return new LoadbalancerForwardingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerGlbSettingsCdn {
  /**
  * cache enable flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#is_enabled Loadbalancer#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function loadbalancerGlbSettingsCdnToTerraform(struct?: LoadbalancerGlbSettingsCdnOutputReference | LoadbalancerGlbSettingsCdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function loadbalancerGlbSettingsCdnToHclTerraform(struct?: LoadbalancerGlbSettingsCdnOutputReference | LoadbalancerGlbSettingsCdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerGlbSettingsCdnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadbalancerGlbSettingsCdn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerGlbSettingsCdn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface LoadbalancerGlbSettings {
  /**
  * fail-over threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#failover_threshold Loadbalancer#failover_threshold}
  */
  readonly failoverThreshold?: number;
  /**
  * region priority map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#region_priorities Loadbalancer#region_priorities}
  */
  readonly regionPriorities?: { [key: string]: number };
  /**
  * target port rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}
  */
  readonly targetPort: number;
  /**
  * target protocol rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#target_protocol Loadbalancer#target_protocol}
  */
  readonly targetProtocol: string;
  /**
  * cdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#cdn Loadbalancer#cdn}
  */
  readonly cdn?: LoadbalancerGlbSettingsCdn;
}

export function loadbalancerGlbSettingsToTerraform(struct?: LoadbalancerGlbSettingsOutputReference | LoadbalancerGlbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_threshold: cdktf.numberToTerraform(struct!.failoverThreshold),
    region_priorities: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.regionPriorities),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
    target_protocol: cdktf.stringToTerraform(struct!.targetProtocol),
    cdn: loadbalancerGlbSettingsCdnToTerraform(struct!.cdn),
  }
}


export function loadbalancerGlbSettingsToHclTerraform(struct?: LoadbalancerGlbSettingsOutputReference | LoadbalancerGlbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failoverThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_priorities: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.regionPriorities),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_protocol: {
      value: cdktf.stringToHclTerraform(struct!.targetProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cdn: {
      value: loadbalancerGlbSettingsCdnToHclTerraform(struct!.cdn),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerGlbSettingsCdnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerGlbSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadbalancerGlbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverThreshold = this._failoverThreshold;
    }
    if (this._regionPriorities !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionPriorities = this._regionPriorities;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._targetProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProtocol = this._targetProtocol;
    }
    if (this._cdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdn = this._cdn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerGlbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failoverThreshold = undefined;
      this._regionPriorities = undefined;
      this._targetPort = undefined;
      this._targetProtocol = undefined;
      this._cdn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failoverThreshold = value.failoverThreshold;
      this._regionPriorities = value.regionPriorities;
      this._targetPort = value.targetPort;
      this._targetProtocol = value.targetProtocol;
      this._cdn.internalValue = value.cdn;
    }
  }

  // failover_threshold - computed: false, optional: true, required: false
  private _failoverThreshold?: number; 
  public get failoverThreshold() {
    return this.getNumberAttribute('failover_threshold');
  }
  public set failoverThreshold(value: number) {
    this._failoverThreshold = value;
  }
  public resetFailoverThreshold() {
    this._failoverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverThresholdInput() {
    return this._failoverThreshold;
  }

  // region_priorities - computed: false, optional: true, required: false
  private _regionPriorities?: { [key: string]: number }; 
  public get regionPriorities() {
    return this.getNumberMapAttribute('region_priorities');
  }
  public set regionPriorities(value: { [key: string]: number }) {
    this._regionPriorities = value;
  }
  public resetRegionPriorities() {
    this._regionPriorities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionPrioritiesInput() {
    return this._regionPriorities;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // target_protocol - computed: false, optional: false, required: true
  private _targetProtocol?: string; 
  public get targetProtocol() {
    return this.getStringAttribute('target_protocol');
  }
  public set targetProtocol(value: string) {
    this._targetProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProtocolInput() {
    return this._targetProtocol;
  }

  // cdn - computed: false, optional: true, required: false
  private _cdn = new LoadbalancerGlbSettingsCdnOutputReference(this, "cdn");
  public get cdn() {
    return this._cdn;
  }
  public putCdn(value: LoadbalancerGlbSettingsCdn) {
    this._cdn.internalValue = value;
  }
  public resetCdn() {
    this._cdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnInput() {
    return this._cdn.internalValue;
  }
}
export interface LoadbalancerHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#check_interval_seconds Loadbalancer#check_interval_seconds}
  */
  readonly checkIntervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#path Loadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#port Loadbalancer#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#response_timeout_seconds Loadbalancer#response_timeout_seconds}
  */
  readonly responseTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function loadbalancerHealthcheckToTerraform(struct?: LoadbalancerHealthcheckOutputReference | LoadbalancerHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_interval_seconds: cdktf.numberToTerraform(struct!.checkIntervalSeconds),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    response_timeout_seconds: cdktf.numberToTerraform(struct!.responseTimeoutSeconds),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function loadbalancerHealthcheckToHclTerraform(struct?: LoadbalancerHealthcheckOutputReference | LoadbalancerHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.checkIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.responseTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadbalancerHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkIntervalSeconds = this._checkIntervalSeconds;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._responseTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeoutSeconds = this._responseTimeoutSeconds;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkIntervalSeconds = undefined;
      this._healthyThreshold = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._responseTimeoutSeconds = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkIntervalSeconds = value.checkIntervalSeconds;
      this._healthyThreshold = value.healthyThreshold;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._responseTimeoutSeconds = value.responseTimeoutSeconds;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // check_interval_seconds - computed: false, optional: true, required: false
  private _checkIntervalSeconds?: number; 
  public get checkIntervalSeconds() {
    return this.getNumberAttribute('check_interval_seconds');
  }
  public set checkIntervalSeconds(value: number) {
    this._checkIntervalSeconds = value;
  }
  public resetCheckIntervalSeconds() {
    this._checkIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalSecondsInput() {
    return this._checkIntervalSeconds;
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // response_timeout_seconds - computed: false, optional: true, required: false
  private _responseTimeoutSeconds?: number; 
  public get responseTimeoutSeconds() {
    return this.getNumberAttribute('response_timeout_seconds');
  }
  public set responseTimeoutSeconds(value: number) {
    this._responseTimeoutSeconds = value;
  }
  public resetResponseTimeoutSeconds() {
    this._responseTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutSecondsInput() {
    return this._responseTimeoutSeconds;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface LoadbalancerStickySessions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#cookie_name Loadbalancer#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#cookie_ttl_seconds Loadbalancer#cookie_ttl_seconds}
  */
  readonly cookieTtlSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#type Loadbalancer#type}
  */
  readonly type?: string;
}

export function loadbalancerStickySessionsToTerraform(struct?: LoadbalancerStickySessionsOutputReference | LoadbalancerStickySessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    cookie_ttl_seconds: cdktf.numberToTerraform(struct!.cookieTtlSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function loadbalancerStickySessionsToHclTerraform(struct?: LoadbalancerStickySessionsOutputReference | LoadbalancerStickySessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_ttl_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cookieTtlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerStickySessionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadbalancerStickySessions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._cookieTtlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieTtlSeconds = this._cookieTtlSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerStickySessions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieName = undefined;
      this._cookieTtlSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieName = value.cookieName;
      this._cookieTtlSeconds = value.cookieTtlSeconds;
      this._type = value.type;
    }
  }

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // cookie_ttl_seconds - computed: false, optional: true, required: false
  private _cookieTtlSeconds?: number; 
  public get cookieTtlSeconds() {
    return this.getNumberAttribute('cookie_ttl_seconds');
  }
  public set cookieTtlSeconds(value: number) {
    this._cookieTtlSeconds = value;
  }
  public resetCookieTtlSeconds() {
    this._cookieTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieTtlSecondsInput() {
    return this._cookieTtlSeconds;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer digitalocean_loadbalancer}
*/
export class Loadbalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_loadbalancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Loadbalancer to import
  * @param importFromId The id of the existing Loadbalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Loadbalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_loadbalancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.47.0/docs/resources/loadbalancer digitalocean_loadbalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_loadbalancer',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.47.0',
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
    this._algorithm = config.algorithm;
    this._disableLetsEncryptDnsRecords = config.disableLetsEncryptDnsRecords;
    this._dropletIds = config.dropletIds;
    this._dropletTag = config.dropletTag;
    this._enableBackendKeepalive = config.enableBackendKeepalive;
    this._enableProxyProtocol = config.enableProxyProtocol;
    this._httpIdleTimeoutSeconds = config.httpIdleTimeoutSeconds;
    this._id = config.id;
    this._name = config.name;
    this._network = config.network;
    this._projectId = config.projectId;
    this._redirectHttpToHttps = config.redirectHttpToHttps;
    this._region = config.region;
    this._size = config.size;
    this._sizeUnit = config.sizeUnit;
    this._targetLoadBalancerIds = config.targetLoadBalancerIds;
    this._type = config.type;
    this._vpcUuid = config.vpcUuid;
    this._domains.internalValue = config.domains;
    this._firewall.internalValue = config.firewall;
    this._forwardingRule.internalValue = config.forwardingRule;
    this._glbSettings.internalValue = config.glbSettings;
    this._healthcheck.internalValue = config.healthcheck;
    this._stickySessions.internalValue = config.stickySessions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // disable_lets_encrypt_dns_records - computed: false, optional: true, required: false
  private _disableLetsEncryptDnsRecords?: boolean | cdktf.IResolvable; 
  public get disableLetsEncryptDnsRecords() {
    return this.getBooleanAttribute('disable_lets_encrypt_dns_records');
  }
  public set disableLetsEncryptDnsRecords(value: boolean | cdktf.IResolvable) {
    this._disableLetsEncryptDnsRecords = value;
  }
  public resetDisableLetsEncryptDnsRecords() {
    this._disableLetsEncryptDnsRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLetsEncryptDnsRecordsInput() {
    return this._disableLetsEncryptDnsRecords;
  }

  // droplet_ids - computed: true, optional: true, required: false
  private _dropletIds?: number[]; 
  public get dropletIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('droplet_ids')));
  }
  public set dropletIds(value: number[]) {
    this._dropletIds = value;
  }
  public resetDropletIds() {
    this._dropletIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropletIdsInput() {
    return this._dropletIds;
  }

  // droplet_tag - computed: false, optional: true, required: false
  private _dropletTag?: string; 
  public get dropletTag() {
    return this.getStringAttribute('droplet_tag');
  }
  public set dropletTag(value: string) {
    this._dropletTag = value;
  }
  public resetDropletTag() {
    this._dropletTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropletTagInput() {
    return this._dropletTag;
  }

  // enable_backend_keepalive - computed: false, optional: true, required: false
  private _enableBackendKeepalive?: boolean | cdktf.IResolvable; 
  public get enableBackendKeepalive() {
    return this.getBooleanAttribute('enable_backend_keepalive');
  }
  public set enableBackendKeepalive(value: boolean | cdktf.IResolvable) {
    this._enableBackendKeepalive = value;
  }
  public resetEnableBackendKeepalive() {
    this._enableBackendKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackendKeepaliveInput() {
    return this._enableBackendKeepalive;
  }

  // enable_proxy_protocol - computed: false, optional: true, required: false
  private _enableProxyProtocol?: boolean | cdktf.IResolvable; 
  public get enableProxyProtocol() {
    return this.getBooleanAttribute('enable_proxy_protocol');
  }
  public set enableProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._enableProxyProtocol = value;
  }
  public resetEnableProxyProtocol() {
    this._enableProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProxyProtocolInput() {
    return this._enableProxyProtocol;
  }

  // http_idle_timeout_seconds - computed: true, optional: true, required: false
  private _httpIdleTimeoutSeconds?: number; 
  public get httpIdleTimeoutSeconds() {
    return this.getNumberAttribute('http_idle_timeout_seconds');
  }
  public set httpIdleTimeoutSeconds(value: number) {
    this._httpIdleTimeoutSeconds = value;
  }
  public resetHttpIdleTimeoutSeconds() {
    this._httpIdleTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpIdleTimeoutSecondsInput() {
    return this._httpIdleTimeoutSeconds;
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // project_id - computed: true, optional: true, required: false
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

  // redirect_http_to_https - computed: false, optional: true, required: false
  private _redirectHttpToHttps?: boolean | cdktf.IResolvable; 
  public get redirectHttpToHttps() {
    return this.getBooleanAttribute('redirect_http_to_https');
  }
  public set redirectHttpToHttps(value: boolean | cdktf.IResolvable) {
    this._redirectHttpToHttps = value;
  }
  public resetRedirectHttpToHttps() {
    this._redirectHttpToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpToHttpsInput() {
    return this._redirectHttpToHttps;
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

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_unit - computed: true, optional: true, required: false
  private _sizeUnit?: number; 
  public get sizeUnit() {
    return this.getNumberAttribute('size_unit');
  }
  public set sizeUnit(value: number) {
    this._sizeUnit = value;
  }
  public resetSizeUnit() {
    this._sizeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeUnitInput() {
    return this._sizeUnit;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_load_balancer_ids - computed: true, optional: true, required: false
  private _targetLoadBalancerIds?: string[]; 
  public get targetLoadBalancerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('target_load_balancer_ids'));
  }
  public set targetLoadBalancerIds(value: string[]) {
    this._targetLoadBalancerIds = value;
  }
  public resetTargetLoadBalancerIds() {
    this._targetLoadBalancerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLoadBalancerIdsInput() {
    return this._targetLoadBalancerIds;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
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

  // domains - computed: false, optional: true, required: false
  private _domains = new LoadbalancerDomainsList(this, "domains", true);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: LoadbalancerDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  public resetDomains() {
    this._domains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall = new LoadbalancerFirewallOutputReference(this, "firewall");
  public get firewall() {
    return this._firewall;
  }
  public putFirewall(value: LoadbalancerFirewall) {
    this._firewall.internalValue = value;
  }
  public resetFirewall() {
    this._firewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall.internalValue;
  }

  // forwarding_rule - computed: false, optional: true, required: false
  private _forwardingRule = new LoadbalancerForwardingRuleList(this, "forwarding_rule", true);
  public get forwardingRule() {
    return this._forwardingRule;
  }
  public putForwardingRule(value: LoadbalancerForwardingRule[] | cdktf.IResolvable) {
    this._forwardingRule.internalValue = value;
  }
  public resetForwardingRule() {
    this._forwardingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRuleInput() {
    return this._forwardingRule.internalValue;
  }

  // glb_settings - computed: false, optional: true, required: false
  private _glbSettings = new LoadbalancerGlbSettingsOutputReference(this, "glb_settings");
  public get glbSettings() {
    return this._glbSettings;
  }
  public putGlbSettings(value: LoadbalancerGlbSettings) {
    this._glbSettings.internalValue = value;
  }
  public resetGlbSettings() {
    this._glbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glbSettingsInput() {
    return this._glbSettings.internalValue;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new LoadbalancerHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: LoadbalancerHealthcheck) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // sticky_sessions - computed: false, optional: true, required: false
  private _stickySessions = new LoadbalancerStickySessionsOutputReference(this, "sticky_sessions");
  public get stickySessions() {
    return this._stickySessions;
  }
  public putStickySessions(value: LoadbalancerStickySessions) {
    this._stickySessions.internalValue = value;
  }
  public resetStickySessions() {
    this._stickySessions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionsInput() {
    return this._stickySessions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      disable_lets_encrypt_dns_records: cdktf.booleanToTerraform(this._disableLetsEncryptDnsRecords),
      droplet_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dropletIds),
      droplet_tag: cdktf.stringToTerraform(this._dropletTag),
      enable_backend_keepalive: cdktf.booleanToTerraform(this._enableBackendKeepalive),
      enable_proxy_protocol: cdktf.booleanToTerraform(this._enableProxyProtocol),
      http_idle_timeout_seconds: cdktf.numberToTerraform(this._httpIdleTimeoutSeconds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project_id: cdktf.stringToTerraform(this._projectId),
      redirect_http_to_https: cdktf.booleanToTerraform(this._redirectHttpToHttps),
      region: cdktf.stringToTerraform(this._region),
      size: cdktf.stringToTerraform(this._size),
      size_unit: cdktf.numberToTerraform(this._sizeUnit),
      target_load_balancer_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetLoadBalancerIds),
      type: cdktf.stringToTerraform(this._type),
      vpc_uuid: cdktf.stringToTerraform(this._vpcUuid),
      domains: cdktf.listMapper(loadbalancerDomainsToTerraform, true)(this._domains.internalValue),
      firewall: loadbalancerFirewallToTerraform(this._firewall.internalValue),
      forwarding_rule: cdktf.listMapper(loadbalancerForwardingRuleToTerraform, true)(this._forwardingRule.internalValue),
      glb_settings: loadbalancerGlbSettingsToTerraform(this._glbSettings.internalValue),
      healthcheck: loadbalancerHealthcheckToTerraform(this._healthcheck.internalValue),
      sticky_sessions: loadbalancerStickySessionsToTerraform(this._stickySessions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_lets_encrypt_dns_records: {
        value: cdktf.booleanToHclTerraform(this._disableLetsEncryptDnsRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      droplet_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dropletIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      droplet_tag: {
        value: cdktf.stringToHclTerraform(this._dropletTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_backend_keepalive: {
        value: cdktf.booleanToHclTerraform(this._enableBackendKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_proxy_protocol: {
        value: cdktf.booleanToHclTerraform(this._enableProxyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_idle_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._httpIdleTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_http_to_https: {
        value: cdktf.booleanToHclTerraform(this._redirectHttpToHttps),
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
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_unit: {
        value: cdktf.numberToHclTerraform(this._sizeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_load_balancer_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetLoadBalancerIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_uuid: {
        value: cdktf.stringToHclTerraform(this._vpcUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(loadbalancerDomainsToHclTerraform, true)(this._domains.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadbalancerDomainsList",
      },
      firewall: {
        value: loadbalancerFirewallToHclTerraform(this._firewall.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadbalancerFirewallList",
      },
      forwarding_rule: {
        value: cdktf.listMapperHcl(loadbalancerForwardingRuleToHclTerraform, true)(this._forwardingRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadbalancerForwardingRuleList",
      },
      glb_settings: {
        value: loadbalancerGlbSettingsToHclTerraform(this._glbSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadbalancerGlbSettingsList",
      },
      healthcheck: {
        value: loadbalancerHealthcheckToHclTerraform(this._healthcheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadbalancerHealthcheckList",
      },
      sticky_sessions: {
        value: loadbalancerStickySessionsToHclTerraform(this._stickySessions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadbalancerStickySessionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
