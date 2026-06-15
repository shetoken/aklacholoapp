import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  ErrorView,
  KolkaDivider,
  Loading,
  RitualCard,
  RituWheelNode,
  Screen,
  SectionHeader,
  Tag,
  YearWheel,
} from '@/components';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import {
  CALENDAR_OVERVIEW,
  getFlagshipRituals,
  getRituals,
  getRitualsByKind,
  getRitus,
  RITUAL_KIND_FILTER_ORDER,
  RITUAL_KIND_LABELS,
} from '@/services';
import type { RitualKind } from '@/types';
import { brand } from '@/theme';

export default function BangabdaHubScreen() {
  const [kind, setKind] = useState<RitualKind | null>(null);

  const ritus = useAsync(() => getRitus(), []);
  const flagshipRituals = useAsync(() => getFlagshipRituals(), []);
  const allRituals = useAsync(() => getRituals(), []);
  const kindRituals = useAsync(
    () => (kind ? getRitualsByKind(kind) : Promise.resolve([])),
    [kind],
  );

  const loading =
    ritus.loading || flagshipRituals.loading || allRituals.loading || kindRituals.loading;
  const error =
    ritus.error || flagshipRituals.error || allRituals.error || kindRituals.error;

  const browseRituals = useMemo(
    () => (kind ? (kindRituals.data ?? []) : (allRituals.data ?? [])),
    [kind, kindRituals.data, allRituals.data],
  );

  if (loading) return <Loading label="Opening Bangabda…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          ritus.reload();
          flagshipRituals.reload();
          allRituals.reload();
          kindRituals.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Bangabda', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Bangabda</AppText>
          <AppText variant="body" className="mt-xs text-brand-ivory-soft">
            The Bengali Year
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {CALENDAR_OVERVIEW.oneLine}
          </AppText>
        </View>

        <SectionHeader className="pt-lg" title="The year wheel" subtitle="Six seasons · twelve months" />
        {ritus.data && ritus.data.length > 0 ? (
          <YearWheel
            ritus={ritus.data}
            renderRitu={(ritu) => <RituWheelNode ritu={ritu} />}
          />
        ) : null}

        <View
          className="mx-xl mt-lg rounded-xl p-lg border"
          style={{ borderColor: brand.border, backgroundColor: brand.surface }}
        >
          <AppText variant="label" className="text-brand-marigold mb-xs">
            {CALENDAR_OVERVIEW.era}
          </AppText>
          <AppText variant="body" className="text-brand-ivory-soft" style={{ lineHeight: 24 }}>
            New year: {CALENDAR_OVERVIEW.newYearDay}. {CALENDAR_OVERVIEW.yearFormula}.
          </AppText>
        </View>

        {flagshipRituals.data && flagshipRituals.data.length > 0 ? (
          <>
            <SectionHeader className="pt-lg" title="Landmark rituals" subtitle="Start here" />
            <AutoScrollRow
              data={flagshipRituals.data}
              keyExtractor={(ritual) => ritual.id}
              gap={16}
              speed={0.2}
              renderItem={(ritual) => <RitualCard ritual={ritual} featured />}
            />
          </>
        ) : null}

        <SectionHeader className="pt-lg" title="Browse rituals" subtitle="By kind" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setKind(null)}>
            <Tag label="All kinds" active={kind === null} />
          </Pressable>
          {RITUAL_KIND_FILTER_ORDER.map((k) => (
            <Pressable key={k} onPress={() => setKind(k)}>
              <Tag label={RITUAL_KIND_LABELS[k]} active={kind === k} />
            </Pressable>
          ))}
        </ScrollView>

        <KolkaDivider width={120} />

        <SectionHeader
          title="Rituals & observances"
          subtitle={
            browseRituals.length === 1
              ? '1 ritual'
              : `${browseRituals.length} rituals`
          }
        />

        {browseRituals.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browseRituals.map((ritual) => (
              <RitualCard key={ritual.id} ritual={ritual} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No rituals match this kind yet.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
