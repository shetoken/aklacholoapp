import React from 'react';
import { ScrollView, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  EmptyState,
  ErrorView,
  FestivalCard,
  HeritageBuildingCard,
  Img,
  KolkaDivider,
  Loading,
  NaturalResourceCard,
  PlaceBody,
  PlaceCard,
  ReligiousSiteCard,
  Screen,
  SectionHeader,
  Tag,
  TravelVerifyNote,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  getBuildingForPlace,
  getFestivalsForPlace,
  getPlaceBySlug,
  getRelatedPlaces,
  getResourceForPlace,
  getSiteForPlace,
  PLACE_TYPE_LABELS,
  PLACE_REGION_LABELS,
} from '@/services';
import { brand } from '@/theme';

export default function PlaceDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const place = useAsync(() => getPlaceBySlug(slug), [slug]);
  const related = useAsync(
    () => (place.data ? getRelatedPlaces(place.data.id) : Promise.resolve([])),
    [place.data?.id],
  );
  const building = useAsync(
    () => (place.data ? getBuildingForPlace(place.data.id) : Promise.resolve(null)),
    [place.data?.id],
  );
  const site = useAsync(
    () => (place.data ? getSiteForPlace(place.data.id) : Promise.resolve(null)),
    [place.data?.id],
  );
  const resource = useAsync(
    () => (place.data ? getResourceForPlace(place.data.id) : Promise.resolve(null)),
    [place.data?.id],
  );
  const festivals = useAsync(
    () => (place.data ? getFestivalsForPlace(place.data.id) : Promise.resolve([])),
    [place.data?.id],
  );

  if (place.loading) return <Loading label="Opening place profile…" />;
  if (place.error || !place.data) return <ErrorView message="Place not found." />;

  const p = place.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img source={p.heroImage} radius={0} style={{ width: '100%', height: 280 }} />

        <View className="px-xl pt-lg">
          {p.nameBengali ? (
            <AppText variant="quote" className="text-brand-kolka font-serif-italic">
              {p.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {p.name}
          </AppText>
          {p.alsoKnownAs ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              Also known as {p.alsoKnownAs}
            </AppText>
          ) : null}

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={PLACE_TYPE_LABELS[p.type]} active />
            <Tag label={PLACE_REGION_LABELS[p.region]} active />
            {p.parentCity ? <Tag label={p.parentCity} /> : null}
          </View>

          <AppText variant="bodyLg" className="mt-lg" style={{ lineHeight: 28 }}>
            {p.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {p.shortDescription}
          </AppText>
        </View>

        <KolkaDivider />

        <View
          className="mx-xl rounded-xl p-lg border"
          style={{ borderColor: brand.marigold, backgroundColor: brand.surface }}
        >
          <AppText variant="label" className="text-brand-marigold mb-xs">
            Why visit
          </AppText>
          <AppText variant="bodyLg" style={{ lineHeight: 26 }}>
            {p.whyVisit}
          </AppText>
        </View>

        <KolkaDivider />

        <View className="px-xl gap-md">
          <View
            className="rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-kolka mb-xs">
              How to reach
            </AppText>
            <AppText variant="body" style={{ lineHeight: 24 }}>
              {p.howToReach}
            </AppText>
          </View>
          {p.bestTime ? (
            <View
              className="rounded-xl p-lg border"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <AppText variant="label" className="text-brand-kolka mb-xs">
                Best time
              </AppText>
              <AppText variant="body" style={{ lineHeight: 24 }}>
                {p.bestTime}
              </AppText>
            </View>
          ) : null}
          {p.suggestedDuration ? (
            <View
              className="rounded-xl p-lg border"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <AppText variant="label" className="text-brand-kolka mb-xs">
                Suggested duration
              </AppText>
              <AppText variant="body" style={{ lineHeight: 24 }}>
                {p.suggestedDuration}
              </AppText>
            </View>
          ) : null}
        </View>

        <View className="mt-lg">
          <TravelVerifyNote />
        </View>

        <KolkaDivider />

        <PlaceBody sections={p.bodySections} />

        {building.data ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Heritage building" subtitle="Palaces & Rajbaris" />
            <View className="px-xl">
              <HeritageBuildingCard building={building.data} featured />
            </View>
          </>
        ) : null}

        {site.data ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Sacred site" subtitle="Festivals & Faiths" />
            <View className="px-xl">
              <ReligiousSiteCard site={site.data} featured />
            </View>
          </>
        ) : null}

        {resource.data ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Natural Bengal" subtitle="Landscape & wildlife" />
            <View className="px-xl">
              <NaturalResourceCard resource={resource.data} featured />
            </View>
          </>
        ) : null}

        {festivals.data && festivals.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Related festivals" subtitle="Festivals & Faiths" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
            >
              {festivals.data.map((festival) => (
                <FestivalCard key={festival.id} festival={festival} width={168} />
              ))}
            </ScrollView>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Nearby places" subtitle="More from Bhraman" />
        {related.data && related.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {related.data.map((item) => (
              <PlaceCard key={item.id} place={item} width={168} compact />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related places yet"
              subtitle="Connections will appear as the guide grows."
            />
          </View>
        )}

        {p.isStub ? (
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
