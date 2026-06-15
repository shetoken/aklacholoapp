import type { Creator, Craft, CraftCreatorTag, CraftMedium } from '@/types';
import { crafts } from '@/data/crafts';
import { creators } from '@/data/creators';
import { sarees } from '@/data/sarees';
import { heritageBuildings } from '@/data/heritage-buildings';
import {
  CRAFT_MEDIUM_FILTER_ORDER,
  CRAFT_MEDIUM_LABELS,
} from '@/constants/crafts';
import { mockResponse, NotFoundError } from './api.client';

export { CRAFT_MEDIUM_LABELS, CRAFT_MEDIUM_FILTER_ORDER };

export function getCrafts(): Promise<Craft[]> {
  return mockResponse(crafts);
}

export function getFlagshipCrafts(): Promise<Craft[]> {
  return mockResponse(crafts.filter((craft) => craft.isFlagship));
}

export function getCraftsByMedium(medium: CraftMedium): Promise<Craft[]> {
  return mockResponse(crafts.filter((craft) => craft.medium === medium));
}

export async function getCraftBySlug(slug: string): Promise<Craft> {
  const found = crafts.find((craft) => craft.slug === slug);
  if (!found) throw new NotFoundError('Craft', slug);
  return mockResponse(found);
}

export function getRelatedCrafts(craftId: string): Promise<Craft[]> {
  const craft = crafts.find((item) => item.id === craftId);
  if (!craft) return mockResponse([]);
  const related = craft.relatedCraftIds
    .map((id) => crafts.find((item) => item.id === id))
    .filter((item): item is Craft => Boolean(item));
  return mockResponse(related);
}

/** Makers whose specialtyTags overlap the craft's creatorTags. */
export function getMakersForCraft(craftId: string): Promise<Creator[]> {
  const tags = crafts.find((item) => item.id === craftId)?.creatorTags ?? [];
  if (tags.length === 0) return mockResponse([]);

  const matched = creators.filter((creator) =>
    creator.specialtyTags.some((tag) => tags.includes(tag as CraftCreatorTag)),
  );
  return mockResponse(matched);
}

export function getSareesForCraft(craftId: string) {
  const ids = crafts.find((item) => item.id === craftId)?.relatedSareeIds ?? [];
  const related = ids
    .map((id) => sarees.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  return mockResponse(related);
}

export function getBuildingsForCraft(craftId: string) {
  const ids = crafts.find((item) => item.id === craftId)?.relatedBuildingIds ?? [];
  const related = ids
    .map((id) => heritageBuildings.find((b) => b.id === id))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));
  return mockResponse(related);
}
