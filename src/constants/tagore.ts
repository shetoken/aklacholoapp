import type { TagoreWorkForm } from '@/types';

export const TAGORE_WORK_FORM_ORDER: TagoreWorkForm[] = [
  'poetry',
  'novel',
  'short-story',
  'play',
  'dance-drama',
  'painting',
  'institution',
  'song-collection',
];

export const TAGORE_WORK_FORM_LABELS: Record<TagoreWorkForm, string> = {
  poetry: 'Poetry',
  novel: 'Novels',
  'short-story': 'Short stories',
  play: 'Plays',
  'dance-drama': 'Dance-dramas',
  essay: 'Essays',
  'song-collection': 'Song collections',
  painting: 'Painting',
  institution: 'Shantiniketan',
};

/** Forms shown as dedicated sections on the hub “His Creations” area. */
export const TAGORE_HUB_CREATION_FORMS: TagoreWorkForm[] = [
  'poetry',
  'novel',
  'play',
  'dance-drama',
  'painting',
  'institution',
];
