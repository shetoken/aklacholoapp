import React from 'react';
import { View, type ViewStyle } from 'react-native';

import type { Ritual } from '@/types';
import { AppText } from '@/components/ui/Text';
import { ClassicKolka } from '@/components/brand/motifs/KolkaMotif';
import { brand } from '@/theme';

type RitualPosterProps = {
  ritual: Pick<Ritual, 'name' | 'nameBengali' | 'timing'>;
  height?: number;
  featured?: boolean;
  style?: ViewStyle;
};

const palette = [brand.marigold, brand.terracotta, brand.ivory, brand.ink];

export function RitualPoster({
  ritual,
  height = 200,
  featured = false,
  style,
}: RitualPosterProps) {
  const motifSize = featured ? 72 : 52;

  return (
    <View
      style={[
        {
          height,
          backgroundColor: brand.ink,
          borderBottomWidth: 2,
          borderBottomColor: brand.marigold,
        },
        style,
      ]}
    >
      <View className="absolute top-0 right-0 opacity-[0.14]">
        <ClassicKolka size={motifSize} palette={palette} />
      </View>
      <View className="flex-1 justify-end p-md">
        {ritual.nameBengali ? (
          <AppText
            variant={featured ? 'quote' : 'caption'}
            numberOfLines={featured ? 2 : 1}
            className="text-brand-marigold font-serif-italic mb-xs"
          >
            {ritual.nameBengali}
          </AppText>
        ) : null}
        <AppText
          variant={featured ? 'h2' : 'title'}
          numberOfLines={featured ? 3 : 2}
          className="text-brand-ivory font-serif"
        >
          {ritual.name}
        </AppText>
        <AppText variant="caption" numberOfLines={2} className="mt-sm text-brand-ivory-soft">
          {ritual.timing}
        </AppText>
      </View>
    </View>
  );
}
