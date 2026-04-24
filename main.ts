import { getHosts } from "./mod/mod.ts";

const hosts = await getHosts({
  // countOutput: true,
  selectInterfaces: ["ip", "dns", "hostid", "available"],
  output: ["status", "name"],
  selectParentTemplates: ["templateid", "name"],
});
console.log(hosts);
