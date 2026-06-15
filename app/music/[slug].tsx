import React, { useMemo } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  EmptyState,
  ErrorView,
  Img,
  InstrumentCard,
  KolkaDivider,
  Loading,
  MusicGenreBody,
  MusicGenreCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  GENRE_FAMILY_LABELS,
  getAuthorById,
  getGenreBySlug,
  getInstrumentsForGenre,
  getMusicGenres,
} from '@/services';
import { brand } from '@/theme';

export default function MusicGenreDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const genre = useAsync(() => getGenreBySlug(slug), [slug]);
  const playedOn = useAsync(
    () => (genre.data ? getInstrumentsForGenre(genre.data.id) : Promise.resolve([])),
    [genre.data?.id],
  );
  const allGenres = useAsync(() => getMusicGenres(), []);
  const linkedAuthor = useAsync(
    () =>
      genre.data?.relatedAuthorIds?.[0]
        ? getAuthorById(genre.data.relatedAuthorIds[0]).catch(() => null)
        : Promise.resolve(null),
    [genre.data?.relatedAuthorIds?.[0]],
  );

  const relatedGenres = useMemo(() => {
    if (!genre.data || !allGenres.data) return [];
    return genre.data.relatedGenreIds
      .map((id) => allGenres.data!.find((item) => item.id === id))
      .filter(Boolean);
  }, [genre.data, allGenres.data]);

  if (genre.loading) return <Loading label="Opening genre…" />;
  if (genre.error || !genre.data)
    return <ErrorView message="Music genre not found." />;

  const g = genre.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img
          source={g.heroImage}
          radius={0}
          style={{ width: '100%', height: 280 }}
        />

        <View className="px-xl pt-lg">
          {g.nameBengali ? (
            <AppText variant="quote" className="text-brand-kolka font-serif-italic">
              {g.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {g.name}
          </AppText>
          {g.alsoKnownAs ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {g.alsoKnownAs}
            </AppText>
          ) : null}
          {g.founderOrKeyFigure ? (
            <AppText variant="caption" className="mt-sm text-brand-ivory-soft">
              {g.founderOrKeyFigure}
            </AppText>
          ) : null}

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={GENRE_FAMILY_LABELS[g.family]} active />
          </View>

          {g.songCount != null ? (
            <View className="mt-md">
              <AppText variant="label" className="text-brand-marigold">
                {g.songCount.toLocaleString()} songs
              </AppText>
              {g.songCountNote ? (
                <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                  {g.songCountNote}
                </AppText>
              ) : null}
            </View>
          ) : null}

          <AppText variant="bodyLg" className="mt-lg">
            {g.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {g.shortDescription}
          </AppText>
        </View>

        {g.heritageNote ? (
          <>
            <KolkaDivider />
            <View
              className="mx-xl rounded-xl p-lg border"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <AppText variant="label" className="text-brand-kolka mb-xs">
                Heritage
              </AppText>
              <AppText variant="body" style={{ lineHeight: 26 }}>
                {g.heritageNote}
              </AppText>
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <MusicGenreBody sections={g.bodySections} />

        <KolkaDivider />

        <SectionHeader title="Played on" subtitle="Traditional instruments for this genre" />
        {playedOn.data && playedOn.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {playedOn.data.map((instrument) => (
              <InstrumentCard key={instrument.id} instrument={instrument} width={160} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No instruments listed yet"
              subtitle="Instrument associations will appear here."
            />
          </View>
        )}

        {g.slug === 'rabindra-sangeet' ? (
          <Link href="/tagore" asChild>
            <Pressable
              className="mx-xl mt-lg rounded-xl p-lg border flex-row items-center justify-between"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <View className="flex-1 pr-md">
                <AppText variant="label" className="text-brand-kolka mb-xs">
                  Deep dive
                </AppText>
                <AppText variant="title">World of Tagore</AppText>
                <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                  Rabindra Sangeet parjaay, Gitabitan, and Tagore’s creations
                </AppText>
              </View>
              <AppText variant="label" className="text-brand-kolka">
                →
              </AppText>
            </Pressable>
          </Link>
        ) : null}

        {linkedAuthor.data ? (
          <Link href={`/authors/${linkedAuthor.data.slug}`} asChild>
            <Pressable
              className="mx-xl mt-lg rounded-xl p-lg border flex-row items-center justify-between"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <View className="flex-1 pr-md">
                <AppText variant="label" className="text-brand-kolka mb-xs">
                  Also in Voices of Bengal
                </AppText>
                <AppText variant="title">{linkedAuthor.data.name}</AppText>
                <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                  {linkedAuthor.data.subtitle}
                </AppText>
              </View>
              <AppText variant="label" className="text-brand-kolka">
                →
              </AppText>
            </Pressable>
          </Link>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Related genres" subtitle="Neighbouring traditions" />
        {relatedGenres.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {relatedGenres.map((related) => (
              <MusicGenreCard key={related!.id} genre={related!} width={180} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related genres yet"
              subtitle="Connections will appear here as the hub grows."
            />
          </View>
        )}

        {g.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This genre entry is a stub — a fuller profile is on the way.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
