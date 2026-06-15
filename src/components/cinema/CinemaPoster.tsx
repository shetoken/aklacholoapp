import React from 'react';
import { View, type ViewStyle } from 'react-native';

import type { CinemaEntry } from '@/types';
import { AppText } from '@/components/ui/Text';
import { ClassicKolka } from '@/components/brand/motifs/KolkaMotif';
import { brand } from '@/theme';

type CinemaPosterEntry = Pick<
  CinemaEntry,
  'title' | 'titleBengali' | 'year' | 'directorName' | 'type'
>;

type CinemaPosterProps = {
  entry: CinemaPosterEntry;
  height?: number;
  featured?: boolean;
  style?: ViewStyle;
};

const filmPalette = [brand.marigold, brand.terracotta, brand.ivory, brand.ink];
const movementPalette = [brand.terracotta, brand.marigold, brand.ivory, brand.ink];

export function CinemaPoster({
  entry,
  height = 220,
  featured = false,
  style,
}: CinemaPosterProps) {
  const isMovement = entry.type === 'movement-era';
  const motifSize = featured ? 72 : 52;
  const palette = isMovement ? movementPalette : filmPalette;
  const accentColor = isMovement ? brand.terracotta : brand.marigold;

  const metaLine = isMovement
    ? entry.year
    : [entry.year, entry.directorName].filter(Boolean).join(' · ');

  return (
    <View
      style={[
        {
          height,
          backgroundColor: brand.ink,
          borderBottomWidth: 2,
          borderBottomColor: accentColor,
        },
        style,
      ]}
    >
      <View
        className="absolute top-0 right-0 opacity-[0.14]"
        style={{ transform: [{ translateX: 8 }, { translateY: -4 }] }}
      >
        <ClassicKolka size={motifSize} palette={palette} />
      </View>
      <View
        className="absolute bottom-0 left-0 opacity-[0.08]"
        style={{ transform: [{ translateX: -12 }, { translateY: 12 }] }}
      >
        <ClassicKolka size={motifSize * 0.75} palette={palette} />
      </View>

      <View className="flex-1 justify-end p-md">
        {entry.titleBengali ? (
          <AppText
            variant={featured ? 'quote' : 'caption'}
            numberOfLines={featured ? 2 : 1}
            className="text-brand-marigold font-serif-italic mb-xs"
          >
            {entry.titleBengali}
          </AppText>
        ) : null}
        <AppText
          variant={featured ? 'h2' : 'title'}
          numberOfLines={featured ? 3 : 2}
          className="text-brand-ivory font-serif"
        >
          {entry.title}
        </AppText>
        {metaLine ? (
          <AppText
            variant="caption"
            numberOfLines={featured ? 2 : 1}
            className="mt-sm text-brand-ivory-soft font-sans"
          >
            {metaLine}
          </AppText>
        ) : null}
      </View>
    </View>
  );
}
