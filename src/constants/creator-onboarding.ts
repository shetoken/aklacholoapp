import type {
  BengalRegion,
  CreatorApplicationStatus,
  DisciplineType,
} from '@/types';

export const BENGAL_REGIONS: BengalRegion[] = [
  'Dhaka',
  'Kolkata',
  'Bishnupur',
  'Shantiniketan',
  'Murshidabad',
  'Sylhet',
  'Tangail',
  'Nadia',
  'Other',
];

export const DISCIPLINE_TYPES: { key: DisciplineType; label: string }[] = [
  { key: 'physical', label: 'Artisan / physical craft' },
  { key: 'digital', label: 'Digital / animation / design' },
  { key: 'teacher', label: 'Teacher / classes' },
];

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
