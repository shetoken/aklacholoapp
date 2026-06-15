import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { AttireItem } from '@/types';
import { ATTIRE_CATEGORY_LABELS, WORN_BY_LABELS } from '@/constants/attire';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type AttireCardProps = {
  item: AttireItem;
  width?: number;
  featured?: boolean;
  compact?: boolean;
};

export function AttireCard({ item, width, featured = false, compact = false }: AttireCardProps) {
  const cardWidth = width ?? (featured ? 220 : compact ? 200 : 160);
  const imageHeight = featured ? 200 : compact ? 140 : 168;

  return (
    <Link href={`/saaj-o-poshak/${item.slug}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.98 : 1 };
        }}
        style={{ width: cardWidth }}
      >
        <View
          className="rounded-2xl overflow-hidden border border-brand-border"
          style={{ backgroundColor: brand.surface }}
        >
          <Img
            source={item.image}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <View className="flex-row flex-wrap gap-1">
              <Tag label={ATTIRE_CATEGORY_LABELS[item.category]} active />
              <Tag label={WORN_BY_LABELS[item.wornBy]} active />
            </View>
            {item.nameBengali ? (
              <AppText
                variant="caption"
                numberOfLines={1}
                className="mt-sm text-brand-kolka font-serif-italic"
              >
                {item.nameBengali}
              </AppText>
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-xs">
              {item.name}
            </AppText>
            {!compact ? (
              <AppText
                variant="caption"
                numberOfLines={2}
                className="mt-sm text-brand-ivory-soft"
              >
                {item.subtitle}
              </AppText>
            ) : null}
            {item.isMarriedSymbol ? (
              <AppText variant="caption" className="mt-xs text-brand-kolka">
                Traditional symbol
              </AppText>
            ) : null}
            {item.isStub ? (
              <AppText variant="caption" className="mt-xs text-brand-marigold">
                Preview
              </AppText>
            ) : null}
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
