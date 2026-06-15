import type { LearnTopic } from '@/types';
import { img } from '@/constants/images';

/** Preview tiles for Experience → Learn (classes coming soon). */
export const learnTopics: LearnTopic[] = [
  {
    id: 'learn_language',
    title: 'Bengali language',
    detail: 'Script, phrases, and pronunciation',
    image: img('learn-language', 'Bengali script', { aspectRatio: 1 }),
  },
  {
    id: 'learn_kolka',
    title: 'Kolka art',
    detail: 'Motifs, palettes, and composition',
    image: img('learn-kolka', 'Kolka motifs', { aspectRatio: 1 }),
  },
  {
    id: 'learn_craft',
    title: 'Embroidery & craft',
    detail: 'Kantha, terracotta, and more',
    image: img('learn-craft', 'Kantha embroidery', { aspectRatio: 1 }),
  },
  {
    id: 'learn_history',
    title: 'Bengal history',
    detail: 'People, rivers, and movements',
    image: img('learn-history', 'Bengal history', { aspectRatio: 1 }),
  },
  {
    id: 'learn_cooking',
    title: 'Bengali cooking',
    detail: 'Techniques and seasonal meals',
    image: img('learn-cooking', 'Bengali cooking', { aspectRatio: 1 }),
  },
  {
    id: 'learn_story',
    title: 'Storytelling',
    detail: 'Folklore, literature, and film',
    image: img('learn-story', 'Bengali storytelling', { aspectRatio: 1 }),
  },
  {
    id: 'learn_music',
    title: 'Bengali music',
    detail: 'Classical, folk, and Rabindra Sangeet',
    image: img('learn-music', 'Bengali music', { aspectRatio: 1 }),
  },
  {
    id: 'learn_dance',
    title: 'Dance',
    detail: 'Classical and folk movement',
    image: img('learn-dance', 'Bengali dance', { aspectRatio: 1 }),
  },
  {
    id: 'learn_film',
    title: 'Cinema',
    detail: 'Satyajit Ray and beyond',
    image: img('learn-film', 'Bengali cinema', { aspectRatio: 1 }),
  },
];
