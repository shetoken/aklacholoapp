import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';

import { Screen, AppText, KolkaDivider } from '@/components';
import { LEGAL, PRIVACY_SUMMARY } from '@/content/legal';

export default function PrivacyScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Privacy Policy', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-xl">
          <AppText variant="h2">Privacy Policy</AppText>
          <AppText variant="caption" className="mt-xs text-brand-ivory-soft">
            Phase 1 summary — full policy before commerce launches
          </AppText>
          <KolkaDivider width={120} />
          {PRIVACY_SUMMARY.map((paragraph) => (
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
