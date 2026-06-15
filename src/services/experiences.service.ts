import type { Experience } from '@/types';
import { experiences } from '@/data';
import { mockResponse, NotFoundError } from './api.client';

/** Filter travel guides by title, location, blurb, and tags. */
export function filterExperiences(items: Experience[], query: string): Experience[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return items.filter((experience) => {
    const haystack =
      `${experience.title} ${experience.location} ${experience.shortBlurb} ${experience.tags.join(' ')}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

export function searchExperiences(query: string): Promise<Experience[]> {
  return mockResponse(filterExperiences(experiences, query));
}

/** Curated travel essentials (small, high-signal experience list). */
export function getExperiences(): Promise<Experience[]> {
  return mockResponse(experiences);
}

export async function getExperienceById(id: string): Promise<Experience> {
  const found = experiences.find((e) => e.id === id);
  if (!found) throw new NotFoundError('Experience', id);
  return mockResponse(found);
}

export function getFeaturedExperiences(limit = 4): Promise<Experience[]> {
  return mockResponse(experiences.slice(0, limit));
}
