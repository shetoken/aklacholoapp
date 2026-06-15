import type { Bird, BirdHabitat, BirdResidency } from '@/types';
import { birds } from '@/data/birds';
import {
  CONSERVATION_LABELS,
  HABITAT_FILTER_ORDER,
  HABITAT_LABELS,
  OFFICIAL_STATUS_LABELS,
  RESIDENCY_FILTER_ORDER,
  RESIDENCY_LABELS,
} from '@/constants/birds';
import { mockResponse, NotFoundError } from './api.client';

export {
  HABITAT_LABELS,
  HABITAT_FILTER_ORDER,
  RESIDENCY_LABELS,
  RESIDENCY_FILTER_ORDER,
  OFFICIAL_STATUS_LABELS,
  CONSERVATION_LABELS,
};

export function getBirds(): Promise<Bird[]> {
  return mockResponse(birds);
}

export function getFlagshipBirds(): Promise<Bird[]> {
  return mockResponse(birds.filter((bird) => bird.isFlagship));
}

export function getBirdsByHabitat(habitat: BirdHabitat): Promise<Bird[]> {
  return mockResponse(birds.filter((bird) => bird.habitats.includes(habitat)));
}

export function getBirdsByResidency(residency: BirdResidency): Promise<Bird[]> {
  return mockResponse(birds.filter((bird) => bird.residency === residency));
}

export function getOfficialBirds(): Promise<Bird[]> {
  return mockResponse(birds.filter((bird) => bird.officialStatus !== 'none'));
}

export async function getBirdBySlug(slug: string): Promise<Bird> {
  const found = birds.find((bird) => bird.slug === slug);
  if (!found) throw new NotFoundError('Bird', slug);
  return mockResponse(found);
}

export function filterBirds(
  items: Bird[],
  opts: {
    habitat?: BirdHabitat | null;
    residency?: BirdResidency | null;
  },
): Bird[] {
  return items.filter((bird) => {
    if (opts.habitat && !bird.habitats.includes(opts.habitat)) return false;
    if (opts.residency && bird.residency !== opts.residency) return false;
    return true;
  });
}
