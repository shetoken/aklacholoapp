import type { AttireCategory, AttireItem } from '@/types';
import { attireItems } from '@/data/attire';
import { crafts } from '@/data/crafts';
import { sarees } from '@/data/sarees';
import { festivals } from '@/data/festivals-faith';
import {
  ATTIRE_CATEGORY_FILTER_ORDER,
  ATTIRE_CATEGORY_LABELS,
  WORN_BY_FILTER_ORDER,
  WORN_BY_LABELS,
} from '@/constants/attire';
import { mockResponse, NotFoundError } from './api.client';

export {
  ATTIRE_CATEGORY_LABELS,
  ATTIRE_CATEGORY_FILTER_ORDER,
  WORN_BY_LABELS,
  WORN_BY_FILTER_ORDER,
};

export function getAttireItems(): Promise<AttireItem[]> {
  return mockResponse(attireItems);
}

export function getFlagshipAttire(): Promise<AttireItem[]> {
  return mockResponse(attireItems.filter((item) => item.isFlagship));
}

export function getAttireByCategory(category: AttireCategory): Promise<AttireItem[]> {
  return mockResponse(attireItems.filter((item) => item.category === category));
}

export function getBridalAttire(): Promise<AttireItem[]> {
  return mockResponse(attireItems.filter((item) => item.isBridal));
}

export function getMarriedSymbols(): Promise<AttireItem[]> {
  return mockResponse(attireItems.filter((item) => item.isMarriedSymbol));
}

export async function getAttireBySlug(slug: string): Promise<AttireItem> {
  const found = attireItems.find((item) => item.slug === slug);
  if (!found) throw new NotFoundError('Attire item', slug);
  return mockResponse(found);
}

export function getRelatedAttireItems(attireId: string): Promise<AttireItem[]> {
  const item = attireItems.find((entry) => entry.id === attireId);
  if (!item) return mockResponse([]);
  const related = item.relatedItemIds
    .map((id) => attireItems.find((entry) => entry.id === id))
    .filter((entry): entry is AttireItem => Boolean(entry));
  return mockResponse(related);
}

export function getCraftsForAttire(attireId: string) {
  const ids = attireItems.find((entry) => entry.id === attireId)?.relatedCraftIds ?? [];
  const related = ids
    .map((id) => crafts.find((craft) => craft.id === id))
    .filter((craft): craft is NonNullable<typeof craft> => Boolean(craft));
  return mockResponse(related);
}

export function getSareesForAttire(attireId: string) {
  const ids = attireItems.find((entry) => entry.id === attireId)?.relatedSareeIds ?? [];
  const related = ids
    .map((id) => sarees.find((saree) => saree.id === id))
    .filter((saree): saree is NonNullable<typeof saree> => Boolean(saree));
  return mockResponse(related);
}

export function getFestivalsForAttire(attireId: string) {
  const ids = attireItems.find((entry) => entry.id === attireId)?.relatedFestivalIds ?? [];
  const related = ids
    .map((id) => festivals.find((festival) => festival.id === id))
    .filter((festival): festival is NonNullable<typeof festival> => Boolean(festival));
  return mockResponse(related);
}
