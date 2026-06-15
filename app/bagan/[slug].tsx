import React, { useMemo } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  EmptyState,
  ErrorView,
  FloraBody,
  FloraCard,
  Img,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  FLORA_CATEGORY_LABELS,
  SEASON_LABELS,
  getFestivals,
  getFloraBySlug,
  getFloraItems,
} from '@/services';
import { brand } from '@/theme';

export default function FloraDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const item = useAsync(() => getFloraBySlug(slug), [slug]);
  const allFlora = useAsync(() => getFloraItems(), []);
  const festivals = useAsync(() => getFestivals(), []);

  const relatedItems = useMemo(() => {
    if (!item.data || !allFlora.data) return [];
    return item.data.relatedItemIds
      .map((id) => allFlora.data!.find((f) => f.id === id))
      .filter(Boolean);
  }, [item.data, allFlora.data]);

  const linkedFestivals = useMemo(() => {
    if (!item.data?.relatedFestivalIds || !festivals.data) return [];
    return item.data.relatedFestivalIds
      .map((id) => festivals.data!.find((f) => f.id === id))
      .filter(Boolean);
  }, [item.data, festivals.data]);

  if (item.loading) return <Loading label="Opening profile…" />;
  if (item.error || !item.data)
    return <ErrorView message="Flora profile not found." />;

  const f = item.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img source={f.image} radius={0} style={{ width: '100%', height: 280 }} />

        <View className="px-xl pt-lg">
          {f.nameBengali ? (
            <AppText variant="quote" className="text-brand-kolka font-serif-italic">
              {f.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {f.name}
          </AppText>
          {f.alsoKnownAs ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {f.alsoKnownAs}
            </AppText>
          ) : null}

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={FLORA_CATEGORY_LABELS[f.category]} active />
            <Tag label={SEASON_LABELS[f.season]} />
          </View>

          {f.hasGITag ? (
            <View className="mt-md">
              <AppText variant="label" className="text-brand-marigold">
                Geographical Indication (GI)
              </AppText>
              {f.giNote ? (
                <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                  {f.giNote}
                </AppText>
              ) : null}
            </View>
          ) : null}

          <AppText variant="bodyLg" className="mt-lg">
            {f.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {f.shortDescription}
          </AppText>
        </View>

        <KolkaDivider />

        <FloraBody sections={f.bodySections} />

        {f.culturalNote ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Cultural note" subtitle="In cuisine, ritual, and daily life" />
            <View
              className="mx-xl rounded-xl p-lg border"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
                {f.culturalNote}
              </AppText>
            </View>
          </>
        ) : null}

        {f.varieties && f.varieties.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Varieties" subtitle="Cultivars and types" />
            <View className="px-xl">
              {f.varieties.map((variety) => (
                <View key={variety} className="flex-row mb-sm">
                  <AppText variant="body" className="text-brand-kolka mr-sm">
                    ·
                  </AppText>
                  <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                    {variety}
                  </AppText>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {linkedFestivals.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Festival links" subtitle="Connected celebrations" />
            <View className="px-xl gap-md">
              {linkedFestivals.map((festival) => (
                <Link key={festival!.id} href={`/festivals/festival/${festival!.slug}`} asChild>
                  <Pressable
                    className="rounded-xl p-lg border flex-row items-center justify-between"
                    style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                  >
                    <View className="flex-1 pr-md">
                      {festival!.nameBengali ? (
                        <AppText variant="caption" className="text-brand-kolka font-serif-italic">
                          {festival!.nameBengali}
                        </AppText>
                      ) : null}
                      <AppText variant="title">{festival!.name}</AppText>
                      <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                        {festival!.subtitle}
                      </AppText>
                    </View>
                    <AppText variant="label" className="text-brand-kolka">
                      →
                    </AppText>
                  </Pressable>
                </Link>
              ))}
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Related" subtitle="Neighbouring produce and blooms" />
        {relatedItems.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {relatedItems.map((related) => (
              <FloraCard key={related!.id} item={related!} width={180} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related items yet"
              subtitle="Connections will appear here as the garden grows."
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
              This entry is a stub — confirm details before publishing.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
