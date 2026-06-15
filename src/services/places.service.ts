import type {
  Festival,
  HeritageBuilding,
  NaturalResource,
  Place,
  PlaceRegion,
  PlaceType,
  ReligiousSite,
} from '@/types';
import { places } from '@/data/places';
import { festivals, religiousSites } from '@/data/festivals-faith';
import { heritageBuildings } from '@/data/heritage-buildings';
import { naturalResources } from '@/data/natural-bengal';
import {
  PLACE_TYPE_FILTER_ORDER,
  PLACE_TYPE_LABELS,
  PLACES_VERIFY_NOTE,
  REGION_FILTER_ORDER,
  REGION_LABELS,
} from '@/constants/places';
import { mockResponse, NotFoundError } from './api.client';

export {
  PLACE_TYPE_LABELS,
  PLACE_TYPE_FILTER_ORDER,
  REGION_FILTER_ORDER,
  PLACES_VERIFY_NOTE,
  REGION_LABELS as PLACE_REGION_LABELS,
};

export function getPlaces(): Promise<Place[]> {
  return mockResponse(places);
}

export function getFlagshipPlaces(): Promise<Place[]> {
  return mockResponse(places.filter((place) => place.isFlagship));
}

export function getPlacesByRegion(region: PlaceRegion): Promise<Place[]> {
  return mockResponse(places.filter((place) => place.region === region));
}

export function getPlacesByType(type: PlaceType): Promise<Place[]> {
  return mockResponse(places.filter((place) => place.type === type));
}

export function getKolkataPlaces(): Promise<Place[]> {
  return mockResponse(places.filter((place) => place.region === 'kolkata'));
}

export async function getPlaceBySlug(slug: string): Promise<Place> {
  const found = places.find((place) => place.slug === slug);
  if (!found) throw new NotFoundError('Place', slug);
  return mockResponse(found);
}

export function getRelatedPlaces(id: string): Promise<Place[]> {
  const place = places.find((entry) => entry.id === id);
  if (!place) return mockResponse([]);
  const related = place.relatedPlaceIds
    .map((relatedId) => places.find((entry) => entry.id === relatedId))
    .filter((entry): entry is Place => Boolean(entry));
  return mockResponse(related);
}

export function getBuildingForPlace(placeId: string): Promise<HeritageBuilding | null> {
  const buildingId = places.find((place) => place.id === placeId)?.relatedBuildingId;
  if (!buildingId) return mockResponse(null);
  const building = heritageBuildings.find((item) => item.id === buildingId) ?? null;
  return mockResponse(building);
}

export function getSiteForPlace(placeId: string): Promise<ReligiousSite | null> {
  const siteId = places.find((place) => place.id === placeId)?.relatedSiteId;
  if (!siteId) return mockResponse(null);
  const site = religiousSites.find((item) => item.id === siteId) ?? null;
  return mockResponse(site);
}

export function getResourceForPlace(placeId: string): Promise<NaturalResource | null> {
  const resourceId = places.find((place) => place.id === placeId)?.relatedResourceId;
  if (!resourceId) return mockResponse(null);
  const resource = naturalResources.find((item) => item.id === resourceId) ?? null;
  return mockResponse(resource);
}

export function getFestivalsForPlace(placeId: string): Promise<Festival[]> {
  const ids = places.find((place) => place.id === placeId)?.relatedFestivalIds ?? [];
  const linked = ids
    .map((id) => festivals.find((festival) => festival.id === id))
    .filter((festival): festival is Festival => Boolean(festival));
  return mockResponse(linked);
}
