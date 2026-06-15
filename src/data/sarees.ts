/**
 * Bengali Sarees — seed data for the Discover hub.
 *
 * Article id reference (from src/data/articles.ts merged catalog):
 *   art_kolka              — What is Kolka?
 *   art_kantha             — What is Kantha?
 *   art_terracotta         — Bishnupur Terracotta
 *   art_journey_festivals  — Festivals (includes Durga Puja)
 *
 * Encyclopedia / journey ids also in catalog but not linked here yet.
 */
import type { Saree } from '@/types';
import { img } from '@/constants/images';

export const sarees: Saree[] = [
  {
    id: 'saree-jamdani',
    slug: 'jamdani',
    axis: 'type',
    name: 'Jamdani (Dhakai Jamdani)',
    nameBengali: 'জামদানি',
    nameRomanized: 'Jamdani',
    subtitle: 'Patterns woven into air — Bengal’s most celebrated muslin.',
    fabric: 'muslin',
    regions: ['dhaka-bangladesh', 'shantipur-phulia-wb'],
    heritage: ['unesco-intangible-heritage', 'gi-protected', 'ceremonial'],
    motifs: ['buti (small floral)', 'panna hazar (thousand emeralds)', 'geometric', 'paisley'],
    occasions: ['weddings', 'festivals', 'formal occasions'],
    shortDescription:
      'A handwoven muslin saree famed for its intricate supplementary-weft patterns, rooted in Dhaka. The weaving tradition is recognised by UNESCO as Intangible Cultural Heritage.',
    bodySections: [
      {
        id: 'sec_woven_air',
        heading: 'Woven air',
        body:
          'Jamdani is among the finest expressions of the Bengali loom — sheer muslin carrying patterns so delicate they seem suspended in the cloth rather than woven into it. Each motif is added by hand during weaving, thread by thread, with no mechanical shortcut.',
      },
      {
        id: 'sec_thousand_emeralds',
        heading: 'A thousand emeralds',
        body:
          'The most prized designs, like the panna hazar (“thousand emeralds”), scatter tiny repeating motifs across the field. A single fine saree can take months to complete, which is why each one is regarded as a small masterpiece.',
      },
      {
        id: 'sec_dhaka_shared',
        heading: 'Rooted in Dhaka, shared by all Bengal',
        body:
          'Dhakai Jamdani takes its name from Dhaka, the historic heart of muslin weaving, while Shantipur and Phulia in West Bengal keep their own living jamdani traditions. It is a craft that belongs to the whole of Bengal.',
      },
    ],
    relatedCreatorTags: ['jamdani'],
    relatedShopProductIds: [],
    relatedArticleIds: ['art_kolka'],
    relatedSareeIds: ['saree-muslin', 'saree-tant'],
    heroImage: img('saree-jamdani', 'Jamdani muslin saree', { aspectRatio: 0.75 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'saree-tant',
    slug: 'tant',
    axis: 'type',
    name: 'Tant (Taant)',
    nameBengali: 'তাঁত',
    nameRomanized: 'Tant',
    subtitle: 'The everyday saree — light, crisp, and made for Bengal’s heat.',
    fabric: 'cotton',
    regions: ['shantipur-phulia-wb', 'tangail', 'nadia-wb'],
    heritage: ['gi-protected', 'everyday'],
    motifs: ['wide contrasting borders', 'floral', 'paisley', 'temple (rajmahal)'],
    occasions: ['daily wear', 'gatherings', 'festivals'],
    shortDescription:
      'A light, breathable cotton handloom saree, crisp in texture with bold borders — the everyday classic of Bengal. Phulia and Tangail are its best-known varieties.',
    bodySections: [
      {
        id: 'sec_climate',
        heading: 'Made for the climate',
        body:
          'Tant means “loom.” Woven from fine cotton, the tant saree is airy and breathable, ideal for Bengal’s hot, humid days — the saree a Bengali woman reaches for again and again.',
      },
      {
        id: 'sec_borders',
        heading: 'Crisp lines, bold borders',
        body:
          'Tant is known for its crisp hand-feel and wide, contrasting borders. Phulia and Tangail weavers are especially celebrated for the quality and the patterning of their cloth.',
      },
    ],
    relatedCreatorTags: ['tant', 'block-print-dye'],
    relatedShopProductIds: [],
    relatedArticleIds: [],
    relatedSareeIds: ['saree-jamdani', 'saree-laalpaar-shada'],
    heroImage: img('saree-tant', 'Tant cotton saree', { aspectRatio: 0.75 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'saree-baluchari',
    slug: 'baluchari',
    axis: 'type',
    name: 'Baluchari',
    nameBengali: 'বালুচরী',
    nameRomanized: 'Baluchari',
    subtitle: 'Silk that tells stories — mythology woven into the pallu.',
    fabric: 'silk',
    regions: ['murshidabad-wb', 'bishnupur-wb'],
    heritage: ['gi-protected', 'ceremonial'],
    motifs: ['mythological scenes', 'epic narratives on pallu', 'figurative panels'],
    occasions: ['weddings', 'festivals', 'special occasions'],
    shortDescription:
      'An opulent silk saree whose pallu depicts scenes from mythology and epics. It first flourished in Murshidabad and is today centred on Bishnupur.',
    bodySections: [
      {
        id: 'sec_narrates',
        heading: 'A saree that narrates',
        body:
          'What sets Baluchari apart is the pallu — large woven panels that depict scenes from the Ramayana, the Mahabharata, and courtly life. Wearing one is like wearing a story.',
      },
      {
        id: 'sec_murshidabad_bishnupur',
        heading: 'From Murshidabad to Bishnupur',
        body:
          'The craft rose in the Murshidabad region and later found a lasting home in Bishnupur — the same temple town famed for its terracotta. Two great crafts, one remarkable place.',
      },
    ],
    relatedCreatorTags: ['baluchari'],
    relatedShopProductIds: [],
    relatedArticleIds: ['art_terracotta'],
    relatedSareeIds: ['saree-swarnachari', 'saree-murshidabad-silk'],
    heroImage: img('saree-baluchari', 'Baluchari silk saree', { aspectRatio: 0.75 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'saree-swarnachari',
    slug: 'swarnachari',
    axis: 'type',
    name: 'Swarnachari',
    nameBengali: 'স্বর্ণচরী',
    nameRomanized: 'Swarnachari',
    subtitle: 'Baluchari at its most regal — woven with gold and silver.',
    fabric: 'silk',
    regions: ['bishnupur-wb'],
    heritage: ['gi-protected', 'ceremonial'],
    motifs: ['mythological scenes in gold/silver thread', 'ornate pallu'],
    occasions: ['weddings', 'grand occasions'],
    shortDescription:
      'The luxe sibling of Baluchari — the same narrative weaving, enriched with gold and silver thread (swarna = gold).',
    bodySections: [
      {
        id: 'sec_gold_thread',
        heading: 'Gold-threaded storytelling',
        body:
          'Swarnachari takes the figurative Baluchari tradition and lifts it with metallic gold and silver thread, giving the woven scenes a luminous, regal glow reserved for the grandest occasions.',
      },
    ],
    relatedCreatorTags: ['baluchari'],
    relatedShopProductIds: [],
    relatedArticleIds: ['art_terracotta'],
    relatedSareeIds: ['saree-baluchari'],
    heroImage: img('saree-swarnachari', 'Swarnachari silk saree', { aspectRatio: 0.75 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'saree-garad',
    slug: 'garad',
    axis: 'type',
    name: 'Garad',
    nameBengali: 'গরদ',
    nameRomanized: 'Garad',
    subtitle: 'Pure white silk, an auspicious red border.',
    fabric: 'silk',
    regions: ['murshidabad-wb', 'across-bengal'],
    heritage: ['ceremonial'],
    motifs: ['plain white body', 'red border', 'small woven motifs'],
    occasions: ['pujas', 'religious ceremonies', 'Durga Puja'],
    shortDescription:
      'A pure-silk saree, white-bodied with a red border, traditionally worn by Bengali Hindu women on auspicious and religious occasions.',
    bodySections: [
      {
        id: 'sec_white_red',
        heading: 'White, red, and sacred',
        body:
          'Garad’s undyed white silk and red border carry deep auspicious meaning, making it a saree of pujas and ceremonies. It belongs to the beloved laal-paar shada (white-with-red-border) family.',
      },
    ],
    relatedCreatorTags: ['saree-artisan'],
    relatedShopProductIds: [],
    relatedArticleIds: ['art_journey_festivals'],
    relatedSareeIds: ['saree-korial', 'saree-laalpaar-shada'],
    heroImage: img('saree-garad', 'Garad silk saree', { aspectRatio: 0.75 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'saree-korial',
    slug: 'korial',
    axis: 'type',
    name: 'Korial',
    nameBengali: 'কোরিয়াল',
    nameRomanized: 'Korial',
    subtitle: 'The iconic white-and-red saree of Durga Puja.',
    fabric: 'silk',
    regions: ['across-bengal'],
    heritage: ['ceremonial'],
    motifs: ['crisp white body', 'bold red border'],
    occasions: ['Durga Puja', 'Sindoor Khela', 'weddings'],
    shortDescription:
      'The quintessential Bengali ceremonial saree — crisp white with a bold red border, worn especially during Durga Puja. Closely related to Garad.',
    bodySections: [
      {
        id: 'sec_celebration',
        heading: 'The image of Bengali celebration',
        body:
          'When the world pictures a Bengali woman at Durga Puja, it pictures the Korial: white silk, a striking red border, paired with conch-shell bangles and red lac. It is grace distilled into two colours.',
      },
    ],
    relatedCreatorTags: ['saree-artisan'],
    relatedShopProductIds: [],
    relatedArticleIds: ['art_journey_festivals'],
    relatedSareeIds: ['saree-garad', 'saree-laalpaar-shada'],
    heroImage: img('saree-korial', 'Korial ceremonial saree', { aspectRatio: 0.75 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'saree-murshidabad-silk',
    slug: 'murshidabad-silk',
    axis: 'type',
    name: 'Murshidabad Silk',
    nameBengali: 'মুর্শিদাবাদ সিল্ক',
    nameRomanized: 'Murshidabad Silk',
    subtitle: 'Rich silk and fine zari from the old Nawabi capital.',
    fabric: 'silk',
    regions: ['murshidabad-wb'],
    heritage: ['ceremonial'],
    motifs: ['floral', 'geometric', 'gold/silver zari work'],
    occasions: ['festivals', 'weddings'],
    shortDescription:
      'Pure-silk sarees from Murshidabad, known for rich texture, vibrant colour, and intricate zari (metallic thread) work.',
    bodySections: [
      {
        id: 'sec_nawabs',
        heading: 'Silk of the Nawabs',
        body:
          'Woven in Murshidabad — once the capital of Bengal — these silks carry floral and geometric motifs in gold and silver zari, a legacy of the region’s long courtly history of luxury textiles.',
      },
    ],
    relatedCreatorTags: ['saree-artisan'],
    relatedShopProductIds: [],
    relatedArticleIds: [],
    relatedSareeIds: ['saree-baluchari'],
    heroImage: img('saree-murshidabad', 'Murshidabad silk saree', { aspectRatio: 0.75 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'saree-tussar',
    slug: 'tussar-silk',
    axis: 'type',
    name: 'Tussar Silk',
    nameBengali: 'তসর সিল্ক',
    nameRomanized: 'Tussar',
    subtitle: 'Wild silk with a natural golden sheen.',
    fabric: 'tussar-silk',
    regions: ['birbhum-wb', 'across-bengal'],
    heritage: [],
    motifs: ['natural texture', 'hand-painted', 'kantha-embroidered variants'],
    occasions: ['festivals', 'day occasions'],
    shortDescription:
      'A textured wild silk prized for its natural golden lustre, produced widely in West Bengal and often hand-painted or kantha-embroidered.',
    bodySections: [
      {
        id: 'sec_gold_wild',
        heading: 'Gold from the wild',
        body:
          'Tussar is a wild silk with a warm, uneven texture and a natural golden glow. Its character makes it a favourite base for hand-painting and kantha embroidery.',
      },
    ],
    relatedCreatorTags: ['kantha', 'saree-artisan'],
    relatedShopProductIds: [],
    relatedArticleIds: ['art_kantha'],
    relatedSareeIds: ['saree-kantha-stitch'],
    heroImage: img('saree-tussar', 'Tussar silk saree', { aspectRatio: 0.75 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'saree-kantha-stitch',
    slug: 'kantha-stitch',
    axis: 'type',
    name: 'Kantha Stitch Saree',
    nameBengali: 'কাঁথা স্টিচ',
    nameRomanized: 'Kantha',
    subtitle: 'A running stitch that turns cloth into folklore.',
    fabric: 'mixed',
    regions: ['birbhum-wb', 'across-bengal'],
    heritage: [],
    motifs: ['running-stitch embroidery', 'folk scenes', 'flora and fauna', 'narrative panels'],
    occasions: ['festivals', 'everyday elegance', 'gifting'],
    shortDescription:
      'A saree adorned with Bengal’s signature kantha running-stitch embroidery, its surface alive with folk motifs and stories.',
    bodySections: [
      {
        id: 'sec_stories_thread',
        heading: 'Stories told in thread',
        body:
          'Kantha began as the art of stitching old cloth into new life. On a saree, that same patient running stitch becomes a canvas — birds, vines, village scenes, and folk tales rendered entirely by hand.',
      },
    ],
    relatedCreatorTags: ['kantha'],
    relatedShopProductIds: [],
    relatedArticleIds: ['art_kantha'],
    relatedSareeIds: ['saree-tussar'],
    heroImage: img('saree-kantha-stitch', 'Kantha stitch saree', { aspectRatio: 0.75 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'saree-muslin',
    slug: 'muslin',
    axis: 'type',
    name: 'Muslin (Dhaka Muslin)',
    nameBengali: 'মসলিন',
    nameRomanized: 'Muslin',
    subtitle: 'Once called “woven air” — the cloth that clothed emperors.',
    fabric: 'muslin',
    regions: ['dhaka-bangladesh'],
    heritage: ['ceremonial'],
    motifs: ['ultra-fine plain weave', 'jamdani-patterned variants'],
    occasions: ['heritage / heirloom', 'formal occasions'],
    shortDescription:
      'The legendary ultra-fine cotton of Bengal, so delicate it was poetically called “woven air.” Once the most coveted textile in the world.',
    bodySections: [
      {
        id: 'sec_famous_cloth',
        heading: 'The most famous cloth in history',
        body:
          'Dhaka muslin was woven so fine that a whole length could pass through a ring, earning names like abrawan (“flowing water”) and shabnam (“evening dew”). It clothed Mughal emperors and European nobility, and helped make Bengal the wealthiest region of the empire.',
      },
    ],
    relatedCreatorTags: ['jamdani'],
    relatedShopProductIds: [],
    relatedArticleIds: [],
    relatedSareeIds: ['saree-jamdani'],
    heroImage: img('saree-muslin', 'Dhaka muslin saree', { aspectRatio: 0.75 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'saree-bengal-silks',
    slug: 'bengal-silks',
    axis: 'type',
    name: 'Bengal Silks (Matka, Resham & more)',
    nameBengali: 'রেশম',
    nameRomanized: 'Resham',
    subtitle: 'The wider family of Bengal’s silken weaves.',
    fabric: 'matka-silk',
    regions: ['across-bengal'],
    heritage: [],
    motifs: ['varied — texture-led'],
    occasions: ['everyday to festive'],
    shortDescription:
      'Beyond the famous names, Bengal weaves a family of silks — Matka, Resham (mulberry), and raw silk — each with its own texture and use.',
    bodySections: [
      {
        id: 'sec_spectrum',
        heading: 'A spectrum of silk',
        body:
          'Matka’s rustic slubbed texture, the smooth sheen of resham (mulberry) silk, and raw silk’s natural body give Bengali weavers a broad palette — from relaxed daywear to richer festive drapes.',
      },
    ],
    relatedCreatorTags: ['saree-artisan'],
    relatedShopProductIds: [],
    relatedArticleIds: [],
    relatedSareeIds: ['saree-tussar', 'saree-murshidabad-silk'],
    heroImage: img('saree-bengal-silks', 'Bengal silk sarees', { aspectRatio: 0.75 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'saree-laalpaar-shada',
    slug: 'laal-paar-shada',
    axis: 'style',
    name: 'The Laal-paar Shada Saree',
    nameBengali: 'লাল পাড় সাদা শাড়ি',
    nameRomanized: 'Laal-paar Shada',
    subtitle: 'White body, red border — the soul of Bengali celebration.',
    fabric: 'n-a',
    regions: ['across-bengal'],
    heritage: ['ceremonial'],
    motifs: ['white field', 'red border (laal paar)'],
    occasions: ['Durga Puja', 'Sindoor Khela', 'weddings', 'pujas'],
    shortDescription:
      'Not a single weave but an iconic look — the white saree with a red border. It is the image of Durga Puja, Sindoor Khela, and Bengali womanhood at its most celebratory.',
    bodySections: [
      {
        id: 'sec_look_not_loom',
        heading: 'A look, not a loom',
        body:
          'Laal-paar shada — “red border, white” — is a style shared across weaves. A Garad, a Korial, even a red-bordered Tant can all be laal-paar shada. What unites them is the meaning: purity, auspiciousness, and festival.',
      },
      {
        id: 'sec_durga_colours',
        heading: 'The colours of Durga Puja',
        body:
          'On Bijoya Dashami and during Sindoor Khela, the streets fill with this white-and-red — a sea of Korial and Garad sarees, conch bangles, and vermilion. It is, for many, the truest image of Bengal.',
      },
    ],
    relatedCreatorTags: ['saree-artisan'],
    relatedShopProductIds: [],
    relatedArticleIds: ['art_journey_festivals'],
    relatedSareeIds: ['saree-korial', 'saree-garad', 'saree-tant'],
    heroImage: img('saree-laalpaar-shada', 'Laal-paar shada saree', { aspectRatio: 0.75 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'saree-athpoure',
    slug: 'athpoure-drape',
    axis: 'drape',
    name: 'The Athpoure Drape',
    nameBengali: 'আটপৌরে',
    nameRomanized: 'Athpoure',
    subtitle: 'The traditional Bengali way to wear a saree.',
    fabric: 'n-a',
    regions: ['across-bengal'],
    heritage: ['ceremonial', 'everyday'],
    motifs: ['wide box pleats', 'pallu over both shoulders', 'chabir gocha (keychain)'],
    occasions: ['Durga Puja', 'weddings', 'traditional occasions'],
    shortDescription:
      'The classic Bengali drape — wide pleats, the pallu carried over the left shoulder and brought round to the front, often finished with a keychain (chabir gocha).',
    bodySections: [
      {
        id: 'sec_how_worn',
        heading: 'How Bengal wears the saree',
        body:
          'The athpoure (or atpoure) drape is distinct from the common nivi style: broad box pleats at the front, the aanchal draped over the left shoulder and looped back across, and traditionally a set of household keys (chabir gocha) knotted into the pallu — the mark of the woman of the house.',
      },
      {
        id: 'sec_more_than_method',
        heading: 'More than a method',
        body:
          'It carries memory and identity — the drape of grandmothers, of Durga Puja mornings, of the heroines of Bengali cinema. To wear athpoure is to wear a piece of cultural belonging.',
      },
    ],
    relatedCreatorTags: [],
    relatedShopProductIds: [],
    relatedArticleIds: [],
    relatedSareeIds: ['saree-korial', 'saree-laalpaar-shada'],
    heroImage: img('saree-athpoure', 'Athpoure saree drape', { aspectRatio: 0.85 }),
    isFlagship: true,
    isStub: false,
  },
];
