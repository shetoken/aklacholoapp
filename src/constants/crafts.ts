import type { CraftMedium } from '@/types';

export const CRAFT_MEDIUM_LABELS: Record<CraftMedium, string> = {
  'textile-embroidery': 'Textile & Embroidery',
  metal: 'Metal',
  painting: 'Painting',
  'clay-terracotta': 'Clay & Terracotta',
  spongewood: 'Spongewood (Shola)',
  shell: 'Shell',
  wood: 'Wood',
  fibre: 'Fibre',
};

export const CRAFT_MEDIUM_FILTER_ORDER: CraftMedium[] = [
  'textile-embroidery',
  'metal',
  'painting',
  'clay-terracotta',
  'spongewood',
  'shell',
  'wood',
  'fibre',
];
