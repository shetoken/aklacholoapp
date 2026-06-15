import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { BengalConnection, HomeInterest, UserPreferences } from '@/types';
import {
  clearUserPreferences,
  getUserPreferences,
  saveUserPreferences,
} from '@/services/preferences.service';

interface PreferencesContextValue {
  preferences: UserPreferences | null;
  ready: boolean;
  hasPreferences: boolean;
  savePreferences: (
    connection: BengalConnection,
    interests: HomeInterest[],
  ) => Promise<void>;
  clearPreferences: () => Promise<void>;
  refresh: () => Promise<void>;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(async () => {
    const saved = await getUserPreferences();
    setPreferences(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    refresh().catch(() => setReady(true));
  }, [refresh]);

  const savePreferences = useCallback(
    async (connection: BengalConnection, interests: HomeInterest[]) => {
      const saved = await saveUserPreferences(connection, interests);
      setPreferences(saved);
    },
    [],
  );

  const clearPreferences = useCallback(async () => {
    await clearUserPreferences();
    setPreferences(null);
  }, []);

  const value = useMemo(
    () => ({
      preferences,
      ready,
      hasPreferences: preferences !== null,
      savePreferences,
      clearPreferences,
      refresh,
    }),
    [preferences, ready, savePreferences, clearPreferences, refresh],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences(): PreferencesContextValue {
  const ctx = useContext(PreferencesContext);
  if (!ctx) {
    throw new Error('usePreferences must be used within PreferencesProvider');
  }
  return ctx;
}
