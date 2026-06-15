import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  AppText,
  ArticleTile,
  AuthorBody,
  AuthorCard,
  CreatorCard,
  EmptyState,
  ErrorView,
  Img,
  KolkaDivider,
  Loading,
  Screen,
  SectionHeader,
  Tag,
} from '@/components';
import {
  AUTHOR_REGION_LABELS,
  ERA_META,
  FORM_LABELS,
  RECOGNITION_LABELS,
} from '@/constants/authors';
import { useAsync } from '@/hooks/useAsync';
import {
  getArticlesByIds,
  getAuthorBySlug,
  getLivingWritersForAuthor,
  getRelatedAuthors,
} from '@/services';
import { brand } from '@/theme';

const STORY_TILE = 120;

export default function AuthorDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const author = useAsync(() => getAuthorBySlug(slug), [slug]);
  const related = useAsync(
    () => (author.data ? getRelatedAuthors(author.data.id) : Promise.resolve([])),
    [author.data?.id],
  );
  const livingWriters = useAsync(
    () =>
      author.data
        ? getLivingWritersForAuthor(author.data.id)
        : Promise.resolve([]),
    [author.data?.id],
  );
  const stories = useAsync(
    () =>
      author.data
        ? getArticlesByIds(author.data.relatedArticleIds)
        : Promise.resolve([]),
    [author.data?.id, author.data?.relatedArticleIds.join(',')],
  );

  if (author.loading) return <Loading label="Opening author profile…" />;
  if (author.error || !author.data)
    return <ErrorView message="Author profile not found." />;

  const a = author.data;
  const eraMeta = ERA_META[a.era];

  return (
    <>
      <Stack.Screen options={{ title: '', headerShown: true }} />
      <Screen scroll edges={[]} contentClassName="pb-2xl">
        <Img
          source={a.portraitImage}
          radius={0}
          style={{ width: '100%', height: 360 }}
        />

        <View className="px-xl pt-lg">
          {a.nameBengali ? (
            <AppText variant="quote" className="text-brand-marigold font-serif-italic">
              {a.nameBengali}
            </AppText>
          ) : null}
          <AppText variant="h1" className="mt-xs">
            {a.name}
          </AppText>
          {a.alsoKnownAs ? (
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {a.alsoKnownAs}
            </AppText>
          ) : null}
          {a.lifespan ? (
            <AppText variant="label" className="mt-sm text-brand-terracotta">
              {a.lifespan}
            </AppText>
          ) : null}
          <AppText variant="bodyLg" className="mt-md">
            {a.subtitle}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {a.shortDescription}
          </AppText>

          <View className="flex-row flex-wrap gap-2 mt-md">
            <Tag label={eraMeta.label} active />
            {a.forms.map((form) => (
              <Tag key={form} label={FORM_LABELS[form]} />
            ))}
            {a.regions.map((region) => (
              <Tag key={region} label={AUTHOR_REGION_LABELS[region] ?? region} />
            ))}
            {a.recognitions.map((rec) => (
              <Tag key={rec} label={RECOGNITION_LABELS[rec]} />
            ))}
          </View>
        </View>

        <KolkaDivider />

        <AuthorBody sections={a.bodySections} />

        {a.notableWorks.length > 0 ? (
          <>
            <KolkaDivider />
            <SectionHeader title="Notable works" subtitle="Signature titles" />
            <View className="px-xl">
              {a.notableWorks.map((work) => (
                <View key={work} className="flex-row mb-sm">
                  <AppText variant="body" className="text-brand-marigold mr-sm">
                    ·
                  </AppText>
                  <AppText variant="bodyLg" className="flex-1" style={{ lineHeight: 26 }}>
                    {work}
                  </AppText>
                </View>
              ))}
            </View>
          </>
        ) : null}

        <KolkaDivider />

        {a.id === 'author-tagore' ? (
          <Link href="/tagore" asChild>
            <Pressable
              className="mx-xl mb-lg rounded-xl p-lg border flex-row items-center justify-between"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <View className="flex-1 pr-md">
                <AppText variant="label" className="text-brand-marigold mb-xs">
                  Deep dive
                </AppText>
                <AppText variant="title">World of Tagore</AppText>
                <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                  Rabindra Sangeet parjaay, Gitabitan, and his creations
                </AppText>
              </View>
              <AppText variant="label" className="text-brand-marigold">
                →
              </AppText>
            </Pressable>
          </Link>
        ) : null}

        <SectionHeader title="Related voices" subtitle="Contemporaries and influences" />
        {related.data && related.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {related.data.map((item) => (
              <AuthorCard key={item.id} author={item} width={180} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="No related voices yet"
              subtitle="Literary connections will appear here as the hub grows."
            />
          </View>
        )}

        <SectionHeader
          className="pt-lg"
          title="Meet living writers"
          subtitle="Creators on AklaCholo linked to this literary theme"
        />
        {livingWriters.loading ? (
          <AppText variant="caption" className="px-xl">
            Finding writers…
          </AppText>
        ) : livingWriters.data && livingWriters.data.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            {livingWriters.data.map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </ScrollView>
        ) : (
          <View className="px-xl">
            <EmptyState
              title="Writers coming soon"
              subtitle="We’re curating poets, storytellers, and translators for the network."
            />
            <Link href="/(tabs)/creators" asChild>
              <Pressable className="mt-md py-sm">
                <AppText variant="label" className="text-brand-marigold">
                  Browse Creators
                </AppText>
              </Pressable>
            </Link>
          </View>
        )}

        <SectionHeader
          className="pt-lg"
          title="Related stories"
          subtitle="From The Magic of Bengal"
        />
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

        {a.isStub ? (
          <View
            className="mx-xl mt-xl rounded-xl p-lg border"
            style={{ borderColor: brand.border, backgroundColor: brand.surface }}
          >
            <AppText variant="label" className="text-brand-marigold mb-xs">
              Preview profile
            </AppText>
            <AppText variant="body" className="text-brand-ivory-soft">
              This author entry is a stub — a fuller profile is on the way.
            </AppText>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
