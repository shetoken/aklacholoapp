import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Dal } from '@/types';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { brand } from '@/theme';

type DalCardProps = {
  dal: Dal;
  width?: number;
  featured?: boolean;
};

export function DalCard({ dal, width, featured = false }: DalCardProps) {
  const cardWidth = width ?? (featured ? 220 : 180);
  const imageHeight = featured ? 180 : 140;

  return (
    <Link href={`/maachhe-bhaate/dal/${dal.slug}`} asChild>
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
            source={dal.image}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            {dal.nameBengali ? (
              <AppText
                variant="caption"
                numberOfLines={1}
                className="text-brand-kolka font-serif-italic"
              >
                {dal.nameBengali}
              </AppText>
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-xs">
              {dal.name}
            </AppText>
            <AppText
              variant="caption"
              numberOfLines={2}
              className="mt-sm text-brand-ivory-soft"
            >
              {dal.subtitle}
            </AppText>
            {dal.isStub ? (
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
