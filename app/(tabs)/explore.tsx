import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import { Link } from 'expo-router';

import {
  Screen,
  AppText,
  ArticleTile,
  TopicTile,
  AutoScrollRow,
  KolkaDivider,
  PillarHeader,
  SectionHeader,
  StorySearchBar,
  Loading,
  ErrorView,
  EmptyState,
} from '@/components';
import { ChevronRight } from '@/components/ui/icons';
import { useAsync } from '@/hooks/useAsync';
import {
  getArticles,
  getEncyclopediaArticles,
  getDiscoverRails,
  filterArticles,
} from '@/services';
import { APP } from '@/constants/app';
import { brand } from '@/theme';
import type { Article } from '@/types';

const TILE = 108;
const STORY_TILE = 120;

function mergeStories(...lists: Article[][]): Article[] {
  const byId = new Map<string, Article>();
  lists.flat().forEach((article) => byId.set(article.id, article));
  return [...byId.values()];
}

export default function ExploreScreen() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef<TextInput>(null);

  const articles = useAsync(() => getArticles(), []);
  const encyclopedia = useAsync(() => getEncyclopediaArticles(), []);
  const rails = useAsync(() => getDiscoverRails(), []);

  useEffect(() => {
    if (searchOpen) {
      const t = setTimeout(() => searchRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  const allStories = articles.data ?? [];
  const encyclopediaItems = encyclopedia.data ?? [];
  const storyPool = useMemo(
    () => mergeStories(encyclopediaItems, allStories),
    [encyclopediaItems, allStories],
  );
  const searchResults = useMemo(
    () => filterArticles(storyPool, query),
    [storyPool, query],
  );

  const loading =
    articles.loading || encyclopedia.loading || rails.loading;
  const error = articles.error || encyclopedia.error || rails.error;

  if (loading) return <Loading label="Opening Bengal…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          articles.reload();
          encyclopedia.reload();
          rails.reload();
        }}
      />
    );

  const { festivals, calendar, palaces } = rails.data!;
  const searching = searchOpen && query.trim().length > 0;

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
  };

  const toggleSearch = () => {
    if (searchOpen) closeSearch();
    else setSearchOpen(true);
  };

  return (
    <Screen scroll edges={[]} contentClassName="pb-2xl">
      <PillarHeader
        active="explore"
        onCtaPress={toggleSearch}
        ctaActive={searchOpen}
      />

      {searchOpen ? (
        <StorySearchBar
          value={query}
          onChangeText={setQuery}
          onClose={closeSearch}
          inputRef={searchRef}
        />
      ) : null}

      {searching ? (
        <View>
          <SectionHeader
            title="Search results"
            subtitle={
              searchResults.length === 1
                ? '1 story'
                : `${searchResults.length} stories`
            }
          />
          {searchResults.length > 0 ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
            >
              {searchResults.map((a) => (
                <ArticleTile key={a.id} article={a} size={STORY_TILE} />
              ))}
            </ScrollView>
          ) : (
            <EmptyState
              title="No stories found"
              subtitle="Try food, music, kolka, or a place name."
            />
          )}
        </View>
      ) : (
        <>
          <SectionHeader
            className="pt-lg"
            eyebrow={APP.storyLabel}
            title="Encyclopedia of Bengal"
            subtitle="Stories, food, rivers, music, and more"
          />
          <AutoScrollRow
            data={encyclopediaItems}
            keyExtractor={(a) => a.id}
            speed={0.22}
            renderItem={(a) => <ArticleTile article={a} size={TILE} />}
          />

          <KolkaDivider />

          <SectionHeader
            title="Festivals"
            subtitle="Seasons of celebration across Bengal"
          />
          <AutoScrollRow
            data={festivals}
            keyExtractor={(t) => t.id}
            speed={0.2}
            renderItem={(t) => <TopicTile topic={t} size={TILE} />}
          />

          <SectionHeader
            className="pt-lg"
            title="Bengali Calendar"
            subtitle="Months, seasons, and the rhythm of the year"
          />
          <AutoScrollRow
            data={calendar}
            keyExtractor={(t) => t.id}
            speed={0.18}
            renderItem={(t) => <TopicTile topic={t} size={TILE} />}
          />

          <SectionHeader
            className="pt-lg"
            title="Bengali Palaces"
            subtitle="Rajbaris, forts, and royal architecture"
          />
          <AutoScrollRow
            data={palaces}
            keyExtractor={(t) => t.id}
            speed={0.22}
            renderItem={(t) => <TopicTile topic={t} size={TILE} />}
          />

          <KolkaDivider />

          <SectionHeader
            title="All stories"
            subtitle="The heritage behind the work"
          />
          <AutoScrollRow
            data={allStories}
            keyExtractor={(a) => a.id}
            speed={0.25}
            renderItem={(a) => <ArticleTile article={a} size={STORY_TILE} />}
          />

          <Link href="/motifs" asChild>
            <Pressable className="mx-xl rounded-xl bg-brand-surface p-xl mt-lg border border-brand-border">
              <AppText variant="label" className="text-brand-terracotta mb-xs">
                Interactive
              </AppText>
              <AppText variant="h3">Explore the Kolka Studio</AppText>
              <AppText variant="body" className="mt-xs">
                Play with motifs and palettes
              </AppText>
              <View className="flex-row items-center mt-sm">
                <AppText variant="label" className="text-brand-marigold mr-xs">
                  Open studio
                </AppText>
                <ChevronRight color={brand.marigold} />
              </View>
            </Pressable>
          </Link>
        </>
      )}
    </Screen>
  );
}
