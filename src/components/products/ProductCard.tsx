import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';
import type { Product } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';
import { SaveButton } from '@/components/ui/SaveButton';

/**
 * Masonry-friendly product card. `aspectRatio` (from the first image) drives the
 * image height so a two-column masonry stays visually varied.
 */
export function ProductCard({
  product,
  columnWidth,
}: {
  product: Product;
  columnWidth: number;
}) {
  const cover = product.images[0];
  const ratio = cover?.aspectRatio ?? 0.8;
  const imageHeight = columnWidth / ratio;

  return (
    <Link href={`/product/${product.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.97 : 1 };
        }}
        style={{ width: columnWidth }}
      >
        <View className="rounded-xl overflow-hidden bg-brand-surface mb-lg">
          <View>
            <Img
              source={cover}
              className="w-full"
              style={{ height: imageHeight }}
            />
            <View className="absolute top-sm right-sm">
              <SaveButton id={product.id} kind="product" floating size={18} />
            </View>
          </View>
          <View className="p-md">
            <AppText variant="title" numberOfLines={1}>
              {product.title}
            </AppText>
            {product.subtitle ? (
              <AppText variant="caption" numberOfLines={1} className="mt-px">
                {product.subtitle}
              </AppText>
            ) : null}
            {product.priceLabel ? (
              <AppText variant="label" className="mt-sm text-brand-primary">
                {product.priceLabel}
              </AppText>
            ) : null}
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
