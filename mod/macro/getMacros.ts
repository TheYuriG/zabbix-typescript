import { CommonApiParams } from "../../interfaces/CommonApiInterfaces.ts";

export async function getMacros(
  lookupParameters: GetMacrosParams,
): Promise<GetMacrosResponse> {
  const request = await fetch(`${Deno.env.get("ZABBIX_URL")}/api_jsonrpc.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json-rpc",
      "Authorization": `Bearer ${Deno.env.get("ZABBIX_API_TOKEN")}`,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "usermacro.get",
      params: lookupParameters,
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

/**
 * Interface for parameters used in the getMacros function to query Zabbix user macros.
 */
export interface GetMacrosParams extends CommonApiParams {
  /** Return global macros instead of host macros. */
  globalmacro?: boolean;
  /** Return only global macros with the given IDs. */
  globalmacroids?: Array<string> | string;
  /** Return only host macros that belong to hosts or templates from the given host groups. */
  groupids?: Array<string> | string;
  /** Return only macros that belong to the given hosts or templates. */
  hostids?: Array<string> | string;
  /** Return only host macros with the given IDs. */
  hostmacroids?: Array<string> | string;
  /** If set to true return only host prototype user macros inherited from a template. */
  inherited?: boolean;
  /** Return host groups that the host macro belongs to in the groups property. */
  selectGroups?: Array<string>;
  /** Return hosts that the host macro belongs to in the hosts property. Used only when retrieving host macros. */
  selectHosts?: Array<string>;
  /** Return templates that the host macro belongs to in the templates property. Used only when retrieving host macros. */
  selectTemplates?: Array<string>;
}

interface GetMacrosMacro {
  hostmacroid: string;
  hostid?: string;
  macro?: string;
  value?: string;
  description?: string;
  type?: string;
  automatic?: string;
}

interface GetMacrosResponse {
  jsonrpc: "2.0";
  result: GetMacrosMacro[] | number;
  id: number;
}
