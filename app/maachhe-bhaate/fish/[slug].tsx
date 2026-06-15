import React, { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  EmptyState,
  ErrorView,
  FishCard,
  FoodBody,
  Img,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  FISH_GROUP_LABELS,
  FISH_SEASON_LABELS,
  WATER_TYPE_LABELS,
  getFish,
  getFishBySlug,
} from '@/services';
import { brand } from '@/theme';

export default function FishDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const fish = useAsync(() => getFishBySlug(slug), [slug]);
  const allFish = useAsync(() => getFish(), []);

  const relatedFish = useMemo(() => {
    if (!fish.data || !allFish.data) return [];
    return fish.data.relatedFishIds
      .map((id) => allFish.data!.find((item) => item.id === id))
      .filter(Boolean);
  }, [fish.data, allFish.data]);

  if (fish.loading) return <Loading label="Opening fish profile…" />;
  if (fish.error || !fish.data)
    return <ErrorView message="Fish profile not found." />;

  const f = fish.data;

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
              Also known as {f.alsoKnownAs}
            </AppText>
          ) : null}

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={FISH_GROUP_LABELS[f.group]} active />
            <Tag label={WATER_TYPE_LABELS[f.waterType]} active />
            <Tag label={FISH_SEASON_LABELS[f.season]} active />
          </View>

          <AppText variant="bodyLg" className="mt-lg">
            {f.subtitle}
          </AppText>
        </View>

        <KolkaDivider />

        <FoodBody sections={f.bodySections} />

        {f.signatureDishes && f.signatureDishes.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Signature dishes" subtitle="On the Bengali table" />
            <View className="px-xl">
              {f.signatureDishes.map((dish) => (
                <View key={dish} className="flex-row mb-sm">
                  <AppText variant="body" className="text-brand-kolka mr-sm">
                    ·
                  </AppText>
                  <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                    {dish}
                  </AppText>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {f.culturalNote ? (
          <>
            <KolkaDivider />
            <View
              className="mx-xl rounded-xl p-lg border"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <AppText variant="label" className="text-brand-kolka mb-xs">
                Cultural note
              </AppText>
              <AppText variant="body" style={{ lineHeight: 26 }}>
                {f.culturalNote}
              </AppText>
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Related fish" subtitle="Neighbours on the plate" />
        {relatedFish.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {relatedFish.map((related) => (
              <FishCard key={related!.id} fish={related!} width={180} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related fish yet"
              subtitle="Connections will appear as the pantry grows."
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
              This entry is a stub — verify details before publishing.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
