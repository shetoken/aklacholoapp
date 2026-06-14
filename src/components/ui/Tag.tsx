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
        active ? 'bg-brand-primary' : 'bg-brand-surface-alt border border-brand-border'
      }`}
    >
      <AppText
        variant="label"
        className={active ? 'text-cream-50' : 'text-brand-ink-soft'}
      >
        {label}
      </AppText>
    </View>
  );
}
