import { GetMacrosParams } from "../interfaces/GetMacrosParams.ts";

export async function getMacros(params: GetMacrosParams) {
  const request = await fetch(`${Deno.env.get("ZABBIX_URL")}/api_jsonrpc.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json-rpc",
      "Authorization": `Bearer ${Deno.env.get("ZABBIX_API_TOKEN")}`,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "usermacro.get",
      params,
      id: 2,
    }),
  });

  if (!request.ok) {
    throw new Error(
      `Error fetching macros: ${request.status} ${request.statusText}`,
    );
  }

  const macros = await request.json();

  return macros;
}
