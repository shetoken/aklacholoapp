/**
 * Natural Bengal — seed data for the Discover nature hub.
 *
 * Rivers, hills, mangroves, wildlife, agriculture, and the delta.
 * Pan-Bengal by design (West Bengal + Bangladesh). Facts verified before publish.
 */
import type { NaturalResource } from '@/types';
import { img } from '@/constants/images';

export const naturalResources: NaturalResource[] = [
  {
    id: 'nat-sundarbans',
    slug: 'sundarbans',
    category: 'mangrove-forest',
    name: 'The Sundarbans',
    nameBengali: 'সুন্দরবন',
    alsoKnownAs: 'The beautiful forest',
    region: 'sundarbans-delta',
    heritage: ['unesco-world-heritage', 'national-park', 'tiger-reserve', 'biosphere-reserve'],
    subtitle: 'The world’s largest mangrove forest — and the home of the tiger.',
    shortDescription:
      'The vast tidal mangrove forest at the mouth of the Ganga–Brahmaputra–Meghna delta — the largest such forest on earth — shared by India and Bangladesh and home to the Royal Bengal Tiger. A UNESCO World Heritage Site.',
    bodySections: [
      {
        heading: 'Where land and water blur',
        body:
          'Spanning roughly 10,000 sq km across the delta — about three-fifths of it in Bangladesh — the Sundarbans is a labyrinth of tidal rivers, mudflats and forested islands. It takes its name from the sundari (Heritiera fomes) mangrove tree.',
      },
      {
        heading: 'Kingdom of the tiger',
        body:
          'It shelters the Royal Bengal Tiger — famously a swimming, water-adapted population — alongside saltwater crocodiles, the Ganges river dolphin, olive ridley turtles, and some 260 bird species. The Indian and Bangladeshi sides are both UNESCO World Heritage Sites.',
      },
    ],
    keyFacts: [
      'Largest contiguous mangrove forest in the world (~10,000 sq km)',
      'Spans the Ganga–Brahmaputra–Meghna delta (India + Bangladesh)',
      'Home of the Royal Bengal Tiger',
      'UNESCO World Heritage Site (Indian side inscribed 1987)',
    ],
    significance:
      'A globally unique ecosystem, a natural storm barrier for Bengal, and the symbolic heart of Bengal’s wild nature.',
    relatedResourceIds: ['nat-royal-bengal-tiger', 'nat-ganga', 'nat-gangetic-dolphin'],
    relatedArticleIds: [],
    heroImage: img('nat-sundarbans', 'The Sundarbans mangrove forest', { width: 800, height: 500 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'nat-royal-bengal-tiger',
    slug: 'royal-bengal-tiger',
    category: 'wildlife',
    name: 'Royal Bengal Tiger',
    nameBengali: 'রয়েল বেঙ্গল টাইগার',
    region: 'sundarbans-delta',
    heritage: ['tiger-reserve'],
    subtitle: 'Bengal’s emblem — the swimming tiger of the mangroves.',
    shortDescription:
      'The Royal Bengal Tiger, Bengal’s most iconic creature, famously thrives in the Sundarbans, where it has adapted to swim between tidal islands — a uniquely amphibious tiger population.',
    bodySections: [
      {
        heading: 'A tiger that swims',
        body:
          'The Sundarbans tigers are unlike any other — strong swimmers crossing salt-water channels, living in one of the most challenging habitats on earth. The tiger is the enduring symbol of wild Bengal.',
      },
    ],
    keyFacts: ['Apex predator of the Sundarbans', 'Adapted to swim between delta islands'],
    significance: 'The natural emblem of Bengal and a flagship conservation species.',
    relatedResourceIds: ['nat-sundarbans'],
    relatedArticleIds: [],
    heroImage: img('nat-royal-bengal-tiger', 'Royal Bengal Tiger', { width: 800, height: 500 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'nat-gangetic-dolphin',
    slug: 'ganges-river-dolphin',
    category: 'wildlife',
    name: 'Ganges River Dolphin',
    nameBengali: 'শুশুক',
    alsoKnownAs: 'Shushuk',
    region: 'gangetic-plain',
    heritage: [],
    subtitle: 'The near-blind freshwater dolphin of Bengal’s rivers.',
    shortDescription:
      'A rare, nearly sightless freshwater dolphin that navigates the Ganga and its delta by echolocation — one of Bengal’s most threatened and remarkable aquatic creatures.',
    bodySections: [
      {
        heading: 'Listening through the water',
        body:
          'Almost blind, the Ganges river dolphin “sees” by sound, hunting in the silty rivers of the Bengal delta. It is an endangered indicator of the rivers’ health.',
      },
    ],
    significance: 'An endangered species and a barometer of the Ganga delta’s ecological health.',
    relatedResourceIds: ['nat-ganga', 'nat-sundarbans'],
    relatedArticleIds: [],
    heroImage: img('nat-gangetic-dolphin', 'Ganges River Dolphin', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'nat-jaldapara-rhino',
    slug: 'one-horned-rhino-dooars',
    category: 'wildlife',
    name: 'One-Horned Rhinoceros (Dooars)',
    nameBengali: 'একশৃঙ্গ গণ্ডার',
    region: 'dooars-terai',
    heritage: ['national-park'],
    subtitle: 'The great one-horned rhino of the northern grasslands.',
    shortDescription:
      'The Indian one-horned rhinoceros is protected in North Bengal’s Jaldapara and Gorumara National Parks, in the grassland-and-forest belt of the Dooars.',
    bodySections: [
      {
        heading: 'Giants of the Dooars',
        body:
          'In the tall grasslands of the Dooars, Jaldapara and Gorumara shelter the great one-horned rhinoceros, alongside elephants, bison, and rich birdlife — a different wild Bengal from the mangrove south.',
      },
    ],
    relatedResourceIds: ['nat-darjeeling-himalaya'],
    relatedArticleIds: [],
    heroImage: img('nat-jaldapara-rhino', 'One-horned rhinoceros in the Dooars', {
      width: 800,
      height: 500,
    }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'nat-darjeeling-himalaya',
    slug: 'darjeeling-himalayas',
    category: 'mountain-hill',
    name: 'The Darjeeling Himalayas & Kanchenjunga',
    nameBengali: 'দার্জিলিং হিমালয়',
    region: 'darjeeling-hills',
    heritage: ['unesco-world-heritage'],
    subtitle: 'Tea gardens beneath the third-highest peak on earth.',
    shortDescription:
      'Bengal’s Himalayan north — Darjeeling, its mist and tea estates, the views of Kanchenjunga, and the UNESCO-listed Darjeeling Himalayan Railway “toy train.”',
    bodySections: [
      {
        heading: 'Hills, mist, and mountain views',
        body:
          'Perched in the Himalayas, Darjeeling offers sweeping views of snow peaks — above all Kanchenjunga — from spots like Tiger Hill, amid verdant tea estates and Tibetan-influenced culture.',
      },
      {
        heading: 'The toy train',
        body:
          'The Darjeeling Himalayan Railway, a UNESCO World Heritage Site, climbs the hills in a beloved narrow-gauge “toy train” — itself one of Bengal’s great natural-and-engineering wonders.',
      },
    ],
    keyFacts: [
      'Views of Kanchenjunga, the world’s third-highest peak',
      'Darjeeling Himalayan Railway — UNESCO World Heritage Site',
      'Source region of perennial rivers (Teesta, Rangeet, Mahananda)',
    ],
    significance: 'Bengal’s alpine crown — landscape, tea, and a UNESCO-listed railway.',
    relatedResourceIds: ['nat-darjeeling-tea', 'nat-teesta'],
    relatedArticleIds: [],
    heroImage: img('nat-darjeeling-himalaya', 'Darjeeling Himalayas', { width: 800, height: 500 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'nat-ganga',
    slug: 'ganga-hooghly',
    category: 'river',
    name: 'The Ganga (Hooghly / Padma)',
    nameBengali: 'গঙ্গা',
    alsoKnownAs: 'Hooghly (W. Bengal) / Padma (Bangladesh)',
    region: 'india-bangladesh-shared',
    heritage: [],
    subtitle: 'The sacred mother river that made Bengal.',
    shortDescription:
      'The Ganga — flowing as the Hooghly through West Bengal and the Padma through Bangladesh — is Bengal’s lifeline, building the great delta and sustaining its cities, farms, and faith.',
    bodySections: [
      {
        heading: 'The river that built Bengal',
        body:
          'The Ganga’s silt created the fertile Bengal delta itself. As the Hooghly it bore Kolkata to prominence; as the Padma it shapes much of Bangladesh. It is sacred, economic, and ever-present in Bengali life.',
      },
    ],
    keyFacts: [
      'Principal river of Bengal',
      'Forms the Ganga–Brahmaputra–Meghna delta',
      'Sacred and economic lifeline',
    ],
    significance: 'The defining river of Bengal — ecological, economic, and spiritual.',
    relatedResourceIds: ['nat-sundarbans', 'nat-gangetic-dolphin', 'nat-rice'],
    relatedArticleIds: [],
    heroImage: img('nat-ganga', 'The Ganga river', { width: 800, height: 500 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'nat-teesta',
    slug: 'teesta',
    category: 'river',
    name: 'The Teesta',
    nameBengali: 'তিস্তা',
    region: 'darjeeling-hills',
    heritage: [],
    subtitle: 'The turquoise river born in the Himalayas.',
    shortDescription:
      'A perennial Himalayan river rising near Darjeeling, vital for hydropower and irrigation — and a long-standing point of water-sharing discussion between India and Bangladesh.',
    bodySections: [
      {
        heading: 'From the high hills',
        body:
          'The Teesta tumbles down from the eastern Himalayas through North Bengal, feeding hydropower and farmland, its blue-green waters threading the Dooars and plains.',
      },
    ],
    relatedResourceIds: ['nat-darjeeling-himalaya'],
    relatedArticleIds: [],
    heroImage: img('nat-teesta', 'The Teesta river', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'nat-damodar',
    slug: 'damodar',
    category: 'river',
    name: 'The Damodar',
    nameBengali: 'দামোদর',
    alsoKnownAs: 'The "Sorrow of Bengal"',
    region: 'rarh-western',
    heritage: [],
    subtitle: 'Once Bengal’s “sorrow,” now tamed for power and farms.',
    shortDescription:
      'Historically prone to devastating floods — earning the name “Sorrow of Bengal” — the Damodar now drives the Damodar Valley industrial region with dams, irrigation, and power.',
    bodySections: [
      {
        heading: 'Sorrow turned to strength',
        body:
          'For centuries the Damodar’s floods ravaged western Bengal. Dammed and harnessed in the 20th century, it now waters the fields and powers the industry of the Damodar Valley.',
      },
    ],
    relatedResourceIds: ['nat-coal'],
    relatedArticleIds: [],
    heroImage: img('nat-damodar', 'The Damodar river', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'nat-darjeeling-tea',
    slug: 'darjeeling-tea',
    category: 'agriculture',
    name: 'Darjeeling Tea',
    nameBengali: 'দার্জিলিং চা',
    alsoKnownAs: 'The "Champagne of Teas"',
    region: 'darjeeling-hills',
    heritage: ['gi-protected'],
    subtitle: 'The world-famous tea grown in Himalayan mist.',
    shortDescription:
      'Grown on the misty slopes of the Darjeeling Himalayas, Darjeeling tea is prized worldwide for its delicate muscatel flavour — a Geographical Indication–protected treasure of Bengal.',
    bodySections: [
      {
        heading: 'Champagne of teas',
        body:
          'High altitude, cool mist, and careful plucking give Darjeeling tea its uniquely fragrant, light character. It carries Geographical Indication protection, marking it as a product that can only truly come from these hills.',
      },
    ],
    keyFacts: [
      'Geographical Indication (GI) protected',
      'Grown in the Darjeeling Himalayas',
      'Famed for muscatel flavour',
    ],
    significance: 'A globally renowned product and a pillar of the Darjeeling hill economy.',
    relatedResourceIds: ['nat-darjeeling-himalaya'],
    relatedArticleIds: [],
    heroImage: img('nat-darjeeling-tea', 'Darjeeling tea gardens', { width: 800, height: 500 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'nat-jute',
    slug: 'jute',
    category: 'agriculture',
    name: 'Jute — The Golden Fibre',
    nameBengali: 'পাট',
    alsoKnownAs: 'Sonali Aansh (the golden fibre)',
    region: 'gangetic-plain',
    heritage: [],
    subtitle: 'The “golden fibre” at the heart of Bengal’s economy.',
    shortDescription:
      'Bengal is the heartland of jute — the “golden fibre” — long central to its agriculture and industry. West Bengal is India’s largest producer.',
    bodySections: [
      {
        heading: 'Sonali Aansh',
        body:
          'Jute, the “golden fibre,” thrives in the warm, wet delta. For generations it has clothed the world in sacking and rope, and shaped the mills and ports of the Hooghly. Today it returns to favour as a sustainable, biodegradable material.',
      },
    ],
    keyFacts: [
      'West Bengal: India’s largest jute producer',
      'Known as the "golden fibre"',
      'Sustainable, biodegradable',
    ],
    significance:
      'Historically and economically central to Bengal; increasingly valued as an eco-material.',
    relatedResourceIds: ['nat-ganga'],
    relatedArticleIds: [],
    heroImage: img('nat-jute', 'Jute — the golden fibre', { width: 800, height: 500 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'nat-rice',
    slug: 'rice-paddy',
    category: 'agriculture',
    name: 'Rice & the Fertile Delta',
    nameBengali: 'ধান',
    region: 'gangetic-plain',
    heritage: [],
    subtitle: 'The staple that feeds Bengal — grown in its rich delta soil.',
    shortDescription:
      'Rice is the staple of Bengal and the foundation of its cuisine, grown across the fertile alluvial plains built by the Ganga. The delta’s rich soil makes Bengal one of India’s great rice bowls.',
    bodySections: [
      {
        heading: 'Rice and fish',
        body:
          '“Maachhe bhaate Bangali” — fish and rice make a Bengali. The delta’s fertile soil yields the rice at the centre of every Bengali meal, sustained by the rivers and monsoon.',
      },
    ],
    relatedResourceIds: ['nat-ganga'],
    relatedArticleIds: [],
    heroImage: img('nat-rice', 'Rice paddies in the Bengal delta', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'nat-coal',
    slug: 'raniganj-coalfield',
    category: 'mineral',
    name: 'Coal — The Raniganj Coalfield',
    nameBengali: 'কয়লা',
    region: 'rarh-western',
    heritage: [],
    subtitle: 'One of India’s oldest and richest coal belts.',
    shortDescription:
      'Western Bengal holds rich coal deposits in the Raniganj coalfield, fuelling the Asansol–Durgapur industrial belt — one of India’s earliest centres of coal mining and heavy industry.',
    bodySections: [
      {
        heading: 'The industrial heartland',
        body:
          'The Raniganj coalfield powered Bengal’s industrialisation, anchoring the Asansol–Durgapur belt of steel, power, and engineering. The Rarh region also yields iron ore, limestone, dolomite, and china clay.',
      },
    ],
    keyFacts: [
      'Raniganj coalfield — among India’s oldest',
      'Powers the Asansol–Durgapur industrial belt',
    ],
    significance: 'The mineral foundation of Bengal’s heavy industry.',
    relatedResourceIds: ['nat-damodar'],
    relatedArticleIds: [],
    heroImage: img('nat-coal', 'Raniganj coalfield region', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'nat-bengal-coast',
    slug: 'bay-of-bengal-coast',
    category: 'beach-coast',
    name: 'The Bay of Bengal Coast',
    nameBengali: 'বঙ্গোপসাগর উপকূল',
    region: 'coastal',
    heritage: [],
    subtitle: 'Long delta beaches from Digha to Cox’s Bazar.',
    shortDescription:
      'Bengal’s coastline along the Bay of Bengal includes popular West Bengal beaches like Digha, Mandarmani, Tajpur and Bakkhali — and, on the Bangladesh side, Cox’s Bazar, among the longest natural sea beaches in the world.',
    bodySections: [
      {
        heading: 'Where the delta meets the sea',
        body:
          'The gentle, sediment-rich beaches of Digha, Mandarmani and Bakkhali draw Kolkata’s weekenders, while across the border Cox’s Bazar stretches for an extraordinary length along the Bay of Bengal.',
      },
    ],
    keyFacts: [
      'Digha, Mandarmani, Tajpur, Bakkhali (West Bengal)',
      'Cox’s Bazar (Bangladesh) — among the world’s longest sea beaches',
    ],
    significance: 'Bengal’s seaside — leisure, fishing, and the meeting of delta and ocean.',
    relatedResourceIds: ['nat-sundarbans'],
    relatedArticleIds: [],
    heroImage: img('nat-bengal-coast', 'Bay of Bengal coast', { width: 800, height: 500 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'nat-east-kolkata-wetlands',
    slug: 'east-kolkata-wetlands',
    category: 'wetland',
    name: 'East Kolkata Wetlands',
    nameBengali: 'পূর্ব কলকাতা জলাভূমি',
    region: 'gangetic-plain',
    heritage: ['ramsar-wetland'],
    subtitle: 'A living system that recycles a city’s water into food.',
    shortDescription:
      'A Ramsar-listed complex of natural and human-made wetlands east of Kolkata that treats the city’s wastewater and turns it into one of the world’s largest wastewater-fed aquaculture and farming systems.',
    bodySections: [
      {
        heading: 'Nature as infrastructure',
        body:
          'The East Kolkata Wetlands use sunlight and natural processes to clean Kolkata’s sewage, with the nutrients sustaining vast fish farms and vegetable plots — a globally studied model of ecological engineering.',
      },
    ],
    keyFacts: [
      'Ramsar Wetland of International Importance',
      'One of the world’s largest wastewater-fed aquaculture systems',
    ],
    significance: 'A unique example of nature providing a city’s water treatment and food.',
    relatedResourceIds: ['nat-ganga'],
    relatedArticleIds: [],
    heroImage: img('nat-east-kolkata-wetlands', 'East Kolkata Wetlands', {
      width: 800,
      height: 500,
    }),
    isFlagship: false,
    isStub: true,
  },
];
