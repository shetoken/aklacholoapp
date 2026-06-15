import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Fish } from '@/types';
import { FISH_GROUP_LABELS, FISH_SEASON_LABELS } from '@/constants/fish-dal';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type FishCardProps = {
  fish: Fish;
  width?: number;
  featured?: boolean;
  compact?: boolean;
};

export function FishCard({ fish, width, featured = false, compact = false }: FishCardProps) {
  const cardWidth = width ?? (featured ? 220 : compact ? 200 : 160);
  const imageHeight = featured ? 200 : compact ? 140 : 168;

  return (
    <Link href={`/maachhe-bhaate/fish/${fish.slug}`} asChild>
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
            source={fish.image}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <View className="flex-row flex-wrap gap-1">
              <Tag label={FISH_GROUP_LABELS[fish.group]} active />
              <Tag label={FISH_SEASON_LABELS[fish.season]} active />
            </View>
            {fish.nameBengali ? (
              <AppText
                variant="caption"
                numberOfLines={1}
                className="mt-sm text-brand-kolka font-serif-italic"
              >
                {fish.nameBengali}
              </AppText>
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-xs">
              {fish.name}
            </AppText>
            {!compact ? (
              <AppText
                variant="caption"
                numberOfLines={2}
                className="mt-sm text-brand-ivory-soft"
              >
                {fish.subtitle}
              </AppText>
            ) : null}
            {fish.isStub ? (
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
