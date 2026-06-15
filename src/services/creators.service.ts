import type { Creator } from '@/types';
import {
  creators,
  allSpecialtyTags,
  getCategoryDescription,
  getCategoryLabel,
  getServiceLabel,
  getTagDescription,
  getTagLabel,
} from '@/data';
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

/** Creators who accept commissions, teach, or perform — Commission tab hook. */
export function getCommissionCreators(): Promise<Creator[]> {
  const eligible = creators.filter((c) =>
    c.services.some((s) => s === 'commission' || s === 'teach' || s === 'perform'),
  );
  return mockResponse(eligible);
}

/** Creators with shop pieces linked. */
export function getShopCreators(): Promise<Creator[]> {
  const eligible = creators.filter(
    (c) => c.services.includes('sell-products') && c.productIds.length > 0,
  );
  return mockResponse(eligible);
}

/** Filter creators by name, discipline, region, taxonomy tags, and categories. */
export function filterCreators(items: Creator[], query: string): Creator[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return items.filter((creator) => {
    const categoryLabels = creator.categories.map((id) =>
      getCategoryLabel(id).toLowerCase(),
    );
    const categoryDescriptions = creator.categories.map((id) =>
      getCategoryDescription(id).toLowerCase(),
    );
    const tagLabels = creator.specialtyTags.map((t) =>
      getTagLabel(t).toLowerCase(),
    );
    const tagDescriptions = creator.specialtyTags.map((t) =>
      getTagDescription(t).toLowerCase(),
    );
    const serviceLabels = creator.services.map((s) =>
      getServiceLabel(s).toLowerCase(),
    );
    const haystack = [
      creator.name,
      creator.discipline,
      String(creator.region),
      creator.bio,
      creator.disciplineType ?? '',
      ...creator.specialtyTags,
      ...categoryLabels,
      ...categoryDescriptions,
      ...tagLabels,
      ...tagDescriptions,
      ...serviceLabels,
    ]
      .join(' ')
      .toLowerCase();

    return terms.every((term) => haystack.includes(term));
  });
}

/** Taxonomy tag list — for future filter UI (service layer only). */
export function getAllSpecialtyTags(): Promise<readonly string[]> {
  return mockResponse(allSpecialtyTags());
}

export { getTagLabel } from '@/data';
