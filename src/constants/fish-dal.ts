import type { FishGroup, FishSeason, FishWaterType } from '@/types';

export const WATER_TYPE_LABELS: Record<FishWaterType, string> = {
  freshwater: 'Freshwater (river & pond)',
  'brackish-estuarine': 'Brackish / Estuarine',
  sea: 'Sea',
  dried: 'Dried (Shutki)',
};

export const WATER_TYPE_FILTER_ORDER: FishWaterType[] = [
  'freshwater',
  'brackish-estuarine',
  'sea',
  'dried',
];

export const FISH_GROUP_LABELS: Record<FishGroup, string> = {
  carp: 'Carp',
  catfish: 'Catfish',
  'prawn-shellfish': 'Prawn & Shellfish',
  'hilsa-herring': 'Hilsa & Herring',
  perch: 'Perch',
  featherback: 'Featherback',
  'sea-fish': 'Sea Fish',
  'dried-fish': 'Dried Fish',
};

export const FISH_GROUP_FILTER_ORDER: FishGroup[] = [
  'hilsa-herring',
  'prawn-shellfish',
  'carp',
  'catfish',
  'perch',
  'featherback',
  'sea-fish',
  'dried-fish',
];

export const FISH_SEASON_LABELS: Record<FishSeason, string> = {
  monsoon: 'Monsoon (Borsha)',
  winter: 'Winter',
  summer: 'Summer',
  'year-round': 'Year-round',
};

export const FISH_SEASON_FILTER_ORDER: FishSeason[] = [
  'monsoon',
  'winter',
  'summer',
  'year-round',
];
