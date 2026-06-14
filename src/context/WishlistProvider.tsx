import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { WishlistItem, WishlistKind } from '@/types';
import {
  getWishlist,
  toggleWishlist as toggleService,
} from '@/services';

interface WishlistContextValue {
  items: WishlistItem[];
  count: number;
  ready: boolean;
  isSaved: (id: string, kind: WishlistKind) => boolean;
  toggle: (id: string, kind: WishlistKind) => Promise<void>;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

/**
 * App-wide wishlist state, hydrated once from AsyncStorage and kept in memory
 * so every card's save toggle stays in sync instantly. Writes persist through
 * the wishlist service.
 */
export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    getWishlist().then((stored) => {
      if (active) {
        setItems(stored);
        setReady(true);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const isSaved = useCallback(
    (id: string, kind: WishlistKind) =>
      items.some((i) => i.id === id && i.kind === kind),
    [items],
  );

  const toggle = useCallback(async (id: string, kind: WishlistKind) => {
    // Date.now() is fine in app runtime (it's unavailable only in workflow scripts).
    const next = await toggleService(id, kind, Date.now());
    setItems(next);
  }, []);

  const value = useMemo<WishlistContextValue>(
    () => ({ items, count: items.length, ready, isSaved, toggle }),
    [items, ready, isSaved, toggle],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist(): WishlistContextValue {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return ctx;
}
