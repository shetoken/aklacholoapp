import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';
import type { Product } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

/** Compact product tile for Home Discover previews. */
export function ProductTile({
  product,
  size = 108,
  onDark = true,
}: {
  product: Product;
  size?: number;
  onDark?: boolean;
}) {
  const cover = product.images[0];
  const imageH = cover?.aspectRatio ? size / cover.aspectRatio : size * 1.15;

  return (
    <Link href={`/product/${product.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.96 : 1 };
        }}
        style={{ width: size }}
      >
        <View
          className="rounded-lg overflow-hidden mr-md"
          style={{
            backgroundColor: onDark ? brand.surface : undefined,
            borderWidth: onDark ? 1 : 0,
            borderColor: `${brand.ivory}22`,
          }}
        >
          <Img
            source={cover}
            style={{ width: size, height: Math.min(imageH, size * 1.35) }}
          />
          <View className="p-sm">
            <AppText
              variant="caption"
              numberOfLines={2}
              className={onDark ? 'text-brand-ivory' : undefined}
            >
              {product.title}
            </AppText>
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
