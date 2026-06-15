import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  HeritageBuildingCard,
  KolkaDivider,
  Loading,
  ErrorView,
  SectionHeader,
  Screen,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import {
  HERITAGE_REGION_LABELS,
  HERITAGE_STATUS_FILTER_ORDER,
  STATUS_LABELS,
} from '@/constants/heritage-buildings';
import { useAsync } from '@/hooks/useAsync';
import { getFlagshipBuildings, getHeritageBuildings } from '@/services';
import type { HeritageBuildingRegion, HeritageCurrentStatus } from '@/types';

export default function PalacesRajbarisHubScreen() {
  const [selectedStatus, setSelectedStatus] = useState<HeritageCurrentStatus | null>(
    null,
  );
  const [selectedRegion, setSelectedRegion] = useState<HeritageBuildingRegion | null>(
    null,
  );

  const all = useAsync(() => getHeritageBuildings(), []);
  const flagship = useAsync(() => getFlagshipBuildings(), []);

  const regionsInData = useMemo(() => {
    const ids = new Set((all.data ?? []).map((b) => b.region));
    return [...ids].sort((a, b) =>
      HERITAGE_REGION_LABELS[a].localeCompare(HERITAGE_REGION_LABELS[b]),
    );
  }, [all.data]);

  const filtered = useMemo(() => {
    return (all.data ?? []).filter((building) => {
      if (selectedStatus && !building.currentStatus.includes(selectedStatus)) {
        return false;
      }
      if (selectedRegion && building.region !== selectedRegion) return false;
      return true;
    });
  }, [all.data, selectedStatus, selectedRegion]);

  const flagshipFiltered = useMemo(() => {
    if (!selectedStatus && !selectedRegion) return flagship.data ?? [];
    const ids = new Set(filtered.map((b) => b.id));
    return (flagship.data ?? []).filter((b) => ids.has(b.id));
  }, [flagship.data, filtered, selectedStatus, selectedRegion]);

  const loading = all.loading || flagship.loading;
  const error = all.error || flagship.error;

  if (loading) return <Loading label="Opening Bengal’s palaces…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          all.reload();
          flagship.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Palaces & Rajbaris', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-marigold mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Palaces & Rajbaris</AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            Royal palaces, zamindar mansions, and merchant houses — from museums
            and heritage hotels to abandoned ruins and film locations.
          </AppText>
        </View>

        <KolkaDivider width={140} />

        <SectionHeader
          title="Browse by status"
          subtitle="Stay in one, visit a museum, explore ruins"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setSelectedStatus(null)}>
            <Tag label="All" active={selectedStatus === null} />
          </Pressable>
          {HERITAGE_STATUS_FILTER_ORDER.map((status) => (
            <Pressable key={status} onPress={() => setSelectedStatus(status)}>
              <Tag label={STATUS_LABELS[status]} active={selectedStatus === status} />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader
          className="pt-lg"
          title="Browse by region"
          subtitle="Murshidabad, Kolkata, Hooghly, and more"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setSelectedRegion(null)}>
            <Tag label="All regions" active={selectedRegion === null} />
          </Pressable>
          {regionsInData.map((region) => (
            <Pressable key={region} onPress={() => setSelectedRegion(region)}>
              <Tag
                label={HERITAGE_REGION_LABELS[region]}
                active={selectedRegion === region}
              />
            </Pressable>
          ))}
        </ScrollView>

        {flagshipFiltered.length > 0 &&
        !selectedStatus &&
        !selectedRegion ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Featured palaces"
              subtitle="Grand survivors and restored rajbaris"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {flagshipFiltered.map((building) => (
                <HeritageBuildingCard
                  key={building.id}
                  building={building}
                  width={240}
                  featured
                />
              ))}
            </ScrollView>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader
          title={selectedStatus || selectedRegion ? 'Results' : 'All buildings'}
          subtitle={
            filtered.length === 1
              ? '1 place'
              : `${filtered.length} places`
          }
        />
        {filtered.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {filtered.map((building) => (
              <HeritageBuildingCard key={building.id} building={building} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No buildings match these filters. Try another status or region.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
