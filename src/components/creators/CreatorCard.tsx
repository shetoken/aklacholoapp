import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';
import type { Creator } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';

/** Creator row/card used in listings and "featured creators" rails. */
export function CreatorCard({
  creator,
  width,
  onDark = true,
}: {
  creator: Creator;
  width?: number;
  onDark?: boolean;
}) {
  const titleCls = onDark ? 'mt-md text-center text-brand-ivory' : 'mt-md text-center';
  const captionCls = onDark ? 'text-center text-brand-ivory-soft' : 'text-center';
  const regionCls = onDark ? 'mt-xs text-brand-terracotta' : 'mt-xs text-brand-primary';

  return (
    <Link href={`/creator/${creator.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.97 : 1 };
        }}
        style={width ? { width } : undefined}
      >
        <View className="items-center mr-lg">
          <Img
            source={creator.avatar}
            radius={999}
            style={{ width: 96, height: 96 }}
          />
          <AppText variant="title" className={titleCls} numberOfLines={1}>
            {creator.name}
          </AppText>
          <AppText variant="caption" className={captionCls} numberOfLines={1}>
            {creator.discipline}
          </AppText>
          <AppText variant="label" className={regionCls}>
            {creator.region}
          </AppText>
        </View>
      </MotiPressable>
    </Link>
  );
}
