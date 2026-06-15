/**
 * User preference persistence — AsyncStorage-backed.
 * Screens use this service, not storage keys directly.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

import type { BengalConnection, HomeInterest, UserPreferences } from '@/types';

const STORAGE_KEY = '@aklacholo/preferences/v1';

async function read(): Promise<UserPreferences | null> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as UserPreferences;
    if (!parsed?.connection || !Array.isArray(parsed.interests)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function getUserPreferences(): Promise<UserPreferences | null> {
  return read();
}

export function hasUserPreferences(): Promise<boolean> {
  return read().then((p) => p !== null);
}

export async function saveUserPreferences(
  connection: BengalConnection,
  interests: HomeInterest[],
): Promise<UserPreferences> {
  const preferences: UserPreferences = {
    connection,
    interests,
    completedAt: Date.now(),
  };
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  return preferences;
}

export async function clearUserPreferences(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
