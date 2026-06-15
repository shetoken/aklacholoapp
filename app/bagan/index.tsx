import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  ErrorView,
  FloraCard,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import {
  FLORA_CATEGORY_FILTER_ORDER,
  FLORA_CATEGORY_LABELS,
  SEASON_FILTER_ORDER,
  SEASON_LABELS,
  filterFloraItems,
  getFlagshipFlora,
  getFloraItems,
} from '@/services';
import type { FloraCategory, FloraSeason } from '@/types';

export default function BaganHubScreen() {
  const [category, setCategory] = useState<FloraCategory | null>(null);
  const [season, setSeason] = useState<FloraSeason | null>(null);

  const flagship = useAsync(() => getFlagshipFlora(), []);
  const allFlora = useAsync(() => getFloraItems(), []);

  const loading = flagship.loading || allFlora.loading;
  const error = flagship.error || allFlora.error;

  const browseItems = useMemo(
    () => filterFloraItems(allFlora.data ?? [], { category, season }),
    [allFlora.data, category, season],
  );
  const featuredItems = useMemo(
    () => filterFloraItems(flagship.data ?? [], { category, season }),
    [flagship.data, category, season],
  );

  if (loading) return <Loading label="Opening Bagan…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          flagship.reload();
          allFlora.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Bagan', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Bagan</AppText>
          <AppText variant="body" className="mt-xs text-brand-ivory-soft">
            Bengal&apos;s fruits, vegetables &amp; flowers
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            Seasonal produce and festival blooms — from summer mangoes to autumn
            kash and shiuli that herald Durga Puja.
          </AppText>
        </View>

        {featuredItems.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Featured"
              subtitle="Start with the essentials"
            />
            <AutoScrollRow
              data={featuredItems}
              keyExtractor={(item) => item.id}
              gap={16}
              speed={0.2}
              renderItem={(item) => <FloraCard item={item} width={220} featured />}
            />
          </>
        ) : null}

        <KolkaDivider width={120} />

        <SectionHeader title="Browse by category" subtitle="Fruits, vegetables, flowers" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setCategory(null)}>
            <Tag label="All" active={category === null} />
          </Pressable>
          {FLORA_CATEGORY_FILTER_ORDER.map((cat) => (
            <Pressable key={cat} onPress={() => setCategory(cat)}>
              <Tag label={FLORA_CATEGORY_LABELS[cat]} active={category === cat} />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader className="pt-md" title="Browse by season" subtitle="Grishmo to sharat" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setSeason(null)}>
            <Tag label="All seasons" active={season === null} />
          </Pressable>
          {SEASON_FILTER_ORDER.map((s) => (
            <Pressable key={s} onPress={() => setSeason(s)}>
              <Tag label={SEASON_LABELS[s]} active={season === s} />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader
          className="pt-lg"
          title="The garden"
          subtitle={
            browseItems.length === 1 ? '1 entry' : `${browseItems.length} entries`
          }
        />

        {browseItems.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browseItems.map((item) => (
              <FloraCard key={item.id} item={item} width={160} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No items match these filters.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
