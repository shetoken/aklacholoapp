import React from 'react';
import { ScrollView, View, type ScrollViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PillarHeader } from '@/components/navigation/PillarHeader';
import type { PillarId } from '@/constants/pillars';
import { brand } from '@/theme';

type PillarScreenProps = {
  active: PillarId;
  children: React.ReactNode;
  headerAction?: React.ReactNode;
  onCtaPress?: () => void;
  ctaActive?: boolean;
  /** Stays fixed below the header (e.g. search bar). */
  headerAccessory?: React.ReactNode;
  contentClassName?: string;
} & Pick<ScrollViewProps, 'contentContainerStyle'>;

/** Pillar tab shell — fixed brand header + safe area, scrollable body. */
export function PillarScreen({
  active,
  children,
  headerAction,
  onCtaPress,
  ctaActive,
  headerAccessory,
  contentClassName,
  contentContainerStyle,
}: PillarScreenProps) {
  return (
    <View style={{ flex: 1, backgroundColor: brand.indigo }}>
      <SafeAreaView edges={['top']}>
        <PillarHeader
          active={active}
          headerAction={headerAction}
          onCtaPress={onCtaPress}
          ctaActive={ctaActive}
        />
        {headerAccessory}
      </SafeAreaView>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 32 }, contentContainerStyle]}
        contentContainerClassName={contentClassName}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </View>
  );
}
