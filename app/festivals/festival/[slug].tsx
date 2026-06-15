import React from 'react';
import { ScrollView, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  ArticleTile,
  CreatorCard,
  EmptyState,
  ErrorView,
  FestivalFaithBody,
  Img,
  KolkaDivider,
  Loading,
  ReligiousSiteCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { FAITH_LABELS, SEASON_LABELS } from '@/constants/festivals-faith';
import { useAsync } from '@/hooks/useAsync';
import {
  getArticlesByIds,
  getCreatorsForFestival,
  getFestivalBySlug,
  getSitesForFestival,
} from '@/services';
import { brand } from '@/theme';

const STORY_TILE = 120;

export default function FestivalDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const festival = useAsync(() => getFestivalBySlug(slug), [slug]);
  const sites = useAsync(
    () =>
      festival.data
        ? getSitesForFestival(festival.data.id)
        : Promise.resolve([]),
    [festival.data?.id],
  );
  const creators = useAsync(
    () =>
      festival.data
        ? getCreatorsForFestival(festival.data.id)
        : Promise.resolve([]),
    [festival.data?.id],
  );
  const stories = useAsync(
    () =>
      festival.data
        ? getArticlesByIds(festival.data.relatedArticleIds)
        : Promise.resolve([]),
    [festival.data?.id, festival.data?.relatedArticleIds.join(',')],
  );

  if (festival.loading) return <Loading label="Opening festival…" />;
  if (festival.error || !festival.data)
    return <ErrorView message="Festival not found." />;

  const f = festival.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img
          source={f.heroImage}
          radius={0}
          style={{ width: '100%', height: 320 }}
        />

        <View className="px-xl pt-lg">
          {f.nameBengali ? (
            <AppText variant="quote" className="text-brand-marigold font-serif-italic">
              {f.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {f.name}
          </AppText>
          <AppText variant="label" className="mt-sm text-brand-terracotta">
            {f.timeOfYear}
          </AppText>
          <AppText variant="bodyLg" className="mt-md">
            {f.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {f.shortDescription}
          </AppText>

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={SEASON_LABELS[f.season]} active />
            <Tag label={FAITH_LABELS[f.faith]} />
          </View>
        </View>

        {f.heritageNote ? (
          <>
            <KolkaDivider />
            <View
              className="mx-xl rounded-xl p-lg border"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <AppText variant="label" className="text-brand-marigold mb-xs">
                Heritage recognition
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 26 }}>
                {f.heritageNote}
              </AppText>
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <FestivalFaithBody sections={f.bodySections} />

        <KolkaDivider />

        <SectionHeader title="Sacred sites" subtitle="Places linked to this festival" />
        {sites.data && sites.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {sites.data.map((site) => (
              <ReligiousSiteCard key={site.id} site={site} width={200} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No linked sites yet"
              subtitle="Sacred places connected to this festival will appear here."
            />
          </View>
        )}

        {creators.data && creators.data.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Meet the makers"
              subtitle="Creators tied to this celebration"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24 }}
            >
              {creators.data.map((creator) => (
                <CreatorCard key={creator.id} creator={creator} />
              ))}
            </ScrollView>
          </>
        ) : null}

        <SectionHeader
          className="pt-lg"
          title="Related stories"
          subtitle="From The Magic of Bengal"
        />
        {stories.data && stories.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
          >
            {stories.data.map((article) => (
              <ArticleTile key={article.id} article={article} size={STORY_TILE} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No linked stories yet"
              subtitle="Related Magic of Bengal articles will appear here."
            />
          </View>
        )}

        {f.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This festival entry is a stub — a fuller profile is on the way.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
