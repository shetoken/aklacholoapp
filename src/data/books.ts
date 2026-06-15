/**
 * Boi — landmark books of Bengal.
 *
 * Works cross-link to authors.ts via authorId and cinema.ts via adaptedFilmIds.
 */
import type { Book } from '@/types';
import { img } from '@/constants/images';

export const books: Book[] = [
  {
    id: 'book-pather-panchali',
    slug: 'pather-panchali-novel',
    title: 'Pather Panchali',
    titleBengali: 'পথের পাঁচালী',
    englishTitle: 'Song of the Little Road',
    form: 'novel',
    year: '1929',
    borderSide: 'undivided-bengal',
    authorId: 'author-bibhutibhushan',
    authorName: 'Bibhutibhushan Bandyopadhyay',
    subtitle: 'The novel of rural childhood that became world cinema.',
    shortDescription:
      'Bibhutibhushan Bandyopadhyay’s tender 1929 novel of a poor family and a boy’s childhood in rural Bengal — later adapted by Satyajit Ray into the landmark 1955 film.',
    bodySections: [
      {
        heading: 'A song of the little road',
        body:
          'The novel follows young Apu and his sister Durga amid the beauty and hardship of village Bengal. Its humanity and lyricism made it a classic of Bengali literature — and the source of one of the greatest films ever made.',
      },
    ],
    significance:
      'A cornerstone of Bengali fiction; the basis of Ray’s Apu Trilogy, which brought Indian cinema to the world.',
    adaptedFilmIds: ['film-pather-panchali'],
    relatedBookIds: ['book-aparajito'],
    relatedArticleIds: [],
    coverImage: img('book-pather-panchali', 'Pather Panchali', { width: 600, height: 900 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'book-aparajito',
    slug: 'aparajito-novel',
    title: 'Aparajito',
    titleBengali: 'অপরাজিত',
    englishTitle: 'The Unvanquished',
    form: 'novel',
    year: '1931',
    borderSide: 'undivided-bengal',
    authorId: 'author-bibhutibhushan',
    authorName: 'Bibhutibhushan Bandyopadhyay',
    subtitle: 'The sequel that follows Apu into the wider world.',
    shortDescription:
      'The continuation of Apu’s story, following him from the village to the city and adulthood — adapted by Ray into the later films of the Apu Trilogy.',
    bodySections: [
      {
        heading: 'Apu grows up',
        body:
          'Aparajito carries Apu beyond childhood into education, loss, and the pull of the wider world, completing the arc that Ray would bring to the screen.',
      },
    ],
    adaptedFilmIds: ['film-apu-trilogy'],
    relatedBookIds: ['book-pather-panchali'],
    relatedArticleIds: [],
    coverImage: img('book-aparajito', 'Aparajito', { width: 600, height: 900 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'book-gitanjali',
    slug: 'gitanjali',
    title: 'Gitanjali',
    titleBengali: 'গীতাঞ্জলি',
    englishTitle: 'Song Offerings',
    form: 'poetry',
    year: '1910',
    borderSide: 'undivided-bengal',
    authorId: 'author-tagore',
    authorName: 'Rabindranath Tagore',
    subtitle: 'The song-offerings that won the Nobel Prize.',
    shortDescription:
      'Tagore’s collection of devotional poems whose English rendering brought him the 1913 Nobel Prize in Literature — the first for a non-European.',
    bodySections: [
      {
        heading: 'Songs to the infinite',
        body:
          'Gitanjali’s spare, luminous poems of devotion and longing carried Bengali literature onto the world stage. (Explored further in the World of Tagore hub.)',
      },
    ],
    significance: 'First work by an Asian to win the Nobel Prize in Literature (1913).',
    relatedBookIds: ['book-gora'],
    relatedArticleIds: [],
    coverImage: img('book-gitanjali', 'Gitanjali', { width: 600, height: 900 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'book-gora',
    slug: 'gora',
    title: 'Gora',
    titleBengali: 'গোরা',
    form: 'novel',
    year: '1909',
    borderSide: 'undivided-bengal',
    authorId: 'author-tagore',
    authorName: 'Rabindranath Tagore',
    subtitle: 'A sweeping novel on identity, faith, and nation.',
    shortDescription:
      'One of Tagore’s great novels, wrestling with religion, nationalism, and belonging through a young man whose certainties unravel.',
    bodySections: [
      {
        heading: 'Who belongs?',
        body:
          'Gora confronts questions of caste, faith, and what it means to be Indian — a philosophically ambitious novel still argued over today.',
      },
    ],
    relatedBookIds: ['book-ghare-baire', 'book-gitanjali'],
    relatedArticleIds: [],
    coverImage: img('book-gora', 'Gora', { width: 600, height: 900 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'book-ghare-baire',
    slug: 'ghare-baire',
    title: 'Ghare Baire',
    titleBengali: 'ঘরে বাইরে',
    englishTitle: 'The Home and the World',
    form: 'novel',
    year: '1916',
    borderSide: 'undivided-bengal',
    authorId: 'author-tagore',
    authorName: 'Rabindranath Tagore',
    subtitle: 'Love, idealism and nationalism in a time of unrest.',
    shortDescription:
      'A novel set against the Swadeshi movement, examining the costs of nationalism and a woman caught between her husband and a charismatic revolutionary — later filmed by Satyajit Ray.',
    bodySections: [
      {
        heading: 'The home and the world',
        body:
          'Through three voices, Tagore weighs idealism against fanaticism and a woman’s awakening — a novel whose questions still resonate. Ray adapted it in 1984.',
      },
    ],
    adaptedFilmIds: ['film-ghare-baire'],
    relatedBookIds: ['book-gora', 'book-chokher-bali'],
    relatedArticleIds: [],
    coverImage: img('book-ghare-baire', 'Ghare Baire', { width: 600, height: 900 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'book-chokher-bali',
    slug: 'chokher-bali',
    title: 'Chokher Bali',
    titleBengali: 'চোখের বালি',
    englishTitle: 'A Grain of Sand',
    form: 'novel',
    year: '1903',
    borderSide: 'undivided-bengal',
    authorId: 'author-tagore',
    authorName: 'Rabindranath Tagore',
    subtitle: 'A bold early study of desire and widowhood.',
    shortDescription:
      'A psychologically acute novel exploring relationships and the constrained life of a young widow — strikingly modern for its time, and later adapted to film.',
    bodySections: [
      {
        heading: 'Ahead of its time',
        body:
          'Chokher Bali’s unflinching look at desire, jealousy and the position of widows made it daring in 1903 and enduringly relevant.',
      },
    ],
    relatedBookIds: ['book-ghare-baire'],
    relatedArticleIds: [],
    coverImage: img('book-chokher-bali', 'Chokher Bali', { width: 600, height: 900 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'book-pather-dabi',
    slug: 'pather-dabi',
    title: 'Pather Dabi',
    titleBengali: 'পথের দাবী',
    form: 'novel',
    year: '1926',
    borderSide: 'undivided-bengal',
    authorId: 'author-sarat-chandra',
    authorName: 'Sarat Chandra Chattopadhyay',
    subtitle: 'The revolutionary novel the British banned.',
    shortDescription:
      'Sarat Chandra Chattopadhyay’s nationalist novel, so charged with anti-colonial feeling that it was banned by the British government.',
    bodySections: [
      {
        heading: 'A banned book',
        body:
          'Pather Dabi’s revolutionary spirit alarmed the colonial authorities enough to prohibit it — a mark of literature’s power in the freedom struggle.',
      },
    ],
    relatedBookIds: [],
    relatedArticleIds: [],
    coverImage: img('book-pather-dabi', 'Pather Dabi', { width: 600, height: 900 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'book-hajar-churashir-maa',
    slug: 'hajar-churashir-maa',
    title: 'Hajar Churashir Maa',
    titleBengali: 'হাজার চুরাশির মা',
    englishTitle: 'Mother of 1084',
    form: 'novel',
    year: '1974',
    borderSide: 'west-bengal-india',
    authorId: 'author-mahasweta',
    authorName: 'Mahasweta Devi',
    subtitle: 'A mother’s reckoning with the Naxalite years.',
    shortDescription:
      'Mahasweta Devi’s searing novel of a mother confronting the death of her son — known only as corpse number 1084 — during the Naxalite movement. Also adapted to film.',
    bodySections: [
      {
        heading: 'A number, a son',
        body:
          'Through a grieving mother, the novel indicts a society that reduces its radical young to numbers, in Mahasweta Devi’s characteristically unsparing voice.',
      },
    ],
    relatedBookIds: [],
    relatedArticleIds: [],
    coverImage: img('book-hajar-churashir-maa', 'Hajar Churashir Maa', {
      width: 600,
      height: 900,
    }),
    isFlagship: false,
    isStub: true,
  },
];
