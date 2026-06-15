import React from 'react';
import { Dimensions, Linking, Pressable, ScrollView, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import {
  Screen,
  AppText,
  Img,
  PortfolioGrid,
  Tag,
  SaveButton,
  KolkaDivider,
  Loading,
  ErrorView,
} from '@/components';
import { useAsync } from '@/hooks/useAsync';
import { getCreatorById, getProductsByCreator } from '@/services';

const { width } = Dimensions.get('window');
const PORTFOLIO_COL_W = (width - 48 - 16) / 2;

export default function CreatorDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const creator = useAsync(() => getCreatorById(id), [id]);
  const products = useAsync(() => getProductsByCreator(id), [id]);

  if (creator.loading) return <Loading />;
  if (creator.error || !creator.data)
    return <ErrorView message="Creator not found." />;

  const c = creator.data;

  return (
    <Screen scroll edges={[]} contentClassName="pb-2xl">
      <Stack.Screen options={{ title: '' }} />

      <View className="items-center px-xl pt-lg">
        <Img source={c.avatar} radius={999} style={{ width: 120, height: 120 }} />
        <View className="flex-row items-center mt-md">
          <AppText variant="h1" className="text-center">
            {c.name}
          </AppText>
          <View className="ml-md">
            <SaveButton id={c.id} kind="creator" size={24} />
          </View>
        </View>
        <AppText variant="body" className="text-center mt-xs">
          {c.discipline}
        </AppText>
        <View className="flex-row gap-2 mt-md">
          <Tag label={c.region} />
          <Tag
            label={
              c.disciplineType === 'physical'
                ? 'Artisan'
                : c.disciplineType === 'digital'
                ? 'Digital'
                : 'Teacher'
            }
          />
        </View>
      </View>

      <KolkaDivider />

      {/* Bio / story */}
      <View className="px-xl">
        <AppText variant="bodyLg">{c.bio}</AppText>
        {c.story ? (
          <AppText variant="body" className="mt-lg">
            {c.story}
          </AppText>
        ) : null}

        {c.socials && c.socials.length > 0 ? (
          <View className="flex-row gap-3 mt-lg">
            {c.socials.map((s) => (
              <Pressable
                key={s.label}
                onPress={() => Linking.openURL(s.url).catch(() => {})}
                className="rounded-full bg-brand-surface-alt border border-brand-border px-md py-sm"
              >
                <AppText variant="label" className="text-brand-terracotta">
                  {s.label}
                </AppText>
              </Pressable>
            ))}
          </View>
        ) : null}
      </View>

      {/* Portfolio */}
      {c.portfolio.length > 0 ? (
        <View className="mt-2xl">
          <AppText variant="h3" className="px-xl mb-md">
            Portfolio
          </AppText>
          <PortfolioGrid images={c.portfolio} columnWidth={PORTFOLIO_COL_W} />
        </View>
      ) : null}

      {/* Their pieces */}
      {products.data && products.data.length > 0 ? (
        <View className="mt-lg">
          <AppText variant="h3" className="px-xl mb-md">
            Available pieces
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
                  {p.priceLabel ? (
                    <AppText variant="label" className="text-brand-marigold mt-xs">
                      {p.priceLabel}
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
