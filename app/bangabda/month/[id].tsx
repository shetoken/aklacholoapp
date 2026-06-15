import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  ErrorView,
  FestivalCard,
  KolkaDivider,
  Loading,
  RitualCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  getFestivalsForMonth,
  getMonthById,
  getRituForMonth,
  getRitualsByMonth,
} from '@/services';
import { brand } from '@/theme';

export default function MonthDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const month = useAsync(() => getMonthById(id), [id]);
  const ritu = useAsync(
    () => (month.data ? getRituForMonth(month.data.id) : Promise.resolve(null)),
    [month.data?.id],
  );
  const festivals = useAsync(
    () => (month.data ? getFestivalsForMonth(month.data.id) : Promise.resolve([])),
    [month.data?.id],
  );
  const rituals = useAsync(
    () => (month.data ? getRitualsByMonth(month.data.id) : Promise.resolve([])),
    [month.data?.id],
  );

  if (month.loading) return <Loading label="Opening month…" />;
  if (month.error || !month.data) return <ErrorView message="Month not found." />;

  const m = month.data;

  return (
    <>
      <Stack.Screen options={{ title: m.name, headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <View
          className="px-xl pt-xl pb-lg"
          style={{ backgroundColor: brand.ink, borderBottomWidth: 2, borderBottomColor: brand.marigold }}
        >
          <AppText variant="quote" className="text-brand-marigold font-serif-italic">
            {m.nameBengali}
          </AppText>
          <AppText variant="h1" className="mt-xs text-brand-ivory font-serif">
            {m.name}
          </AppText>
          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={`Month ${m.order}`} active />
            <Tag label={m.gregorianSpan} active />
          </View>
        </View>

        <View className="px-xl pt-lg">
          <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
            {m.highlight}
          </AppText>
        </View>

        {ritu.data ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Season" subtitle="Part of the year wheel" />
            <View className="px-xl">
              <Link href={`/bangabda/ritu/${ritu.data.id}`} asChild>
                <Pressable
                  className="rounded-xl p-lg border flex-row items-center justify-between"
                  style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                >
                  <View className="flex-1 pr-md">
                    <AppText variant="caption" className="text-brand-kolka font-serif-italic">
                      {ritu.data.nameBengali}
                    </AppText>
                    <AppText variant="title">{ritu.data.name}</AppText>
                    <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                      {ritu.data.subtitle}
                    </AppText>
                  </View>
                  <AppText variant="label" className="text-brand-kolka">
                    →
                  </AppText>
                </Pressable>
              </Link>
            </View>
          </>
        ) : null}

        {festivals.data && festivals.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Festivals" subtitle="This month on the calendar" />
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

        {rituals.data && rituals.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Rituals" subtitle="Observances this month" />
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
