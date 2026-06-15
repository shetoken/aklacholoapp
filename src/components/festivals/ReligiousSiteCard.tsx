import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { ReligiousSite } from '@/types';
import {
  FAITH_LABELS,
  FAITH_REGION_LABELS,
  SITE_TYPE_LABELS,
} from '@/constants/festivals-faith';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type ReligiousSiteCardProps = {
  site: ReligiousSite;
  width?: number;
  featured?: boolean;
};

export function ReligiousSiteCard({
  site,
  width,
  featured = false,
}: ReligiousSiteCardProps) {
  const cardWidth = width ?? (featured ? 280 : 168);
  const imageHeight = featured ? 200 : 180;

  return (
    <Link href={`/festivals/site/${site.slug}`} asChild>
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
            source={site.heroImage}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <Tag label={SITE_TYPE_LABELS[site.type]} active={featured} />
            <AppText variant="title" numberOfLines={2} className="mt-sm">
              {site.name}
            </AppText>
            <AppText variant="caption" className="mt-xs text-brand-terracotta">
              {FAITH_REGION_LABELS[site.region]} · {FAITH_LABELS[site.faith]}
            </AppText>
            <AppText variant="caption" numberOfLines={2} className="mt-xs text-brand-ivory-soft">
              {site.subtitle}
            </AppText>
            {site.isStub ? (
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
