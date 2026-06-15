import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, Pressable, ScrollView, TextInput, View } from 'react-native';

import {
  AppText,
  ProductCard,
  MasonryGrid,
  PillarScreen,
  SectionHeader,
  StorySearchBar,
  Loading,
  ErrorView,
  EmptyState,
} from '@/components';
import { Tag } from '@/components/ui/Tag';
import { useAsync } from '@/hooks/useAsync';
import { filterProducts, getProducts } from '@/services';
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

function ProductMasonry({ items }: { items: Product[] }) {
  if (items.length === 0) {
    return (
      <EmptyState
        title="Nothing here yet"
        subtitle="Try another category or search term."
      />
    );
  }

  return (
    <View className="px-xl">
      <MasonryGrid
        columns={SHOP_COLS}
        gutter={SHOP_GUTTER}
        items={items}
        columnWidth={COLUMN_W}
        estimateHeight={estimate}
        renderItem={(p, w) => <ProductCard product={p} columnWidth={w} />}
      />
      <AppText variant="caption" className="mt-lg text-center">
        Display prices only — checkout opens in a future release.
      </AppText>
    </View>
  );
}

export default function ShopScreen() {
  const [category, setCategory] = useState<Category | 'All'>('All');
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef<TextInput>(null);
  const products = useAsync(() => getProducts(), []);

  useEffect(() => {
    if (searchOpen) {
      const t = setTimeout(() => searchRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  const allProducts = products.data ?? [];

  const filtered = useMemo(() => {
    return category === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === category);
  }, [allProducts, category]);

  const searchResults = useMemo(
    () => filterProducts(allProducts, query),
    [allProducts, query],
  );

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
  };

  const toggleSearch = () => {
    if (searchOpen) closeSearch();
    else setSearchOpen(true);
  };

  if (products.loading) return <Loading label="Curating the shop…" />;
  if (products.error) return <ErrorView onRetry={products.reload} />;

  const searching = searchOpen && query.trim().length > 0;

  return (
    <PillarScreen
      active="shop"
      onCtaPress={toggleSearch}
      ctaActive={searchOpen}
      contentClassName="pb-2xl"
      headerAccessory={
        searchOpen ? (
          <StorySearchBar
            value={query}
            onChangeText={setQuery}
            onClose={closeSearch}
            inputRef={searchRef}
            placeholder="Search crafts, textiles, kolka, wearables…"
          />
        ) : null
      }
    >
      {searching ? (
        <View>
          <SectionHeader
            title="Search results"
            subtitle={
              searchResults.length === 1
                ? '1 piece'
                : `${searchResults.length} pieces`
            }
          />
          {searchResults.length > 0 ? (
            <ProductMasonry items={searchResults} />
          ) : (
            <EmptyState
              title="Nothing found"
              subtitle="Try muslin, kantha, kitchen, or wall art."
            />
          )}
        </View>
      ) : (
        <>
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

          <ProductMasonry items={filtered} />
        </>
      )}
    </PillarScreen>
  );
}
