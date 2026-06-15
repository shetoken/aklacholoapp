import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';
import type { Product } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';
import { SaveButton } from '@/components/ui/SaveButton';
import { brand } from '@/theme';

/**
 * Masonry-friendly product card. Image aspect ratio drives height; compacts
 * automatically in narrow (3-column) masonry layouts.
 *
 * Save is a sibling of the rounded card shell — never a child of a view with
 * borderRadius, which clips absolutely positioned children on iOS/Android.
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
  const compact = columnWidth < 120;
  const inset = compact ? 8 : 10;
  const radius = compact ? 8 : 12;

  if (!cover) return null;

  return (
    <View
      style={{
        width: columnWidth,
        marginBottom: compact ? 12 : 16,
      }}
    >
      <View
        style={{
          borderRadius: radius,
          borderWidth: 1,
          borderColor: brand.border,
          backgroundColor: brand.surface,
          overflow: 'hidden',
        }}
      >
        <Link href={`/product/${product.id}`} asChild>
          <MotiPressable
            animate={({ pressed }) => {
              'worklet';
              return { scale: pressed ? 0.98 : 1 };
            }}
          >
            <View>
              <Img
                source={cover}
                style={{ width: columnWidth, height: imageHeight }}
              />
              <View className={compact ? 'p-sm' : 'p-md'}>
                <AppText variant={compact ? 'caption' : 'title'} numberOfLines={2}>
                  {product.title}
                </AppText>
                {product.subtitle ? (
                  <AppText variant="caption" numberOfLines={1} className="mt-px">
                    {product.subtitle}
                  </AppText>
                ) : null}
                {product.priceLabel ? (
                  <AppText
                    variant="label"
                    className={`text-brand-marigold ${compact ? 'mt-xs' : 'mt-sm'}`}
                    style={compact ? { fontSize: 9, lineHeight: 11 } : undefined}
                  >
                    {product.priceLabel}
                  </AppText>
                ) : null}
              </View>
            </View>
          </MotiPressable>
        </Link>
      </View>

      <View
        pointerEvents="box-none"
        style={{
          position: 'absolute',
          top: inset,
          right: inset,
          zIndex: 20,
          elevation: 20,
        }}
      >
        <SaveButton
          id={product.id}
          kind="product"
          floating
          compact={compact}
          size={compact ? 12 : 18}
        />
      </View>
    </View>
  );
}
