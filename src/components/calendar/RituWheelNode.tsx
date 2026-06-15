import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { Ritu } from '@/types';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

export function RituWheelNode({ ritu }: { ritu: Ritu }) {
  return (
    <Link href={`/bangabda/ritu/${ritu.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.94 : 1 };
        }}
        style={{ flex: 1 }}
      >
        <View
          className="flex-1 rounded-full border items-center justify-center p-xs"
          style={{ borderColor: brand.marigold, backgroundColor: brand.ink }}
        >
        <AppText
          variant="caption"
          numberOfLines={1}
          className="text-brand-marigold font-serif-italic text-center"
          style={{ fontSize: 11 }}
        >
          {ritu.nameBengali}
        </AppText>
        <AppText
          variant="label"
          numberOfLines={1}
          className="text-brand-ivory text-center mt-xs"
          style={{ fontSize: 10 }}
        >
          {ritu.name}
        </AppText>
        </View>
      </MotiPressable>
    </Link>
  );
}
