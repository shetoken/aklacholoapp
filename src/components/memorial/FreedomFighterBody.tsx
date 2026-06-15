import React from 'react';
import { View } from 'react-native';

import type { FighterBodySection } from '@/types';
import { AppText } from '@/components/ui/Text';
import { KolkaDivider } from '@/components/brand/KolkaDivider';

export function FreedomFighterBody({ sections }: { sections: FighterBodySection[] }) {
  return (
    <View className="px-xl">
      {sections.map((section, i) => (
        <View key={section.id} className="mb-xl">
          <AppText variant="h2" className="mb-md">
            {section.heading}
          </AppText>
          <AppText variant="bodyLg" className="text-brand-ivory-soft" style={{ lineHeight: 28 }}>
            {section.body}
          </AppText>
          {i < sections.length - 1 ? <KolkaDivider showBindu={false} /> : null}
        </View>
      ))}
    </View>
  );
}
