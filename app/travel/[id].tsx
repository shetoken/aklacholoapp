import React from 'react';
import { Linking, Pressable, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import {
  Screen,
  AppText,
  Img,
  KolkaDivider,
  Loading,
  ErrorView,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import { getExperienceById } from '@/services';

export default function TravelGuideDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const experience = useAsync(() => getExperienceById(id), [id]);

  if (experience.loading) return <Loading label="Opening travel guide…" />;
  if (experience.error || !experience.data)
    return <ErrorView message="Experience guide not found." />;

  const e = experience.data;

  return (
    <Screen scroll edges={[]} contentClassName="pb-2xl">
      <Stack.Screen options={{ title: '' }} />

      <Img source={e.heroImage} className="w-full" style={{ height: 240 }} />

      <View className="px-xl pt-lg">
        <AppText variant="label" className="text-brand-terracotta mb-xs">
          Curated travel · {e.location}
        </AppText>
        <AppText variant="h1">{e.title}</AppText>
        <AppText variant="body" className="mt-sm">
          {e.shortBlurb}
        </AppText>
      </View>

      <KolkaDivider />

      <View className="px-xl">
        <AppText variant="label" className="text-brand-marigold mb-xs">
          Do
        </AppText>
        <AppText variant="body">{e.doTip}</AppText>

        <AppText variant="label" className="text-brand-marigold mb-xs mt-lg">
          Do not
        </AppText>
        <AppText variant="body">{e.dontTip}</AppText>
      </View>

      <KolkaDivider />

      <View className="px-xl">
        <AppText variant="label" className="text-brand-marigold mb-xs">
          Cultural guide contact
        </AppText>
        <AppText variant="title">{e.guideContact.name}</AppText>
        <AppText variant="caption" className="mt-xs">
          {e.guideContact.role}
        </AppText>
        <Pressable
          onPress={() =>
            Linking.openURL(`tel:${e.guideContact.phone.replace(/\s+/g, '')}`).catch(
              () => {},
            )
          }
          className="mt-md rounded-lg bg-brand-surface border border-brand-border px-md py-sm"
        >
          <AppText variant="label" className="text-brand-marigold">
            Call {e.guideContact.phone}
          </AppText>
        </Pressable>
      </View>
    </Screen>
  );
}
