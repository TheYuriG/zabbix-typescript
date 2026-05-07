import { BaseMacro } from "../common/Macro.ts";

/**
 * Interface for Macro configuration used in HostMacro
 */
interface HostMacroConfig {
  /**
   * Type of the macro configuration.
   */
  type: number;

  /**
   * Label for the macro input field.
   */
  label: string;

  /**
   * Optional description of the macro configuration.
   */
  description?: string;

  /**
   * Priority of the macro input in the list.
   */
  priority?: number;

  /**
   * Marks the macro as mandatory.
   * 0 - Not mandatory
   * 1 - Mandatory
   */
  required?: number;

  /**
   * Regular expression to validate user input (applicable for Textbox).
   */
  regex?: string;

  /**
   * Label of the collapsible section where the macro is grouped.
   */
  section_name?: string;

  /**
   * JSON string defining list items or checkbox values.
   * Example for list: '[{"value": "http", "text": "HTTP"}]'
   * Example for checkbox: '{"checked": true, "unchecked": false}'
   */
  options?: string;
}

/**
 * Interface for Host Macro extending BaseMacro
 */
export interface HostMacro extends BaseMacro {
  /**
   * Macro type.
   * Possible values:
   * 0 - Not used in Host Wizard
   * 1 - Textbox
   * 2 - List
   * 3 - Checkbox
   */
  type: number;

  /**
   * Read-only ID of the host macro.
   */
  hostmacroid?: string;

  /**
   * ID of the host, host prototype, or template that the macro belongs to.
   * Required for create operations.
   */
  hostid: string;

  /**
   * Defines whether the macro is controlled by a discovery rule.
   * 0 - Managed by user (default)
   * 1 - Managed by discovery rule
   */
  automatic?: number;

  /**
   * Macro configuration responsible for display in Host Wizard.
   */
  config?: HostMacroConfig[];
}
