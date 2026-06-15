import React from 'react';
import { Pressable, View } from 'react-native';
import { Link } from 'expo-router';

import type { CellularJailPrisoner } from '@/types';
import { PRISONER_FATE_LABELS } from '@/constants/cellular-jail';
import {
  MEMORIAL_TILE_BODY_HEIGHT,
  MEMORIAL_TILE_HEIGHT,
  MEMORIAL_TILE_MEDIA_HEIGHT,
  MEMORIAL_TILE_WIDTH,
} from '@/constants/memorial';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

type CellularJailPrisonerCardProps = {
  prisoner: CellularJailPrisoner;
  width?: number;
  featured?: boolean;
};

/** Kala Pani register card — text header, no fabricated portrait. */
export function CellularJailPrisonerCard({
  prisoner,
  width = MEMORIAL_TILE_WIDTH,
  featured = false,
}: CellularJailPrisonerCardProps) {
  const detailLine = prisoner.lifespan ?? prisoner.origin;

  return (
    <Link href={`/memorial/prisoner/${prisoner.id}`} asChild>
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
          <View
            className="items-center justify-center px-md"
            style={{
              width,
              height: MEMORIAL_TILE_MEDIA_HEIGHT,
              backgroundColor: brand.backgroundDeep,
            }}
          >
            {prisoner.nameBengali ? (
              <AppText
                variant="quote"
                numberOfLines={3}
                className="text-brand-kolka font-serif-italic text-center"
              >
                {prisoner.nameBengali}
              </AppText>
            ) : (
              <AppText variant="label" className="text-brand-kolka">
                Kala Pani
              </AppText>
            )}
          </View>
          <View className="p-md" style={{ height: MEMORIAL_TILE_BODY_HEIGHT }}>
            <AppText variant="title" numberOfLines={2}>
              {prisoner.name}
            </AppText>
            <AppText variant="caption" numberOfLines={1} className="mt-xs text-brand-ivory-soft">
              {detailLine}
            </AppText>
            <AppText variant="caption" numberOfLines={2} className="mt-xs text-brand-ivory-soft">
              {prisoner.case ?? 'Cellular Jail exile'}
            </AppText>
            <AppText variant="label" className="mt-sm text-brand-kolka" numberOfLines={1}>
              Cellular Jail
            </AppText>
            <AppText variant="caption" numberOfLines={1} className="mt-xs text-brand-ivory-soft">
              {PRISONER_FATE_LABELS[prisoner.fate]}
            </AppText>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
