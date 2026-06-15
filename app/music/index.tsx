import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  ErrorView,
  InstrumentCard,
  KolkaDivider,
  Loading,
  MusicGenreCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import {
  GENRE_FAMILY_FILTER_ORDER,
  GENRE_FAMILY_LABELS,
  INSTRUMENT_TYPE_FILTER_ORDER,
  INSTRUMENT_TYPE_LABELS,
  getFlagshipGenres,
  getGenresByFamily,
  getInstruments,
  getInstrumentsByType,
  getMusicGenres,
} from '@/services';
import type { GenreFamily, InstrumentType, MusicGenre } from '@/types';

function filterFlagships(items: MusicGenre[], family: GenreFamily | null): MusicGenre[] {
  if (!family) return items;
  return items.filter((genre) => genre.family === family);
}

export default function MusicOfBengalHubScreen() {
  const [selectedFamily, setSelectedFamily] = useState<GenreFamily | null>(null);
  const [instrumentType, setInstrumentType] = useState<InstrumentType | null>(null);

  const flagship = useAsync(() => getFlagshipGenres(), []);
  const allGenres = useAsync(() => getMusicGenres(), []);
  const familyGenres = useAsync(
    () => (selectedFamily ? getGenresByFamily(selectedFamily) : Promise.resolve([])),
    [selectedFamily],
  );
  const allInstruments = useAsync(() => getInstruments(), []);
  const typeInstruments = useAsync(
    () => (instrumentType ? getInstrumentsByType(instrumentType) : Promise.resolve([])),
    [instrumentType],
  );

  const loading =
    flagship.loading ||
    allGenres.loading ||
    familyGenres.loading ||
    allInstruments.loading ||
    typeInstruments.loading;
  const error =
    flagship.error ||
    allGenres.error ||
    familyGenres.error ||
    allInstruments.error ||
    typeInstruments.error;

  const browseGenres = selectedFamily ? (familyGenres.data ?? []) : (allGenres.data ?? []);
  const featuredGenres = useMemo(
    () => filterFlagships(flagship.data ?? [], selectedFamily),
    [flagship.data, selectedFamily],
  );
  const browseInstruments = instrumentType
    ? (typeInstruments.data ?? [])
    : (allInstruments.data ?? []);

  if (loading) return <Loading label="Opening Music of Bengal…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          flagship.reload();
          allGenres.reload();
          familyGenres.reload();
          allInstruments.reload();
          typeInstruments.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Music of Bengal', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel} · Sur o Sangeet
          </AppText>
          <AppText variant="h1">Music of Bengal</AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            From the Panchakavi song-poets to Baul mystics and Shyama Sangeet — the
            traditions, instruments, and living sound of Bengal.
          </AppText>
        </View>

        {featuredGenres.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Featured genres"
              subtitle="Start with the great traditions"
            />
            <AutoScrollRow
              data={featuredGenres}
              keyExtractor={(genre) => genre.id}
              gap={16}
              speed={0.2}
              renderItem={(genre) => (
                <MusicGenreCard genre={genre} width={240} featured />
              )}
            />
          </>
        ) : null}

        <KolkaDivider width={120} />

        <SectionHeader
          title="Browse by family"
          subtitle="Panchakavi, folk, devotional, and more"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setSelectedFamily(null)}>
            <Tag label="All families" active={selectedFamily === null} />
          </Pressable>
          {GENRE_FAMILY_FILTER_ORDER.map((family) => (
            <Pressable key={family} onPress={() => setSelectedFamily(family)}>
              <Tag
                label={GENRE_FAMILY_LABELS[family]}
                active={selectedFamily === family}
              />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader
          className="pt-lg"
          title={selectedFamily ? GENRE_FAMILY_LABELS[selectedFamily] : 'All genres'}
          subtitle={
            browseGenres.length === 1
              ? '1 tradition'
              : `${browseGenres.length} traditions`
          }
        />

        {browseGenres.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browseGenres.map((genre) => (
              <MusicGenreCard key={genre.id} genre={genre} width={168} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No genres in this family yet.
            </AppText>
          </View>
        )}

        <KolkaDivider />

        <SectionHeader
          title="Instruments"
          subtitle="The traditional sound of Bengali music"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setInstrumentType(null)}>
            <Tag label="All types" active={instrumentType === null} />
          </Pressable>
          {INSTRUMENT_TYPE_FILTER_ORDER.map((type) => (
            <Pressable key={type} onPress={() => setInstrumentType(type)}>
              <Tag
                label={INSTRUMENT_TYPE_LABELS[type]}
                active={instrumentType === type}
              />
            </Pressable>
          ))}
        </ScrollView>

        <View className="px-xl pt-md flex-row flex-wrap gap-md">
          {browseInstruments.map((instrument) => (
            <InstrumentCard key={instrument.id} instrument={instrument} width={140} />
          ))}
        </View>
      </Screen>
    </>
  );
}
