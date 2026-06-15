import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  BirdCard,
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
  HABITAT_FILTER_ORDER,
  HABITAT_LABELS,
  RESIDENCY_FILTER_ORDER,
  RESIDENCY_LABELS,
  filterBirds,
  getFlagshipBirds,
  getBirds,
  getOfficialBirds,
} from '@/services';
import type { BirdHabitat, BirdResidency } from '@/types';

export default function PakhiHubScreen() {
  const [habitat, setHabitat] = useState<BirdHabitat | null>(null);
  const [residency, setResidency] = useState<BirdResidency | null>(null);

  const flagship = useAsync(() => getFlagshipBirds(), []);
  const allBirds = useAsync(() => getBirds(), []);
  const official = useAsync(() => getOfficialBirds(), []);

  const loading = flagship.loading || allBirds.loading || official.loading;
  const error = flagship.error || allBirds.error || official.error;

  const browseBirds = useMemo(
    () => filterBirds(allBirds.data ?? [], { habitat, residency }),
    [allBirds.data, habitat, residency],
  );
  const featuredBirds = useMemo(
    () => filterBirds(flagship.data ?? [], { habitat, residency }),
    [flagship.data, habitat, residency],
  );

  if (loading) return <Loading label="Opening Pakhi…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          flagship.reload();
          allBirds.reload();
          official.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Pakhi', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Pakhi</AppText>
          <AppText variant="body" className="mt-xs text-brand-ivory-soft">
            Birds of Bengal
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            From the doyel and machhranga to Sundarbans kingfishers and winter
            migrants — the winged life of both Bengals.
          </AppText>
        </View>

        {official.data && official.data.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Official birds of the two Bengals"
              subtitle="State and national emblems"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {official.data.map((bird) => (
                <BirdCard key={bird.id} bird={bird} width={240} compact />
              ))}
            </ScrollView>
          </>
        ) : null}

        {featuredBirds.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Featured species"
              subtitle="Start here"
            />
            <AutoScrollRow
              data={featuredBirds}
              keyExtractor={(bird) => bird.id}
              gap={16}
              speed={0.2}
              renderItem={(bird) => <BirdCard bird={bird} width={220} featured />}
            />
          </>
        ) : null}

        <KolkaDivider width={120} />

        <SectionHeader title="Browse by habitat" subtitle="Sundarbans to Himalayan hills" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setHabitat(null)}>
            <Tag label="All habitats" active={habitat === null} />
          </Pressable>
          {HABITAT_FILTER_ORDER.map((h) => (
            <Pressable key={h} onPress={() => setHabitat(h)}>
              <Tag label={HABITAT_LABELS[h]} active={habitat === h} />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader className="pt-md" title="Browse by residency" subtitle="Residents and migrants" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setResidency(null)}>
            <Tag label="All" active={residency === null} />
          </Pressable>
          {RESIDENCY_FILTER_ORDER.map((r) => (
            <Pressable key={r} onPress={() => setResidency(r)}>
              <Tag label={RESIDENCY_LABELS[r]} active={residency === r} />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader
          className="pt-lg"
          title="The aviary"
          subtitle={browseBirds.length === 1 ? '1 species' : `${browseBirds.length} species`}
        />

        {browseBirds.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browseBirds.map((bird) => (
              <BirdCard key={bird.id} bird={bird} width={160} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No birds match these filters.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
