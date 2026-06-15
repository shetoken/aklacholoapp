import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { Screen, AppText, KolkaDivider, KolkaMotif, Tag } from '@/components';
import {
  BENGAL_CONNECTIONS,
  HOME_INTERESTS,
} from '@/constants/preferences';
import type { BengalConnection, HomeInterest } from '@/types';
import { usePreferences } from '@/context/PreferencesProvider';
import { brand } from '@/theme';

export default function PreferencesOnboardingScreen() {
  const router = useRouter();
  const { savePreferences } = usePreferences();
  const [connection, setConnection] = useState<BengalConnection | null>(null);
  const [interests, setInterests] = useState<HomeInterest[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const toggleInterest = (id: HomeInterest) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
    setError(null);
  };

  const finish = async () => {
    if (!connection) {
      setError('Choose how you connect to Bengal.');
      return;
    }
    if (interests.length < 2) {
      setError('Pick at least two interests so we can personalize your home feed.');
      return;
    }

    setSaving(true);
    try {
      await savePreferences(connection, interests);
      router.replace('/(tabs)');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Your preferences', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-xl items-center">
          <KolkaMotif svgKey="classic" size={88} />
          <AppText variant="h2" className="mt-lg text-center">
            Make AklaCholo yours
          </AppText>
          <AppText variant="body" className="mt-sm text-center" style={{ lineHeight: 26 }}>
            Tell us a little about yourself — we'll shape your home feed around
            what you love most about Bengal.
          </AppText>
          <KolkaDivider width={120} />
        </View>

        <View className="px-xl">
          <AppText variant="label" className="text-brand-marigold mb-md">
            How do you connect to Bengal?
          </AppText>
          {BENGAL_CONNECTIONS.map((option) => {
            const active = connection === option.id;
            return (
              <Pressable
                key={option.id}
                onPress={() => {
                  setConnection(option.id);
                  setError(null);
                }}
                className="rounded-xl p-md mb-sm border"
                style={{
                  backgroundColor: active ? `${brand.marigold}18` : brand.surface,
                  borderColor: active ? brand.marigold : `${brand.ivory}22`,
                }}
              >
                <AppText
                  variant="title"
                  className={active ? 'text-brand-marigold' : 'text-brand-ivory'}
                >
                  {option.label}
                </AppText>
                <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                  {option.description}
                </AppText>
              </Pressable>
            );
          })}

          <AppText variant="label" className="text-brand-marigold mt-xl mb-md">
            What draws you in? (pick at least two)
          </AppText>
          <View className="flex-row flex-wrap gap-sm">
            {HOME_INTERESTS.map((option) => (
              <Pressable
                key={option.id}
                onPress={() => toggleInterest(option.id)}
              >
                <Tag label={option.label} active={interests.includes(option.id)} />
              </Pressable>
            ))}
          </View>

          {error ? (
            <AppText variant="caption" className="mt-md text-brand-vermillion">
              {error}
            </AppText>
          ) : null}

          <Pressable
            onPress={finish}
            disabled={saving}
            className="rounded-xl py-md items-center mt-2xl"
            style={{
              backgroundColor: saving ? `${brand.marigold}88` : brand.marigold,
            }}
          >
            <AppText variant="label" style={{ color: brand.ink }}>
              {saving ? 'Saving…' : 'Personalize my home'}
            </AppText>
          </Pressable>
        </View>
      </Screen>
    </>
  );
}
