import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';
import type { Experience } from '@/types';
import { Img } from '@/components/ui/Img';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

/** Curated travel tile — image, title, and short description. */
export function ExperienceGridCell({
  experience,
  width,
}: {
  experience: Experience;
  width: number;
}) {
  const compact = width < 110;
  const imageH = Math.round(width * (compact ? 0.62 : 0.72));

  return (
    <Link href={`/travel/${experience.id}`} asChild>
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
          <Img
            source={experience.heroImage}
            style={{ width, height: imageH }}
          />
          <View className={compact ? 'p-xs' : 'p-md'}>
            <AppText
              variant="label"
              className="text-brand-marigold mb-xs"
              numberOfLines={1}
              style={compact ? { fontSize: 8, lineHeight: 10 } : undefined}
            >
              {experience.location}
            </AppText>
            <AppText
              variant={compact ? 'caption' : 'title'}
              numberOfLines={compact ? 2 : 2}
              className={compact ? 'text-brand-ivory font-sans-semibold' : undefined}
              style={compact ? { fontSize: 10, lineHeight: 12 } : undefined}
            >
              {experience.title}
            </AppText>
            <AppText
              variant="caption"
              numberOfLines={compact ? 2 : 3}
              className="mt-xs text-brand-ivory-soft"
              style={compact ? { fontSize: 9, lineHeight: 11 } : undefined}
            >
              {experience.shortBlurb}
            </AppText>
          </View>
        </View>
      </MotiPressable>
    </Link>
  );
}
