/**
 * Represents a template object used in the template API.
 */
export interface Template {
  /**
   * ID of the template.
   *
   * Behavior:
   * - read-only
   * - required for update operations
   */
  readonly templateid: string | number;

  /**
   * Description of the template.
   */
  description: string;

  /**
   * Technical name of the template.
   *
   * Behavior:
   * - required for create operations
   */
  host: string;

  /**
   * Visible name of the template.
   * @default host property value
   */
  name?: string;

  /**
   * Template-specific configuration instructions to display in the Host Wizard.
   * Supports Markdown formatting.
   */
  readme: string;

  /**
   * Universal unique identifier, used for linking imported templates to already existing ones.
   * @default Auto-generated, if not given.
   */
  uuid?: string;

  /**
   * Template vendor name.
   *
   * Behavior:
   * - For create operations, both vendor_name and vendor_version should be either set or left empty.
   * - For update operations, vendor_version can be left empty if it has a value in the database.
   */
  vendor_name?: string;

  /**
   * Template vendor version.
   *
   * Behavior:
   * - For create operations, both vendor_name and vendor_version should be either set or left empty.
   * - For update operations, vendor_name can be left empty if it has a value in the database.
   */
  vendor_version?: string;

  /**
   * Whether the template is available for selection in the Host Wizard.
   *
   * Values:
   * - `0`: (default) Not available.
   * - `1`: Available.
   * @default 0
   */
  wizard_ready?: 0 | 1;
}
