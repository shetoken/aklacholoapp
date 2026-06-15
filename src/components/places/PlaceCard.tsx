import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Place } from '@/types';
import { PLACE_TYPE_LABELS, REGION_LABELS } from '@/constants/places';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type PlaceCardProps = {
  place: Place;
  width?: number;
  featured?: boolean;
  compact?: boolean;
};

export function PlaceCard({
  place,
  width,
  featured = false,
  compact = false,
}: PlaceCardProps) {
  const cardWidth = width ?? (featured ? 220 : compact ? 200 : 168);
  const imageHeight = featured ? 200 : compact ? 160 : 180;

  return (
    <Link href={`/bhraman/${place.slug}`} asChild>
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
            source={place.heroImage}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <Tag label={REGION_LABELS[place.region]} active={featured} />
            {place.nameBengali ? (
              <AppText
                variant="caption"
                numberOfLines={1}
                className="mt-sm text-brand-kolka font-serif-italic"
              >
                {place.nameBengali}
              </AppText>
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-xs">
              {place.name}
            </AppText>
            <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
              {PLACE_TYPE_LABELS[place.type]}
              {place.parentCity ? ` · ${place.parentCity}` : ''}
            </AppText>
            {!compact ? (
              <AppText
                variant="caption"
                numberOfLines={2}
                className="mt-sm text-brand-ivory-soft"
              >
                {place.subtitle}
              </AppText>
            ) : null}
            {place.isStub ? (
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
