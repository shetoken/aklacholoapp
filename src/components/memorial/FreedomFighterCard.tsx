import React from 'react';
import { Pressable, View } from 'react-native';
import { Link } from 'expo-router';

import type { FreedomFighter } from '@/types';
import { BORDER_LABELS, FATE_LABELS } from '@/constants/freedom-fighters';
import {
  MEMORIAL_TILE_BODY_HEIGHT,
  MEMORIAL_TILE_HEIGHT,
  MEMORIAL_TILE_MEDIA_HEIGHT,
  MEMORIAL_TILE_WIDTH,
} from '@/constants/memorial';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { brand } from '@/theme';

type FreedomFighterCardProps = {
  fighter: FreedomFighter;
  width?: number;
  featured?: boolean;
};

/** Memorial card — subdued, no decorative animation. */
export function FreedomFighterCard({
  fighter,
  width = MEMORIAL_TILE_WIDTH,
  featured = false,
}: FreedomFighterCardProps) {
  const lifespanLine = fighter.lifespan
    ? `${fighter.lifespan}${fighter.ageAtDeath != null ? ` · age ${fighter.ageAtDeath}` : ''}`
    : fighter.birthplace ?? ' ';

  return (
    <Link href={`/memorial/${fighter.slug}`} asChild>
      <Pressable style={{ width, height: MEMORIAL_TILE_HEIGHT }}>
        <View
          className="rounded-xl overflow-hidden border"
          style={{
            width,
            height: MEMORIAL_TILE_HEIGHT,
            backgroundColor: brand.surface,
            borderColor: featured ? brand.kolka : brand.border,
            opacity: featured ? 1 : 0.95,
          }}
        >
          <Img
            source={fighter.portraitImage}
            radius={0}
            style={{ width, height: MEMORIAL_TILE_MEDIA_HEIGHT }}
          />
          <View className="p-md" style={{ height: MEMORIAL_TILE_BODY_HEIGHT }}>
            <AppText variant="title" numberOfLines={2}>
              {fighter.name}
            </AppText>
            <AppText variant="caption" numberOfLines={1} className="mt-xs text-brand-ivory-soft">
              {lifespanLine}
            </AppText>
            <AppText variant="caption" numberOfLines={2} className="mt-xs text-brand-ivory-soft">
              {fighter.subtitle}
            </AppText>
            <AppText variant="label" className="mt-sm text-brand-kolka" numberOfLines={1}>
              {BORDER_LABELS[fighter.borderSide]}
            </AppText>
            <AppText variant="caption" numberOfLines={1} className="mt-xs text-brand-ivory-soft">
              {FATE_LABELS[fighter.fate]}
            </AppText>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
