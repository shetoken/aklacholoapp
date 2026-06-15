import type { Experience } from '@/types';
import { img } from '@/constants/images';

/** Small, curated travel guidance inspired by TripAdvisor-style essentials. */
export const experiences: Experience[] = [
  {
    id: 'exp_kumartuli_walk',
    title: 'Kumartuli Artisan Walk',
    location: 'Kolkata',
    heroImage: img('exp-kumartuli', 'Kumartuli clay idol studio', { aspectRatio: 1.1 }),
    shortBlurb:
      'Walk through potters’ lanes where Durga idols are sculpted by hand before festival season.',
    doTip: 'Ask before photographing artists at work; buy directly from small studios when possible.',
    dontTip: 'Do not touch drying clay idols or block workshop entrances.',
    guideContact: {
      name: 'Ritobrata Sen',
      role: 'Cultural walk host',
      phone: '+91 98300 11022',
    },
    tags: ['craft', 'durga-puja', 'kolkata'],
  },
  {
    id: 'exp_shantiniketan_day',
    title: 'Shantiniketan Art Day',
    location: 'Shantiniketan',
    heroImage: img('exp-shantiniketan', 'Shantiniketan art campus', { aspectRatio: 1.1 }),
    shortBlurb:
      'Spend a day around Santiniketan’s open-air art spaces, music culture, and craft stalls.',
    doTip: 'Plan around local fairs and carry cash for artisan markets.',
    dontTip: 'Avoid loud group behavior in prayer and class zones.',
    guideContact: {
      name: 'Madhurima Roy',
      role: 'Heritage educator',
      phone: '+91 94341 77880',
    },
    tags: ['art', 'music', 'heritage'],
  },
  {
    id: 'exp_murshidabad_silk',
    title: 'Murshidabad Silk & History Trail',
    location: 'Murshidabad',
    heroImage: img('exp-murshidabad', 'Murshidabad silk weaving', { aspectRatio: 1.1 }),
    shortBlurb:
      'A compact trail through old Nawabi landmarks and traditional silk weaving clusters.',
    doTip: 'Request a weaving demo and verify handloom tags before purchase.',
    dontTip: 'Do not bargain aggressively at family-run looms.',
    guideContact: {
      name: 'Sajjad Karim',
      role: 'Local history guide',
      phone: '+91 97331 22460',
    },
    tags: ['history', 'textiles', 'silk'],
  },
  {
    id: 'exp_sylhet_tea',
    title: 'Sylhet Tea Garden Circuit',
    location: 'Sylhet',
    heroImage: img('exp-sylhet-tea', 'Sylhet tea estate landscape', { aspectRatio: 1.1 }),
    shortBlurb:
      'Curated half-day route across tea estates, viewpoints, and local tea tasting stops.',
    doTip: 'Wear light walking shoes and carry water during humid afternoons.',
    dontTip: 'Do not enter private plantation rows without permission.',
    guideContact: {
      name: 'Farhana Chowdhury',
      role: 'Eco-cultural guide',
      phone: '+880 1711 554433',
    },
    tags: ['nature', 'tea', 'sylhet'],
  },
];
