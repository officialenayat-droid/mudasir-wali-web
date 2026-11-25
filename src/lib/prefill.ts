import type { IssueCategoryId, LocalityId } from "../data/localities";

export type GrievancePrefill = { locality?: LocalityId; category?: IssueCategoryId };
export const PREFILL_EVENT = "mw:prefill-grievance";

/** Lets other sections (e.g. the ward tracker) pre-select fields in the Janata Darbar form. */
export function prefillGrievance(detail: GrievancePrefill) {
  window.dispatchEvent(new CustomEvent<GrievancePrefill>(PREFILL_EVENT, { detail }));
}
