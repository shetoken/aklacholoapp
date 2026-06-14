import React from 'react';
import { Dimensions, Pressable, ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { MotiView } from 'moti';

import {
  Screen,
  AppText,
  SectionHeader,
  CollectionCard,
  CreatorCard,
  ArticleCard,
  KolkaDivider,
  KolkaMotif,
  Loading,
  ErrorView,
} from '@/components';
import { ChevronRight } from '@/components/ui/icons';
import { useAsync } from '@/hooks/useAsync';
import {
  getFeaturedCollections,
  getFeaturedCreators,
  getArticles,
} from '@/services';
import { APP } from '@/constants/app';
import { colors } from '@/theme';

const { width } = Dimensions.get('window');
const CARD_W = width * 0.72;

export default function HomeScreen() {
  const collections = useAsync(() => getFeaturedCollections(4), []);
  const creators = useAsync(() => getFeaturedCreators(5), []);
  const articles = useAsync(() => getArticles(), []);

  const loading =
    collections.loading || creators.loading || articles.loading;
  const error = collections.error || creators.error || articles.error;

  if (loading) return <Loading label="Gathering Bengal…" />;
  if (error)
    return (
      <ErrorView
        onRetry={() => {
          collections.reload();
          creators.reload();
          articles.reload();
        }}
      />
    );

  const featureArticle = articles.data?.[0];

  return (
    <Screen scroll edges={['top']} contentClassName="pb-2xl">
      {/* Hero */}
      <MotiView
        from={{ opacity: 0, translateY: 12 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 600 }}
      >
        <View className="px-xl pt-2xl pb-lg items-center">
          <KolkaMotif
            svgKey="lotus"
            size={56}
            palette={[colors.terracotta[500], colors.marigold[400], colors.cream[100], colors.indigo[500]]}
          />
          <AppText variant="display" className="mt-md text-center">
            {APP.name}
          </AppText>
          <AppText variant="quote" className="mt-sm text-center">
            {APP.tagline}
          </AppText>
        </View>
      </MotiView>

      <KolkaDivider />

      {/* Curated collections */}
      <SectionHeader
        eyebrow="Curated"
        title="Collections"
        subtitle="Stories told through objects"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
        {collections.data?.map((c) => (
          <CollectionCard key={c.id} collection={c} width={CARD_W} />
        ))}
      </ScrollView>

      <View className="h-2xl" />

      {/* Featured story */}
      {featureArticle ? (
        <>
          <SectionHeader eyebrow={APP.storyLabel} title="The story behind the craft" />
          <ArticleCard article={featureArticle} />
        </>
      ) : null}

      <View className="h-lg" />

      {/* Featured creators */}
      <SectionHeader
        eyebrow="The makers"
        title="Creators"
        subtitle="Artisans, designers, and teachers"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 8 }}
      >
        {creators.data?.map((c) => (
          <CreatorCard key={c.id} creator={c} width={120} />
        ))}
      </ScrollView>

      <KolkaDivider />

      {/* Motif studio CTA */}
      <Link href="/motifs" asChild>
        <Pressable className="mx-xl rounded-2xl bg-brand-secondary p-xl flex-row items-center justify-between">
          <View className="flex-1 pr-md">
            <AppText variant="label" className="text-marigold-300 mb-xs">
              Interactive
            </AppText>
            <AppText variant="h3" className="text-cream-50">
              Explore the Kolka Studio
            </AppText>
            <AppText variant="body" className="text-cream-200 mt-xs">
              Play with motifs and palettes
            </AppText>
          </View>
          <KolkaMotif
            svgKey="classic"
            size={64}
            palette={[colors.marigold[400], colors.cream[100], colors.cream[50], colors.terracotta[400]]}
          />
        </Pressable>
      </Link>

      <Link href="/discover" asChild>
        <Pressable className="flex-row items-center justify-center mt-xl">
          <AppText variant="label" className="text-brand-primary">
            Discover everything
          </AppText>
          <ChevronRight color={colors.terracotta[500]} />
        </Pressable>
      </Link>
    </Screen>
  );
}
