import React from 'react';
import { Pressable, View } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';

import { Screen, AppText, KolkaMotif } from '@/components';
import { useJourney } from '@/context/JourneyProvider';
import { brand } from '@/theme';

export default function JourneyOnboardingScreen() {
  const router = useRouter();
  const { startOnboarding, skipOnboarding } = useJourney();

  const begin = async () => {
    await startOnboarding();
    router.replace('/journey');
  };

  const skip = async () => {
    await skipOnboarding();
    router.back();
  };

  return (
    <Screen scroll edges={['top', 'bottom']} contentClassName="pb-2xl">
      <Stack.Screen options={{ title: '', headerShown: true }} />

      <View className="px-xl pt-xl items-center">
        <KolkaMotif svgKey="classic" size={100} />
        <AppText variant="h1" className="mt-lg text-center">
          The Journey Through Bengal
        </AppText>
        <AppText variant="body" className="mt-md text-center" style={{ lineHeight: 28 }}>
          Walk a curated path through Bengal’s art, craft, food, music, and stories.
          Each stop unlocks when you read it — one thread at a time.
        </AppText>
        <AppText variant="quote" className="mt-lg text-center">
          Eki shutre bandha.
        </AppText>
      </View>

      <View className="px-xl mt-2xl gap-md">
        <Pressable
          onPress={begin}
          className="rounded-xl py-md items-center"
          style={{ backgroundColor: brand.marigold }}
        >
          <AppText variant="label" style={{ color: brand.ink }}>
            Begin the journey
          </AppText>
        </Pressable>

        <Pressable onPress={skip} className="py-md items-center">
          <AppText variant="label" className="text-brand-ivory-soft">
            Skip — explore on my own
          </AppText>
        </Pressable>
      </View>
    </Screen>
  );
}
