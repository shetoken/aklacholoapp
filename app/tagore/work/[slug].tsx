import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  ArticleTile,
  EmptyState,
  ErrorView,
  Img,
  KolkaDivider,
  Loading,
  ParjaayCard,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import { TAGORE_WORK_FORM_LABELS } from '@/constants/tagore';
import { useAsync } from '@/hooks/useAsync';
import { getArticlesByIds, getParjaays, getWorkBySlug } from '@/services';
import { brand } from '@/theme';

const STORY_TILE = 120;

export default function TagoreWorkDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const work = useAsync(() => getWorkBySlug(slug), [slug]);
  const parjaays = useAsync(() => getParjaays(), []);
  const stories = useAsync(
    () =>
      work.data
        ? getArticlesByIds(work.data.relatedArticleIds)
        : Promise.resolve([]),
    [work.data?.id, work.data?.relatedArticleIds.join(',')],
  );

  if (work.loading) return <Loading label="Opening work…" />;
  if (work.error || !work.data)
    return <ErrorView message="Work not found." />;

  const w = work.data;
  const linkedParjaays =
    parjaays.data?.filter((p) => w.relatedParjaay?.includes(p.id)) ?? [];

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img
          source={w.image}
          radius={0}
          style={{ width: '100%', height: 320 }}
        />

        <View className="px-xl pt-lg">
          {w.titleBengali ? (
            <AppText variant="quote" className="text-brand-marigold font-serif-italic">
              {w.titleBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {w.title}
          </AppText>
          {w.year ? (
            <AppText variant="label" className="mt-sm text-brand-terracotta">
              {w.year}
            </AppText>
          ) : null}
          <AppText variant="bodyLg" className="mt-md">
            {w.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {w.description}
          </AppText>

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={TAGORE_WORK_FORM_LABELS[w.form]} active />
          </View>
        </View>

        {w.significance ? (
          <>
            <KolkaDivider />
            <View className="px-xl">
              <AppText variant="h2" className="mb-md">
                Why it matters
              </AppText>
              <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
                {w.significance}
              </AppText>
            </View>
          </>
        ) : null}

        {linkedParjaays.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader
              title="Related parjaay"
              subtitle="Song classes in Rabindra Sangeet"
            />
            <View className="px-xl flex-row flex-wrap gap-md">
              {linkedParjaays.map((parjaay) => (
                <ParjaayCard key={parjaay.id} parjaay={parjaay} width={160} />
              ))}
            </View>
          </>
        ) : null}

        <KolkaDivider />

        <SectionHeader title="Related stories" subtitle="From The Magic of Bengal" />
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

        <View className="px-xl mt-lg">
          <Link href="/tagore" asChild>
            <Pressable
              className="rounded-xl py-md items-center border"
              style={{ borderColor: brand.marigold }}
            >
              <AppText variant="label" className="text-brand-marigold">
                Back to World of Tagore
              </AppText>
            </Pressable>
          </Link>
        </View>

        {w.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview entry
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This work entry is a stub — a fuller profile is on the way.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
