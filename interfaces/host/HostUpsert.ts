import { Tag } from "../common/Tag.ts";

/**
 * Extra properties for creating/updating operations for Host objects.
 * These are optional additional parameters for both createHost and updateHost functions.
 */
export interface HostUpsert {
  groups?: Array<Record<"groupid", string>>;
  tags?: Array<HostTag>;
  templates?: Array<Record<"templateid", string>>;
}

type HostTag = Tag & {
  /**
     * Type of host tag.

    Possible values:

    0 - (default) manual (tag created by user);

    1 - automatic (tag created by low-level discovery)
     */
  automatic: 0 | 1;
};
