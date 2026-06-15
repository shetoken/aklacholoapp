import type { Dal, Fish, FishGroup, FishSeason, FishWaterType } from '@/types';
import { fish, dals } from '@/data/fish-dal';
import {
  FISH_GROUP_FILTER_ORDER,
  FISH_GROUP_LABELS,
  FISH_SEASON_FILTER_ORDER,
  FISH_SEASON_LABELS,
  WATER_TYPE_FILTER_ORDER,
  WATER_TYPE_LABELS,
} from '@/constants/fish-dal';
import { mockResponse, NotFoundError } from './api.client';

export {
  WATER_TYPE_LABELS,
  WATER_TYPE_FILTER_ORDER,
  FISH_GROUP_LABELS,
  FISH_GROUP_FILTER_ORDER,
  FISH_SEASON_LABELS,
  FISH_SEASON_FILTER_ORDER,
};

export function getFish(): Promise<Fish[]> {
  return mockResponse(fish);
}

export function getFlagshipFish(): Promise<Fish[]> {
  return mockResponse(fish.filter((item) => item.isFlagship));
}

export function getFishByWaterType(waterType: FishWaterType): Promise<Fish[]> {
  return mockResponse(fish.filter((item) => item.waterType === waterType));
}

export function getFishByGroup(group: FishGroup): Promise<Fish[]> {
  return mockResponse(fish.filter((item) => item.group === group));
}

export function getFishBySeason(season: FishSeason): Promise<Fish[]> {
  return mockResponse(fish.filter((item) => item.season === season));
}

export async function getFishBySlug(slug: string): Promise<Fish> {
  const found = fish.find((item) => item.slug === slug);
  if (!found) throw new NotFoundError('Fish', slug);
  return mockResponse(found);
}

export function getDals(): Promise<Dal[]> {
  return mockResponse(dals);
}

export function getFlagshipDals(): Promise<Dal[]> {
  return mockResponse(dals.filter((item) => item.isFlagship));
}

export async function getDalBySlug(slug: string): Promise<Dal> {
  const found = dals.find((item) => item.slug === slug);
  if (!found) throw new NotFoundError('Dal', slug);
  return mockResponse(found);
}
