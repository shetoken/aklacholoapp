import React from 'react';
import { View } from 'react-native';
import type { ArticleSection } from '@/types';
import { AppText } from '@/components/ui/Text';
import { Img } from '@/components/ui/Img';
import { KolkaDivider } from '@/components/brand/KolkaDivider';

/**
 * Renders an article's structured sections. Because each section has a stable
 * id, this same data drives both the reader UI and the Phase 1.5 chat retrieval.
 */
export function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <View className="px-xl">
      {sections.map((section, i) => (
        <View key={section.id} className="mb-xl">
          <AppText variant="h2" className="mb-md">
            {section.heading}
          </AppText>

          {section.image ? (
            <Img
              source={section.image}
              radius={16}
              className="mb-md w-full"
              style={{ height: 200 }}
            />
          ) : null}

          <AppText variant="bodyLg">{section.body}</AppText>

          {section.pullQuote ? (
            <View className="border-l-2 border-brand-primary pl-lg my-lg">
              <AppText variant="quote">{section.pullQuote}</AppText>
            </View>
          ) : null}

          {i < sections.length - 1 ? <KolkaDivider /> : null}
        </View>
      ))}
    </View>
  );
}
