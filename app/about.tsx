import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';

import { Screen, AppText, KolkaDivider } from '@/components';
import { ABOUT_COPY, LEGAL } from '@/content/legal';
import { brand } from '@/theme';

export default function AboutScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'About', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-xl">
          <AppText variant="h2">{ABOUT_COPY.lead}</AppText>
          <KolkaDivider width={120} />
          <AppText variant="body" style={{ lineHeight: 26 }}>
            {ABOUT_COPY.body}
          </AppText>
          <AppText variant="body" className="mt-lg" style={{ lineHeight: 26 }}>
            {ABOUT_COPY.mission}
          </AppText>
          <AppText
            variant="caption"
            className="mt-xl text-center text-brand-ivory-soft"
          >
            © {LEGAL.copyrightYear} {LEGAL.company}
          </AppText>
        </View>
      </Screen>
    </>
  );
}
