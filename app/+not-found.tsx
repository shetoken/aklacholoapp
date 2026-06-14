import React from 'react';
import { Pressable, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { Screen, AppText, KolkaMotif } from '@/components';

export default function NotFoundScreen() {
  return (
    <Screen edges={['top']}>
      <Stack.Screen options={{ title: 'Not found' }} />
      <View className="flex-1 items-center justify-center px-xl">
        <KolkaMotif svgKey="lotus" size={96} />
        <AppText variant="h2" className="mt-lg text-center">
          This path wandered off
        </AppText>
        <AppText variant="body" className="mt-sm text-center">
          The page you’re looking for isn’t here.
        </AppText>
        <View className="mt-lg">
          <Link href="/" asChild>
            <Pressable>
              <AppText variant="label" className="text-brand-primary">
                Back to home
              </AppText>
            </Pressable>
          </Link>
        </View>
      </View>
    </Screen>
  );
}
