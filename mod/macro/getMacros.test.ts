import { assert, assertNotEquals } from "@std/assert";
import { getMacros, GetMacrosParams } from "./getMacros.ts";

const macroParamCases: Array<{ name: string; params: GetMacrosParams }> = [
  { name: "countOutput", params: { countOutput: true } },
  { name: "editable", params: { editable: true } },
  { name: "filter", params: { filter: { macro: "$MACRO" } } },
  { name: "globalmacro", params: { globalmacro: true } },
  { name: "globalmacroids", params: { globalmacroids: ["10"] } },
  { name: "groupids", params: { groupids: ["20"] } },
  { name: "hostids", params: { hostids: ["30"] } },
  { name: "hostmacroids", params: { hostmacroids: ["40"] } },
  { name: "inherited", params: { inherited: true } },
  { name: "limit", params: { limit: 5 } },
  { name: "output", params: { output: ["hostmacroid"] } },
  { name: "preservekeys", params: { preservekeys: true } },
  { name: "search", params: { search: { macro: "$MACRO" } } },
  { name: "searchByAny", params: { searchByAny: true } },
  { name: "searchWildcardsEnabled", params: { searchWildcardsEnabled: true } },
  { name: "selectGroups", params: { selectGroups: ["groupid"] } },
  { name: "selectHosts", params: { selectHosts: ["hostid"] } },
  { name: "selectTemplates", params: { selectTemplates: ["templateid"] } },
  { name: "sortfield", params: { sortfield: ["macro"] } },
  { name: "sortorder", params: { sortorder: ["DESC"] } },
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

for (const { name, params } of macroParamCases) {
  Deno.test({
    name: `getMacros returns data for ${name}`,
    fn: async () => {
      const macros = await getMacros(params);
      assert(typeof macros === "object", "Expected response to be an object");
      if (params.countOutput !== undefined) {
        assert(
          typeof macros === "string",
          "Expected countOutput parameter to be true and return a string as result",
        );
      } else {
        assert(
          typeof macros === "object",
          "Expected result object or array in response",
        );
        if (params.preservekeys === true) {
          assert(
            !Array.isArray(macros),
            "Expected result object in response when preservekeys is true",
          );
        } else {
          assert(
            Array.isArray(macros),
            "Expected result array in response",
          );
          assert(
            (macros as Array<unknown>).length >= 0,
            "Expected result array to be present",
          );
        }
      }
    },
  });
}
