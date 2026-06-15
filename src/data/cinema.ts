/**
 * Cholochitro — cinema of Bengal.
 *
 * Films and movements cross-link to icons.ts (directors, cast) and books.ts.
 */
import type { CinemaEntry } from '@/types';
import { img } from '@/constants/images';

export const cinemaEntries: CinemaEntry[] = [
  {
    id: 'film-tollywood',
    slug: 'tollywood-bengali-cinema',
    type: 'movement-era',
    title: 'Tollywood & Bengali Cinema',
    titleBengali: 'টলিউড',
    borderSide: 'across-bengal',
    year: '1910s–present',
    subtitle: 'The Bengali-language film industry, a cradle of art cinema.',
    shortDescription:
      'Centred in the Tollygunge area of Kolkata, “Tollywood” is the Bengali-language film industry — historically a powerhouse of Indian art and parallel cinema, and home to a golden age of popular film.',
    bodySections: [
      {
        heading: 'Two cinemas, one Bengal',
        body:
          'Bengali cinema gave the world both a celebrated art-house tradition (Ray, Ghatak, Mrinal Sen) and a beloved popular cinema — the golden-age romances of Uttam Kumar and Suchitra Sen — alongside a vibrant contemporary industry.',
      },
    ],
    relatedCinemaIds: ['film-pather-panchali', 'film-apu-trilogy'],
    relatedArticleIds: [],
    posterImage: img('cinema-tollywood', 'Tollywood & Bengali Cinema', { width: 600, height: 900 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'film-pather-panchali',
    slug: 'pather-panchali-film',
    type: 'film',
    title: 'Pather Panchali',
    titleBengali: 'পথের পাঁচালী',
    englishTitle: 'Song of the Little Road',
    year: '1955',
    borderSide: 'west-bengal-india',
    subtitle: 'The film that put Indian cinema on the world map.',
    shortDescription:
      'Satyajit Ray’s 1955 debut, adapted from Bibhutibhushan Bandyopadhyay’s novel — a landmark of world cinema that launched the Apu Trilogy and Indian parallel cinema, and won a major prize at Cannes.',
    bodySections: [
      {
        heading: 'A debut that changed everything',
        body:
          'Made by a first-time director working at an ad agency, Pather Panchali brought the rhythms of rural Bengal to the screen with revolutionary realism and tenderness — and announced India to world cinema. Its score was by a young Ravi Shankar.',
      },
    ],
    directorIconId: 'icon-satyajit-ray',
    directorName: 'Satyajit Ray',
    sourceBookId: 'book-pather-panchali',
    honours: ['Major prize at the Cannes Film Festival', 'National Film Awards'],
    relatedCinemaIds: ['film-apu-trilogy', 'film-charulata'],
    relatedArticleIds: [],
    posterImage: img('cinema-pather-panchali', 'Pather Panchali (1955)', { width: 600, height: 900 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'film-apu-trilogy',
    slug: 'apu-trilogy',
    type: 'film',
    title: 'The Apu Trilogy',
    titleBengali: 'অপু ত্রয়ী',
    year: '1955–1959',
    borderSide: 'west-bengal-india',
    subtitle: 'Three films that follow a life from childhood to fatherhood.',
    shortDescription:
      'Satyajit Ray’s trilogy — Pather Panchali (1955), Aparajito (1956), and Apur Sansar (1959) — tracing Apu from village childhood to manhood; together among the most acclaimed achievements in film history.',
    bodySections: [
      {
        heading: 'A life, in three films',
        body:
          'Following Apu across the trilogy, Ray created an intimate epic of growing up, loss, and renewal that routinely appears on lists of the greatest films ever made.',
      },
    ],
    directorIconId: 'icon-satyajit-ray',
    directorName: 'Satyajit Ray',
    sourceBookId: 'book-aparajito',
    relatedCinemaIds: ['film-pather-panchali'],
    relatedArticleIds: [],
    posterImage: img('cinema-apu-trilogy', 'The Apu Trilogy', { width: 600, height: 900 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'film-charulata',
    slug: 'charulata',
    type: 'film',
    title: 'Charulata',
    titleBengali: 'চারুলতা',
    englishTitle: 'The Lonely Wife',
    year: '1964',
    borderSide: 'west-bengal-india',
    subtitle: 'Ray’s exquisite study of a lonely wife’s awakening.',
    shortDescription:
      'Widely considered one of Satyajit Ray’s finest films — a subtle, beautifully crafted portrait of a neglected wife’s emotional and intellectual awakening, based on a Tagore novella.',
    bodySections: [
      {
        heading: 'A masterpiece of restraint',
        body:
          'Charulata’s delicate emotional shading and famous garden-swing sequence are often cited as the summit of Ray’s art. It draws on Tagore’s Nastanirh.',
      },
    ],
    directorIconId: 'icon-satyajit-ray',
    directorName: 'Satyajit Ray',
    castIconIds: ['icon-soumitra'],
    honours: ['Multiple international awards'],
    relatedCinemaIds: ['film-pather-panchali'],
    relatedArticleIds: [],
    posterImage: img('cinema-charulata', 'Charulata', { width: 600, height: 900 }),
    isFlagship: false,
    isStub: true,
  },
  {
    id: 'film-meghe-dhaka-tara',
    slug: 'meghe-dhaka-tara',
    type: 'film',
    title: 'Meghe Dhaka Tara',
    titleBengali: 'মেঘে ঢাকা তারা',
    englishTitle: 'The Cloud-Capped Star',
    year: '1960',
    borderSide: 'west-bengal-india',
    subtitle: 'Ghatak’s devastating portrait of a Partition refugee family.',
    shortDescription:
      'Ritwik Ghatak’s 1960 masterpiece about a self-sacrificing young woman in a refugee family after Partition — the first of his Partition trilogy, known for its emotional and sonic intensity.',
    bodySections: [
      {
        heading: 'The cloud-capped star',
        body:
          'Through Nita, who gives everything for her family, Ghatak turned the wound of Partition into searing melodrama. With Komal Gandhar (1961) and Subarnarekha (1962) it forms his Partition trilogy.',
      },
    ],
    directorIconId: 'icon-ritwik-ghatak',
    directorName: 'Ritwik Ghatak',
    relatedCinemaIds: ['film-tollywood'],
    relatedArticleIds: [],
    posterImage: img('cinema-meghe-dhaka-tara', 'Meghe Dhaka Tara', { width: 600, height: 900 }),
    isFlagship: true,
    isStub: false,
  },
  {
    id: 'film-ghare-baire',
    slug: 'ghare-baire-film',
    type: 'film',
    title: 'Ghare Baire',
    titleBengali: 'ঘরে বাইরে',
    englishTitle: 'The Home and the World',
    year: '1984',
    borderSide: 'west-bengal-india',
    subtitle: 'Ray’s adaptation of Tagore’s novel of love and nationalism.',
    shortDescription:
      'Satyajit Ray’s 1984 adaptation of Tagore’s novel, dramatising the collision of love, idealism and nationalism during the Swadeshi movement.',
    bodySections: [
      {
        heading: 'Page to screen',
        body:
          'Ray brought Tagore’s Ghare Baire to film late in his career, sustaining the novel’s moral complexity about the seductions and dangers of nationalism.',
      },
    ],
    directorIconId: 'icon-satyajit-ray',
    directorName: 'Satyajit Ray',
    sourceBookId: 'book-ghare-baire',
    relatedCinemaIds: ['film-charulata'],
    relatedArticleIds: [],
    posterImage: img('cinema-ghare-baire', 'Ghare Baire (1984)', { width: 600, height: 900 }),
    isFlagship: false,
    isStub: true,
  },
];
