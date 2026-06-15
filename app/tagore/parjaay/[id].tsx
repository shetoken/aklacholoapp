import React from 'react';
import { View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  ErrorView,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  TagoreWorkCard,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import { getParjaayById, getWorksForParjaay } from '@/services';
import type { Parjaay } from '@/types';

export default function ParjaayDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const parjaay = useAsync(() => getParjaayById(id as Parjaay), [id]);
  const linkedWorks = useAsync(
    () => (parjaay.data ? getWorksForParjaay(parjaay.data.id) : Promise.resolve([])),
    [parjaay.data?.id],
  );

  if (parjaay.loading) return <Loading label="Opening parjaay…" />;
  if (parjaay.error || !parjaay.data)
    return <ErrorView message="Parjaay not found." />;

  const p = parjaay.data;

  return (
    <>
      <Stack.Screen options={{ title: p.name, headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="quote" className="text-brand-marigold font-serif-italic">
            {p.nameBengali}
          </AppText>
          <AppText variant="h1" className="mt-xs">
            {p.name}
          </AppText>
          <AppText variant="label" className="mt-sm text-brand-terracotta">
            {p.meaning}
          </AppText>
          {p.approxSongCount != null ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              ~{p.approxSongCount.toLocaleString()} songs
              {p.subClassCount != null ? ` · ${p.subClassCount} sub-classes` : ''}
            </AppText>
          ) : p.subClassCount != null ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {p.subClassCount} sub-classes
            </AppText>
          ) : null}
        </View>

        <KolkaDivider />

        <View className="px-xl">
          <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
            {p.description}
          </AppText>
        </View>

        <KolkaDivider />

        <SectionHeader title="Example songs" subtitle="Well-known titles and first lines" />
        <View className="px-xl">
          {p.exampleSongs.map((song) => (
            <View key={song} className="flex-row mb-sm">
              <AppText variant="body" className="text-brand-marigold mr-sm">
                ·
              </AppText>
              <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                {song}
              </AppText>
            </View>
          ))}
        </View>

        {linkedWorks.data && linkedWorks.data.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Related creations"
              subtitle="Works linked to this song class"
            />
            <View className="px-xl flex-row flex-wrap gap-md">
              {linkedWorks.data.map((work) => (
                <TagoreWorkCard key={work.id} work={work} width={180} />
              ))}
            </View>
          </>
        ) : null}
      </Screen>
    </>
  );
}
