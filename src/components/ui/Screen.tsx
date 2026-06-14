import React from 'react';
import { ScrollView, View, type ScrollViewProps } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';
import { colors } from '@/theme';

/**
 * Standard screen container with the brand background and safe-area handling.
 * `scroll` wraps children in a ScrollView (the common case for feeds).
 *
 * SafeAreaView is a third-party component, so we style it via `style` (NativeWind
 * className auto-maps only on core RN components). Content padding is applied via
 * `contentContainerStyle` on the inner ScrollView for the same reason.
 */
export function Screen({
  children,
  scroll = false,
  edges = ['top'],
  contentClassName = '',
  ...scrollProps
}: {
  children: React.ReactNode;
  scroll?: boolean;
  edges?: Edge[];
  /** Tailwind classes applied to the scroll content / inner view. */
  contentClassName?: string;
} & ScrollViewProps) {
  return (
    <SafeAreaView
      edges={edges}
      style={{ flex: 1, backgroundColor: colors.cream[200] }}
    >
      {scroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32 }}
          contentContainerClassName={contentClassName}
          {...scrollProps}
        >
          {children}
        </ScrollView>
      ) : (
        <View className={`flex-1 ${contentClassName}`}>{children}</View>
      )}
    </SafeAreaView>
  );
}
