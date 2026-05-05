import { HostId } from "../../interfaces/host/HostId.ts";

/**
 * This function sends a request to the Zabbix API to delete hosts based on the provided host IDs. It returns the list of deleted host IDs upon successful deletion.
 * @param params HostIds An array of strings representing the list of host IDs to be deleted.
 * @returns <hostids: HostIds[]> An object containing the list of deleted host IDs.
 */
export async function deleteHosts(params: HostIds): Promise<HostIds> {
  const request = await fetch(`${Deno.env.get("ZABBIX_URL")}/api_jsonrpc.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json-rpc",
      "Authorization": `Bearer ${Deno.env.get("ZABBIX_API_TOKEN")}`,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "host.delete",
      "params": params,
      id: 2,
    }),
  });

  if (!request.ok) {
    throw new Error(
      `Error deleting hosts: ${request.status} ${request.statusText}`,
    );
  }

  const deletedHosts: DeleteHostsResponse = await request.json();

  return deletedHosts.result;
}

interface DeleteHostsResponse {
  jsonrpc: "2.0";
  result: HostIds;
  id: number;
}

type HostIds = Array<HostId>;
