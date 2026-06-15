import React, { useMemo, useState } from 'react';
import { Dimensions, Pressable, ScrollView, View } from 'react-native';

import {
  Screen,
  AppText,
  ProductCard,
  MasonryGrid,
  PillarHeader,
  Loading,
  ErrorView,
  EmptyState,
} from '@/components';
import { Tag } from '@/components/ui/Tag';
import { useAsync } from '@/hooks/useAsync';
import { getProducts } from '@/services';
import type { Category, Product } from '@/types';

const { width } = Dimensions.get('window');
const SHOP_COLS = 3;
const SHOP_GUTTER = 12;
const SHOP_PAD = 24;
const COLUMN_W =
  (width - SHOP_PAD * 2 - SHOP_GUTTER * (SHOP_COLS - 1)) / SHOP_COLS;

const CATEGORIES: (Category | 'All')[] = [
  'All',
  'Kitchen',
  'Living',
  'Stationery',
  'Wearables',
  'Wall Art',
];

function estimate(product: Product): number {
  const ratio = product.images[0]?.aspectRatio ?? 0.8;
  return COLUMN_W / ratio + 72;
}

export default function ShopScreen() {
  const [category, setCategory] = useState<Category | 'All'>('All');
  const products = useAsync(() => getProducts(), []);

  const filtered = useMemo(() => {
    const all = products.data ?? [];
    return category === 'All'
      ? all
      : all.filter((p) => p.category === category);
  }, [products.data, category]);

  if (products.loading) return <Loading label="Curating the shop…" />;
  if (products.error) return <ErrorView onRetry={products.reload} />;

  return (
    <Screen scroll edges={[]} contentClassName="pb-2xl">
      <PillarHeader active="shop" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
        className="mb-lg mt-md"
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
            columns={SHOP_COLS}
            gutter={SHOP_GUTTER}
            items={filtered}
            columnWidth={COLUMN_W}
            estimateHeight={estimate}
            renderItem={(p, w) => <ProductCard product={p} columnWidth={w} />}
          />
          <AppText variant="caption" className="mt-lg text-center">
            Display prices only — checkout opens in a future release.
          </AppText>
        </View>
      )}
    </Screen>
  );
}
