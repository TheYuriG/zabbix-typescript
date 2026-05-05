import { HostInterface } from "./HostInterface.ts";
import { HostInventory } from "./HostInventory.ts";

/**
 * Interface representing a Host entity with configuration, status, security, and maintenance settings.
 * @interface Host
 */
export interface Host {
  /**
   * ID of the host.
   * @readonly
   * @type {string}
   */
  readonly hostid?: string;

  /**
   * ID of the proxy that is used to monitor the host.
   * @type {string}
   */
  proxyid?: string;

  /**
   * Technical name of the host.
   * @required
   * @type {string}
   */
  host?: string;

  /**
   * Description of the host.
   * @type {string}
   */
  description?: string;

  /**
   * Origin of the host.
   * @readonly
   * @enum {number}
   * @property {number} PLAIN - 0: A plain host
   * @property {number} DISCOVERED - 4: A discovered host
   */
  readonly flags?: number;

  /**
   * Host inventory population mode.
   * @enum {number}
   * @property {number} DEFAULT_DISABLED - -1: Disabled (default)
   * @property {number} MANUAL - 0: Manual
   * @property {number} AUTOMATIC - 1: Automatic
   */
  inventory_mode?: number;

  inventory?: Partial<Record<keyof HostInventory, string | null | undefined>>;

  /**
   * IPMI authentication algorithm.
   * @enum {number}
   * @property {number} DEFAULT - -1: Default
   * @property {number} NONE - 0: None
   * @property {number} MD2 - 1: MD2
   * @property {number} MD5 - 2: MD5
   * @property {number} STRAIGHT - 4: Straight
   * @property {number} OEM - 5: OEM
   * @property {number} RMCP_PLUS - 6: RMCP+
   */
  ipmi_authtype?: number;

  /**
   * IPMI password.
   * @type {string}
   */
  ipmi_password?: string;

  /**
   * IPMI privilege level.
   * @enum {number}
   * @property {number} CALLBACK - 1: Callback
   * @property {number} USER - 2: User (default)
   * @property {number} OPERATOR - 3: Operator
   * @property {number} ADMIN - 4: Admin
   * @property {number} OEM - 5: OEM
   */
  ipmi_privilege?: number;

  /**
   * IPMI username.
   * @type {string}
   */
  ipmi_username?: string;

  /**
   * Starting time of the effective maintenance.
   * @readonly
   * @type {number} Unix timestamp when maintenance becomes active.
   */
  readonly maintenance_from?: number;

  /**
   * Effective maintenance status.
   * @readonly
   * @enum {number}
   * @property {number} NO_MAINTENANCE - 0: No maintenance (default)
   * @property {number} MAINTENANCE_IN_EFFECT - 1: Maintenance in effect
   */
  readonly maintenance_status?: number;

  /**
   * Effective maintenance type.
   * @readonly
   * @enum {number}
   * @property {number} WITH_DATA_COLLECTION - 0: Maintenance with data collection (default)
   * @property {number} WITHOUT_DATA_COLLECTION - 1: Maintenance without data collection
   */
  readonly maintenance_type?: number;

  /**
   * ID of the maintenance that is currently in effect on the host.
   * @readonly
   * @type {string}
   */
  readonly maintenanceid?: string;

  /**
   * Visible name of the host.
   * @default {string} Defaults to the value of the `host` property.
   * @type {string}
   */
  name?: string;

  /**
   * ID of the proxy that is used to monitor the host.
   * @type {string}
   */
  proxy_hostid?: string;

  /**
   * Status and function of the host.
   * @enum {number}
   * @property {number} MONITORED - 0: Monitored host (default)
   * @property {number} UNMONITORED - 1: Unmonitored host
   */
  status?: number;

  /**
   * Connections to host.
   * @enum {number}
   * @property {number} NO_ENCRYPTION - 1: No encryption (default)
   * @property {number} PSK - 2: PSK
   * @property {number} CERTIFICATE - 4: Certificate
   */
  tls_connect?: number;

  /**
   * Connections from host.
   * @enum {number}
   * @description This is a bitmask field. Any sum of valid bitmap values is acceptable (e.g., 6 for PSK + Certificate).
   * @property {number} NO_ENCRYPTION - 1: No encryption (default)
   * @property {number} PSK - 2: PSK
   * @property {number} CERTIFICATE - 4: Certificate
   */
  tls_accept?: number;

  /**
   * Certificate issuer.
   * @type {string}
   */
  tls_issuer?: string;

  /**
   * Certificate subject.
   * @type {string}
   */
  tls_subject?: string;

  /**
   * PSK identity; must be paired with only one PSK (across autoregistration, hosts, and proxies).
   * Required if either `tls_connect` or `tls_accept` has PSK enabled.
   * Do not include sensitive information in the PSK identity, as it is sent unencrypted over the network to inform the receiver which PSK to use.
   * @writeOnly
   * @type {string}
   */
  tls_psk_identity?: string;

  /**
   * Pre-shared key (PSK); must be at least 32 hex digits.
   * Required if either `tls_connect` or `tls_accept` has PSK enabled.
   * @writeOnly
   * @type {string}
   */
  tls_psk?: string;

  templateid?: string;
  custom_interfaces?: string;
  uuid?: string;
  vendor_name?: string;
  vendor_version?: string;
  proxy_groupid?: string;
  monitored_by?: string;
  active_available?: string;
  assigned_proxyid?: string;
  interfaces?: HostInterface[];
}
