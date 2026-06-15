/**
 * Palaces & Rajbaris — seed data for the Discover heritage hub.
 *
 * Article id reference:
 *   art_bengali_authors — Bengali Authors (Jorasanko / Tagore)
 *   art_bengal_rivers   — Bengal Rivers (Murshidabad trade context)
 *
 * Images use deterministic placeholders until public-domain photography is added.
 */
import type { HeritageBuilding } from '@/types';
import { img } from '@/constants/images';

export const heritageBuildings: HeritageBuilding[] = [
  {
    id: 'heritage-hazarduari',
    slug: 'hazarduari-palace',
    name: 'Hazarduari Palace',
    nameBengali: 'হাজারদুয়ারি',
    alsoKnownAs: 'The Palace of a Thousand Doors (Bara Kothi)',
    type: 'nawabi-palace',
    currentStatus: ['museum'],
    style: ['greek-doric'],
    region: 'murshidabad',
    location: 'Kila Nizamat campus, Murshidabad, West Bengal',
    builtPeriod: 'Early 19th century',
    builtBy: 'Duncan MacLeod (architect), for Nawab Nazim Humayun Jah',
    dynastyOrFamily: 'Nawabs of Bengal',
    subtitle: 'A thousand doors — the grand seat of the Nawabs of Bengal.',
    shortDescription:
      'A vast early-19th-century palace in the old Nawabi capital of Murshidabad, famed for its (literal and false) thousand doors. Now a museum of royal artefacts.',
    bodySections: [
      {
        id: 'sec_thousand_doors',
        heading: 'The thousand doors',
        body:
          'Built for Nawab Nazim Humayun Jah in the Greek Doric style, Hazarduari takes its name from its thousand doors — many of them false, a defensive trick. Its halls hold weapons, paintings, and the treasures of Bengal’s Nawabi era.',
      },
      {
        id: 'sec_last_capital',
        heading: 'The last capital of independent Bengal',
        body:
          'Murshidabad was the capital of Bengal before British power eclipsed it after the Battle of Plassey (1757). Hazarduari stands as the grandest survivor of that lost world.',
      },
    ],
    historicalSignificance:
      'The architectural symbol of Murshidabad, the last capital of independent Bengal before British dominance.',
    visitorNote: 'Open to visitors as a museum (managed by the Archaeological Survey of India).',
    notableFor: ['thousand doors', 'Nawabi-era artefacts and arms'],
    relatedBuildingIds: ['heritage-kathgola', 'heritage-cossimbazar'],
    relatedArticleIds: ['art_bengal_rivers'],
    relatedSareeIds: ['saree-murshidabad-silk', 'saree-baluchari'],
    heroImage: img('heritage-hazarduari', 'Hazarduari Palace', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'heritage-cooch-behar',
    slug: 'cooch-behar-palace',
    name: 'Cooch Behar Palace',
    nameBengali: 'কোচবিহার রাজবাড়ি',
    alsoKnownAs: 'Victor Jubilee Palace',
    type: 'royal-palace',
    currentStatus: ['museum'],
    style: ['italian-renaissance', 'indo-saracenic'],
    region: 'cooch-behar',
    location: 'Cooch Behar, North Bengal',
    builtPeriod: '1887',
    builtBy: 'Maharaja Nripendra Narayan',
    dynastyOrFamily: 'Koch dynasty',
    subtitle: 'Bengal’s Buckingham Palace — the seat of the Koch kings.',
    shortDescription:
      'Built in 1887 by Maharaja Nripendra Narayan and modelled on Buckingham Palace, this grand Italian-Renaissance palace was the seat of the Koch dynasty. Now a museum.',
    bodySections: [
      {
        id: 'sec_palace_king',
        heading: 'A palace fit for a king',
        body:
          'Spanning over 50,000 square feet, the double-storeyed Cooch Behar Palace was inspired by Buckingham Palace and built in Italian-Renaissance style, complete with a dome, grand halls, and ornate balconies.',
      },
      {
        id: 'sec_koch_legacy',
        heading: 'The Koch legacy',
        body:
          'The palace remains a cherished symbol of the Koch and Mech peoples of North Bengal. Its museum preserves royal weapons, artefacts, and photographs of the dynasty.',
      },
    ],
    historicalSignificance:
      'The grandest expression of the Koch dynasty and the princely-state era in North Bengal.',
    visitorNote: 'Open as a museum; modest entry fee.',
    notableFor: ['modelled on Buckingham Palace', 'Italian-Renaissance dome'],
    relatedBuildingIds: ['heritage-hazarduari'],
    relatedArticleIds: [],
    heroImage: img('heritage-cooch-behar', 'Cooch Behar Palace', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'heritage-itachuna',
    slug: 'itachuna-rajbari',
    name: 'Itachuna Rajbari',
    nameBengali: 'ইটাচুনা রাজবাড়ি',
    alsoKnownAs: 'Itachuna Royal Palace',
    type: 'rajbari',
    currentStatus: ['heritage-hotel', 'film-location', 'partial-public'],
    style: ['bengali-traditional', 'colonial'],
    region: 'hooghly',
    location: 'Itachuna, Hooghly district, West Bengal (~70 km from Kolkata)',
    builtPeriod: 'Late 18th century',
    builtBy: 'The Kundu family',
    dynastyOrFamily: 'Kundu zamindars',
    subtitle: 'A zamindar’s mansion reborn as a heritage stay.',
    shortDescription:
      'A late-18th-century zamindar mansion of the Kundu family, blending Bengali and colonial styles. Now a popular heritage hotel and film location (Lootera).',
    bodySections: [
      {
        id: 'sec_courtyards',
        heading: 'Courtyards and verandas',
        body:
          'Itachuna’s spacious courtyards, carved verandas, and antique interiors capture the everyday grandeur of a Bengali zamindar household, now opened to guests as a heritage stay.',
      },
      {
        id: 'sec_on_screen',
        heading: 'On screen',
        body:
          'Its authentic period atmosphere made it the setting for the Bollywood film Lootera, drawing a new wave of visitors curious about Bengal’s rajbari life.',
      },
    ],
    historicalSignificance:
      'A well-preserved example of zamindar domestic architecture and its 21st-century revival through heritage tourism.',
    visitorNote: 'Operates as a heritage hotel; day visits and overnight stays available.',
    notableFor: ['film: Lootera', 'zamindari courtyards'],
    relatedBuildingIds: ['heritage-bawali'],
    relatedArticleIds: [],
    heroImage: img('heritage-itachuna', 'Itachuna Rajbari', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'heritage-bawali',
    slug: 'rajbari-bawali',
    name: 'Rajbari Bawali',
    nameBengali: 'বাওয়ালি রাজবাড়ি',
    alsoKnownAs: 'Bawali Rajbari',
    type: 'rajbari',
    currentStatus: ['heritage-hotel', 'film-location'],
    style: ['neoclassical'],
    region: 'south-24-parganas',
    location: 'Bawali, South 24 Parganas, West Bengal (~1 hr from Kolkata)',
    builtPeriod: '~250–300 years old',
    builtBy: 'The Mondal family',
    dynastyOrFamily: 'Mondal zamindars',
    subtitle: 'Faded grandeur, lovingly restored from near-ruin.',
    shortDescription:
      'A roughly 250-year-old neoclassical mansion of the Mondal family that fell into decay after independence and was meticulously restored into a luxury heritage hotel.',
    bodySections: [
      {
        id: 'sec_decline_rebirth',
        heading: 'Decline and rebirth',
        body:
          'After 170 years of grand living, the Bawali estate crumbled as the zamindari system collapsed post-independence. It was painstakingly restored by its current owner, preserving the vintage royal Bengali design.',
      },
      {
        id: 'sec_filmmakers',
        heading: 'A favourite of filmmakers',
        body:
          'Its atmospheric, time-worn beauty made it the setting of the Netflix film Bulbbul, and a sought-after destination for those drawn to romantic ruin made livable again.',
      },
    ],
    historicalSignificance:
      'A model of how Bengal’s decaying rajbaris can be saved through adaptive reuse as heritage hospitality.',
    visitorNote: 'Luxury heritage hotel; rooms range across heritage categories.',
    notableFor: ['film: Bulbbul', 'restored from ruin'],
    relatedBuildingIds: ['heritage-itachuna'],
    relatedArticleIds: [],
    heroImage: img('heritage-bawali', 'Rajbari Bawali', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'heritage-marble-palace',
    slug: 'marble-palace',
    name: 'Marble Palace',
    nameBengali: 'মার্বেল প্যালেস',
    type: 'merchant-house',
    currentStatus: ['private-residence', 'partial-public'],
    style: ['neoclassical'],
    region: 'kolkata',
    location: 'Muktaram Babu Street, North Kolkata',
    builtPeriod: '1835',
    builtBy: 'Raja Rajendra Mullick',
    dynastyOrFamily: 'Mullick family',
    subtitle: 'A North Kolkata mansion of marble, art, and curiosities.',
    shortDescription:
      'An opulent 1835 mansion built by Raja Rajendra Mullick, famed for its marble floors, European paintings and sculpture, and a private menagerie. Still owned by the family.',
    bodySections: [
      {
        id: 'sec_collectors',
        heading: 'A collector’s palace',
        body:
          'Marble Palace overflows with Western art, statuary, and antiques amid courtyards of imported marble — a window into the cosmopolitan tastes of 19th-century Kolkata’s elite.',
      },
    ],
    historicalSignificance:
      'A surviving emblem of the art-collecting, Europhile zamindar-merchant culture of colonial Kolkata.',
    visitorNote:
      'Open to visitors with a permit (free); photography restricted; still a family residence.',
    notableFor: ['marble interiors', 'private art collection'],
    relatedBuildingIds: ['heritage-jorasanko'],
    relatedArticleIds: [],
    heroImage: img('heritage-marble-palace', 'Marble Palace', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'heritage-jorasanko',
    slug: 'jorasanko-thakur-bari',
    name: 'Jorasanko Thakur Bari',
    nameBengali: 'জোড়াসাঁকো ঠাকুরবাড়ি',
    alsoKnownAs: 'The Tagore Family House',
    type: 'rajbari',
    currentStatus: ['museum'],
    style: ['bengali-traditional', 'colonial'],
    region: 'kolkata',
    location: 'Jorasanko, North Kolkata',
    builtPeriod: '18th century',
    builtBy: 'The Tagore (Thakur) family',
    dynastyOrFamily: 'Tagore family',
    subtitle: 'The ancestral home where Rabindranath Tagore was born.',
    shortDescription:
      'The ancestral mansion of the Tagore family and birthplace of Rabindranath Tagore — now a museum (Rabindra Bharati) at the heart of the Bengal Renaissance.',
    bodySections: [
      {
        id: 'sec_renaissance',
        heading: 'Cradle of the Renaissance',
        body:
          'Jorasanko was not just a home but a hothouse of art, music, and ideas — the setting where the Tagores helped spark the Bengal Renaissance. Rabindranath was born and died here.',
      },
    ],
    historicalSignificance:
      'The birthplace of Rabindranath Tagore and a centre of the Bengal Renaissance; now a museum.',
    visitorNote: 'Open as a museum within Rabindra Bharati University.',
    notableFor: ['birthplace of Tagore', 'Bengal Renaissance'],
    relatedBuildingIds: ['heritage-marble-palace'],
    relatedArticleIds: ['art_bengali_authors'],
    heroImage: img('heritage-jorasanko', 'Jorasanko Thakur Bari', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'heritage-garh-panchkot',
    slug: 'garh-panchkot',
    name: 'Garh Panchkot',
    nameBengali: 'গড় পঞ্চকোট',
    type: 'royal-palace',
    currentStatus: ['ruin-abandoned'],
    style: ['terracotta', 'bengali-traditional'],
    region: 'purulia',
    location: 'Foothills of Panchet Hill, Purulia, West Bengal',
    builtPeriod: 'Medieval (pre-18th century)',
    dynastyOrFamily: 'Panchkot royal family',
    subtitle: 'Silent ruins beneath the hills — testimony to a lost kingdom.',
    shortDescription:
      'The ruined fort and palace of the Panchkot kingdom at the foot of Panchet Hill — a haunting, atmospheric ruin scarred by the 18th-century Bargi (Maratha) raids.',
    bodySections: [
      {
        id: 'sec_ruin_memory',
        heading: 'Ruin and memory',
        body:
          'Garh Panchkot’s broken temples and palace walls stand as a silent witness to the Bargi attacks of the 18th century. Today its overgrown ruins, set against forested hills, are among Bengal’s most evocative abandoned heritage sites.',
      },
    ],
    historicalSignificance:
      'A rare surviving relic of a pre-colonial Bengali kingdom and the devastation of the Maratha (Bargi) raids.',
    visitorNote: 'Open ruins, freely accessible; no facilities — go prepared.',
    notableFor: ['atmospheric ruins', 'Bargi raid history'],
    relatedBuildingIds: [],
    relatedArticleIds: [],
    heroImage: img('heritage-garh-panchkot', 'Garh Panchkot ruins', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'heritage-kathgola',
    slug: 'kathgola-palace',
    name: 'Kathgola Palace',
    nameBengali: 'কাঠগোলা',
    type: 'merchant-house',
    currentStatus: ['partial-public', 'private-residence'],
    style: ['neoclassical', 'colonial'],
    region: 'murshidabad',
    location: 'Murshidabad, West Bengal',
    builtPeriod: '19th century',
    dynastyOrFamily: 'Dudhoria (Jain merchant) family',
    subtitle: 'A merchant family’s palace and garden in old Murshidabad.',
    shortDescription:
      'A 19th-century palace and garden estate built by the wealthy Dudhoria merchant family, with a notable Adinath Jain temple on its grounds.',
    bodySections: [
      {
        id: 'sec_merchant_grandeur',
        heading: 'Merchant grandeur',
        body:
          'Kathgola reflects the wealth of Murshidabad’s great merchant houses, with European-style architecture, antiques, and a serene Jain temple set among its gardens.',
      },
    ],
    historicalSignificance:
      'Illustrates the role of merchant and banking families in the wealth of Nawabi Murshidabad.',
    visitorNote: 'Open to visitors with a small fee.',
    notableFor: ['Adinath Jain temple', 'merchant-era gardens'],
    relatedBuildingIds: ['heritage-hazarduari', 'heritage-cossimbazar'],
    relatedArticleIds: ['art_bengal_rivers'],
    relatedSareeIds: ['saree-murshidabad-silk'],
    heroImage: img('heritage-kathgola', 'Kathgola Palace', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'heritage-cossimbazar',
    slug: 'cossimbazar-rajbari',
    name: 'Cossimbazar Rajbari',
    nameBengali: 'কাশিমবাজার রাজবাড়ি',
    type: 'rajbari',
    currentStatus: ['heritage-hotel', 'partial-public'],
    style: ['colonial', 'neoclassical'],
    region: 'murshidabad',
    location: 'Cossimbazar, Murshidabad, West Bengal',
    builtPeriod: '18th–19th century',
    dynastyOrFamily: 'Roy family of Cossimbazar',
    subtitle: 'A trading-town rajbari that hosts guests and Durga Puja.',
    shortDescription:
      'The mansion of the Roy zamindars of Cossimbazar — once a thriving silk-trading town — known for its grand Durga Puja and now offering heritage stays.',
    bodySections: [
      {
        id: 'sec_silk_town',
        heading: 'Silk-town nobility',
        body:
          'Cossimbazar grew rich on the silk trade, and its rajbari reflects that prosperity. Its traditional family Durga Puja remains a living link to the zamindari past.',
      },
    ],
    historicalSignificance:
      'Tied to Bengal’s historic silk trade and the living tradition of zamindari Durga Puja.',
    visitorNote: 'Offers heritage stays; known for its Durga Puja celebrations.',
    notableFor: ['zamindari Durga Puja', 'silk-trade history'],
    relatedBuildingIds: ['heritage-hazarduari', 'heritage-kathgola'],
    relatedArticleIds: ['art_bengal_rivers'],
    relatedSareeIds: ['saree-murshidabad-silk'],
    heroImage: img('heritage-cossimbazar', 'Cossimbazar Rajbari', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
];
