import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Ritual } from '@/types';
import { RITUAL_KIND_LABELS } from '@/constants/calendar';
import { AppText } from '@/components/ui/Text';
import { Tag } from '@/components/ui/Tag';
import { RitualPoster } from '@/components/calendar/RitualPoster';
import { brand } from '@/theme';

type RitualCardProps = {
  ritual: Ritual;
  width?: number;
  featured?: boolean;
  compact?: boolean;
};

export function RitualCard({
  ritual,
  width,
  featured = false,
  compact = false,
}: RitualCardProps) {
  const cardWidth = width ?? (featured ? 200 : compact ? 180 : 160);
  const posterHeight = featured ? 220 : compact ? 180 : 188;

  return (
    <Link href={`/bangabda/ritual/${ritual.slug}`} asChild>
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
          <RitualPoster ritual={ritual} height={posterHeight} featured={featured} />
          <View className="p-md">
            <Tag label={RITUAL_KIND_LABELS[ritual.kind]} active />
            <AppText
              variant="caption"
              numberOfLines={compact ? 2 : 3}
              className="mt-sm text-brand-ivory-soft"
              style={{ lineHeight: 20 }}
            >
              {ritual.subtitle}
            </AppText>
            {ritual.isStub ? (
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
