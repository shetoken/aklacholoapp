/**
 * Icons of Bengal — seed data for the Discover hub.
 *
 * Notable Bengalis across film, music, science, economics, visual art, and
 * thought/reform. Deliberately excludes writers (authors.ts) and
 * revolutionaries (freedom-fighters.ts). Tagore lives in authors.ts + tagore.ts.
 *
 * Historical figures: facts verified. Living figures: isStub until re-verified.
 */
import type { Icon } from '@/types';
import { img } from '@/constants/images';

export const icons: Icon[] = [
  // ============================ FILM ============================
  {
    id: 'icon-satyajit-ray',
    slug: 'satyajit-ray',
    name: 'Satyajit Ray',
    nameBengali: 'সত্যজিৎ রায়',
    gender: 'male',
    lifespan: '1921–1992',
    field: 'film',
    secondaryFields: ['visual-art', 'music'],
    borderSide: 'west-bengal-india',
    subtitle: 'One of the greatest filmmakers in the history of cinema.',
    shortDescription:
      'A Kolkata-born director regarded as one of the greatest and most influential filmmakers ever, famed for the humanist Apu Trilogy. He received an Academy Honorary Award and France’s Légion d’honneur.',
    bodySections: [
      {
        heading: 'The Apu Trilogy and beyond',
        body:
          'Beginning with Pather Panchali (1955), Ray’s films brought Bengali life to the world with rare humanity and visual grace, placing Indian cinema permanently on the global map.',
      },
      {
        heading: 'A complete artist',
        body:
          'Ray was not only a director but a writer, illustrator, and composer — designing his own posters, scoring his films, and creating beloved characters like the detective Feluda.',
      },
    ],
    notableWorks: [
      'Pather Panchali (1955)',
      'Aparajito',
      'Apur Sansar',
      'Charulata',
      'Feluda stories',
    ],
    honours: ['Academy Honorary Award (1992)', 'Bharat Ratna (1992)', 'Légion d’honneur'],
    relatedIconIds: ['icon-ritwik-ghatak', 'icon-mrinal-sen', 'icon-soumitra'],
    relatedArticleIds: [],
    portraitImage: img('icon-satyajit-ray', 'Satyajit Ray', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'icon-ritwik-ghatak',
    slug: 'ritwik-ghatak',
    name: 'Ritwik Ghatak',
    nameBengali: 'ঋত্বিক ঘটক',
    gender: 'male',
    lifespan: '1925–1976',
    field: 'film',
    borderSide: 'undivided-bengal',
    subtitle: 'The anguished poet of Partition on screen.',
    shortDescription:
      'A director (born in Rajshahi, now Bangladesh) widely considered one of the greatest filmmakers of all time, whose cinema confronted Partition, displacement, and social reality. Underrated in his lifetime, revered today.',
    bodySections: [
      {
        heading: 'Cinema of the wound',
        body:
          'Ghatak’s films — Meghe Dhaka Tara, Komal Gandhar, Subarnarekha — turned the trauma of Bengal’s Partition into searing, lyrical cinema. Recognition came largely after his death.',
      },
    ],
    notableWorks: ['Meghe Dhaka Tara', 'Komal Gandhar', 'Subarnarekha', 'Nagarik'],
    honours: ['Padma Shri (1970)', 'National Film Award for Best Story (1974)'],
    relatedIconIds: ['icon-satyajit-ray', 'icon-mrinal-sen'],
    relatedArticleIds: [],
    portraitImage: img('icon-ritwik-ghatak', 'Ritwik Ghatak', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'icon-mrinal-sen',
    slug: 'mrinal-sen',
    name: 'Mrinal Sen',
    nameBengali: 'মৃণাল সেন',
    gender: 'male',
    lifespan: '1923–2018',
    field: 'film',
    borderSide: 'undivided-bengal',
    subtitle: 'The radical conscience of Indian parallel cinema.',
    shortDescription:
      'A pioneering director (born in present-day Bangladesh) of India’s parallel cinema, known for politically charged, formally bold films.',
    bodySections: [
      {
        heading: 'Cinema with a conscience',
        body:
          'Mrinal Sen’s films, like Bhuvan Shome and the Calcutta trilogy, fused political urgency with formal experiment, making him a leading voice of socially engaged Indian cinema.',
      },
    ],
    notableWorks: ['Bhuvan Shome', 'Calcutta 71', 'Khandhar', 'Akaler Sandhane'],
    honours: ['Padma Bhushan', 'Dadasaheb Phalke Award'],
    relatedIconIds: ['icon-satyajit-ray', 'icon-ritwik-ghatak'],
    relatedArticleIds: [],
    portraitImage: img('icon-mrinal-sen', 'Mrinal Sen', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'icon-soumitra',
    slug: 'soumitra-chatterjee',
    name: 'Soumitra Chatterjee',
    nameBengali: 'সৌমিত্র চট্টোপাধ্যায়',
    gender: 'male',
    lifespan: '1935–2020',
    field: 'stage-screen',
    borderSide: 'west-bengal-india',
    subtitle: 'Ray’s great leading man and a giant of Bengali theatre.',
    shortDescription:
      'A towering actor of Bengali cinema and stage, the frequent face of Satyajit Ray’s films and the screen’s definitive Feluda. Honoured with the Dadasaheb Phalke Award.',
    bodySections: [
      {
        heading: 'The actor’s actor',
        body:
          'Across six decades and many Ray classics, Soumitra Chatterjee brought intelligence and grace to Bengali cinema, while remaining devoted to theatre and poetry.',
      },
    ],
    honours: ['Dadasaheb Phalke Award', 'Padma Bhushan', 'Légion d’honneur'],
    relatedIconIds: ['icon-satyajit-ray', 'icon-suchitra-sen', 'icon-uttam-kumar'],
    relatedArticleIds: [],
    portraitImage: img('icon-soumitra', 'Soumitra Chatterjee', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'icon-uttam-kumar',
    slug: 'uttam-kumar',
    name: 'Uttam Kumar',
    nameBengali: 'উত্তম কুমার',
    alsoKnownAs: 'Mahanayak ("The Great Hero")',
    gender: 'male',
    lifespan: '1926–1980',
    field: 'stage-screen',
    borderSide: 'west-bengal-india',
    subtitle: 'The matinee idol forever called “Mahanayak.”',
    shortDescription:
      'The most beloved leading man of Bengali cinema’s golden age, honoured with the title “Mahanayak” (the Great Hero), famed especially for his pairing with Suchitra Sen.',
    bodySections: [
      {
        heading: 'The golden age',
        body:
          'Uttam Kumar defined Bengali popular cinema of the 1950s–70s, his on-screen partnership with Suchitra Sen becoming the era’s romantic ideal.',
      },
    ],
    relatedIconIds: ['icon-suchitra-sen', 'icon-soumitra'],
    relatedArticleIds: [],
    portraitImage: img('icon-uttam-kumar', 'Uttam Kumar', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'icon-suchitra-sen',
    slug: 'suchitra-sen',
    name: 'Suchitra Sen',
    nameBengali: 'সুচিত্রা সেন',
    gender: 'female',
    lifespan: '1931–2014',
    field: 'stage-screen',
    borderSide: 'undivided-bengal',
    subtitle: 'The reclusive screen legend of Bengali cinema.',
    shortDescription:
      'An iconic actress (born in present-day Bangladesh) of Bengali and Hindi cinema, celebrated for her luminous performances and later for her decades of seclusion.',
    bodySections: [
      {
        heading: 'A legend, then a mystery',
        body:
          'Suchitra Sen’s films with Uttam Kumar defined an era; her later withdrawal from public life only deepened her legend.',
      },
    ],
    relatedIconIds: ['icon-uttam-kumar'],
    relatedArticleIds: [],
    portraitImage: img('icon-suchitra-sen', 'Suchitra Sen', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },

  // ============================ MUSIC ============================
  {
    id: 'icon-ravi-shankar',
    slug: 'ravi-shankar',
    name: 'Ravi Shankar',
    nameBengali: 'রবিশঙ্কর',
    alsoKnownAs: 'Pandit Ravi Shankar',
    gender: 'male',
    lifespan: '1920–2012',
    field: 'music',
    borderSide: 'undivided-bengal',
    subtitle: 'The sitar maestro who brought Indian music to the world.',
    shortDescription:
      'The legendary sitar virtuoso, of a Bengali family, who became the most famous ambassador of Indian classical music globally — mentor to George Harrison and a fixture of world stages.',
    bodySections: [
      {
        heading: 'Indian classical music, worldwide',
        body:
          'Through collaborations with Western musicians and performances from Woodstock to the concert hall, Ravi Shankar made the sitar and the raga part of the global musical imagination.',
      },
    ],
    honours: ['Bharat Ratna', 'multiple Grammy Awards'],
    relatedIconIds: ['icon-ali-akbar-khan'],
    relatedArticleIds: [],
    portraitImage: img('icon-ravi-shankar', 'Ravi Shankar', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'icon-ali-akbar-khan',
    slug: 'ali-akbar-khan',
    name: 'Ali Akbar Khan',
    nameBengali: 'আলী আকবর খাঁ',
    alsoKnownAs: 'Ustad Ali Akbar Khan',
    gender: 'male',
    lifespan: '1922–2009',
    field: 'music',
    borderSide: 'undivided-bengal',
    subtitle: 'The sarod master of the Maihar gharana.',
    shortDescription:
      'A sarod virtuoso (born in present-day Bangladesh) celebrated as one of the greatest Indian classical instrumentalists, who introduced the sarod to Western audiences.',
    bodySections: [
      {
        heading: 'A master of the sarod',
        body:
          'Trained in the Maihar gharana, Ali Akbar Khan’s artistry and teaching — including at his college in California — carried Indian classical music across the world.',
      },
    ],
    honours: ['Padma Vibhushan', 'MacArthur Fellowship'],
    relatedIconIds: ['icon-ravi-shankar'],
    relatedArticleIds: [],
    portraitImage: img('icon-ali-akbar-khan', 'Ali Akbar Khan', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'icon-sd-burman',
    slug: 'sachin-dev-burman',
    name: 'Sachin Dev Burman',
    nameBengali: 'শচীন দেব বর্মন',
    alsoKnownAs: 'S. D. Burman',
    gender: 'male',
    lifespan: '1906–1975',
    field: 'music',
    borderSide: 'undivided-bengal',
    subtitle: 'The composer who fused Bengali folk with film music.',
    shortDescription:
      'A legendary music composer of Bengali and Hindi cinema, of the Tripura royal-Bengali line, who wove Bengal’s folk traditions into the fabric of Indian film music.',
    bodySections: [
      {
        heading: 'Folk into film',
        body:
          'S. D. Burman’s compositions blended Bhatiali and Baul folk strains with film melody, shaping the sound of Indian cinema across decades.',
      },
    ],
    relatedIconIds: [],
    relatedArticleIds: [],
    portraitImage: img('icon-sd-burman', 'Sachin Dev Burman', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },

  // ============================ SCIENCE ============================
  {
    id: 'icon-jc-bose',
    slug: 'jagadish-chandra-bose',
    name: 'Jagadish Chandra Bose',
    nameBengali: 'জগদীশচন্দ্র বসু',
    gender: 'male',
    lifespan: '1858–1937',
    field: 'science',
    borderSide: 'undivided-bengal',
    subtitle: 'A pioneer of radio science — and of plant sensitivity.',
    shortDescription:
      'A polymath physicist and biologist who pioneered the investigation of radio and microwave optics, and demonstrated that plants respond to stimuli. Techniques in modern radio trace back to his work.',
    bodySections: [
      {
        heading: 'Ahead of his time',
        body:
          'J. C. Bose conducted pioneering experiments in radio waves before such work was widely recognised, and invented instruments to show that plants, too, respond to their environment — bridging physics and biology.',
      },
    ],
    honours: ['Fellow of the Royal Society'],
    relatedIconIds: ['icon-sn-bose', 'icon-pc-ray'],
    relatedArticleIds: [],
    portraitImage: img('icon-jc-bose', 'Jagadish Chandra Bose', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'icon-sn-bose',
    slug: 'satyendra-nath-bose',
    name: 'Satyendra Nath Bose',
    nameBengali: 'সত্যেন্দ্রনাথ বসু',
    gender: 'male',
    lifespan: '1894–1974',
    field: 'science',
    borderSide: 'west-bengal-india',
    subtitle: 'The physicist whose name lives on in the “boson.”',
    shortDescription:
      'A Kolkata-born theoretical physicist whose work with Einstein founded Bose–Einstein statistics and predicted the Bose–Einstein condensate. The elementary particle class “boson” is named after him.',
    bodySections: [
      {
        heading: 'Bose–Einstein',
        body:
          'Bose’s insight into the statistics of light quanta, developed with Albert Einstein, became a foundation of quantum physics. An entire class of particles — bosons — bears his name.',
      },
    ],
    honours: ['Padma Vibhushan', 'Fellow of the Royal Society'],
    relatedIconIds: ['icon-jc-bose', 'icon-meghnad-saha'],
    relatedArticleIds: [],
    portraitImage: img('icon-sn-bose', 'Satyendra Nath Bose', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'icon-meghnad-saha',
    slug: 'meghnad-saha',
    name: 'Meghnad Saha',
    nameBengali: 'মেঘনাদ সাহা',
    gender: 'male',
    lifespan: '1893–1956',
    field: 'science',
    borderSide: 'undivided-bengal',
    subtitle: 'The astrophysicist who decoded the stars.',
    shortDescription:
      'An astrophysicist (born in present-day Bangladesh) best known for the Saha ionization equation, which links the spectra of stars to their temperature — a cornerstone of modern astrophysics.',
    bodySections: [
      {
        heading: 'Reading the light of stars',
        body:
          'Saha’s ionization equation made it possible to interpret stellar spectra, transforming astrophysics. He was also a builder of scientific institutions in India.',
      },
    ],
    honours: ['Fellow of the Royal Society'],
    relatedIconIds: ['icon-sn-bose'],
    relatedArticleIds: [],
    portraitImage: img('icon-meghnad-saha', 'Meghnad Saha', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'icon-pc-ray',
    slug: 'prafulla-chandra-ray',
    name: 'Prafulla Chandra Ray',
    nameBengali: 'প্রফুল্লচন্দ্র রায়',
    alsoKnownAs: 'Acharya P. C. Ray',
    gender: 'male',
    lifespan: '1861–1944',
    field: 'science',
    borderSide: 'undivided-bengal',
    subtitle: 'The father of Indian chemistry and industry.',
    shortDescription:
      'A pioneering chemist and entrepreneur, founder of Bengal Chemicals (India’s first pharmaceutical company), and a teacher who mentored a generation of Indian scientists.',
    bodySections: [
      {
        heading: 'Science and self-reliance',
        body:
          'Acharya P. C. Ray combined original chemistry with a mission of Indian self-reliance, founding Bengal Chemicals and inspiring students including S. N. Bose and Meghnad Saha.',
      },
    ],
    relatedIconIds: ['icon-sn-bose', 'icon-meghnad-saha'],
    relatedArticleIds: [],
    portraitImage: img('icon-pc-ray', 'Prafulla Chandra Ray', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },

  // ============================ ECONOMICS ============================
  {
    id: 'icon-amartya-sen',
    slug: 'amartya-sen',
    name: 'Amartya Sen',
    nameBengali: 'অমর্ত্য সেন',
    gender: 'male',
    lifespan: 'b. 1933',
    field: 'economics',
    borderSide: 'undivided-bengal',
    subtitle: 'Nobel laureate and the conscience of welfare economics.',
    shortDescription:
      'Born in Shantiniketan, Sen won the 1998 Nobel Prize in Economics for his work on welfare economics, social choice, and the study of poverty and famine.',
    bodySections: [
      {
        heading: 'Economics with a human face',
        body:
          'Sen reshaped how the world thinks about welfare, inequality, famine, and human capability — insisting that economics serve human freedom and dignity.',
      },
    ],
    honours: ['Nobel Prize in Economics (1998)', 'Bharat Ratna'],
    relatedIconIds: [],
    relatedArticleIds: [],
    portraitImage: img('icon-amartya-sen', 'Amartya Sen', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: true,
  },

  // ======================= THOUGHT / REFORM =======================
  {
    id: 'icon-vivekananda',
    slug: 'swami-vivekananda',
    name: 'Swami Vivekananda',
    nameBengali: 'স্বামী বিবেকানন্দ',
    alsoKnownAs: 'Narendranath Datta',
    gender: 'male',
    lifespan: '1863–1902',
    field: 'thought-reform',
    borderSide: 'west-bengal-india',
    subtitle: 'The monk who carried Vedanta to the world.',
    shortDescription:
      'A Kolkata-born monk and philosopher, chief disciple of Sri Ramakrishna, who introduced Vedanta and Yoga to the West — famously at the 1893 Parliament of Religions in Chicago — and founded the Ramakrishna Mission.',
    bodySections: [
      {
        heading: '“Sisters and brothers of America”',
        body:
          'Vivekananda’s 1893 Chicago address electrified the world and made him a global voice for India’s spiritual heritage and for human service. He founded the Ramakrishna Mission and Belur Math.',
      },
    ],
    relatedIconIds: [],
    relatedArticleIds: [],
    portraitImage: img('icon-vivekananda', 'Swami Vivekananda', { width: 600, height: 750 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'icon-ramakrishna',
    slug: 'ramakrishna-paramahamsa',
    name: 'Sri Ramakrishna Paramahamsa',
    nameBengali: 'রামকৃষ্ণ পরমহংস',
    gender: 'male',
    lifespan: '1836–1886',
    field: 'thought-reform',
    borderSide: 'west-bengal-india',
    subtitle: 'The mystic saint of Dakshineswar.',
    shortDescription:
      'A revered 19th-century mystic and saint associated with the Dakshineswar Kali Temple, whose teachings on the unity of religions deeply shaped modern Bengali and Indian spirituality.',
    bodySections: [
      {
        heading: 'The unity of faiths',
        body:
          'Ramakrishna taught that all religions lead to the same truth — a message carried worldwide by his disciple Vivekananda. His life centred on the temple at Dakshineswar.',
      },
    ],
    relatedIconIds: ['icon-vivekananda'],
    relatedArticleIds: [],
    portraitImage: img('icon-ramakrishna', 'Sri Ramakrishna Paramahamsa', {
      width: 600,
      height: 750,
    }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'icon-ram-mohan-roy',
    slug: 'raja-ram-mohan-roy',
    name: 'Raja Ram Mohan Roy',
    nameBengali: 'রাজা রামমোহন রায়',
    alsoKnownAs: 'Father of the Bengal Renaissance',
    gender: 'male',
    lifespan: '1772–1833',
    field: 'thought-reform',
    borderSide: 'undivided-bengal',
    subtitle: 'The reformer who lit the Bengal Renaissance.',
    shortDescription:
      'A pioneering social and religious reformer, founder of the Brahmo Samaj, campaigner against social evils, and a foundational figure of the Bengal Renaissance.',
    bodySections: [
      {
        heading: 'Reason and reform',
        body:
          'Ram Mohan Roy championed rational religion, women’s rights and education, and modern learning — earning him the title “father of the Bengal Renaissance.”',
      },
    ],
    relatedIconIds: ['icon-vivekananda'],
    relatedArticleIds: [],
    portraitImage: img('icon-ram-mohan-roy', 'Raja Ram Mohan Roy', { width: 600, height: 750 }),
    isFlagship: false,
    isStub: true,
  },
];
