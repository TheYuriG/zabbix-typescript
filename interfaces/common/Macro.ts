/**
 * Base interface for common macro properties
 */
export interface BaseMacro {
  /**
   * Optional description of the macro.
   */
  description?: string;

  /**
   * Macro string.
   * Required when creating or updating a macro.
   */
  macro: string;

  /**
   * Value of the macro.
   * Required when creating or updating a macro.
   */
  value: string;
}
