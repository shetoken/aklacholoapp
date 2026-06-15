import type {
  Creator,
  FaithTradition,
  Festival,
  FestivalCreatorTag,
  FestivalSeason,
  ReligiousSite,
  ReligiousSiteType,
} from '@/types';
import { festivals, religiousSites } from '@/data/festivals-faith';
import { creators } from '@/data/creators';
import { mockResponse, NotFoundError } from './api.client';

export function getFestivals(): Promise<Festival[]> {
  return mockResponse(festivals);
}

export function getFlagshipFestivals(): Promise<Festival[]> {
  return mockResponse(festivals.filter((f) => f.isFlagship));
}

export function getFestivalsByFaith(faith: FaithTradition): Promise<Festival[]> {
  return mockResponse(festivals.filter((f) => f.faith === faith));
}

export function getFestivalsBySeason(season: FestivalSeason): Promise<Festival[]> {
  return mockResponse(festivals.filter((f) => f.season === season));
}

export async function getFestivalBySlug(slug: string): Promise<Festival> {
  const found = festivals.find((f) => f.slug === slug);
  if (!found) throw new NotFoundError('Festival', slug);
  return mockResponse(found);
}

export function getReligiousSites(): Promise<ReligiousSite[]> {
  return mockResponse(religiousSites);
}

export function getFlagshipSites(): Promise<ReligiousSite[]> {
  return mockResponse(religiousSites.filter((s) => s.isFlagship));
}

export function getSitesByFaith(faith: FaithTradition): Promise<ReligiousSite[]> {
  return mockResponse(religiousSites.filter((s) => s.faith === faith));
}

export function getSitesByType(type: ReligiousSiteType): Promise<ReligiousSite[]> {
  return mockResponse(religiousSites.filter((s) => s.type === type));
}

export async function getSiteBySlug(slug: string): Promise<ReligiousSite> {
  const found = religiousSites.find((s) => s.slug === slug);
  if (!found) throw new NotFoundError('Religious site', slug);
  return mockResponse(found);
}

export function getSitesForFestival(festivalId: string): Promise<ReligiousSite[]> {
  const festival = festivals.find((f) => f.id === festivalId);
  if (!festival) return mockResponse([]);
  const sites = festival.relatedSiteIds
    .map((id) => religiousSites.find((s) => s.id === id))
    .filter((s): s is ReligiousSite => Boolean(s));
  return mockResponse(sites);
}

export function getFestivalsForSite(siteId: string): Promise<Festival[]> {
  const site = religiousSites.find((s) => s.id === siteId);
  if (!site) return mockResponse([]);
  const linked = site.relatedFestivalIds
    .map((id) => festivals.find((f) => f.id === id))
    .filter((f): f is Festival => Boolean(f));
  return mockResponse(linked);
}

export function getRelatedSites(siteId: string): Promise<ReligiousSite[]> {
  const site = religiousSites.find((s) => s.id === siteId);
  if (!site) return mockResponse([]);
  const related = site.relatedSiteIds
    .map((id) => religiousSites.find((s) => s.id === id))
    .filter((s): s is ReligiousSite => Boolean(s));
  return mockResponse(related);
}

/** Creators whose specialty tags overlap a festival’s relatedCreatorTags. */
export function getCreatorsForFestival(festivalId: string): Promise<Creator[]> {
  const tags = festivals.find((f) => f.id === festivalId)?.relatedCreatorTags ?? [];
  if (tags.length === 0) return mockResponse([]);

  const matched = creators.filter((creator) =>
    creator.specialtyTags.some((tag) =>
      tags.includes(tag as FestivalCreatorTag),
    ),
  );
  return mockResponse(matched);
}

export function filterFestivals(
  items: Festival[],
  opts: { season?: FestivalSeason | null; faith?: FaithTradition | null },
): Festival[] {
  return items.filter((festival) => {
    if (opts.season && festival.season !== opts.season) return false;
    if (opts.faith && festival.faith !== opts.faith) return false;
    return true;
  });
}

export function filterReligiousSites(
  items: ReligiousSite[],
  opts: { faith?: FaithTradition | null; type?: ReligiousSiteType | null },
): ReligiousSite[] {
  return items.filter((site) => {
    if (opts.faith && site.faith !== opts.faith) return false;
    if (opts.type && site.type !== opts.type) return false;
    return true;
  });
}
