import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import { Link } from 'expo-router';

import {
  AppText,
  ArticleTile,
  TopicTile,
  AutoScrollRow,
  KolkaDivider,
  PillarScreen,
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
    <PillarScreen
      active="explore"
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

          <Link href="/sarees" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-lg border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-marigold mb-xs">
                    Encyclopedia
                  </AppText>
                  <AppText variant="h2">Bengali Sarees</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Weaves, styles, and drapes — jamdani, tant, laal-paar shada, athpoure, and more.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-marigold mr-xs">
                      Explore sarees
                    </AppText>
                    <ChevronRight color={brand.marigold} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/authors" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-marigold mb-xs">
                    Encyclopedia
                  </AppText>
                  <AppText variant="h2">Voices of Bengal</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Poets, novelists, and reformers — from Tagore and Nazrul to the diaspora.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-marigold mr-xs">
                      Explore authors
                    </AppText>
                    <ChevronRight color={brand.marigold} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/icons" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-marigold mb-xs">
                    Encyclopedia
                  </AppText>
                  <AppText variant="h2">Icons of Bengal</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Ray, Ravi Shankar, J. C. Bose, Amartya Sen — genius across film, music, science, and more.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-marigold mr-xs">
                      Explore icons
                    </AppText>
                    <ChevronRight color={brand.marigold} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/natural-bengal" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia
                  </AppText>
                  <AppText variant="h2">Natural Bengal</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Sundarbans, the Ganga, Darjeeling tea, jute, and the delta from hills to sea.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore nature
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/music" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia · Sur o Sangeet
                  </AppText>
                  <AppText variant="h2">Music of Bengal</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Rabindra Sangeet, Nazrul Geeti, Baul, Shyama Sangeet — and the instruments that carry them.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore music
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/bagan" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia
                  </AppText>
                  <AppText variant="h2">Bagan</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Fruits, vegetables, and flowers — seasonal produce and festival blooms from mango to kash phul.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore the garden
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/pakhi" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia
                  </AppText>
                  <AppText variant="h2">Pakhi</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Birds of Bengal — doyel, machhranga, Sundarbans rarities, and winter migrants.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore birds
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/maachhe-bhaate" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia · Maachhe Bhaate
                  </AppText>
                  <AppText variant="h2">Fish & Dal</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Ilish in monsoon mustard, pond rui in light jhol, and the dals that anchor every Bengali meal.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore the table
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/rannaghar" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia · Rannaghar
                  </AppText>
                  <AppText variant="h2">The Kitchen of Bengal</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Luchi, shorshe ilish, phuchka, rosogolla — recipes and street food browsable by meal, diet, and allergen.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore the kitchen
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/hastoshilpo" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia · Hastoshilpo
                  </AppText>
                  <AppText variant="h2">Arts & Crafts of Bengal</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Kantha, dokra, patachitra, terracotta — living traditions and the makers who carry them forward.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore crafts
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/saaj-o-poshak" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia · Saaj o Poshak
                  </AppText>
                  <AppText variant="h2">Attire & Adornment</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Dhuti-panjabi, bridal saree, gold jewellery, shakha-pola and sindoor — dress and tradition with dignity.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore attire
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/boi" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia · Boi
                  </AppText>
                  <AppText variant="h2">Landmark Books</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Pather Panchali, Gitanjali, Gora — Bengali letters that crossed into world cinema.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore books
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/cholochitro" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia · Cholochitro
                  </AppText>
                  <AppText variant="h2">Cinema of Bengal</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Pather Panchali, the Apu Trilogy, Meghe Dhaka Tara — Tollywood and the films that changed world cinema.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore cinema
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/bangabda" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia · Bangabda
                  </AppText>
                  <AppText variant="h2">The Bengali Year</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Six seasons, twelve months — Poila Boishakh, Durga Puja, pithe season, and the rituals that mark a Bengali life.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore the calendar
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/bhraman" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Encyclopedia · Bhraman
                  </AppText>
                  <AppText variant="h2">Explore Bengal</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Victoria Memorial, Park Street, Darjeeling, the Sundarbans — where to go, why it matters, and how to get there.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Explore places
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/tagore" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-marigold mb-xs">
                    Encyclopedia
                  </AppText>
                  <AppText variant="h2">World of Tagore</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Rabindra Sangeet parjaay, Gitabitan, novels, dance-dramas, and Shantiniketan.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-marigold mr-xs">
                      Explore Tagore
                    </AppText>
                    <ChevronRight color={brand.marigold} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/palaces" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-marigold mb-xs">
                    Encyclopedia
                  </AppText>
                  <AppText variant="h2">Palaces & Rajbaris</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Heritage hotels, museums, ruins, and film locations — from Murshidabad to Kolkata.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-marigold mr-xs">
                      Explore palaces
                    </AppText>
                    <ChevronRight color={brand.marigold} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/festivals" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-marigold mb-xs">
                    Encyclopedia
                  </AppText>
                  <AppText variant="h2">Festivals & Faiths</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Durga Puja, Eid, Christmas, Poila Boishakh — and Bengal’s sacred sites.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-marigold mr-xs">
                      Explore festivals
                    </AppText>
                    <ChevronRight color={brand.marigold} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/memorial" asChild>
            <Pressable className="mx-xl rounded-2xl overflow-hidden mt-md border border-brand-border">
              <View style={{ backgroundColor: brand.surface }}>
                <View className="p-xl">
                  <AppText variant="label" className="text-brand-kolka mb-xs">
                    Memorial
                  </AppText>
                  <AppText variant="h2">Sons & Daughters of Bengal</AppText>
                  <AppText variant="body" className="mt-xs text-brand-ivory-soft" style={{ lineHeight: 24 }}>
                    Freedom fighters from both Bengals — and the Cellular Jail at Kala Pani.
                  </AppText>
                  <View className="flex-row items-center mt-md">
                    <AppText variant="label" className="text-brand-kolka mr-xs">
                      Enter memorial
                    </AppText>
                    <ChevronRight color={brand.kolka} />
                  </View>
                </View>
              </View>
            </Pressable>
          </Link>

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
    </PillarScreen>
  );
}
