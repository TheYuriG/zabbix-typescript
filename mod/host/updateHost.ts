import { Host } from "../../interfaces/host/Host.ts";
import { HostId } from "../../interfaces/host/HostId.ts";
import { HostUpsert } from "../../interfaces/host/HostUpsert.ts";

/**
 * Updates an existing host in the Zabbix API based on the provided parameters.
 * @param {UpdateHostParams} params - The parameters for updating the host.
 * @returns {Promise<UpdateHostResponse>} The response from the Zabbix API containing the updated host.
 */
export async function updateHost(
  params: Host & { hostid: string } & HostUpsert,
): Promise<Array<HostId>> {
  if (params.hostid === undefined) {
    throw new Error("Host ID is required for updating a host.");
  }

  const request = await fetch(`${Deno.env.get("ZABBIX_URL")}/api_jsonrpc.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json-rpc",
      "Authorization": `Bearer ${Deno.env.get("ZABBIX_API_TOKEN")}`,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "host.update",
      "params": params,
      id: 1,
    }),
  });

  if (!request.ok) {
    throw new Error(
      `Error updating host: ${request.status} ${request.statusText}`,
    );
  }

  const response: UpdateHostResponse = await request.json();

  if (response.error !== undefined) {
    throw new Error(
      `Error updating host: "${response.error.message} - ${response.error.data}"`,
    );
  }

  return response.result as Array<HostId>;
}

interface UpdateHostResponse {
  jsonrpc: "2.0";
  result?: Array<HostId>;
  error?: {
    code: number;
    message: string;
    data: string;
  };
  id: number;
}
