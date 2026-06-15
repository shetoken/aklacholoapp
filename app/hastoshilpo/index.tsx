import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  CraftCard,
  ErrorView,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import {
  CRAFT_MEDIUM_FILTER_ORDER,
  CRAFT_MEDIUM_LABELS,
  getCrafts,
  getCraftsByMedium,
  getFlagshipCrafts,
} from '@/services';
import type { CraftMedium } from '@/types';

export default function HastoshilpoHubScreen() {
  const [medium, setMedium] = useState<CraftMedium | null>(null);

  const flagship = useAsync(() => getFlagshipCrafts(), []);
  const allCrafts = useAsync(() => getCrafts(), []);
  const mediumCrafts = useAsync(
    () => (medium ? getCraftsByMedium(medium) : Promise.resolve([])),
    [medium],
  );

  const loading = flagship.loading || allCrafts.loading || mediumCrafts.loading;
  const error = flagship.error || allCrafts.error || mediumCrafts.error;

  const browseCrafts = useMemo(
    () => (medium ? (mediumCrafts.data ?? []) : (allCrafts.data ?? [])),
    [medium, mediumCrafts.data, allCrafts.data],
  );

  if (loading) return <Loading label="Opening Hastoshilpo…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          flagship.reload();
          allCrafts.reload();
          mediumCrafts.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Hastoshilpo', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Hastoshilpo</AppText>
          <AppText variant="body" className="mt-xs text-brand-ivory-soft">
            Arts & Crafts of Bengal
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            Kantha stitch and nakshi quilts, dokra lost-wax metal, patachitra scrolls,
            terracotta temples and horses — the living material culture of both Bengals.
          </AppText>
        </View>

        {flagship.data && flagship.data.length > 0 ? (
          <>
            <SectionHeader className="pt-lg" title="Featured crafts" subtitle="Start here" />
            <AutoScrollRow
              data={flagship.data}
              keyExtractor={(craft) => craft.id}
              gap={16}
              speed={0.2}
              renderItem={(craft) => <CraftCard craft={craft} featured />}
            />
          </>
        ) : null}

        <KolkaDivider width={120} />

        <SectionHeader title="Browse by medium" subtitle="Textile to shell" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setMedium(null)}>
            <Tag label="All media" active={medium === null} />
          </Pressable>
          {CRAFT_MEDIUM_FILTER_ORDER.map((m) => (
            <Pressable key={m} onPress={() => setMedium(m)}>
              <Tag label={CRAFT_MEDIUM_LABELS[m]} active={medium === m} />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader
          className="pt-lg"
          title="The atelier"
          subtitle={browseCrafts.length === 1 ? '1 craft' : `${browseCrafts.length} crafts`}
        />

        {browseCrafts.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browseCrafts.map((craft) => (
              <CraftCard key={craft.id} craft={craft} width={160} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No crafts match this medium yet.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
