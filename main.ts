import { Host } from "./interfaces/host/Host.ts";
import { getHosts, getMacros } from "./mod/mod.ts";

const hosts: Array<Host> = await getHosts({
  // countOutput: true,
  selectInterfaces: ["ip", "dns", "hostid", "available"],
  output: ["status", "name"],
  selectParentTemplates: ["templateid", "name"],
  selectInventory: ["location", "location_lat", "location_lon", "macaddress_a"],
});
console.log(hosts);

const macros = await getMacros({
  editable: true,
  output: ["hostmacroid", "macro", "value"],
});
console.log(macros);
