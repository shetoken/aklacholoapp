/**
 * Saaj o Poshak — attire & adornment of Bengal.
 *
 * Clothing, jewellery, and symbolic adornment. Cross-links to sarees, crafts,
 * and festivals. Photography placeholders via img().
 */
import type { AttireItem } from '@/types';
import { img } from '@/constants/images';

export const attireItems: AttireItem[] = [
  {
    id: 'attire-dhuti-panjabi',
    slug: 'dhuti-panjabi',
    name: 'Dhuti & Panjabi',
    nameBengali: 'ধুতি পাঞ্জাবি',
    alsoKnownAs: 'Dhoti & kurta (Bengali style)',
    category: 'clothing',
    wornBy: 'men',
    borderSide: 'across-bengal',
    subtitle: 'The classic dress of the Bengali man.',
    shortDescription:
      'The traditional Bengali men’s attire — the dhuti (an unstitched draped lower garment) paired with the panjabi (a long, often embroidered tunic). The festive choice for pujas, weddings, and Poila Boishakh.',
    bodySections: [
      {
        heading: 'Elegance, draped',
        body:
          'Worn for every important occasion, the crisp white or cream dhuti with a fine embroidered panjabi is the image of the dignified Bengali gentleman. For weddings the panjabi is richly worked, often in silk.',
      },
    ],
    materialNote: 'Cotton for daily/festive wear; silk and embroidered panjabi for weddings.',
    culturalNote: 'Worn at Durga Puja, weddings, Poila Boishakh and cultural occasions.',
    relatedItemIds: ['attire-topor', 'attire-bridal-saree'],
    relatedFestivalIds: ['festival-durga-puja', 'festival-poila-boishakh'],
    relatedArticleIds: [],
    image: img('attire-dhuti-panjabi', 'Dhuti & Panjabi', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'attire-bridal-saree',
    slug: 'bengali-bridal-saree',
    name: 'The Bengali Bridal Saree',
    nameBengali: 'বিয়ের শাড়ি',
    category: 'clothing',
    wornBy: 'bride',
    borderSide: 'across-bengal',
    isBridal: true,
    subtitle: 'The red-and-gold saree of the Bengali bride.',
    shortDescription:
      'The Bengali bride traditionally wears a red (or red-and-gold) saree — often Banarasi or silk with rich gold work — red symbolising prosperity and auspicious beginnings. (See the Sarees hub for the weaves themselves.)',
    bodySections: [
      {
        heading: 'Red for new beginnings',
        body:
          'Red, the colour of auspiciousness and prosperity, defines the Bengali bridal look — classically a Banarasi or silk saree heavy with gold zari, paired with traditional gold jewellery and the married-women adornments.',
      },
    ],
    materialNote: 'Banarasi / silk with gold zari; classic Laal-paar (red-bordered) styles.',
    culturalNote: 'Central to the Bengali Hindu wedding; pairs with shakha-pola, sindoor and gold.',
    relatedSareeIds: ['saree-laalpaar-shada', 'saree-murshidabad-silk'],
    relatedItemIds: ['attire-shakha-pola', 'attire-gold-jewellery'],
    relatedArticleIds: [],
    image: img('attire-bridal-saree', 'Bengali bridal saree', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'attire-topor',
    slug: 'topor-mukut',
    name: 'Topor & Mukut',
    nameBengali: 'টোপর ও মুকুট',
    category: 'clothing',
    wornBy: 'groom',
    borderSide: 'across-bengal',
    isBridal: true,
    subtitle: 'The white shola crown of the Bengali wedding.',
    shortDescription:
      'The conical white headgear of the Bengali groom (topor) and the bride’s crown (mukut), both crafted from delicate shola (spongewood) — symbols of auspiciousness in the wedding ceremony.',
    bodySections: [
      {
        heading: 'Crowned in white',
        body:
          'The groom’s topor and the bride’s matching mukut, carved from milky-white shola pith, are among the most recognisable images of a Bengali wedding — fragile, beautiful, and full of ceremony.',
      },
    ],
    materialNote: 'Shola (spongewood) pith, sometimes with coloured/foil detailing.',
    culturalNote: 'Worn during the Bengali wedding ceremony; made by shola artisans.',
    relatedCraftIds: ['craft-shola'],
    relatedItemIds: ['attire-dhuti-panjabi', 'attire-bridal-saree'],
    relatedArticleIds: [],
    image: img('attire-topor', 'Topor & Mukut', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'attire-gold-jewellery',
    slug: 'bengali-gold-jewellery',
    name: 'Bengali Gold Jewellery',
    nameBengali: 'সোনার গয়না',
    category: 'jewellery',
    wornBy: 'women',
    borderSide: 'across-bengal',
    isBridal: true,
    subtitle: 'Distinctive gold craftsmanship — from chik to jhumko.',
    shortDescription:
      'Bengal has a rich tradition of gold jewellery with distinctive forms — the chik (close-fitting necklace), sita haar (long layered necklace), jhumko (bell earrings), nath (nose ring), and bala/mantasha bangles — central to bridal and festive adornment.',
    bodySections: [
      {
        heading: 'The goldsmith’s art',
        body:
          'Bengali gold work, historically the craft of the swarnakar community, is known for fine, often intricate filigree and traditional forms passed down generations — the heart of a bride’s adornment and a family’s heirlooms.',
      },
    ],
    materialNote:
      'Gold; traditional forms include chik, sita haar, jhumko, nath, bala, mantasha.',
    culturalNote: 'Central to weddings and festivals; often family heirlooms.',
    relatedItemIds: ['attire-bridal-saree', 'attire-shakha-pola'],
    relatedArticleIds: [],
    image: img('attire-gold-jewellery', 'Bengali gold jewellery', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'attire-terracotta-jewellery',
    slug: 'terracotta-jewellery',
    name: 'Terracotta Jewellery',
    nameBengali: 'পোড়ামাটির গয়না',
    category: 'jewellery',
    wornBy: 'women',
    borderSide: 'across-bengal',
    subtitle: 'Earthy hand-crafted clay jewellery.',
    shortDescription:
      'Distinctive hand-made jewellery of fired clay — necklaces, earrings and bangles — beloved for its earthy, artisanal aesthetic and often paired with handloom saris and a contemporary-ethnic look.',
    bodySections: [
      {
        heading: 'Beauty from clay',
        body:
          'Terracotta jewellery brings Bengal’s clay tradition to personal adornment — light, hand-painted, and increasingly popular as an eco-friendly, artisan alternative to metal.',
      },
    ],
    materialNote: 'Fired, hand-painted clay (terracotta).',
    relatedCraftIds: ['craft-terracotta'],
    relatedItemIds: ['attire-gold-jewellery'],
    relatedArticleIds: [],
    image: img('attire-terracotta-jewellery', 'Terracotta jewellery', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'attire-shakha-pola',
    slug: 'shakha-pola-noa',
    name: 'Shakha, Pola & Noa',
    nameBengali: 'শাঁখা পলা নোয়া',
    category: 'adornment',
    wornBy: 'women',
    borderSide: 'across-bengal',
    isMarriedSymbol: true,
    isBridal: true,
    subtitle: 'The white, red and iron bangles of the married woman.',
    shortDescription:
      'A set of bangles traditionally worn by married Bengali Hindu women: shakha (white, from conch shell), pola (red, from coral), and noa (an iron bangle, often gold-covered, given by the groom) — given at the wedding as symbols of marriage.',
    bodySections: [
      {
        heading: 'A trio of meaning',
        body:
          'Shakha (conch-shell white) and pola (coral red) are worn on both wrists, traditionally with the noa, an iron bangle gifted by the groom. In the wedding ritual, married women place them on the bride’s hands, symbolising blessings and her new status.',
      },
      {
        heading: 'Heritage, held gently',
        body:
          'These customs are deeply meaningful and vary by region and family; for many they are cherished tradition and personal choice. We present them here as heritage, with respect for the many ways Bengalis live them today.',
      },
    ],
    materialNote:
      'Shakha: conch shell. Pola: red coral / coral-like. Noa: iron (often gold-covered).',
    culturalNote:
      'Symbols of a married Bengali Hindu woman; gifted and worn at the wedding (Dodhi Mangal).',
    relatedCraftIds: ['craft-conch-shell'],
    relatedItemIds: ['attire-sindoor-alta', 'attire-gold-jewellery'],
    relatedArticleIds: [],
    image: img('attire-shakha-pola', 'Shakha, Pola & Noa', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'attire-sindoor-alta',
    slug: 'sindoor-alta',
    name: 'Sindoor & Alta',
    nameBengali: 'সিঁদুর ও আলতা',
    category: 'adornment',
    wornBy: 'women',
    borderSide: 'across-bengal',
    isMarriedSymbol: true,
    subtitle: 'Vermilion and red foot-dye — colour as meaning.',
    shortDescription:
      'Sindoor (vermilion) applied in the hair parting and alta (a red dye applied to the feet/hands) are traditional adornments of married Bengali women and of brides, rich with symbolism of auspiciousness.',
    bodySections: [
      {
        heading: 'The colour red',
        body:
          'In the Sindoor Daan ritual, the groom applies vermilion to the bride’s parting — among the most emotionally charged moments of a Bengali wedding. Alta, painted in delicate borders on the feet, adorns brides and is worn at pujas and festivals.',
      },
      {
        heading: 'A note of respect',
        body:
          'These are meaningful traditions that vary across families and regions and are personal to each woman. We share them as cultural heritage, without implying they are obligatory.',
      },
    ],
    materialNote: 'Sindoor: vermilion powder. Alta: red lac/cotton dye for feet and hands.',
    culturalNote:
      'Bridal and married-women adornment; also worn by women at pujas and festivals.',
    relatedItemIds: ['attire-shakha-pola'],
    relatedFestivalIds: ['festival-durga-puja'],
    relatedArticleIds: [],
    image: img('attire-sindoor-alta', 'Sindoor & Alta', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
];
