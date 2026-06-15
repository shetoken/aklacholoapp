import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { FloraItem } from '@/types';
import { FLORA_CATEGORY_LABELS, SEASON_LABELS } from '@/constants/flora';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type FloraCardProps = {
  item: FloraItem;
  width?: number;
  featured?: boolean;
};

export function FloraCard({ item, width, featured = false }: FloraCardProps) {
  const cardWidth = width ?? (featured ? 220 : 160);
  const imageHeight = featured ? 200 : 168;

  return (
    <Link href={`/bagan/${item.slug}`} asChild>
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
            <Tag label={FLORA_CATEGORY_LABELS[item.category]} active={featured} />
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
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {SEASON_LABELS[item.season]}
            </AppText>
            <AppText variant="caption" numberOfLines={2} className="mt-sm text-brand-ivory-soft">
              {item.subtitle}
            </AppText>
            {item.hasGITag ? (
              <AppText variant="caption" className="mt-xs text-brand-marigold">
                GI protected
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
