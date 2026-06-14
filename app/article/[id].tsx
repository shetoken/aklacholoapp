import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  Screen,
  AppText,
  Img,
  ArticleBody,
  CollectionCard,
  CreatorCard,
  KolkaDivider,
  Loading,
  ErrorView,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import {
  getArticleById,
  getCollectionsByIds,
  getCreatorsByIds,
  getProductsByIds,
} from '@/services';
import { APP } from '@/constants/app';

export default function ArticleDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const article = useAsync(() => getArticleById(id), [id]);

  const collections = useAsync(
    () => getCollectionsByIds(article.data?.relatedCollectionIds ?? []),
    [article.data?.id],
  );
  const creators = useAsync(
    () => getCreatorsByIds(article.data?.relatedCreatorIds ?? []),
    [article.data?.id],
  );
  const products = useAsync(
    () => getProductsByIds(article.data?.relatedProductIds ?? []),
    [article.data?.id],
  );

  if (article.loading) return <Loading />;
  if (article.error || !article.data)
    return <ErrorView message="Story not found." />;

  const a = article.data;

  return (
    <Screen scroll edges={[]} contentClassName="pb-2xl">
      <Stack.Screen options={{ title: '' }} />

      <Img source={a.heroImage} className="w-full" style={{ height: 240 }} />

      <View className="px-xl pt-lg">
        <AppText variant="label" className="text-brand-primary mb-xs">
          {APP.storyLabel} · {a.readingMinutes} min read
        </AppText>
        <AppText variant="h1">{a.title}</AppText>
        <AppText variant="quote" className="mt-sm">
          {a.subtitle}
        </AppText>
        <AppText variant="body" className="mt-lg italic">
          {a.summary}
        </AppText>
      </View>

      <KolkaDivider />

      <ArticleBody sections={a.sections} />

      <KolkaDivider />

      {/* Related collections */}
      {collections.data && collections.data.length > 0 ? (
        <View className="mt-lg">
          <AppText variant="h3" className="px-xl mb-md">
            Related collection
          </AppText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          >
            {collections.data.map((c) => (
              <CollectionCard key={c.id} collection={c} width={260} />
            ))}
          </ScrollView>
        </View>
      ) : null}

      {/* Related creators */}
      {creators.data && creators.data.length > 0 ? (
        <View className="mt-2xl">
          <AppText variant="h3" className="px-xl mb-md">
            Related creators
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

      {/* Related products */}
      {products.data && products.data.length > 0 ? (
        <View className="mt-2xl">
          <AppText variant="h3" className="px-xl mb-md">
            Related pieces
          </AppText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
          >
            {products.data.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} asChild>
                <Pressable style={{ width: 150 }}>
                  <Img source={p.images[0]} radius={14} style={{ width: 150, height: 180 }} />
                  <AppText variant="title" numberOfLines={1} className="mt-sm">
                    {p.title}
                  </AppText>
                </Pressable>
              </Link>
            ))}
          </ScrollView>
        </View>
      ) : null}
    </Screen>
  );
}
