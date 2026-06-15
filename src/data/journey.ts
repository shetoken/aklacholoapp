import type { JourneyNodeDefinition } from '@/types';

/** Ordered ids for v1 linear progression. */
export const JOURNEY_NODE_ORDER: string[] = [
  'journey_kolka',
  'journey_kantha',
  'journey_terracotta',
  'journey_cuisine',
  'journey_music',
  'journey_festivals',
  'journey_folklore',
];

/**
 * Journey node graph — linear for v1, `connections` ready for constellation map.
 * Runtime status comes from journey.service + AsyncStorage progress.
 */
export const journeyNodes: JourneyNodeDefinition[] = [
  {
    id: 'journey_kolka',
    title: 'Kolka',
    subtitle: 'The motif at the heart of Bengal',
    motifKey: 'classic',
    articleId: 'art_kolka',
    connections: ['journey_kantha'],
    order: 0,
  },
  {
    id: 'journey_kantha',
    title: 'Kantha',
    subtitle: 'Running-stitch embroidery tradition',
    motifKey: 'vine',
    articleId: 'art_kantha',
    connections: ['journey_kolka', 'journey_terracotta'],
    order: 1,
  },
  {
    id: 'journey_terracotta',
    title: 'Terracotta',
    subtitle: 'Temple clay of Bishnupur',
    motifKey: 'lotus',
    articleId: 'art_terracotta',
    connections: ['journey_kantha', 'journey_cuisine'],
    order: 2,
  },
  {
    id: 'journey_cuisine',
    title: 'Bengali Cuisine',
    subtitle: 'Rice, mustard, and season',
    motifKey: 'border',
    articleId: 'art_journey_cuisine',
    connections: ['journey_terracotta', 'journey_music'],
    order: 3,
  },
  {
    id: 'journey_music',
    title: 'Bengali Music',
    subtitle: 'Baul to Rabindra Sangeet',
    motifKey: 'classic',
    articleId: 'art_journey_music',
    connections: ['journey_cuisine', 'journey_festivals'],
    order: 4,
  },
  {
    id: 'journey_festivals',
    title: 'Festivals',
    subtitle: 'Durga Puja and the calendar of joy',
    motifKey: 'lotus',
    articleId: 'art_journey_festivals',
    connections: ['journey_music', 'journey_folklore'],
    order: 5,
  },
  {
    id: 'journey_folklore',
    title: 'Folklore',
    subtitle: 'Tales that raised a culture',
    motifKey: 'vine',
    articleId: 'art_journey_folklore',
    connections: ['journey_festivals'],
    order: 6,
  },
];

export const JOURNEY_FIRST_NODE_ID = JOURNEY_NODE_ORDER[0];

export const JOURNEY_BONUS_ARTICLE_ID = 'art_journey_bonus';

/** Phase 2 hook — slot for Shop discount / early access code. */
export const JOURNEY_REWARD_SHOP_HOOK = {
  type: 'shop_discount' as const,
  placeholderCode: null as string | null,
};
