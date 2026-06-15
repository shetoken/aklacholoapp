import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { NaturalResource } from '@/types';
import { CATEGORY_LABELS } from '@/constants/natural-bengal';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type NaturalResourceCardProps = {
  resource: NaturalResource;
  width?: number;
  featured?: boolean;
};

export function NaturalResourceCard({
  resource,
  width,
  featured = false,
}: NaturalResourceCardProps) {
  const cardWidth = width ?? (featured ? 240 : 168);
  const imageHeight = featured ? 200 : 168;

  return (
    <Link href={`/natural-bengal/${resource.slug}`} asChild>
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
            source={resource.heroImage}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <Tag label={CATEGORY_LABELS[resource.category]} active={featured} />
            {resource.nameBengali ? (
              <AppText
                variant="caption"
                numberOfLines={1}
                className="mt-sm text-brand-kolka font-serif-italic"
              >
                {resource.nameBengali}
              </AppText>
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-xs">
              {resource.name}
            </AppText>
            <AppText variant="caption" numberOfLines={2} className="mt-sm text-brand-ivory-soft">
              {resource.subtitle}
            </AppText>
            {resource.isStub ? (
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
