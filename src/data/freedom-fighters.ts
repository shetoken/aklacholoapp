/**
 * Sons & Daughters of Bengal — freedom fighters memorial data.
 *
 * A memorial dataset: every name and martyrdom detail must be verifiable.
 * Cellular Jail prisoners live in cellular-jail.ts (separate shape, same hub).
 *
 * Images use deterministic placeholders until public-domain portraits are added.
 */
import type { FreedomFighter } from '@/types';
import { img } from '@/constants/images';

export const freedomFighters: FreedomFighter[] = [
  {
    id: 'ff-subhas-bose',
    slug: 'subhas-chandra-bose',
    name: 'Subhas Chandra Bose',
    nameBengali: 'সুভাষচন্দ্র বসু',
    alsoKnownAs: 'Netaji',
    gender: 'male',
    lifespan: '1897–1945',
    borderSide: 'undivided-bengal',
    birthplace: 'Cuttack (born); family roots in Bengal',
    roles: ['political-leader', 'ina-azad-hind'],
    movements: ['ina-azad-hind', 'congress'],
    fate: 'disappeared',
    subtitle: 'Netaji — who chose armed struggle and led the Azad Hind Fauj.',
    shortDescription:
      'One of the towering figures of India’s freedom struggle, who broke with the Congress mainstream to raise the Indian National Army (Azad Hind Fauj) and pursue independence through armed force.',
    bodySections: [
      {
        id: 'sec_blood_freedom',
        heading: '“Give me blood, and I will give you freedom”',
        body:
          'Subhas Chandra Bose believed freedom would come through struggle, not petition. He escaped British surveillance, sought allies abroad, and led the Indian National Army against colonial rule.',
      },
      {
        id: 'sec_unresolved',
        heading: 'An unresolved end',
        body:
          'His death — reported in a 1945 plane crash — remains debated to this day, and his legend looms large across both Bengals and all India.',
      },
    ],
    notableFor: ['Indian National Army (Azad Hind Fauj)', 'Azad Hind government', '“Jai Hind”'],
    relatedFighterIds: ['ff-jatin-das'],
    relatedArticleIds: [],
    portraitImage: img('ff-subhas-bose', 'Subhas Chandra Bose', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'ff-khudiram',
    slug: 'khudiram-bose',
    name: 'Khudiram Bose',
    nameBengali: 'ক্ষুদিরাম বসু',
    gender: 'male',
    lifespan: '1889–1908',
    ageAtDeath: 18,
    borderSide: 'west-bengal-india',
    birthplace: 'Midnapore, Bengal (India)',
    roles: ['armed-revolutionary'],
    movements: ['anushilan-jugantar', 'swadeshi'],
    fate: 'executed',
    subtitle: 'Hanged at eighteen — one of the youngest martyrs of the struggle.',
    shortDescription:
      'A teenage revolutionary executed by the British at the age of 18, who became an enduring symbol of youthful sacrifice for the freedom movement.',
    bodySections: [
      {
        id: 'sec_young_life',
        heading: 'A young life given',
        body:
          'With Prafulla Chaki, Khudiram attempted to kill a British magistrate; the attack went tragically wrong. Arrested and tried, he went to the gallows with extraordinary composure for one so young.',
      },
    ],
    martyrdom:
      'Hanged by the British in 1908 at the age of 18, becoming one of the youngest martyrs of the independence movement.',
    notableFor: ['youngest martyr symbolism', 'Muzaffarpur action with Prafulla Chaki'],
    relatedFighterIds: ['ff-prafulla-chaki', 'ff-bagha-jatin'],
    relatedArticleIds: [],
    portraitImage: img('ff-khudiram', 'Khudiram Bose', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'ff-bagha-jatin',
    slug: 'bagha-jatin',
    name: 'Jatindranath Mukherjee (Bagha Jatin)',
    nameBengali: 'বাঘা যতীন',
    alsoKnownAs: 'Bagha Jatin ("Tiger Jatin")',
    gender: 'male',
    lifespan: '1879–1915',
    ageAtDeath: 36,
    borderSide: 'undivided-bengal',
    roles: ['armed-revolutionary', 'ideologue-thinker'],
    movements: ['anushilan-jugantar'],
    fate: 'killed-in-action',
    subtitle: 'The revolutionary strategist behind the Indo-German conspiracy.',
    shortDescription:
      'A principal leader of the Jugantar revolutionary group, central to the Indo-German conspiracy to arm an uprising during the First World War.',
    bodySections: [
      {
        id: 'sec_tiger_jatin',
        heading: 'Tiger Jatin',
        body:
          'Earning his nickname after reportedly killing a tiger, Bagha Jatin became a strategic mind of the armed struggle, organising the revolutionary networks of Bengal.',
      },
    ],
    martyrdom:
      'Died in 1915 of wounds sustained in an armed encounter with British police at Balasore.',
    notableFor: ['Jugantar leadership', 'Indo-German conspiracy', 'Battle of Balasore'],
    relatedFighterIds: ['ff-khudiram'],
    relatedArticleIds: [],
    portraitImage: img('ff-bagha-jatin', 'Bagha Jatin', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'ff-surya-sen',
    slug: 'surya-sen',
    name: 'Surya Sen',
    nameBengali: 'সূর্য সেন',
    alsoKnownAs: 'Masterda',
    gender: 'male',
    lifespan: '1894–1934',
    ageAtDeath: 39,
    borderSide: 'bangladesh',
    birthplace: 'Chittagong (now Bangladesh)',
    roles: ['armed-revolutionary'],
    movements: ['chittagong-uprising'],
    fate: 'executed',
    subtitle: 'The schoolteacher who led the Chittagong Armoury Raid.',
    shortDescription:
      'Known as “Masterda,” the revolutionary leader who masterminded the audacious 1930 Chittagong Armoury Raid against the British.',
    bodySections: [
      {
        id: 'sec_chittagong',
        heading: 'The Chittagong uprising',
        body:
          'A schoolteacher by profession, Surya Sen planned and led the 1930 raid on the Chittagong armoury — a meticulously organised act of rebellion that inspired a generation of revolutionaries.',
      },
    ],
    martyrdom: 'Captured and executed by the British in 1934.',
    notableFor: ['Chittagong Armoury Raid (1930)'],
    relatedFighterIds: ['ff-pritilata', 'ff-kalpana-datta'],
    relatedArticleIds: [],
    portraitImage: img('ff-surya-sen', 'Surya Sen', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'ff-pritilata',
    slug: 'pritilata-waddedar',
    name: 'Pritilata Waddedar',
    nameBengali: 'প্রীতিলতা ওয়াদ্দেদার',
    gender: 'female',
    lifespan: '1911–1932',
    ageAtDeath: 21,
    borderSide: 'bangladesh',
    birthplace: 'Chittagong (now Bangladesh)',
    roles: ['women-revolutionary', 'armed-revolutionary'],
    movements: ['chittagong-uprising'],
    fate: 'self-sacrifice',
    subtitle: 'At twenty-one, she led an armed raid and chose death over capture.',
    shortDescription:
      'A revolutionary associated with Surya Sen’s group who led the 1932 attack on the Pahartali European Club and took cyanide to avoid capture, aged 21.',
    bodySections: [
      {
        id: 'sec_leader_twenty_one',
        heading: 'A leader at twenty-one',
        body:
          'Pritilata led an armed assault on a club that symbolised colonial exclusion. Wounded and surrounded, she chose to take her own life rather than be captured — a defining act of courage for women in the struggle.',
      },
    ],
    martyrdom:
      'Took cyanide in 1932, aged 21, to avoid capture after leading the Pahartali European Club raid.',
    notableFor: ['first female martyr of the Chittagong movement', 'Pahartali Club raid'],
    relatedFighterIds: ['ff-surya-sen', 'ff-kalpana-datta', 'ff-bina-das'],
    relatedArticleIds: [],
    portraitImage: img('ff-pritilata', 'Pritilata Waddedar', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'ff-jatin-das',
    slug: 'jatindra-nath-das',
    name: 'Jatindra Nath Das',
    nameBengali: 'যতীন্দ্রনাথ দাস',
    alsoKnownAs: 'Jatin Das',
    gender: 'male',
    lifespan: '1904–1929',
    ageAtDeath: 25,
    borderSide: 'undivided-bengal',
    roles: ['armed-revolutionary'],
    movements: ['anushilan-jugantar'],
    fate: 'died-in-prison',
    subtitle: 'Died after a 63-day hunger strike for prisoners’ dignity.',
    shortDescription:
      'A revolutionary who died in Lahore jail in 1929 after a 63-day hunger strike protesting the treatment of political prisoners.',
    bodySections: [
      {
        id: 'sec_sixty_three',
        heading: 'Sixty-three days',
        body:
          'Close to Subhas Bose and skilled in bomb-making for the revolutionaries, Jatin Das undertook a 63-day hunger strike in Lahore jail. His death drew an outpouring of grief across Bengal.',
      },
    ],
    martyrdom:
      'Died on 13 September 1929, aged 25, after a 63-day hunger strike in Lahore jail.',
    notableFor: ['63-day hunger strike', 'prisoners’ rights'],
    relatedFighterIds: ['ff-subhas-bose'],
    relatedArticleIds: [],
    portraitImage: img('ff-jatin-das', 'Jatindra Nath Das', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'ff-binoy-badal-dinesh',
    slug: 'binoy-badal-dinesh',
    name: 'Binoy, Badal & Dinesh',
    nameBengali: 'বিনয়–বাদল–দীনেশ',
    alsoKnownAs: 'Binoy Basu, Badal Gupta, Dinesh Gupta',
    gender: 'male',
    borderSide: 'undivided-bengal',
    roles: ['armed-revolutionary'],
    movements: ['anushilan-jugantar'],
    fate: 'killed-in-action',
    subtitle: 'The three who stormed the Writers’ Building.',
    shortDescription:
      'Three young revolutionaries of the Bengal Volunteers who, in 1930, attacked the Writers’ Building in Kolkata and killed the Inspector-General of Prisons. Kolkata’s B.B.D. Bagh is named for them.',
    bodySections: [
      {
        id: 'sec_writers_building',
        heading: 'The Writers’ Building raid',
        body:
          'Binoy Basu, Badal Gupta and Dinesh Gupta walked into the seat of colonial administration and opened fire. Badal took poison and Binoy died of his wounds; Dinesh was captured and later executed. The square B.B.D. Bagh carries their initials.',
      },
    ],
    martyrdom:
      'Badal Gupta took poison and Binoy Basu died of wounds in 1930; Dinesh Gupta was executed in 1931.',
    notableFor: ['Writers’ Building raid (1930)', 'B.B.D. Bagh named after them'],
    relatedFighterIds: [],
    relatedArticleIds: [],
    portraitImage: img('ff-bbd', 'Binoy, Badal and Dinesh', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'ff-matangini-hazra',
    slug: 'matangini-hazra',
    name: 'Matangini Hazra',
    nameBengali: 'মাতঙ্গিনী হাজরা',
    alsoKnownAs: 'Gandhi Buri ("Old Lady Gandhi")',
    gender: 'female',
    lifespan: '1870–1942',
    ageAtDeath: 72,
    borderSide: 'west-bengal-india',
    birthplace: 'Tamluk, Midnapore (India)',
    roles: ['mass-mobiliser', 'women-revolutionary'],
    movements: ['quit-india'],
    fate: 'killed-in-action',
    subtitle: 'Shot at seventy-two, still chanting “Vande Mataram.”',
    shortDescription:
      'An elderly peasant activist of the Quit India Movement, shot dead by police in 1942 while leading a procession — reportedly still chanting “Vande Mataram” as she fell.',
    bodySections: [
      {
        id: 'sec_gandhi_buri',
        heading: 'Gandhi Buri',
        body:
          'In her seventies, Matangini Hazra led a Quit India procession in Tamluk. Shot by police, she is said to have held the flag aloft and kept chanting “Vande Mataram” until her death.',
      },
    ],
    martyrdom:
      'Shot dead by police in 1942, aged 72, while leading a Quit India procession.',
    notableFor: ['Quit India martyrdom', 'symbol of grassroots resistance'],
    relatedFighterIds: [],
    relatedArticleIds: [],
    portraitImage: img('ff-matangini', 'Matangini Hazra', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'ff-bina-das',
    slug: 'bina-das',
    name: 'Bina Das',
    nameBengali: 'বীণা দাস',
    gender: 'female',
    lifespan: '1911–1986',
    borderSide: 'undivided-bengal',
    roles: ['women-revolutionary'],
    movements: ['anushilan-jugantar', 'congress'],
    fate: 'survived',
    subtitle: 'Who fired at a British Governor inside the university hall.',
    shortDescription:
      'A revolutionary who attempted to assassinate the Governor of Bengal, Stanley Jackson, during a 1932 university convocation — a defining act of armed resistance by a woman.',
    bodySections: [
      {
        id: 'sec_convocation',
        heading: 'A shot in the Convocation Hall',
        body:
          'Bina Das fired at Governor Stanley Jackson in the Calcutta University Convocation Hall in 1932. Though the attempt failed and she was imprisoned, she remained committed to the cause and later joined the wider movement.',
      },
    ],
    notableFor: ['1932 attempt on Governor Stanley Jackson'],
    relatedFighterIds: ['ff-pritilata'],
    relatedArticleIds: [],
    portraitImage: img('ff-bina-das', 'Bina Das', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'ff-kalpana-datta',
    slug: 'kalpana-datta',
    name: 'Kalpana Datta',
    nameBengali: 'কল্পনা দত্ত',
    gender: 'female',
    lifespan: '1913–1995',
    borderSide: 'bangladesh',
    birthplace: 'Chittagong (now Bangladesh)',
    roles: ['women-revolutionary', 'armed-revolutionary'],
    movements: ['chittagong-uprising'],
    fate: 'survived',
    subtitle: 'A woman of the Chittagong revolutionary group.',
    shortDescription:
      'A revolutionary associated with Surya Sen’s Chittagong group, arrested for her involvement and steadfast in the cause through and beyond imprisonment.',
    bodySections: [
      {
        id: 'sec_masterda_circle',
        heading: 'In Masterda’s circle',
        body:
          'Kalpana Datta joined the armed revolutionaries of Chittagong, taking part in their activities and enduring imprisonment without renouncing the struggle.',
      },
    ],
    notableFor: ['Chittagong revolutionary group'],
    relatedFighterIds: ['ff-surya-sen', 'ff-pritilata'],
    relatedArticleIds: [],
    portraitImage: img('ff-kalpana-datta', 'Kalpana Datta', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'ff-prafulla-chaki',
    slug: 'prafulla-chaki',
    name: 'Prafulla Chaki',
    nameBengali: 'প্রফুল্ল চাকী',
    gender: 'male',
    lifespan: '1888–1908',
    ageAtDeath: 19,
    borderSide: 'undivided-bengal',
    roles: ['armed-revolutionary'],
    movements: ['anushilan-jugantar'],
    fate: 'self-sacrifice',
    subtitle: 'Khudiram’s comrade, who chose death over arrest.',
    shortDescription:
      'A young revolutionary who, with Khudiram Bose, carried out the 1908 Muzaffarpur action and took his own life to avoid capture.',
    bodySections: [
      {
        id: 'sec_comrade',
        heading: 'A comrade’s end',
        body:
          'After the Muzaffarpur attempt, Prafulla Chaki, surrounded by police, shot himself rather than be taken — he was about 19.',
      },
    ],
    martyrdom:
      'Took his own life in 1908, aged about 19, to avoid capture after the Muzaffarpur action.',
    notableFor: ['Muzaffarpur action with Khudiram Bose'],
    relatedFighterIds: ['ff-khudiram'],
    relatedArticleIds: [],
    portraitImage: img('ff-prafulla-chaki', 'Prafulla Chaki', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
];
