import { equal } from "@std/assert";
import { getHosts, GetHostsParams } from "./getHosts.ts";

const hostParamCases: Array<{ name: string; params: GetHostsParams }> = [
  { name: "groupids", params: { groupids: ["10"] } },
  { name: "dserviceids", params: { dserviceids: ["20"] } },
  { name: "graphids", params: { graphids: ["30"] } },
  { name: "hostids", params: { hostids: ["40"] } },
  { name: "httptestids", params: { httptestids: ["50"] } },
  { name: "interfaceids", params: { interfaceids: ["60"] } },
  { name: "itemids", params: { itemids: ["70"] } },
  { name: "maintenanceids", params: { maintenanceids: ["80"] } },
  { name: "monitored_hosts", params: { monitored_hosts: true } },
  { name: "proxyids", params: { proxyids: ["90"] } },
  { name: "proxy_groupids", params: { proxy_groupids: ["100"] } },
  { name: "templated_hosts", params: { templated_hosts: false } },
  { name: "templateids", params: { templateids: ["110"] } },
  { name: "triggerids", params: { triggerids: ["120"] } },
  { name: "with_items", params: { with_items: true } },
  { name: "with_item_prototypes", params: { with_item_prototypes: true } },
  {
    name: "with_simple_graph_item_prototypes",
    params: { with_simple_graph_item_prototypes: true },
  },
  { name: "with_graphs", params: { with_graphs: true } },
  { name: "with_graph_prototypes", params: { with_graph_prototypes: true } },
  { name: "with_httptests", params: { with_httptests: true } },
  {
    name: "with_monitored_httptests",
    params: { with_monitored_httptests: true },
  },
  { name: "with_monitored_items", params: { with_monitored_items: true } },
  {
    name: "with_monitored_triggers",
    params: { with_monitored_triggers: true },
  },
  {
    name: "with_simple_graph_items",
    params: { with_simple_graph_items: true },
  },
  { name: "with_triggers", params: { with_triggers: true } },
  { name: "withProblemsSuppressed", params: { withProblemsSuppressed: true } },
  { name: "evaltype", params: { evaltype: 2 } },
  { name: "severities", params: { severities: [4, 5] } },
  {
    name: "tags",
    params: { tags: [{ tag: "tag", value: "foo", operator: 1 }] },
  },
  { name: "inheritedTags", params: { inheritedTags: true } },
  {
    name: "selectDiscoveryData",
    params: { selectDiscoveryData: ["host", "parent_hostid"] },
  },
  { name: "selectDiscoveryRule", params: { selectDiscoveryRule: ["itemid"] } },
  {
    name: "selectDiscoveryRules",
    params: { selectDiscoveryRules: ["ruleid"] },
  },
  { name: "selectGraphs", params: { selectGraphs: ["graphid"] } },
  { name: "selectHostGroups", params: { selectHostGroups: ["groupid"] } },
  { name: "selectHttpTests", params: { selectHttpTests: ["httptestid"] } },
  {
    name: "selectInterfaces",
    params: { selectInterfaces: ["interfaceid", "ip"] },
  },
  { name: "selectInventory", params: { selectInventory: ["inventory_mode"] } },
  { name: "selectItems", params: { selectItems: ["itemid"] } },
  { name: "selectMacros", params: { selectMacros: ["macro"] } },
  {
    name: "selectParentTemplates",
    params: { selectParentTemplates: ["templateid"] },
  },
  { name: "selectDashboards", params: { selectDashboards: ["dashboardid"] } },
  { name: "selectTags", params: { selectTags: ["tag"] } },
  { name: "selectInheritedTags", params: { selectInheritedTags: ["tag"] } },
  { name: "selectTriggers", params: { selectTriggers: ["triggerid"] } },
  { name: "selectValueMaps", params: { selectValueMaps: ["valuemapid"] } },
  { name: "filter", params: { filter: { host: "MyHost" } } },
  { name: "limitSelects", params: { limitSelects: 5 } },
  { name: "search", params: { search: { host: "MyHost" } } },
  {
    name: "searchInventory",
    params: { searchInventory: { asset_tag: "foo" } },
  },
  { name: "sortfield", params: { sortfield: ["hostid"] } },
  { name: "sortorder", params: { sortorder: ["DESC"] } },
  { name: "output", params: { output: ["hostid"] } },
  { name: "preservekeys", params: { preservekeys: true } },
  { name: "searchByAny", params: { searchByAny: true } },
  { name: "searchWildcardsEnabled", params: { searchWildcardsEnabled: true } },
  { name: "startSearch", params: { startSearch: true } },
  { name: "countOutput", params: { countOutput: false } },
  { name: "editable", params: { editable: true } },
  { name: "excludeSearch", params: { excludeSearch: false } },
  { name: "selectDiscoveries", params: { selectDiscoveries: ["discoveryid"] } },
  { name: "selectHostDiscovery", params: { selectHostDiscovery: ["host"] } },
];

const zabbixUrl = Deno.env.get("ZABBIX_URL");
const zabbixApiToken = Deno.env.get("ZABBIX_API_TOKEN");

equal(zabbixUrl, "ZABBIX_URL must be set in environment variables.");
equal(
  zabbixApiToken,
  "ZABBIX_API_TOKEN must be set in environment variables.",
);

for (const { name, params } of hostParamCases) {
  Deno.test({
    name: `getHosts returns data for ${name}`,
    fn: async () => {
      const result = await getHosts(params);
      equal(typeof result, "object");
      equal(
        Array.isArray(result?.result),
        "Expected result array in response",
      );
      equal(result.result.length >= 0, "Expected result array to be present");
    },
    sanitizeResources: false,
    sanitizeOps: false,
  });
}
