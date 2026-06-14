/**
 * The swappable data-access seam.
 *
 * Phase 1: every service resolves against in-memory mock data, wrapped in
 * `mockResponse()` to simulate async network latency so screens use real
 * loading states from day one.
 *
 * Later: flip `USE_MOCK` to false (or wire env) and implement `httpGet` to call
 * a real backend. Service modules and screens DO NOT change — they only ever see
 * Promises. This file is the single place the mock→API swap happens.
 */
import { MOCK_LATENCY } from '@/constants/app';

export const USE_MOCK = true;

/** Base URL for the future real API (unused while USE_MOCK). */
export const API_BASE_URL = 'https://api.aklacholo.example';

/** Resolve mock data after a small random delay to mimic the network. */
export function mockResponse<T>(data: T): Promise<T> {
  const { min, max } = MOCK_LATENCY;
  // Deterministic-enough jitter without Math.random (kept simple & test-safe).
  const delay = min + Math.round((max - min) * 0.5);
  return new Promise((resolve) => setTimeout(() => resolve(clone(data)), delay));
}

/** Defensive copy so callers can't mutate the shared mock dataset. */
function clone<T>(data: T): T {
  return JSON.parse(JSON.stringify(data)) as T;
}

/** Thrown for not-found lookups so screens can render a 404 state. */
export class NotFoundError extends Error {
  constructor(entity: string, id: string) {
    super(`${entity} not found: ${id}`);
    this.name = 'NotFoundError';
  }
}

/**
 * Placeholder for the real implementation. When USE_MOCK is false, services
 * would call this instead of mockResponse(). Left unimplemented in Phase 1.
 */
export async function httpGet<T>(path: string): Promise<T> {
  throw new Error(
    `Real API not implemented yet (GET ${API_BASE_URL}${path}). ` +
      `Set USE_MOCK=true or implement httpGet for Phase 2+.`,
  );
}
