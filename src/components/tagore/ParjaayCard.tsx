import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { ParjaayInfo } from '@/types';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

type ParjaayCardProps = {
  parjaay: ParjaayInfo;
  width?: number;
};

export function ParjaayCard({ parjaay, width = 168 }: ParjaayCardProps) {
  return (
    <Link href={`/tagore/parjaay/${parjaay.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.98 : 1 };
        }}
        style={{ width }}
      >
        <View
          className="rounded-2xl p-lg border border-brand-border"
          style={{ backgroundColor: brand.surface, minHeight: 168 }}
        >
          <AppText variant="quote" className="text-brand-marigold font-serif-italic">
            {parjaay.nameBengali}
          </AppText>
          <AppText variant="title" className="mt-xs">
            {parjaay.name}
          </AppText>
          <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
            {parjaay.meaning}
          </AppText>
          {parjaay.approxSongCount != null ? (
            <AppText variant="label" className="mt-md text-brand-terracotta">
              ~{parjaay.approxSongCount.toLocaleString()} songs
            </AppText>
          ) : parjaay.subClassCount != null ? (
            <AppText variant="label" className="mt-md text-brand-terracotta">
              {parjaay.subClassCount} sub-classes
            </AppText>
          ) : (
            <AppText variant="label" className="mt-md text-brand-terracotta">
              Rabindra Sangeet
            </AppText>
          )}
        </View>
      </MotiPressable>
    </Link>
  );
}
