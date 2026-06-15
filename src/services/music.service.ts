import type { GenreFamily, Instrument, InstrumentType, MusicGenre } from '@/types';
import { instruments, musicGenres } from '@/data/music';
import {
  GENRE_FAMILY_FILTER_ORDER,
  GENRE_FAMILY_LABELS,
  INSTRUMENT_TYPE_FILTER_ORDER,
  INSTRUMENT_TYPE_LABELS,
} from '@/constants/music';
import { mockResponse, NotFoundError } from './api.client';

export {
  GENRE_FAMILY_LABELS,
  GENRE_FAMILY_FILTER_ORDER,
  INSTRUMENT_TYPE_LABELS,
  INSTRUMENT_TYPE_FILTER_ORDER,
};

export function getMusicGenres(): Promise<MusicGenre[]> {
  return mockResponse(musicGenres);
}

export function getFlagshipGenres(): Promise<MusicGenre[]> {
  return mockResponse(musicGenres.filter((genre) => genre.isFlagship));
}

export function getGenresByFamily(family: GenreFamily): Promise<MusicGenre[]> {
  return mockResponse(musicGenres.filter((genre) => genre.family === family));
}

export async function getGenreBySlug(slug: string): Promise<MusicGenre> {
  const found = musicGenres.find((genre) => genre.slug === slug);
  if (!found) throw new NotFoundError('Music genre', slug);
  return mockResponse(found);
}

export function getInstruments(): Promise<Instrument[]> {
  return mockResponse(instruments);
}

export function getInstrumentsByType(type: InstrumentType): Promise<Instrument[]> {
  return mockResponse(instruments.filter((instrument) => instrument.type === type));
}

export function getInstrumentsForGenre(genreId: string): Promise<Instrument[]> {
  const genre = musicGenres.find((item) => item.id === genreId);
  if (!genre) return mockResponse([]);
  const matched = genre.typicalInstruments
    .map((instrumentId) => instruments.find((item) => item.id === instrumentId))
    .filter((item): item is Instrument => Boolean(item));
  return mockResponse(matched);
}
