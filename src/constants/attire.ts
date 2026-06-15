import type { AttireCategory, AttireWornBy } from '@/types';

export const ATTIRE_CATEGORY_LABELS: Record<AttireCategory, string> = {
  clothing: 'Clothing',
  jewellery: 'Jewellery',
  adornment: 'Adornment & Tradition',
};

export const ATTIRE_CATEGORY_FILTER_ORDER: AttireCategory[] = [
  'clothing',
  'jewellery',
  'adornment',
];

export const WORN_BY_LABELS: Record<AttireWornBy, string> = {
  women: 'Women',
  men: 'Men',
  all: 'All',
  bride: 'Bride',
  groom: 'Groom',
};

export const WORN_BY_FILTER_ORDER: AttireWornBy[] = [
  'women',
  'men',
  'bride',
  'groom',
  'all',
];
