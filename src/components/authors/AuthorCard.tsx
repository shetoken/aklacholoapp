import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Author } from '@/types';
import { FORM_LABELS } from '@/constants/authors';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { Tag } from '@/components/ui/Tag';
import { brand } from '@/theme';

type AuthorCardProps = {
  author: Author;
  width?: number;
  featured?: boolean;
};

export function AuthorCard({ author, width, featured = false }: AuthorCardProps) {
  const cardWidth = width ?? (featured ? 280 : 160);
  const imageHeight = featured ? 220 : 200;
  const primaryForm = author.forms[0];

  return (
    <Link href={`/authors/${author.slug}`} asChild>
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
            source={author.portraitImage}
            radius={0}
            style={{ width: cardWidth, height: imageHeight }}
          />
          <View className="p-md">
            {primaryForm ? (
              <Tag label={FORM_LABELS[primaryForm]} active={featured} />
            ) : null}
            <AppText variant="title" numberOfLines={2} className="mt-sm">
              {author.name}
            </AppText>
            {author.lifespan ? (
              <AppText variant="caption" className="mt-xs text-brand-terracotta">
                {author.lifespan}
              </AppText>
            ) : null}
            <AppText variant="caption" numberOfLines={2} className="mt-xs text-brand-ivory-soft">
              {author.subtitle}
            </AppText>
            {author.isStub ? (
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
