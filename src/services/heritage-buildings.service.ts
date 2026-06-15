import type {
  HeritageBuilding,
  HeritageBuildingRegion,
  HeritageBuildingType,
  HeritageCurrentStatus,
} from '@/types';
import { heritageBuildings } from '@/data/heritage-buildings';
import { mockResponse, NotFoundError } from './api.client';

export function getHeritageBuildings(): Promise<HeritageBuilding[]> {
  return mockResponse(heritageBuildings);
}

export async function getHeritageBuildingById(id: string): Promise<HeritageBuilding> {
  const found = heritageBuildings.find((b) => b.id === id);
  if (!found) throw new NotFoundError('Heritage building', id);
  return mockResponse(found);
}

export async function getHeritageBuildingBySlug(slug: string): Promise<HeritageBuilding> {
  const found = heritageBuildings.find((b) => b.slug === slug);
  if (!found) throw new NotFoundError('Heritage building', slug);
  return mockResponse(found);
}

export function getFlagshipBuildings(): Promise<HeritageBuilding[]> {
  return mockResponse(heritageBuildings.filter((b) => b.isFlagship));
}

export function getBuildingsByStatus(
  status: HeritageCurrentStatus,
): Promise<HeritageBuilding[]> {
  return mockResponse(
    heritageBuildings.filter((b) => b.currentStatus.includes(status)),
  );
}

export function getBuildingsByType(type: HeritageBuildingType): Promise<HeritageBuilding[]> {
  return mockResponse(heritageBuildings.filter((b) => b.type === type));
}

export function getBuildingsByRegion(
  region: HeritageBuildingRegion,
): Promise<HeritageBuilding[]> {
  return mockResponse(heritageBuildings.filter((b) => b.region === region));
}

export function getRelatedBuildings(id: string): Promise<HeritageBuilding[]> {
  const building = heritageBuildings.find((b) => b.id === id);
  if (!building) return mockResponse([]);
  const related = building.relatedBuildingIds
    .map((relatedId) => heritageBuildings.find((b) => b.id === relatedId))
    .filter((b): b is HeritageBuilding => Boolean(b));
  return mockResponse(related);
}

export function filterHeritageBuildings(
  items: HeritageBuilding[],
  opts: {
    status?: HeritageCurrentStatus | null;
    region?: HeritageBuildingRegion | null;
  },
): HeritageBuilding[] {
  return items.filter((building) => {
    if (opts.status && !building.currentStatus.includes(opts.status)) return false;
    if (opts.region && building.region !== opts.region) return false;
    return true;
  });
}
