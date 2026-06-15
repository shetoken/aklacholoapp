/**
 * Bhraman — places & attractions across Bengal.
 *
 * Cross-links to heritage-buildings, festivals-faith, and natural-bengal via IDs.
 */
import type { Place } from '@/types';
import { img } from '@/constants/images';

export const places: Place[] = [
  {
    id: 'place-victoria-memorial',
    slug: 'victoria-memorial',
    name: 'Victoria Memorial',
    nameBengali: 'ভিক্টোরিয়া মেমোরিয়াল',
    type: 'monument',
    region: 'kolkata',
    parentCity: 'Kolkata',
    subtitle: 'Kolkata’s grand white-marble landmark and museum.',
    shortDescription:
      'A majestic white-marble monument built in memory of Queen Victoria, set in sprawling gardens — now a museum charting Kolkata’s colonial history through paintings, photographs and artefacts.',
    bodySections: [
      {
        heading: 'Marble and memory',
        body:
          'Often likened in grandeur to the Taj Mahal for its marble and detail, the Victoria Memorial is the emblem of colonial Calcutta. Its galleries trace the city’s history; its gardens and evening light-and-sound show draw crowds.',
      },
    ],
    whyVisit:
      'The single most iconic monument of Kolkata — stunning architecture, a serious history museum, and beautiful gardens in the heart of the city.',
    howToReach:
      'Central Kolkata, beside the Maidan. Nearest Metro: Maidan / Rabindra Sadan. Easily reached by taxi, app-cab, or bus.',
    bestTime: 'October–March; visit late afternoon for the gardens and light show.',
    suggestedDuration: '2–3 hours',
    relatedPlaceIds: ['place-park-street'],
    relatedArticleIds: [],
    heroImage: img('place-victoria-memorial', 'Victoria Memorial', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'place-howrah-bridge',
    slug: 'howrah-bridge',
    name: 'Howrah Bridge',
    nameBengali: 'হাওড়া ব্রিজ',
    alsoKnownAs: 'Rabindra Setu',
    type: 'monument',
    region: 'kolkata',
    parentCity: 'Kolkata',
    subtitle: 'The colossal cantilever bridge that symbolises the city.',
    shortDescription:
      'An immense cantilever bridge over the Hooghly River connecting Kolkata and Howrah — a feat of engineering, an enduring symbol of the city, and a favourite of filmmakers.',
    bodySections: [
      {
        heading: 'The city’s spine over the river',
        body:
          'Carrying a vast daily tide of people and vehicles, Howrah Bridge is Kolkata’s great icon. Beneath its Howrah-side approach lies the dawn spectacle of the Mullick Ghat flower market.',
      },
    ],
    whyVisit:
      'An iconic engineering marvel and the visual symbol of Kolkata; pair it with the riverside ghats and the Mullick Ghat flower market at dawn.',
    howToReach:
      'Spans the Hooghly between Kolkata and Howrah Station. Reach via Howrah Station, ferry across the river, taxi, or the riverside ghats.',
    bestTime: 'Dawn (flower market) or after dark when it is lit.',
    suggestedDuration: '1 hour',
    relatedPlaceIds: ['place-prinsep-ghat', 'place-kumartuli'],
    relatedArticleIds: [],
    heroImage: img('place-howrah-bridge', 'Howrah Bridge', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'place-park-street',
    slug: 'park-street',
    name: 'Park Street',
    nameBengali: 'পার্ক স্ট্রিট',
    type: 'neighbourhood',
    region: 'kolkata',
    parentCity: 'Kolkata',
    subtitle: 'Kolkata’s most famous street for food and nightlife.',
    shortDescription:
      'The city’s legendary dining-and-nightlife strip — historic restaurants and tearooms (like Flurys, since 1927), live music, and at Christmas a riot of lights that draws the whole city.',
    bodySections: [
      {
        heading: 'The street that never sleeps',
        body:
          'Park Street is where Kolkata eats, drinks and celebrates — old-world restaurants, cafés and bars, and an annual Christmas (Boro Din) transformation into a corridor of lights and festivity.',
      },
    ],
    whyVisit:
      'The heart of Kolkata’s food, café and nightlife culture — and the city’s most magical street at Christmas.',
    howToReach:
      'Central Kolkata. Nearest Metro: Park Street. Walkable from Esplanade and the Maidan area.',
    bestTime: 'Evenings; spectacular during Christmas/New Year.',
    suggestedDuration: 'An evening',
    relatedFestivalIds: ['festival-christmas'],
    relatedPlaceIds: ['place-victoria-memorial', 'place-new-market'],
    relatedArticleIds: [],
    heroImage: img('place-park-street', 'Park Street', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'place-nandan',
    slug: 'nandan',
    name: 'Nandan',
    nameBengali: 'নন্দন',
    type: 'cultural-hub',
    region: 'kolkata',
    parentCity: 'Kolkata',
    subtitle: 'The beating heart of Bengali film and cultural life.',
    shortDescription:
      'A government film-and-cultural complex — Bengal’s premier hub for art cinema, film festivals and the arts. Its logo was designed by Satyajit Ray, and it anchors the Kolkata cultural quarter around Rabindra Sadan.',
    bodySections: [
      {
        heading: 'Where Bengal watches and gathers',
        body:
          'Nandan is the home of serious cinema in Kolkata — screenings, the Kolkata International Film Festival, and a perpetual gathering place for film lovers, artists and intellectuals. Its very name and logo were given by Satyajit Ray.',
      },
    ],
    whyVisit:
      'The cultural soul of Kolkata for film and the arts — especially alive during the Kolkata International Film Festival; a pilgrimage for cinema lovers.',
    howToReach:
      'In the Rabindra Sadan cultural complex, central Kolkata. Nearest Metro: Rabindra Sadan.',
    bestTime: 'Year-round; peak buzz during the film festival (usually winter).',
    suggestedDuration: '1–2 hours (or a screening)',
    relatedPlaceIds: ['place-college-street', 'place-victoria-memorial'],
    relatedArticleIds: [],
    heroImage: img('place-nandan', 'Nandan cultural complex', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'place-college-street',
    slug: 'college-street',
    name: 'College Street',
    nameBengali: 'কলেজ স্ট্রিট',
    alsoKnownAs: 'Boi Para (the book neighbourhood)',
    type: 'neighbourhood',
    region: 'kolkata',
    parentCity: 'Kolkata',
    subtitle: 'The world’s largest second-hand book market.',
    shortDescription:
      'A legendary stretch lined with bookshops and stalls — said to be the largest book market of its kind — and the intellectual heart of the city, home to the historic Indian Coffee House.',
    bodySections: [
      {
        heading: 'Boi Para — the book quarter',
        body:
          'Mile upon mile of books, new and old, around great institutions like Presidency and Calcutta University. The Indian Coffee House here has hosted generations of writers, students and revolutionaries in adda.',
      },
    ],
    whyVisit:
      'A book-lover’s paradise and the intellectual soul of Kolkata; sip coffee at the historic Indian Coffee House where the city’s minds have always gathered.',
    howToReach:
      'North-central Kolkata. Nearest Metro: Mahatma Gandhi Road (M.G. Road). Reachable by bus, tram and taxi.',
    bestTime: 'Daytime; weekdays are calmer.',
    suggestedDuration: '2–3 hours',
    relatedPlaceIds: ['place-kumartuli', 'place-nandan'],
    relatedArticleIds: [],
    heroImage: img('place-college-street', 'College Street book market', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'place-kumartuli',
    slug: 'kumartuli',
    name: 'Kumartuli',
    nameBengali: 'কুমোরটুলি',
    type: 'neighbourhood',
    region: 'kolkata',
    parentCity: 'Kolkata',
    subtitle: 'The potters’ quarter where the gods are sculpted.',
    shortDescription:
      'The traditional potters’ colony where artisans sculpt the clay idols of Durga and other deities — the workshop of Durga Puja, busiest and most magical in the run-up to the festival.',
    bodySections: [
      {
        heading: 'Where Durga is born',
        body:
          'In Kumartuli’s narrow lanes, master idol-makers shape river-clay into towering goddesses shipped to pandals across the world. Visiting before Durga Puja, you watch the festival quite literally being made by hand.',
      },
    ],
    whyVisit:
      'See Bengal’s most iconic craft in action — the sculpting of Durga idols; a living link between art, faith and festival.',
    howToReach:
      'North Kolkata, near the river. Nearest Metro: Shobhabazar–Sutanuti. Reachable by taxi.',
    bestTime: 'The weeks before Durga Puja (autumn) are most active.',
    suggestedDuration: '1–2 hours',
    relatedFestivalIds: ['festival-durga-puja'],
    relatedPlaceIds: ['place-college-street'],
    relatedArticleIds: [],
    heroImage: img('place-kumartuli', 'Kumartuli idol makers', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'place-new-market',
    slug: 'new-market',
    name: 'New Market',
    nameBengali: 'নিউ মার্কেট',
    type: 'market',
    region: 'kolkata',
    parentCity: 'Kolkata',
    subtitle: 'A 135-year-old warren of shops and stalls.',
    shortDescription:
      'One of Kolkata’s oldest markets — an indoor arcade over a century old, packed with stalls of food, clothing, handicrafts and the famous Nahoum’s bakery.',
    bodySections: [
      {
        heading: 'Old Calcutta shopping',
        body:
          'New Market (Hogg Market) has served the city for over 135 years — a maze of everything from fabrics to flowers, anchored by the legendary Jewish bakery Nahoum & Sons.',
      },
    ],
    whyVisit:
      'A heritage shopping experience and a taste of old Calcutta, with a legendary bakery at its centre.',
    howToReach:
      'Near Esplanade, central Kolkata. Nearest Metro: Esplanade. Walkable from Park Street.',
    bestTime: 'Daytime; very busy before festivals.',
    suggestedDuration: '1–2 hours',
    relatedPlaceIds: ['place-park-street'],
    relatedArticleIds: [],
    heroImage: img('place-new-market', 'New Market Kolkata', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'place-indian-museum',
    slug: 'indian-museum',
    name: 'Indian Museum',
    nameBengali: 'ভারতীয় জাদুঘর',
    alsoKnownAs: 'Jadughar',
    type: 'museum',
    region: 'kolkata',
    parentCity: 'Kolkata',
    subtitle: 'One of the oldest and largest museums in India.',
    shortDescription:
      'Founded in 1814, the Indian Museum is the oldest and largest museum in India, with vast collections of antiquities, sculpture, fossils, coins and natural history.',
    bodySections: [
      {
        heading: 'A treasure-house',
        body:
          'From ancient sculpture and an Egyptian mummy to meteorites and fossils, the Indian Museum’s galleries are a deep, sprawling record of art and natural history — a Kolkata institution since 1814.',
      },
    ],
    whyVisit:
      'India’s oldest museum, with world-class collections — essential for history and art lovers.',
    howToReach:
      'On Jawaharlal Nehru Road, near Park Street. Nearest Metro: Park Street / Esplanade.',
    bestTime: 'October–March; weekdays are quieter.',
    suggestedDuration: '2–3 hours',
    relatedPlaceIds: ['place-park-street', 'place-victoria-memorial'],
    relatedArticleIds: [],
    heroImage: img('place-indian-museum', 'Indian Museum Kolkata', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'place-prinsep-ghat',
    slug: 'prinsep-ghat',
    name: 'Prinsep Ghat',
    nameBengali: 'প্রিন্সেপ ঘাট',
    type: 'riverfront',
    region: 'kolkata',
    parentCity: 'Kolkata',
    subtitle: 'A romantic colonial-era riverside promenade.',
    shortDescription:
      'A picturesque Hooghly-side ghat with a restored Palladian memorial pavilion, popular for riverfront walks, boat rides, and views of the Vidyasagar Setu bridge at sunset.',
    bodySections: [
      {
        heading: 'River, light and leisure',
        body:
          'One of Kolkata’s loveliest riverside spots, Prinsep Ghat draws couples, families and photographers for sunset strolls and boat rides beneath the cable-stayed Vidyasagar Setu.',
      },
    ],
    whyVisit:
      'The most scenic, romantic stretch of Kolkata’s riverfront — beautiful at sunset, lovely for a boat ride.',
    howToReach:
      'On the Strand, near Fort William. Reachable by taxi; close to the riverside circular railway.',
    bestTime: 'Late afternoon to sunset.',
    suggestedDuration: '1–2 hours',
    relatedPlaceIds: ['place-howrah-bridge'],
    relatedArticleIds: [],
    heroImage: img('place-prinsep-ghat', 'Prinsep Ghat', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'place-new-town-eco-park',
    slug: 'new-town-eco-park',
    name: 'New Town & Eco Park',
    nameBengali: 'নিউ টাউন ইকো পার্ক',
    type: 'park-nature',
    region: 'kolkata',
    parentCity: 'Kolkata',
    subtitle: 'Modern Kolkata’s planned city and its great green park.',
    shortDescription:
      'New Town is the planned, modern face of greater Kolkata — tech parks, wide roads and convention centres — anchored by the vast New Town Eco Park, with a lake, themed gardens, replicas of world wonders and a musical fountain.',
    bodySections: [
      {
        heading: 'The new Kolkata',
        body:
          'A counterpoint to the old city, New Town shows Kolkata’s contemporary ambitions. Its Eco Park is a huge family-friendly green space — islands, gardens, a Seven Wonders replica zone, and boating on the lake.',
      },
    ],
    whyVisit:
      'See modern, planned Kolkata and unwind in one of India’s largest urban parks — great for families.',
    howToReach:
      'North-east of the city in New Town/Rajarhat. Reachable by app-cab; the Kolkata Metro is extending toward the area.',
    bestTime: 'October–March; evenings for the fountain show.',
    suggestedDuration: 'Half a day',
    relatedPlaceIds: [],
    relatedArticleIds: [],
    heroImage: img('place-new-town-eco-park', 'New Town Eco Park', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'place-dakshineswar',
    slug: 'dakshineswar',
    name: 'Dakshineswar',
    nameBengali: 'দক্ষিণেশ্বর',
    type: 'religious-site',
    region: 'kolkata',
    parentCity: 'Greater Kolkata',
    subtitle: 'The riverside Kali temple of Sri Ramakrishna.',
    shortDescription:
      'The famous nine-spired Kali temple on the Hooghly, associated with Sri Ramakrishna — a major pilgrimage and a serene riverside complex. (Deeper detail in the Festivals & Faiths hub.)',
    bodySections: [
      {
        heading: 'Faith by the river',
        body:
          'A 20-acre temple complex with twelve Shiva shrines around the central Kali temple, alive with drums, chanting and floral offerings. You can take a boat from here across to Belur Math.',
      },
    ],
    whyVisit:
      'One of Bengal’s holiest and most atmospheric temples; combine with a boat ride to Belur Math across the river.',
    howToReach:
      'North of the city on the Hooghly’s east bank. Dakshineswar has its own Metro station; also reachable by train, road, and river ferry.',
    bestTime: 'Early morning; very busy on Kali Puja and weekends.',
    suggestedDuration: '2–3 hours (with Belur Math)',
    relatedSiteId: 'site-dakshineswar',
    relatedFestivalIds: ['festival-kali-puja'],
    relatedPlaceIds: [],
    relatedArticleIds: [],
    heroImage: img('place-dakshineswar', 'Dakshineswar Kali Temple', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'place-darjeeling',
    slug: 'darjeeling',
    name: 'Darjeeling',
    nameBengali: 'দার্জিলিং',
    type: 'hill-station',
    region: 'north-bengal',
    subtitle: 'The Queen of the Hills — tea, toy train, and Kanchenjunga.',
    shortDescription:
      'Bengal’s beloved Himalayan hill station — misty tea gardens, views of Kanchenjunga from Tiger Hill, and the UNESCO-listed Darjeeling Himalayan Railway “toy train.”',
    bodySections: [
      {
        heading: 'Mountains and tea',
        body:
          'Darjeeling offers sunrise over Kanchenjunga, rides on the heritage toy train, monasteries, and slopes of world-famous tea — a complete change of air from the plains.',
      },
    ],
    whyVisit:
      'The classic Bengal mountain getaway: Himalayan views, the UNESCO toy train, and the home of Darjeeling tea.',
    howToReach:
      'North Bengal. Nearest airport: Bagdogra; nearest major rail: New Jalpaiguri (NJP), then road or the toy train up the hills.',
    bestTime: 'March–May and October–December (clear mountain views).',
    suggestedDuration: '3–5 days',
    relatedResourceId: 'nat-darjeeling-himalaya',
    relatedPlaceIds: [],
    relatedArticleIds: [],
    heroImage: img('place-darjeeling', 'Darjeeling hills', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'place-sundarbans',
    slug: 'sundarbans-tour',
    name: 'The Sundarbans',
    nameBengali: 'সুন্দরবন',
    type: 'wildlife',
    region: 'sundarbans-south',
    subtitle: 'Mangrove wilderness and the realm of the tiger.',
    shortDescription:
      'The vast mangrove delta south of Kolkata — boat safaris through tidal creeks in search of the Royal Bengal Tiger, crocodiles, and birds, in a UNESCO World Heritage wilderness.',
    bodySections: [
      {
        heading: 'Into the tidal forest',
        body:
          'A Sundarbans trip means days on a boat, gliding through narrow channels and watchtowers, immersed in one of the planet’s great wild places. (Deeper detail in the Natural Bengal hub.)',
      },
    ],
    whyVisit:
      'A once-in-a-lifetime wilderness experience: the world’s largest mangrove forest and the home of the tiger, a short journey from Kolkata.',
    howToReach:
      'South of Kolkata. Reach Godkhali/Canning by road or rail from Kolkata (≈2–3 hrs), then by boat into the delta — usually via an organised tour.',
    bestTime: 'November–February (pleasant; better wildlife sightings).',
    suggestedDuration: '2–3 days',
    relatedResourceId: 'nat-sundarbans',
    relatedPlaceIds: [],
    relatedArticleIds: [],
    heroImage: img('place-sundarbans', 'Sundarbans mangroves', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'place-shantiniketan',
    slug: 'shantiniketan',
    name: 'Shantiniketan',
    nameBengali: 'শান্তিনিকেতন',
    type: 'heritage-town',
    region: 'shantiniketan-birbhum',
    subtitle: 'Tagore’s abode of peace and learning.',
    shortDescription:
      'The town built around Tagore’s open-air university, Visva-Bharati — a UNESCO World Heritage Site of art, music and learning, famous for Poush Mela and the Basanta Utsav spring festival.',
    bodySections: [
      {
        heading: 'Tagore’s vision',
        body:
          'Shantiniketan embodies Tagore’s ideal of learning under the sky, amid art and nature. Visit the campus, museums, and craft markets; time it for Poush Mela (winter) or Basanta Utsav (spring).',
      },
    ],
    whyVisit:
      'Walk through Tagore’s living vision of education and art; a UNESCO site rich in music, craft, and festival.',
    howToReach:
      'Birbhum district. Reach Bolpur–Shantiniketan railway station from Kolkata (≈2.5 hrs by train), then local transport.',
    bestTime: 'Winter for Poush Mela; spring for Basanta Utsav.',
    suggestedDuration: '2 days',
    relatedBuildingId: 'heritage-jorasanko',
    relatedPlaceIds: [],
    relatedArticleIds: [],
    heroImage: img('place-shantiniketan', 'Shantiniketan', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'place-murshidabad',
    slug: 'murshidabad',
    name: 'Murshidabad',
    nameBengali: 'মুর্শিদাবাদ',
    type: 'heritage-town',
    region: 'murshidabad',
    subtitle: 'The lost capital of Nawabi Bengal.',
    shortDescription:
      'The former capital of Bengal before British rule — home to Hazarduari Palace, Nawabi-era monuments, and the silk and Baluchari weaving traditions, on the banks of the Bhagirathi.',
    bodySections: [
      {
        heading: 'Echoes of the Nawabs',
        body:
          'Murshidabad is a journey into the grandeur of independent Bengal’s last capital — palaces, mosques, and merchant mansions, plus the living craft of Murshidabad silk. (See the Palaces & Sarees hubs.)',
      },
    ],
    whyVisit:
      'Step into the world of the Nawabs — Hazarduari and the monuments of Bengal’s lost capital, plus its famous silks.',
    howToReach:
      'On the Bhagirathi, north of Kolkata. Reach Berhampore/Murshidabad by train (≈4 hrs) or road from Kolkata.',
    bestTime: 'October–March.',
    suggestedDuration: '2 days',
    relatedBuildingId: 'heritage-hazarduari',
    relatedPlaceIds: [],
    relatedArticleIds: [],
    heroImage: img('place-murshidabad', 'Murshidabad', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'place-bishnupur',
    slug: 'bishnupur',
    name: 'Bishnupur',
    nameBengali: 'বিষ্ণুপুর',
    type: 'heritage-town',
    region: 'bishnupur-bankura',
    subtitle: 'The town of terracotta temples and Baluchari silk.',
    shortDescription:
      'The old Malla-dynasty capital famed for its exquisite terracotta temples, Baluchari sarees, and the Bishnupur gharana of classical music.',
    bodySections: [
      {
        heading: 'Temples of clay',
        body:
          'Bishnupur’s terracotta temples — their walls alive with epic scenes — are among Bengal’s artistic peaks, alongside its celebrated Baluchari weaving and musical tradition. (See Palaces, Sarees and Festivals & Faiths hubs.)',
      },
    ],
    whyVisit:
      'See Bengal’s greatest terracotta temple art and the home of Baluchari silk in one heritage town.',
    howToReach:
      'Bankura district. Reach Bishnupur by train (≈3.5–4 hrs) or road from Kolkata.',
    bestTime: 'October–March.',
    suggestedDuration: '1–2 days',
    relatedSiteId: 'site-bishnupur-temples',
    relatedPlaceIds: [],
    relatedArticleIds: [],
    heroImage: img('place-bishnupur', 'Bishnupur terracotta temples', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'place-digha',
    slug: 'digha',
    name: 'Digha',
    nameBengali: 'দীঘা',
    type: 'city',
    region: 'coastal',
    subtitle: 'Bengal’s favourite seaside getaway.',
    shortDescription:
      'A popular beach town on the Bay of Bengal — the classic quick seaside escape for Kolkata, with long beaches, seafood, and a relaxed holiday feel (with nearby Mandarmani and Tajpur).',
    bodySections: [
      {
        heading: 'The Bengali beach holiday',
        body:
          'Digha and its quieter neighbours Mandarmani and Tajpur are where Bengal goes to the sea — gentle beaches, fresh seafood, and an easy weekend mood.',
      },
    ],
    whyVisit:
      'The easiest seaside break from Kolkata — beaches, seafood, and sea breeze.',
    howToReach:
      'On the Bay of Bengal coast. Reach by train or road from Kolkata (≈4–5 hrs).',
    bestTime: 'October–February (avoid peak monsoon).',
    suggestedDuration: '1–2 days',
    relatedResourceId: 'nat-bengal-coast',
    relatedPlaceIds: [],
    relatedArticleIds: [],
    heroImage: img('place-digha', 'Digha beach', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
];
