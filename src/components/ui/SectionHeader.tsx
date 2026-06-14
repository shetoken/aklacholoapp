import React from 'react';
import { View } from 'react-native';
import { AppText } from './Text';

/** Eyebrow label + serif title used to introduce feed sections. */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <View className="px-xl mb-lg">
      {eyebrow ? (
        <AppText variant="label" className="text-brand-primary mb-xs">
          {eyebrow}
        </AppText>
      ) : null}
      <AppText variant="h2">{title}</AppText>
      {subtitle ? (
        <AppText variant="body" className="mt-xs">
          {subtitle}
        </AppText>
      ) : null}
    </View>
  );
}
