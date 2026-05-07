import { BaseMacro } from "../common/Macro.ts";

/**
 * Interface for Global Macro extending BaseMacro
 */
export interface GlobalMacro extends BaseMacro {
  /**
   * Macro type.
   * Possible values:
   * 0 - Text macro
   * 1 - Secret macro
   * 2 - Vault secret
   */
  type: number;

  /**
   * Read-only ID of the global macro.
   */
  globalmacroid?: string;
}
