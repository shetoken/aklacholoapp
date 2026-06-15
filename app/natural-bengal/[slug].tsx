import React from 'react';
import { ScrollView, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  EmptyState,
  ErrorView,
  Img,
  KolkaDivider,
  Loading,
  NaturalResourceBody,
  NaturalResourceCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  CATEGORY_LABELS,
  HERITAGE_LABELS,
  REGION_LABELS,
  getRelatedResources,
  getResourceBySlug,
} from '@/services';
import { brand } from '@/theme';

export default function NaturalResourceDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const resource = useAsync(() => getResourceBySlug(slug), [slug]);
  const related = useAsync(
    () => (resource.data ? getRelatedResources(resource.data.id) : Promise.resolve([])),
    [resource.data?.id],
  );

  if (resource.loading) return <Loading label="Opening profile…" />;
  if (resource.error || !resource.data)
    return <ErrorView message="Natural resource profile not found." />;

  const item = resource.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img
          source={item.heroImage}
          radius={0}
          style={{ width: '100%', height: 280 }}
        />

        <View className="px-xl pt-lg">
          {item.nameBengali ? (
            <AppText variant="quote" className="text-brand-kolka font-serif-italic">
              {item.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {item.name}
          </AppText>
          {item.alsoKnownAs ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {item.alsoKnownAs}
            </AppText>
          ) : null}
          <AppText variant="caption" className="mt-sm text-brand-ivory-soft">
            {REGION_LABELS[item.region]}
          </AppText>

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={CATEGORY_LABELS[item.category]} active />
            {item.heritage.map((tag) => (
              <Tag key={tag} label={HERITAGE_LABELS[tag]} />
            ))}
          </View>

          <AppText variant="bodyLg" className="mt-lg">
            {item.subtitle}
          </AppText>
        </View>

        <KolkaDivider />

        <NaturalResourceBody sections={item.bodySections} />

        {item.keyFacts && item.keyFacts.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Key facts" subtitle="Verified highlights" />
            <View className="px-xl">
              {item.keyFacts.map((fact) => (
                <View key={fact} className="flex-row mb-sm">
                  <AppText variant="body" className="text-brand-kolka mr-sm">
                    ·
                  </AppText>
                  <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                    {fact}
                  </AppText>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {item.significance ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Significance" subtitle="Why it matters" />
            <View
              className="mx-xl rounded-xl p-lg border"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
                {item.significance}
              </AppText>
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Related resources" subtitle="Connected landscapes and life" />
        {related.data && related.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {related.data.map((relatedResource) => (
              <NaturalResourceCard key={relatedResource.id} resource={relatedResource} width={200} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related resources yet"
              subtitle="Connections will appear here as the hub grows."
            />
          </View>
        )}

        {item.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This entry is a stub — confirm figures and details before publishing.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
