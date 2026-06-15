import React from 'react';
import { Pressable, Share, View } from 'react-native';
import { Link, Stack } from 'expo-router';

import {
  Screen,
  AppText,
  KolkaMotif,
  KolkaDivider,
} from '@/components';
import { useJourney } from '@/context/JourneyProvider';
import { JOURNEY_BONUS_ARTICLE_ID } from '@/services';
import { brand } from '@/theme';

export default function JourneyRewardScreen() {
  const { claimReward, complete, progress } = useJourney();

  const shareCard = async () => {
    await Share.share({
      message:
        'I completed The Journey Through Bengal on AklaCholo — Bengal Explorer. Eki shutre bandha.',
    }).catch(() => {});
  };

  if (!complete) {
    return (
      <Screen edges={['top']}>
        <Stack.Screen options={{ title: 'Reward', headerShown: true }} />
        <View className="flex-1 items-center justify-center px-xl">
          <AppText variant="h3" className="text-center">
            Complete all seven stops to unlock your reward.
          </AppText>
          <Link href="/journey" asChild>
            <Pressable className="mt-lg">
              <AppText variant="label" className="text-brand-marigold">
                Back to the map
              </AppText>
            </Pressable>
          </Link>
        </View>
      </Screen>
    );
  }

  return (
    <Screen scroll edges={['top']} contentClassName="pb-2xl">
      <Stack.Screen options={{ title: 'Bengal Explorer', headerShown: true }} />

      <View className="px-xl pt-xl items-center">
        <View
          className="rounded-2xl p-xl items-center w-full"
          style={{
            backgroundColor: brand.surface,
            borderWidth: 1,
            borderColor: `${brand.marigold}44`,
          }}
        >
          <KolkaMotif svgKey="lotus" size={120} />
          <AppText variant="label" className="text-brand-marigold mt-lg">
            Bengal Explorer
          </AppText>
          <AppText variant="h2" className="mt-sm text-center">
            You walked the full thread
          </AppText>
          <AppText variant="body" className="mt-md text-center">
            Kolka to folklore — you have discovered Bengal stop by stop.
          </AppText>
        </View>

        <KolkaDivider showBindu />

        <AppText variant="h3" className="text-center">
          Your unlocked treat
        </AppText>
        <AppText variant="body" className="mt-sm text-center">
          A hidden story reserved for those who finish the journey.
        </AppText>

        <Link href={`/article/${JOURNEY_BONUS_ARTICLE_ID}`} asChild>
          <Pressable
            className="mt-lg rounded-xl px-lg py-md w-full items-center border border-brand-border bg-brand-surface"
            onPress={() => {
              if (!progress?.rewardClaimed) claimReward();
            }}
          >
            <AppText variant="label" className="text-brand-marigold">
              Read: The Thread That Binds
            </AppText>
          </Pressable>
        </Link>

        <Pressable
          onPress={async () => {
            if (!progress?.rewardClaimed) await claimReward();
            shareCard();
          }}
          className="mt-md rounded-xl px-lg py-md w-full items-center"
          style={{ backgroundColor: brand.marigold }}
        >
          <AppText variant="label" style={{ color: brand.ink }}>
            Share your Bengal Explorer card
          </AppText>
        </Pressable>

        <AppText variant="caption" className="mt-xl text-center text-brand-muted">
          {/* Phase 2 hook — Shop discount / early access lands here. */}
          Shop rewards (discount codes, early access) will unlock here when the
          Shop opens.
        </AppText>
      </View>
    </Screen>
  );
}
