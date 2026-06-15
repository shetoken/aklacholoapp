import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { CinemaEntry } from '@/types';
import { AppText } from '@/components/ui/Text';
import { CinemaPoster } from '@/components/cinema/CinemaPoster';
import { brand } from '@/theme';

type CinemaCardProps = {
  entry: CinemaEntry;
  width?: number;
  featured?: boolean;
  compact?: boolean;
};

export function CinemaCard({
  entry,
  width,
  featured = false,
  compact = false,
}: CinemaCardProps) {
  const cardWidth = width ?? (featured ? 200 : compact ? 180 : 160);
  const posterHeight = featured ? 240 : compact ? 200 : 208;

  return (
    <Link href={`/cholochitro/${entry.slug}`} asChild>
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
          <CinemaPoster entry={entry} height={posterHeight} featured={featured} />
          <View className="p-md">
            <AppText
              variant="caption"
              numberOfLines={compact ? 2 : 3}
              className="text-brand-ivory-soft"
              style={{ lineHeight: 20 }}
            >
              {entry.subtitle}
            </AppText>
            {entry.isStub ? (
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
