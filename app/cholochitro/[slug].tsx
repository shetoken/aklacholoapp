import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  CinemaBody,
  CinemaCard,
  CinemaPoster,
  EmptyState,
  ErrorView,
  IconCard,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  CINEMA_BORDER_LABELS,
  CINEMA_TYPE_LABELS,
  getBookForCinema,
  getCastIconsForCinema,
  getCinemaBySlug,
  getDirectorIconForCinema,
  getRelatedCinema,
} from '@/services';
import { brand } from '@/theme';

export default function CinemaDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const entry = useAsync(() => getCinemaBySlug(slug), [slug]);
  const director = useAsync(
    () => (entry.data ? getDirectorIconForCinema(entry.data.id) : Promise.resolve(null)),
    [entry.data?.id],
  );
  const cast = useAsync(
    () => (entry.data ? getCastIconsForCinema(entry.data.id) : Promise.resolve([])),
    [entry.data?.id],
  );
  const sourceBook = useAsync(
    () => (entry.data ? getBookForCinema(entry.data.id) : Promise.resolve(null)),
    [entry.data?.id],
  );
  const related = useAsync(
    () => (entry.data ? getRelatedCinema(entry.data.id) : Promise.resolve([])),
    [entry.data?.id],
  );

  if (entry.loading) return <Loading label="Opening film profile…" />;
  if (entry.error || !entry.data) return <ErrorView message="Cinema entry not found." />;

  const c = entry.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <CinemaPoster entry={c} height={280} featured />

        <View className="px-xl pt-lg">
          {c.englishTitle ? (
            <AppText variant="caption" className="text-brand-ivory-soft font-serif-italic">
              {c.englishTitle}
            </AppText>
          ) : null}

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={CINEMA_TYPE_LABELS[c.type]} active />
            {c.year ? <Tag label={c.year} active /> : null}
            <Tag label={CINEMA_BORDER_LABELS[c.borderSide]} />
          </View>

          <AppText variant="bodyLg" className="mt-lg" style={{ lineHeight: 28 }}>
            {c.subtitle}
          </AppText>
        </View>

        <KolkaDivider />

        <CinemaBody sections={c.bodySections} />

        {c.honours && c.honours.length > 0 ? (
          <>
            <KolkaDivider />
            <View className="px-xl">
              <AppText variant="label" className="text-brand-kolka mb-md">
                Honours
              </AppText>
              <View className="flex-row flex-wrap gap-2">
                {c.honours.map((honour) => (
                  <Tag key={honour} label={honour} active />
                ))}
              </View>
            </View>
          </>
        ) : null}

        {director.data ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Directed by" subtitle="From the Icons hub" />
            <View className="px-xl">
              <Link href={`/icons/${director.data.slug}`} asChild>
                <Pressable
                  className="rounded-xl p-lg border flex-row items-center justify-between"
                  style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                >
                  <View className="flex-1 pr-md">
                    {director.data.nameBengali ? (
                      <AppText variant="caption" className="text-brand-kolka font-serif-italic">
                        {director.data.nameBengali}
                      </AppText>
                    ) : null}
                    <AppText variant="title">{director.data.name}</AppText>
                    <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                      {director.data.subtitle}
                    </AppText>
                  </View>
                  <AppText variant="label" className="text-brand-kolka">
                    →
                  </AppText>
                </Pressable>
              </Link>
            </View>
          </>
        ) : c.directorName ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Directed by" />
            <View className="px-xl">
              <AppText variant="bodyLg">{c.directorName}</AppText>
            </View>
          </>
        ) : null}

        {cast.data && cast.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Cast" subtitle="From the Icons hub" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {cast.data.map((icon) => (
                <IconCard key={icon.id} icon={icon} width={160} />
              ))}
            </ScrollView>
          </>
        ) : null}

        {sourceBook.data ? (
          <>
            <KolkaDivider />
            <SectionHeader title="From the book" subtitle="Source in Boi" />
            <View className="px-xl">
              <Link href={`/boi/${sourceBook.data.slug}`} asChild>
                <Pressable
                  className="rounded-xl p-lg border flex-row items-center justify-between"
                  style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                >
                  <View className="flex-1 pr-md">
                    {sourceBook.data.titleBengali ? (
                      <AppText variant="caption" className="text-brand-kolka font-serif-italic">
                        {sourceBook.data.titleBengali}
                      </AppText>
                    ) : null}
                    <AppText variant="title">{sourceBook.data.title}</AppText>
                    <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                      {sourceBook.data.authorName}
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

        <KolkaDivider />

        <SectionHeader title="Related films" subtitle="More from Cholochitro" />
        {related.data && related.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {related.data.map((item) => (
              <CinemaCard key={item.id} entry={item} width={160} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related films yet"
              subtitle="Connections will appear as the catalogue grows."
            />
          </View>
        )}

        {c.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This entry is a stub — verify details before publishing.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
