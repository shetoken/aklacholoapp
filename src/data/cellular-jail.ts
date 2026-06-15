/**
 * Cellular Jail — documented prisoners & Kala Pani register.
 *
 * ONLY documented, verifiable names. See CELLULAR_JAIL_NOTE for why the list
 * is intentionally incomplete.
 */
import type {
  BorderSide,
  CellularJailNote,
  CellularJailOverview,
  CellularJailPrisoner,
  StruggleMovement,
} from '@/types';

/** Shared tags for the twelve Alipore Bomb Case deportees (1909). */
const ALIPORE_CASE = {
  case: 'Alipore Bomb Case (1908)',
  yearDeported: '1909',
  movements: ['anushilan-jugantar', 'swadeshi'] as StruggleMovement[],
  borderSide: 'undivided-bengal' as BorderSide,
};

export const cellularJailPrisoners: CellularJailPrisoner[] = [
  {
    ...ALIPORE_CASE,
    id: 'cj-barindra-ghosh',
    name: 'Barindra Kumar Ghosh',
    nameBengali: 'বারীন্দ্রকুমার ঘোষ',
    gender: 'male',
    origin: 'Bengal (brother of Sri Aurobindo)',
    fate: 'survived-released',
    circumstances:
      'Ideologue and organiser of revolutionary bomb-making units; initially sentenced to death, commuted to transportation for life; deported to the Cellular Jail in 1909.',
    source: 'Historical record of the Alipore Bomb Case; The Statesman, "Overdue Honour" (2026)',
  },
  {
    ...ALIPORE_CASE,
    id: 'cj-ullaskar-dutta',
    name: 'Ullaskar Dutta',
    nameBengali: 'উল্লাসকর দত্ত',
    gender: 'male',
    lifespan: '1885–1965',
    borderSide: 'bangladesh',
    origin: 'Kalikachha, Brahmanbaria (present-day Bangladesh)',
    fate: 'broke-mentally',
    circumstances:
      'Principal bomb-maker of the Jugantar group. Subjected to brutal torture and repeated electrocution in the Cellular Jail; is said to have lost his mental balance. Released in 1920.',
    source: 'Wikipedia (Ullaskar Dutt); The Statesman, "Overdue Honour" (2026)',
  },
  {
    ...ALIPORE_CASE,
    id: 'cj-hemchandra-kanungo',
    name: 'Hemchandra Das Kanungo',
    nameBengali: 'হেমচন্দ্র কানুনগো',
    gender: 'male',
    origin: 'Bengal',
    fate: 'survived-released',
    circumstances:
      'Travelled to Paris to learn bomb-making (picric acid) from exiled Russian revolutionaries; considered among the most dangerous by the British.',
    source: 'The Statesman, "Overdue Honour" (2026)',
  },
  {
    ...ALIPORE_CASE,
    id: 'cj-upendranath-banerjee',
    name: 'Upendranath Banerjee',
    gender: 'male',
    origin: 'Bengal',
    fate: 'survived-released',
    circumstances: 'One of the twelve revolutionaries of undivided Bengal deported in the Alipore case.',
    source: 'The Statesman, "Overdue Honour" (2026)',
  },
  {
    ...ALIPORE_CASE,
    id: 'cj-abinash-bhattacharya',
    name: 'Abinash Chandra Bhattacharya',
    gender: 'male',
    origin: 'Bengal',
    fate: 'unknown',
    circumstances: 'One of the twelve revolutionaries of undivided Bengal deported in the Alipore case.',
    source: 'The Statesman, "Overdue Honour" (2026)',
  },
  {
    ...ALIPORE_CASE,
    id: 'cj-bibhuti-sarkar',
    name: 'Bibhuti Bhushan Sarkar',
    gender: 'male',
    origin: 'Bengal',
    fate: 'unknown',
    circumstances: 'One of the twelve revolutionaries of undivided Bengal deported in the Alipore case.',
    source: 'The Statesman, "Overdue Honour" (2026)',
  },
  {
    ...ALIPORE_CASE,
    id: 'cj-indubhushan-roy',
    name: 'Indubhushan Roy',
    gender: 'male',
    origin: 'Bengal',
    fate: 'died-in-jail',
    circumstances:
      'Sent to the Cellular Jail in connection with the Alipore Bomb Case. (Confirm details of death against primary records before publishing as a death.)',
    source: 'andamaninsight.com history of Cellular Jail; The Statesman (2026) — verify cause/year of death',
  },
  {
    ...ALIPORE_CASE,
    id: 'cj-paresh-moulik',
    name: 'Paresh Chandra Moulik',
    gender: 'male',
    origin: 'Bengal',
    fate: 'unknown',
    circumstances: 'One of the twelve revolutionaries of undivided Bengal deported in the Alipore case.',
    source: 'The Statesman, "Overdue Honour" (2026)',
  },
  {
    ...ALIPORE_CASE,
    id: 'cj-hrishikesh-kanjilal',
    name: 'Hrishikesh Kanjilal',
    gender: 'male',
    origin: 'Bengal',
    fate: 'unknown',
    circumstances: 'One of the twelve revolutionaries of undivided Bengal deported in the Alipore case.',
    source: 'The Statesman, "Overdue Honour" (2026)',
  },
  {
    ...ALIPORE_CASE,
    id: 'cj-biren-sen',
    name: 'Biren Chandra Sen',
    gender: 'male',
    origin: 'Bengal',
    fate: 'unknown',
    circumstances: 'One of the twelve revolutionaries of undivided Bengal deported in the Alipore case.',
    source: 'The Statesman, "Overdue Honour" (2026)',
  },
  {
    ...ALIPORE_CASE,
    id: 'cj-sudhir-sarkar',
    name: 'Sudhir Kumar Sarkar',
    gender: 'male',
    origin: 'Bengal',
    fate: 'unknown',
    circumstances: 'One of the twelve revolutionaries of undivided Bengal deported in the Alipore case.',
    source: 'The Statesman, "Overdue Honour" (2026)',
  },
  {
    ...ALIPORE_CASE,
    id: 'cj-nirapada-roy',
    name: 'Nirapada Roy',
    gender: 'male',
    origin: 'Bengal',
    fate: 'unknown',
    circumstances: 'One of the twelve revolutionaries of undivided Bengal deported in the Alipore case.',
    source: 'The Statesman, "Overdue Honour" (2026)',
  },
  {
    id: 'cj-mohit-moitra',
    name: 'Mohit Moitra',
    gender: 'male',
    origin: 'Bengal',
    borderSide: 'undivided-bengal',
    movements: ['anushilan-jugantar'],
    case: '1933 Cellular Jail hunger strike',
    fate: 'died-in-jail',
    circumstances:
      'Died as a result of the 1933 hunger strike demanding better treatment for political prisoners.',
    source: 'andamaninsight.com history of Cellular Jail',
  },
  {
    id: 'cj-trailokyanath-chakraborty',
    name: 'Trailokyanath Chakraborty',
    gender: 'male',
    origin: 'Bengal',
    borderSide: 'undivided-bengal',
    movements: ['anushilan-jugantar'],
    case: 'Revolutionary activities (multiple terms)',
    fate: 'survived-released',
    circumstances:
      'A long-imprisoned revolutionary remembered for enduring great hardship at the Cellular Jail without giving up.',
    source: 'andamantravelcare.com history of Cellular Jail',
  },
  {
    id: 'cj-batukeshwar-dutt',
    name: 'Batukeshwar Dutt',
    nameBengali: 'বটুকেশ্বর দত্ত',
    gender: 'male',
    origin: 'Bengal',
    borderSide: 'undivided-bengal',
    movements: ['other'],
    case: 'Central Legislative Assembly bombing (with Bhagat Singh)',
    yearDeported: '1929',
    fate: 'survived-released',
    circumstances:
      'Imprisoned in the Cellular Jail in 1929 after the Central Legislative Assembly bombing protest.',
    source: 'andamaninsight.com; andamantravelcare.com',
  },
];

export const CELLULAR_JAIL_NOTE: CellularJailNote = {
  headline: 'Why this list is not complete',
  body:
    'The names here are the documented prisoners of the Cellular Jail whose records survive. A complete register of everyone imprisoned or who died at the jail does not exist: the colonial authorities did not fully record it, and in 2025 the Government of India confirmed that prisoners’ records are "not available" with the Andaman administration. We honour the known by name, and we honour the unknown by telling the truth about the silence. Names will be added only as they are verified from the Cellular Jail National Memorial and historical archives.',
  sources: [
    'Cellular Jail National Memorial, Port Blair (memorial plaques)',
    'Archaeological Survey of India',
    'Netaji Research Bureau, Kolkata',
    'The Statesman, "Overdue Honour" (2026); Outlook India (2025)',
  ],
};

export const cellularJailIntro: CellularJailOverview = {
  title: 'The Cellular Jail & the Kala Pani Exile',
  titleBengali: 'সেলুলার জেল / কালাপানি',
  location: 'Port Blair, Andaman Islands (the Andamans, not the Nicobar group)',
  builtPeriod: 'Completed 1906',
  summary:
    'The Cellular Jail at Port Blair — the dreaded "Kala Pani" (black water) — was where the British exiled and isolated political prisoners, including many Bengali revolutionaries. Solitary cells, forced labour, and brutal conditions made it a place of immense suffering and death.',
  significance:
    'A central symbol of colonial repression and revolutionary sacrifice. Many freedom fighters from Bengal and across India were transported here; some died of disease, torture, hunger strikes, or execution.',
  dataIntegrityNote: CELLULAR_JAIL_NOTE.body,
  authoritativeSources: CELLULAR_JAIL_NOTE.sources,
  verifiedMartyrs: [],
};
