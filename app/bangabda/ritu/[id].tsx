import React from 'react';
import { ScrollView, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  ErrorView,
  FestivalCard,
  FishCard,
  FloraCard,
  KolkaDivider,
  Loading,
  MonthCard,
  RitualCard,
  RituSeasonPoster,
  Screen,
  SectionHeader,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  getFishForRitu,
  getFestivalsForRitu,
  getFloraForRitu,
  getMonthsByRitu,
  getRituById,
  getRitualsByRitu,
} from '@/services';
import type { RituId } from '@/types';

export default function RituDetailScreen() {
  const { id } = useLocalSearchParams<{ id: RituId }>();
  const ritu = useAsync(() => getRituById(id), [id]);
  const seasonMonths = useAsync(
    () => (ritu.data ? getMonthsByRitu(ritu.data.id) : Promise.resolve([])),
    [ritu.data?.id],
  );
  const festivals = useAsync(
    () => (ritu.data ? getFestivalsForRitu(ritu.data.id) : Promise.resolve([])),
    [ritu.data?.id],
  );
  const flora = useAsync(
    () => (ritu.data ? getFloraForRitu(ritu.data.id) : Promise.resolve([])),
    [ritu.data?.id],
  );
  const fish = useAsync(
    () => (ritu.data ? getFishForRitu(ritu.data.id) : Promise.resolve([])),
    [ritu.data?.id],
  );
  const rituals = useAsync(
    () => (ritu.data ? getRitualsByRitu(ritu.data.id) : Promise.resolve([])),
    [ritu.data?.id],
  );

  if (ritu.loading) return <Loading label="Opening season…" />;
  if (ritu.error || !ritu.data) return <ErrorView message="Season not found." />;

  const r = ritu.data;

  return (
    <>
      <Stack.Screen options={{ title: r.name, headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <RituSeasonPoster ritu={r} height={260} featured />

        <View className="px-xl pt-lg">
          <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
            {r.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {r.description}
          </AppText>
        </View>

        <KolkaDivider />

        <SectionHeader title="Months" subtitle="Two months in this ritu" />
        {seasonMonths.data && seasonMonths.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {seasonMonths.data.map((month) => (
              <MonthCard key={month.id} month={month} width={200} />
            ))}
          </ScrollView>
        ) : null}

        {festivals.data && festivals.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Festivals" subtitle="From Festivals & Faiths" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {festivals.data.map((festival) => (
                <FestivalCard key={festival.id} festival={festival} width={168} />
              ))}
            </ScrollView>
          </>
        ) : null}

        {flora.data && flora.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Seasonal flora" subtitle="From Bagan" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {flora.data.map((item) => (
                <FloraCard key={item.id} item={item} width={160} />
              ))}
            </ScrollView>
          </>
        ) : null}

        {fish.data && fish.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Seasonal fish" subtitle="From Maachhe Bhaate" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {fish.data.map((item) => (
                <FishCard key={item.id} fish={item} width={160} compact />
              ))}
            </ScrollView>
          </>
        ) : null}

        {rituals.data && rituals.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Rituals" subtitle="Observances this season" />
            <View className="px-xl flex-row flex-wrap gap-md">
              {rituals.data.map((ritual) => (
                <RitualCard key={ritual.id} ritual={ritual} width={160} />
              ))}
            </View>
          </>
        ) : null}
      </Screen>
    </>
  );
}
