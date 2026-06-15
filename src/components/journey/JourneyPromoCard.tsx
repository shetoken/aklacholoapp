import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

import { AppText } from '@/components/ui/Text';
import { ChevronRight } from '@/components/ui/icons';
import { useJourney } from '@/context/JourneyProvider';
import { brand } from '@/theme';

/** Journey Through Bengal — featured card for Home and Experience. */
export function JourneyPromoCard({
  variant = 'compact',
}: {
  /** `compact` for Home; `detailed` for Experience guided-journey section. */
  variant?: 'compact' | 'detailed';
}) {
  const { ready, discoveredCount, totalStops } = useJourney();

  if (!ready) return null;

  const ctaLabel =
    discoveredCount > 0 ? 'Continue the journey' : 'Begin the journey';

  const content = (
    <View
      className={`rounded-xl bg-brand-surface border border-brand-border ${
        variant === 'detailed' ? 'p-xl' : 'p-lg'
      }`}
      style={variant === 'detailed' ? { borderColor: `${brand.marigold}44` } : undefined}
    >
      {variant !== 'detailed' ? (
        <AppText variant="label" className="text-brand-marigold mb-xs">
          Journey
        </AppText>
      ) : null}

      {variant === 'detailed' ? (
        <View className="flex-row items-start justify-between gap-sm">
          <AppText variant="h3" className="text-brand-ivory flex-1">
            The Journey Through Bengal
          </AppText>
          <AppText
            variant="label"
            className="text-brand-marigold shrink-0 pt-1"
            numberOfLines={1}
          >
            {discoveredCount} of {totalStops} stops
          </AppText>
        </View>
      ) : (
        <AppText variant="h3" className="text-brand-ivory">
          The Journey Through Bengal
        </AppText>
      )}

      {variant === 'detailed' ? (
        <View className="flex-row items-center justify-between gap-sm mt-xs">
          <AppText
            variant="caption"
            numberOfLines={1}
            className="text-brand-ivory-soft flex-1"
          >
            Guided Cultural Exploration
          </AppText>
          <View className="flex-row items-center shrink-0">
            <AppText variant="label" className="text-brand-marigold mr-xs">
              {ctaLabel}
            </AppText>
            <ChevronRight color={brand.marigold} size={18} />
          </View>
        </View>
      ) : (
        <AppText variant="caption" className="text-brand-ivory-soft mt-xs">
          {discoveredCount} of {totalStops} stops discovered — tap to continue
        </AppText>
      )}
    </View>
  );

  return (
    <Link href="/journey" asChild>
      <MotiPressable
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.98 : 1 };
        }}
      >
        {content}
      </MotiPressable>
    </Link>
  );
}
