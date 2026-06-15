import type { HeritageTag, ResourceCategory, NaturalResourceRegion } from '@/types';

export const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  river: 'Rivers',
  'mountain-hill': 'Mountains & Hills',
  'mangrove-forest': 'Mangroves & Forests',
  wildlife: 'Wildlife',
  mineral: 'Minerals',
  agriculture: 'Agriculture',
  'beach-coast': 'Beaches & Coast',
  wetland: 'Wetlands',
  'protected-area': 'Protected Areas',
};

export const CATEGORY_FILTER_ORDER: ResourceCategory[] = [
  'mangrove-forest',
  'wildlife',
  'mountain-hill',
  'river',
  'agriculture',
  'mineral',
  'beach-coast',
  'wetland',
  'protected-area',
];

export const REGION_LABELS: Record<NaturalResourceRegion, string> = {
  'darjeeling-hills': 'Darjeeling Hills',
  'dooars-terai': 'Dooars & Terai',
  'gangetic-plain': 'Gangetic Plain',
  'sundarbans-delta': 'Sundarbans Delta',
  'rarh-western': 'Rarh (Western Bengal)',
  coastal: 'Coastal Bengal',
  'across-bengal': 'Across Bengal',
  bangladesh: 'Bangladesh',
  'india-bangladesh-shared': 'India & Bangladesh (shared)',
};

export const HERITAGE_LABELS: Record<HeritageTag, string> = {
  'unesco-world-heritage': 'UNESCO World Heritage',
  'ramsar-wetland': 'Ramsar Wetland',
  'gi-protected': 'Geographical Indication',
  'national-park': 'National Park',
  'tiger-reserve': 'Tiger Reserve',
  'biosphere-reserve': 'Biosphere Reserve',
};
