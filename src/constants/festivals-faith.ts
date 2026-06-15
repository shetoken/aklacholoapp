import type { FaithTradition, FestivalSeason, ReligiousSiteType } from '@/types';

export const FAITH_LABELS: Record<FaithTradition, string> = {
  hindu: 'Hindu',
  islam: 'Islam',
  christian: 'Christian',
  buddhist: 'Buddhist',
  jain: 'Jain',
  sikh: 'Sikh',
  interfaith: 'Interfaith / Universal',
  secular: 'Cultural (all communities)',
};

export const FAITH_FILTER_ORDER: FaithTradition[] = [
  'hindu',
  'islam',
  'christian',
  'secular',
  'interfaith',
  'buddhist',
  'jain',
  'sikh',
];

export const SEASON_LABELS: Record<FestivalSeason, string> = {
  spring: 'Spring',
  summer: 'Summer',
  monsoon: 'Monsoon',
  autumn: 'Autumn',
  winter: 'Winter',
};

export const FESTIVAL_SEASON_ORDER: FestivalSeason[] = [
  'spring',
  'summer',
  'monsoon',
  'autumn',
  'winter',
];

export const SITE_TYPE_LABELS: Record<ReligiousSiteType, string> = {
  temple: 'Temple',
  mosque: 'Mosque',
  church: 'Church',
  monastery: 'Monastery',
  gurudwara: 'Gurudwara',
  'jain-temple': 'Jain temple',
  shrine: 'Shrine / Dargah',
};

export const SITE_TYPE_FILTER_ORDER: ReligiousSiteType[] = [
  'temple',
  'mosque',
  'church',
  'monastery',
  'shrine',
  'gurudwara',
  'jain-temple',
];

export const SITE_STATUS_LABELS: Record<string, string> = {
  'active-worship': 'Active worship',
  'heritage-monument': 'Heritage monument',
  pilgrimage: 'Pilgrimage site',
  'unesco-listed': 'UNESCO listed',
};

export const FAITH_REGION_LABELS: Record<string, string> = {
  kolkata: 'Kolkata',
  howrah: 'Howrah',
  hooghly: 'Hooghly',
  'north-24-parganas': 'North 24 Parganas',
  'south-24-parganas': 'South 24 Parganas',
  murshidabad: 'Murshidabad',
  bankura: 'Bankura',
  birbhum: 'Birbhum',
  malda: 'Malda',
  darjeeling: 'Darjeeling',
  'west-bengal-other': 'West Bengal',
  bangladesh: 'Bangladesh',
  'across-bengal': 'Across Bengal',
};
