import React from 'react';
import { ScrollView, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  ArticleTile,
  EmptyState,
  ErrorView,
  FestivalCard,
  FestivalFaithBody,
  Img,
  KolkaDivider,
  Loading,
  ReligiousSiteCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import {
  FAITH_LABELS,
  FAITH_REGION_LABELS,
  SITE_STATUS_LABELS,
  SITE_TYPE_LABELS,
} from '@/constants/festivals-faith';
import { useAsync } from '@/hooks/useAsync';
import {
  getArticlesByIds,
  getFestivalsForSite,
  getRelatedSites,
  getSiteBySlug,
} from '@/services';
import { brand } from '@/theme';

const STORY_TILE = 120;

export default function ReligiousSiteDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const site = useAsync(() => getSiteBySlug(slug), [slug]);
  const festivals = useAsync(
    () =>
      site.data ? getFestivalsForSite(site.data.id) : Promise.resolve([]),
    [site.data?.id],
  );
  const related = useAsync(
    () =>
      site.data ? getRelatedSites(site.data.id) : Promise.resolve([]),
    [site.data?.id],
  );
  const stories = useAsync(
    () =>
      site.data
        ? getArticlesByIds(site.data.relatedArticleIds)
        : Promise.resolve([]),
    [site.data?.id, site.data?.relatedArticleIds.join(',')],
  );

  if (site.loading) return <Loading label="Opening sacred site…" />;
  if (site.error || !site.data)
    return <ErrorView message="Site not found." />;

  const s = site.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img
          source={s.heroImage}
          radius={0}
          style={{ width: '100%', height: 320 }}
        />

        <View className="px-xl pt-lg">
          {s.nameBengali ? (
            <AppText variant="quote" className="text-brand-marigold font-serif-italic">
              {s.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {s.name}
          </AppText>
          <AppText variant="label" className="mt-sm text-brand-terracotta">
            {s.location}
          </AppText>
          <AppText variant="bodyLg" className="mt-md">
            {s.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {s.shortDescription}
          </AppText>

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={SITE_TYPE_LABELS[s.type]} active />
            <Tag label={FAITH_LABELS[s.faith]} />
            <Tag label={FAITH_REGION_LABELS[s.region]} />
            {s.status.map((st) => (
              <Tag key={st} label={SITE_STATUS_LABELS[st] ?? st} />
            ))}
          </View>
        </View>

        <KolkaDivider />

        <View className="px-xl">
          {s.builtPeriod ? (
            <>
              <AppText variant="h2" className="mb-sm">
                Built
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 26 }}>
                {s.builtPeriod}
              </AppText>
            </>
          ) : null}
          {s.builtBy ? (
            <>
              <AppText variant="h2" className="mt-lg mb-sm">
                Built by
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 26 }}>
                {s.builtBy}
              </AppText>
            </>
          ) : null}
          {s.architecturalStyle ? (
            <>
              <AppText variant="h2" className="mt-lg mb-sm">
                Architecture
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 26 }}>
                {s.architecturalStyle}
              </AppText>
            </>
          ) : null}
        </View>

        <KolkaDivider />

        <FestivalFaithBody sections={s.bodySections} />

        <KolkaDivider />

        <View className="px-xl">
          <AppText variant="h2" className="mb-md">
            Historical significance
          </AppText>
          <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
            {s.historicalSignificance}
          </AppText>
        </View>

        {s.visitorNote ? (
          <>
            <KolkaDivider />
            <View className="px-xl">
              <AppText variant="h2" className="mb-md">
                Visiting today
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
                {s.visitorNote}
              </AppText>
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Related festivals" subtitle="Celebrations linked to this place" />
        {festivals.data && festivals.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {festivals.data.map((festival) => (
              <FestivalCard key={festival.id} festival={festival} width={200} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No linked festivals yet"
              subtitle="Festivals connected to this site will appear here."
            />
          </View>
        )}

        <SectionHeader
          className="pt-lg"
          title="Related sacred sites"
          subtitle="Nearby in the heritage web"
        />
        {related.data && related.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {related.data.map((item) => (
              <ReligiousSiteCard key={item.id} site={item} width={200} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related sites yet"
              subtitle="Connections across Sacred Bengal will appear here."
            />
          </View>
        )}

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

        {s.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This site entry is a stub — a fuller profile is on the way.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
