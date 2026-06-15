import React from 'react';
import { View } from 'react-native';

import { AppText } from '@/components/ui/Text';
import { PLACES_VERIFY_NOTE } from '@/constants/places';
import { brand } from '@/theme';

export function TravelVerifyNote() {
  return (
    <View
      className="mx-xl rounded-xl p-lg border"
      style={{ borderColor: brand.marigold, backgroundColor: brand.surface }}
    >
      <AppText variant="label" className="text-brand-marigold mb-xs">
        Before you go
      </AppText>
      <AppText variant="body" className="text-brand-ivory-soft" style={{ lineHeight: 24 }}>
        {PLACES_VERIFY_NOTE}
      </AppText>
    </View>
  );
}
