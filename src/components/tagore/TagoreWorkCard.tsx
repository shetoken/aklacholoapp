import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { TagoreWork } from '@/types';
import { TAGORE_WORK_FORM_LABELS } from '@/constants/tagore';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type TagoreWorkCardProps = {
  work: TagoreWork;
  width?: number;
  featured?: boolean;
};

export function TagoreWorkCard({
  work,
  width,
  featured = false,
}: TagoreWorkCardProps) {
  const cardWidth = width ?? (featured ? 280 : 160);
  const imageHeight = featured ? 200 : 160;

  return (
    <Link href={`/tagore/work/${work.slug}`} asChild>
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
            source={work.image}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            <Tag label={TAGORE_WORK_FORM_LABELS[work.form]} active={featured} />
            <AppText variant="title" numberOfLines={2} className="mt-sm">
              {work.title}
            </AppText>
            {work.year ? (
              <AppText variant="caption" className="mt-xs text-brand-terracotta">
                {work.year}
              </AppText>
            ) : null}
            <AppText variant="caption" numberOfLines={2} className="mt-xs text-brand-ivory-soft">
              {work.subtitle}
            </AppText>
            {work.isStub ? (
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
