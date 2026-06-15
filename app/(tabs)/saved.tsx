import React, { useMemo } from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import { Link } from 'expo-router';

import {
  Screen,
  AppText,
  Img,
  ProductCard,
  CollectionCard,
  MasonryGrid,
  SectionHeader,
  KolkaMotif,
  Loading,
  ErrorView,
  EmptyState,
} from '@/components';
import { ChevronRight } from '@/components/ui/icons';
import { useAsync } from '@/hooks/useAsync';
import { useWishlist } from '@/context/WishlistProvider';
import { getProducts, getCollections, getCreators } from '@/services';
import type { Product } from '@/types';
import { brand } from '@/theme';

const { width } = Dimensions.get('window');
const COLUMN_W = (width - 48 - 16) / 2;

function estimate(product: Product): number {
  const ratio = product.images[0]?.aspectRatio ?? 0.8;
  return COLUMN_W / ratio + 96;
}

export default function SavedScreen() {
  const { items, ready } = useWishlist();
  const products = useAsync(() => getProducts(), []);
  const collections = useAsync(() => getCollections(), []);
  const creators = useAsync(() => getCreators(), []);

  const savedProducts = useMemo(() => {
    const ids = new Set(items.filter((i) => i.kind === 'product').map((i) => i.id));
    return (products.data ?? []).filter((p) => ids.has(p.id));
  }, [items, products.data]);

  const savedCollections = useMemo(() => {
    const ids = new Set(items.filter((i) => i.kind === 'collection').map((i) => i.id));
    return (collections.data ?? []).filter((c) => ids.has(c.id));
  }, [items, collections.data]);

  const savedCreators = useMemo(() => {
    const ids = new Set(items.filter((i) => i.kind === 'creator').map((i) => i.id));
    return (creators.data ?? []).filter((c) => ids.has(c.id));
  }, [items, creators.data]);

  if (!ready || products.loading || collections.loading || creators.loading)
    return <Loading label="Opening your saved pieces…" />;
  if (products.error || collections.error || creators.error)
    return <ErrorView onRetry={() => { products.reload(); collections.reload(); creators.reload(); }} />;

  const isEmpty =
    savedProducts.length === 0 &&
    savedCollections.length === 0 &&
    savedCreators.length === 0;

  return (
    <Screen scroll edges={['top']} contentClassName="pb-2xl">
      <View className="px-xl pt-xl pb-md">
        <AppText variant="h1">Saved</AppText>
        <AppText variant="body" className="mt-xs">
          Your collection of Bengal.
        </AppText>
      </View>

      {isEmpty ? (
        <View className="items-center pt-2xl">
          <KolkaMotif svgKey="vine" size={120} />
          <EmptyState
            title="Nothing saved yet"
            subtitle="Tap the heart on anything you love and it’ll wait for you here."
          />
          <Link href="/explore" asChild>
            <Pressable className="flex-row items-center mt-md">
              <AppText variant="label" className="text-brand-marigold">
                Start discovering
              </AppText>
              <ChevronRight color={brand.marigold} />
            </Pressable>
          </Link>
        </View>
      ) : (
        <>
          {savedProducts.length > 0 ? (
            <View className="px-xl mb-xl">
              <AppText variant="h3" className="mb-md">
                Pieces
              </AppText>
              <MasonryGrid
                items={savedProducts}
                columnWidth={COLUMN_W}
                estimateHeight={estimate}
                renderItem={(p, w) => <ProductCard product={p} columnWidth={w} />}
              />
            </View>
          ) : null}

          {savedCollections.length > 0 ? (
            <>
              <SectionHeader title="Collections" />
              <View className="pl-xl flex-row flex-wrap">
                {savedCollections.map((c) => (
                  <View key={c.id} className="mb-lg">
                    <CollectionCard collection={c} width={width * 0.7} />
                  </View>
                ))}
              </View>
            </>
          ) : null}

          {savedCreators.length > 0 ? (
            <View className="px-xl">
              <AppText variant="h3" className="mb-md">
                Creators
              </AppText>
              {savedCreators.map((creator) => (
                <Link key={creator.id} href={`/creator/${creator.id}`} asChild>
                  <Pressable className="flex-row items-center bg-brand-surface rounded-2xl p-md mb-md border border-brand-border">
                    <Img source={creator.avatar} radius={999} style={{ width: 56, height: 56 }} />
                    <View className="flex-1 ml-md">
                      <AppText variant="title">{creator.name}</AppText>
                      <AppText variant="caption">{creator.discipline}</AppText>
                    </View>
                    <ChevronRight color={brand['ivory-muted']} />
                  </Pressable>
                </Link>
              ))}
            </View>
          ) : null}
        </>
      )}
    </Screen>
  );
}
