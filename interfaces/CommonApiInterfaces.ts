/**
 * Common API parameters used across Zabbix API methods.
 */
export interface CommonApiParams {
  /** Return the number of records in the result instead of the actual data. */
  countOutput?: boolean;
  /** If set to true, return only objects that the user has write permissions to. Default: false. */
  editable?: boolean;
  /** Return results that do not match the criteria given in the search parameter. */
  excludeSearch?: boolean;
  /** Return only those results that exactly match the given filter. Accepts an object, where the keys are property names (e.g., Host object properties in host.get, Item object properties in item.get, etc.), and the values are either a single value or an array of values to match against. Does not support properties of text data type. Note that some methods have specific functionality for this parameter, which is described on the method page (e.g., the filter parameter in host.get also supports Host interface properties). */
  filter?: object;
  /** Limit the number of records returned. */
  limit?: number;
  /** Object properties to be returned. Note that the object ID (i.e., hostid, itemid, etc.) is always included in the response, even if it is not specified in the output parameter. Default: extend. */
  output?: any;
  /** Use IDs as keys in the resulting array. */
  preservekeys?: boolean;
  /** Return results that match the given pattern (case-insensitive). Accepts an object, where the keys are property names (e.g., Host object properties in host.get, Item object properties in item.get, etc.), and the values are strings to search for. If no additional options are given, this will perform a LIKE "%…%" search. Supports only properties of string and text data type. Note that some methods have specific functionality for this parameter, which is described on the method page (e.g., the search parameter in host.get also supports Host interface properties). */
  search?: object;
  /** If set to true, return results that match any of the criteria given in the filter or search parameter instead of all of them. Default: false. */
  searchByAny?: boolean;
  /** If set to true, enables the use of "*" as a wildcard character in the search parameter. Default: false. */
  searchWildcardsEnabled?: boolean;
  /** Sort the result by the given properties. Refer to a specific API get method description for a list of properties that can be used for sorting. Macros are not expanded before sorting. If no value is specified, data will be returned unsorted. */
  sortfield?: string | string[];
  /** Order of sorting. If an array is passed, each value will be matched to the corresponding property given in the sortfield parameter. Possible values: ASC - (default) ascending; DESC - descending. */
  sortorder?: string | string[];
  /** The search parameter will compare the beginning of fields, that is, perform a LIKE "…%" search instead. Ignored if searchWildcardsEnabled is set to true. */
  startSearch?: boolean;
}
