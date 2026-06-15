import type { LiteraryForm } from '@/types';

export const LITERARY_FORM_LABELS: Record<LiteraryForm, string> = {
  novel: 'Novels',
  poetry: 'Poetry',
  'short-story-collection': 'Short Stories',
  play: 'Plays',
  essay: 'Essays',
  memoir: 'Memoir',
  childrens: "Children's",
};

export const LITERARY_FORM_FILTER_ORDER: LiteraryForm[] = [
  'novel',
  'poetry',
  'short-story-collection',
  'play',
  'essay',
  'memoir',
  'childrens',
];
