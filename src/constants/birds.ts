import type { BirdHabitat, BirdResidency, OfficialBirdStatus, ConservationStatus } from '@/types';

export const HABITAT_LABELS: Record<BirdHabitat, string> = {
  'mangrove-sundarbans': 'Sundarbans & Mangroves',
  wetland: 'Wetlands',
  'river-delta': 'Rivers & Delta',
  forest: 'Forests',
  'himalayan-hills': 'Himalayan Hills',
  'grassland-dooars': 'Dooars Grasslands',
  'urban-village': 'Towns & Villages',
  widespread: 'Widespread',
};

export const HABITAT_FILTER_ORDER: BirdHabitat[] = [
  'mangrove-sundarbans',
  'wetland',
  'river-delta',
  'forest',
  'himalayan-hills',
  'grassland-dooars',
  'urban-village',
  'widespread',
];

export const RESIDENCY_LABELS: Record<BirdResidency, string> = {
  resident: 'Resident (year-round)',
  'winter-migrant': 'Winter Migrant',
  'summer-visitor': 'Summer Visitor',
  passage: 'Passage Migrant',
};

export const RESIDENCY_FILTER_ORDER: BirdResidency[] = [
  'resident',
  'winter-migrant',
  'summer-visitor',
  'passage',
];

export const OFFICIAL_STATUS_LABELS: Record<OfficialBirdStatus, string> = {
  none: '',
  'state-bird-west-bengal': 'State Bird of West Bengal',
  'national-bird-bangladesh': 'National Bird of Bangladesh',
};

export const CONSERVATION_LABELS: Record<ConservationStatus, string> = {
  common: 'Common',
  'near-threatened': 'Near Threatened',
  vulnerable: 'Vulnerable',
  endangered: 'Endangered',
  'critically-endangered': 'Critically Endangered',
  unknown: 'Status unknown',
};
