import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';
import type { Experience } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';

/** Compact curated experience card (image + name + one-line teaser). */
export function ExperienceTile({
  experience,
  width = 220,
}: {
  experience: Experience;
  width?: number;
}) {
  return (
    <Link href={`/travel/${experience.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.97 : 1 };
        }}
      >
        <View
          className="rounded-xl overflow-hidden mr-md bg-brand-surface border border-brand-border"
          style={{ width }}
        >
          <Img source={experience.heroImage} style={{ width, height: 120 }} />
          <View className="p-md">
            <AppText variant="title" numberOfLines={1}>
              {experience.title}
            </AppText>
            <AppText variant="caption" numberOfLines={2} className="mt-xs">
              {experience.shortBlurb}
            </AppText>
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
