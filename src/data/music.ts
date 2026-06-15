/**
 * Music of Bengal — genres/traditions and traditional instruments.
 *
 * Panchakavi song counts are verified figures; oral folk traditions omit songCount.
 */
import type { Instrument, MusicGenre } from '@/types';
import { img } from '@/constants/images';

export const musicGenres: MusicGenre[] = [
  {
    id: 'genre-rabindra-sangeet',
    slug: 'rabindra-sangeet',
    name: 'Rabindra Sangeet',
    nameBengali: 'রবীন্দ্রসঙ্গীত',
    alsoKnownAs: 'Tagore Songs',
    family: 'panchakavi',
    borderSide: 'across-bengal',
    songCount: 2233,
    songCountNote: 'The complete Gitabitan collects 2,233 songs.',
    founderOrKeyFigure: 'Rabindranath Tagore',
    subtitle: 'The songs of Tagore — the soul of Bengali music.',
    shortDescription:
      'The 2,233 songs of Rabindranath Tagore, drawing on Indian classical and folk traditions, classified by Tagore himself into thematic parjaay. Central to cultural life in both Bengals. (Full detail in the World of Tagore hub.)',
    bodySections: [
      {
        heading: 'A world of its own',
        body:
          'Rabindra Sangeet is explored in depth in its own hub (World of Tagore), where the songs are organised by the six parjaay Tagore defined. Here it sits among Bengal’s wider musical traditions.',
      },
    ],
    typicalInstruments: ['inst-esraj', 'inst-harmonium', 'inst-tabla', 'inst-bansuri'],
    relatedGenreIds: ['genre-nazrul-geeti', 'genre-dwijendrageeti'],
    relatedAuthorIds: ['author-tagore'],
    relatedArticleIds: [],
    heroImage: img('genre-rabindra-sangeet', 'Rabindra Sangeet', { width: 800, height: 500 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'genre-nazrul-geeti',
    slug: 'nazrul-geeti',
    name: 'Nazrul Geeti',
    nameBengali: 'নজরুল গীতি',
    alsoKnownAs: 'Nazrul Sangeet',
    family: 'panchakavi',
    borderSide: 'across-bengal',
    songCount: 4000,
    songCountNote: 'Nazrul wrote and composed nearly 4,000 songs (including gramophone records).',
    founderOrKeyFigure: 'Kazi Nazrul Islam (national poet of Bangladesh)',
    subtitle: 'The fiery, tender songs of the Rebel Poet.',
    shortDescription:
      'The nearly 4,000 songs of Kazi Nazrul Islam — spanning revolutionary, spiritual, romantic, and devotional themes, including ghazals and Islamic songs. Beloved across Bangladesh and India.',
    bodySections: [
      {
        heading: 'From rebellion to devotion',
        body:
          'Nazrul’s songs range from the marching fervour of Notuner Gaan (Bangladesh’s national marching song) to tender ghazals and the beloved Eid song O Mon Romzaner Oi Rozar Sheshe — an extraordinary emotional and thematic range.',
      },
      {
        heading: 'A bridge across faiths',
        body:
          'Uniquely, Nazrul composed both Islamic songs and Hindu devotional songs (including Shyama Sangeet), embodying a pluralism deep in Bengali culture.',
      },
    ],
    typicalInstruments: ['inst-harmonium', 'inst-tabla', 'inst-sitar', 'inst-bansuri'],
    relatedGenreIds: ['genre-rabindra-sangeet', 'genre-shyama-sangeet'],
    relatedAuthorIds: ['author-nazrul'],
    relatedArticleIds: [],
    heroImage: img('genre-nazrul-geeti', 'Nazrul Geeti', { width: 800, height: 500 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'genre-dwijendrageeti',
    slug: 'dwijendrageeti',
    name: 'Dwijendrageeti',
    nameBengali: 'দ্বিজেন্দ্রগীতি',
    alsoKnownAs: 'Songs of D. L. Roy',
    family: 'panchakavi',
    borderSide: 'undivided-bengal',
    songCount: 500,
    songCountNote: 'Dwijendralal Roy composed about 500 songs.',
    founderOrKeyFigure: 'Dwijendralal Roy (D. L. Roy)',
    subtitle: 'Patriotic anthems and songs of laughter.',
    shortDescription:
      'The roughly 500 songs of Dwijendralal Roy, famous for stirring patriotic anthems (like Dhana Dhanya Pushpa Bhara) and for introducing European movements into Bengali melody.',
    bodySections: [
      {
        heading: 'Two streams',
        body:
          'Dwijendralal’s music blended Indian classical roots with the “movements” of European classical music, and ranged from grand patriotic songs to comic and satirical pieces.',
      },
    ],
    typicalInstruments: ['inst-harmonium', 'inst-tabla'],
    relatedGenreIds: ['genre-atulprasadi', 'genre-kantageeti'],
    relatedArticleIds: [],
    heroImage: img('genre-dwijendrageeti', 'Dwijendrageeti', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'genre-atulprasadi',
    slug: 'atulprasadi',
    name: 'Atulprasadi',
    nameBengali: 'অতুলপ্রসাদী',
    alsoKnownAs: 'Songs of Atulprasad Sen',
    family: 'panchakavi',
    borderSide: 'undivided-bengal',
    founderOrKeyFigure: 'Atulprasad Sen',
    subtitle: 'Lyrical songs of devotion, longing, and homeland.',
    shortDescription:
      'The songs of Atulprasad Sen — known for introducing the thumri-influenced lyrical style into Bengali song, with devotional, patriotic, and romantic themes.',
    bodySections: [
      {
        heading: 'A tender voice',
        body:
          'Atulprasad Sen wrote kirtan, devotional and swadeshi songs and thumris, contributing a soft, melodic lyricism to the Panchakavi tradition.',
      },
    ],
    typicalInstruments: ['inst-harmonium', 'inst-tabla', 'inst-sarangi'],
    relatedGenreIds: ['genre-dwijendrageeti', 'genre-kantageeti'],
    relatedArticleIds: [],
    heroImage: img('genre-atulprasadi', 'Atulprasadi', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'genre-kantageeti',
    slug: 'kantageeti',
    name: 'Kantageeti',
    nameBengali: 'কান্তগীতি',
    alsoKnownAs: 'Songs of Rajanikanta Sen',
    family: 'panchakavi',
    borderSide: 'undivided-bengal',
    founderOrKeyFigure: 'Rajanikanta Sen',
    subtitle: 'Devotional and patriotic songs of deep feeling.',
    shortDescription:
      'The songs of Rajanikanta Sen — cherished especially for their devotional depth and patriotic spirit, completing the circle of the five Panchakavi song-poets.',
    bodySections: [
      {
        heading: 'Songs that endure',
        body:
          'Rajanikanta Sen composed many devotional and patriotic songs that remain dear to Bengalis, the fifth voice of the Panchakavi.',
      },
    ],
    typicalInstruments: ['inst-harmonium', 'inst-tabla'],
    relatedGenreIds: ['genre-atulprasadi', 'genre-dwijendrageeti'],
    relatedArticleIds: [],
    heroImage: img('genre-kantageeti', 'Kantageeti', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'genre-baul',
    slug: 'baul',
    name: 'Baul',
    nameBengali: 'বাউল',
    alsoKnownAs: 'Baul Gaan',
    family: 'folk',
    borderSide: 'across-bengal',
    founderOrKeyFigure: 'Lalon Fakir (its greatest figure)',
    subtitle: 'The mystic minstrels of Bengal — UNESCO heritage.',
    shortDescription:
      'The songs of the Baul mystics — wandering minstrels who sing of the divine within, blending Hindu, Sufi, and humanist thought. The Baul tradition is recognised by UNESCO as intangible cultural heritage; Lalon Fakir is its towering figure.',
    bodySections: [
      {
        heading: 'The man of the heart',
        body:
          'Bauls sing of the “moner manush” — the person of the heart — rejecting caste and creed in a syncretic spirituality. Lalon Fakir of Kushtia is the best-known and most beloved Baul composer in both Bengals.',
      },
      {
        heading: 'Sound of the road',
        body:
          'A Baul’s music is portable and intimate — typically the ektara (one string), dotara (two strings), bamboo flute, and small cymbals, carried along the road.',
      },
    ],
    heritageNote:
      'The Baul tradition is inscribed by UNESCO as Intangible Cultural Heritage of Humanity.',
    typicalInstruments: ['inst-ektara', 'inst-dotara', 'inst-bansuri', 'inst-khol', 'inst-kartal'],
    relatedGenreIds: ['genre-bhatiali', 'genre-kirtan'],
    relatedArticleIds: [],
    heroImage: img('genre-baul', 'Baul music', { width: 800, height: 500 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'genre-bhatiali',
    slug: 'bhatiali',
    name: 'Bhatiali',
    nameBengali: 'ভাটিয়ালি',
    family: 'folk',
    borderSide: 'across-bengal',
    founderOrKeyFigure: 'Anonymous boatmen (oral tradition)',
    subtitle: 'The boatman’s song, drifting down the river.',
    shortDescription:
      'A folk form sung by the boatmen of Bengal’s great rivers — slow, free-flowing melodies that carry the loneliness and longing of life on the water.',
    bodySections: [
      {
        heading: 'Songs of the downstream current',
        body:
          'Bhatiali (from “bhata,” the ebb tide) is sung as the boat drifts downstream — unhurried, melancholic, open-throated. Its spirit shaped many later composers, including Nazrul and S. D. Burman.',
      },
    ],
    typicalInstruments: ['inst-dotara', 'inst-bansuri'],
    relatedGenreIds: ['genre-baul', 'genre-bhawaiya'],
    relatedArticleIds: [],
    heroImage: img('genre-bhatiali', 'Bhatiali folk song', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'genre-bhawaiya',
    slug: 'bhawaiya',
    name: 'Bhawaiya',
    nameBengali: 'ভাওয়াইয়া',
    family: 'folk',
    borderSide: 'across-bengal',
    subtitle: 'The open-hearted folk song of North Bengal.',
    shortDescription:
      'A folk tradition of North Bengal (the Rajbanshi region of the Dooars and beyond), known for long, undulating melodies often evoking the cart-driver (gariyal) and the wide northern plains.',
    bodySections: [
      {
        heading: 'Songs of the north',
        body:
          'Bhawaiya’s sweeping, yearning melodies belong to North Bengal’s grasslands and rivers, with the gariyal bhai (cart driver) a recurring figure of longing.',
      },
    ],
    typicalInstruments: ['inst-dotara', 'inst-bansuri', 'inst-sarinda'],
    relatedGenreIds: ['genre-bhatiali'],
    relatedArticleIds: [],
    heroImage: img('genre-bhawaiya', 'Bhawaiya folk song', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'genre-shyama-sangeet',
    slug: 'shyama-sangeet',
    name: 'Shyama Sangeet',
    nameBengali: 'শ্যামাসঙ্গীত',
    alsoKnownAs: 'Shaktagiti / Shyama-Shakti songs',
    family: 'devotional',
    borderSide: 'across-bengal',
    founderOrKeyFigure: 'Ramprasad Sen (foundational composer)',
    subtitle: 'Songs to the Mother — devotion to Kali / Shyama.',
    shortDescription:
      'A genre of Bengali devotional songs addressed to the goddess Shyama (Kali) as the universal Mother. Also called Shaktagiti; the 18th-century saint-poet Ramprasad Sen is its foundational voice.',
    bodySections: [
      {
        heading: 'The child and the Mother',
        body:
          'Shyama Sangeet sings to Kali with startling intimacy — pleading, scolding, and adoring the Mother goddess. Ramprasad Sen’s songs (Ramprasadi) set the template; later masters like Dhananjay Bhattacharya carried it into the recording age.',
      },
    ],
    typicalInstruments: ['inst-harmonium', 'inst-tabla', 'inst-khol', 'inst-kartal'],
    relatedGenreIds: ['genre-kirtan', 'genre-nazrul-geeti'],
    relatedArticleIds: [],
    heroImage: img('genre-shyama-sangeet', 'Shyama Sangeet', { width: 800, height: 500 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'genre-kirtan',
    slug: 'kirtan',
    name: 'Kirtan',
    nameBengali: 'কীর্তন',
    alsoKnownAs: 'Padavali Kirtan',
    family: 'devotional',
    borderSide: 'across-bengal',
    subtitle: 'The ecstatic devotional song of Radha and Krishna.',
    shortDescription:
      'Vaishnava devotional song celebrating the love of Radha and Krishna, rooted in the Bhakti movement and the legacy of Chaitanya Mahaprabhu. Padavali Kirtan is its refined narrative form.',
    bodySections: [
      {
        heading: 'Singing the divine love',
        body:
          'Kirtan turns the love of Radha and Krishna into communal, often ecstatic song, led by the khol drum and cymbals. It is among Bengal’s oldest living musical traditions.',
      },
    ],
    typicalInstruments: ['inst-khol', 'inst-kartal', 'inst-harmonium'],
    relatedGenreIds: ['genre-shyama-sangeet', 'genre-baul'],
    relatedArticleIds: [],
    heroImage: img('genre-kirtan', 'Kirtan', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'genre-tappa',
    slug: 'tappa',
    name: 'Bangla Tappa',
    nameBengali: 'টপ্পা',
    alsoKnownAs: 'Nidhu Babu’s Tappa',
    family: 'classical-rooted',
    borderSide: 'undivided-bengal',
    founderOrKeyFigure: 'Ramnidhi Gupta (“Nidhu Babu”)',
    subtitle: 'Quicksilver classical song, Bengali-fied.',
    shortDescription:
      'A fast, ornamented semi-classical form adapted into Bengali by Ramnidhi Gupta (“Nidhu Babu”), famous for its rapid, intricate melodic runs.',
    bodySections: [
      {
        heading: 'Bengali tappa',
        body:
          'Originally a Punjabi/Hindustani form, the tappa was reshaped in Bengali by Nidhu Babu, becoming a beloved “sitting song” of 19th-century Bengal known for its dazzling melodic ornamentation.',
      },
    ],
    typicalInstruments: ['inst-tabla', 'inst-harmonium', 'inst-sarangi'],
    relatedGenreIds: ['genre-kirtan'],
    relatedArticleIds: [],
    heroImage: img('genre-tappa', 'Bangla Tappa', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
];

export const instruments: Instrument[] = [
  {
    id: 'inst-ektara',
    slug: 'ektara',
    name: 'Ektara',
    nameBengali: 'একতারা',
    type: 'string',
    subtitle: 'The one-string drone of the Baul.',
    description:
      'A single-stringed plucked instrument, the iconic companion of the Baul minstrel — a gourd resonator and a single string giving a hypnotic drone.',
    associatedGenreIds: ['genre-baul'],
    isFlagship: true,
    isStub: false,
    image: img('inst-ektara', 'Ektara', { width: 600, height: 600 }),
  },
  {
    id: 'inst-dotara',
    slug: 'dotara',
    name: 'Dotara',
    nameBengali: 'দোতারা',
    type: 'string',
    subtitle: 'The mellow plucked lute of Bengali folk.',
    description:
      'A long-necked plucked lute (literally “two strings,” though it often has four or five), central to Baul, Bhatiali, and Bhawaiya folk music with its warm, rounded tone.',
    associatedGenreIds: ['genre-baul', 'genre-bhatiali', 'genre-bhawaiya'],
    isFlagship: true,
    isStub: false,
    image: img('inst-dotara', 'Dotara', { width: 600, height: 600 }),
  },
  {
    id: 'inst-bansuri',
    slug: 'bansuri',
    name: 'Bansuri (Bamboo Flute)',
    nameBengali: 'বাঁশি',
    type: 'wind',
    subtitle: 'The country flute of river and field.',
    description:
      'The bamboo flute (ba(n)shi) — the breath of Bengali pastoral music, heard across folk traditions and woven into classical and devotional song alike.',
    associatedGenreIds: [
      'genre-baul',
      'genre-bhatiali',
      'genre-bhawaiya',
      'genre-rabindra-sangeet',
    ],
    isFlagship: true,
    isStub: false,
    image: img('inst-bansuri', 'Bansuri bamboo flute', { width: 600, height: 600 }),
  },
  {
    id: 'inst-khol',
    slug: 'khol',
    name: 'Khol (Mridanga)',
    nameBengali: 'খোল',
    type: 'percussion',
    subtitle: 'The clay-bodied drum of kirtan.',
    description:
      'A terracotta-bodied, two-headed drum with strikingly different high and low faces — the heartbeat of Kirtan and much Bengali devotional song.',
    associatedGenreIds: ['genre-kirtan', 'genre-shyama-sangeet', 'genre-baul'],
    isFlagship: true,
    isStub: false,
    image: img('inst-khol', 'Khol drum', { width: 600, height: 600 }),
  },
  {
    id: 'inst-kartal',
    slug: 'kartal',
    name: 'Kartal / Mandira',
    nameBengali: 'করতাল',
    type: 'percussion',
    subtitle: 'Hand cymbals that drive the rhythm.',
    description:
      'Small hand cymbals that keep time and lift the ecstatic pulse of kirtan, Baul, and devotional singing.',
    associatedGenreIds: ['genre-kirtan', 'genre-baul', 'genre-shyama-sangeet'],
    isFlagship: false,
    isStub: true,
    image: img('inst-kartal', 'Kartal cymbals', { width: 600, height: 600 }),
  },
  {
    id: 'inst-tabla',
    slug: 'tabla',
    name: 'Tabla',
    nameBengali: 'তবলা',
    type: 'percussion',
    subtitle: 'The classical hand-drum pair.',
    description:
      'The pair of hand drums central to North Indian classical and to most Bengali classical-rooted and modern song, providing intricate rhythm (taal).',
    associatedGenreIds: [
      'genre-rabindra-sangeet',
      'genre-nazrul-geeti',
      'genre-tappa',
      'genre-shyama-sangeet',
    ],
    isFlagship: false,
    isStub: true,
    image: img('inst-tabla', 'Tabla', { width: 600, height: 600 }),
  },
  {
    id: 'inst-harmonium',
    slug: 'harmonium',
    name: 'Harmonium',
    nameBengali: 'হারমোনিয়াম',
    type: 'keyboard-reed',
    subtitle: 'The reed organ at the centre of Bengali song.',
    description:
      'A hand-pumped reed keyboard, ubiquitous in Bengali music — the standard accompaniment for Rabindra Sangeet, Nazrul Geeti, devotional and modern songs.',
    associatedGenreIds: [
      'genre-rabindra-sangeet',
      'genre-nazrul-geeti',
      'genre-shyama-sangeet',
      'genre-kirtan',
    ],
    isFlagship: false,
    isStub: true,
    image: img('inst-harmonium', 'Harmonium', { width: 600, height: 600 }),
  },
  {
    id: 'inst-esraj',
    slug: 'esraj',
    name: 'Esraj',
    nameBengali: 'এসরাজ',
    type: 'string',
    subtitle: 'The bowed string voice of Tagore’s songs.',
    description:
      'A bowed string instrument with a sweet, vocal tone, especially associated with Rabindra Sangeet and the Shantiniketan tradition.',
    associatedGenreIds: ['genre-rabindra-sangeet'],
    isFlagship: false,
    isStub: true,
    image: img('inst-esraj', 'Esraj', { width: 600, height: 600 }),
  },
  {
    id: 'inst-sitar',
    slug: 'sitar',
    name: 'Sitar',
    nameBengali: 'সেতার',
    type: 'string',
    subtitle: 'The great plucked lute of Indian classical.',
    description:
      'The celebrated long-necked plucked instrument of Hindustani classical music — carried to global fame by the Bengali-rooted maestro Ravi Shankar.',
    associatedGenreIds: ['genre-nazrul-geeti'],
    isFlagship: false,
    isStub: true,
    image: img('inst-sitar', 'Sitar', { width: 600, height: 600 }),
  },
  {
    id: 'inst-sarangi',
    slug: 'sarangi',
    name: 'Sarangi',
    nameBengali: 'সারেঙ্গি',
    type: 'string',
    subtitle: 'The bowed instrument closest to the human voice.',
    description:
      'A short-necked bowed instrument renowned for its vocal expressiveness, used in classical and semi-classical Bengali forms such as tappa and thumri-influenced song.',
    associatedGenreIds: ['genre-tappa', 'genre-atulprasadi'],
    isFlagship: false,
    isStub: true,
    image: img('inst-sarangi', 'Sarangi', { width: 600, height: 600 }),
  },
  {
    id: 'inst-sarinda',
    slug: 'sarinda',
    name: 'Sarinda',
    nameBengali: 'সারিন্দা',
    type: 'string',
    subtitle: 'A folk bowed instrument of the north.',
    description:
      'A carved folk fiddle used in North Bengal folk traditions such as Bhawaiya, with a deep, reedy voice.',
    associatedGenreIds: ['genre-bhawaiya'],
    isFlagship: false,
    isStub: true,
    image: img('inst-sarinda', 'Sarinda', { width: 600, height: 600 }),
  },
  {
    id: 'inst-dhak',
    slug: 'dhak',
    name: 'Dhak',
    nameBengali: 'ঢাক',
    type: 'percussion',
    subtitle: 'The great festival drum of Durga Puja.',
    description:
      'A large barrel drum slung from the shoulder and struck with sticks — the thunderous sound of Durga Puja and Bengali festival processions, played by dhakis.',
    associatedGenreIds: [],
    isFlagship: true,
    isStub: false,
    image: img('inst-dhak', 'Dhak drum', { width: 600, height: 600 }),
  },
];
