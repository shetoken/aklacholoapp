import React from 'react';
import { View } from 'react-native';
import { AppText } from './Text';

/** Small rounded pill for categories, disciplines, regions. */
export function Tag({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <View
      className={`rounded-full px-md py-xs ${
        active
          ? 'bg-brand-marigold'
          : 'bg-brand-surface border border-brand-border'
      }`}
    >
      <AppText
        variant="label"
        className={active ? 'text-brand-ink' : 'text-brand-ivory-soft'}
      >
        {label}
      </AppText>
    </View>
  );
}
