/**
 * World of Tagore — seed data for the Discover hub.
 *
 * Article id reference:
 *   art_bengali_authors — Bengali Authors
 *   art_bengal_music     — Bengal Music (Rabindra Sangeet / Nazrul Geeti)
 *
 * Portraits and work images use deterministic placeholders until
 * public-domain assets are added.
 */
import type { ParjaayInfo, TagoreOverview, TagoreWork } from '@/types';
import { img } from '@/constants/images';

export const parjaays: ParjaayInfo[] = [
  {
    id: 'puja',
    name: 'Puja',
    nameBengali: 'পূজা',
    meaning: 'Worship & the divine',
    approxSongCount: 617,
    subClassCount: 21,
    description:
      'Songs of offering and prayer, directed toward the divine and the infinite. The largest parjaay, with 21 sub-classes (upa-parjaay) ranging from devotion and longing to awakening and joy.',
    exampleSongs: ['Anandaloke mangalaloke', 'Aguner poroshmoni', 'Jana Gana Mana (origin)'],
  },
  {
    id: 'prem',
    name: 'Prem',
    nameBengali: 'প্রেম',
    meaning: 'Love',
    approxSongCount: 395,
    subClassCount: 2,
    description:
      'Songs of love — often a tender, platonic, or spiritual love as much as romantic. Sub-divided into Gaan and Prem-Boichitra.',
    exampleSongs: ['Bhalobeshe sokhi', 'Tomar holo shuru', 'Ami chini go chini tomare'],
  },
  {
    id: 'prakriti',
    name: 'Prakriti',
    nameBengali: 'প্রকৃতি',
    meaning: 'Nature & the seasons',
    subClassCount: 6,
    description:
      'Songs of nature and the six Bengali seasons — monsoon, autumn, spring and more. Sub-classed by season, they are among the most performed at seasonal festivals like Borsha and Basanta.',
    exampleSongs: ['Esho he Boishakh', 'Aaj dhaner khete', 'Megher pore megh jomeche'],
  },
  {
    id: 'swadesh',
    name: 'Swadesh',
    nameBengali: 'স্বদেশ',
    meaning: 'Homeland / patriotic',
    approxSongCount: 46,
    description:
      'Songs of the motherland and belonging. This parjaay includes the songs that became the national anthems of India (Jana Gana Mana) and Bangladesh (Amar Sonar Bangla).',
    exampleSongs: ['Amar Sonar Bangla', 'Jana Gana Mana', 'O amar desher mati'],
  },
  {
    id: 'anushthanik',
    name: 'Anushthanik',
    nameBengali: 'আনুষ্ঠানিক',
    meaning: 'Occasion-specific / ceremonial',
    description:
      'Songs written for specific occasions and ceremonies — weddings, gatherings, and institutional events, including songs for Shantiniketan.',
    exampleSongs: ['Subho dine eseche', 'He nutan'],
  },
  {
    id: 'bichitro',
    name: 'Bichitro',
    nameBengali: 'বিচিত্র',
    meaning: 'Miscellaneous / "the varied"',
    description:
      'A miscellany of songs that don’t sit within the other themes — the “varied” or “amazing” class, capturing Tagore’s range.',
    exampleSongs: ['Pagla hawar badol dine', 'Akash bhora surjo tara'],
  },
  {
    id: 'nrityonatya',
    name: 'Nrityonatya & Geetinatya',
    nameBengali: 'নৃত্যনাট্য',
    meaning: 'Dance-dramas & lyrical plays',
    description:
      'Songs composed for Tagore’s dance-dramas and lyrical operas, including Chitrangada, Chandalika, Shyama, Balmiki Pratibha, and Mayar Khela.',
    exampleSongs: ['Chitrangada (dance-drama)', 'Chandalika', 'Shyama'],
  },
];

export const tagoreWorks: TagoreWork[] = [
  {
    id: 'tagore-gitanjali',
    slug: 'gitanjali',
    form: 'poetry',
    title: 'Gitanjali',
    titleBengali: 'গীতাঞ্জলি',
    year: '1910',
    subtitle: 'The song-offerings that won the world’s attention.',
    description:
      'A collection of devotional poems whose English rendering brought Tagore global fame and the 1913 Nobel Prize in Literature — the first for a non-European.',
    significance:
      'The first work by an Asian to win the Nobel Prize in Literature, introducing Bengali poetry to the world.',
    relatedParjaay: ['puja'],
    relatedArticleIds: ['art_bengali_authors'],
    isFlagship: true,
    isStub: false,
    image: img('tagore-gitanjali', 'Gitanjali', { width: 600, height: 750 }),
  },
  {
    id: 'tagore-sonar-tori',
    slug: 'sonar-tari',
    form: 'poetry',
    title: 'Sonar Tari (The Golden Boat)',
    titleBengali: 'সোনার তরী',
    year: '1894',
    subtitle: 'A meditation on art, time, and what the artist leaves behind.',
    description:
      'A celebrated poetry collection whose title poem reflects on the harvest of a life’s work being carried away while the maker is left behind.',
    relatedArticleIds: ['art_bengali_authors'],
    isFlagship: false,
    isStub: true,
    image: img('tagore-sonar-tari', 'Sonar Tari', { width: 600, height: 750 }),
  },
  {
    id: 'tagore-gora',
    slug: 'gora',
    form: 'novel',
    title: 'Gora',
    titleBengali: 'গোরা',
    year: '1909',
    subtitle: 'A sweeping novel on identity, nation, and belonging.',
    description:
      'One of Tagore’s great novels, wrestling with religion, nationalism, and what it means to belong — through the story of a young man whose certainties unravel.',
    relatedArticleIds: ['art_bengali_authors'],
    isFlagship: true,
    isStub: false,
    image: img('tagore-gora', 'Gora', { width: 600, height: 750 }),
  },
  {
    id: 'tagore-ghare-baire',
    slug: 'ghare-baire',
    form: 'novel',
    title: 'Ghare-Baire (The Home and the World)',
    titleBengali: 'ঘরে বাইরে',
    year: '1916',
    subtitle: 'Love, idealism, and politics in a time of unrest.',
    description:
      'A novel set against the Swadeshi movement, examining the costs of nationalism and the inner life of a woman caught between her husband and a charismatic revolutionary. Later filmed by Satyajit Ray.',
    relatedArticleIds: ['art_bengali_authors'],
    isFlagship: false,
    isStub: true,
    image: img('tagore-ghare-baire', 'Ghare-Baire', { width: 600, height: 750 }),
  },
  {
    id: 'tagore-chokher-bali',
    slug: 'chokher-bali',
    form: 'novel',
    title: 'Chokher Bali',
    titleBengali: 'চোখের বালি',
    year: '1903',
    subtitle: 'A bold early study of desire, widowhood, and society.',
    description:
      'A psychologically acute novel exploring relationships and the constrained life of a young widow — strikingly modern for its time.',
    relatedArticleIds: ['art_bengali_authors'],
    isFlagship: false,
    isStub: true,
    image: img('tagore-chokher-bali', 'Chokher Bali', { width: 600, height: 750 }),
  },
  {
    id: 'tagore-kabuliwala',
    slug: 'kabuliwala',
    form: 'short-story',
    title: 'Kabuliwala',
    titleBengali: 'কাবুলিওয়ালা',
    year: '1892',
    subtitle: 'A tender tale of a fruit-seller and a little girl.',
    description:
      'One of Tagore’s most loved short stories — the bond between an Afghan trader in Kolkata and a young Bengali child, and the ache of distant fatherhood.',
    relatedArticleIds: ['art_bengali_authors'],
    isFlagship: true,
    isStub: false,
    image: img('tagore-kabuliwala', 'Kabuliwala', { width: 600, height: 750 }),
  },
  {
    id: 'tagore-dakghar',
    slug: 'dakghar',
    form: 'play',
    title: 'Dak Ghar (The Post Office)',
    titleBengali: 'ডাকঘর',
    year: '1912',
    subtitle: 'A luminous play about a sick child and the wider world.',
    description:
      'A poignant, internationally staged play about a bedridden boy who dreams of the world beyond his window — read as a meditation on freedom and the soul.',
    relatedArticleIds: ['art_bengali_authors'],
    isFlagship: false,
    isStub: true,
    image: img('tagore-dakghar', 'Dak Ghar', { width: 600, height: 750 }),
  },
  {
    id: 'tagore-chitrangada',
    slug: 'chitrangada',
    form: 'dance-drama',
    title: 'Chitrangada',
    titleBengali: 'চিত্রাঙ্গদা',
    year: '1936',
    subtitle: 'A dance-drama of love, identity, and a warrior princess.',
    description:
      'A celebrated dance-drama reimagining a Mahabharata episode, exploring beauty, selfhood, and love through song and movement.',
    relatedParjaay: ['nrityonatya'],
    relatedArticleIds: ['art_bengal_music'],
    isFlagship: false,
    isStub: true,
    image: img('tagore-chitrangada', 'Chitrangada', { width: 600, height: 750 }),
  },
  {
    id: 'tagore-paintings',
    slug: 'tagore-paintings',
    form: 'painting',
    title: 'The Paintings of Tagore',
    subtitle: 'A late-life burst of bold, intuitive visual art.',
    description:
      'In his sixties, Tagore took up painting, producing thousands of striking, often dark and dreamlike works that helped open Indian modern art.',
    relatedArticleIds: ['art_bengali_authors'],
    isFlagship: false,
    isStub: true,
    image: img('tagore-paintings', 'Tagore paintings', { width: 600, height: 750 }),
  },
  {
    id: 'tagore-shantiniketan',
    slug: 'shantiniketan-visva-bharati',
    form: 'institution',
    title: 'Shantiniketan & Visva-Bharati',
    titleBengali: 'শান্তিনিকেতন',
    year: '1921',
    subtitle: 'The school and university that embodied his vision of learning.',
    description:
      'Tagore’s experiment in education under the open sky, growing into Visva-Bharati University — a place where art, nature, and the world’s cultures meet. Shantiniketan is a UNESCO World Heritage Site.',
    significance:
      'A living institution carrying Tagore’s ideals of holistic, boundary-free education; recognised by UNESCO.',
    relatedArticleIds: ['art_bengali_authors'],
    isFlagship: true,
    isStub: false,
    image: img('tagore-shantiniketan', 'Shantiniketan', { width: 600, height: 750 }),
  },
  {
    id: 'tagore-gitabitan',
    slug: 'gitabitan',
    form: 'song-collection',
    title: 'Gitabitan (Garden of Songs)',
    titleBengali: 'গীতবিতান',
    year: '1932',
    subtitle: 'The complete garden of 2,233 Rabindra Sangeet.',
    description:
      'The complete collection of Tagore’s 2,233 songs, classified by Tagore himself into the six parjaay. The companion Swarabitan provides the musical notation.',
    significance:
      'The definitive corpus of Rabindra Sangeet — the heart of Bengali musical life in both Bengals.',
    relatedParjaay: [
      'puja',
      'prem',
      'prakriti',
      'swadesh',
      'anushthanik',
      'bichitro',
      'nrityonatya',
    ],
    relatedArticleIds: ['art_bengal_music'],
    isFlagship: true,
    isStub: false,
    image: img('tagore-gitabitan', 'Gitabitan', { width: 600, height: 750 }),
  },
];

export const tagoreOverview: TagoreOverview = {
  name: 'Rabindranath Tagore',
  nameBengali: 'রবীন্দ্রনাথ ঠাকুর',
  epithet: 'Kobiguru',
  lifespan: '1861–1941',
  oneLine:
    'Poet, composer, novelist, painter, reformer — and the first non-European Nobel laureate.',
  songCount: 2233,
  authorId: 'author-tagore',
};
