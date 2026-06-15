import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Stack } from 'expo-router';

import {
  AppText,
  AutoScrollRow,
  ErrorView,
  KolkaDivider,
  Loading,
  NaturalResourceCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { APP } from '@/constants/app';
import { useAsync } from '@/hooks/useAsync';
import {
  CATEGORY_FILTER_ORDER,
  CATEGORY_LABELS,
  getFlagshipResources,
  getNaturalResources,
  getResourcesByCategory,
} from '@/services';
import type { NaturalResource, ResourceCategory } from '@/types';

function filterFlagships(
  items: NaturalResource[],
  category: ResourceCategory | null,
): NaturalResource[] {
  if (!category) return items;
  return items.filter((resource) => resource.category === category);
}

export default function NaturalBengalHubScreen() {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | null>(null);

  const flagship = useAsync(() => getFlagshipResources(), []);
  const allResources = useAsync(() => getNaturalResources(), []);
  const categoryResources = useAsync(
    () =>
      selectedCategory
        ? getResourcesByCategory(selectedCategory)
        : Promise.resolve([]),
    [selectedCategory],
  );

  const loading = flagship.loading || allResources.loading || categoryResources.loading;
  const error = flagship.error || allResources.error || categoryResources.error;

  const browseResources = selectedCategory
    ? (categoryResources.data ?? [])
    : (allResources.data ?? []);
  const featuredResources = useMemo(
    () => filterFlagships(flagship.data ?? [], selectedCategory),
    [flagship.data, selectedCategory],
  );

  if (loading) return <Loading label="Opening Natural Bengal…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          flagship.reload();
          allResources.reload();
          categoryResources.reload();
        }}
      />
    );

  return (
    <>
      <Stack.Screen options={{ title: 'Natural Bengal', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-kolka mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="h1">Natural Bengal</AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            From the Himalayas to the Bay of Bengal — rivers, mangroves, tigers,
            tea, jute, and the fertile delta that feeds a civilisation.
          </AppText>
        </View>

        {featuredResources.length > 0 ? (
          <>
            <SectionHeader
              className="pt-lg"
              title="Featured landscapes"
              subtitle="Flagship profiles — start here"
            />
            <AutoScrollRow
              data={featuredResources}
              keyExtractor={(resource) => resource.id}
              gap={16}
              speed={0.18}
              renderItem={(resource) => (
                <NaturalResourceCard resource={resource} width={240} featured />
              )}
            />
          </>
        ) : null}

        <KolkaDivider width={120} />

        <SectionHeader
          title="Browse by category"
          subtitle="Rivers, wildlife, agriculture, and more"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        >
          <Pressable onPress={() => setSelectedCategory(null)}>
            <Tag label="All categories" active={selectedCategory === null} />
          </Pressable>
          {CATEGORY_FILTER_ORDER.map((category) => (
            <Pressable key={category} onPress={() => setSelectedCategory(category)}>
              <Tag
                label={CATEGORY_LABELS[category]}
                active={selectedCategory === category}
              />
            </Pressable>
          ))}
        </ScrollView>

        <SectionHeader
          className="pt-lg"
          title={selectedCategory ? CATEGORY_LABELS[selectedCategory] : 'All resources'}
          subtitle={
            browseResources.length === 1
              ? '1 profile'
              : `${browseResources.length} profiles`
          }
        />

        {browseResources.length > 0 ? (
          <View className="px-xl flex-row flex-wrap gap-md">
            {browseResources.map((resource) => (
              <NaturalResourceCard key={resource.id} resource={resource} width={168} />
            ))}
          </View>
        ) : (
          <View className="px-xl">
            <AppText variant="body" className="text-brand-ivory-soft">
              No resources match this category yet.
            </AppText>
          </View>
        )}
      </Screen>
    </>
  );
}
