import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  Screen,
  AppText,
  Img,
  ImageCarousel,
  ArticleCard,
  KolkaDivider,
  Tag,
  SaveButton,
  Loading,
  ErrorView,
} from '@/components';
import { ChevronRight } from '@/components/ui/icons';
import { useAsync } from '@/hooks/useAsync';
import {
  getProductById,
  getCreatorById,
  getProductsByIds,
  getArticlesByIds,
} from '@/services';
import { brand } from '@/theme';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = useAsync(() => getProductById(id), [id]);

  const creator = useAsync(
    () =>
      product.data
        ? getCreatorById(product.data.creatorId)
        : Promise.resolve(null),
    [product.data?.creatorId],
  );
  const related = useAsync(
    () => getProductsByIds(product.data?.relatedProductIds ?? []),
    [product.data?.id],
  );
  const stories = useAsync(
    () => getArticlesByIds(product.data?.relatedArticleIds ?? []),
    [product.data?.id],
  );

  if (product.loading) return <Loading />;
  if (product.error || !product.data)
    return <ErrorView message="Piece not found." />;

  const p = product.data;

  return (
    <Screen scroll edges={[]} contentClassName="pb-2xl">
      <Stack.Screen options={{ title: '' }} />

      <ImageCarousel images={p.images} />

      <View className="px-xl pt-lg">
        <View className="flex-row items-start justify-between">
          <View className="flex-1 pr-md">
            <AppText variant="label" className="text-brand-terracotta mb-xs">
              {p.category}
            </AppText>
            <AppText variant="h1">{p.title}</AppText>
            {p.subtitle ? (
              <AppText variant="body" className="mt-xs">
                {p.subtitle}
              </AppText>
            ) : null}
          </View>
          <SaveButton id={p.id} kind="product" size={28} />
        </View>

        {p.priceLabel ? (
          <AppText variant="h3" className="text-brand-marigold mt-md">
            {p.priceLabel}
          </AppText>
        ) : null}
      </View>

      <KolkaDivider />

      {/* The story */}
      <View className="px-xl">
        <AppText variant="label" className="text-brand-terracotta mb-sm">
          The story behind this
        </AppText>
        <AppText variant="bodyLg">{p.story}</AppText>

        {p.tags.length ? (
          <View className="flex-row flex-wrap gap-2 mt-lg">
            {p.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </View>
        ) : null}
      </View>

      {/* Creator */}
      {creator.data ? (
        <View className="px-xl mt-2xl">
          <AppText variant="label" className="text-brand-terracotta mb-sm">
            Made by
          </AppText>
          <Link href={`/creator/${creator.data.id}`} asChild>
            <Pressable className="flex-row items-center bg-brand-surface rounded-2xl p-md border border-brand-border">
              <Img
                source={creator.data.avatar}
                radius={999}
                style={{ width: 56, height: 56 }}
              />
              <View className="flex-1 ml-md">
                <AppText variant="title">{creator.data.name}</AppText>
                <AppText variant="caption">{creator.data.discipline}</AppText>
              </View>
              <ChevronRight color={brand['ivory-muted']} />
            </Pressable>
          </Link>
        </View>
      ) : null}

      {/* Related stories */}
      {stories.data && stories.data.length > 0 ? (
        <View className="mt-2xl">
          <AppText variant="label" className="text-brand-terracotta mb-sm px-xl">
            Read more
          </AppText>
          {stories.data.map((a) => (
            <ArticleCard key={a.id} article={a} variant="inline" />
          ))}
        </View>
      ) : null}

      {/* Related products */}
      {related.data && related.data.length > 0 ? (
        <View className="mt-lg">
          <AppText variant="h3" className="px-xl mb-md">
            You may also like
          </AppText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {related.data.map((rp) => (
              <Link key={rp.id} href={`/product/${rp.id}`} asChild>
                <Pressable style={{ width: 150 }}>
                  <Img
                    source={rp.images[0]}
                    radius={14}
                    style={{ width: 150, height: 180 }}
                  />
                  <AppText variant="title" numberOfLines={1} className="mt-sm">
                    {rp.title}
                  </AppText>
                  {rp.priceLabel ? (
                    <AppText variant="label" className="text-brand-marigold mt-xs">
                      {rp.priceLabel}
                    </AppText>
                  ) : null}
                </Pressable>
              </Link>
            ))}
          </ScrollView>
        </View>
      ) : null}
    </Screen>
  );
}
