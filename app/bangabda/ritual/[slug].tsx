import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  EmptyState,
  ErrorView,
  FestivalCard,
  KolkaDivider,
  Loading,
  RitualBody,
  RitualPoster,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  getFestivalsForRitual,
  getMonthById,
  getRituById,
  getRitualBySlug,
  RITUAL_FAITH_LABELS,
  RITUAL_KIND_LABELS,
} from '@/services';
import { brand } from '@/theme';

export default function RitualDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const ritual = useAsync(() => getRitualBySlug(slug), [slug]);
  const festivals = useAsync(
    () => (ritual.data ? getFestivalsForRitual(ritual.data.id) : Promise.resolve([])),
    [ritual.data?.id],
  );
  const month = useAsync(
    () =>
      ritual.data?.relatedMonthId
        ? getMonthById(ritual.data.relatedMonthId)
        : Promise.resolve(null),
    [ritual.data?.relatedMonthId],
  );
  const ritu = useAsync(
    () =>
      ritual.data?.relatedRituId
        ? getRituById(ritual.data.relatedRituId)
        : Promise.resolve(null),
    [ritual.data?.relatedRituId],
  );

  if (ritual.loading) return <Loading label="Opening ritual…" />;
  if (ritual.error || !ritual.data) return <ErrorView message="Ritual not found." />;

  const r = ritual.data;

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <RitualPoster ritual={r} height={260} featured />

        <View className="px-xl pt-lg">
          <View className="flex-row flex-wrap gap-2">
            <Tag label={RITUAL_KIND_LABELS[r.kind]} active />
            <Tag label={RITUAL_FAITH_LABELS[r.faith]} active />
          </View>
          <AppText variant="caption" className="mt-md text-brand-ivory-soft">
            {r.timing}
          </AppText>
          <AppText variant="bodyLg" className="mt-lg" style={{ lineHeight: 28 }}>
            {r.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {r.shortDescription}
          </AppText>
        </View>

        <KolkaDivider />

        <RitualBody sections={r.bodySections} />

        {month.data || ritu.data ? (
          <>
            <KolkaDivider />
            <SectionHeader title="On the calendar" subtitle="Season and month" />
            <View className="px-xl gap-md">
              {ritu.data ? (
                <Link href={`/bangabda/ritu/${ritu.data.id}`} asChild>
                  <Pressable
                    className="rounded-xl p-lg border flex-row items-center justify-between"
                    style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                  >
                    <View className="flex-1 pr-md">
                      <AppText variant="label" className="text-brand-ivory-soft mb-xs">
                        Season
                      </AppText>
                      <AppText variant="title">{ritu.data.name}</AppText>
                    </View>
                    <AppText variant="label" className="text-brand-kolka">
                      →
                    </AppText>
                  </Pressable>
                </Link>
              ) : null}
              {month.data ? (
                <Link href={`/bangabda/month/${month.data.id}`} asChild>
                  <Pressable
                    className="rounded-xl p-lg border flex-row items-center justify-between"
                    style={{ borderColor: brand.border, backgroundColor: brand.surface }}
                  >
                    <View className="flex-1 pr-md">
                      <AppText variant="label" className="text-brand-ivory-soft mb-xs">
                        Month
                      </AppText>
                      <AppText variant="title">{month.data.name}</AppText>
                    </View>
                    <AppText variant="label" className="text-brand-kolka">
                      →
                    </AppText>
                  </Pressable>
                </Link>
              ) : null}
            </View>
          </>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="Year-round observance"
              subtitle="This ritual is not tied to a single month on the calendar."
            />
          </View>
        )}

        {festivals.data && festivals.data.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Related festivals" subtitle="From Festivals & Faiths" />
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

        {r.isStub ? (
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
