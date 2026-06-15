import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Icon } from '@/types';
import { FIELD_LABELS } from '@/constants/icons';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type IconCardProps = {
  icon: Icon;
  width?: number;
  featured?: boolean;
};

export function IconCard({ icon, width, featured = false }: IconCardProps) {
  const cardWidth = width ?? (featured ? 220 : 160);
  const imageHeight = featured ? 240 : 200;

  return (
    <Link href={`/icons/${icon.slug}`} asChild>
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
            source={icon.portraitImage}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <Tag label={FIELD_LABELS[icon.field]} active={featured} />
            {icon.nameBengali ? (
              <AppText
                variant="caption"
                numberOfLines={1}
                className="mt-sm text-brand-marigold font-serif-italic"
              >
                {icon.nameBengali}
              </AppText>
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-xs">
              {icon.name}
            </AppText>
            {icon.lifespan ? (
              <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
                {icon.lifespan}
              </AppText>
            ) : null}
            <AppText variant="caption" numberOfLines={2} className="mt-sm text-brand-ivory-soft">
              {icon.subtitle}
            </AppText>
            {icon.isStub ? (
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
