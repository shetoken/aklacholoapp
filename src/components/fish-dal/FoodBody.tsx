import React from 'react';
import { View } from 'react-native';

import type { FoodBodySection } from '@/types';
import { AppText } from '@/components/ui/Text';
import { KolkaDivider } from '@/components/brand/KolkaDivider';

export function FoodBody({ sections }: { sections: FoodBodySection[] }) {
  return (
    <View className="px-xl">
      {sections.map((section, i) => (
        <View key={section.heading} className="mb-xl">
          <AppText variant="h2" className="mb-md">
            {section.heading}
          </AppText>
          <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
            {section.body}
          </AppText>
          {i < sections.length - 1 ? <KolkaDivider /> : null}
        </View>
      ))}
    </View>
  );
}
