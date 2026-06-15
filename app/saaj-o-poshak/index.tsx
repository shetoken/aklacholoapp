import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AttireCard,
  ErrorView,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import {
  ATTIRE_CATEGORY_FILTER_ORDER,
  ATTIRE_CATEGORY_LABELS,
  getAttireByCategory,
  getAttireItems,
  getBridalAttire,
} from '@/services';
import type { AttireCategory } from '@/types';

export default function SaajOPoshakHubScreen() {
  const [category, setCategory] = useState<AttireCategory | null>(null);

  const allItems = useAsync(() => getAttireItems(), []);
  const categoryItems = useAsync(
    () => (category ? getAttireByCategory(category) : Promise.resolve([])),
    [category],
  );
  const bridal = useAsync(() => getBridalAttire(), []);

  const loading = allItems.loading || categoryItems.loading || bridal.loading;
  const error = allItems.error || categoryItems.error || bridal.error;

  const browseItems = useMemo(
    () => (category ? (categoryItems.data ?? []) : (allItems.data ?? [])),
    [category, categoryItems.data, allItems.data],
  );

  if (loading) return <Loading label="Opening Saaj o Poshak…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          allItems.reload();
          categoryItems.reload();
          bridal.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Saaj o Poshak', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Saaj o Poshak</AppText>
          <AppText variant="body" className="mt-xs text-brand-ivory-soft">
            Attire & Adornment of Bengal
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            Dhuti and panjabi, the bridal saree, gold jewellery, shakha-pola and sindoor —
            what Bengalis wear and the symbols that carry meaning across generations.
          </AppText>
        </View>

        <SectionHeader className="pt-lg" title="Browse by category" subtitle="Clothing to tradition" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setCategory(null)}>
            <Tag label="All" active={category === null} />
          </Pressable>
          {ATTIRE_CATEGORY_FILTER_ORDER.map((c) => (
            <Pressable key={c} onPress={() => setCategory(c)}>
              <Tag label={ATTIRE_CATEGORY_LABELS[c]} active={category === c} />
            </Pressable>
          ))}
        </ScrollView>

        {bridal.data && bridal.data.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Bengali wedding"
              subtitle="Dress, gold, and sacred adornment"
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {bridal.data.map((item) => (
                <AttireCard key={item.id} item={item} width={220} compact />
              ))}
            </ScrollView>
          </>
        ) : null}

        <KolkaDivider width={120} />

        <SectionHeader
          title="The wardrobe"
          subtitle={browseItems.length === 1 ? '1 item' : `${browseItems.length} items`}
        />

        {browseItems.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browseItems.map((item) => (
              <AttireCard key={item.id} item={item} width={160} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No items match this category yet.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
