/** Four bottom-tab intents — Learn lives under Experience as a sub-tab. */
export type PillarId = 'explore' | 'experience' | 'shop' | 'hire';

export interface Pillar {
  id: PillarId;
  /** Header pill label (tab bar titles are set in `app/(tabs)/_layout.tsx`). */
  label: string;
  title: string;
  subtitle: string;
  /** Primary header CTA label. */
  cta: string;
  /** Expo Router tab href. */
  href: string;
  /** Semantic accent token for active state. */
  accent: 'marigold' | 'ivory' | 'terracotta' | 'vermillion';
  /** `live` = full experience; `preview` = coming-soon with teaser content. */
  phase: 'live' | 'preview';
}

export const PILLARS: Pillar[] = [
  {
    id: 'explore',
    label: 'Discover',
    title: 'Discover Bengal',
    subtitle:
      'Three hundred million Bengalis. A civilization of her own — with her own language, literature, cinema, and philosophy, her own way of seeing the world. Once called the Golden Bengal — Sonar Bangla — her muslin woven for emperors and queens, her wealth the prize Europe came to claim. She has endured famine, Partition, and attempts to erase her very name — and still she creates, with the spirit that gave the world poets and Nobel laureates, scientists and filmmakers, and thought that runs ahead of its time. Too often her brilliance is folded into a single story of the East. Bengal has her own voice and her own beauty — and it\'s time the world heard her, and saw her, in full. Center stage.',
    cta: 'Browse stories',
    href: '/explore',
    accent: 'marigold',
    phase: 'live',
  },
  {
    id: 'experience',
    label: 'Experience',
    title: 'Experience Bengal',
    subtitle:
      "Bengal — the cultural capital of India. A land of festivals, food, warmth, and world-famous textiles; the home of Tagore, India's first Nobel laureate. Come for a grand occasion like Durga Puja, or for the everyday rhythm of chai and adda — Bengal's unhurried art of conversation. It has it all: the hills of Darjeeling, the mangrove forests of the Sundarbans, ancient crafts, and a cuisine loved across India.",
    cta: 'Browse Experience',
    href: '/experience',
    accent: 'marigold',
    phase: 'live',
  },
  {
    id: 'shop',
    label: 'Shop',
    title: 'Treasures of Bengal',
    subtitle:
      'For centuries, Bengal clothed the world. Her weavers spun muslin so fine it was called "woven air" — a whole sari could pass through a ring — and her looms made her the wealthiest land of an empire, the prize Europe sailed across oceans to claim. But ask a Bengali artisan why they create, and the answer is rarely about gold. Here, art is made for the love of it: the potter shaping clay at dusk, the embroiderer turning an old sari into a kantha quilt stitch by patient stitch, the painter drawing kolka not for a buyer but because beauty is its own reward. This is the spirit behind every piece in our shop — handmade by the artisans and weavers who carry these traditions forward, offered now to a world that, for too long, has known too little of them.',
    cta: 'Search Collection',
    href: '/shop',
    accent: 'marigold',
    phase: 'live',
  },
  {
    id: 'hire',
    label: 'Hire',
    title: 'Commission',
    subtitle:
      "Work directly with Bengal's artisans, animators, and designers to create something made just for you. Why Bengali creators? Because for them, making art is an act of love, not just labor. Shaped by a culture of poetry, music, and devotion to detail, they bring an emotion and patience to their work that can't be taught — only inherited. Every piece comes with the maker's heart in it.",
    cta: 'Find talent',
    href: '/hire',
    accent: 'marigold',
    phase: 'live',
  },
];

export function getPillar(id: PillarId): Pillar {
  const pillar = PILLARS.find((p) => p.id === id);
  if (!pillar) {
    throw new Error(`Unknown pillar: ${id}`);
  }
  return pillar;
}

/** Learn sub-tab under Experience (default Experience landing). */
export const EXPERIENCE_LEARN_HREF = '/experience' as const;

export const EXPERIENCE_TRAVEL_HREF = '/experience/travel' as const;
