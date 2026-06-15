import type { Book, CinemaEntry } from '@/types';
import { cinemaEntries } from '@/data/cinema';
import { books } from '@/data/books';
import { icons } from '@/data/icons';
import { CINEMA_BORDER_LABELS, CINEMA_TYPE_LABELS } from '@/constants/cinema';
import { mockResponse, NotFoundError } from './api.client';

export { CINEMA_BORDER_LABELS, CINEMA_TYPE_LABELS };

export function getCinemaEntries(): Promise<CinemaEntry[]> {
  return mockResponse(cinemaEntries);
}

export function getFlagshipCinema(): Promise<CinemaEntry[]> {
  return mockResponse(cinemaEntries.filter((entry) => entry.isFlagship));
}

export function getFilms(): Promise<CinemaEntry[]> {
  return mockResponse(cinemaEntries.filter((entry) => entry.type === 'film'));
}

export function getCinemaByDirector(iconId: string): Promise<CinemaEntry[]> {
  return mockResponse(cinemaEntries.filter((entry) => entry.directorIconId === iconId));
}

export function getAdaptedFilms(): Promise<CinemaEntry[]> {
  return mockResponse(cinemaEntries.filter((entry) => Boolean(entry.sourceBookId)));
}

export async function getCinemaBySlug(slug: string): Promise<CinemaEntry> {
  const found = cinemaEntries.find((entry) => entry.slug === slug);
  if (!found) throw new NotFoundError('Cinema entry', slug);
  return mockResponse(found);
}

export function getCinemaByIds(ids: string[]): Promise<CinemaEntry[]> {
  const ordered = ids
    .map((id) => cinemaEntries.find((entry) => entry.id === id))
    .filter((entry): entry is CinemaEntry => Boolean(entry));
  return mockResponse(ordered);
}

export function getRelatedCinema(cinemaId: string): Promise<CinemaEntry[]> {
  const entry = cinemaEntries.find((item) => item.id === cinemaId);
  if (!entry) return mockResponse([]);
  const related = entry.relatedCinemaIds
    .map((id) => cinemaEntries.find((item) => item.id === id))
    .filter((item): item is CinemaEntry => Boolean(item));
  return mockResponse(related);
}

export function getBookForCinema(cinemaId: string): Promise<Book | null> {
  const bookId = cinemaEntries.find((entry) => entry.id === cinemaId)?.sourceBookId;
  if (!bookId) return mockResponse(null);
  const book = books.find((item) => item.id === bookId) ?? null;
  return mockResponse(book);
}

export function getDirectorIconForCinema(cinemaId: string) {
  const iconId = cinemaEntries.find((entry) => entry.id === cinemaId)?.directorIconId;
  if (!iconId) return mockResponse(null);
  const icon = icons.find((item) => item.id === iconId) ?? null;
  return mockResponse(icon);
}

export function getCastIconsForCinema(cinemaId: string) {
  const ids = cinemaEntries.find((entry) => entry.id === cinemaId)?.castIconIds ?? [];
  const cast = ids
    .map((id) => icons.find((icon) => icon.id === id))
    .filter((icon): icon is NonNullable<typeof icon> => Boolean(icon));
  return mockResponse(cast);
}

export function getCinemaForBook(bookId: string): Promise<CinemaEntry[]> {
  const book = books.find((entry) => entry.id === bookId);
  const ids = book?.adaptedFilmIds ?? [];
  const byAdaptedIds = cinemaEntries.filter((entry) => ids.includes(entry.id));
  const bySource = cinemaEntries.filter((entry) => entry.sourceBookId === bookId);
  const merged = [...byAdaptedIds];
  bySource.forEach((entry) => {
    if (!merged.some((item) => item.id === entry.id)) merged.push(entry);
  });
  return mockResponse(merged);
}
