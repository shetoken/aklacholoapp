import type { AuthorForm, AuthorRecognition, LiteraryEra } from '@/types';

export const LITERARY_ERA_ORDER: LiteraryEra[] = [
  'renaissance',
  'early-modern',
  'modern',
  'contemporary',
];

export const ERA_META: Record<
  LiteraryEra,
  { label: string; period: string; description: string }
> = {
  renaissance: {
    label: 'Bengal Renaissance',
    period: '19th–early 20th c.',
    description: 'Reformers, novelists, and poets who forged modern Bengali letters.',
  },
  'early-modern': {
    label: 'Early Modern',
    period: 'early–mid 20th c.',
    description: 'Storytellers of ordinary life and the Rebel Poet’s fire.',
  },
  modern: {
    label: 'Modern',
    period: 'mid–late 20th c.',
    description: 'Novelists and poets of post-independence Bengal.',
  },
  contemporary: {
    label: 'Contemporary',
    period: 'late 20th c.–today',
    description: 'Global Bengali voices and the diaspora experience.',
  },
};

export const AUTHOR_FORM_ORDER: AuthorForm[] = [
  'poet',
  'novelist',
  'short-story',
  'playwright',
  'essayist',
  'reformer',
  'childrens',
  'songwriter',
];

export const FORM_LABELS: Record<AuthorForm, string> = {
  poet: 'Poet',
  novelist: 'Novelist',
  'short-story': 'Short story',
  playwright: 'Playwright',
  essayist: 'Essayist',
  reformer: 'Reformer',
  childrens: "Children's",
  songwriter: 'Songwriter',
};

export const RECOGNITION_LABELS: Record<AuthorRecognition, string> = {
  'nobel-literature': 'Nobel Prize in Literature',
  jnanpith: 'Jnanpith Award',
  'sahitya-akademi': 'Sahitya Akademi Award',
  'padma-vibhushan': 'Padma Vibhushan',
  'padma-bhushan': 'Padma Bhushan',
  'padma-shri': 'Padma Shri',
  'national-poet': 'National Poet',
};

export const AUTHOR_REGION_LABELS: Record<string, string> = {
  'kolkata-wb': 'Kolkata',
  'west-bengal': 'West Bengal',
  bangladesh: 'Bangladesh',
  'undivided-bengal': 'Undivided Bengal',
  diaspora: 'Diaspora',
};
