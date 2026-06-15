import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Bird } from '@/types';
import {
  CONSERVATION_LABELS,
  HABITAT_LABELS,
  OFFICIAL_STATUS_LABELS,
  RESIDENCY_LABELS,
} from '@/constants/birds';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type BirdCardProps = {
  bird: Bird;
  width?: number;
  featured?: boolean;
  compact?: boolean;
};

export function BirdCard({ bird, width, featured = false, compact = false }: BirdCardProps) {
  const cardWidth = width ?? (featured ? 220 : compact ? 200 : 160);
  const imageHeight = featured ? 200 : compact ? 140 : 168;
  const primaryHabitat = bird.habitats[0];
  const officialLabel =
    bird.officialStatus !== 'none' ? OFFICIAL_STATUS_LABELS[bird.officialStatus] : null;

  return (
    <Link href={`/pakhi/${bird.slug}`} asChild>
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
            source={bird.image}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            {officialLabel ? (
              <Tag label={officialLabel} active />
            ) : primaryHabitat ? (
              <Tag label={HABITAT_LABELS[primaryHabitat]} active={featured} />
            ) : null}
            {bird.nameBengali ? (
              <AppText
                variant="caption"
                numberOfLines={1}
                className="mt-sm text-brand-kolka font-serif-italic"
              >
                {bird.nameBengali}
              </AppText>
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-xs">
              {bird.name}
            </AppText>
            {!compact ? (
              <>
                <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                  {RESIDENCY_LABELS[bird.residency]}
                </AppText>
                <AppText variant="caption" numberOfLines={2} className="mt-sm text-brand-ivory-soft">
                  {bird.subtitle}
                </AppText>
              </>
            ) : null}
            {bird.isStub ? (
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

export function BirdConservationTag({ status }: { status: Bird['conservation'] }) {
  const isAtRisk =
    status === 'near-threatened' ||
    status === 'vulnerable' ||
    status === 'endangered' ||
    status === 'critically-endangered';

  return (
    <Tag
      label={CONSERVATION_LABELS[status]}
      active={isAtRisk}
    />
  );
}
