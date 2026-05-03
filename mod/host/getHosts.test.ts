import { assert, assertNotEquals } from "@std/assert";
import { getHosts, GetHostsParams } from "./getHosts.ts";

const hostParamCases: Array<{ name: string; params: GetHostsParams }> = [
  { name: "countOutput", params: { countOutput: true } },
  { name: "dserviceids", params: { dserviceids: ["20"] } },
  { name: "editable", params: { editable: true } },
  { name: "evaltype", params: { evaltype: 2 } },
  { name: "filter", params: { filter: { host: "MyHost" } } },
  { name: "graphids", params: { graphids: ["30"] } },
  { name: "groupids", params: { groupids: ["10"] } },
  { name: "hostids", params: { hostids: ["40"] } },
  { name: "httptestids", params: { httptestids: ["50"] } },
  { name: "inheritedTags", params: { inheritedTags: true } },
  { name: "interfaceids", params: { interfaceids: ["60"] } },
  { name: "itemids", params: { itemids: ["70"] } },
  { name: "limitSelects", params: { limitSelects: 5 } },
  { name: "maintenanceids", params: { maintenanceids: ["80"] } },
  { name: "monitored_hosts", params: { monitored_hosts: true } },
  { name: "output", params: { output: ["hostid"] } },
  { name: "preservekeys", params: { preservekeys: true } },
  { name: "proxyids", params: { proxyids: ["90"] } },
  { name: "proxy_groupids", params: { proxy_groupids: ["100"] } },
  { name: "search", params: { search: { host: "MyHost" } } },
  { name: "searchByAny", params: { searchByAny: true } },
  {
    name: "searchInventory",
    params: { searchInventory: { asset_tag: "foo" } },
  },
  { name: "searchWildcardsEnabled", params: { searchWildcardsEnabled: true } },
  { name: "selectDashboards", params: { selectDashboards: ["dashboardid"] } },
  { name: "selectDiscoveries", params: { selectDiscoveries: ["discoveryid"] } },
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
  { name: "selectHostDiscovery", params: { selectHostDiscovery: ["host"] } },
  { name: "selectHostGroups", params: { selectHostGroups: ["groupid"] } },
  { name: "selectHttpTests", params: { selectHttpTests: ["httptestid"] } },
  { name: "selectInheritedTags", params: { selectInheritedTags: ["tag"] } },
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
  { name: "selectTags", params: { selectTags: ["tag"] } },
  { name: "selectTriggers", params: { selectTriggers: ["triggerid"] } },
  { name: "selectValueMaps", params: { selectValueMaps: ["valuemapid"] } },
  { name: "severities", params: { severities: [4, 5] } },
  { name: "sortfield", params: { sortfield: ["hostid"] } },
  { name: "sortorder", params: { sortorder: ["DESC"] } },
  { name: "startSearch", params: { startSearch: true } },
  {
    name: "tags",
    params: { tags: [{ tag: "tag", value: "foo", operator: 1 }] },
  },
  { name: "templated_hosts", params: { templated_hosts: false } },
  { name: "templateids", params: { templateids: ["110"] } },
  { name: "triggerids", params: { triggerids: ["120"] } },
  { name: "with_graphs", params: { with_graphs: true } },
  { name: "with_graph_prototypes", params: { with_graph_prototypes: true } },
  { name: "with_httptests", params: { with_httptests: true } },
  { name: "with_item_prototypes", params: { with_item_prototypes: true } },
  { name: "with_items", params: { with_items: true } },
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
    name: "with_simple_graph_item_prototypes",
    params: { with_simple_graph_item_prototypes: true },
  },
  {
    name: "with_simple_graph_items",
    params: { with_simple_graph_items: true },
  },
  { name: "with_triggers", params: { with_triggers: true } },
  { name: "withProblemsSuppressed", params: { withProblemsSuppressed: true } },
];

const zabbixUrl = Deno.env.get("ZABBIX_URL");
const zabbixApiToken = Deno.env.get("ZABBIX_API_TOKEN");

Deno.test({
  name: `Environment variables are correctly set`,
  fn: () => {
    assertNotEquals(
      zabbixUrl,
      undefined,
      "ZABBIX_URL must be set in environment variables.",
    );
    assertNotEquals(
      zabbixUrl,
      "REPLACE_WITH_ZABBIX_URL",
      "ZABBIX_URL must be set in environment variables.",
    );
    assertNotEquals(
      zabbixUrl,
      "",
      "ZABBIX_URL must be set in environment variables.",
    );
    assertNotEquals(
      zabbixApiToken,
      undefined,
      "ZABBIX_API_TOKEN must be set in environment variables.",
    );
    assertNotEquals(
      zabbixApiToken,
      "REPLACE_WITH_ZABBIX_API_TOKEN",
      "ZABBIX_API_TOKEN must be set in environment variables.",
    );
    assertNotEquals(
      zabbixApiToken,
      "",
      "ZABBIX_API_TOKEN must be set in environment variables.",
    );
  },
});

for (const { name, params } of hostParamCases) {
  Deno.test({
    name: `getHosts returns data for ${name}`,
    fn: async () => {
      const hosts = await getHosts(params);
      assert(typeof hosts === "object", "Expected response to be an object");
      if (params.countOutput !== undefined) {
        assert(
          typeof hosts?.result === "string",
          "Expected countOutput parameter to be true and return a string as result",
        );
      } else {
        assert(
          typeof hosts?.result === "object",
          "Expected result object or array in response",
        );
        if (params.preservekeys === true) {
          assert(
            !Array.isArray(hosts?.result),
            "Expected result object in response when preservekeys is true",
          );
        } else {
          assert(
            Array.isArray(hosts?.result),
            "Expected result array in response",
          );
          assert(
            (hosts.result as Array<unknown>).length >= 0,
            "Expected result array to be present",
          );
        }
      }
    },
  });
}
