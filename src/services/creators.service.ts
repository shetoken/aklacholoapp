import type { Creator } from '@/types';
import { creators } from '@/data';
import { mockResponse, NotFoundError } from './api.client';

export function getCreators(): Promise<Creator[]> {
  return mockResponse(creators);
}

export async function getCreatorById(id: string): Promise<Creator> {
  const found = creators.find((c) => c.id === id);
  if (!found) throw new NotFoundError('Creator', id);
  return mockResponse(found);
}

export function getCreatorsByIds(ids: string[]): Promise<Creator[]> {
  const ordered = ids
    .map((id) => creators.find((c) => c.id === id))
    .filter((c): c is Creator => Boolean(c));
  return mockResponse(ordered);
}

export function getFeaturedCreators(limit = 4): Promise<Creator[]> {
  return mockResponse(creators.slice(0, limit));
}

/** Filter creators by name, discipline, region, and bio. */
export function filterCreators(items: Creator[], query: string): Creator[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return items.filter((creator) => {
    const haystack =
      `${creator.name} ${creator.discipline} ${creator.region} ${creator.bio} ${creator.disciplineType}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}
