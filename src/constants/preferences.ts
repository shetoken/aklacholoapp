/** First-time sign-in preference options — drives home personalization. */
import type { BengalConnection, HomeInterest } from '@/types';

export const BENGAL_CONNECTIONS: {
  id: BengalConnection;
  label: string;
  description: string;
}[] = [
  {
    id: 'diaspora',
    label: 'Bengali abroad',
    description: 'I carry Bengal far from home',
  },
  {
    id: 'exploring',
    label: 'New to Bengal',
    description: "I'm discovering her for the first time",
  },
  {
    id: 'heritage',
    label: 'Heritage keeper',
    description: 'I want to go deeper into tradition',
  },
  {
    id: 'creative',
    label: 'Maker & collector',
    description: 'Craft, design, and commissioning interest me',
  },
];

export const HOME_INTERESTS: { id: HomeInterest; label: string }[] = [
  { id: 'stories', label: 'Culture & stories' },
  { id: 'crafts', label: 'Craft & textiles' },
  { id: 'food', label: 'Food' },
  { id: 'music', label: 'Music' },
  { id: 'travel', label: 'Travel' },
  { id: 'learn', label: 'Learning' },
  { id: 'shop', label: 'Shopping' },
  { id: 'hire', label: 'Commissioning' },
];

export const CONNECTION_WELCOME: Record<BengalConnection, string> = {
  diaspora: 'Welcome back to the thread — Bengal, wherever you are.',
  exploring: 'Welcome — let Bengal reveal herself, one story at a time.',
  heritage: 'Welcome — deepen the heritage you already carry.',
  creative: 'Welcome — explore Bengal through makers, weavers, and design.',
};

export type HomeSectionId =
  | 'journey'
  | 'stories'
  | 'learn'
  | 'travel'
  | 'shop'
  | 'hire'
  | 'collections'
  | 'studio';

const INTEREST_SECTIONS: Record<HomeInterest, HomeSectionId[]> = {
  stories: ['stories'],
  crafts: ['shop', 'stories'],
  food: ['stories'],
  music: ['stories'],
  travel: ['travel'],
  learn: ['learn'],
  shop: ['shop'],
  hire: ['hire'],
};

const DEFAULT_HOME_ORDER: HomeSectionId[] = [
  'journey',
  'stories',
  'learn',
  'travel',
  'shop',
  'hire',
  'collections',
  'studio',
];

/** Rank home feed sections — matched interests surface first. */
export function orderHomeSections(interests: HomeInterest[]): HomeSectionId[] {
  if (interests.length === 0) return DEFAULT_HOME_ORDER;

  const ordered: HomeSectionId[] = ['journey'];
  interests.forEach((interest) => {
    INTEREST_SECTIONS[interest].forEach((section) => {
      if (!ordered.includes(section)) ordered.push(section);
    });
  });
  DEFAULT_HOME_ORDER.forEach((section) => {
    if (!ordered.includes(section)) ordered.push(section);
  });
  return ordered;
}

const INTEREST_TAG_HINTS: Partial<Record<HomeInterest, string[]>> = {
  food: ['food', 'cuisine', 'kitchen'],
  music: ['music', 'song', 'rabindra'],
  crafts: ['craft', 'textile', 'kolka', 'weave', 'muslin', 'artisan'],
  stories: ['culture', 'history', 'literature'],
};

/** Boost articles whose tags match chosen interests. */
export function sortArticlesByInterests<T extends { tags: string[] }>(
  articles: T[],
  interests: HomeInterest[],
): T[] {
  if (interests.length === 0) return articles;

  const hints = interests.flatMap((i) => INTEREST_TAG_HINTS[i] ?? []);
  if (hints.length === 0) return articles;

  return [...articles].sort((a, b) => {
    const score = (tags: string[]) =>
      hints.reduce(
        (sum, hint) =>
          sum + (tags.some((t) => t.toLowerCase().includes(hint)) ? 1 : 0),
        0,
      );
    return score(b.tags) - score(a.tags);
  });
}
