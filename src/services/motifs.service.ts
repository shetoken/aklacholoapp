import type { Motif, Palette } from '@/types';
import { motifs, palettes } from '@/data';
import { mockResponse, NotFoundError } from './api.client';

export function getMotifs(): Promise<Motif[]> {
  return mockResponse(motifs);
}

export async function getMotifById(id: string): Promise<Motif> {
  const found = motifs.find((m) => m.id === id);
  if (!found) throw new NotFoundError('Motif', id);
  return mockResponse(found);
}

export function getPalettes(): Promise<Palette[]> {
  return mockResponse(palettes);
}
