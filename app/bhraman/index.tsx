import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  ErrorView,
  KolkaDivider,
  Loading,
  PlaceCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import {
  getFlagshipPlaces,
  getKolkataPlaces,
  getPlaces,
  getPlacesByRegion,
  getPlacesByType,
  PLACE_TYPE_FILTER_ORDER,
  PLACE_TYPE_LABELS,
  PLACE_REGION_LABELS,
  REGION_FILTER_ORDER,
} from '@/services';
import type { PlaceRegion, PlaceType } from '@/types';

export default function BhramanHubScreen() {
  const [region, setRegion] = useState<PlaceRegion | null>(null);
  const [type, setType] = useState<PlaceType | null>(null);

  const kolkata = useAsync(() => getKolkataPlaces(), []);
  const flagship = useAsync(() => getFlagshipPlaces(), []);
  const allPlaces = useAsync(() => getPlaces(), []);
  const regionPlaces = useAsync(
    () => (region ? getPlacesByRegion(region) : Promise.resolve([])),
    [region],
  );
  const typePlaces = useAsync(
    () => (type ? getPlacesByType(type) : Promise.resolve([])),
    [type],
  );

  const loading =
    kolkata.loading || flagship.loading || allPlaces.loading || regionPlaces.loading || typePlaces.loading;
  const error =
    kolkata.error || flagship.error || allPlaces.error || regionPlaces.error || typePlaces.error;

  const browsePlaces = useMemo(() => {
    let items = allPlaces.data ?? [];
    if (region) items = regionPlaces.data ?? [];
    if (type) {
      const typeFiltered = typePlaces.data ?? [];
      items = region
        ? typeFiltered.filter((place) => place.region === region)
        : typeFiltered;
    }
    return items;
  }, [region, type, allPlaces.data, regionPlaces.data, typePlaces.data]);

  if (loading) return <Loading label="Opening Bhraman…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          kolkata.reload();
          flagship.reload();
          allPlaces.reload();
          regionPlaces.reload();
          typePlaces.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Bhraman', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Bhraman</AppText>
          <AppText variant="body" className="mt-xs text-brand-ivory-soft">
            Explore Bengal
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            From Victoria Memorial and Park Street to Darjeeling, the Sundarbans, and
            Shantiniketan — where to go, why it matters, and how to get there.
          </AppText>
        </View>

        {kolkata.data && kolkata.data.length > 0 ? (
          <>
            <SectionHeader className="pt-lg" title="Kolkata" subtitle="Featured first" />
            <AutoScrollRow
              data={kolkata.data}
              keyExtractor={(place) => place.id}
              gap={16}
              speed={0.2}
              renderItem={(place) => <PlaceCard place={place} featured />}
            />
          </>
        ) : null}

        {flagship.data && flagship.data.some((p) => p.region !== 'kolkata') ? (
          <>
            <SectionHeader className="pt-lg" title="Beyond the city" subtitle="Flagship destinations" />
            <AutoScrollRow
              data={flagship.data.filter((p) => p.region !== 'kolkata')}
              keyExtractor={(place) => place.id}
              gap={16}
              speed={0.18}
              renderItem={(place) => <PlaceCard place={place} featured />}
            />
          </>
        ) : null}

        <SectionHeader className="pt-lg" title="Browse by region" subtitle="Across Bengal" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setRegion(null)}>
            <Tag label="All regions" active={region === null} />
          </Pressable>
          {REGION_FILTER_ORDER.map((r) => (
            <Pressable key={r} onPress={() => setRegion(r)}>
              <Tag label={PLACE_REGION_LABELS[r]} active={region === r} />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader className="pt-md" title="Browse by type" subtitle="What to explore" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setType(null)}>
            <Tag label="All types" active={type === null} />
          </Pressable>
          {PLACE_TYPE_FILTER_ORDER.map((t) => (
            <Pressable key={t} onPress={() => setType(t)}>
              <Tag label={PLACE_TYPE_LABELS[t]} active={type === t} />
            </Pressable>
          ))}
        </ScrollView>

        <KolkaDivider width={120} />

        <SectionHeader
          title="Places"
          subtitle={
            browsePlaces.length === 1 ? '1 place' : `${browsePlaces.length} places`
          }
        />

        {browsePlaces.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browsePlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No places match these filters yet.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
