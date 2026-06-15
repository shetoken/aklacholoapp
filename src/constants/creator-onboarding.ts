import type {
  BengalRegion,
  CreatorApplicationStatus,
  DisciplineType,
} from '@/types';

/** Regions on creator apply / scout forms — West Bengal (India) for now. */
export const BENGAL_REGIONS: BengalRegion[] = [
  'Kolkata',
  'Bishnupur',
  'Shantiniketan',
  'Murshidabad',
  'Nadia',
  'Other',
];

/** Bangladesh — re-enable on forms when ready (after Indian regions). */
export const BENGAL_REGIONS_BANGLADESH: BengalRegion[] = [
  'Dhaka',
  'Sylhet',
  'Tangail',
];

export const DISCIPLINE_TYPES: { key: DisciplineType; label: string }[] = [
  { key: 'physical', label: 'Artisan / physical craft' },
  { key: 'digital', label: 'Digital / animation / design' },
  { key: 'teacher', label: 'Teacher / classes' },
];

export const CREATOR_DISCIPLINES = [
  'Kolka Art',
  'Batik Art',
  'Textiles',
  'Embroidery',
  'Artist - Paintings',
  'Graphic Designer',
  'AI Animator',
] as const;

export type CreatorDiscipline = (typeof CREATOR_DISCIPLINES)[number];

/** Suggested disciplineType when a fixed discipline is chosen. */
export function disciplineToType(d: CreatorDiscipline): DisciplineType {
  switch (d) {
    case 'Graphic Designer':
    case 'AI Animator':
      return 'digital';
    default:
      return 'physical';
  }
}

export const APPLICATION_STATUS_LABELS: Record<CreatorApplicationStatus, string> =
  {
    submitted: 'Submitted',
    in_review: 'In review',
    interview_scheduled: 'Interview scheduled',
    sample_requested: 'Sample requested',
    sample_ordered: 'Sample ordered',
    approved: 'Approved',
    declined: 'Declined',
    published: 'Published',
    suspended: 'Suspended',
  };

/** Founder-only tracker — change in src/constants/admin.ts */
export { ADMIN_ACCESS_PIN } from './admin';
