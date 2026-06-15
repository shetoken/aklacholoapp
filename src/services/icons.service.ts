import type { Icon, IconField } from '@/types';
import { icons } from '@/data/icons';
import { FIELD_FILTER_ORDER, FIELD_LABELS, ICON_BORDER_LABELS } from '@/constants/icons';
import { mockResponse, NotFoundError } from './api.client';

export { FIELD_LABELS, FIELD_FILTER_ORDER, ICON_BORDER_LABELS };

export function getIcons(): Promise<Icon[]> {
  return mockResponse(icons);
}

export function getFlagshipIcons(): Promise<Icon[]> {
  return mockResponse(icons.filter((icon) => icon.isFlagship));
}

export function getIconsByField(field: IconField): Promise<Icon[]> {
  return mockResponse(
    icons.filter(
      (icon) => icon.field === field || icon.secondaryFields?.includes(field),
    ),
  );
}

export async function getIconBySlug(slug: string): Promise<Icon> {
  const found = icons.find((icon) => icon.slug === slug);
  if (!found) throw new NotFoundError('Icon', slug);
  return mockResponse(found);
}

export function getRelatedIcons(id: string): Promise<Icon[]> {
  const icon = icons.find((item) => item.id === id);
  if (!icon) return mockResponse([]);
  const related = icon.relatedIconIds
    .map((relatedId) => icons.find((item) => item.id === relatedId))
    .filter((item): item is Icon => Boolean(item));
  return mockResponse(related);
}
