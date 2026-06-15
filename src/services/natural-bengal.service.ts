import type { HeritageTag, NaturalResource, ResourceCategory } from '@/types';
import { naturalResources } from '@/data/natural-bengal';
import {
  CATEGORY_FILTER_ORDER,
  CATEGORY_LABELS,
  HERITAGE_LABELS,
  REGION_LABELS,
} from '@/constants/natural-bengal';
import { mockResponse, NotFoundError } from './api.client';

export { CATEGORY_LABELS, CATEGORY_FILTER_ORDER, HERITAGE_LABELS, REGION_LABELS };

export function getNaturalResources(): Promise<NaturalResource[]> {
  return mockResponse(naturalResources);
}

export function getFlagshipResources(): Promise<NaturalResource[]> {
  return mockResponse(naturalResources.filter((resource) => resource.isFlagship));
}

export function getResourcesByCategory(
  category: ResourceCategory,
): Promise<NaturalResource[]> {
  return mockResponse(naturalResources.filter((resource) => resource.category === category));
}

export async function getResourceBySlug(slug: string): Promise<NaturalResource> {
  const found = naturalResources.find((resource) => resource.slug === slug);
  if (!found) throw new NotFoundError('Natural resource', slug);
  return mockResponse(found);
}

export function getResourcesByHeritage(tag: HeritageTag): Promise<NaturalResource[]> {
  return mockResponse(naturalResources.filter((resource) => resource.heritage.includes(tag)));
}

export function getRelatedResources(id: string): Promise<NaturalResource[]> {
  const resource = naturalResources.find((item) => item.id === id);
  if (!resource) return mockResponse([]);
  const related = resource.relatedResourceIds
    .map((relatedId) => naturalResources.find((item) => item.id === relatedId))
    .filter((item): item is NaturalResource => Boolean(item));
  return mockResponse(related);
}
