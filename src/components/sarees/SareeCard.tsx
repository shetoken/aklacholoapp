import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Saree } from '@/types';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

const AXIS_LABEL: Record<Saree['axis'], string> = {
  type: 'Type',
  style: 'Style',
  drape: 'Drape',
};

type SareeCardProps = {
  saree: Saree;
  width?: number;
  featured?: boolean;
};

export function SareeCard({ saree, width, featured = false }: SareeCardProps) {
  const cardWidth = width ?? (featured ? 280 : 160);
  const imageHeight = featured ? 220 : 200;

  return (
    <Link href={`/sarees/${saree.slug}`} asChild>
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
            source={saree.heroImage}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <Tag label={AXIS_LABEL[saree.axis]} active={featured} />
            <AppText variant="title" numberOfLines={2} className="mt-sm">
              {saree.name}
            </AppText>
            <AppText variant="caption" numberOfLines={2} className="mt-xs text-brand-ivory-soft">
              {saree.subtitle}
            </AppText>
            {saree.isStub ? (
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
