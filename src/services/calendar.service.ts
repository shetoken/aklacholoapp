import type {
  BengaliMonth,
  Festival,
  Fish,
  FloraItem,
  Panjika,
  Ritual,
  RitualKind,
  Ritu,
  RituId,
} from '@/types';
import {
  CALENDAR_OVERVIEW,
  months,
  panjika,
  rituals,
  ritus,
} from '@/data/calendar';
import { festivals } from '@/data/festivals-faith';
import { fish } from '@/data/fish-dal';
import { floraItems } from '@/data/flora';
import {
  RITUAL_FAITH_LABELS,
  RITUAL_KIND_FILTER_ORDER,
  RITUAL_KIND_LABELS,
} from '@/constants/calendar';
import { mockResponse, NotFoundError } from './api.client';

export {
  CALENDAR_OVERVIEW,
  RITUAL_KIND_LABELS,
  RITUAL_KIND_FILTER_ORDER,
  RITUAL_FAITH_LABELS,
};

export function getRitus(): Promise<Ritu[]> {
  return mockResponse(ritus);
}

export async function getRituById(id: RituId): Promise<Ritu> {
  const found = ritus.find((ritu) => ritu.id === id);
  if (!found) throw new NotFoundError('Ritu', id);
  return mockResponse(found);
}

export function getMonths(): Promise<BengaliMonth[]> {
  return mockResponse([...months].sort((a, b) => a.order - b.order));
}

export function getMonthsByRitu(ritu: RituId): Promise<BengaliMonth[]> {
  return mockResponse(months.filter((month) => month.ritu === ritu));
}

export async function getMonthById(id: string): Promise<BengaliMonth> {
  const found = months.find((month) => month.id === id);
  if (!found) throw new NotFoundError('Bengali month', id);
  return mockResponse(found);
}

export function getFlagshipRituals(): Promise<Ritual[]> {
  return mockResponse(rituals.filter((ritual) => ritual.isFlagship));
}

export function getRituals(): Promise<Ritual[]> {
  return mockResponse(rituals);
}

export function getRitualsByKind(kind: RitualKind): Promise<Ritual[]> {
  return mockResponse(rituals.filter((ritual) => ritual.kind === kind));
}

export function getRitualsByMonth(monthId: string): Promise<Ritual[]> {
  return mockResponse(rituals.filter((ritual) => ritual.relatedMonthId === monthId));
}

export function getRitualsByRitu(rituId: RituId): Promise<Ritual[]> {
  return mockResponse(rituals.filter((ritual) => ritual.relatedRituId === rituId));
}

export async function getRitualBySlug(slug: string): Promise<Ritual> {
  const found = rituals.find((ritual) => ritual.slug === slug);
  if (!found) throw new NotFoundError('Ritual', slug);
  return mockResponse(found);
}

export function getPanjika(): Promise<Panjika> {
  return mockResponse(panjika);
}

export function getRituForMonth(monthId: string): Promise<Ritu | null> {
  const month = months.find((item) => item.id === monthId);
  if (!month) return mockResponse(null);
  const ritu = ritus.find((item) => item.id === month.ritu) ?? null;
  return mockResponse(ritu);
}

function resolveByIds<T extends { id: string }>(items: T[], ids: string[] = []): T[] {
  return ids
    .map((id) => items.find((item) => item.id === id))
    .filter((item): item is T => Boolean(item));
}

export function getFestivalsForRitu(rituId: RituId): Promise<Festival[]> {
  const ids = ritus.find((ritu) => ritu.id === rituId)?.festivalIds ?? [];
  return mockResponse(resolveByIds(festivals, ids));
}

export function getFestivalsForMonth(monthId: string): Promise<Festival[]> {
  const ids = months.find((month) => month.id === monthId)?.festivalIds ?? [];
  return mockResponse(resolveByIds(festivals, ids));
}

export function getFloraForRitu(rituId: RituId): Promise<FloraItem[]> {
  const ids = ritus.find((ritu) => ritu.id === rituId)?.floraIds ?? [];
  return mockResponse(resolveByIds(floraItems, ids));
}

export function getFishForRitu(rituId: RituId): Promise<Fish[]> {
  const ids = ritus.find((ritu) => ritu.id === rituId)?.fishIds ?? [];
  return mockResponse(resolveByIds(fish, ids));
}

export function getFestivalsForRitual(ritualId: string): Promise<Festival[]> {
  const ids = rituals.find((ritual) => ritual.id === ritualId)?.relatedFestivalIds ?? [];
  return mockResponse(resolveByIds(festivals, ids));
}
