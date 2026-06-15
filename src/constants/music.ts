import type { GenreFamily, InstrumentType } from '@/types';

export const GENRE_FAMILY_LABELS: Record<GenreFamily, string> = {
  panchakavi: 'The Five Song-Poets (Panchakavi)',
  folk: 'Folk',
  devotional: 'Devotional',
  'classical-rooted': 'Classical-Rooted',
  modern: 'Modern',
};

export const GENRE_FAMILY_FILTER_ORDER: GenreFamily[] = [
  'panchakavi',
  'folk',
  'devotional',
  'classical-rooted',
  'modern',
];

export const INSTRUMENT_TYPE_LABELS: Record<InstrumentType, string> = {
  string: 'String',
  wind: 'Wind',
  percussion: 'Percussion',
  'keyboard-reed': 'Keyboard / Reed',
};

export const INSTRUMENT_TYPE_FILTER_ORDER: InstrumentType[] = [
  'string',
  'wind',
  'percussion',
  'keyboard-reed',
];
