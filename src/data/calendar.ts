/**
 * Bangabda — the Bengali calendar & ritual year.
 *
 * Cross-links to festivals-faith.ts, flora.ts, and fish-dal.ts via IDs.
 */
import type {
  CalendarOverview,
  Panjika,
  Ritual,
  Ritu,
  BengaliMonth,
} from '@/types';
import { img } from '@/constants/images';

export const ritus: Ritu[] = [
  {
    id: 'grishmo',
    name: 'Grishmo',
    nameBengali: 'গ্রীষ্ম',
    englishName: 'Summer',
    monthIds: ['month-boishakh', 'month-joishtho'],
    gregorianSpan: 'mid-April – mid-June',
    subtitle: 'Heat, the new year, and the king of fruits.',
    description:
      'The hot season that opens the Bengali year with Poila Boishakh, and brings the long-awaited mango and litchi harvest.',
    floraIds: ['flora-mango', 'flora-litchi'],
    festivalIds: ['festival-poila-boishakh'],
  },
  {
    id: 'borsha',
    name: 'Borsha',
    nameBengali: 'বর্ষা',
    englishName: 'Monsoon',
    monthIds: ['month-asharh', 'month-srabon'],
    gregorianSpan: 'mid-June – mid-August',
    subtitle: 'The rains — and the season of ilish.',
    description:
      'The monsoon, beloved in Bengali poetry and song, bringing relief from the heat — and the prized hilsa (ilish) to the table.',
    fishIds: ['fish-ilish'],
    festivalIds: ['festival-rath-yatra'],
  },
  {
    id: 'sharat',
    name: 'Sharat',
    nameBengali: 'শরৎ',
    englishName: 'Autumn',
    monthIds: ['month-bhadro', 'month-ashwin'],
    gregorianSpan: 'mid-August – mid-October',
    subtitle: 'Blue skies, white kash, and Durga Puja.',
    description:
      'The most celebrated season — clear skies, fields of white kash flowers, the scent of shiuli, and the homecoming of Durga Puja.',
    floraIds: ['flora-kash', 'flora-shiuli', 'flora-padma'],
    festivalIds: ['festival-durga-puja'],
  },
  {
    id: 'hemonto',
    name: 'Hemonto',
    nameBengali: 'হেমন্ত',
    englishName: 'Late Autumn',
    monthIds: ['month-kartik', 'month-ogrohayon'],
    gregorianSpan: 'mid-October – mid-December',
    subtitle: 'The quiet harvest season.',
    description:
      'A gentle, often-overlooked season of harvest and cooling air, bridging the festivals of autumn and the depth of winter; Kali Puja falls here.',
    festivalIds: ['festival-kali-puja', 'festival-jagaddhatri-puja'],
  },
  {
    id: 'sheet',
    name: 'Sheet',
    nameBengali: 'শীত',
    englishName: 'Winter',
    monthIds: ['month-poush', 'month-magh'],
    gregorianSpan: 'mid-December – mid-February',
    subtitle: 'Feasts, nolen gur, pithe — and weddings.',
    description:
      'Bengal’s beloved winter: the richest vegetables, date-palm jaggery (nolen gur), pithe-making at Poush Parbon, the wedding season, and Saraswati Puja at its close.',
    floraIds: ['flora-winter-veg'],
    festivalIds: ['festival-saraswati-puja'],
  },
  {
    id: 'boshonto',
    name: 'Boshonto',
    nameBengali: 'বসন্ত',
    englishName: 'Spring',
    monthIds: ['month-falgun', 'month-chaitro'],
    gregorianSpan: 'mid-February – mid-April',
    subtitle: 'Colour, the koel’s call, and the year’s close.',
    description:
      'The season of flowers and the cuckoo’s song, of Dol/Holi’s colour and Basanta Utsav, ending the year with Chaitra Sankranti and Charak Puja before the new Boishakh.',
    festivalIds: [],
  },
];

export const months: BengaliMonth[] = [
  {
    id: 'month-boishakh',
    order: 1,
    name: 'Boishakh',
    nameBengali: 'বৈশাখ',
    ritu: 'grishmo',
    gregorianSpan: 'mid-Apr – mid-May',
    highlight: 'Poila Boishakh — the Bengali New Year and Halkhata.',
    festivalIds: ['festival-poila-boishakh'],
  },
  {
    id: 'month-joishtho',
    order: 2,
    name: 'Joishtho',
    nameBengali: 'জ্যৈষ্ঠ',
    ritu: 'grishmo',
    gregorianSpan: 'mid-May – mid-Jun',
    highlight: 'Peak mango season; Jamai Sasthi honours sons-in-law.',
  },
  {
    id: 'month-asharh',
    order: 3,
    name: 'Asharh',
    nameBengali: 'আষাঢ়',
    ritu: 'borsha',
    gregorianSpan: 'mid-Jun – mid-Jul',
    highlight: 'The monsoon arrives; Rath Yatra.',
    festivalIds: ['festival-rath-yatra'],
  },
  {
    id: 'month-srabon',
    order: 4,
    name: 'Srabon',
    nameBengali: 'শ্রাবণ',
    ritu: 'borsha',
    gregorianSpan: 'mid-Jul – mid-Aug',
    highlight: 'Deep monsoon; the season of ilish at its best.',
  },
  {
    id: 'month-bhadro',
    order: 5,
    name: 'Bhadro',
    nameBengali: 'ভাদ্র',
    ritu: 'sharat',
    gregorianSpan: 'mid-Aug – mid-Sep',
    highlight: 'Skies begin to clear; Janmashtami, Vishwakarma Puja.',
  },
  {
    id: 'month-ashwin',
    order: 6,
    name: 'Ashwin',
    nameBengali: 'আশ্বিন',
    ritu: 'sharat',
    gregorianSpan: 'mid-Sep – mid-Oct',
    highlight: 'Durga Puja — the heart of the Bengali year.',
    festivalIds: ['festival-durga-puja'],
  },
  {
    id: 'month-kartik',
    order: 7,
    name: 'Kartik',
    nameBengali: 'কার্তিক',
    ritu: 'hemonto',
    gregorianSpan: 'mid-Oct – mid-Nov',
    highlight: 'Kali Puja and Jagaddhatri Puja; lamps and light.',
    festivalIds: ['festival-kali-puja', 'festival-jagaddhatri-puja'],
  },
  {
    id: 'month-ogrohayon',
    order: 8,
    name: 'Ogrohayon',
    nameBengali: 'অগ্রহায়ণ',
    ritu: 'hemonto',
    gregorianSpan: 'mid-Nov – mid-Dec',
    highlight: 'The main rice harvest; Nabanna (new-harvest festival).',
  },
  {
    id: 'month-poush',
    order: 9,
    name: 'Poush',
    nameBengali: 'পৌষ',
    ritu: 'sheet',
    gregorianSpan: 'mid-Dec – mid-Jan',
    highlight: 'Poush Parbon / Sankranti — pithe, nolen gur, Poush Mela.',
  },
  {
    id: 'month-magh',
    order: 10,
    name: 'Magh',
    nameBengali: 'মাঘ',
    ritu: 'sheet',
    gregorianSpan: 'mid-Jan – mid-Feb',
    highlight: 'Saraswati Puja — the worship of learning and the arts.',
    festivalIds: ['festival-saraswati-puja'],
  },
  {
    id: 'month-falgun',
    order: 11,
    name: 'Falgun',
    nameBengali: 'ফাল্গুন',
    ritu: 'boshonto',
    gregorianSpan: 'mid-Feb – mid-Mar',
    highlight: 'Spring; Dol/Holi and Basanta Utsav of colour.',
  },
  {
    id: 'month-chaitro',
    order: 12,
    name: 'Chaitro',
    nameBengali: 'চৈত্র',
    ritu: 'boshonto',
    gregorianSpan: 'mid-Mar – mid-Apr',
    highlight: 'Chaitra Sankranti and Charak Puja close the year.',
  },
];

export const rituals: Ritual[] = [
  {
    id: 'ritual-halkhata',
    slug: 'halkhata',
    name: 'Halkhata',
    nameBengali: 'হালখাতা',
    kind: 'seasonal-observance',
    faith: 'secular',
    timing: 'Poila Boishakh (1st of Boishakh)',
    subtitle: 'Opening fresh account books for the new year.',
    shortDescription:
      'On Poila Boishakh, shopkeepers and businesses open new account books (halkhata), clear old dues, and welcome customers with sweets — a beloved new-year tradition shared across communities.',
    bodySections: [
      {
        heading: 'A fresh ledger',
        body:
          'Halkhata marks a clean start: traders begin a new red ledger, often after a small puja, and treat customers to mishti. It’s the commercial heart of the Bengali new year.',
      },
    ],
    relatedMonthId: 'month-boishakh',
    relatedRituId: 'grishmo',
    relatedFestivalIds: ['festival-poila-boishakh'],
    relatedArticleIds: [],
    image: img('ritual-halkhata', 'Halkhata', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'ritual-jamai-sasthi',
    slug: 'jamai-sasthi',
    name: 'Jamai Sasthi',
    nameBengali: 'জামাই ষষ্ঠী',
    kind: 'family-custom',
    faith: 'hindu',
    timing: 'Joishtho (May–June)',
    subtitle: 'The day a family feasts its son-in-law.',
    shortDescription:
      'A warm family custom in which parents honour their son-in-law (jamai) with a lavish feast and gifts, celebrating the bond between families.',
    bodySections: [
      {
        heading: 'Feasting the jamai',
        body:
          'On Jamai Sasthi, the son-in-law is welcomed with an elaborate spread — often the season’s best fish and mishti — as mothers-in-law bless the couple’s wellbeing.',
      },
    ],
    relatedMonthId: 'month-joishtho',
    relatedRituId: 'grishmo',
    relatedArticleIds: [],
    image: img('ritual-jamai-sasthi', 'Jamai Sasthi', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'ritual-nabanna',
    slug: 'nabanna',
    name: 'Nabanna',
    nameBengali: 'নবান্ন',
    kind: 'seasonal-observance',
    faith: 'across-communities',
    timing: 'Ogrohayon (Nov–Dec)',
    subtitle: 'The festival of the new rice harvest.',
    shortDescription:
      'A harvest celebration marking the first new rice (nabanna = “new grain”), when freshly harvested rice is cooked into special dishes and shared — a thanksgiving rooted in Bengal’s agrarian life.',
    bodySections: [
      {
        heading: 'First fruits',
        body:
          'Nabanna honours the new rice with offerings and feasting on dishes made from the fresh harvest — a quietly profound link between Bengali culture and its fertile land.',
      },
    ],
    relatedMonthId: 'month-ogrohayon',
    relatedRituId: 'hemonto',
    relatedArticleIds: [],
    image: img('ritual-nabanna', 'Nabanna', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'ritual-poush-parbon',
    slug: 'poush-parbon',
    name: 'Poush Parbon',
    nameBengali: 'পৌষ পার্বণ',
    kind: 'seasonal-observance',
    faith: 'across-communities',
    timing: 'End of Poush (mid-January, Sankranti)',
    subtitle: 'The midwinter festival of pithe and nolen gur.',
    shortDescription:
      'The winter harvest festival at Poush Sankranti, when homes make pithe (rice cakes) sweetened with date-palm jaggery (nolen gur) — one of the most loved domestic festivals of the year.',
    bodySections: [
      {
        heading: 'Pithe season',
        body:
          'As the date palms yield nolen gur, families gather to make patishapta, bhapa pithe and puli. Poush Parbon is the cosy heart of the Bengali winter, also marked by the famous Poush Mela at Shantiniketan.',
      },
    ],
    relatedMonthId: 'month-poush',
    relatedRituId: 'sheet',
    relatedArticleIds: [],
    image: img('ritual-poush-parbon', 'Poush Parbon', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'ritual-bhai-phonta',
    slug: 'bhai-phonta',
    name: 'Bhai Phonta',
    nameBengali: 'ভাইফোঁটা',
    kind: 'family-custom',
    faith: 'hindu',
    timing: 'Kartik (just after Kali Puja)',
    subtitle: 'Sisters’ blessing for their brothers’ long life.',
    shortDescription:
      'A family festival in which sisters place a sandalwood mark (phonta) on their brothers’ foreheads, praying for their long life and wellbeing, followed by feasting — the Bengali counterpart of Bhai Dooj.',
    bodySections: [
      {
        heading: 'A mark of love',
        body:
          'With a chant and a phonta of sandal paste, sisters bless their brothers; brothers in turn promise protection and give gifts. A day of family bonds and shared sweets.',
      },
    ],
    relatedMonthId: 'month-kartik',
    relatedRituId: 'hemonto',
    relatedArticleIds: [],
    image: img('ritual-bhai-phonta', 'Bhai Phonta', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'ritual-annaprashan',
    slug: 'annaprashan',
    name: 'Annaprashan (Mukhe Bhaat)',
    nameBengali: 'অন্নপ্রাশন',
    kind: 'rite-of-passage',
    faith: 'hindu',
    timing: 'By age (infant’s first rice), any auspicious day',
    subtitle: 'A baby’s first taste of rice.',
    shortDescription:
      'The rice-ceremony (“mukhe bhaat”) marking an infant’s first solid food, a joyful family rite of passage with blessings, special foods, and the symbolic choosing of objects.',
    bodySections: [
      {
        heading: 'First rice',
        body:
          'At annaprashan, an elder feeds the baby its first rice amid family celebration. In a charming custom, the child is offered a tray of objects (book, coin, clay, etc.) to “choose” a hint of the future.',
      },
    ],
    relatedArticleIds: [],
    image: img('ritual-annaprashan', 'Annaprashan', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'ritual-charak-puja',
    slug: 'charak-puja',
    name: 'Charak Puja & Chaitra Sankranti',
    nameBengali: 'চড়ক পূজা',
    kind: 'seasonal-observance',
    faith: 'hindu',
    timing: 'End of Chaitro (mid-April), closing the year',
    subtitle: 'Folk rites that close the Bengali year.',
    shortDescription:
      'Folk festivals on the last days of Chaitro — including Charak Puja, with its dramatic traditional rites and rural fairs (Gajan) — marking the end of the old year before Poila Boishakh.',
    bodySections: [
      {
        heading: 'The year turns',
        body:
          'Charak and Gajan are among Bengal’s oldest folk-religious observances, full of austerity, performance and village fairs, sending out the old year before the new Boishakh dawns.',
      },
    ],
    relatedMonthId: 'month-chaitro',
    relatedRituId: 'boshonto',
    relatedArticleIds: [],
    image: img('ritual-charak-puja', 'Charak Puja', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'ritual-lokkhi-panchali',
    slug: 'lokkhi-panchali-lakshmi-broto',
    name: 'Lokkhi Panchali & the Lakshmi Broto',
    nameBengali: 'লক্ষ্মীর পাঁচালী',
    kind: 'broto',
    faith: 'hindu',
    timing:
      'Every Thursday year-round; grandest at Kojagari Lakshmi Puja (full moon of Ashwin, Sharat)',
    subtitle: 'The recited verse-tale read in worship of Goddess Lakshmi.',
    shortDescription:
      'The Lokkhi Panchali is the lyrical verse-text (panchali) recited during the worship of Goddess Lakshmi — read by Bengali women every Thursday and, most grandly, at Kojagari Lakshmi Puja on the full-moon night of Ashwin.',
    bodySections: [
      {
        heading: 'The panchali and the broto',
        body:
          'A “panchali” is a recited devotional verse-narrative; a “broto” (brata) is a vow-observance with its own brata-katha. In countless Bengali homes, women lead the reading of the Lokkhi Panchali aloud — verses recited down the generations — as part of the Lakshmi broto, praying for the household’s prosperity and wellbeing.',
      },
      {
        heading: 'Kojagari Lakshmi Puja',
        body:
          'The most important Lakshmi worship in Bengal falls on the full moon of Ashwin (Kojagari Purnima), days after Durga Puja — when, by legend, the goddess roams the earth blessing tidy, devout homes. The day brings alpona floor-art, a special bhog (khichuri, labra, narus), and the full recitation of the Panchali.',
      },
    ],
    relatedMonthId: 'month-ashwin',
    relatedRituId: 'sharat',
    relatedFestivalIds: [],
    relatedArticleIds: [],
    image: img('ritual-lokkhi-panchali', 'Lokkhi Panchali', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
];

export const CALENDAR_OVERVIEW: CalendarOverview = {
  name: 'The Bengali Calendar',
  nameBengali: 'বঙ্গাব্দ',
  era: 'Bangabda',
  newYearDay: 'Poila Boishakh (~14–15 April)',
  yearFormula: 'Bengali year ≈ Gregorian year − 593',
  oneLine:
    'A solar calendar of six seasons and twelve months, with civil life following the sun and sacred festivals following the lunar tithi.',
  note:
    'Reformed under Emperor Akbar in the 16th century to align with the agricultural year. West Bengal uses the traditional astronomical reckoning; Bangladesh uses a reformed fixed calendar, so dates can differ by a day.',
};

export const panjika: Panjika = {
  id: 'panjika',
  slug: 'bengali-panjika',
  name: 'The Panjika',
  nameBengali: 'পঞ্জিকা',
  subtitle: 'The Bengali almanac that orders the sacred year.',
  shortDescription:
    'The Panjika is Bengal’s traditional almanac — the annual book of tithis, nakshatras and auspicious times that determines when festivals fall, when weddings may be held, and which days are favourable. For many families, buying a new Panjika is as essential to Poila Boishakh as new clothes.',
  fiveElements: [
    'Tithi (lunar day)',
    'Nakshatra (lunar mansion)',
    'Yoga',
    'Karana',
    'Baar (weekday)',
  ],
  bodySections: [
    {
      heading: 'The book every Bengali home keeps',
      body:
        'A new Panjika appears in the markets just before the Bengali New Year. Astrologers (and now apps) consult it for the exact moment of each tithi, the timing of pujas, and the auspicious windows (shubho din, shubho drishti) for weddings, travel, housewarmings, and a baby’s first rice. Older editions also carry ritual instructions, brata-kathas, health tips, and even almanac lore.',
    },
    {
      heading: 'Two systems, a famous divide',
      body:
        'Bengali panjikas split over how they calculate the heavens. The older Surya Siddhanta (Odrik) tradition rests on an ancient astronomical treatise; the Bisuddha (Drik) Siddhanta, dating from an 1890 reform, claims to match modern observation more closely. The two can place the same festival on slightly different days — a difference Bengali families know and choose between.',
    },
    {
      heading: 'The famous editions',
      body:
        'Rival publishing houses are household names: the Gupta Press Panjika (the oldest, from the 19th century), Benimadhab Shil’s Panjika, and P. M. Bagchi follow the Surya Siddhanta; the Vishuddha Siddhanta Panjika follows the Drik system. Each has its devoted readers.',
    },
  ],
  editions: [
    {
      name: 'Gupta Press Panjika',
      founded: '19th century (oldest)',
      system: 'surya-siddhanta',
      note: 'One of the most widely circulated; a household staple for generations.',
    },
    {
      name: 'Benimadhab Shil Panjika',
      system: 'surya-siddhanta',
      note: 'A long-trusted traditional edition.',
    },
    {
      name: 'P. M. Bagchi Panjika',
      founded: 'early 1900s',
      system: 'surya-siddhanta',
      note: 'The “Directory Panjika,” over a century old.',
    },
    {
      name: 'Vishuddha Siddhanta Panjika',
      founded: '1890',
      system: 'bisuddha-siddhanta',
      note: 'Follows the Drik (observational) system; considered more “scientific” by its adherents.',
    },
  ],
  scopeNote:
    'AklaCholo explains the Panjika as a cultural tradition. It does not compute live daily tithis or auspicious times — that requires a dedicated panchang data source.',
  relatedFestivalIds: ['festival-poila-boishakh'],
};
