/**
 * Voices of Bengal — seed data for the Discover literary hub.
 *
 * Article id reference:
 *   art_bengali_authors — Bengali Authors (encyclopedia)
 *   art_bengal_music     — Bengal Music (Tagore / Nazrul song traditions)
 *
 * Portraits use deterministic placeholders until public-domain assets are added.
 */
import type { Author } from '@/types';
import { img } from '@/constants/images';

export const authors: Author[] = [
  {
    id: 'author-tagore',
    slug: 'rabindranath-tagore',
    name: 'Rabindranath Tagore',
    nameBengali: 'রবীন্দ্রনাথ ঠাকুর',
    alsoKnownAs: 'Kobiguru (The Poet-Master)',
    lifespan: '1861–1941',
    era: 'renaissance',
    forms: ['poet', 'novelist', 'playwright', 'songwriter', 'essayist'],
    regions: ['kolkata-wb', 'undivided-bengal'],
    recognitions: ['nobel-literature'],
    subtitle: 'The first non-European Nobel laureate, and the soul of Bengali letters.',
    shortDescription:
      'Poet, novelist, composer and reformer who won the 1913 Nobel Prize in Literature for Gitanjali — the first non-European to do so. He composed the national anthems of both India and Bangladesh.',
    bodySections: [
      {
        id: 'sec_kobiguru',
        heading: 'Kobiguru',
        body:
          'Tagore reshaped Bengali poetry and prose, wrote over two thousand songs (Rabindra Sangeet), and founded Visva-Bharati University at Shantiniketan. His influence touches nearly every corner of Bengali cultural life.',
      },
      {
        id: 'sec_world_voice',
        heading: 'A voice for the world',
        body:
          'In 1913 he became the first non-European to win the Nobel Prize in Literature, for Gitanjali. Uniquely, he wrote the words and music for the national anthems of two nations — India’s Jana Gana Mana and Bangladesh’s Amar Sonar Bangla.',
      },
    ],
    notableWorks: [
      'Gitanjali (1910)',
      'Gora',
      'Ghare-Baire (The Home and the World)',
      'Rabindra Sangeet (2,000+ songs)',
    ],
    relatedAuthorIds: ['author-nazrul', 'author-bankim', 'author-jibanananda'],
    relatedArticleIds: ['art_bengali_authors', 'art_bengal_music'],
    relatedCreatorTags: ['poetry', 'writing'],
    portraitImage: img('author-tagore', 'Rabindranath Tagore', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'author-bankim',
    slug: 'bankim-chandra-chattopadhyay',
    name: 'Bankim Chandra Chattopadhyay',
    nameBengali: 'বঙ্কিমচন্দ্র চট্টোপাধ্যায়',
    alsoKnownAs: 'Sahitya Samrat (Emperor of Literature)',
    lifespan: '1838–1894',
    era: 'renaissance',
    forms: ['novelist', 'essayist', 'songwriter'],
    regions: ['kolkata-wb', 'undivided-bengal'],
    recognitions: [],
    subtitle: 'Father of the Bengali novel, and author of “Vande Mataram”.',
    shortDescription:
      'Widely called the father of the Bengali novel. His 1882 novel Anandamath contained the song “Vande Mataram,” which became a rallying cry of India’s independence movement.',
    bodySections: [
      {
        id: 'sec_emperor',
        heading: 'Emperor of literature',
        body:
          'Bankim Chandra established the foundations of modern Bengali fiction. Honoured as “Sahitya Samrat,” he wrote fourteen novels alongside satirical, critical and scientific essays.',
      },
      {
        id: 'sec_vande_mataram',
        heading: 'A song that moved a nation',
        body:
          'His novel Anandamath (1882), a veiled criticism of colonial rule, gave India “Vande Mataram” — a devotional hymn personifying the land as a mother goddess, later adopted as the national song.',
      },
    ],
    notableWorks: [
      'Anandamath (1882)',
      'Durgeshnandini',
      'Kapalkundala (1866)',
      'Devi Chaudhurani (1884)',
    ],
    relatedAuthorIds: ['author-tagore', 'author-madhusudan'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['writing'],
    portraitImage: img('author-bankim', 'Bankim Chandra Chattopadhyay', {
      width: 600,
      height: 750,
    }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'author-nazrul',
    slug: 'kazi-nazrul-islam',
    name: 'Kazi Nazrul Islam',
    nameBengali: 'কাজী নজরুল ইসলাম',
    alsoKnownAs: 'Bidrohi Kobi (The Rebel Poet)',
    lifespan: '1899–1976',
    era: 'early-modern',
    forms: ['poet', 'songwriter', 'novelist'],
    regions: ['undivided-bengal', 'bangladesh', 'west-bengal'],
    recognitions: ['national-poet'],
    subtitle: 'The Rebel Poet — a voice of defiance, justice, and humanity.',
    shortDescription:
      'Known as the “Rebel Poet,” Nazrul used his verse to challenge colonial oppression and champion social justice. He is the national poet of Bangladesh and founder of the Nazrul Geeti song tradition.',
    bodySections: [
      {
        id: 'sec_rebel',
        heading: 'The Rebel Poet',
        body:
          'Nazrul’s fearless, fiery poetry — above all “Bidrohi” (The Rebel) — made him a symbol of courage and resistance. He wrote across faiths and against injustice with rare moral force.',
      },
      {
        id: 'sec_nazrul_geeti',
        heading: 'A song tradition of his own',
        body:
          'Beyond poetry, he created Nazrul Geeti, a vast body of songs that remains beloved across Bengal. He is honoured as the national poet of Bangladesh.',
      },
    ],
    notableWorks: ['Bidrohi (The Rebel)', 'Agnibeena', 'Nazrul Geeti (songs)'],
    relatedAuthorIds: ['author-tagore', 'author-jibanananda'],
    relatedArticleIds: ['art_bengali_authors', 'art_bengal_music'],
    relatedCreatorTags: ['poetry', 'writing'],
    portraitImage: img('author-nazrul', 'Kazi Nazrul Islam', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'author-sarat-chandra',
    slug: 'sarat-chandra-chattopadhyay',
    name: 'Sarat Chandra Chattopadhyay',
    nameBengali: 'শরৎচন্দ্র চট্টোপাধ্যায়',
    alsoKnownAs: 'Aparajeya Kathashilpi (Unconquerable Storyteller)',
    lifespan: '1876–1938',
    era: 'early-modern',
    forms: ['novelist', 'short-story'],
    regions: ['undivided-bengal', 'west-bengal'],
    recognitions: [],
    subtitle: 'The storyteller of ordinary lives and quiet tragedies.',
    shortDescription:
      'One of the most widely read Bengali novelists, celebrated for compassionate stories of ordinary people, rural life, and social struggle. Author of the immortal Devdas.',
    bodySections: [
      {
        id: 'sec_peoples_novelist',
        heading: 'The people’s novelist',
        body:
          'Sarat Chandra wrote in simple, deeply human language about the joys and sorrows of everyday people — especially the constraints placed on women by society. His characters feel timeless and true.',
      },
    ],
    notableWorks: ['Devdas (1917)', 'Parineeta (1914)', 'Srikanta', 'Pather Dabi'],
    relatedAuthorIds: ['author-bankim', 'author-tagore'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['writing', 'storytelling'],
    portraitImage: img('author-sarat-chandra', 'Sarat Chandra Chattopadhyay', {
      width: 600,
      height: 750,
    }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'author-madhusudan',
    slug: 'michael-madhusudan-dutt',
    name: 'Michael Madhusudan Dutt',
    nameBengali: 'মাইকেল মধুসূদন দত্ত',
    lifespan: '1824–1873',
    era: 'renaissance',
    forms: ['poet', 'playwright'],
    regions: ['undivided-bengal'],
    recognitions: [],
    subtitle: 'The first major modern Bengali poet and father of the Bengali sonnet.',
    shortDescription:
      'A pioneer of modern Bengali poetry who introduced blank verse and the sonnet to the language. His epic Meghnad Badh Kavya reimagined the Ramayana from a new angle.',
    bodySections: [
      {
        id: 'sec_revolutionary_verse',
        heading: 'A revolutionary in verse',
        body:
          'Dutt broke from convention, bringing blank verse and the sonnet form into Bengali and writing the towering epic Meghnad Badh Kavya — recasting a Ramayana villain as a tragic hero.',
      },
    ],
    notableWorks: ['Meghnad Badh Kavya (1861)', 'Bengali sonnets'],
    relatedAuthorIds: ['author-bankim'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['poetry'],
    portraitImage: img('author-madhusudan', 'Michael Madhusudan Dutt', {
      width: 600,
      height: 750,
    }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'author-jibanananda',
    slug: 'jibanananda-das',
    name: 'Jibanananda Das',
    nameBengali: 'জীবনানন্দ দাশ',
    alsoKnownAs: 'Rupashi Banglar Kobi (Poet of Beautiful Bengal)',
    lifespan: '1899–1954',
    era: 'modern',
    forms: ['poet'],
    regions: ['undivided-bengal', 'bangladesh'],
    recognitions: [],
    subtitle: 'The modernist poet of beautiful, melancholy Bengal.',
    shortDescription:
      'A modernist master whose luminous, image-rich poetry captures the landscape and longing of Bengal. Little celebrated in life, he is now among the most read Bengali poets.',
    bodySections: [
      {
        id: 'sec_beautiful_bengal',
        heading: 'Poet of beautiful Bengal',
        body:
          'Jibanananda’s innovative imagery and quiet, dreamlike voice transformed Bengali poetry. After Tagore and Nazrul, he is among the most read poets in both Bengals — though recognition came largely after his death.',
      },
    ],
    notableWorks: ['Banalata Sen', 'Rupasi Bangla', 'Bodh'],
    relatedAuthorIds: ['author-tagore', 'author-nazrul'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['poetry'],
    portraitImage: img('author-jibanananda', 'Jibanananda Das', {
      width: 600,
      height: 750,
    }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'author-bibhutibhushan',
    slug: 'bibhutibhushan-bandyopadhyay',
    name: 'Bibhutibhushan Bandyopadhyay',
    nameBengali: 'বিভূতিভূষণ বন্দ্যোপাধ্যায়',
    lifespan: '1894–1950',
    era: 'early-modern',
    forms: ['novelist', 'short-story'],
    regions: ['undivided-bengal', 'west-bengal'],
    recognitions: [],
    subtitle: 'Author of Pather Panchali — the lyrical poet of rural Bengal.',
    shortDescription:
      'Renowned for poetic storytelling and vivid evocations of rural life and nature. His novel Pather Panchali became the basis of Satyajit Ray’s landmark film.',
    bodySections: [
      {
        id: 'sec_song_of_road',
        heading: 'Song of the road',
        body:
          'Bibhutibhushan’s Pather Panchali (1929) and Chander Pahar are tender, deeply observed portraits of village life. Pather Panchali gave Satyajit Ray the story for his world-changing debut film.',
      },
    ],
    notableWorks: ['Pather Panchali (1929)', 'Aparajito', 'Chander Pahar (1937)'],
    relatedAuthorIds: ['author-sarat-chandra', 'author-tarashankar'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['writing', 'storytelling'],
    portraitImage: img('author-bibhutibhushan', 'Bibhutibhushan Bandyopadhyay', {
      width: 600,
      height: 750,
    }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'author-mahasweta',
    slug: 'mahasweta-devi',
    name: 'Mahasweta Devi',
    nameBengali: 'মহাশ্বেতা দেবী',
    lifespan: '1926–2016',
    era: 'modern',
    forms: ['novelist', 'short-story', 'essayist'],
    regions: ['west-bengal', 'kolkata-wb'],
    recognitions: ['jnanpith', 'sahitya-akademi', 'padma-vibhushan', 'padma-shri'],
    subtitle: 'Writer and activist for India’s marginalised and tribal peoples.',
    shortDescription:
      'A towering novelist and activist whose fiction gave voice to tribal and marginalised communities. Honoured with the Jnanpith, Sahitya Akademi Award, and Padma Vibhushan.',
    bodySections: [
      {
        id: 'sec_literature_activism',
        heading: 'Literature as activism',
        body:
          'Mahasweta Devi’s fierce, compassionate work championed the rights of tribal peoples across India. Novels like Hajar Churashir Maa fused storytelling with social conscience.',
      },
    ],
    notableWorks: ['Hajar Churashir Maa (Mother of 1084)', 'Aranyer Adhikar', 'Rudali'],
    relatedAuthorIds: ['author-sunil'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['writing'],
    portraitImage: img('author-mahasweta', 'Mahasweta Devi', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'author-sunil',
    slug: 'sunil-gangopadhyay',
    name: 'Sunil Gangopadhyay',
    nameBengali: 'সুনীল গঙ্গোপাধ্যায়',
    lifespan: '1934–2012',
    era: 'modern',
    forms: ['poet', 'novelist'],
    regions: ['west-bengal', 'kolkata-wb'],
    recognitions: ['sahitya-akademi'],
    subtitle: 'Prolific poet and novelist of modern Kolkata.',
    shortDescription:
      'One of the most prolific and beloved modern Bengali writers — poet, novelist, and creator of the iconic characters Kakababu and the poet Nikhilesh.',
    bodySections: [
      {
        id: 'sec_modern_giant',
        heading: 'A modern giant',
        body:
          'Sunil Gangopadhyay shaped post-independence Bengali literature with sweeping historical novels and restless modern poetry, founding the influential “Krittibas” poetry movement.',
      },
    ],
    notableWorks: ['Sei Samay (Those Days)', 'Pratham Alo (First Light)', 'Kakababu series'],
    relatedAuthorIds: ['author-mahasweta'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['poetry', 'writing'],
    portraitImage: img('author-sunil', 'Sunil Gangopadhyay', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'author-tarashankar',
    slug: 'tarashankar-bandyopadhyay',
    name: 'Tarashankar Bandyopadhyay',
    nameBengali: 'তারাশঙ্কর বন্দ্যোপাধ্যায়',
    lifespan: '1898–1971',
    era: 'modern',
    forms: ['novelist', 'short-story'],
    regions: ['west-bengal'],
    recognitions: ['jnanpith', 'sahitya-akademi', 'padma-bhushan'],
    subtitle: 'Chronicler of rural Bengal’s land, caste, and change.',
    shortDescription:
      'A major novelist of rural Bengal, awarded the Jnanpith and Sahitya Akademi honours, known for richly textured portraits of village society.',
    bodySections: [
      {
        id: 'sec_land_people',
        heading: 'The land and its people',
        body:
          'Tarashankar’s fiction, rooted in the Birbhum countryside, explored caste, tradition, and the upheavals of a changing rural Bengal with deep social insight.',
      },
    ],
    notableWorks: ['Ganadevata', 'Hansuli Banker Upakatha', 'Arogya Niketan'],
    relatedAuthorIds: ['author-bibhutibhushan'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['writing'],
    portraitImage: img('author-tarashankar', 'Tarashankar Bandyopadhyay', {
      width: 600,
      height: 750,
    }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'author-sukumar-ray',
    slug: 'sukumar-ray',
    name: 'Sukumar Ray',
    nameBengali: 'সুকুমার রায়',
    lifespan: '1887–1923',
    era: 'early-modern',
    forms: ['childrens', 'poet'],
    regions: ['undivided-bengal', 'kolkata-wb'],
    recognitions: [],
    subtitle: 'The master of Bengali nonsense verse — and Satyajit Ray’s father.',
    shortDescription:
      'Bengal’s beloved master of nonsense literature and children’s writing, whose Abol Tabol remains a cultural touchstone. Father of filmmaker Satyajit Ray.',
    bodySections: [
      {
        id: 'sec_nonsense',
        heading: 'The joy of nonsense',
        body:
          'Sukumar Ray’s witty, surreal verse and stories — above all Abol Tabol and Ha Ja Ba Ra La — delight Bengali children and adults alike, a century on.',
      },
    ],
    notableWorks: ['Abol Tabol', 'Ha Ja Ba Ra La', 'Pagla Dashu'],
    relatedAuthorIds: ['author-tagore'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['poetry', 'storytelling'],
    portraitImage: img('author-sukumar-ray', 'Sukumar Ray', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'author-vidyasagar',
    slug: 'ishwar-chandra-vidyasagar',
    name: 'Ishwar Chandra Vidyasagar',
    nameBengali: 'ঈশ্বরচন্দ্র বিদ্যাসাগর',
    lifespan: '1820–1891',
    era: 'renaissance',
    forms: ['reformer', 'essayist'],
    regions: ['undivided-bengal', 'kolkata-wb'],
    recognitions: [],
    subtitle: 'The polymath who modernised Bengali prose and reformed society.',
    shortDescription:
      'A towering reformer, educator and writer who standardised modern Bengali prose and the alphabet, and led the movement for widow remarriage.',
    bodySections: [
      {
        id: 'sec_modern_bengali',
        heading: 'Architect of modern Bengali',
        body:
          'Vidyasagar reshaped the Bengali alphabet and prose with his primer Borno Porichoy, and used his learning to fight for women’s education and widow remarriage — a giant of the Bengal Renaissance.',
      },
    ],
    notableWorks: ['Borno Porichoy', 'Betal Panchabingsati'],
    relatedAuthorIds: ['author-bankim', 'author-madhusudan'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['writing'],
    portraitImage: img('author-vidyasagar', 'Ishwar Chandra Vidyasagar', {
      width: 600,
      height: 750,
    }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'author-begum-rokeya',
    slug: 'begum-rokeya',
    name: 'Begum Rokeya',
    nameBengali: 'বেগম রোকেয়া',
    alsoKnownAs: 'Rokeya Sakhawat Hossain',
    lifespan: '1880–1932',
    era: 'early-modern',
    forms: ['essayist', 'short-story', 'reformer'],
    regions: ['undivided-bengal', 'bangladesh'],
    recognitions: [],
    subtitle: 'Pioneering feminist writer and champion of women’s education.',
    shortDescription:
      'A pioneering feminist thinker and writer whose work, including the visionary Sultana’s Dream, argued for women’s education and equality decades ahead of her time.',
    bodySections: [
      {
        id: 'sec_dream_ahead',
        heading: 'A dream ahead of its time',
        body:
          'Begum Rokeya’s Sultana’s Dream (1905) imagined a world of women-led science and reason — a landmark of early feminist literature. She devoted her life to women’s education in Bengal.',
      },
    ],
    notableWorks: ['Sultana’s Dream (1905)', 'Padmarag', 'Abarodhbasini'],
    relatedAuthorIds: ['author-nazrul'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['writing'],
    portraitImage: img('author-begum-rokeya', 'Begum Rokeya', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'author-amitav-ghosh',
    slug: 'amitav-ghosh',
    name: 'Amitav Ghosh',
    nameBengali: 'অমিতাভ ঘোষ',
    lifespan: 'b. 1956',
    era: 'contemporary',
    forms: ['novelist', 'essayist'],
    regions: ['west-bengal', 'kolkata-wb', 'diaspora'],
    recognitions: ['jnanpith'],
    subtitle: 'Globally acclaimed novelist of history, migration, and climate.',
    shortDescription:
      'An internationally celebrated Bengali novelist (writing in English) known for richly historical fiction and essays on empire, migration, and climate. Awarded the Jnanpith.',
    bodySections: [
      {
        id: 'sec_world_stage',
        heading: 'Bengal on the world stage',
        body:
          'Amitav Ghosh’s sweeping novels — including the Ibis Trilogy — carry Bengali and South Asian history to a global readership, and his climate writing has shaped international conversation.',
      },
    ],
    notableWorks: [
      'The Shadow Lines',
      'Sea of Poppies (Ibis Trilogy)',
      'The Hungry Tide',
      'The Great Derangement',
    ],
    relatedAuthorIds: ['author-jhumpa-lahiri'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['writing'],
    portraitImage: img('author-amitav-ghosh', 'Amitav Ghosh', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'author-jhumpa-lahiri',
    slug: 'jhumpa-lahiri',
    name: 'Jhumpa Lahiri',
    nameBengali: 'ঝুম্পা লাহিড়ী',
    lifespan: 'b. 1967',
    era: 'contemporary',
    forms: ['short-story', 'novelist'],
    regions: ['diaspora'],
    recognitions: [],
    subtitle: 'Pulitzer-winning chronicler of the Bengali diaspora experience.',
    shortDescription:
      'A Bengali-American author who won the Pulitzer Prize for Fiction for Interpreter of Maladies, exploring immigrant identity and the diaspora experience.',
    bodySections: [
      {
        id: 'sec_two_worlds',
        heading: 'Between two worlds',
        body:
          'Jhumpa Lahiri’s precise, moving fiction maps the lives of Bengali immigrants and their children. Her debut, Interpreter of Maladies, won the Pulitzer Prize for Fiction.',
      },
    ],
    notableWorks: ['Interpreter of Maladies', 'The Namesake', 'The Lowland'],
    relatedAuthorIds: ['author-amitav-ghosh'],
    relatedArticleIds: ['art_bengali_authors'],
    relatedCreatorTags: ['writing'],
    portraitImage: img('author-jhumpa-lahiri', 'Jhumpa Lahiri', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
];
