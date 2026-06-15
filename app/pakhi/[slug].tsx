import React, { useMemo } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  BirdBody,
  BirdCard,
  BirdConservationTag,
  EmptyState,
  ErrorView,
  Img,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  CONSERVATION_LABELS,
  HABITAT_LABELS,
  OFFICIAL_STATUS_LABELS,
  RESIDENCY_LABELS,
  getBirdBySlug,
  getBirds,
  getNaturalResources,
} from '@/services';
import { brand } from '@/theme';

export default function BirdDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const bird = useAsync(() => getBirdBySlug(slug), [slug]);
  const allBirds = useAsync(() => getBirds(), []);
  const resources = useAsync(() => getNaturalResources(), []);

  const relatedBirds = useMemo(() => {
    if (!bird.data || !allBirds.data) return [];
    return bird.data.relatedBirdIds
      .map((id) => allBirds.data!.find((b) => b.id === id))
      .filter(Boolean);
  }, [bird.data, allBirds.data]);

  const linkedHabitats = useMemo(() => {
    if (!bird.data?.relatedResourceIds || !resources.data) return [];
    return bird.data.relatedResourceIds
      .map((id) => resources.data!.find((r) => r.id === id))
      .filter(Boolean);
  }, [bird.data, resources.data]);

  if (bird.loading) return <Loading label="Opening species profile…" />;
  if (bird.error || !bird.data)
    return <ErrorView message="Bird profile not found." />;

  const b = bird.data;
  const officialLabel =
    b.officialStatus !== 'none' ? OFFICIAL_STATUS_LABELS[b.officialStatus] : null;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img source={b.image} radius={0} style={{ width: '100%', height: 280 }} />

        <View className="px-xl pt-lg">
          {b.nameBengali ? (
            <AppText variant="quote" className="text-brand-kolka font-serif-italic">
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
          {b.scientificName ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft font-serif-italic">
              {b.scientificName}
            </AppText>
          ) : null}

          <View className="flex-row flex-wrap gap-2 mt-md">
            {officialLabel ? <Tag label={officialLabel} active /> : null}
            <BirdConservationTag status={b.conservation} />
            <Tag label={RESIDENCY_LABELS[b.residency]} />
            {b.habitats.map((h) => (
              <Tag key={h} label={HABITAT_LABELS[h]} />
            ))}
          </View>

          <View className="mt-md">
            <AppText variant="label" className="text-brand-ivory-soft">
              Conservation
            </AppText>
            <AppText variant="bodyLg" className="mt-xs">
              {CONSERVATION_LABELS[b.conservation]}
            </AppText>
          </View>

          <AppText variant="bodyLg" className="mt-lg">
            {b.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {b.shortDescription}
          </AppText>
        </View>

        {b.culturalNote ? (
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
                {b.culturalNote}
              </AppText>
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <BirdBody sections={b.bodySections} />

        {b.bestSeenAt && b.bestSeenAt.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Best seen at" subtitle="Birding spots and habitats" />
            <View className="px-xl">
              {b.bestSeenAt.map((spot) => (
                <View key={spot} className="flex-row mb-sm">
                  <AppText variant="body" className="text-brand-kolka mr-sm">
                    ·
                  </AppText>
                  <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                    {spot}
                  </AppText>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {linkedHabitats.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Natural habitats" subtitle="From Natural Bengal" />
            <View className="px-xl gap-md">
              {linkedHabitats.map((resource) => (
                <Link key={resource!.id} href={`/natural-bengal/${resource!.slug}`} asChild>
                  <Pressable
                    className="rounded-xl p-lg border flex-row items-center justify-between"
                    style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                  >
                    <View className="flex-1 pr-md">
                      {resource!.nameBengali ? (
                        <AppText variant="caption" className="text-brand-kolka font-serif-italic">
                          {resource!.nameBengali}
                        </AppText>
                      ) : null}
                      <AppText variant="title">{resource!.name}</AppText>
                      <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                        {resource!.subtitle}
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

        <SectionHeader title="Related species" subtitle="Neighbouring birds" />
        {relatedBirds.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {relatedBirds.map((related) => (
              <BirdCard key={related!.id} bird={related!} width={180} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related species yet"
              subtitle="Connections will appear here as the aviary grows."
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
              This entry is a stub — verify conservation status and details before publishing.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
