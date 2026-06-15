import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Festival } from '@/types';
import { FAITH_LABELS, SEASON_LABELS } from '@/constants/festivals-faith';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type FestivalCardProps = {
  festival: Festival;
  width?: number;
  featured?: boolean;
};

export function FestivalCard({ festival, width, featured = false }: FestivalCardProps) {
  const cardWidth = width ?? (featured ? 280 : 168);
  const imageHeight = featured ? 200 : 180;

  return (
    <Link href={`/festivals/festival/${festival.slug}`} asChild>
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
            source={festival.heroImage}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <Tag label={SEASON_LABELS[festival.season]} active={featured} />
            <AppText variant="title" numberOfLines={2} className="mt-sm">
              {festival.name}
            </AppText>
            <AppText variant="caption" className="mt-xs text-brand-terracotta">
              {festival.timeOfYear} · {FAITH_LABELS[festival.faith]}
            </AppText>
            <AppText variant="caption" numberOfLines={2} className="mt-xs text-brand-ivory-soft">
              {festival.subtitle}
            </AppText>
            {festival.isStub ? (
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
