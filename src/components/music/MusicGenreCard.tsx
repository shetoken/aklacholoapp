import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { MusicGenre } from '@/types';
import { GENRE_FAMILY_LABELS } from '@/constants/music';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type MusicGenreCardProps = {
  genre: MusicGenre;
  width?: number;
  featured?: boolean;
};

export function MusicGenreCard({ genre, width, featured = false }: MusicGenreCardProps) {
  const cardWidth = width ?? (featured ? 240 : 168);
  const imageHeight = featured ? 200 : 168;

  return (
    <Link href={`/music/${genre.slug}`} asChild>
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
            source={genre.heroImage}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <Tag label={GENRE_FAMILY_LABELS[genre.family]} active={featured} />
            {genre.nameBengali ? (
              <AppText
                variant="caption"
                numberOfLines={1}
                className="mt-sm text-brand-kolka font-serif-italic"
              >
                {genre.nameBengali}
              </AppText>
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-xs">
              {genre.name}
            </AppText>
            {genre.songCount != null ? (
              <AppText variant="caption" className="mt-xs text-brand-marigold">
                {genre.songCount.toLocaleString()} songs
              </AppText>
            ) : null}
            <AppText variant="caption" numberOfLines={2} className="mt-sm text-brand-ivory-soft">
              {genre.subtitle}
            </AppText>
            {genre.isStub ? (
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
