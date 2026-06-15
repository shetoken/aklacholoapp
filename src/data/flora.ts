/**
 * Bagan — flora of Bengal: fruits, vegetables, and flowers.
 *
 * Seasonality and festival cross-links are first-class. GI tags verified only.
 */
import type { FloraItem } from '@/types';
import { img } from '@/constants/images';

export const floraItems: FloraItem[] = [
  {
    id: 'flora-mango',
    slug: 'aam-mango',
    category: 'fruit',
    name: 'Mango (Aam)',
    nameBengali: 'আম',
    alsoKnownAs: 'The King of Fruits',
    season: 'summer',
    borderSide: 'across-bengal',
    hasGITag: true,
    giNote:
      'Several Bengal varieties hold GI tags — Himsagar (Malda Khirsapati), Malda Fazli (GI 2008), and Laxmanbhog.',
    subtitle: 'The king of fruits — Bengal’s summer obsession.',
    shortDescription:
      'Mango is the crown of the Bengali summer, grown above all in Malda, Murshidabad and Bankura (and Rajshahi across the border). Bengal’s prized varieties include the GI-tagged Himsagar and Fazli.',
    bodySections: [
      {
        heading: 'A variety for every taste',
        body:
          'Himsagar — fibreless, fragrant, deeply sweet — is the connoisseur’s favourite. Fazli is huge and late; Langra is sweet with a faint tang; Laxmanbhog, Gopalbhog, and Amrapali each have their devotees. Malda alone grows dozens of cultivars.',
      },
      {
        heading: 'More than a fruit',
        body:
          'From green-mango chutney and aam-pora shorbot to the ritual of gifting the season’s best mangoes, the fruit is woven into Bengali summer life on both sides of the border.',
      },
    ],
    culturalNote:
      'Mango season is a Bengali event in itself; prized boxes of Himsagar and Fazli are gifted as marks of esteem.',
    varieties: [
      'Himsagar (Khirsapati)',
      'Fazli',
      'Langra',
      'Laxmanbhog',
      'Gopalbhog',
      'Amrapali',
      'Kishanbhog',
    ],
    relatedItemIds: ['flora-jackfruit', 'flora-litchi'],
    relatedArticleIds: [],
    image: img('flora-mango', 'Bengali mangoes', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'flora-jackfruit',
    slug: 'kanthal-jackfruit',
    category: 'fruit',
    name: 'Jackfruit (Kanthal)',
    nameBengali: 'কাঁঠাল',
    season: 'summer',
    borderSide: 'across-bengal',
    subtitle: 'The giant fruit — eaten ripe, and cooked young.',
    shortDescription:
      'A massive summer fruit eaten sweet and ripe, while the young green jackfruit (enchor) is cooked as a much-loved vegetable, the “tree mutton.” It is the national fruit of Bangladesh.',
    bodySections: [
      {
        heading: 'Two fruits in one',
        body:
          'Ripe kanthal is intensely sweet and aromatic; unripe enchor is cooked into a hearty curry prized by vegetarians. Jackfruit is the national fruit of Bangladesh.',
      },
    ],
    culturalNote: 'National fruit of Bangladesh; enchor (green jackfruit) is a classic Bengali dish.',
    relatedItemIds: ['flora-mango'],
    relatedArticleIds: [],
    image: img('flora-jackfruit', 'Jackfruit', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'flora-litchi',
    slug: 'lichu-litchi',
    category: 'fruit',
    name: 'Litchi (Lichu)',
    nameBengali: 'লিচু',
    season: 'summer',
    borderSide: 'across-bengal',
    subtitle: 'Jewel-red, perfumed, and fleeting.',
    shortDescription:
      'A brief, beloved early-summer fruit — fragrant, translucent and sweet — grown widely in Bengal, with Muzaffarpur-style orchards and local Bengal cultivars.',
    bodySections: [
      {
        heading: 'The short season',
        body:
          'Litchi arrives for only a few weeks alongside the early mangoes, its perfume and jewel-like flesh making it one of the most anticipated fruits of the Bengali summer.',
      },
    ],
    relatedItemIds: ['flora-mango'],
    relatedArticleIds: [],
    image: img('flora-litchi', 'Litchi', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'flora-coconut-palm',
    slug: 'narkel-taal',
    category: 'fruit',
    name: 'Coconut & Palm (Narkel, Taal)',
    nameBengali: 'নারকেল, তাল',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'The sweet heart of Bengali sweets and snacks.',
    shortDescription:
      'Coconut (narkel) is central to Bengali sweets like narkel naru, while the seasonal palm fruit (taal) flavours monsoon-time treats such as taler bora.',
    bodySections: [
      {
        heading: 'Sweetness from the palm',
        body:
          'Grated coconut fills countless Bengali sweets and the Poush Parbon pithe; ripe taal pulp gives the late-monsoon taler bora and pithe their distinctive flavour.',
      },
    ],
    culturalNote: 'Coconut is essential to Bengali sweet-making and festival pithe.',
    relatedItemIds: [],
    relatedArticleIds: [],
    image: img('flora-coconut-palm', 'Coconut and palm', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'flora-potol',
    slug: 'potol-pointed-gourd',
    category: 'vegetable',
    name: 'Pointed Gourd (Potol)',
    nameBengali: 'পটল',
    season: 'summer',
    borderSide: 'across-bengal',
    subtitle: 'The quintessential Bengali summer vegetable.',
    shortDescription:
      'A small green gourd at the heart of Bengali summer cooking — from simple potol bhaja to the festive, stuffed potoler dorma.',
    bodySections: [
      {
        heading: 'Humble to festive',
        body:
          'Potol appears everywhere in the Bengali summer kitchen, from everyday jhol to the elaborate stuffed potoler dorma served at special meals.',
      },
    ],
    relatedItemIds: ['flora-uchche'],
    relatedArticleIds: [],
    image: img('flora-potol', 'Pointed gourd (potol)', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'flora-uchche',
    slug: 'uchche-korola-bitter-gourd',
    category: 'vegetable',
    name: 'Bitter Gourd (Uchche / Korola)',
    nameBengali: 'উচ্ছে, করলা',
    season: 'summer',
    borderSide: 'across-bengal',
    subtitle: 'The bitter note that begins a Bengali meal.',
    shortDescription:
      'The bitter gourd, the soul of the dish shukto and of the Bengali habit of beginning a meal with something bitter (tita) to awaken the palate.',
    bodySections: [
      {
        heading: 'Bitter first',
        body:
          'Bengali meals traditionally open with a bitter dish — often uchche — believed to cleanse the palate and aid digestion. It is essential to the mixed-vegetable shukto.',
      },
    ],
    culturalNote: 'Central to shukto and the Bengali tradition of starting a meal with a bitter dish.',
    relatedItemIds: ['flora-potol'],
    relatedArticleIds: [],
    image: img('flora-uchche', 'Bitter gourd', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'flora-shaak',
    slug: 'shaak-leafy-greens',
    category: 'vegetable',
    name: 'Leafy Greens (Shaak)',
    nameBengali: 'শাক',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'The everyday greens of the Bengali plate.',
    shortDescription:
      'A whole family of leafy greens — pui, lau, note, kolmi, palong — stir-fried or stewed as shaak, an everyday staple eaten early in the meal.',
    bodySections: [
      {
        heading: 'A green for every season',
        body:
          'From monsoon pui shaak to winter palong (spinach), Bengali greens are eaten daily, lightly cooked with mustard oil and a little phoron (tempering).',
      },
    ],
    varieties: ['Pui shaak', 'Lau shaak', 'Note shaak', 'Kolmi shaak', 'Palong shaak'],
    relatedItemIds: [],
    relatedArticleIds: [],
    image: img('flora-shaak', 'Leafy greens (shaak)', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'flora-winter-veg',
    slug: 'winter-vegetables',
    category: 'vegetable',
    name: 'Winter Vegetables',
    nameBengali: 'শীতের সবজি',
    season: 'winter',
    borderSide: 'across-bengal',
    subtitle: 'Bengal’s abundant, beloved cold-season harvest.',
    shortDescription:
      'Winter is Bengal’s vegetable feast — fresh cauliflower (phulkopi), peas (motorshuti), new potatoes, tomatoes and beans — the season of dishes like phulkopir dalna and koraishutir kochuri.',
    bodySections: [
      {
        heading: 'The season of plenty',
        body:
          'The Bengali winter brings the richest produce of the year: tender cauliflower, sweet green peas, new potatoes and more, celebrated in countless seasonal dishes.',
      },
    ],
    varieties: ['Phulkopi (cauliflower)', 'Motorshuti (green peas)', 'New potato', 'Tomato', 'Beans'],
    relatedItemIds: [],
    relatedArticleIds: [],
    image: img('flora-winter-veg', 'Winter vegetables', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'flora-kash',
    slug: 'kash-phul',
    category: 'flower',
    name: 'Kash Phul (Kans Grass)',
    nameBengali: 'কাশফুল',
    season: 'autumn',
    borderSide: 'across-bengal',
    subtitle: 'White plumes that announce Durga Puja.',
    shortDescription:
      'The feathery white kash flowers that sweep across riverbanks and fields in autumn (sharat) — the unmistakable herald of Durga Puja and the most poetic image of the Bengali autumn.',
    bodySections: [
      {
        heading: 'The signal of sharat',
        body:
          'When fields turn white with swaying kash and the sky clears blue, every Bengali knows the goddess is coming. Kash phul is the visual soul of sharat — immortalised in Satyajit Ray’s Pather Panchali.',
      },
    ],
    culturalNote: 'The defining flower of the autumn (sharat) season and the run-up to Durga Puja.',
    relatedFestivalIds: ['festival-durga-puja'],
    relatedItemIds: ['flora-shiuli'],
    relatedArticleIds: [],
    image: img('flora-kash', 'Kash phul', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'flora-shiuli',
    slug: 'shiuli-shefali',
    category: 'flower',
    name: 'Shiuli (Night-flowering Jasmine)',
    nameBengali: 'শিউলি, শেফালি',
    alsoKnownAs: 'Shefali / Parijat',
    season: 'autumn',
    borderSide: 'across-bengal',
    subtitle: 'The fragrant flower that falls at dawn.',
    shortDescription:
      'A small white flower with an orange stem that blooms by night and carpets the ground by morning — its delicate fragrance is the scent of the Bengali autumn and Durga Puja.',
    bodySections: [
      {
        heading: 'Gathered at dawn',
        body:
          'Children gather fallen shiuli at first light during sharat; the flowers are strung, offered in worship, and their orange stems even used as a natural dye. Few scents say “Puja is here” more than shiuli.',
      },
    ],
    culturalNote: 'Associated with autumn, Durga Puja worship, and childhood memory; used in offerings.',
    relatedFestivalIds: ['festival-durga-puja'],
    relatedItemIds: ['flora-kash'],
    relatedArticleIds: [],
    image: img('flora-shiuli', 'Shiuli flower', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'flora-padma',
    slug: 'padma-lotus',
    category: 'flower',
    name: 'Lotus (Padma)',
    nameBengali: 'পদ্ম',
    season: 'autumn',
    borderSide: 'across-bengal',
    subtitle: 'The sacred bloom offered to the goddess.',
    shortDescription:
      'The lotus, sacred across Bengali faith and art, is essential to Durga Puja — by legend, the 108 lotuses of Rama’s autumn worship of Durga. It is the national flower of India.',
    bodySections: [
      {
        heading: '108 lotuses',
        body:
          'The lotus is inseparable from Durga Puja, recalling the legend of Rama’s akaal bodhon (untimely worship) with 108 blooms. It is a recurring emblem of purity in Bengali poetry and devotion.',
      },
    ],
    culturalNote: 'Sacred flower of Durga Puja (the 108 lotuses); national flower of India.',
    relatedFestivalIds: ['festival-durga-puja'],
    relatedItemIds: [],
    relatedArticleIds: [],
    image: img('flora-padma', 'Lotus (padma)', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'flora-rajanigandha',
    slug: 'rajanigandha-tuberose',
    category: 'flower',
    name: 'Rajanigandha (Tuberose)',
    nameBengali: 'রজনীগন্ধা',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'The fragrant white spike of weddings and welcome.',
    shortDescription:
      'A tall, intensely fragrant white flower beloved for bouquets, garlands, and weddings — a flower of celebration and gracious welcome in Bengali life.',
    bodySections: [
      {
        heading: 'The scent of occasion',
        body:
          'Rajanigandha’s heady evening fragrance makes it a favourite for weddings, garlands, and gifting — a flower that marks moments of joy and respect.',
      },
    ],
    relatedItemIds: ['flora-padma'],
    relatedArticleIds: [],
    image: img('flora-rajanigandha', 'Rajanigandha tuberose', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'flora-jaba',
    slug: 'jaba-hibiscus',
    category: 'flower',
    name: 'Jaba (Hibiscus)',
    nameBengali: 'জবা',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'The red flower offered to Goddess Kali.',
    shortDescription:
      'The deep-red hibiscus, the flower most associated with the worship of Goddess Kali — a vivid presence in Bengali temples and home shrines.',
    bodySections: [
      {
        heading: 'Red for the Mother',
        body:
          'The crimson jaba is the classic offering to Kali, its bold colour central to Shyama/Kali worship and a familiar sight in Bengali courtyards year-round.',
      },
    ],
    culturalNote: 'The flower traditionally offered in the worship of Goddess Kali.',
    relatedFestivalIds: ['festival-kali-puja'],
    relatedItemIds: [],
    relatedArticleIds: [],
    image: img('flora-jaba', 'Jaba hibiscus', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
];
