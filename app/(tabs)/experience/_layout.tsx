import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import { Slot, usePathname, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  AppText,
  EmptyState,
  ExperienceGridCell,
  LearnGridCell,
  JourneyPromoCard,
  Loading,
  SectionHeader,
  StorySearchBar,
  TileGrid,
} from '@/components';
import { PillarHeader } from '@/components/navigation/PillarHeader';
import { useAsync } from '@/hooks/useAsync';
import {
  filterExperiences,
  filterLearnTopics,
  getExperiences,
  getLearnTopics,
} from '@/services';
import { brand } from '@/theme';

const SUB_TABS = [
  { key: 'learn', label: 'Learn', href: '/experience' as const },
  { key: 'travel', label: 'Curated Travel', href: '/experience/travel' as const },
] as const;

function ExperienceSubTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const onTravel = pathname.includes('/travel');

  return (
    <View className="flex-row px-xl pb-md gap-sm">
      {SUB_TABS.map((tab) => {
        const active = tab.key === 'travel' ? onTravel : !onTravel;
        return (
          <Pressable
            key={tab.key}
            onPress={() => router.replace(tab.href)}
            className="flex-1 items-center py-sm rounded-lg"
            style={{
              backgroundColor: active ? `${brand.terracotta}22` : brand.surface,
              borderWidth: 1,
              borderColor: active ? brand.terracotta : `${brand.ivory}22`,
            }}
          >
            <AppText
              variant="label"
              className={active ? 'text-brand-marigold' : 'text-brand-ivory-soft'}
              numberOfLines={1}
            >
              {tab.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

/** Experience pillar — Learn first, then Curated Travel. */
export default function ExperienceLayout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef<TextInput>(null);

  const learn = useAsync(() => getLearnTopics(), []);
  const travel = useAsync(() => getExperiences(), []);

  useEffect(() => {
    if (searchOpen) {
      const t = setTimeout(() => searchRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  const learnTopics = learn.data ?? [];
  const travelGuides = travel.data ?? [];
  const learnResults = useMemo(
    () => filterLearnTopics(learnTopics, query),
    [learnTopics, query],
  );
  const travelResults = useMemo(
    () => filterExperiences(travelGuides, query),
    [travelGuides, query],
  );

  const searching = searchOpen && query.trim().length > 0;
  const resultCount = learnResults.length + travelResults.length;

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
  };

  const toggleSearch = () => {
    if (searchOpen) closeSearch();
    else setSearchOpen(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: brand.indigo }}>
      <SafeAreaView edges={['top']}>
        <PillarHeader
          active="experience"
          onCtaPress={toggleSearch}
          ctaActive={searchOpen}
        />
        {searchOpen ? (
          <StorySearchBar
            value={query}
            onChangeText={setQuery}
            onClose={closeSearch}
            inputRef={searchRef}
            placeholder="Search classes, travel guides, places…"
          />
        ) : null}
      </SafeAreaView>

      {searching ? (
        learn.loading || travel.loading ? (
          <Loading label="Searching experiences…" />
        ) : (
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 32 }}
            keyboardShouldPersistTaps="handled"
          >
            <SectionHeader
              title="Search results"
              subtitle={
                resultCount === 1 ? '1 experience' : `${resultCount} experiences`
              }
            />
            {resultCount > 0 ? (
              <>
                {learnResults.length > 0 ? (
                  <View className="mb-xl">
                    <AppText variant="h3" className="px-xl mb-md">
                      Learn
                    </AppText>
                    <TileGrid
                      columns={3}
                      data={learnResults}
                      keyExtractor={(t) => t.id}
                      renderItem={(topic, width) => (
                        <LearnGridCell topic={topic} width={width} />
                      )}
                    />
                  </View>
                ) : null}
                {travelResults.length > 0 ? (
                  <View>
                    <AppText variant="h3" className="px-xl mb-md">
                      Curated Travel
                    </AppText>
                    <TileGrid
                      columns={3}
                      data={travelResults}
                      keyExtractor={(e) => e.id}
                      renderItem={(exp, width) => (
                        <ExperienceGridCell experience={exp} width={width} />
                      )}
                    />
                  </View>
                ) : null}
              </>
            ) : (
              <EmptyState
                title="Nothing found"
                subtitle="Try a city, craft, or class topic."
              />
            )}
          </ScrollView>
        )
      ) : (
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="px-xl pt-md pb-lg">
            <JourneyPromoCard variant="detailed" />
          </View>
          <ExperienceSubTabs />
          <Slot />
        </ScrollView>
      )}
    </View>
  );
}
