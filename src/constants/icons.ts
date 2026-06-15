import type { IconField, IconBorderSide } from '@/types';

export const FIELD_LABELS: Record<IconField, string> = {
  film: 'Film',
  music: 'Music',
  science: 'Science',
  economics: 'Economics',
  'visual-art': 'Visual Art',
  'thought-reform': 'Thought & Reform',
  'stage-screen': 'Stage & Screen',
};

export const FIELD_FILTER_ORDER: IconField[] = [
  'film',
  'music',
  'science',
  'economics',
  'visual-art',
  'thought-reform',
  'stage-screen',
];

export const ICON_BORDER_LABELS: Record<IconBorderSide, string> = {
  'west-bengal-india': 'West Bengal (India)',
  bangladesh: 'Bangladesh',
  'undivided-bengal': 'Undivided Bengal',
  diaspora: 'Diaspora',
};
