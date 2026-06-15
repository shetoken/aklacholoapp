import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';
import type { Article } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';
import { APP } from '@/constants/app';

/**
 * Story card for "The Magic of Bengal" content, woven into the Discover feed.
 * `variant="wide"` is a full-bleed feature; "inline" is a compact in-feed nudge.
 */
export function ArticleCard({
  article,
  variant = 'wide',
  onDark = true,
}: {
  article: Article;
  variant?: 'wide' | 'inline';
  onDark?: boolean;
}) {
  const labelCls = onDark ? 'text-brand-terracotta mb-xs' : 'text-brand-primary mb-xs';
  const titleCls = onDark ? 'text-brand-ivory' : '';
  const bodyCls = onDark ? 'mt-xs text-brand-ivory-soft' : 'mt-xs';

  if (variant === 'inline') {
    return (
      <Link href={`/article/${article.id}`} asChild>
        <MotiPressable
          animate={({ pressed }) => {
            'worklet';
            return { scale: pressed ? 0.98 : 1 };
          }}
        >
          <View className="flex-row items-center rounded-xl bg-brand-surface p-md mx-xl mb-lg border border-brand-border">
            <Img source={article.heroImage} radius={12} style={{ width: 72, height: 72 }} />
            <View className="flex-1 ml-md">
              <AppText variant="label" className={labelCls}>
                {APP.storyLabel}
              </AppText>
              <AppText variant="title" className={titleCls} numberOfLines={2}>
                {article.title}
              </AppText>
            </View>
          </View>
        </MotiPressable>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.98 : 1 };
        }}
      >
        <View className="rounded-2xl overflow-hidden bg-brand-surface mx-xl mb-lg border border-brand-border">
          <Img source={article.heroImage} className="w-full" style={{ height: 180 }} />
          <View className="p-lg">
            <AppText variant="label" className={labelCls}>
              {APP.storyLabel} · {article.readingMinutes} min read
            </AppText>
            <AppText variant="h3" className={titleCls}>
              {article.title}
            </AppText>
            <AppText variant="body" className={bodyCls} numberOfLines={2}>
              {article.subtitle}
            </AppText>
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
