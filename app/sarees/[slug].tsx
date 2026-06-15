import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  ArticleTile,
  CreatorCard,
  EmptyState,
  ErrorView,
  Img,
  KolkaDivider,
  Loading,
  SareeBody,
  SareeCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  getArticlesByIds,
  getMakersForSaree,
  getRelatedSarees,
  getSareeBySlug,
} from '@/services';
import { brand } from '@/theme';

const STORY_TILE = 120;

export default function SareeDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const saree = useAsync(() => getSareeBySlug(slug), [slug]);
  const makers = useAsync(
    () => (saree.data ? getMakersForSaree(saree.data.id) : Promise.resolve([])),
    [saree.data?.id],
  );
  const stories = useAsync(
    () =>
      saree.data
        ? getArticlesByIds(saree.data.relatedArticleIds)
        : Promise.resolve([]),
    [saree.data?.id, saree.data?.relatedArticleIds.join(',')],
  );
  const related = useAsync(
    () => (saree.data ? getRelatedSarees(saree.data.id) : Promise.resolve([])),
    [saree.data?.id],
  );

  if (saree.loading) return <Loading label="Opening saree story…" />;
  if (saree.error || !saree.data)
    return <ErrorView message="Saree entry not found." />;

  const s = saree.data;

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
          {s.nameRomanized && s.nameRomanized !== s.name ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {s.nameRomanized}
            </AppText>
          ) : null}
          <AppText variant="bodyLg" className="mt-md">
            {s.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {s.shortDescription}
          </AppText>

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={s.axis === 'type' ? 'Type' : s.axis === 'style' ? 'Style' : 'Drape'} active />
            {s.heritage.map((tag) => (
              <Tag key={tag} label={tag.replace(/-/g, ' ')} />
            ))}
          </View>
        </View>

        <KolkaDivider />

        <SareeBody sections={s.bodySections} />

        <KolkaDivider />

        <SectionHeader title="Meet the makers" subtitle="Creators linked to this weave" />
        {makers.loading ? (
          <AppText variant="caption" className="px-xl">
            Finding makers…
          </AppText>
        ) : makers.data && makers.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            {makers.data.map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="Makers coming soon"
              subtitle="We’re curating artisans for this weave. Check Commission as the network grows."
            />
            <Link href="/(tabs)/hire" asChild>
              <Pressable className="mt-md py-sm">
                <AppText variant="label" className="text-brand-marigold">
                  Browse Commission
                </AppText>
              </Pressable>
            </Link>
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

        <SectionHeader
          className="pt-lg"
          title="Shop"
          subtitle="Treasures of Bengal"
        />
        <View className="px-xl">
          {s.relatedShopProductIds.length > 0 ? (
            <AppText variant="body">Shop pieces will appear here in Phase 2.</AppText>
          ) : (
            <>
              <EmptyState
                title="Shop pieces coming soon"
                subtitle="Handwoven sarees and related treasures will be listed here when Shop opens."
              />
              <Link href="/(tabs)/shop" asChild>
                <Pressable
                  className="mt-md rounded-xl py-md items-center border"
                  style={{ borderColor: brand.marigold }}
                >
                  <AppText variant="label" className="text-brand-marigold">
                    Browse Treasures of Bengal
                  </AppText>
                </Pressable>
              </Link>
            </>
          )}
        </View>

        {related.data && related.data.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Related sarees"
              subtitle="Continue exploring"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {related.data.map((item) => (
                <SareeCard key={item.id} saree={item} width={200} />
              ))}
            </ScrollView>
          </>
        ) : null}
      </Screen>
    </>
  );
}
