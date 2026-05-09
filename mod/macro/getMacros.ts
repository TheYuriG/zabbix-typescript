import { CommonApiParams } from "../../interfaces/CommonApiInterfaces.ts";
import { HostMacro } from "../../interfaces/host/HostMacro.ts";
import { GlobalMacro } from "../../interfaces/macro/GlobalMacro.ts";

/**
 * When `globalmacro` is `false` or omitted, retrieves an array of host macros.
 *
 * @param {object} lookupParameters - Parameters to retrieve macros.
 * @param {boolean} [lookupParameters.globalmacro=false] - Set to `false` or omit to retrieve host macros.
 * @param {boolean} [lookupParameters.countOutput=false] - Optional; set to `false` or omitted.
 * @returns {Promise<Array<HostMacro>>} - Array of host macros.
 */
export async function getMacros(
  lookupParameters: GetMacrosParams & {
    globalmacro?: false;
    countOutput?: false;
  },
): Promise<Array<HostMacro>>;

/**
 * When `globalmacro` is `true`, retrieves an array of global macros.
 *
 * @param {object} lookupParameters - Parameters to retrieve macros.
 * @param {boolean} [lookupParameters.globalmacro=true] - Set to `true` to retrieve global macros.
 * @param {boolean} [lookupParameters.countOutput=false] - Optional; set to `false` or omitted.
 * @returns {Promise<Array<GlobalMacro>>} - Array of global macros.
 */
export async function getMacros(
  lookupParameters: GetMacrosParams & {
    globalmacro: true;
    countOutput?: false;
  },
): Promise<Array<GlobalMacro>>;

/**
 * When `countOutput` is `true`, retrieves the number of macros matching the criteria.
 *
 * @param {object} lookupParameters - Parameters to retrieve macros.
 * @param {boolean} [lookupParameters.countOutput=true] - Set to `true` to get the count of matching macros.
 * @returns {Promise<number>} - The number of macros that match the criteria.
 */
export async function getMacros(
  lookupParameters: GetMacrosParams & { countOutput: true },
): Promise<number>;

/**
 * Core implementation for retrieving macros based on parameters.
 *
 * @param {GetMacrosParams} lookupParameters - Parameters for retrieving macros.
 * @returns {Promise<Array<GlobalMacro> | Array<HostMacro> | number>} -
 *  - When `countOutput` is `true`, resolves to the number of matching macros.
 *  - When `globalmacro` is `true`, resolves to an array of global macros.
 *  - When `globalmacro` is `false` or omitted, resolves to an array of host macros.
 */
export async function getMacros(
  lookupParameters: GetMacrosParams,
): Promise<Array<GlobalMacro> | Array<HostMacro> | number> {
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

  const macros: GetMacrosResponse = await request.json();

  if (lookupParameters.countOutput === true) {
    return macros.result as number;
  }

  if (lookupParameters.globalmacro === true) {
    return macros.result as Array<GlobalMacro>;
  }

  return macros.result as Array<HostMacro>;
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

interface GetMacrosResponse {
  jsonrpc: "2.0";
  result: GlobalMacro[] | HostMacro[] | number;
  id: number;
}
