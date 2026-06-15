import type {
  Parjaay,
  ParjaayInfo,
  TagoreOverview,
  TagoreWork,
  TagoreWorkForm,
} from '@/types';
import { parjaays, tagoreOverview, tagoreWorks } from '@/data/tagore';
import { mockResponse, NotFoundError } from './api.client';

export function getTagoreOverview(): Promise<TagoreOverview> {
  return mockResponse(tagoreOverview);
}

export function getParjaays(): Promise<ParjaayInfo[]> {
  return mockResponse(parjaays);
}

export async function getParjaayById(id: Parjaay): Promise<ParjaayInfo> {
  const found = parjaays.find((p) => p.id === id);
  if (!found) throw new NotFoundError('Parjaay', id);
  return mockResponse(found);
}

export function getTagoreWorks(): Promise<TagoreWork[]> {
  return mockResponse(tagoreWorks);
}

export function getWorksByForm(form: TagoreWorkForm): Promise<TagoreWork[]> {
  return mockResponse(tagoreWorks.filter((w) => w.form === form));
}

export function getFlagshipWorks(): Promise<TagoreWork[]> {
  return mockResponse(tagoreWorks.filter((w) => w.isFlagship));
}

export async function getWorkBySlug(slug: string): Promise<TagoreWork> {
  const found = tagoreWorks.find((w) => w.slug === slug);
  if (!found) throw new NotFoundError('Tagore work', slug);
  return mockResponse(found);
}

export function getWorksForParjaay(parjaay: Parjaay): Promise<TagoreWork[]> {
  return mockResponse(
    tagoreWorks.filter((w) => w.relatedParjaay?.includes(parjaay)),
  );
}
