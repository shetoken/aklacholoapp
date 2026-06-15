import React from 'react';
import { Pressable, View } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import { Screen, AppText, KolkaDivider, KolkaMotif } from '@/components';
import { brand } from '@/theme';

export default function ContactSentScreen() {
  const { name, email } = useLocalSearchParams<{
    name?: string;
    email?: string;
  }>();

  const displayName = name?.trim() || 'friend';
  const displayEmail = email?.trim() || 'your inbox';

  return (
    <>
      <Stack.Screen options={{ title: 'Message sent', headerShown: true }} />
      <Screen scroll edges={['bottom']} contentClassName="pb-2xl">
        <View className="px-xl pt-xl items-center">
          <KolkaMotif svgKey="vine" size={88} />
          <AppText variant="h2" className="mt-lg text-center">
            Thank you, {displayName}
          </AppText>
          <KolkaDivider width={120} />
          <AppText variant="body" className="text-center" style={{ lineHeight: 26 }}>
            Your message is on its way. We'll reply to{' '}
            <AppText variant="body" className="text-brand-marigold">
              {displayEmail}
            </AppText>{' '}
            as soon as we can.
          </AppText>
          <AppText
            variant="caption"
            className="mt-md text-center text-brand-ivory-soft"
            style={{ lineHeight: 22 }}
          >
            Eki shutre bandha — you're part of the thread now.
          </AppText>

          <Link href="/account" asChild>
            <Pressable
              className="rounded-xl py-md px-xl items-center mt-2xl w-full"
              style={{ backgroundColor: brand.marigold }}
            >
              <AppText variant="label" style={{ color: brand.ink }}>
                Back to Account
              </AppText>
            </Pressable>
          </Link>

          <Link href="/(tabs)" asChild>
            <Pressable className="mt-md py-sm">
              <AppText variant="label" className="text-brand-marigold">
                Return to Home
              </AppText>
            </Pressable>
          </Link>
        </View>
      </Screen>
    </>
  );
}
