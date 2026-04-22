import { CommonApiParams } from "./CommonApiInterfaces.ts";
import { HostInterface } from "./HostInterfaces.ts";

/**
 * Interface for parameters used in the getHosts function to query Zabbix hosts.
 */
export interface GetHostsParams extends CommonApiParams {
  /** Return only hosts that belong to the given groups. */
  groupids?: string | string[];
  /** Return only hosts that are related to the given discovered services. */
  dserviceids?: string | string[];
  /** Return only hosts that have the given graphs. */
  graphids?: string | string[];
  /** Return only hosts with the given host IDs. */
  hostids?: string | string[];
  /** Return only hosts that have the given web checks. */
  httptestids?: string | string[];
  /** Return only hosts that use the given interfaces. */
  interfaceids?: string | string[];
  /** Return only hosts that have the given items. */
  itemids?: string | string[];
  /** Return only hosts that are affected by the given maintenances. */
  maintenanceids?: string | string[];
  /** Return only monitored hosts. */
  monitored_hosts?: boolean;
  /** Return only hosts that are monitored by the given proxies. */
  proxyids?: string | string[];
  /** Return only hosts that are monitored by the given proxy groups. */
  proxy_groupids?: string | string[];
  /** Return both hosts and templates. */
  templated_hosts?: boolean;
  /** Return only hosts that are linked to the given templates. */
  templateids?: string | string[];
  /** Return only hosts that have the given triggers. */
  triggerids?: string | string[];
  /** Return only hosts that have items. Overrides the with_monitored_items and with_simple_graph_items parameters. */
  with_items?: boolean;
  /** Return only hosts that have item prototypes. Overrides the with_simple_graph_item_prototypes parameter. */
  with_item_prototypes?: boolean;
  /** Return only hosts that have item prototypes, which are enabled for creation and have numeric type of information. */
  with_simple_graph_item_prototypes?: boolean;
  /** Return only hosts that have graphs. */
  with_graphs?: boolean;
  /** Return only hosts that have graph prototypes. */
  with_graph_prototypes?: boolean;
  /** Return only hosts that have web checks. Overrides the with_monitored_httptests parameter. */
  with_httptests?: boolean;
  /** Return only hosts that have enabled web checks. */
  with_monitored_httptests?: boolean;
  /** Return only hosts that have enabled items. Overrides the with_simple_graph_items parameter. */
  with_monitored_items?: boolean;
  /** Return only hosts that have enabled triggers. All of the items used in the trigger must also be enabled. */
  with_monitored_triggers?: boolean;
  /** Return only hosts that have items with numeric type of information. */
  with_simple_graph_items?: boolean;
  /** Return only hosts that have triggers. Overrides the with_monitored_triggers parameter. */
  with_triggers?: boolean;
  /** If set to true return only hosts with suppressed problems. */
  withProblemsSuppressed?: boolean;
  /** Tag evaluation method. Possible values: 0 - (default) And/Or; 2 - Or. */
  evaltype?: number;
  /** Return hosts that have only problems with given severities. Applies only if problem object is trigger. */
  severities?: number | number[];
  /** Return only hosts with the given tags. Format: [{"tag": "<tag>", "value": "<value>", "operator": "<operator>"}, ...]. An empty array returns all hosts. Possible operator values: 0 - (default) Contains; 1 - Equals; 2 - Does not contain; 3 - Does not equal; 4 - Exists; 5 - Does not exist. */
  tags?: object | object[];
  /** Return hosts that have given tags also in all of their linked templates. Possible values: true - linked templates must also have given tags; false - (default) linked template tags are ignored. */
  inheritedTags?: boolean;
  /** Return a discoveryData property with the host discovery object data. The host discovery object links a discovered host to a host prototype from which it was discovered. It has the following properties: host - (string) ID of the host; parent_hostid - (string) ID of the host prototype from which the host has been created; status - (int) host discovery status: 0 - (default) host is discovered, 1 - host is not discovered anymore; ts_delete - (timestamp) time when a host that is no longer discovered will be deleted; ts_disable - (timestamp) time when a host that is no longer discovered will be disabled; disable_source - (int) indicator of whether host was disabled by an LLD rule or manually: 0 - (default) disabled automatically, 1 - disabled by an LLD rule. */
  selectDiscoveryData?: any;
  /** Return a discoveryRule property with the low-level discovery rule that created the host (from host prototype in VMware monitoring). */
  selectDiscoveryRule?: any;
  /** Return a discoveryRules property with host LLD rules. Supports count. */
  selectDiscoveryRules?: any;
  /** Return a graphs property with host graphs. Supports count. */
  selectGraphs?: any;
  /** Return a hostgroups property with host groups data that the host belongs to. */
  selectHostGroups?: any;
  /** Return an httpTests property with host web scenarios. Supports count. */
  selectHttpTests?: any;
  /** Return an interfaces property with host interfaces. */
  selectInterfaces?: Array<keyof HostInterface>;
  /** Return an inventory property with host inventory data. */
  selectInventory?: any;
  /** Return an items property with host items. Supports count. */
  selectItems?: any;
  /** Return a macros property with host macros. */
  selectMacros?: any;
  /** Return a parentTemplates property with templates that the host is linked to. In addition to Template object fields, it contains link_type - (integer) the way that the template is linked to host. Possible values: 0 - (default) manually linked; 1 - automatically linked by LLD. Supports count. */
  selectParentTemplates?: any;
  /** Return a dashboards property. Supports count. */
  selectDashboards?: any;
  /** Return a tags property with host tags. */
  selectTags?: any;
  /** Return an inheritedTags property with tags that are on all templates which are linked to host. */
  selectInheritedTags?: any;
  /** Return a triggers property with host triggers. Supports count. */
  selectTriggers?: any;
  /** Return a valuemaps property with host value maps. */
  selectValueMaps?: any;
  /** Limits the number of records returned by subselects. Applies to the following subselects: selectParentTemplates - results will be sorted by host; selectInterfaces; selectItems - sorted by name; selectDiscoveryRules - sorted by name; selectTriggers - sorted by description; selectGraphs - sorted by name; selectDashboards - sorted by name. */
  limitSelects?: number;
  /** Return hosts that have inventory data that match the given pattern (case-insensitive). Accepts an object, where the keys are property names, and the values are strings to search for. If no additional options are given, this will perform a LIKE "%…%" search. Supports only properties of string and text data type. */
  searchInventory?: object;
  /** Return a discoveries property with host low-level discovery rules. Supports count. This query is deprecated, please use selectDiscoveryRules instead. */
  selectDiscoveries?: any;
  /** Return a hostDiscovery property with host discovery object data. This query is deprecated, please use selectDiscoveryData instead. */
  selectHostDiscovery?: any;
}
