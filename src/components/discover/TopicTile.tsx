import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';
import type { DiscoverTopic } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

/** Image tile for Discover rolling rails (festivals, calendar, palaces). */
export function TopicTile({
  topic,
  size = 108,
}: {
  topic: DiscoverTopic;
  size?: number;
}) {
  const imageH = size * 1.05;

  const inner = (
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
          backgroundColor: brand.surface,
          borderWidth: 1,
          borderColor: `${brand.ivory}22`,
        }}
      >
        <Img source={topic.image} style={{ width: size, height: imageH }} />
        <View className="p-sm">
          <AppText variant="caption" numberOfLines={2} className="text-brand-ivory">
            {topic.title}
          </AppText>
          {topic.subtitle ? (
            <AppText variant="caption" numberOfLines={1} className="text-brand-ivory-soft mt-px">
              {topic.subtitle}
            </AppText>
          ) : null}
        </View>
      </View>
    </MotiPressable>
  );

  if (topic.articleId) {
    return (
      <Link href={`/article/${topic.articleId}`} asChild>
        {inner}
      </Link>
    );
  }

  return inner;
}
