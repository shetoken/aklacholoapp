import React from 'react';
import { Pressable, View } from 'react-native';
import { Link, Stack } from 'expo-router';

import {
  Screen,
  AppText,
  Loading,
  ErrorView,
} from '@/components';
import { JourneyMap } from '@/components/journey/JourneyMap';
import { useJourney } from '@/context/JourneyProvider';
import { brand } from '@/theme';

export default function JourneyScreen() {
  const { nodes, ready, discoveredCount, totalStops, complete, progress, refresh } =
    useJourney();

  if (!ready) return <Loading label="Unfolding the map…" />;
  if (!nodes.length) return <ErrorView onRetry={refresh} />;

  const showRewardCta = complete && progress && !progress.rewardClaimed;

  return (
    <Screen scroll edges={['top']} contentClassName="pb-2xl">
      <Stack.Screen options={{ title: 'Journey Through Bengal', headerShown: true }} />

      <View className="px-xl pt-lg pb-md">
        <AppText variant="label" className="text-brand-marigold mb-xs">
          The Journey Through Bengal
        </AppText>
        <AppText variant="h1">Explore stop by stop</AppText>
        <AppText variant="body" className="mt-sm">
          Follow the thread from kolka to folklore — each stop unlocks as you read
          its story.
        </AppText>
        <View
          className="mt-lg rounded-xl px-md py-sm self-start"
          style={{ backgroundColor: `${brand.marigold}22` }}
        >
          <AppText variant="label" style={{ color: brand.marigold }}>
            {discoveredCount} of {totalStops} discovered
          </AppText>
        </View>
      </View>

      <JourneyMap nodes={nodes} />

      {showRewardCta ? (
        <View className="px-xl pb-xl">
          <Link href="/journey-reward" asChild>
            <Pressable
              className="rounded-xl p-lg items-center"
              style={{ backgroundColor: brand.marigold }}
            >
              <AppText variant="label" style={{ color: brand.ink }}>
                Claim your Bengal Explorer reward
              </AppText>
            </Pressable>
          </Link>
        </View>
      ) : null}
    </Screen>
  );
}
