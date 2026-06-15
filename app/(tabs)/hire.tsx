import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import { MotiView } from 'moti';

import {
  AppText,
  Img,
  PillarScreen,
  SectionHeader,
  StorySearchBar,
  Loading,
  ErrorView,
  EmptyState,
} from '@/components';
import { Tag } from '@/components/ui/Tag';
import { ChevronRight } from '@/components/ui/icons';
import { useAsync } from '@/hooks/useAsync';
import { filterCreators, getCreators } from '@/services';
import { CREATOR_ONBOARDING } from '@/content/creator-onboarding';
import type { Creator, DisciplineType } from '@/types';
import { brand } from '@/theme';

type Filter = 'All' | DisciplineType;
const FILTERS: { key: Filter; label: string }[] = [
  { key: 'All', label: 'All talent' },
  { key: 'physical', label: 'Artisans' },
  { key: 'digital', label: 'Digital' },
  { key: 'teacher', label: 'Teachers' },
];

function CreatorRow({ creator, index }: { creator: Creator; index: number }) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 8 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 350, delay: index * 60 }}
    >
      <Link href={`/creator/${creator.id}`} asChild>
        <Pressable className="flex-row items-center bg-brand-surface rounded-2xl p-md mb-md border border-brand-border">
          <Img
            source={creator.avatar}
            radius={999}
            style={{ width: 64, height: 64 }}
          />
          <View className="flex-1 ml-md">
            <AppText variant="title">{creator.name}</AppText>
            <AppText variant="caption" numberOfLines={1}>
              {creator.discipline}
            </AppText>
            <AppText variant="label" className="text-brand-terracotta mt-xs">
              {creator.region}
            </AppText>
          </View>
          <ChevronRight color={brand['ivory-muted']} />
        </Pressable>
      </Link>
    </MotiView>
  );
}

export default function HireScreen() {
  const [filter, setFilter] = useState<Filter>('All');
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef<TextInput>(null);
  const { data, loading, error, reload } = useAsync(() => getCreators(), []);

  useEffect(() => {
    if (searchOpen) {
      const t = setTimeout(() => searchRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  const allCreators = data ?? [];

  const filtered = useMemo(() => {
    const byType =
      filter === 'All'
        ? allCreators
        : allCreators.filter((c) => c.disciplineType === filter);
    return byType;
  }, [allCreators, filter]);

  const searchResults = useMemo(
    () => filterCreators(allCreators, query),
    [allCreators, query],
  );

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
  };

  const toggleSearch = () => {
    if (searchOpen) closeSearch();
    else setSearchOpen(true);
  };

  if (loading) return <Loading label="Finding talent…" />;
  if (error) return <ErrorView onRetry={reload} />;

  const searching = searchOpen && query.trim().length > 0;

  return (
    <PillarScreen
      active="hire"
      onCtaPress={toggleSearch}
      ctaActive={searchOpen}
      contentClassName="pb-2xl"
      headerAccessory={
        searchOpen ? (
          <StorySearchBar
            value={query}
            onChangeText={setQuery}
            onClose={closeSearch}
            inputRef={searchRef}
            placeholder="Search artisans, animators, designers, teachers…"
          />
        ) : null
      }
    >
      {searching ? (
        <View>
          <SectionHeader
            title="Search results"
            subtitle={
              searchResults.length === 1
                ? '1 creator'
                : `${searchResults.length} creators`
            }
          />
          {searchResults.length > 0 ? (
            <View className="px-xl">
              {searchResults.map((creator, i) => (
                <CreatorRow key={creator.id} creator={creator} index={i} />
              ))}
            </View>
          ) : (
            <EmptyState
              title="No talent found"
              subtitle="Try a discipline, city, or craft — like kantha, animation, or Kolkata."
            />
          )}
        </View>
      ) : (
        <>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
            className="mb-lg mt-md"
          >
            {FILTERS.map((f) => (
              <Pressable key={f.key} onPress={() => setFilter(f.key)}>
                <Tag label={f.label} active={filter === f.key} />
              </Pressable>
            ))}
          </ScrollView>

          {filtered.length === 0 ? (
            <EmptyState title="No creators here yet" />
          ) : (
            <View className="px-xl">
              {filtered.map((creator, i) => (
                <CreatorRow key={creator.id} creator={creator} index={i} />
              ))}
              <AppText variant="caption" className="mt-md text-center">
                Booking and commissions open in a future release — browse portfolios
                now.
              </AppText>
              <View className="mt-lg items-center">
                <AppText variant="caption" className="text-center">
                  {CREATOR_ONBOARDING.hireCta}
                </AppText>
                <Link href="/creator-apply" asChild>
                  <Pressable className="mt-sm py-sm">
                    <AppText variant="label" className="text-brand-marigold">
                      {CREATOR_ONBOARDING.hireCtaLink}
                    </AppText>
                  </Pressable>
                </Link>
              </View>
            </View>
          )}
        </>
      )}
    </PillarScreen>
  );
}
