import React, { useMemo, useState } from 'react';
import { Dimensions, Pressable, ScrollView, View } from 'react-native';

import {
  Screen,
  AppText,
  SectionHeader,
  ProductCard,
  ArticleCard,
  MasonryGrid,
  KolkaDivider,
  Loading,
  ErrorView,
  EmptyState,
} from '@/components';
import { Tag } from '@/components/ui/Tag';
import { useAsync } from '@/hooks/useAsync';
import { getProducts, getArticles } from '@/services';
import type { Category, Product } from '@/types';
import { APP } from '@/constants/app';

const { width } = Dimensions.get('window');
const COLUMN_W = (width - 48 - 16) / 2; // 24 padding each side, 16 gutter

const CATEGORIES: (Category | 'All')[] = [
  'All',
  'Kitchen',
  'Living',
  'Stationery',
  'Wearables',
  'Wall Art',
];

/** Rough card-height estimate so the masonry columns balance. */
function estimate(product: Product): number {
  const ratio = product.images[0]?.aspectRatio ?? 0.8;
  return COLUMN_W / ratio + 96; // image + text block
}

export default function DiscoverScreen() {
  const [category, setCategory] = useState<Category | 'All'>('All');
  const products = useAsync(() => getProducts(), []);
  const articles = useAsync(() => getArticles(), []);

  const filtered = useMemo(() => {
    const all = products.data ?? [];
    return category === 'All'
      ? all
      : all.filter((p) => p.category === category);
  }, [products.data, category]);

  // Weave a story into the middle of the feed (contextual, not a separate tab).
  const { firstHalf, secondHalf } = useMemo(() => {
    const mid = Math.ceil(filtered.length / 2);
    return { firstHalf: filtered.slice(0, mid), secondHalf: filtered.slice(mid) };
  }, [filtered]);

  if (products.loading || articles.loading) return <Loading label="Curating…" />;
  if (products.error || articles.error)
    return (
      <ErrorView
        onRetry={() => {
          products.reload();
          articles.reload();
        }}
      />
    );

  const wovenStory = articles.data?.[0];
  const allStories = articles.data ?? [];

  return (
    <Screen scroll edges={['top']} contentClassName="pb-2xl">
      <View className="px-xl pt-xl pb-md">
        <AppText variant="h1">Discover</AppText>
        <AppText variant="body" className="mt-xs">
          Browse the craft — and the stories behind it.
        </AppText>
      </View>

      {/* Category filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        className="mb-lg"
      >
        {CATEGORIES.map((c) => (
          <Pressable key={c} onPress={() => setCategory(c)}>
            <Tag label={c} active={category === c} />
          </Pressable>
        ))}
      </ScrollView>

      {filtered.length === 0 ? (
        <EmptyState
          title="Nothing here yet"
          subtitle="Try another category."
        />
      ) : (
        <View className="px-xl">
          <MasonryGrid
            items={firstHalf}
            columnWidth={COLUMN_W}
            estimateHeight={estimate}
            renderItem={(p, w) => <ProductCard product={p} columnWidth={w} />}
          />

          {/* Story woven contextually into the feed */}
          {wovenStory ? (
            <View className="-mx-xl my-md">
              <ArticleCard article={wovenStory} variant="inline" />
            </View>
          ) : null}

          {secondHalf.length ? (
            <MasonryGrid
              items={secondHalf}
              columnWidth={COLUMN_W}
              estimateHeight={estimate}
              renderItem={(p, w) => <ProductCard product={p} columnWidth={w} />}
            />
          ) : null}
        </View>
      )}

      <KolkaDivider />

      {/* The Magic of Bengal — storytelling lives inside Discover */}
      <SectionHeader
        eyebrow={APP.storyLabel}
        title="Read the stories"
        subtitle="The heritage behind the work"
      />
      {allStories.map((a) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </Screen>
  );
}
