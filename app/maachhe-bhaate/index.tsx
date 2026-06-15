import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  DalCard,
  ErrorView,
  FishCard,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import {
  WATER_TYPE_FILTER_ORDER,
  WATER_TYPE_LABELS,
  getFish,
  getFishBySeason,
  getFishByWaterType,
  getFlagshipDals,
  getFlagshipFish,
} from '@/services';
import type { FishWaterType } from '@/types';

export default function MaachheBhaateHubScreen() {
  const [waterType, setWaterType] = useState<FishWaterType | null>(null);

  const flagshipFish = useAsync(() => getFlagshipFish(), []);
  const monsoonFish = useAsync(() => getFishBySeason('monsoon'), []);
  const allFish = useAsync(() => getFish(), []);
  const filteredFish = useAsync(
    () => (waterType ? getFishByWaterType(waterType) : Promise.resolve([])),
    [waterType],
  );
  const flagshipDals = useAsync(() => getFlagshipDals(), []);

  const loading =
    flagshipFish.loading ||
    monsoonFish.loading ||
    allFish.loading ||
    filteredFish.loading ||
    flagshipDals.loading;
  const error =
    flagshipFish.error ||
    monsoonFish.error ||
    allFish.error ||
    filteredFish.error ||
    flagshipDals.error;

  const browseFish = useMemo(
    () => (waterType ? (filteredFish.data ?? []) : (allFish.data ?? [])),
    [waterType, filteredFish.data, allFish.data],
  );

  if (loading) return <Loading label="Opening Maachhe Bhaate…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          flagshipFish.reload();
          monsoonFish.reload();
          allFish.reload();
          filteredFish.reload();
          flagshipDals.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Maachhe Bhaate', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Maachhe Bhaate</AppText>
          <AppText variant="body" className="mt-xs text-brand-ivory-soft">
            Fish & Dal
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            The everyday table of Bengal — river ilish in monsoon mustard, pond rui
            in light jhol, and the dals that anchor every meal.
          </AppText>
        </View>

        <SectionHeader className="pt-xl" title="Fish" subtitle="Maach — from pond to sea" />

        {flagshipFish.data && flagshipFish.data.length > 0 ? (
          <>
            <SectionHeader title="Featured fish" subtitle="Start here" />
            <AutoScrollRow
              data={flagshipFish.data}
              keyExtractor={(item) => item.id}
              gap={16}
              speed={0.2}
              renderItem={(item) => <FishCard fish={item} featured />}
            />
          </>
        ) : null}

        {monsoonFish.data && monsoonFish.data.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Monsoon — Ilish season"
              subtitle="Borsha and the King of Fish"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {monsoonFish.data.map((item) => (
                <FishCard key={item.id} fish={item} width={220} compact />
              ))}
            </ScrollView>
          </>
        ) : null}

        <SectionHeader
          className="pt-lg"
          title="Browse by water"
          subtitle="Freshwater, estuary, sea, and shutki"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setWaterType(null)}>
            <Tag label="All waters" active={waterType === null} />
          </Pressable>
          {WATER_TYPE_FILTER_ORDER.map((type) => (
            <Pressable key={type} onPress={() => setWaterType(type)}>
              <Tag label={WATER_TYPE_LABELS[type]} active={waterType === type} />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader
          className="pt-lg"
          title="The catch"
          subtitle={browseFish.length === 1 ? '1 fish' : `${browseFish.length} fish`}
        />

        {browseFish.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browseFish.map((item) => (
              <FishCard key={item.id} fish={item} width={160} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No fish match this water type.
            </AppText>
          </View>
        )}

        <KolkaDivider width={120} />

        <SectionHeader title="Dal" subtitle="Bhaate — the everyday lentil" />

        {flagshipDals.data && flagshipDals.data.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {flagshipDals.data.map((dal) => (
              <DalCard key={dal.id} dal={dal} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              Dal profiles coming soon.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
