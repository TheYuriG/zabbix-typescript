import { CommonApiParams } from "./CommonApiInterfaces.ts";

/**
 * Interface for parameters used in the getMacros function to query Zabbix user macros.
 */
export interface GetMacrosParams extends CommonApiParams {
  /** Return global macros instead of host macros. */
  globalmacro?: boolean;
  /** Return only global macros with the given IDs. */
  globalmacroids?: string | string[];
  /** Return only host macros that belong to hosts or templates from the given host groups. */
  groupids?: string | string[];
  /** Return only macros that belong to the given hosts or templates. */
  hostids?: string | string[];
  /** Return only host macros with the given IDs. */
  hostmacroids?: string | string[];
  /** If set to true return only host prototype user macros inherited from a template. */
  inherited?: boolean;
  /** Return host groups that the host macro belongs to in the groups property. */
  selectGroups?: any;
  /** Return hosts that the host macro belongs to in the hosts property. Used only when retrieving host macros. */
  selectHosts?: any;
  /** Return templates that the host macro belongs to in the templates property. Used only when retrieving host macros. */
  selectTemplates?: any;
}
