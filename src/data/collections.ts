import type { Collection } from '@/types';
import { img } from '@/constants/images';

/** Story-driven collections. Each opens to a narrative detail screen. */
export const collections: Collection[] = [
  {
    id: 'col_kantha_revival',
    title: 'The Kantha Revival',
    tagline: 'Old saris, reborn one stitch at a time',
    cover: img('col-kantha-cover', 'Kantha quilt collection', { aspectRatio: 1.3 }),
    narrative:
      'Nothing is wasted in a Bengali household. The kantha tradition was born of thrift — worn cottons layered and stitched into something warmer and more beautiful than the sum of its parts. This collection gathers the women of Shantiniketan reviving that running stitch for a new generation of homes.',
    productIds: ['prod_kantha_throw', 'prod_kantha_cushion', 'prod_kantha_scarf'],
    featuredCreatorIds: ['creator_anjali'],
    relatedArticleIds: ['art_kantha', 'art_kolka'],
    accentColor: 'green',
  },
  {
    id: 'col_terracotta_tales',
    title: 'Terracotta Tales',
    tagline: 'The temple craft of Bishnupur, for your walls',
    cover: img('col-terracotta-cover', 'Terracotta collection', { aspectRatio: 1.3 }),
    narrative:
      'In Bishnupur, entire temples are built of carved red clay, every surface telling a story in fired earth. This collection brings that 17th-century craft down from the temple façade and into the home — panels, planters, and reliefs from the hands of Rahim Sheikh.',
    productIds: ['prod_terracotta_panel', 'prod_terracotta_planter'],
    featuredCreatorIds: ['creator_rahim'],
    relatedArticleIds: ['art_terracotta'],
    accentColor: 'terracotta',
  },
  {
    id: 'col_modern_kolka',
    title: 'Modern Kolka',
    tagline: 'Where the village motif meets the screen',
    cover: img('col-modern-cover', 'Modern kolka collection', { aspectRatio: 1.3 }),
    narrative:
      'The kolka has always traveled — from sari border to temple wall to, now, the pixel. This collection follows digital designers who animate, generate, and reprint the old paisley vocabulary for prints, stationery, and textiles that feel utterly contemporary.',
    productIds: ['prod_motif_print', 'prod_stationery_set', 'prod_indigo_scarf'],
    featuredCreatorIds: ['creator_meera'],
    relatedArticleIds: ['art_kolka'],
    accentColor: 'indigo',
  },
  {
    id: 'col_everyday_bengal',
    title: 'Everyday Bengal',
    tagline: 'Heritage objects for daily life',
    cover: img('col-everyday-cover', 'Everyday Bengal collection', { aspectRatio: 1.3 }),
    narrative:
      'Not every heirloom belongs behind glass. This collection is about living with craft — the mug you reach for each morning, the bowl on the table, the throw on the chair. Small Bengal, everywhere in your day.',
    productIds: [
      'prod_kolka_mug',
      'prod_dokra_bowl',
      'prod_terracotta_planter',
      'prod_kantha_throw',
      'prod_stationery_set',
    ],
    featuredCreatorIds: ['creator_sukanta', 'creator_rahim'],
    relatedArticleIds: ['art_kolka'],
    accentColor: 'marigold',
  },
];
