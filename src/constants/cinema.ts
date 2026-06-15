import type { CinemaBorderSide, CinemaEntryType } from '@/types';

export const CINEMA_BORDER_LABELS: Record<CinemaBorderSide, string> = {
  'west-bengal-india': 'West Bengal, India',
  bangladesh: 'Bangladesh',
  'undivided-bengal': 'Undivided Bengal',
  'across-bengal': 'Across Bengal',
};

export const CINEMA_TYPE_LABELS: Record<CinemaEntryType, string> = {
  film: 'Film',
  'movement-era': 'Overview',
};
