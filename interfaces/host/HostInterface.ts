/**
 * Additional details for SNMP host interfaces.
 */
export interface HostInterfaceDetails {
  /**
   * SNMP interface version.
   * Possible values:
   * 1 - SNMPv1;
   * 2 - SNMPv2c;
   * 3 - SNMPv3.
   * Property behavior:
   * - required
   */
  version: 1 | 2 | 3;

  /**
   * Whether to use bulk SNMP requests.
   * Possible values:
   * 0 - don't use bulk requests;
   * 1 - (default) use bulk requests.
   */
  bulk?: 0 | 1;

  /**
   * SNMP community. Used only by SNMPv1 and SNMPv2c interfaces.
   * Property behavior:
   * - required if version is set to "SNMPv1" or "SNMPv2c"
   */
  community?: string;

  /**
   * Max repetition value for native SNMP bulk requests (GetBulkRequest-PDUs).
   * Used only for discovery[] and walk[] items in SNMPv2 and v3.
   * Default: 10.
   */
  max_repetitions?: number;

  /**
   * SNMPv3 security name. Used only by SNMPv3 interfaces.
   */
  securityname?: string;

  /**
   * SNMPv3 security level. Used only by SNMPv3 interfaces.
   * Possible values:
   * 0 - (default) noAuthNoPriv;
   * 1 - authNoPriv;
   * 2 - authPriv.
   */
  securitylevel?: 0 | 1 | 2;

  /**
   * SNMPv3 authentication passphrase. Used only by SNMPv3 interfaces.
   */
  authpassphrase?: string;

  /**
   * SNMPv3 privacy passphrase. Used only by SNMPv3 interfaces.
   */
  privpassphrase?: string;

  /**
   * SNMPv3 authentication protocol. Used only by SNMPv3 interfaces.
   * Possible values:
   * 0 - (default) MD5;
   * 1 - SHA1;
   * 2 - SHA224;
   * 3 - SHA256;
   * 4 - SHA384;
   * 5 - SHA512.
   */
  authprotocol?: 0 | 1 | 2 | 3 | 4 | 5;

  /**
   * SNMPv3 privacy protocol. Used only by SNMPv3 interfaces.
   * Possible values:
   * 0 - (default) DES;
   * 1 - AES128;
   * 2 - AES192;
   * 3 - AES256;
   * 4 - AES192C;
   * 5 - AES256C.
   */
  privprotocol?: 0 | 1 | 2 | 3 | 4 | 5;

  /**
   * SNMPv3 context name. Used only by SNMPv3 interfaces.
   */
  contextname?: string;
}

/**
 * Host interface object used by Zabbix API host interface operations.
 */
export interface HostInterface {
  /**
   * ID of the interface.
   * Property behavior:
   * - read-only
   * - required for update operations
   */
  interfaceid?: string;

  /**
   * Availability of host interface.
   * Possible values:
   * 0 - (default) unknown;
   * 1 - available;
   * 2 - unavailable.
   * Property behavior:
   * - read-only
   */
  available?: 0 | 1 | 2;

  /**
   * ID of the host that the interface belongs to.
   * Property behavior:
   * - constant
   * - required for create operations
   */
  hostid?: string;

  /**
   * Interface type.
   * Possible values:
   * 1 - Agent;
   * 2 - SNMP;
   * 3 - IPMI;
   * 4 - JMX.
   * Property behavior:
   * - required for create operations
   */
  type: 1 | 2 | 3 | 4;

  /**
   * IP address used by the interface.
   * Can be empty if the connection is made via DNS.
   * Property behavior:
   * - required for create operations
   */
  ip: string;

  /**
   * DNS name used by the interface.
   * Can be empty if the connection is made via IP.
   * Property behavior:
   * - required for create operations
   */
  dns: string;

  /**
   * Port number used by the interface.
   * Can contain user macros.
   * Property behavior:
   * - required for create operations
   */
  port: string;

  /**
   * Whether the connection should be made via IP.
   * Possible values:
   * 0 - connect using host DNS name;
   * 1 - connect using host IP address.
   * Property behavior:
   * - required for create operations
   */
  useip: 0 | 1;

  /**
   * Whether the interface is used as default on the host.
   * Only one interface of some type can be set as default on a host.
   * Possible values:
   * 0 - not default;
   * 1 - default.
   * Property behavior:
   * - required for create operations
   */
  main: 0 | 1;

  /**
   * Additional details object for interface.
   * Property behavior:
   * - required if type is set to "SNMP"
   */
  details?: HostInterfaceDetails;

  /**
   * The next polling time of an unavailable host interface.
   * Property behavior:
   * - read-only
   */
  disable_until?: number;

  /**
   * Error text if host interface is unavailable.
   * Property behavior:
   * - read-only
   */
  error?: string;

  /**
   * Time when host interface became unavailable.
   * Property behavior:
   * - read-only
   */
  errors_from?: number;
}
