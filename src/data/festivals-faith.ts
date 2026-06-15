/**
 * Festivals & Faiths — seed data for the Discover hub.
 *
 * Article id reference:
 *   art_journey_festivals — Festivals (includes Durga Puja)
 *   art_terracotta        — Bishnupur Terracotta
 *
 * Images use deterministic placeholders until public-domain photography is added.
 */
import type { Festival, ReligiousSite } from '@/types';
import { img } from '@/constants/images';

export const festivals: Festival[] = [
  {
    id: 'festival-durga-puja',
    slug: 'durga-puja',
    name: 'Durga Puja',
    nameBengali: 'দুর্গাপূজা',
    faith: 'hindu',
    season: 'autumn',
    timeOfYear: 'September–October',
    subtitle: 'Bengal’s greatest festival — and the world’s largest public art event.',
    shortDescription:
      'The ten-day worship of the goddess Durga, when whole cities become open-air galleries of art and light. Inscribed by UNESCO as Intangible Cultural Heritage in 2021.',
    bodySections: [
      {
        id: 'sec_city_gallery',
        heading: 'A city becomes a gallery',
        body:
          'For a few autumn nights, neighbourhoods build dazzling temporary temples (pandals), artisans of Kumartuli sculpt the goddess from river clay, dhakis roll thunder through the streets, and millions wander from one illuminated dreamscape to the next.',
      },
      {
        id: 'sec_homecoming',
        heading: 'Homecoming',
        body:
          'Durga Puja marks the goddess’s annual return to her parental home — and so it has come to mean homecoming itself, drawing the Bengali diaspora back from across the world.',
      },
    ],
    heritageNote:
      'Inscribed by UNESCO in 2021 on the Representative List of the Intangible Cultural Heritage of Humanity — the first Asian festival so recognised.',
    relatedSiteIds: ['site-kalighat', 'site-dakshineswar'],
    relatedArticleIds: ['art_journey_festivals'],
    relatedCreatorTags: ['dhaki', 'terracotta'],
    heroImage: img('festival-durga-puja', 'Durga Puja pandal', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'festival-kali-puja',
    slug: 'kali-puja',
    name: 'Kali Puja',
    nameBengali: 'কালীপূজা',
    faith: 'hindu',
    season: 'autumn',
    timeOfYear: 'October–November (Diwali / Amavasya)',
    subtitle: 'The night worship of the fierce, protective goddess Kali.',
    shortDescription:
      'Bengal’s nocturnal worship of Goddess Kali, held on the new-moon night of Diwali — a festival of lamps, fireworks, and deep devotion.',
    bodySections: [
      {
        id: 'sec_dark_mother',
        heading: 'The dark mother',
        body:
          'Where much of India lights Diwali for Lakshmi, Bengal turns to Kali — the fierce, liberating mother goddess — worshipped through the night with lamps, offerings, and reverence at temples like Dakshineswar and Kalighat.',
      },
    ],
    relatedSiteIds: ['site-dakshineswar', 'site-kalighat'],
    relatedArticleIds: ['art_journey_festivals'],
    heroImage: img('festival-kali-puja', 'Kali Puja lamps', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'festival-saraswati-puja',
    slug: 'saraswati-puja',
    name: 'Saraswati Puja',
    nameBengali: 'সরস্বতী পূজা',
    faith: 'hindu',
    season: 'spring',
    timeOfYear: 'January–February (Basant Panchami)',
    subtitle: 'The spring worship of the goddess of learning and the arts.',
    shortDescription:
      'A beloved spring festival honouring Saraswati, goddess of knowledge, music, and art — especially cherished by students, often called Bengal’s “Valentine’s Day.”',
    bodySections: [
      {
        id: 'sec_yellow_learning',
        heading: 'Yellow and learning',
        body:
          'Students place books before the goddess, schools and homes fill with marigold and the colour yellow, and the day carries a gentle romance that has made it a favourite of the young.',
      },
    ],
    relatedSiteIds: [],
    relatedArticleIds: [],
    heroImage: img('festival-saraswati-puja', 'Saraswati Puja', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'festival-poila-boishakh',
    slug: 'poila-boishakh',
    name: 'Poila Boishakh',
    nameBengali: 'পয়লা বৈশাখ',
    faith: 'secular',
    season: 'spring',
    timeOfYear: 'Mid-April',
    subtitle: 'The Bengali New Year — shared across all communities.',
    shortDescription:
      'The Bengali New Year, celebrated by all Bengalis regardless of faith, with new clothes, sweets, music, processions, and the opening of new account books (Haal Khata).',
    bodySections: [
      {
        id: 'sec_new_year_all',
        heading: 'A new year for all Bengal',
        body:
          'Poila Boishakh is a cultural, not religious, festival — a shared new beginning. In Bangladesh, the Mangal Shobhajatra procession of Pohela Boishakh is itself UNESCO-recognised.',
      },
    ],
    heritageNote:
      'The Mangal Shobhajatra of Pohela Boishakh (Bangladesh) is recognised by UNESCO as Intangible Cultural Heritage.',
    relatedSiteIds: [],
    relatedArticleIds: [],
    heroImage: img('festival-poila-boishakh', 'Poila Boishakh celebration', {
      width: 800,
      height: 600,
    }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'festival-eid',
    slug: 'eid-in-bengal',
    name: 'Eid',
    nameBengali: 'ঈদ',
    faith: 'islam',
    season: 'summer',
    timeOfYear: 'Varies (lunar calendar)',
    subtitle: 'The great festivals of Bengal’s Muslim community.',
    shortDescription:
      'Eid al-Fitr and Eid al-Adha are central celebrations for Bengal’s large Muslim population, marked by prayer, feasting, new clothes, and shared sweets like shemai.',
    bodySections: [
      {
        id: 'sec_prayer_feast',
        heading: 'Prayer, feast, and sweetness',
        body:
          'After the fasting of Ramadan, Eid al-Fitr brings congregational prayers, visits, and dishes like shemai (sweet vermicelli). Bengal’s Eid traditions blend Islamic observance with distinctly Bengali food and hospitality.',
      },
    ],
    relatedSiteIds: ['site-nakhoda', 'site-adina', 'site-furfura'],
    relatedArticleIds: [],
    heroImage: img('festival-eid', 'Eid celebration in Bengal', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'festival-christmas',
    slug: 'christmas-in-bengal',
    name: 'Christmas (Boro Din)',
    nameBengali: 'বড়দিন',
    faith: 'christian',
    season: 'winter',
    timeOfYear: 'December',
    subtitle: '“The Big Day” — Kolkata’s beloved Christmas.',
    shortDescription:
      'Known in Bengali as Boro Din (“the big day”), Christmas is warmly celebrated across communities, with Park Street in Kolkata transformed by lights and festivity.',
    bodySections: [
      {
        id: 'sec_city_shares',
        heading: 'A festival the whole city shares',
        body:
          'Christmas in Kolkata spills well beyond the Christian community — the lights of Park Street, cakes from old bakeries, and carols at St. Paul’s Cathedral make Boro Din a citywide celebration.',
      },
    ],
    relatedSiteIds: ['site-st-pauls', 'site-bandel-church'],
    relatedArticleIds: [],
    heroImage: img('festival-christmas', 'Christmas in Kolkata', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'festival-rath-yatra',
    slug: 'rath-yatra',
    name: 'Rath Yatra',
    nameBengali: 'রথযাত্রা',
    faith: 'hindu',
    season: 'monsoon',
    timeOfYear: 'June–July',
    subtitle: 'The chariot festival of Lord Jagannath.',
    shortDescription:
      'The festival of chariots dedicated to Lord Jagannath, when decorated raths are pulled through the streets — grandly observed at Mahesh in Serampore, one of the oldest in India.',
    bodySections: [
      {
        id: 'sec_chariots',
        heading: 'Chariots through the streets',
        body:
          'Bengal’s Rath Yatra — especially the centuries-old Mahesh Rath Yatra near Serampore — fills towns with processions, fairs, and devotion as Jagannath journeys forth.',
      },
    ],
    relatedSiteIds: [],
    relatedArticleIds: ['art_journey_festivals'],
    heroImage: img('festival-rath-yatra', 'Rath Yatra chariot', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'festival-jagaddhatri-puja',
    slug: 'jagaddhatri-puja',
    name: 'Jagaddhatri Puja',
    nameBengali: 'জগদ্ধাত্রী পূজা',
    faith: 'hindu',
    season: 'autumn',
    timeOfYear: 'November',
    subtitle: 'Chandannagar’s dazzling festival of lights and the goddess.',
    shortDescription:
      'A radiant goddess festival most famous in Chandannagar and Krishnanagar, celebrated for its extraordinary lighting (alokshojja) and grand idols.',
    bodySections: [
      {
        id: 'sec_city_lights',
        heading: 'The city of lights',
        body:
          'Chandannagar’s Jagaddhatri Puja is renowned across India for its breathtaking electric-light tableaux — a legacy of the town’s French colonial past meeting Bengali devotion.',
      },
    ],
    relatedSiteIds: [],
    relatedArticleIds: ['art_journey_festivals'],
    heroImage: img('festival-jagaddhatri-puja', 'Jagaddhatri Puja lights', {
      width: 800,
      height: 600,
    }),
    isFlagship: false,
    isStub: true,
  },
];

export const religiousSites: ReligiousSite[] = [
  {
    id: 'site-dakshineswar',
    slug: 'dakshineswar-kali-temple',
    name: 'Dakshineswar Kali Temple',
    nameBengali: 'দক্ষিণেশ্বর কালীমন্দির',
    faith: 'hindu',
    type: 'temple',
    status: ['active-worship', 'pilgrimage', 'heritage-monument'],
    region: 'north-24-parganas',
    location: 'Dakshineswar, on the Hooghly River, Greater Kolkata',
    builtPeriod: '1855',
    builtBy: 'Rani Rashmoni',
    architecturalStyle: 'Navaratna (nine-spire) Bengal architecture',
    subtitle: 'The riverside temple where Sri Ramakrishna found the divine.',
    shortDescription:
      'A grand nine-spired Kali temple completed in 1855 by Rani Rashmoni, forever linked to the saint Sri Ramakrishna Paramahamsa, who served here.',
    bodySections: [
      {
        id: 'sec_visionary_woman',
        heading: 'Built by a visionary woman',
        body:
          'Rani Rashmoni, a philanthropic widow, founded this riverside temple in the Navaratna style — three storeys, nine spires, rising over 30 metres beside the Hooghly.',
      },
      {
        id: 'sec_saint',
        heading: 'The saint of Dakshineswar',
        body:
          'It was here that Sri Ramakrishna Paramahamsa attained his profound spiritual realisations, making the temple a centre of devotion and a cradle of the Ramakrishna movement.',
      },
    ],
    historicalSignificance:
      'One of Bengal’s holiest Kali temples and the spiritual home of Sri Ramakrishna.',
    visitorNote: 'Active temple open to all; busiest on Kali Puja and Tuesdays/Saturdays.',
    relatedSiteIds: ['site-belur-math', 'site-kalighat'],
    relatedFestivalIds: ['festival-kali-puja', 'festival-durga-puja'],
    relatedArticleIds: [],
    heroImage: img('site-dakshineswar', 'Dakshineswar Kali Temple', {
      width: 800,
      height: 600,
    }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'site-kalighat',
    slug: 'kalighat-kali-temple',
    name: 'Kalighat Kali Temple',
    nameBengali: 'কালীঘাট মন্দির',
    faith: 'hindu',
    type: 'temple',
    status: ['active-worship', 'pilgrimage'],
    region: 'kolkata',
    location: 'Kalighat, South Kolkata',
    builtPeriod: 'Current temple early 19th c. (ancient site)',
    architecturalStyle: 'Bengal temple architecture',
    subtitle: 'A Shakti Peetha that gave Kolkata its name.',
    shortDescription:
      'One of the 51 Shakti Peethas and among the most revered Kali temples in India. The name “Kolkata” is widely linked to “Kalighat.”',
    bodySections: [
      {
        id: 'sec_goddess_fell',
        heading: 'Where the goddess fell',
        body:
          'By tradition, a toe of the goddess Sati fell here, making Kalighat one of the 51 Shakti Peethas — a site of intense devotion drawing thousands of pilgrims daily.',
      },
    ],
    historicalSignificance:
      'A foundational sacred site of Kolkata, one of the holiest Kali shrines, and the likely root of the city’s name.',
    visitorNote: 'Very busy active temple; respectful dress and patience advised.',
    relatedSiteIds: ['site-dakshineswar'],
    relatedFestivalIds: ['festival-kali-puja', 'festival-durga-puja'],
    relatedArticleIds: [],
    heroImage: img('site-kalighat', 'Kalighat Kali Temple', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'site-belur-math',
    slug: 'belur-math',
    name: 'Belur Math',
    nameBengali: 'বেলুড় মঠ',
    faith: 'interfaith',
    type: 'monastery',
    status: ['active-worship', 'pilgrimage', 'heritage-monument'],
    region: 'howrah',
    location: 'Belur, west bank of the Hooghly, Howrah',
    builtPeriod: 'Early 20th century',
    builtBy: 'Swami Vivekananda (Ramakrishna Mission)',
    architecturalStyle: 'Fusion — temple, mosque and church forms ("universal faith")',
    subtitle: 'A temple that looks like a mosque and a church — unity in stone.',
    shortDescription:
      'The headquarters of the Ramakrishna Math and Mission, founded by Swami Vivekananda. Its main temple deliberately fuses Hindu, Islamic and Christian architecture to embody universal faith.',
    bodySections: [
      {
        id: 'sec_unity',
        heading: 'Unity in diversity',
        body:
          'Seen from different angles, the Belur Math temple resembles a temple, a mosque, and a church — a built expression of Vivekananda’s message that all faiths lead to the same truth.',
      },
    ],
    historicalSignificance:
      'The global heart of the Ramakrishna movement and a powerful architectural symbol of religious harmony.',
    visitorNote: 'Open to all; serene riverside campus.',
    relatedSiteIds: ['site-dakshineswar'],
    relatedFestivalIds: [],
    relatedArticleIds: [],
    heroImage: img('site-belur-math', 'Belur Math', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'site-bishnupur-temples',
    slug: 'bishnupur-terracotta-temples',
    name: 'Terracotta Temples of Bishnupur',
    nameBengali: 'বিষ্ণুপুরের মন্দির',
    faith: 'hindu',
    type: 'temple',
    status: ['heritage-monument', 'active-worship'],
    region: 'bankura',
    location: 'Bishnupur, Bankura district, West Bengal',
    builtPeriod: 'Malla dynasty, 16th–18th century',
    builtBy: 'Malla kings (e.g. Rasmancha, Jor Bangla, Shyam Rai temples)',
    architecturalStyle: 'Bengal terracotta temple architecture',
    subtitle: 'Walls of baked clay that tell the epics.',
    shortDescription:
      'A cluster of world-famous terracotta temples built by the Malla kings, their walls covered in clay reliefs depicting scenes from the Ramayana and Mahabharata.',
    bodySections: [
      {
        id: 'sec_stories_clay',
        heading: 'Stories in clay',
        body:
          'Each Bishnupur temple is a canvas of terracotta panels — gods, battles, dancers, daily life — making the town one of the supreme achievements of Bengali temple art.',
      },
    ],
    historicalSignificance:
      'The greatest surviving ensemble of Bengal’s distinctive terracotta temple architecture; same town as Baluchari silk.',
    visitorNote: 'Open heritage site; many temples freely accessible.',
    relatedSiteIds: [],
    relatedFestivalIds: [],
    relatedArticleIds: ['art_terracotta'],
    heroImage: img('site-bishnupur-temples', 'Bishnupur terracotta temple', {
      width: 800,
      height: 600,
    }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'site-nakhoda',
    slug: 'nakhoda-masjid',
    name: 'Nakhoda Masjid',
    nameBengali: 'নাখোদা মসজিদ',
    faith: 'islam',
    type: 'mosque',
    status: ['active-worship'],
    region: 'kolkata',
    location: 'Burrabazar (Chitpur), Kolkata',
    builtPeriod: '1926',
    architecturalStyle: 'Indo-Saracenic (inspired by Mughal architecture)',
    subtitle: 'Kolkata’s grand principal mosque.',
    shortDescription:
      'The largest and principal mosque of Kolkata, an imposing Indo-Saracenic structure inspired by Mughal architecture, at the heart of the city’s Muslim quarter.',
    bodySections: [
      {
        id: 'sec_muslim_kolkata',
        heading: 'Heart of Muslim Kolkata',
        body:
          'Nakhoda Masjid anchors the bustling Burrabazar district and comes most alive during Ramadan and Eid, when its surroundings fill with prayer, food, and festivity.',
      },
    ],
    historicalSignificance:
      'The principal congregational mosque of Kolkata and a centre of the city’s Muslim life.',
    visitorNote:
      'Active mosque; visitors welcome with respectful dress, outside prayer times.',
    relatedSiteIds: ['site-adina', 'site-furfura'],
    relatedFestivalIds: ['festival-eid'],
    relatedArticleIds: [],
    heroImage: img('site-nakhoda', 'Nakhoda Masjid', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'site-adina',
    slug: 'adina-mosque',
    name: 'Adina Mosque',
    nameBengali: 'আদিনা মসজিদ',
    faith: 'islam',
    type: 'mosque',
    status: ['heritage-monument'],
    region: 'malda',
    location: 'Pandua, Malda district, West Bengal',
    builtPeriod: '14th century (c. 1373)',
    builtBy: 'Sultan Sikandar Shah',
    architecturalStyle: 'Sultanate-era Bengal Islamic architecture',
    subtitle: 'The vast, ruined grandeur of a Sultanate mosque.',
    shortDescription:
      'Once among the largest mosques of the Indian subcontinent, built in the 14th century by Sultan Sikandar Shah — now a magnificent, atmospheric ruin.',
    bodySections: [
      {
        id: 'sec_sultan',
        heading: 'A sultan’s ambition',
        body:
          'The Adina Mosque, raised in the era of the Bengal Sultanate, was a colossal statement of power. Today its weathered arches and open courtyard stand as one of Bengal’s most striking medieval ruins.',
      },
    ],
    historicalSignificance:
      'A major monument of the Bengal Sultanate and of medieval Indo-Islamic architecture.',
    visitorNote: 'Heritage ruin, open to visitors (ASI-protected).',
    relatedSiteIds: ['site-nakhoda'],
    relatedFestivalIds: [],
    relatedArticleIds: [],
    heroImage: img('site-adina', 'Adina Mosque ruins', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'site-furfura',
    slug: 'furfura-sharif',
    name: 'Furfura Sharif',
    nameBengali: 'ফুরফুরা শরিফ',
    faith: 'islam',
    type: 'shrine',
    status: ['active-worship', 'pilgrimage'],
    region: 'hooghly',
    location: 'Furfura, Hooghly district, West Bengal',
    builtPeriod: 'Mosque c. 1375; major shrine complex later',
    subtitle: 'A revered Sufi pilgrimage shrine of Bengal.',
    shortDescription:
      'A major Sufi pilgrimage centre (dargah) in Hooghly, drawing large gatherings especially during its annual urs festival.',
    bodySections: [
      {
        id: 'sec_sufi',
        heading: 'A centre of Sufi devotion',
        body:
          'Furfura Sharif is one of the most important Sufi shrines in eastern India, a place of pilgrimage and spiritual gathering for Bengal’s Muslim community.',
      },
    ],
    historicalSignificance:
      'A leading Sufi pilgrimage shrine and centre of religious learning in Bengal.',
    visitorNote: 'Active shrine; busiest during the annual urs.',
    relatedSiteIds: ['site-nakhoda'],
    relatedFestivalIds: ['festival-eid'],
    relatedArticleIds: [],
    heroImage: img('site-furfura', 'Furfura Sharif', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'site-bandel-church',
    slug: 'bandel-church',
    name: 'Bandel Church',
    nameBengali: 'ব্যান্ডেল চার্চ',
    faith: 'christian',
    type: 'church',
    status: ['active-worship', 'heritage-monument'],
    region: 'hooghly',
    location: 'Bandel, Hooghly district, West Bengal',
    builtPeriod: '1660',
    builtBy: 'Portuguese settlers',
    architecturalStyle: 'Portuguese colonial',
    subtitle: 'Bengal’s oldest church — a relic of Portuguese Bengal.',
    shortDescription:
      'The Basilica of the Holy Rosary, built in 1660, is one of the oldest churches in Bengal and a memorial to the early Portuguese presence on the Hooghly.',
    bodySections: [
      {
        id: 'sec_portuguese',
        heading: 'A Portuguese legacy',
        body:
          'Bandel Church recalls the era when the Portuguese settled along the Hooghly. Its shrine to Mary, old organ, three altars, and ancient tombstones make it a place of both worship and history.',
      },
    ],
    historicalSignificance:
      'One of the oldest Christian churches in Bengal and a monument to the Portuguese chapter of its history.',
    visitorNote: 'Active basilica; major celebrations at Christmas.',
    relatedSiteIds: ['site-st-pauls'],
    relatedFestivalIds: ['festival-christmas'],
    relatedArticleIds: [],
    heroImage: img('site-bandel-church', 'Bandel Church', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'site-st-pauls',
    slug: 'st-pauls-cathedral',
    name: "St. Paul's Cathedral",
    nameBengali: 'সেন্ট পলস ক্যাথিড্রাল',
    faith: 'christian',
    type: 'church',
    status: ['active-worship', 'heritage-monument'],
    region: 'kolkata',
    location: 'Central Kolkata, near Victoria Memorial',
    builtPeriod: '1847',
    architecturalStyle: 'Gothic Revival',
    subtitle: 'Kolkata’s landmark Gothic cathedral.',
    shortDescription:
      'A major Anglican cathedral completed in 1847, renowned for its Gothic Revival architecture and a centre of Kolkata’s Christmas celebrations.',
    bodySections: [
      {
        id: 'sec_gothic',
        heading: 'Gothic grandeur in Kolkata',
        body:
          'St. Paul’s, with its soaring spire and Gothic lines, is one of Kolkata’s great colonial-era landmarks and the spiritual home of the city’s Christmas.',
      },
    ],
    historicalSignificance:
      'A landmark of colonial Kolkata and a centre of the city’s Christian community.',
    visitorNote: 'Open to visitors; carols and services at Christmas.',
    relatedSiteIds: ['site-bandel-church'],
    relatedFestivalIds: ['festival-christmas'],
    relatedArticleIds: [],
    heroImage: img('site-st-pauls', "St. Paul's Cathedral", { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
];
