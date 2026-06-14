/**
 * Placeholder imagery. Phase 1 has no asset pipeline / CDN, so we generate
 * deterministic placeholder photos from a seed. Swapping to real assets later
 * means changing only this helper (or pointing ImageRef.uri at a CDN in the
 * service layer) — call sites stay the same.
 */
import type { ImageRef } from '@/types';

const PLACEHOLDER_HOST = 'https://picsum.photos/seed';

/** Deterministic placeholder image for a given seed + size. */
export function placeholder(
  seed: string,
  width = 800,
  height = 1000,
): string {
  return `${PLACEHOLDER_HOST}/${encodeURIComponent(seed)}/${width}/${height}`;
}

/** Convenience builder for a fully-typed ImageRef placeholder. */
export function img(
  seed: string,
  alt: string,
  opts: { width?: number; height?: number; aspectRatio?: number } = {},
): ImageRef {
  const { width = 800, height = 1000, aspectRatio } = opts;
  return {
    uri: placeholder(seed, width, height),
    alt,
    aspectRatio: aspectRatio ?? width / height,
  };
}
