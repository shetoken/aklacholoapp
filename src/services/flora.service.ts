import type { FloraCategory, FloraItem, FloraSeason } from '@/types';
import { floraItems } from '@/data/flora';
import {
  FLORA_CATEGORY_FILTER_ORDER,
  FLORA_CATEGORY_LABELS,
  SEASON_FILTER_ORDER,
  SEASON_LABELS,
} from '@/constants/flora';
import { mockResponse, NotFoundError } from './api.client';

export {
  FLORA_CATEGORY_LABELS,
  FLORA_CATEGORY_FILTER_ORDER,
  SEASON_LABELS,
  SEASON_FILTER_ORDER,
};

export function getFloraItems(): Promise<FloraItem[]> {
  return mockResponse(floraItems);
}

export function getFlagshipFlora(): Promise<FloraItem[]> {
  return mockResponse(floraItems.filter((item) => item.isFlagship));
}

export function getFloraByCategory(category: FloraCategory): Promise<FloraItem[]> {
  return mockResponse(floraItems.filter((item) => item.category === category));
}

export function getFloraBySeason(season: FloraSeason): Promise<FloraItem[]> {
  return mockResponse(floraItems.filter((item) => item.season === season));
}

export async function getFloraBySlug(slug: string): Promise<FloraItem> {
  const found = floraItems.find((item) => item.slug === slug);
  if (!found) throw new NotFoundError('Flora item', slug);
  return mockResponse(found);
}

export function getGITaggedFlora(): Promise<FloraItem[]> {
  return mockResponse(floraItems.filter((item) => item.hasGITag));
}

export function filterFloraItems(
  items: FloraItem[],
  opts: {
    category?: FloraCategory | null;
    season?: FloraSeason | null;
  },
): FloraItem[] {
  return items.filter((item) => {
    if (opts.category && item.category !== opts.category) return false;
    if (opts.season && item.season !== opts.season) return false;
    return true;
  });
}
