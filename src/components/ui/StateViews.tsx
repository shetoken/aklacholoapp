import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AppText } from './Text';
import { brand } from '@/theme';

/** Centered loading spinner for async screens. */
export function Loading({ label }: { label?: string }) {
  return (
    <View className="flex-1 items-center justify-center bg-brand-bg py-4xl">
      <ActivityIndicator color={brand.marigold} size="large" />
      {label ? (
        <AppText variant="caption" className="mt-lg">
          {label}
        </AppText>
      ) : null}
    </View>
  );
}

/** Error state with optional retry. */
export function ErrorView({
  message = 'Something went wrong.',
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <View className="flex-1 items-center justify-center bg-brand-bg px-xl py-4xl">
      <AppText variant="h3" className="text-center">
        {message}
      </AppText>
      {onRetry ? (
        <AppText
          variant="label"
          className="mt-lg text-brand-marigold"
          onPress={onRetry}
        >
          Tap to retry
        </AppText>
      ) : null}
    </View>
  );
}

/** Empty-state placeholder. */
export function EmptyState({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <View className="flex-1 items-center justify-center px-xl py-4xl">
      <AppText variant="h3" className="text-center">
        {title}
      </AppText>
      {subtitle ? (
        <AppText variant="body" className="mt-sm text-center">
          {subtitle}
        </AppText>
      ) : null}
    </View>
  );
}
