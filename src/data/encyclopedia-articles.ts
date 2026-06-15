import type { Article } from '@/types';
import { img } from '@/constants/images';

/**
 * Magic of Bengal encyclopedia entries — short reference articles that scroll
 * as mini tiles on Home. Each keeps retrieval-ready sections for Phase 1.5 chat.
 */
export const encyclopediaArticles: Article[] = [
  {
    id: 'art_bengali_authors',
    slug: 'bengali-authors',
    title: 'Bengali Authors',
    subtitle: 'Voices that shaped a literature',
    heroImage: img('ency-authors', 'Bengali literature', { aspectRatio: 1.1 }),
    readingMinutes: 5,
    summary:
      'Bengali literature spans a thousand years from the Charyapada mystic songs to the Nobel laureate Rabindranath Tagore, novelist Sarat Chandra, and modern poets like Jibanananda Das. Bengal’s writers turned language into a vehicle for social reform, spiritual longing, and modern identity.',
    sections: [
      {
        id: 'sec_tagore',
        heading: 'Tagore and the modern canon',
        body: 'Rabindranath Tagore (1861–1941) remains Bengal’s most global writer — poet, novelist, composer, and painter. His Gitanjali won the Nobel Prize in 1913. At Shantiniketan he built an arts community that still shapes how Bengal thinks about education and creativity.',
      },
      {
        id: 'sec_beyond_tagore',
        heading: 'Beyond one name',
        body: 'Sarat Chandra Chattopadhyay gave the Bengali middle class its emotional mirror in novels like Devdas. Bankim Chandra’s Vande Mataram became a national song. Kazi Nazrul Islam brought fiery verse. Together they made Bengali a literary language of the many, not the few.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['literature', 'authors', 'tagore', 'encyclopedia'],
  },
  {
    id: 'art_bengal_music',
    slug: 'bengal-music',
    title: 'Bengal Music',
    subtitle: 'From Baul song to Rabindra Sangeet',
    heroImage: img('ency-music', 'Bengali music instruments', { aspectRatio: 1.1 }),
    readingMinutes: 4,
    summary:
      'Bengal’s music moves from village Baul mystics and kirtan devotion to Tagore’s Rabindra Sangeet, Nazrul Geeti, and the film songs of Kolkata. The region treats melody as daily life — at festivals, in monsoon evenings, and on the radio.',
    sections: [
      {
        id: 'sec_folk',
        heading: 'Folk and sacred song',
        body: 'Baul wandering minstrels sing of the body as a temple. Kirtan call-and-response fills pujas. Bhatiali boatmen’s songs trace the rhythm of rivers. These forms keep Bengal’s oral memory alive long before a studio recording exists.',
      },
      {
        id: 'sec_classical_modern',
        heading: 'Classical lines and modern sound',
        body: 'Rabindra Sangeet sets Tagore’s poetry to his own melodies — still sung in every Bengali home. Nazrul Geeti adds rebellion and romance. Today Kolkata’s studios blend folk samples with pop and film, carrying old scales into new headphones.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['music', 'baul', 'rabindra-sangeet', 'encyclopedia'],
  },
  {
    id: 'art_famous_bengalis',
    slug: 'famous-bengalis',
    title: 'Famous Bengalis',
    subtitle: 'Scientists, artists, and reformers',
    heroImage: img('ency-famous', 'Notable Bengali figures', { aspectRatio: 1.1 }),
    readingMinutes: 5,
    summary:
      'Bengalis have shaped science, art, and politics far beyond the delta — physicist Satyendra Nath Bose, filmmaker Satyajit Ray, reformer Raja Rammohun Roy, and cricketer Sourav Ganguly among them. The region exports ideas as readily as textiles.',
    sections: [
      {
        id: 'sec_minds',
        heading: 'Minds that changed fields',
        body: 'SN Bose’s work in quantum statistics gave the world bosons. Amartya Sen reframed development economics. Jagadish Chandra Bose proved plants respond to stimuli. Each story counters the myth that Bengal is only past and craft — it is also inquiry.',
      },
      {
        id: 'sec_culture_global',
        heading: 'Culture on a world stage',
        body: 'Satyajit Ray’s cinema brought village Bengal to Cannes. Ritwik Ghatak experimented with epic grief. In diaspora communities, Bengali names lead hospitals, universities, and studios — carrying the delta’s curiosity outward.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['people', 'history', 'science', 'encyclopedia'],
  },
  {
    id: 'art_bengali_fish',
    slug: 'bengali-fish',
    title: 'Bengali Fish',
    subtitle: 'River, pond, and plate',
    heroImage: img('ency-fish', 'Bengali fish curry', { aspectRatio: 1.1 }),
    readingMinutes: 4,
    summary:
      'Fish is the daily protein of Bengal — hilsa, rohu, katla, and tiny puti from village ponds. The Maach-Bhaat (fish and rice) meal is cultural shorthand for home. Monsoon hilsa with mustard is a seasonal ritual as much as a recipe.',
    sections: [
      {
        id: 'sec_hilsa',
        heading: 'Hilsa — the queen fish',
        body: 'Ilish (hilsa) swims up rivers to spawn in monsoon, filling markets with silver brilliance. Bengalis debate mustard versus coconut gravies and which side of the Padma tastes better. Restrictions on catching juvenile hilsa show how deeply the fish is tied to identity.',
      },
      {
        id: 'sec_everyday',
        heading: 'Everyday catches',
        body: 'Rohu and katla anchor weekday curries. Shutki (dried fish) adds umami to chutney and stir-fries. Pond culture in villages means even landlocked homes eat fish — a delta diet written in scales and steam.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['food', 'fish', 'hilsa', 'encyclopedia'],
  },
  {
    id: 'art_bengal_rivers',
    slug: 'bengal-rivers',
    title: "Bengal's Rivers",
    subtitle: 'The delta’s lifelines',
    heroImage: img('ency-rivers', 'Bengal river landscape', { aspectRatio: 1.1 }),
    readingMinutes: 5,
    summary:
      'The Ganges, Padma, Brahmaputra, and Meghna weave the Bengal delta — fertile, flood-prone, and navigable. Rivers carry silt that feeds rice fields, routes for trade, and the moods of poetry. To know Bengal is to read its water.',
    sections: [
      {
        id: 'sec_ganga_padma',
        heading: 'Sacred and practical',
        body: 'The Ganges enters Bengal as a spiritual river and exits as the Padma into Bangladesh. Ghats in Kolkata and small village banks host bathing, fishing, and festivals. Silt deposits create the rich loam that makes Bengal a granary.',
      },
      {
        id: 'sec_delta_life',
        heading: 'Life on the water',
        body: 'Boats are buses; ferries are classrooms. Bhatiali songs measure distance in currents. Climate change and embankments now reshape old rhythms, but rivers still define how Bengalis imagine home — a place always moving, always fed by upstream rain.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['geography', 'rivers', 'delta', 'encyclopedia'],
  },
  {
    id: 'art_bengal_people',
    slug: 'bengal-people',
    title: 'Bengal People',
    subtitle: 'West Bengal, Bangladesh, and diaspora',
    heroImage: img('ency-people', 'Bengali community', { aspectRatio: 1.1 }),
    readingMinutes: 4,
    summary:
      'Bengalis share a language and cultural memory across West Bengal, Bangladesh, and a wide diaspora. The community is defined less by a single ethnicity than by Bangla speech, seasonal festivals, food, and an appetite for argument, poetry, and politics.',
    sections: [
      {
        id: 'sec_two_bengals',
        heading: 'Two Bengals, one culture',
        body: 'Partition in 1947 divided territory but not song, sari borders, or fish recipes. Today Kolkata and Dhaka each host vibrant publishing, film, and tech scenes. Family ties and literary prizes still cross the border in spirit if not always in visa stamps.',
      },
      {
        id: 'sec_diaspora',
        heading: 'Bengalis abroad',
        body: 'From London to Toronto to the Gulf, diaspora communities recreate Durga Puja halls and adda cafés. Second generations blend Bangla with English, carrying kolka motifs onto book covers and startup logos — Bengal as identity, not only address.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['people', 'culture', 'diaspora', 'encyclopedia'],
  },
  {
    id: 'art_bengali_food',
    slug: 'bengali-food',
    title: 'Bengali Food',
    subtitle: 'Rice, mustard, and season',
    heroImage: img('ency-food', 'Bengali thali', { aspectRatio: 1.1 }),
    readingMinutes: 5,
    summary:
      'Bengali cuisine centres on rice, lentils, vegetables, and fish — sharpened with mustard oil, panch phoron spice mix, and green chilli. Meals move from bitter shukto at the start to fish curry, dal, and chutney, reflecting the delta’s seasons on one plate.',
    sections: [
      {
        id: 'sec_structure',
        heading: 'How a meal is built',
        body: 'A classic lunch runs bitter to sweet: shukto mellows the palate, dal anchors protein, maach or mangsho (fish or meat) brings richness, and bhaja (fried vegetables) adds crunch. No course is accidental — each resets taste for the next.',
      },
      {
        id: 'sec_spice_oil',
        heading: 'Mustard and panch phoron',
        body: 'Mustard oil’s sharp heat defines the region’s pickles and fish. Panch phoron — fenugreek, nigella, cumin, fennel, and radhuni — crackles in ghee at the start of many dishes. Together they make Bengali food recognisable in one sniff.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['food', 'cuisine', 'mustard', 'encyclopedia'],
  },
  {
    id: 'art_bengali_desserts',
    slug: 'bengali-desserts',
    title: 'Bengali Desserts',
    subtitle: 'Milk, molasses, and celebration',
    heroImage: img('ency-desserts', 'Bengali sweets', { aspectRatio: 1.1 }),
    readingMinutes: 4,
    summary:
      'Bengali sweets turn milk and chhena (fresh cheese curd) into rasgulla, sandesh, and mishti doi. Festivals, weddings, and afternoon visits run on platters of syrup and saffron — a region that treats sugar as hospitality itself.',
    sections: [
      {
        id: 'sec_chhena',
        heading: 'The chhena tradition',
        body: 'Soft chhena kneaded with sugar becomes sandesh shaped into kolka moulds and fish symbols. Rasgulla — spongy balls in light syrup — sparked a friendly rivalry between Kolkata and Odisha over origin. Every sweet shop is a small sculpture studio.',
      },
      {
        id: 'sec_festival',
        heading: 'Sweetness as ritual',
        body: 'Durga Puja, weddings, and Noboborsho (New Year) demand mishti boxes. Payesh rice pudding marks birthdays. Offering sweets to guests is non-negotiable — to arrive without dessert would be to leave a sentence unfinished.',
      },
    ],
    relatedCollectionIds: [],
    relatedCreatorIds: [],
    relatedProductIds: [],
    tags: ['food', 'desserts', 'mishti', 'encyclopedia'],
  },
];

/** Display order for the Home encyclopedia rail. */
export const encyclopediaOrder: string[] = [
  'art_kolka',
  'art_bengali_authors',
  'art_bengal_music',
  'art_famous_bengalis',
  'art_bengali_fish',
  'art_bengal_rivers',
  'art_bengal_people',
  'art_bengali_food',
  'art_bengali_desserts',
  'art_kantha',
  'art_terracotta',
];
