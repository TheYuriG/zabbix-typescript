import { Host } from "../../interfaces/host/Host.ts";
import { HostId } from "../../interfaces/host/HostId.ts";
import { HostUpsert } from "../../interfaces/host/HostUpsert.ts";

/**
 * Creates a new host in the Zabbix API based on the provided parameters.
 * @param {UpdateHostParams} params - The parameters for creating the host.
 * @returns {Promise<CreateHostResponse>} The response from the Zabbix API containing the created host.
 */
export async function createHost(
  params: Host & HostUpsert & { groups: Array<Record<"groupid", string>> },
): Promise<Array<HostId>> {
  const request = await fetch(`${Deno.env.get("ZABBIX_URL")}/api_jsonrpc.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json-rpc",
      "Authorization": `Bearer ${Deno.env.get("ZABBIX_API_TOKEN")}`,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "host.create",
      "params": params,
      id: 1,
    }),
  });

  if (!request.ok) {
    throw new Error(
      `Error creating host: ${request.status} ${request.statusText}`,
    );
  }

  const response: CreateHostResponse = await request.json();

  if (response.error !== undefined) {
    throw new Error(
      `Error creating host: "${response.error.message} - ${response.error.data}"`,
    );
  }

  return response.result as Array<HostId>;
}

interface CreateHostResponse {
  jsonrpc: "2.0";
  result?: Array<HostId>;
  error?: {
    code: number;
    message: string;
    data: string;
  };
  id: number;
}
