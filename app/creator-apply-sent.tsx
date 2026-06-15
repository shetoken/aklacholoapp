import React from 'react';
import { Pressable, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import { Screen, AppText, KolkaDivider, KolkaMotif } from '@/components';
import { CREATOR_ONBOARDING } from '@/content/creator-onboarding';
import { brand } from '@/theme';

export default function CreatorApplySentScreen() {
  const { name } = useLocalSearchParams<{ name?: string }>();
  const greeting = name?.trim() ? `Thank you, ${name.trim()}.` : 'Thank you.';

  return (
    <>
      <Stack.Screen options={{ title: 'Application received', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-xl items-center">
          <KolkaMotif svgKey="vine" size={88} />
          <AppText variant="h2" className="mt-lg text-center">
            {CREATOR_ONBOARDING.sentTitle}
          </AppText>
          <AppText variant="body" className="mt-md text-center" style={{ lineHeight: 26 }}>
            {greeting} {CREATOR_ONBOARDING.sentLead}
          </AppText>
          <KolkaDivider width={100} />
          <Link href="/(tabs)/hire" asChild>
            <Pressable
              className="w-full rounded-xl py-md items-center"
              style={{ backgroundColor: brand.marigold }}
            >
              <AppText variant="label" style={{ color: brand.ink }}>
                Browse vetted creators
              </AppText>
            </Pressable>
          </Link>
          <Link href="/(tabs)" asChild>
            <Pressable className="mt-md py-md items-center">
              <AppText variant="label" className="text-brand-marigold">
                Back to home
              </AppText>
            </Pressable>
          </Link>
        </View>
      </Screen>
    </>
  );
}
