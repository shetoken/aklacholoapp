import type { FloraCategory, FloraSeason } from '@/types';

export const FLORA_CATEGORY_LABELS: Record<FloraCategory, string> = {
  fruit: 'Fruits',
  vegetable: 'Vegetables',
  flower: 'Flowers',
};

export const FLORA_CATEGORY_FILTER_ORDER: FloraCategory[] = [
  'fruit',
  'vegetable',
  'flower',
];

export const SEASON_LABELS: Record<FloraSeason, string> = {
  summer: 'Summer (Grishmo)',
  monsoon: 'Monsoon (Borsha)',
  autumn: 'Autumn (Sharat)',
  'late-autumn': 'Late Autumn (Hemanta)',
  winter: 'Winter (Sheet)',
  spring: 'Spring (Boshonto)',
  'year-round': 'Year-round',
};

export const SEASON_FILTER_ORDER: FloraSeason[] = [
  'summer',
  'monsoon',
  'autumn',
  'late-autumn',
  'winter',
  'spring',
  'year-round',
];
