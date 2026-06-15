import type { DiscoverRails, LearnTopic } from '@/types';
import { discoverRails } from '@/data/discover-rails';
import { learnTopics } from '@/data/learn-topics';
import { mockResponse } from './api.client';

export function getDiscoverRails(): Promise<DiscoverRails> {
  return mockResponse(discoverRails);
}

export function getLearnTopics() {
  return mockResponse(learnTopics);
}

/** Filter learn topics by title and description. */
export function filterLearnTopics(items: LearnTopic[], query: string): LearnTopic[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return items.filter((topic) => {
    const haystack = `${topic.title} ${topic.detail}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}
