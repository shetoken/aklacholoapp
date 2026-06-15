import type { HeritageBuildingRegion, HeritageCurrentStatus } from '@/types';

export const STATUS_LABELS: Record<HeritageCurrentStatus, string> = {
  museum: 'Museum',
  'heritage-hotel': 'Heritage Hotel — you can stay',
  'ruin-abandoned': 'Abandoned Ruin',
  'private-residence': 'Private Residence',
  'for-sale': 'For Sale',
  'partial-public': 'Partly Open to Visitors',
  'film-location': 'Famous Film Location',
};

/** Curated status filters on the hub browse UI. */
export const HERITAGE_STATUS_FILTER_ORDER: HeritageCurrentStatus[] = [
  'heritage-hotel',
  'ruin-abandoned',
  'museum',
  'film-location',
  'partial-public',
  'private-residence',
];

export const HERITAGE_REGION_LABELS: Record<HeritageBuildingRegion, string> = {
  murshidabad: 'Murshidabad',
  hooghly: 'Hooghly',
  'south-24-parganas': 'South 24 Parganas',
  'north-24-parganas': 'North 24 Parganas',
  'cooch-behar': 'Cooch Behar',
  bankura: 'Bankura',
  purulia: 'Purulia',
  kolkata: 'Kolkata',
  'east-medinipur': 'East Medinipur',
  'west-bengal-other': 'West Bengal',
  bangladesh: 'Bangladesh',
};

export const HERITAGE_TYPE_LABELS: Record<string, string> = {
  'royal-palace': 'Royal palace',
  rajbari: 'Rajbari',
  'merchant-house': 'Merchant house',
  'nawabi-palace': 'Nawabi palace',
};

export const HERITAGE_STYLE_LABELS: Record<string, string> = {
  'indo-saracenic': 'Indo-Saracenic',
  'italian-renaissance': 'Italian Renaissance',
  'greek-doric': 'Greek Doric',
  neoclassical: 'Neoclassical',
  colonial: 'Colonial',
  'bengali-traditional': 'Bengali traditional',
  terracotta: 'Terracotta',
  mixed: 'Mixed',
};
