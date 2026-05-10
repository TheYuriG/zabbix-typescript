/**
 * Represents a Zabbix Host Tag.
 * @interface {Object} ZabbixTag
 * @property {string} tag - The name of the tag (e.g., "Environment").
 * @property {string} [value] - The optional value of the tag (e.g., "Production").
 */
export type Tag = {
  /**
   * Tag name.
   * - Property behavior:
   * required
   */
  tag: string;
  /**
   * Tag value.
   */
  value?: string;
};
