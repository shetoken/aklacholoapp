import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  ArticleTile,
  EmptyState,
  ErrorView,
  HeritageBuildingBody,
  HeritageBuildingCard,
  Img,
  KolkaDivider,
  Loading,
  SareeCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import {
  HERITAGE_REGION_LABELS,
  HERITAGE_STYLE_LABELS,
  HERITAGE_TYPE_LABELS,
  STATUS_LABELS,
} from '@/constants/heritage-buildings';
import { useAsync } from '@/hooks/useAsync';
import {
  getArticlesByIds,
  getHeritageBuildingBySlug,
  getRelatedBuildings,
  getSareesByIds,
} from '@/services';
import { brand } from '@/theme';

const STORY_TILE = 120;

export default function HeritageBuildingDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const building = useAsync(() => getHeritageBuildingBySlug(slug), [slug]);
  const related = useAsync(
    () =>
      building.data
        ? getRelatedBuildings(building.data.id)
        : Promise.resolve([]),
    [building.data?.id],
  );
  const sarees = useAsync(
    () =>
      building.data?.relatedSareeIds?.length
        ? getSareesByIds(building.data.relatedSareeIds)
        : Promise.resolve([]),
    [building.data?.id, building.data?.relatedSareeIds?.join(',')],
  );
  const stories = useAsync(
    () =>
      building.data
        ? getArticlesByIds(building.data.relatedArticleIds)
        : Promise.resolve([]),
    [building.data?.id, building.data?.relatedArticleIds.join(',')],
  );

  if (building.loading) return <Loading label="Opening palace story…" />;
  if (building.error || !building.data)
    return <ErrorView message="Building not found." />;

  const b = building.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img
          source={b.heroImage}
          radius={0}
          style={{ width: '100%', height: 320 }}
        />

        <View className="px-xl pt-lg">
          {b.nameBengali ? (
            <AppText variant="quote" className="text-brand-marigold font-serif-italic">
              {b.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {b.name}
          </AppText>
          {b.alsoKnownAs ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {b.alsoKnownAs}
            </AppText>
          ) : null}
          <AppText variant="label" className="mt-sm text-brand-terracotta">
            {b.location}
          </AppText>
          <AppText variant="bodyLg" className="mt-md">
            {b.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {b.shortDescription}
          </AppText>

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={HERITAGE_TYPE_LABELS[b.type]} active />
            <Tag label={HERITAGE_REGION_LABELS[b.region]} />
            {b.currentStatus.map((status) => (
              <Tag key={status} label={STATUS_LABELS[status]} />
            ))}
            {b.style.map((style) => (
              <Tag key={style} label={HERITAGE_STYLE_LABELS[style]} />
            ))}
          </View>
        </View>

        <KolkaDivider />

        <View className="px-xl">
          <AppText variant="h2" className="mb-sm">
            Built
          </AppText>
          <AppText variant="bodyLg" style={{ lineHeight: 26 }}>
            {b.builtPeriod}
          </AppText>
          {b.builtBy ? (
            <>
              <AppText variant="h2" className="mt-lg mb-sm">
                Built by
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 26 }}>
                {b.builtBy}
              </AppText>
            </>
          ) : null}
          {b.dynastyOrFamily ? (
            <>
              <AppText variant="h2" className="mt-lg mb-sm">
                Dynasty / family
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 26 }}>
                {b.dynastyOrFamily}
              </AppText>
            </>
          ) : null}
        </View>

        <KolkaDivider />

        <HeritageBuildingBody sections={b.bodySections} />

        <KolkaDivider />

        <View className="px-xl">
          <AppText variant="h2" className="mb-md">
            Historical significance
          </AppText>
          <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
            {b.historicalSignificance}
          </AppText>
        </View>

        {b.visitorNote ? (
          <>
            <KolkaDivider />
            <View className="px-xl">
              <AppText variant="h2" className="mb-md">
                Visiting today
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
                {b.visitorNote}
              </AppText>
            </View>
          </>
        ) : null}

        {b.notableFor && b.notableFor.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Notable for" subtitle="Films, features, legends" />
            <View className="px-xl">
              {b.notableFor.map((item) => (
                <View key={item} className="flex-row mb-sm">
                  <AppText variant="body" className="text-brand-marigold mr-sm">
                    ·
                  </AppText>
                  <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                    {item}
                  </AppText>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {b.id === 'heritage-jorasanko' ? (
          <Link href="/tagore" asChild>
            <Pressable
              className="mx-xl mt-lg rounded-xl p-lg border flex-row items-center justify-between"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <View className="flex-1 pr-md">
                <AppText variant="label" className="text-brand-marigold mb-xs">
                  World of Tagore
                </AppText>
                <AppText variant="title">Rabindra Sangeet & his creations</AppText>
                <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                  Explore the poet born in this house
                </AppText>
              </View>
              <AppText variant="label" className="text-brand-marigold">
                →
              </AppText>
            </Pressable>
          </Link>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Related buildings" subtitle="Nearby in the heritage web" />
        {related.data && related.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {related.data.map((item) => (
              <HeritageBuildingCard key={item.id} building={item} width={200} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related buildings yet"
              subtitle="Connections across Bengal’s palaces will appear here."
            />
          </View>
        )}

        {sarees.data && sarees.data.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Related sarees"
              subtitle="Weaves tied to this region"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {sarees.data.map((saree) => (
                <SareeCard key={saree.id} saree={saree} width={180} />
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

        {b.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This building entry is a stub — a fuller profile is on the way.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
