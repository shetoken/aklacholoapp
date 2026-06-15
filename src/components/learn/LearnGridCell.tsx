import React from 'react';
import { View } from 'react-native';
import { MotiPressable } from 'moti/interactions';
import type { LearnTopic } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

/** Learn preview tile — image, title, and description. */
export function LearnGridCell({
  topic,
  width,
}: {
  topic: LearnTopic;
  width: number;
}) {
  const compact = width < 110;
  const imageH = Math.round(width * (compact ? 0.62 : 0.72));

  return (
    <MotiPressable
      animate={({ pressed }) => {
        'worklet';
        return { scale: pressed ? 0.98 : 1 };
      }}
      style={{ width }}
    >
      <View
        className={`overflow-hidden mb-xs ${compact ? 'rounded-lg' : 'rounded-xl'}`}
        style={{
          backgroundColor: brand.surface,
          borderWidth: 1,
          borderColor: `${brand.ivory}22`,
        }}
      >
        <Img source={topic.image} style={{ width, height: imageH }} />
        <View className={compact ? 'p-xs' : 'p-md'}>
          {!compact ? (
            <AppText variant="label" className="text-brand-terracotta mb-xs">
              Coming soon
            </AppText>
          ) : null}
          <AppText
            variant={compact ? 'caption' : 'title'}
            numberOfLines={2}
            className={compact ? 'text-brand-ivory font-sans-semibold' : undefined}
            style={compact ? { fontSize: 10, lineHeight: 12 } : undefined}
          >
            {topic.title}
          </AppText>
          <AppText
            variant="caption"
            numberOfLines={compact ? 2 : 3}
            className="mt-xs text-brand-ivory-soft"
            style={compact ? { fontSize: 9, lineHeight: 11 } : undefined}
          >
            {topic.detail}
          </AppText>
        </View>
      </View>
    </MotiPressable>
  );
}
