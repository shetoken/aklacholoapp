import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Craft } from '@/types';
import { CRAFT_MEDIUM_LABELS } from '@/constants/crafts';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type CraftCardProps = {
  craft: Craft;
  width?: number;
  featured?: boolean;
  compact?: boolean;
};

export function CraftCard({ craft, width, featured = false, compact = false }: CraftCardProps) {
  const cardWidth = width ?? (featured ? 220 : compact ? 200 : 160);
  const imageHeight = featured ? 200 : compact ? 140 : 168;

  return (
    <Link href={`/hastoshilpo/${craft.slug}`} asChild>
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
            source={craft.heroImage}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <Tag label={CRAFT_MEDIUM_LABELS[craft.medium]} active />
            {craft.nameBengali ? (
              <AppText
                variant="caption"
                numberOfLines={1}
                className="mt-sm text-brand-kolka font-serif-italic"
              >
                {craft.nameBengali}
              </AppText>
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-xs">
              {craft.name}
            </AppText>
            {!compact ? (
              <AppText
                variant="caption"
                numberOfLines={2}
                className="mt-sm text-brand-ivory-soft"
              >
                {craft.subtitle}
              </AppText>
            ) : null}
            {craft.isStub ? (
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
