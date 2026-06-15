import React from 'react';
import { View } from 'react-native';

import { AppText } from '@/components/ui/Text';
import { APP } from '@/constants/app';
import { BRAND_INTRO } from '@/content/brand';
import { brand } from '@/theme';

/** Pinned Home header — brand name, tagline, and Brand.md summary. */
export function HomeBrandHeader() {
  return (
    <View
      className="px-xl pt-md pb-lg"
      style={{
        backgroundColor: brand.indigo,
        borderBottomWidth: 1,
        borderBottomColor: `${brand.ivory}33`,
      }}
    >
      <AppText variant="h1" className="text-brand-ivory">
        {APP.name}
      </AppText>
      <AppText
        variant="quote"
        className="mt-xs text-brand-marigold font-serif-italic"
        style={{
          textShadowColor: brand.marigold,
          textShadowRadius: 12,
          textShadowOffset: { width: 0, height: 0 },
        }}
      >
        {APP.tagline}
      </AppText>
      <AppText
        variant="body"
        className="mt-sm text-brand-ivory-soft leading-relaxed"
        numberOfLines={3}
      >
        {BRAND_INTRO.summary}
      </AppText>
    </View>
  );
}
