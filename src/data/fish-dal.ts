/**
 * Maachhe Bhaate — fish and dal of Bengal.
 *
 * Fish by water type and season; everyday dals. Food photography placeholders via img().
 */
import type { Dal, Fish } from '@/types';
import { img } from '@/constants/images';

export const fish: Fish[] = [
  {
    id: 'fish-ilish',
    slug: 'ilish-hilsa',
    name: 'Ilish',
    nameBengali: 'ইলিশ',
    alsoKnownAs: 'Hilsa',
    group: 'hilsa-herring',
    waterType: 'brackish-estuarine',
    season: 'monsoon',
    borderSide: 'across-bengal',
    subtitle: 'The King of Fish — and a Bengali emotion.',
    shortDescription:
      'The most celebrated fish in all of Bengal — rich, oily, tender and uniquely flavoured. Tied to the monsoon and to Bengali poetry, the “Padmar ilish” of the Padma river is the most coveted of all.',
    bodySections: [
      {
        heading: 'Maacher raja ilish',
        body:
          'Ilish is more than food — it is celebration. Bengalis wait all year for the monsoon and its ilish. It is cooked with the lightest hand, never overwhelmed by heavy ginger or garlic, so its delicate flavour shines.',
      },
      {
        heading: 'The signature dishes',
        body:
          'Shorshe Ilish (in mustard gravy) and Ilish Bhapa (steamed in mustard and green chilli) are its crowning preparations; Ilish Paturi wraps it in banana leaf. Even the oil it leaves behind is treasured with rice.',
      },
    ],
    signatureDishes: ['Shorshe Ilish', 'Ilish Bhapa', 'Ilish Paturi', 'Ilish Macher Jhol'],
    culturalNote:
      'The cultural “King of Fish”; central to the monsoon, Bengali literature, and festive meals.',
    relatedFishIds: ['fish-chingri', 'fish-rui'],
    relatedArticleIds: [],
    image: img('fish-ilish', 'Ilish (Hilsa)', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'fish-chingri',
    slug: 'chingri-prawn',
    name: 'Chingri',
    nameBengali: 'চিংড়ি',
    alsoKnownAs: 'Prawn / Shrimp',
    group: 'prawn-shellfish',
    waterType: 'brackish-estuarine',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'The prawn — Bengal’s other beloved “fish.”',
    shortDescription:
      'Though a shellfish, chingri is treated as fish royalty in Bengal. It comes in many sizes — kucho (tiny), bagda (tiger prawn) and golda (giant freshwater prawn/scampi) — and stars in the iconic Chingri Malai Curry.',
    bodySections: [
      {
        heading: 'From tiny to giant',
        body:
          'Kucho chingri (tiny shrimp) flavour mashes and fritters; bagda (tiger prawns) and golda (scampi) headline luxurious dishes. The famous Chingri Malai Curry simmers them in a velvety coconut-milk gravy.',
      },
    ],
    signatureDishes: ['Chingri Malai Curry', 'Chingri Bhapa', 'Daab Chingri (in green coconut)'],
    culturalNote:
      'Prawn malai curry is a centrepiece of weddings and feasts; a friendly rivalry with ilish-lovers.',
    relatedFishIds: ['fish-ilish', 'fish-bhetki'],
    relatedArticleIds: [],
    image: img('fish-chingri', 'Chingri (prawn)', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'fish-rui',
    slug: 'rui-rohu',
    name: 'Rui',
    nameBengali: 'রুই',
    alsoKnownAs: 'Rohu',
    group: 'carp',
    waterType: 'freshwater',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'The everyday carp at the heart of the Bengali table.',
    shortDescription:
      'A freshwater carp with firm flesh and mild flavour — the most everyday fish in Bengali households, cooked in light jhol, kalia, or simply fried.',
    bodySections: [
      {
        heading: 'The daily fish',
        body:
          'Rui is the dependable, beloved staple — macher jhol (light curry), kalia (rich gravy), or maach bhaja (fried). The prized fish head goes into muri ghonto with rice and lentils.',
      },
    ],
    signatureDishes: ['Macher Jhol', 'Rui Kalia', 'Muri Ghonto (fish-head with rice)'],
    relatedFishIds: ['fish-katla', 'fish-ilish'],
    relatedArticleIds: [],
    image: img('fish-rui', 'Rui (Rohu)', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'fish-katla',
    slug: 'katla',
    name: 'Katla',
    nameBengali: 'কাতলা',
    alsoKnownAs: 'Catla',
    group: 'carp',
    waterType: 'freshwater',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'The big-headed carp prized for feasts.',
    shortDescription:
      'A large freshwater carp closely related to rui, valued for its tender flesh and especially its large head — a favourite at gatherings and festive meals.',
    bodySections: [
      {
        heading: 'The prized head',
        body:
          'Katla’s big head is a delicacy, central to dishes like muri ghonto and fish-head with dal. Its generous flesh makes it a staple of celebratory cooking.',
      },
    ],
    relatedFishIds: ['fish-rui'],
    relatedArticleIds: [],
    image: img('fish-katla', 'Katla carp', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'fish-pabda',
    slug: 'pabda',
    name: 'Pabda',
    nameBengali: 'পাবদা',
    alsoKnownAs: 'Indian butterfish',
    group: 'catfish',
    waterType: 'freshwater',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'The soft, delicate fish for mustard gravies.',
    shortDescription:
      'A small, soft-fleshed, pink-bellied freshwater fish with a delicate flavour, ideal for light mustard-based gravies — a connoisseur’s favourite.',
    bodySections: [
      {
        heading: 'Delicate by design',
        body:
          'Pabda’s tender, almost buttery flesh suits gentle preparations like Pabda Shorshe (mustard) and light jhol — subtle dishes that let the fish speak.',
      },
    ],
    signatureDishes: ['Pabda Shorshe', 'Pabda Macher Jhol'],
    relatedFishIds: ['fish-tangra'],
    relatedArticleIds: [],
    image: img('fish-pabda', 'Pabda fish', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'fish-tangra',
    slug: 'tangra',
    name: 'Tangra',
    nameBengali: 'ট্যাংরা',
    alsoKnownAs: 'Small catfish',
    group: 'catfish',
    waterType: 'freshwater',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'The little river catfish of home cooking.',
    shortDescription:
      'A group of small river catfish prized for their texture and flavour — Tangra Macher Jhol is a beloved home-cooked dish across Bengal.',
    bodySections: [
      {
        heading: 'Humble and loved',
        body:
          'Tangra, along with its catfish cousins magur and shingi (valued as restorative, easy-to-digest fish), are everyday favourites in light, spicy curries.',
      },
    ],
    signatureDishes: ['Tangra Macher Jhol'],
    relatedFishIds: ['fish-pabda'],
    relatedArticleIds: [],
    image: img('fish-tangra', 'Tangra catfish', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'fish-koi',
    slug: 'koi',
    name: 'Koi',
    nameBengali: 'কই',
    alsoKnownAs: 'Climbing perch',
    group: 'perch',
    waterType: 'freshwater',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'The bony but flavour-packed perch.',
    shortDescription:
      'The climbing perch — bony but full of distinctive flavour, prized by many Bengalis for special and festive dishes like Koi Bhaja and tangy Koir Jhol.',
    bodySections: [
      {
        heading: 'Worth the bones',
        body:
          'Koi’s strong flavour earns it a devoted following, featuring in festival dishes such as Tel Koi (in oil) and Doi Koi (in yogurt gravy).',
      },
    ],
    signatureDishes: ['Tel Koi', 'Doi Koi', 'Koi Bhaja'],
    relatedFishIds: ['fish-rui'],
    relatedArticleIds: [],
    image: img('fish-koi', 'Koi (climbing perch)', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'fish-chitol',
    slug: 'chitol',
    name: 'Chitol',
    nameBengali: 'চিতল',
    alsoKnownAs: 'Clown knifefish (featherback)',
    group: 'featherback',
    waterType: 'freshwater',
    season: 'winter',
    borderSide: 'across-bengal',
    subtitle: 'The festive fish behind the famous muithya.',
    shortDescription:
      'A large freshwater featherback fish, the star of the celebrated Chitol Muithya — spiced fish dumplings in gravy — a dish of special occasions.',
    bodySections: [
      {
        heading: 'Chitol Muithya',
        body:
          'Chitol’s flesh is scraped, spiced, and shaped into dumplings (muithya) simmered in a rich gravy — an elaborate, festive Bengali delicacy.',
      },
    ],
    signatureDishes: ['Chitol Muithya', 'Chitol Macher Kalia'],
    relatedFishIds: ['fish-katla'],
    relatedArticleIds: [],
    image: img('fish-chitol', 'Chitol featherback', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'fish-bhetki',
    slug: 'bhetki',
    name: 'Bhetki',
    nameBengali: 'ভেটকি',
    alsoKnownAs: 'Barramundi / Asian sea bass',
    group: 'sea-fish',
    waterType: 'brackish-estuarine',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'The mild fish behind the legendary fish fry.',
    shortDescription:
      'A firm, mild-flavoured fish, the favourite for the iconic Kolkata Fish Fry and for the delicate Bhetki Paturi — a colonial-era Bengali classic.',
    bodySections: [
      {
        heading: 'Kolkata Fish Fry',
        body:
          'Bhetki’s firm fillets, crumbed and fried, are the heart of the legendary Kolkata fish fry served in clubs and cabins; it also shines steamed in banana leaf as Bhetki Paturi.',
      },
    ],
    signatureDishes: ['Kolkata Fish Fry', 'Bhetki Paturi', 'Bhetki Macher Jhal'],
    relatedFishIds: ['fish-chingri'],
    relatedArticleIds: [],
    image: img('fish-bhetki', 'Bhetki (barramundi)', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'fish-shutki',
    slug: 'shutki-dried-fish',
    name: 'Shutki',
    nameBengali: 'শুঁটকি',
    alsoKnownAs: 'Dried fish',
    group: 'dried-fish',
    waterType: 'dried',
    season: 'year-round',
    borderSide: 'across-bengal',
    subtitle: 'Pungent, intense, and deeply loved by its devotees.',
    shortDescription:
      'Sun-dried fish with a powerful aroma and intense flavour — an acquired taste especially cherished in eastern Bengal/Bangladesh and the Chittagong region.',
    bodySections: [
      {
        heading: 'An intense tradition',
        body:
          'Shutki is preserved by drying and cooked into robust, pungent dishes (shutki bhuna, shutki bharta). Polarising but beloved, it is a distinctive part of east Bengali and Chittagonian cuisine.',
      },
    ],
    signatureDishes: ['Shutki Bhuna', 'Shutki Bharta'],
    culturalNote: 'Especially prized in Bangladesh and the Chittagong region.',
    relatedFishIds: [],
    relatedArticleIds: [],
    image: img('fish-shutki', 'Shutki (dried fish)', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
];

export const dals: Dal[] = [
  {
    id: 'dal-musur',
    slug: 'musur-dal',
    name: 'Musur Dal',
    nameBengali: 'মুসুর ডাল',
    alsoKnownAs: 'Red lentil (masoor)',
    subtitle: 'The everyday red lentil of the Bengali table.',
    shortDescription:
      'The most common daily dal in Bengali homes — quick-cooking red lentils, simply tempered, eaten with rice as the comforting base of an everyday meal.',
    bodySections: [
      {
        heading: 'Comfort in a bowl',
        body:
          'Light and quick, musur dal is the everyday companion to rice, often finished with a phoron (tempering) of nigella seeds (kalonji) and green chilli, or cooked with vegetables.',
      },
    ],
    typicalPreparation:
      'Tempered with kalonji (nigella) and green chilli; sometimes with fish-head (muri ghonto style).',
    signatureDishes: ['Musur Dal with kalonji phoron'],
    relatedDalIds: ['dal-moong', 'dal-cholar'],
    relatedArticleIds: [],
    image: img('dal-musur', 'Musur dal', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'dal-moong',
    slug: 'moong-dal',
    name: 'Moong Dal',
    nameBengali: 'মুগ ডাল',
    alsoKnownAs: 'Mung lentil',
    subtitle: 'The fragrant roasted lentil for special meals.',
    shortDescription:
      'Often dry-roasted before cooking for a nutty aroma, Bhaja Moong Dal is a richer, festive dal frequently cooked with vegetables, coconut, or for celebrations.',
    bodySections: [
      {
        heading: 'Roasted for richness',
        body:
          'Dry-roasting the moong lentils first (bhaja moong) gives a deep, nutty flavour. It is a favourite for special occasions and is often cooked with cauliflower, peas, or coconut.',
      },
    ],
    typicalPreparation: 'Dry-roasted (bhaja), then cooked with ghee, vegetables, or coconut.',
    signatureDishes: ['Bhaja Moong Dal', 'Moong Dal with vegetables'],
    relatedDalIds: ['dal-musur', 'dal-cholar'],
    relatedArticleIds: [],
    image: img('dal-moong', 'Moong dal', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'dal-cholar',
    slug: 'cholar-dal',
    name: 'Cholar Dal',
    nameBengali: 'ছোলার ডাল',
    alsoKnownAs: 'Split Bengal gram (chana)',
    subtitle: 'The sweet, festive dal with coconut.',
    shortDescription:
      'A slightly sweet, rich dal made from split Bengal gram, studded with fried coconut pieces and warm spices — a festive favourite, classically eaten with luchi.',
    bodySections: [
      {
        heading: 'Festival on a plate',
        body:
          'Cholar dal, with its gentle sweetness, coconut, raisins, and garam masala, is a staple of puja bhog and celebrations, paired with hot luchi (puffed bread).',
      },
    ],
    typicalPreparation: 'Cooked with fried coconut, raisins, ghee and whole spices; served with luchi.',
    signatureDishes: ['Cholar Dal with luchi', 'Puja bhog cholar dal'],
    relatedDalIds: ['dal-musur'],
    relatedArticleIds: [],
    image: img('dal-cholar', 'Cholar dal', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'dal-biulir',
    slug: 'biulir-dal',
    name: 'Biulir Dal',
    nameBengali: 'বিউলির ডাল',
    alsoKnownAs: 'Urad / black gram dal',
    subtitle: 'The classic dal of the luchi-and-aloo breakfast.',
    shortDescription:
      'A traditional dal of split black gram, mild and tempered with fennel and ginger, classically eaten with luchi and aloor dom — a beloved old-Bengali combination.',
    bodySections: [
      {
        heading: 'An old favourite',
        body:
          'Biulir dal, flavoured with fennel (mouri) and asafoetida, is a nostalgic, homely dal central to the classic luchi–aloor dom spread.',
      },
    ],
    typicalPreparation: 'Tempered with fennel, ginger and asafoetida; served with luchi.',
    relatedDalIds: ['dal-cholar'],
    relatedArticleIds: [],
    image: img('dal-biulir', 'Biulir dal', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
];
