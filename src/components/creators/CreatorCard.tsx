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
}: {
  creator: Creator;
  width?: number;
}) {
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
          <AppText variant="title" className="mt-md text-center" numberOfLines={1}>
            {creator.name}
          </AppText>
          <AppText variant="caption" className="text-center" numberOfLines={1}>
            {creator.discipline}
          </AppText>
          <AppText variant="label" className="mt-xs text-brand-primary">
            {creator.region}
          </AppText>
        </View>
      </MotiPressable>
    </Link>
  );
}
