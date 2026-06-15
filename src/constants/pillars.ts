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
    subtitle: 'Culture, festivals, stories, and the kolka universe',
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
    accent: 'terracotta',
    phase: 'live',
  },
  {
    id: 'shop',
    label: 'Shop',
    title: 'Bengal Shop',
    subtitle: 'Ethical craft, kolka design, and curated collections',
    cta: 'View collection',
    href: '/shop',
    accent: 'terracotta',
    phase: 'live',
  },
  {
    id: 'hire',
    label: 'Hire',
    title: 'Hire',
    subtitle: 'Artisans, animators, designers, and teachers',
    cta: 'Find talent',
    href: '/hire',
    accent: 'vermillion',
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
