import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import type { BengaliMonth } from '@/types';
import { AppText } from '@/components/ui/Text';
import { brand } from '@/theme';

type MonthCardProps = {
  month: BengaliMonth;
  width?: number;
  compact?: boolean;
};

export function MonthCard({ month, width = 160, compact = false }: MonthCardProps) {
  return (
    <Link href={`/bangabda/month/${month.id}`} asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.98 : 1 };
        }}
        style={{ width }}
      >
        <View
          className="rounded-2xl overflow-hidden border border-brand-border p-md"
          style={{ backgroundColor: brand.surface, minHeight: compact ? 120 : 140 }}
        >
          <AppText variant="caption" className="text-brand-marigold font-serif-italic">
            {month.nameBengali}
          </AppText>
          <AppText variant="title" className="mt-xs">
            {month.name}
          </AppText>
          <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
            {month.gregorianSpan}
          </AppText>
          {!compact ? (
            <AppText
              variant="caption"
              numberOfLines={3}
              className="mt-sm text-brand-ivory-soft"
              style={{ lineHeight: 18 }}
            >
              {month.highlight}
            </AppText>
          ) : null}
        </View>
      </MotiPressable>
    </Link>
  );
}
