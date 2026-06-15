import React from 'react';
import { View } from 'react-native';

import type { AttireBodySection } from '@/types';
import { AppText } from '@/components/ui/Text';
import { KolkaDivider } from '@/components/brand/KolkaDivider';
import { brand } from '@/theme';

function isRespectSection(heading: string): boolean {
  const normalized = heading.toLowerCase();
  return normalized.includes('respect') || normalized.includes('heritage, held gently');
}

export function AttireRespectNote({ sections }: { sections: AttireBodySection[] }) {
  const respectSections = sections.filter((section) => isRespectSection(section.heading));
  if (respectSections.length === 0) return null;

  return (
    <View className="px-xl">
      {respectSections.map((section) => (
        <View
          key={section.heading}
          className="rounded-xl p-lg border mb-md"
          style={{ borderColor: brand.border, backgroundColor: brand.surface }}
        >
          <AppText variant="label" className="text-brand-kolka mb-sm">
            {section.heading}
          </AppText>
          <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
            {section.body}
          </AppText>
        </View>
      ))}
    </View>
  );
}

export function AttireBody({ sections }: { sections: AttireBodySection[] }) {
  const mainSections = sections.filter((section) => !isRespectSection(section.heading));

  return (
    <View className="px-xl">
      {mainSections.map((section, i) => (
        <View key={section.heading} className="mb-xl">
          <AppText variant="h2" className="mb-md">
            {section.heading}
          </AppText>
          <AppText variant="bodyLg" style={{ lineHeight: 28 }}>
            {section.body}
          </AppText>
          {i < mainSections.length - 1 ? <KolkaDivider /> : null}
        </View>
      ))}
    </View>
  );
}
