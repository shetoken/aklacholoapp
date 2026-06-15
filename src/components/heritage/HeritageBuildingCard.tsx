import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { HeritageBuilding } from '@/types';
import {
  HERITAGE_REGION_LABELS,
  HERITAGE_TYPE_LABELS,
  STATUS_LABELS,
} from '@/constants/heritage-buildings';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type HeritageBuildingCardProps = {
  building: HeritageBuilding;
  width?: number;
  featured?: boolean;
};

export function HeritageBuildingCard({
  building,
  width,
  featured = false,
}: HeritageBuildingCardProps) {
  const cardWidth = width ?? (featured ? 280 : 168);
  const imageHeight = featured ? 200 : 180;
  const primaryStatus = building.currentStatus[0];

  return (
    <Link href={`/palaces/${building.slug}`} asChild>
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
            source={building.heroImage}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            {primaryStatus ? (
              <Tag label={STATUS_LABELS[primaryStatus]} active={featured} />
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-sm">
              {building.name}
            </AppText>
            <AppText variant="caption" className="mt-xs text-brand-terracotta">
              {HERITAGE_REGION_LABELS[building.region]}
            </AppText>
            <AppText variant="caption" numberOfLines={2} className="mt-xs text-brand-ivory-soft">
              {building.subtitle}
            </AppText>
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {HERITAGE_TYPE_LABELS[building.type]}
            </AppText>
            {building.isStub ? (
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
