import type { RitualFaith, RitualKind } from '@/types';

export const RITUAL_KIND_LABELS: Record<RitualKind, string> = {
  'seasonal-observance': 'Seasonal Observances',
  'rite-of-passage': 'Rites of Passage',
  'family-custom': 'Family Customs',
  broto: 'Brotos & Panchali',
  'daily-ritual': 'Daily Rituals',
};

export const RITUAL_KIND_FILTER_ORDER: RitualKind[] = [
  'seasonal-observance',
  'family-custom',
  'broto',
  'rite-of-passage',
  'daily-ritual',
];

export const RITUAL_FAITH_LABELS: Record<RitualFaith, string> = {
  hindu: 'Hindu',
  secular: 'Secular / Civic',
  'across-communities': 'Across communities',
};
