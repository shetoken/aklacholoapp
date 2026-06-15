/**
 * Creator application pipeline — self-serve submissions + founder scouting.
 *
 * Phase 1: AsyncStorage-backed queue (founder tracker on device).
 * Phase 2: swap to httpPost/httpGet against /creator-applications API.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

import type {
  CreatorApplication,
  CreatorApplicationInput,
  CreatorApplicationStatus,
  ScoutedCreatorInput,
} from '@/types';
import { mockResponse, USE_MOCK, httpPost, httpGet, NotFoundError } from './api.client';

const STORAGE_KEY = '@aklacholo/creator-applications/v1';

async function readAll(): Promise<CreatorApplication[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CreatorApplication[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeAll(items: CreatorApplication[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function newId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function sortNewestFirst(items: CreatorApplication[]): CreatorApplication[] {
  return [...items].sort((a, b) => b.submittedAt - a.submittedAt);
}

/** Public — creator submits an application from the app. */
export async function submitCreatorApplication(
  input: CreatorApplicationInput,
): Promise<CreatorApplication> {
  if (!USE_MOCK) {
    return httpPost<CreatorApplication>('/creator-applications', {
      ...input,
      source: 'application',
    });
  }

  const now = Date.now();
  const application: CreatorApplication = {
    ...input,
    id: newId('app'),
    source: 'application',
    status: 'submitted',
    submittedAt: now,
    updatedAt: now,
  };

  const items = await readAll();
  items.push(application);
  await writeAll(items);
  return mockResponse(application);
}

/** Founder-only — add someone scouted on Instagram without a public application. */
export async function createScoutedCreator(
  input: ScoutedCreatorInput,
): Promise<CreatorApplication> {
  if (!USE_MOCK) {
    return httpPost<CreatorApplication>('/creator-applications/scouted', input);
  }

  const now = Date.now();
  const application: CreatorApplication = {
    ...input,
    id: newId('scout'),
    source: 'scouted',
    status: input.status ?? 'in_review',
    submittedAt: now,
    updatedAt: now,
  };

  const items = await readAll();
  items.push(application);
  await writeAll(items);
  return mockResponse(application);
}

/** Founder tracker — list all applications and scouted leads. */
export async function listCreatorApplications(): Promise<CreatorApplication[]> {
  if (!USE_MOCK) {
    return httpGet<CreatorApplication[]>('/creator-applications');
  }
  const items = await readAll();
  return mockResponse(sortNewestFirst(items));
}

export async function getCreatorApplicationById(
  id: string,
): Promise<CreatorApplication> {
  if (!USE_MOCK) {
    return httpGet<CreatorApplication>(`/creator-applications/${id}`);
  }
  const found = (await readAll()).find((a) => a.id === id);
  if (!found) throw new NotFoundError('CreatorApplication', id);
  return mockResponse(found);
}

export async function updateCreatorApplication(
  id: string,
  patch: {
    status?: CreatorApplicationStatus;
    adminNotes?: string;
  },
): Promise<CreatorApplication> {
  if (!USE_MOCK) {
    return httpPost<CreatorApplication>(`/creator-applications/${id}`, patch);
  }

  const items = await readAll();
  const index = items.findIndex((a) => a.id === id);
  if (index === -1) throw new NotFoundError('CreatorApplication', id);

  const updated: CreatorApplication = {
    ...items[index],
    ...patch,
    updatedAt: Date.now(),
  };
  items[index] = updated;
  await writeAll(items);
  return mockResponse(updated);
}
