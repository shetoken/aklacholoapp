import type { Article } from '@/types';
import { img } from '@/constants/images';

/** Placeholder Magic-of-Bengal stories for Journey stops 4–7 (Phase 1). */
export const journeyArticles: Article[] = [
  {
    id: 'art_journey_cuisine',
    slug: 'bengali-cuisine-journey',
    title: 'Bengali Cuisine',
    subtitle: 'Rice, mustard, and the rhythm of seasons',
    heroImage: img('journey-cuisine', 'Bengali thali', { aspectRatio: 1.5 }),
    readingMinutes: 4,
    summary:
      'Bengali meals move from bitter to sweet — shukto, dal, maach, and mishti — each course resetting the palate for the next. Food here is culture on a plate.',
    sections: [
      {
        id: 'sec_meal',
        heading: 'The shape of a meal',
        body: 'A classic lunch runs bitter to sweet: shukto mellows the palate, dal anchors protein, fish or meat brings richness. No course is accidental.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['journey', 'food', 'cuisine'],
  },
  {
    id: 'art_journey_music',
    slug: 'bengal-music-journey',
    title: 'Bengali Music',
    subtitle: 'From Baul song to Rabindra Sangeet',
    heroImage: img('journey-music', 'Bengali music', { aspectRatio: 1.5 }),
    readingMinutes: 4,
    summary:
      'Bengal’s music moves from village Baul mystics to Tagore’s Rabindra Sangeet and the film songs of Kolkata — melody as daily life.',
    sections: [
      {
        id: 'sec_folk',
        heading: 'Folk and sacred song',
        body: 'Baul wandering minstrels sing of the body as a temple. Kirtan fills pujas. These forms keep Bengal’s oral memory alive.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['journey', 'music'],
  },
  {
    id: 'art_journey_festivals',
    slug: 'bengal-festivals-journey',
    title: 'Festivals',
    subtitle: 'Durga Puja, Poila Boishakh, and the calendar of joy',
    heroImage: img('journey-festivals', 'Durga Puja celebration', { aspectRatio: 1.5 }),
    readingMinutes: 4,
    summary:
      'Bengal’s festivals turn streets into galleries, homes into altars, and communities into family — a year measured in colour and song.',
    sections: [
      {
        id: 'sec_durga',
        heading: 'Durga Puja',
        body: 'Each autumn, Kolkata becomes a city of pandals — temporary temples of art, light, and devotion that draw the world.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['journey', 'festivals'],
  },
  {
    id: 'art_journey_folklore',
    slug: 'bengal-folklore-journey',
    title: 'Folklore',
    subtitle: 'Thakurmar Jhuli and the stories that raised a culture',
    heroImage: img('journey-folklore', 'Bengali folklore illustration', { aspectRatio: 1.5 }),
    readingMinutes: 4,
    summary:
      'From Thakurmar Jhuli’s talking birds to village ghost tales, Bengali folklore carries moral wisdom, humour, and wonder across generations.',
    sections: [
      {
        id: 'sec_tales',
        heading: 'Stories by the fire',
        body: 'Grandmothers’ tales of foxes, princes, and clever wives taught values long before television — and still echo in modern Bengali fiction.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['journey', 'folklore'],
  },
  {
    id: 'art_journey_bonus',
    slug: 'journey-bonus-story',
    title: 'The Thread That Binds',
    subtitle: 'A hidden story for Bengal Explorers',
    heroImage: img('journey-bonus', 'Kolka constellation', { aspectRatio: 1.5 }),
    readingMinutes: 3,
    summary:
      'You have walked the length of Bengal — kolka to kantha, clay to song. This is the story of the single thread that binds them all: Eki shutre bandha.',
    sections: [
      {
        id: 'sec_thread',
        heading: 'One thread',
        body: 'Every craft you discovered shares the same visual grammar — the kolka bud, the running stitch, the fired clay panel. They are not separate traditions but one language spoken in many hands.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['journey', 'bonus', 'hidden'],
  },
];
