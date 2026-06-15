import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  Screen,
  AppText,
  Img,
  ProductCard,
  CreatorCard,
  ArticleCard,
  MasonryGrid,
  KolkaDivider,
  SaveButton,
  Loading,
  ErrorView,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  getCollectionById,
  getProductsByIds,
  getCreatorsByIds,
  getArticlesByIds,
} from '@/services';
import type { Product } from '@/types';

const { width } = Dimensions.get('window');
const COLUMN_W = (width - 48 - 16) / 2;

function estimate(product: Product): number {
  const ratio = product.images[0]?.aspectRatio ?? 0.8;
  return COLUMN_W / ratio + 96;
}

export default function CollectionDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const collection = useAsync(() => getCollectionById(id), [id]);

  const products = useAsync(
    () => getProductsByIds(collection.data?.productIds ?? []),
    [collection.data?.id],
  );
  const creators = useAsync(
    () => getCreatorsByIds(collection.data?.featuredCreatorIds ?? []),
    [collection.data?.id],
  );
  const stories = useAsync(
    () => getArticlesByIds(collection.data?.relatedArticleIds ?? []),
    [collection.data?.id],
  );

  if (collection.loading) return <Loading />;
  if (collection.error || !collection.data)
    return <ErrorView message="Collection not found." />;

  const c = collection.data;

  return (
    <Screen scroll edges={[]} contentClassName="pb-2xl">
      <Stack.Screen options={{ title: '' }} />

      <View>
        <Img source={c.cover} className="w-full" style={{ height: 260 }} />
        <View className="absolute top-md right-md">
          <SaveButton id={c.id} kind="collection" floating size={24} />
        </View>
      </View>

      <View className="px-xl pt-lg">
        <AppText variant="label" className="text-brand-terracotta mb-xs">
          Collection
        </AppText>
        <AppText variant="h1">{c.title}</AppText>
        <AppText variant="quote" className="mt-sm">
          {c.tagline}
        </AppText>
      </View>

      <KolkaDivider />

      <View className="px-xl">
        <AppText variant="bodyLg">{c.narrative}</AppText>
      </View>

      {/* Products */}
      {products.data && products.data.length > 0 ? (
        <View className="px-xl mt-2xl">
          <AppText variant="h3" className="mb-md">
            In this collection
          </AppText>
          <MasonryGrid
            items={products.data}
            columnWidth={COLUMN_W}
            estimateHeight={estimate}
            renderItem={(p, w) => <ProductCard product={p} columnWidth={w} />}
          />
        </View>
      ) : null}

      {/* Featured creators */}
      {creators.data && creators.data.length > 0 ? (
        <View className="mt-lg">
          <AppText variant="h3" className="px-xl mb-md">
            Featured creators
          </AppText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 8 }}
          >
            {creators.data.map((cr) => (
              <CreatorCard key={cr.id} creator={cr} width={120} />
            ))}
          </ScrollView>
        </View>
      ) : null}

      {/* Related stories */}
      {stories.data && stories.data.length > 0 ? (
        <View className="mt-2xl">
          <AppText variant="label" className="text-brand-terracotta mb-sm px-xl">
            The story behind this
          </AppText>
          {stories.data.map((a) => (
            <ArticleCard key={a.id} article={a} variant="inline" />
          ))}
        </View>
      ) : null}
    </Screen>
  );
}
