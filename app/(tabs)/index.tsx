import React, { useCallback, useEffect, useRef, useState } from 'react';
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

export default function HomeScreen() {
  const router = useRouter();
  const onboardingShown = useRef(false);
  const [showIntro, setShowIntro] = useState(true);
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

  const shopProducts = products.data ?? [];
  const collectionItems = collections.data ?? [];
  const creatorItems = creators.data ?? [];
  const encyclopediaItems = encyclopedia.data ?? [];
  const experienceItems = experiences.data ?? [];

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
            <View className="mx-xl mt-lg mb-sm">
              <JourneyPromoCard variant="compact" />
            </View>

            <HomeSectionHeader
              tight
              pillar={getPillar('explore').label}
              title="Culture & stories"
              subtitle="Festivals, encyclopedia, and the kolka universe"
            />
            <AutoScrollRow
              data={encyclopediaItems}
              keyExtractor={(a) => a.id}
              speed={0.22}
              renderItem={(a) => (
                <ArticleTile article={a} size={TILE} onDark />
              )}
            />
            <Link href="/explore" asChild>
              <Pressable className="flex-row items-center justify-end px-xl mt-md mb-sm">
                <AppText variant="label" className="text-brand-marigold mr-xs">
                  Browse stories
                </AppText>
                <ChevronRight color={brand.marigold} />
              </Pressable>
            </Link>

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

            <HomeSectionHeader
              tight
              pillar={getPillar('experience').title}
              title="Travel Guide to Bengal"
              subtitle="Curated experiences with trusted local guides"
            />
            <AutoScrollRow
              data={experienceItems}
              keyExtractor={(e) => e.id}
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

            <HomeSectionHeader
              tight
              pillar={getPillar('shop').label}
              title="Find Exquisute Bengali Art & Crafts"
            />
            <AutoScrollRow
              data={shopProducts}
              keyExtractor={(p) => p.id}
              speed={0.3}
              renderItem={(p) => (
                <ProductTile product={p} size={TILE} onDark />
              )}
            />
            <Link href="/shop" asChild>
              <Pressable className="flex-row items-center justify-end px-xl mt-md mb-sm">
                <AppText variant="label" className="text-brand-marigold mr-xs">
                  View collection
                </AppText>
                <ChevronRight color={brand.marigold} />
              </Pressable>
            </Link>

            <HomeSectionHeader
              tight
              pillar={getPillar('hire').label}
              title="Bengali talent"
              subtitle="Artisans, animators, designers, and teachers"
            />
            <AutoScrollRow
              data={creatorItems}
              keyExtractor={(c) => c.id}
              speed={0.25}
              gap={4}
              renderItem={(c) => (
                <CreatorCard creator={c} width={100} onDark />
              )}
            />
            <Link href="/hire" asChild>
              <Pressable className="flex-row items-center justify-end px-xl mt-sm mb-sm">
                <AppText variant="label" className="text-brand-marigold mr-xs">
                  Find talent
                </AppText>
                <ChevronRight color={brand.marigold} />
              </Pressable>
            </Link>

            <HomeSectionHeader
              tight
              pillar="Curated"
              title="Collections"
              subtitle="Stories told through objects"
            />
            <AutoScrollRow
              data={collectionItems}
              keyExtractor={(c) => c.id}
              speed={0.28}
              renderItem={(c) => (
                <CollectionTile collection={c} size={TILE} onDark />
              )}
            />

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
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}
