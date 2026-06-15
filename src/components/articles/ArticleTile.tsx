import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';
import type { Article } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

/** Mini encyclopedia tile for Magic of Bengal auto-scroll rails. */
export function ArticleTile({
  article,
  size = 108,
  onDark = true,
}: {
  article: Article;
  size?: number;
  onDark?: boolean;
}) {
  const imageH = size * 1.05;

  return (
    <Link href={`/article/${article.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.96 : 1 };
        }}
        style={{ width: size }}
      >
        <View
          className="rounded-lg overflow-hidden mr-md"
          style={{
            backgroundColor: onDark ? brand.surface : undefined,
            borderWidth: onDark ? 1 : 0,
            borderColor: `${brand.ivory}22`,
          }}
        >
          <Img
            source={article.heroImage}
            style={{ width: size, height: imageH }}
          />
          <View className="p-sm">
            <AppText
              variant="caption"
              numberOfLines={3}
              className={onDark ? 'text-brand-ivory' : undefined}
            >
              {article.title}
            </AppText>
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
