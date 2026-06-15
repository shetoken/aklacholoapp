import type { Creator, Saree, SareeAxis, SareeCreatorTag } from '@/types';
import { sarees } from '@/data/sarees';
import { creators } from '@/data/creators';
import { mockResponse, NotFoundError } from './api.client';

export function getSarees(): Promise<Saree[]> {
  return mockResponse(sarees);
}

export async function getSareeById(id: string): Promise<Saree> {
  const found = sarees.find((s) => s.id === id);
  if (!found) throw new NotFoundError('Saree', id);
  return mockResponse(found);
}

export async function getSareeBySlug(slug: string): Promise<Saree> {
  const found = sarees.find((s) => s.slug === slug);
  if (!found) throw new NotFoundError('Saree', slug);
  return mockResponse(found);
}

export function getSareesByAxis(axis: SareeAxis): Promise<Saree[]> {
  return mockResponse(sarees.filter((s) => s.axis === axis));
}

export function getFlagshipSarees(): Promise<Saree[]> {
  return mockResponse(sarees.filter((s) => s.isFlagship));
}

export function getRelatedSarees(id: string): Promise<Saree[]> {
  const saree = sarees.find((s) => s.id === id);
  if (!saree) return mockResponse([]);
  const related = saree.relatedSareeIds
    .map((relatedId) => sarees.find((s) => s.id === relatedId))
    .filter((s): s is Saree => Boolean(s));
  return mockResponse(related);
}

export function getCreatorTagsForSaree(id: string): Promise<SareeCreatorTag[]> {
  const tags = sarees.find((s) => s.id === id)?.relatedCreatorTags ?? [];
  return mockResponse([...tags]);
}

/** Makers whose specialtyTags overlap the saree’s relatedCreatorTags. */
export function getMakersForSaree(sareeId: string): Promise<Creator[]> {
  const tags = sarees.find((s) => s.id === sareeId)?.relatedCreatorTags ?? [];
  if (tags.length === 0) return mockResponse([]);

  const matched = creators.filter((creator) =>
    creator.specialtyTags.some((tag) => tags.includes(tag as SareeCreatorTag)),
  );
  return mockResponse(matched);
}
