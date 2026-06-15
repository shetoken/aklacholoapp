import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack } from 'expo-router';

import {
  AppText,
  KolkaDivider,
  Loading,
  ErrorView,
  ParjaayCard,
  SectionHeader,
  Screen,
  TagoreWorkCard,
} from '@/components';
import { ChevronRight } from '@/components/ui/icons';
import { APP } from '@/constants/app';
import { TAGORE_HUB_CREATION_FORMS, TAGORE_WORK_FORM_LABELS } from '@/constants/tagore';
import { useAsync } from '@/hooks/useAsync';
import {
  getAuthorById,
  getFlagshipWorks,
  getParjaays,
  getTagoreOverview,
  getWorksByForm,
} from '@/services';
import { brand } from '@/theme';

export default function WorldOfTagoreHubScreen() {
  const overview = useAsync(() => getTagoreOverview(), []);
  const parjaays = useAsync(() => getParjaays(), []);
  const flagship = useAsync(() => getFlagshipWorks(), []);
  const author = useAsync(() => getAuthorById('author-tagore'), []);

  const poetry = useAsync(() => getWorksByForm('poetry'), []);
  const novels = useAsync(() => getWorksByForm('novel'), []);
  const plays = useAsync(() => getWorksByForm('play'), []);
  const danceDramas = useAsync(() => getWorksByForm('dance-drama'), []);
  const paintings = useAsync(() => getWorksByForm('painting'), []);
  const shantiniketan = useAsync(() => getWorksByForm('institution'), []);

  const worksByForm = {
    poetry: poetry.data ?? [],
    novel: novels.data ?? [],
    play: plays.data ?? [],
    'dance-drama': danceDramas.data ?? [],
    painting: paintings.data ?? [],
    institution: shantiniketan.data ?? [],
  };

  const loading =
    overview.loading ||
    parjaays.loading ||
    flagship.loading ||
    poetry.loading ||
    novels.loading ||
    plays.loading ||
    danceDramas.loading ||
    paintings.loading ||
    shantiniketan.loading;

  const error =
    overview.error ||
    parjaays.error ||
    flagship.error ||
    poetry.error ||
    novels.error ||
    plays.error ||
    danceDramas.error ||
    paintings.error ||
    shantiniketan.error;

  if (loading) return <Loading label="Entering Tagore’s world…" />;
  if (error || !overview.data)
    return (
      <ErrorView
        onRetry={() => {
          overview.reload();
          parjaays.reload();
          flagship.reload();
          poetry.reload();
          novels.reload();
          plays.reload();
          danceDramas.reload();
          paintings.reload();
          shantiniketan.reload();
        }}
      />
    );

  const o = overview.data;

  return (
    <>
      <Stack.Screen options={{ title: 'World of Tagore', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-lg">
          <AppText variant="label" className="text-brand-marigold mb-xs">
            {APP.storyLabel}
          </AppText>
          <AppText variant="quote" className="text-brand-marigold font-serif-italic">
            {o.nameBengali}
          </AppText>
          <AppText variant="h1" className="mt-xs">
            World of Tagore
          </AppText>
          <AppText variant="caption" className="mt-xs text-brand-terracotta">
            {o.epithet} · {o.lifespan}
          </AppText>
          <AppText variant="body" className="mt-sm text-brand-ivory-soft" style={{ lineHeight: 26 }}>
            {o.oneLine} Explore {o.songCount.toLocaleString()} Rabindra Sangeet songs
            and his work across poetry, fiction, theatre, painting, and Shantiniketan.
          </AppText>
        </View>

        {author.data ? (
          <Link href={`/authors/${author.data.slug}`} asChild>
            <Pressable
              className="mx-xl mt-md rounded-xl p-lg border flex-row items-center justify-between"
              style={{ borderColor: brand.border, backgroundColor: brand.surface }}
            >
              <View className="flex-1 pr-md">
                <AppText variant="label" className="text-brand-marigold mb-xs">
                  Voices of Bengal
                </AppText>
                <AppText variant="title">Full author profile</AppText>
                <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                  Read {author.data.name} in the literary encyclopedia
                </AppText>
              </View>
              <ChevronRight color={brand.marigold} />
            </Pressable>
          </Link>
        ) : null}

        <KolkaDivider width={140} />

        <SectionHeader
          title="Rabindra Sangeet"
          subtitle="The six parjaay — thematic classes Tagore defined in Gitabitan"
        />
        <View className="px-xl flex-row flex-wrap gap-md">
          {(parjaays.data ?? []).map((parjaay) => (
            <ParjaayCard key={parjaay.id} parjaay={parjaay} />
          ))}
        </View>

        <KolkaDivider />

        <SectionHeader
          title="His creations"
          subtitle="Flagship works across form and medium"
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
        >
          {(flagship.data ?? []).map((work) => (
            <TagoreWorkCard key={work.id} work={work} width={220} featured />
          ))}
        </ScrollView>

        {TAGORE_HUB_CREATION_FORMS.map((form) => {
          const items = worksByForm[form];
          if (items.length === 0) return null;

          return (
            <View key={form}>
              <SectionHeader
                className="pt-lg"
                title={TAGORE_WORK_FORM_LABELS[form]}
                subtitle={
                  form === 'institution'
                    ? 'Visva-Bharati and the open-air school'
                    : undefined
                }
              />
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
              >
                {items.map((work) => (
                  <TagoreWorkCard key={work.id} work={work} width={180} />
                ))}
              </ScrollView>
            </View>
          );
        })}
      </Screen>
    </>
  );
}
