import { GetHostsParams } from "../interfaces/GetHostsParams.ts";

/**
 * Retrieves hosts from the Zabbix API based on the provided parameters.
 * @param {GetHostsParams} params - The parameters to filter and select hosts.
 * @returns {Promise<any>} The response from the Zabbix API containing the hosts.
 */
export async function getHosts(params: GetHostsParams) {
  const request = await fetch(`${Deno.env.get("ZABBIX_URL")}/api_jsonrpc.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json-rpc",
      "Authorization": `Bearer ${Deno.env.get("ZABBIX_API_TOKEN")}`,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "host.get",
      "params": params,
      id: 2,
    }),
  });

  if (!request.ok) {
    throw new Error(
      `Error fetching hosts: ${request.status} ${request.statusText}`,
    );
  }

  const hosts = await request.json();

  return hosts;
}
