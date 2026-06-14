/**
 * Wishlist persistence. Backed by AsyncStorage (native key-value store — NOT
 * localStorage). Stores lightweight {id, kind, addedAt} references; full
 * entities are re-hydrated through the other services. Async signatures match
 * the rest of the service layer so a future server-synced wishlist drops in
 * without touching screens.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { WishlistItem, WishlistKind } from '@/types';

const STORAGE_KEY = '@aklacholo/wishlist/v1';

async function readAll(): Promise<WishlistItem[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as WishlistItem[]) : [];
  } catch {
    return [];
  }
}

async function writeAll(items: WishlistItem[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function getWishlist(): Promise<WishlistItem[]> {
  return readAll();
}

export async function isSaved(id: string, kind: WishlistKind): Promise<boolean> {
  const items = await readAll();
  return items.some((i) => i.id === id && i.kind === kind);
}

/** Add an item (no-op if already saved). Returns the updated list. */
export async function addToWishlist(
  id: string,
  kind: WishlistKind,
  now: number,
): Promise<WishlistItem[]> {
  const items = await readAll();
  if (items.some((i) => i.id === id && i.kind === kind)) return items;
  const next = [{ id, kind, addedAt: now }, ...items];
  await writeAll(next);
  return next;
}

/** Remove an item. Returns the updated list. */
export async function removeFromWishlist(
  id: string,
  kind: WishlistKind,
): Promise<WishlistItem[]> {
  const items = await readAll();
  const next = items.filter((i) => !(i.id === id && i.kind === kind));
  await writeAll(next);
  return next;
}

/** Toggle membership. Caller passes `now` (epoch ms) for the addedAt stamp. */
export async function toggleWishlist(
  id: string,
  kind: WishlistKind,
  now: number,
): Promise<WishlistItem[]> {
  const items = await readAll();
  const exists = items.some((i) => i.id === id && i.kind === kind);
  return exists
    ? removeFromWishlist(id, kind)
    : addToWishlist(id, kind, now);
}

export async function clearWishlist(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
