import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { InteractionManager, Pressable, ScrollView, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  AppText,
  CreatorCard,
  ProductTile,
  ExperienceTile,
  CollectionTile,
  ArticleTile,
  KolkaDivider,
  PillarHeader,
  AutoScrollRow,
  JourneyPromoCard,
  HomeIntroSequence,
  Loading,
  ErrorView,
} from '@/components';
import { ChevronRight } from '@/components/ui/icons';
import {
  CONNECTION_WELCOME,
  orderHomeSections,
  sortArticlesByInterests,
  type HomeSectionId,
} from '@/constants/preferences';
import { useAuth } from '@/context/AuthProvider';
import { usePreferences } from '@/context/PreferencesProvider';
import { useAsync } from '@/hooks/useAsync';
import {
  getFeaturedCollections,
  getFeaturedCreators,
  getEncyclopediaArticles,
  getFeaturedExperiences,
  getProducts,
} from '@/services';
import { APP } from '@/constants/app';
import { getPillar, EXPERIENCE_LEARN_HREF, EXPERIENCE_TRAVEL_HREF } from '@/constants/pillars';
import { brand } from '@/theme';
import { useJourney } from '@/context/JourneyProvider';
import { shouldShowJourneyOnboarding } from '@/services';
import type { Article, Collection, Creator, Experience, Product } from '@/types';

const TILE = 108;

function HomeSectionHeader({
  pillar,
  title,
  subtitle,
  tight = false,
}: {
  pillar: string;
  title: string;
  subtitle?: string;
  tight?: boolean;
}) {
  return (
    <View className={`px-xl mb-md ${tight ? 'mt-lg' : 'mt-2xl'}`}>
      <AppText variant="label" className="text-brand-marigold mb-xs">
        {pillar}
      </AppText>
      <AppText variant="h2" className="text-brand-ivory">
        {title}
      </AppText>
      {subtitle ? (
        <AppText variant="body" className="mt-xs text-brand-ivory-soft">
          {subtitle}
        </AppText>
      ) : null}
    </View>
  );
}

function HomePersonalizedWelcome({
  greeting,
  interests,
}: {
  greeting: string;
  interests: string[];
}) {
  return (
    <View
      className="mx-xl mt-lg mb-sm rounded-xl p-lg"
      style={{ backgroundColor: brand.surface, borderWidth: 1, borderColor: `${brand.ivory}22` }}
    >
      <AppText variant="label" className="text-brand-marigold mb-xs">
        For you
      </AppText>
      <AppText variant="title" className="text-brand-ivory">
        {greeting}
      </AppText>
      {interests.length > 0 ? (
        <AppText variant="caption" className="mt-sm text-brand-ivory-soft">
          Your feed highlights {interests.join(' · ')}.
        </AppText>
      ) : null}
    </View>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const onboardingShown = useRef(false);
  const [showIntro, setShowIntro] = useState(true);
  const { isGuest, user } = useAuth();
  const { preferences } = usePreferences();
  const journey = useJourney();
  const collections = useAsync(() => getFeaturedCollections(8), []);
  const creators = useAsync(() => getFeaturedCreators(8), []);
  const encyclopedia = useAsync(() => getEncyclopediaArticles(), []);
  const experiences = useAsync(() => getFeaturedExperiences(6), []);
  const products = useAsync(() => getProducts(), []);

  const finishIntro = useCallback(() => setShowIntro(false), []);

  const loading =
    collections.loading ||
    creators.loading ||
    encyclopedia.loading ||
    experiences.loading ||
    products.loading;
  const error =
    collections.error ||
    creators.error ||
    encyclopedia.error ||
    experiences.error ||
    products.error;

  useEffect(() => {
    if (loading || showIntro) return;
    if (
      !journey.ready ||
      !journey.progress ||
      onboardingShown.current ||
      !shouldShowJourneyOnboarding(journey.progress)
    ) {
      return;
    }
    onboardingShown.current = true;
    const task = InteractionManager.runAfterInteractions(() => {
      router.push('/journey-onboarding');
    });
    return () => task.cancel();
  }, [loading, showIntro, journey.ready, journey.progress, router]);

  const shopProducts = products.data ?? [];
  const collectionItems = collections.data ?? [];
  const creatorItems = creators.data ?? [];
  const encyclopediaItems = useMemo(() => {
    const items = encyclopedia.data ?? [];
    if (!preferences?.interests.length) return items;
    return sortArticlesByInterests(items, preferences.interests);
  }, [encyclopedia.data, preferences?.interests]);
  const experienceItems = experiences.data ?? [];

  const sectionOrder = useMemo(
    () => orderHomeSections(preferences?.interests ?? []),
    [preferences?.interests],
  );

  const interestLabels = useMemo(() => {
    if (!preferences?.interests.length) return [];
    const labels: Record<string, string> = {
      stories: 'stories',
      crafts: 'craft',
      food: 'food',
      music: 'music',
      travel: 'travel',
      learn: 'learning',
      shop: 'shopping',
      hire: 'commissioning',
    };
    return preferences.interests.map((id) => labels[id] ?? id);
  }, [preferences?.interests]);

  const personalizedGreeting = useMemo(() => {
    if (!preferences || isGuest) return null;
    const name = user?.displayName.split(' ')[0];
    const welcome = CONNECTION_WELCOME[preferences.connection];
    return name ? `${name} — ${welcome}` : welcome;
  }, [preferences, isGuest, user?.displayName]);

  const renderSection = useCallback(
    (sectionId: HomeSectionId) => {
      switch (sectionId) {
        case 'journey':
          return (
            <View key={sectionId} className="mx-xl mt-lg mb-sm">
              <JourneyPromoCard variant="compact" />
            </View>
          );
        case 'stories':
          return (
            <View key={sectionId}>
              <HomeSectionHeader
                tight
                pillar={getPillar('explore').label}
                title="Culture & stories"
                subtitle="Festivals, encyclopedia, and the kolka universe"
              />
              <AutoScrollRow
                data={encyclopediaItems}
                keyExtractor={(a: Article) => a.id}
                speed={0.22}
                renderItem={(a) => <ArticleTile article={a} size={TILE} onDark />}
              />
              <Link href="/explore" asChild>
                <Pressable className="flex-row items-center justify-end px-xl mt-md mb-sm">
                  <AppText variant="label" className="text-brand-marigold mr-xs">
                    Browse stories
                  </AppText>
                  <ChevronRight color={brand.marigold} />
                </Pressable>
              </Link>
            </View>
          );
        case 'learn':
          return (
            <View key={sectionId}>
              <HomeSectionHeader
                tight
                pillar={getPillar('experience').label}
                title="Learn about Bengal"
                subtitle="Classes in language, art, music, dance, and history — coming soon"
              />
              <Link href={EXPERIENCE_LEARN_HREF} asChild>
                <Pressable
                  className="mx-xl rounded-xl bg-brand-surface p-lg mb-sm"
                  style={{ borderWidth: 1, borderColor: `${brand.ivory}33` }}
                >
                  <AppText variant="title" className="text-brand-ivory">
                    Start learning
                  </AppText>
                  <AppText variant="caption" className="text-brand-ivory-soft mt-xs">
                    Preview upcoming lessons
                  </AppText>
                </Pressable>
              </Link>
            </View>
          );
        case 'travel':
          return (
            <View key={sectionId}>
              <HomeSectionHeader
                tight
                pillar={getPillar('experience').title}
                title="Travel Guide to Bengal"
                subtitle="Curated experiences with trusted local guides"
              />
              <AutoScrollRow
                data={experienceItems}
                keyExtractor={(e: Experience) => e.id}
                speed={0.18}
                renderItem={(e) => <ExperienceTile experience={e} />}
              />
              <Link href={EXPERIENCE_TRAVEL_HREF} asChild>
                <Pressable className="flex-row items-center justify-end px-xl mt-md mb-sm">
                  <AppText variant="label" className="text-brand-marigold mr-xs">
                    Browse Experience
                  </AppText>
                  <ChevronRight color={brand.marigold} />
                </Pressable>
              </Link>
            </View>
          );
        case 'shop':
          return (
            <View key={sectionId}>
              <HomeSectionHeader
                tight
                pillar={getPillar('shop').label}
                title="Find Exquisute Bengali Art & Crafts"
              />
              <AutoScrollRow
                data={shopProducts}
                keyExtractor={(p: Product) => p.id}
                speed={0.3}
                renderItem={(p) => <ProductTile product={p} size={TILE} onDark />}
              />
              <Link href="/shop" asChild>
                <Pressable className="flex-row items-center justify-end px-xl mt-md mb-sm">
                  <AppText variant="label" className="text-brand-marigold mr-xs">
                    Search Collection
                  </AppText>
                  <ChevronRight color={brand.marigold} />
                </Pressable>
              </Link>
            </View>
          );
        case 'hire':
          return (
            <View key={sectionId}>
              <HomeSectionHeader
                tight
                pillar={getPillar('hire').label}
                title="Bengali talent"
                subtitle="Artisans, animators, designers, and teachers"
              />
              <AutoScrollRow
                data={creatorItems}
                keyExtractor={(c: Creator) => c.id}
                speed={0.25}
                gap={4}
                renderItem={(c) => <CreatorCard creator={c} width={100} onDark />}
              />
              <Link href="/hire" asChild>
                <Pressable className="flex-row items-center justify-end px-xl mt-sm mb-sm">
                  <AppText variant="label" className="text-brand-marigold mr-xs">
                    Find talent
                  </AppText>
                  <ChevronRight color={brand.marigold} />
                </Pressable>
              </Link>
            </View>
          );
        case 'collections':
          return (
            <View key={sectionId}>
              <HomeSectionHeader
                tight
                pillar="Curated"
                title="Collections"
                subtitle="Stories told through objects"
              />
              <AutoScrollRow
                data={collectionItems}
                keyExtractor={(c: Collection) => c.id}
                speed={0.28}
                renderItem={(c) => <CollectionTile collection={c} size={TILE} onDark />}
              />
            </View>
          );
        case 'studio':
          return (
            <View key={sectionId}>
              <KolkaDivider showBindu />
              <Link href="/motifs" asChild>
                <Pressable
                  className="mx-xl rounded-xl bg-brand-surface p-xl mt-lg"
                  style={{ borderWidth: 1, borderColor: `${brand.ivory}33` }}
                >
                  <AppText variant="label" className="text-brand-marigold mb-xs">
                    {APP.storyLabel}
                  </AppText>
                  <AppText variant="h3" className="text-brand-ivory">
                    Explore the Kolka Studio
                  </AppText>
                  <AppText variant="body" className="text-brand-ivory-soft mt-xs">
                    Play with motifs and palettes
                  </AppText>
                </Pressable>
              </Link>
            </View>
          );
        default:
          return null;
      }
    },
    [
      collectionItems,
      creatorItems,
      encyclopediaItems,
      experienceItems,
      shopProducts,
    ],
  );

  if (loading) return <Loading label="Gathering Bengal…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          collections.reload();
          creators.reload();
          encyclopedia.reload();
          experiences.reload();
          products.reload();
        }}
      />
    );

  return (
    <SafeAreaView
      edges={['top']}
      style={{ flex: 1, backgroundColor: brand.indigo }}
    >
      {showIntro ? (
        <HomeIntroSequence products={shopProducts} onComplete={finishIntro} />
      ) : (
        <>
          <PillarHeader active="home" tone="dark" />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 48 }}
          >
            {personalizedGreeting ? (
              <HomePersonalizedWelcome
                greeting={personalizedGreeting}
                interests={interestLabels}
              />
            ) : null}

            {sectionOrder.map((sectionId) => renderSection(sectionId))}
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}
