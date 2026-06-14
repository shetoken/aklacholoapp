import type { Collection } from '@/types';
import { collections } from '@/data';
import { mockResponse, NotFoundError } from './api.client';

/** All collections, in curated order. */
export function getCollections(): Promise<Collection[]> {
  return mockResponse(collections);
}

/** A single collection by id. */
export async function getCollectionById(id: string): Promise<Collection> {
  const found = collections.find((c) => c.id === id);
  if (!found) throw new NotFoundError('Collection', id);
  return mockResponse(found);
}

/** Featured subset for the Home feed. */
export function getFeaturedCollections(limit = 3): Promise<Collection[]> {
  return mockResponse(collections.slice(0, limit));
}

/** Resolve a list of collection ids, preserving order, skipping unknowns. */
export function getCollectionsByIds(ids: string[]): Promise<Collection[]> {
  const ordered = ids
    .map((id) => collections.find((c) => c.id === id))
    .filter((c): c is Collection => Boolean(c));
  return mockResponse(ordered);
}
