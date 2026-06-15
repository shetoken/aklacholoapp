/**
 * Pakhi — birds of Bengal seed data.
 *
 * Official birds of both Bengals, Sundarbans specialists, and wetland migrants.
 * Verify conservation statuses before publishing.
 */
import type { Bird } from '@/types';
import { img } from '@/constants/images';

export const birds: Bird[] = [
  {
    id: 'bird-doyel',
    slug: 'oriental-magpie-robin-doyel',
    name: 'Oriental Magpie-Robin',
    nameBengali: 'দোয়েল',
    alsoKnownAs: 'Doyel / Doel',
    scientificName: 'Copsychus saularis',
    habitats: ['urban-village', 'widespread'],
    residency: 'resident',
    officialStatus: 'national-bird-bangladesh',
    conservation: 'common',
    borderSide: 'across-bengal',
    subtitle: 'The singing doyel — national bird of Bangladesh.',
    shortDescription:
      'A small, sprightly black-and-white songbird famed for its melodious song and its upward-jerking white-fringed tail. The doyel is the national bird of Bangladesh and a familiar friend of gardens and villages across Bengal.',
    bodySections: [
      {
        heading: 'The voice of the morning',
        body:
          'The male sings lustily from a favourite treetop in the breeding season, especially at dawn and dusk. Common in both town and country, the doyel is loved as a symbol of joy, wit, and good fortune.',
      },
      {
        heading: 'A national emblem',
        body:
          'As Bangladesh’s national bird, the doyel appears on currency and stamps — a humble, everyday bird raised to a symbol of the nation’s charm.',
      },
    ],
    culturalNote: 'National bird of Bangladesh; a symbol of joy and intelligence, featured on currency.',
    bestSeenAt: ['Gardens and villages across Bengal'],
    relatedBirdIds: ['bird-white-throated-kingfisher'],
    relatedArticleIds: [],
    image: img('bird-doyel', 'Oriental Magpie-Robin (Doyel)', { width: 800, height: 600 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'bird-white-throated-kingfisher',
    slug: 'white-throated-kingfisher',
    name: 'White-throated Kingfisher',
    nameBengali: 'মাছরাঙা',
    alsoKnownAs: 'Machhranga',
    scientificName: 'Halcyon smyrnensis',
    habitats: ['wetland', 'river-delta', 'urban-village', 'widespread'],
    residency: 'resident',
    officialStatus: 'state-bird-west-bengal',
    conservation: 'common',
    borderSide: 'across-bengal',
    subtitle: 'The electric-blue kingfisher — state bird of West Bengal.',
    shortDescription:
      'A large, brilliantly coloured kingfisher with an electric-blue back, chestnut-brown body, heavy orange bill and a snow-white throat. It is the state bird of West Bengal and a common sight perched by water and fields.',
    bodySections: [
      {
        heading: 'A flash of blue',
        body:
          'Often seen on fence posts and wires near wetlands and paddy fields, it gives a jarring, descending laughing call in flight. Unlike many kingfishers it hunts well away from water too, taking insects and lizards.',
      },
    ],
    culturalNote: 'State bird of West Bengal.',
    bestSeenAt: ['Wetlands, ponds and fields across Bengal', 'Sundarbans villages'],
    relatedBirdIds: ['bird-brown-winged-kingfisher', 'bird-doyel'],
    relatedResourceIds: ['nat-east-kolkata-wetlands'],
    relatedArticleIds: [],
    image: img('bird-white-throated-kingfisher', 'White-throated Kingfisher', {
      width: 800,
      height: 600,
    }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'bird-brown-winged-kingfisher',
    slug: 'brown-winged-kingfisher',
    name: 'Brown-winged Kingfisher',
    nameBengali: 'বাদামি-ডানা মাছরাঙা',
    scientificName: 'Pelargopsis amauroptera',
    habitats: ['mangrove-sundarbans'],
    residency: 'resident',
    officialStatus: 'none',
    conservation: 'near-threatened',
    borderSide: 'across-bengal',
    subtitle: 'A mangrove specialist of the Sundarbans.',
    shortDescription:
      'A large kingfisher largely restricted to mangrove and coastal habitats — the Sundarbans is a global stronghold for this near-threatened species.',
    bodySections: [
      {
        heading: 'A bird of the tidal forest',
        body:
          'The Sundarbans holds 8 of India’s 12 kingfisher species, and the brown-winged kingfisher is among its prized mangrove specialists, dependent on the tidal creeks of the delta.',
      },
    ],
    bestSeenAt: ['Sundarbans tidal creeks'],
    relatedBirdIds: ['bird-white-throated-kingfisher', 'bird-masked-finfoot'],
    relatedResourceIds: ['nat-sundarbans'],
    relatedArticleIds: [],
    image: img('bird-brown-winged-kingfisher', 'Brown-winged Kingfisher', {
      width: 800,
      height: 600,
    }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'bird-masked-finfoot',
    slug: 'masked-finfoot',
    name: 'Masked Finfoot',
    nameBengali: 'মুখোশ-পানিমুরগি',
    scientificName: 'Heliopais personatus',
    habitats: ['mangrove-sundarbans', 'wetland'],
    residency: 'resident',
    officialStatus: 'none',
    conservation: 'endangered',
    borderSide: 'across-bengal',
    subtitle: 'One of the Sundarbans’ rarest and most secretive birds.',
    shortDescription:
      'A shy, globally threatened waterbird of the mangroves and quiet waterways — the Sundarbans is one of its last important refuges.',
    bodySections: [
      {
        heading: 'Vanishing from the waterways',
        body:
          'The masked finfoot is among the most threatened birds of the region, its survival closely tied to the health of the Sundarbans and its undisturbed creeks.',
      },
    ],
    bestSeenAt: ['Sundarbans (rare, secretive)'],
    relatedBirdIds: ['bird-brown-winged-kingfisher'],
    relatedResourceIds: ['nat-sundarbans'],
    relatedArticleIds: [],
    image: img('bird-masked-finfoot', 'Masked Finfoot', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'bird-white-bellied-sea-eagle',
    slug: 'white-bellied-sea-eagle',
    name: 'White-bellied Sea Eagle',
    nameBengali: 'সাদা-বুক ঈগল',
    scientificName: 'Haliaeetus leucogaster',
    habitats: ['mangrove-sundarbans', 'river-delta'],
    residency: 'resident',
    officialStatus: 'none',
    conservation: 'common',
    borderSide: 'across-bengal',
    subtitle: 'The great raptor soaring over the delta.',
    shortDescription:
      'A majestic large eagle of coasts and mangroves, often seen soaring over the Sundarbans and the Bay of Bengal coast, hunting fish and sea snakes.',
    bodySections: [
      {
        heading: 'Lord of the mangrove sky',
        body:
          'With its white underparts and broad wings, the white-bellied sea eagle is one of the grandest sights of the Sundarbans, patrolling the tidal channels from above.',
      },
    ],
    bestSeenAt: ['Sundarbans', 'Bay of Bengal coast'],
    relatedBirdIds: ['bird-masked-finfoot'],
    relatedResourceIds: ['nat-sundarbans', 'nat-bengal-coast'],
    relatedArticleIds: [],
    image: img('bird-white-bellied-sea-eagle', 'White-bellied Sea Eagle', {
      width: 800,
      height: 600,
    }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'bird-winter-migrants',
    slug: 'winter-migratory-birds',
    name: 'Winter Migratory Birds',
    nameBengali: 'পরিযায়ী পাখি',
    alsoKnownAs: 'Porijayi Pakhi',
    habitats: ['wetland', 'river-delta'],
    residency: 'winter-migrant',
    officialStatus: 'none',
    conservation: 'unknown',
    borderSide: 'across-bengal',
    subtitle: 'The great winter gathering on Bengal’s wetlands.',
    shortDescription:
      'Each winter Bengal’s wetlands fill with migratory ducks, geese, waders and more, travelling from colder regions — a spectacle that makes places like Santragachi Jheel and the haors famous among birdwatchers.',
    bodySections: [
      {
        heading: 'A haven on the flyway',
        body:
          'Bengal sits on a major migratory route. In winter, wetlands such as Santragachi Jheel (West Bengal) and the haors of Bangladesh host thousands of visiting birds, drawing birders from far and wide.',
      },
    ],
    culturalNote: 'The arrival of winter migrants is a celebrated seasonal event for birdwatchers.',
    bestSeenAt: [
      'Santragachi Jheel',
      'East Kolkata Wetlands',
      'Bangladesh haors (Tanguar, Hakaluki)',
    ],
    relatedBirdIds: ['bird-asian-openbill'],
    relatedResourceIds: ['nat-east-kolkata-wetlands'],
    relatedArticleIds: [],
    image: img('bird-winter-migrants', 'Winter migratory birds on wetlands', {
      width: 800,
      height: 600,
    }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'bird-asian-openbill',
    slug: 'asian-openbill-stork',
    name: 'Asian Openbill Stork',
    nameBengali: 'শামুকখোল',
    alsoKnownAs: 'Shamukkhol',
    scientificName: 'Anastomus oscitans',
    habitats: ['wetland', 'river-delta'],
    residency: 'resident',
    officialStatus: 'none',
    conservation: 'common',
    borderSide: 'across-bengal',
    subtitle: 'The snail-eating stork of the paddy fields.',
    shortDescription:
      'A common stork named for the distinctive gap in its bill, perfect for prising open snails — a familiar sight in Bengal’s monsoon paddy fields and wetlands.',
    bodySections: [
      {
        heading: 'Built for snails',
        body:
          'Its uniquely “open” bill is adapted to extract its favourite prey, the apple snail. Large flocks gather in flooded paddy fields, especially during the monsoon.',
      },
    ],
    bestSeenAt: ['Paddy fields and wetlands across Bengal'],
    relatedBirdIds: ['bird-winter-migrants'],
    relatedResourceIds: ['nat-east-kolkata-wetlands'],
    relatedArticleIds: [],
    image: img('bird-asian-openbill', 'Asian Openbill Stork', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'bird-kokil',
    slug: 'koel-kokil',
    name: 'Asian Koel',
    nameBengali: 'কোকিল',
    alsoKnownAs: 'Kokil',
    scientificName: 'Eudynamys scolopaceus',
    habitats: ['urban-village', 'forest', 'widespread'],
    residency: 'resident',
    officialStatus: 'none',
    conservation: 'common',
    borderSide: 'across-bengal',
    subtitle: 'The cuckoo whose call is the voice of spring.',
    shortDescription:
      'The koel’s rising “ku-oo” call is the sound of the Bengali spring (boshonto), endlessly invoked in poetry, song, and the imagery of Rabindra Sangeet.',
    bodySections: [
      {
        heading: 'The poet’s bird',
        body:
          'More heard than seen, the kokil’s springtime song saturates Bengali literature and music as the herald of boshonto and of longing — perhaps the most poetically beloved bird in Bengal.',
      },
    ],
    culturalNote: 'The emblematic bird of spring (boshonto) in Bengali poetry and song.',
    bestSeenAt: ['Heard everywhere in spring'],
    relatedBirdIds: ['bird-doyel'],
    relatedArticleIds: [],
    image: img('bird-kokil', 'Asian Koel (Kokil)', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'bird-hill-myna',
    slug: 'hill-myna-moyna',
    name: 'Hill Myna',
    nameBengali: 'ময়না',
    alsoKnownAs: 'Moyna',
    scientificName: 'Gracula religiosa',
    habitats: ['forest', 'himalayan-hills'],
    residency: 'resident',
    officialStatus: 'none',
    conservation: 'common',
    borderSide: 'across-bengal',
    subtitle: 'The glossy mimic that speaks like a human.',
    shortDescription:
      'A glossy black forest bird famous for its remarkable ability to mimic human speech — the “moyna” of Bengali households and folklore.',
    bodySections: [
      {
        heading: 'The talking bird',
        body:
          'The hill myna’s gift for mimicry made it a beloved (and sometimes caged) household bird, woven into Bengali folklore and affectionate speech.',
      },
    ],
    culturalNote: 'A folklore favourite, known for mimicking human speech.',
    bestSeenAt: ['Forests of the Dooars and hills'],
    relatedBirdIds: ['bird-kokil'],
    relatedResourceIds: ['nat-darjeeling-himalaya'],
    relatedArticleIds: [],
    image: img('bird-hill-myna', 'Hill Myna (Moyna)', { width: 800, height: 600 }),
    isFlagship: false,
    isStub: true,
  },
];
