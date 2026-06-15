import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';

import { Screen, AppText, KolkaDivider } from '@/components';
import { LEGAL, TERMS_SUMMARY } from '@/content/legal';

export default function TermsScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Terms of Use', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-xl">
          <AppText variant="h2">Terms of Use</AppText>
          <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
            Phase 1 summary — full terms before transactions launch
          </AppText>
          <KolkaDivider width={120} />
          {TERMS_SUMMARY.map((paragraph) => (
            <AppText
              key={paragraph}
              variant="body"
              className="mb-md"
              style={{ lineHeight: 26 }}
            >
              {paragraph}
            </AppText>
          ))}
          <AppText variant="caption" className="mt-lg text-brand-ivory-soft">
            Questions? {LEGAL.contactEmail}
          </AppText>
        </View>
      </Screen>
    </>
  );
}
