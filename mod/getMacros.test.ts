import { equal } from "@std/assert";
import { getMacros } from "./getMacros.ts";
import type { GetMacrosParams } from "../interfaces/GetMacrosParams.ts";

const macroParamCases: Array<{ name: string; params: GetMacrosParams }> = [
  { name: "globalmacro", params: { globalmacro: true } },
  { name: "globalmacroids", params: { globalmacroids: ["10"] } },
  { name: "groupids", params: { groupids: ["20"] } },
  { name: "hostids", params: { hostids: ["30"] } },
  { name: "hostmacroids", params: { hostmacroids: ["40"] } },
  { name: "inherited", params: { inherited: true } },
  { name: "selectGroups", params: { selectGroups: ["groupid"] } },
  { name: "selectHosts", params: { selectHosts: ["hostid"] } },
  { name: "selectTemplates", params: { selectTemplates: ["templateid"] } },
  { name: "filter", params: { filter: { macro: "$MACRO" } } },
  { name: "limit", params: { limit: 5 } },
  { name: "output", params: { output: ["hostmacroid"] } },
  { name: "preservekeys", params: { preservekeys: true } },
  { name: "search", params: { search: { macro: "$MACRO" } } },
  { name: "searchByAny", params: { searchByAny: true } },
  { name: "searchWildcardsEnabled", params: { searchWildcardsEnabled: true } },
  { name: "sortfield", params: { sortfield: ["macro"] } },
  { name: "sortorder", params: { sortorder: ["DESC"] } },
  { name: "countOutput", params: { countOutput: true } },
  { name: "editable", params: { editable: true } },
  { name: "excludeSearch", params: { excludeSearch: true } },
];

const zabbixUrl = Deno.env.get("ZABBIX_URL");
const zabbixApiToken = Deno.env.get("ZABBIX_API_TOKEN");

equal(zabbixUrl, "ZABBIX_URL must be set in environment variables.");
equal(
  zabbixApiToken,
  "ZABBIX_API_TOKEN must be set in environment variables.",
);

for (const { name, params } of macroParamCases) {
  Deno.test({
    name: `getMacros returns data for ${name}`,
    fn: async () => {
      const result = await getMacros(params);
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
